import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const errors = [];
try {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  page.on('pageerror', error => errors.push(error.message));
  const paths = new Set(['/', '/projects', '/texarium']);
  await page.goto(base);
  for (const href of await page.locator('a[href^="/projects/"]').evaluateAll(links => links.map(link => link.getAttribute('href')))) paths.add(href);
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      const response = await page.goto(`${base}${path}`);
      assert.equal(response.status(), 200, path);
      await page.locator('h1').waitFor();
      assert.equal(await page.locator('h1').count(), 1, `${path}: one page title`);
      assert.equal(await page.locator('video').count(), 0, `${path}: no unreviewed video`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      assert.equal(overflow, false, `${path}: horizontal overflow at ${width}px`);
      for (const img of await page.locator('img').all()) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate(image => image.decode());
      }
    }
  }
  await page.goto(base);
  for (const title of ['RMA & return management', 'Human Resources & payroll reports', 'Construction & job order reports']) {
    const item = page.locator('#contributions details').filter({ has: page.locator('summary').filter({ hasText: title }) });
    assert.equal(await item.getAttribute('open'), '', `${title}: visible contribution details`);
  }
  for (const name of ['Finance', 'Inventory', 'Workflows', 'All work']) {
    await page.getByRole('button', { name, exact: true }).click();
    assert.ok(await page.locator('.pf-project').count() > 0, `Empty ${name} filter`);
  }
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.locator('#mobile-menu').getByRole('link', { name: 'Projects', exact: true }).click();
  assert.equal(await page.locator('#mobile-menu').count(), 0);
  const checkedLinks = new Set();
  for (const path of paths) {
    await page.goto(`${base}${path}`);
    const hrefs = await page.locator('a[href]').evaluateAll(links => links.map(link => link.getAttribute('href')));
    for (const href of new Set(hrefs.filter(href => href.startsWith('/') && !href.startsWith('//')))) {
      if (checkedLinks.has(href)) continue;
      checkedLinks.add(href);
      const response = await page.request.get(`${base}${href.split('#')[0]}`);
      assert.ok(response.ok(), `${path}: broken link ${href} (${response.status()})`);
      if (href.includes('#')) {
        const target = await browser.newPage();
        await target.goto(`${base}${href}`);
        assert.equal(await target.locator(`[id="${href.split('#')[1]}"]`).count(), 1, `Missing anchor ${href}`);
        await target.close();
      }
    }
  }
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log(`PASS: ${paths.size} routes, four viewport widths, images, internal links, project filters, mobile navigation, no video players or runtime errors.`);
} finally {
  await browser.close();
}
