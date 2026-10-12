import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return <section id="home" className="hero-grid relative overflow-hidden bg-slate-950 text-white" aria-labelledby="hero-title">
    <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:py-28">
      <div>
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 font-mono text-xs text-slate-300"><span className="size-2 rounded-full bg-teal-400" />Available for freelance opportunities</p>
        <p className="font-mono text-sm text-violet-300">Hello, I&apos;m Christian Oliver.</p>
        <h1 id="hero-title" className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-6xl lg:text-7xl">Turning business logic into <span className="text-violet-300">working software.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">Odoo / ERP developer building connected workflows, custom modules and tools that make complex operations easier to manage.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="#projects" className="rounded-xl bg-indigo-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-400">Explore my work ↗</Link>
          <Link href="/texorium" className="rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10">Watch product videos ▷</Link>
          <Link href="/cv.pdf" className="px-2 py-3.5 text-sm font-medium text-slate-400 transition hover:text-white">Download CV ↓</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 font-mono text-xs text-slate-400"><span>Python</span><span>PostgreSQL</span><span>Odoo 18</span><span>OWL / JavaScript</span></div>
      </div>
      <div className="relative min-w-0">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#111827] shadow-2xl shadow-indigo-950/40">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4"><span className="size-2.5 rounded-full bg-rose-400/80" /><span className="size-2.5 rounded-full bg-amber-300/80" /><span className="size-2.5 rounded-full bg-teal-400/80" /><span className="ml-3 font-mono text-xs text-slate-500">developer.py</span></div>
          <div className="overflow-x-auto p-6 font-mono text-sm leading-8 sm:p-8">
            <p className="text-slate-500"># Built around real business needs</p>
            <p><span className="text-violet-300">class</span> <span className="text-sky-300">ERPDeveloper</span>:</p>
            <div className="ml-5 text-slate-300"><p>name = <span className="text-teal-300">&quot;Christian Oliver&quot;</span></p><p>platform = <span className="text-teal-300">&quot;Odoo 18 Community&quot;</span></p><p>project = <span className="text-teal-300">&quot;Texarium ERP&quot;</span></p><p className="mt-4 text-slate-500"># From request to reconciliation</p><p>focus = [</p><div className="ml-5 text-amber-200"><p>&quot;Approval workflows&quot;,</p><p>&quot;Inventory &amp; finance&quot;,</p><p>&quot;Reporting &amp; integrations&quot;</p></div><p>]</p></div>
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 bg-white/[.025] px-6 py-4"><Image src="/profil.jpg" alt="Christian Oliver" width={42} height={42} className="size-10 rounded-full object-cover" /><div><p className="text-sm font-medium">Christian Oliver</p><p className="text-xs text-slate-500">Jakarta, Indonesia · Odoo / ERP Developer</p></div></div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">{[["01", "Understand"], ["02", "Build"], ["03", "Validate"]].map(([n,label])=><div key={n} className="rounded-xl border border-white/10 bg-white/[.03] px-2 py-4"><span className="font-mono text-xs text-violet-300">{n}</span><p className="mt-1 text-xs text-slate-400">{label}</p></div>)}</div>
      </div>
    </div>
  </section>;
}
