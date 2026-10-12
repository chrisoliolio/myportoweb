import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-y border-slate-900/10 bg-slate-950 py-20 text-white sm:py-28" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">Experience</p>
            <h2 id="experience-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Professional experience in Odoo and enterprise workflows.</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-white/65">Odoo development roles are presented first, followed by supporting professional experience.</p>
          </div>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.role}`} className="rounded-2xl border border-white/12 bg-white/5 p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-6">
                  <div><p className="font-mono text-xs font-bold tracking-[0.14em] text-violet-300 uppercase">{experience.period}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">{experience.role}</h3><p className="mt-1 text-sm text-white/65">{experience.company} · {experience.location}</p></div>
                  {experience.technologies.includes("Odoo 14") && <span className="rounded-full border border-violet-300/25 px-3 py-1.5 text-xs font-semibold text-violet-200">Odoo 14</span>}
                </div>
                <p className="mt-6 text-base leading-7 text-white/72">{experience.description}</p>
                {experience.highlights.length > 0 && <ul className="mt-7 space-y-4">{experience.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-white/82"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" />{highlight}</li>)}</ul>}
                {experience.technologies.length > 0 && <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">{experience.technologies.map((technology) => <span key={technology} className="rounded-md bg-white/8 px-2.5 py-1.5 font-mono text-xs text-white/75">{technology}</span>)}</div>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
