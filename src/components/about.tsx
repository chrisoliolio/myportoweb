import { profile } from "@/data/profile";

const strengths = ["Texarium ERP on Odoo 18 Community", "Cross-module business workflows", "Maintainable module architecture", "Complex ERP workflow debugging"];

export function About() {
  return (
    <section id="about" className="border-t border-slate-900/10 bg-white py-20 sm:py-28" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div><p className="font-mono text-xs font-bold tracking-[0.16em] text-indigo-600 uppercase">About</p><h2 id="about-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl">Built for the details behind the operation.</h2></div>
        <div><p className="max-w-2xl text-lg leading-8 text-slate-900/75">I build Texarium on Odoo 18 Community to turn business requirements into maintainable ERP solutions. That includes connecting Purchase, Inventory, Sales, and Accounting flows, as well as investigating the edge cases that make enterprise workflows complex.</p><p className="mt-5 max-w-2xl text-base leading-7 text-slate-900/65">The focus is practical: understand the operational rule, model it clearly, and build a solution that supports the people using it. {profile.availability}.</p><ul className="mt-9 grid gap-x-8 gap-y-4 border-t border-slate-900/10 pt-7 sm:grid-cols-2">{strengths.map((strength) => <li key={strength} className="flex items-start gap-3 text-sm font-medium text-slate-900"><span className="mt-1.5 size-2 shrink-0 rounded-full bg-indigo-500" />{strength}</li>)}</ul></div>
      </div>
    </section>
  );
}
