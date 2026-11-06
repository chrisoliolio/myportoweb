"use client";

import { useEffect, type RefObject } from "react";

export function usePortfolioMotion(root: RefObject<HTMLElement | null>, contentKey: string) {
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)");
    let release = () => {};
    const configure = () => {
      release();
      if (!preference.matches) return;
      const cleanups = Array.from(page.querySelectorAll<HTMLElement>(
        ".pf-flow-motion, .pf-project, .pf-actions .pf-button"
      )).map(element => {
        let frame = 0;
        let bounds: DOMRect | null = null;
        let position = { x: 0, y: 0 };
        const button = element.matches(".pf-button");
        const reset = () => {
          window.cancelAnimationFrame(frame);
          frame = 0;
          bounds = null;
          element.classList.remove("pf-pointer-active");
          for (const property of ["--motion-x", "--motion-y", "--magnet-x", "--magnet-y", "--shine-x", "--shine-y"]) {
            element.style.removeProperty(property);
          }
        };
        const enter = (event: PointerEvent) => {
          if (event.pointerType !== "mouse") return;
          bounds = element.getBoundingClientRect();
          element.classList.add("pf-pointer-active");
        };
        const move = (event: PointerEvent) => {
          if (!bounds || event.pointerType !== "mouse") return;
          position = { x: event.clientX, y: event.clientY };
          if (frame) return;
          frame = window.requestAnimationFrame(() => {
            frame = 0;
            if (!bounds) return;
            const x = Math.max(-1, Math.min(1, ((position.x - bounds.left) / bounds.width - 0.5) * 2));
            const y = Math.max(-1, Math.min(1, ((position.y - bounds.top) / bounds.height - 0.5) * 2));
            if (button) {
              element.style.setProperty("--magnet-x", `${x * 5}px`);
              element.style.setProperty("--magnet-y", `${y * 4}px`);
            } else {
              element.style.setProperty("--motion-x", `${-y * 3.5}deg`);
              element.style.setProperty("--motion-y", `${x * 4.5}deg`);
              element.style.setProperty("--shine-x", `${(x + 1) * 50}%`);
              element.style.setProperty("--shine-y", `${(y + 1) * 50}%`);
            }
          });
        };
        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", reset);
        element.addEventListener("pointercancel", reset);
        window.addEventListener("scroll", reset, { passive: true });
        window.addEventListener("resize", reset);
        return () => {
          reset();
          element.removeEventListener("pointerenter", enter);
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", reset);
          element.removeEventListener("pointercancel", reset);
          window.removeEventListener("scroll", reset);
          window.removeEventListener("resize", reset);
        };
      });
      release = () => cleanups.forEach(cleanup => cleanup());
    };
    configure();
    preference.addEventListener("change", configure);
    return () => { release(); preference.removeEventListener("change", configure); };
  }, [root, contentKey]);

  useEffect(() => {
    const page = root.current;
    if (!page) return;
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const length = document.documentElement.scrollHeight - window.innerHeight;
        page.style.setProperty("--pf-scroll", String(length > 0 ? Math.max(0, Math.min(1, window.scrollY / length)) : 0));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(page);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [root]);
}
