import { skillGroups } from "@/data/skills";

const groupIcons = ["⌘", "◫", "↗"];

export function Skills() {
  return (
    <section id="skills" className="bg-[#f6f7fb] py-20 sm:py-28" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-bold tracking-[0.16em] text-indigo-600 uppercase">Skills</p>
          <h2 id="skills-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl">Technical depth, grounded in ERP work.</h2>
          <p className="mt-5 text-base leading-7 text-slate-900/65">A focused toolkit for developing and maintaining business-critical Odoo workflows.</p>
        </div>

        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="group rounded-2xl border border-slate-900/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-600/20 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-950 font-mono text-base text-violet-300">{groupIcons[index]}</span>
                <span className="font-mono text-xs text-slate-900/35">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="rounded-md bg-slate-950/5 px-2.5 py-1.5 text-sm font-medium text-slate-900/75">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
