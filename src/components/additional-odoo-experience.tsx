import { additionalOdooExperience } from "@/data/professional";

export function AdditionalOdooExperience() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="additional-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-bold tracking-[0.16em] text-indigo-600 uppercase">Additional Odoo experience</p>
          <h2 id="additional-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">Supporting work across the Odoo ecosystem.</h2>
          <p className="mt-5 text-base leading-7 text-slate-700">Professional contributions across business workflows, reporting, and technical maintenance, alongside the Texarium Odoo 18 personal project.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {additionalOdooExperience.map((group) => (
            <article key={group.title} className="min-w-0 rounded-2xl border border-slate-900/10 bg-[#f6f7fb] p-6 sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item} className="max-w-full break-words rounded-md border border-slate-900/10 bg-white px-3 py-2 text-sm font-medium leading-6 text-slate-700">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
