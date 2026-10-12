import { services } from "@/data/services";

const serviceMarks = ["⌘", "<>", "→", "▦", "±", "? "];

export function Services() {
  return (
    <section id="services" className="border-y border-slate-900/10 bg-white py-20 sm:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl"><p className="font-mono text-xs font-bold tracking-[0.16em] text-indigo-600 uppercase">Services</p><h2 id="services-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl">Practical Odoo support for business workflows.</h2><p className="mt-5 text-base leading-7 text-slate-900/65">Focused services for custom modules, operational workflows, inventory, accounting, and Odoo troubleshooting.</p></div>
        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <article key={service.slug} className="group rounded-2xl border border-slate-900/10 bg-[#f6f7fb] p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-600/25 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"><span className="grid size-10 place-items-center rounded-xl bg-slate-950 font-mono text-sm font-bold text-violet-300">{serviceMarks[index]}</span><h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-900">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-900/65">{service.description}</p></article>)}</div>
      </div>
    </section>
  );
}
