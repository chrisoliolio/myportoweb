import { education } from "@/data/professional";

export function Education() {
  return <section className="border-y border-slate-900/10 bg-[#f6f7fb] py-16 sm:py-20" aria-labelledby="education-title"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="font-mono text-xs font-bold tracking-[0.16em] text-indigo-600 uppercase">Education</p><h2 id="education-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900">Academic background.</h2></div><div className="grid gap-5 sm:grid-cols-3 sm:gap-8">{education.map((item) => <article key={item.institution}><p className="text-lg font-semibold text-slate-900">{item.institution}</p><p className="mt-1 text-sm text-slate-900/65">{item.degree}</p><p className="mt-2 font-mono text-xs font-bold tracking-[0.12em] text-indigo-600">{item.period}</p></article>)}</div></div></section>;
}
