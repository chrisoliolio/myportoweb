import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Texarium ERP | Christian Oliver",
  description: "Odoo 18 Community case studies covering approval governance, company and branch controls, custom workspace design, finance and inventory.",
};

export default function TexariumPage() {
  return <><Navbar /><main className="portfolio-document min-h-screen px-6 py-12 lg:px-8"><div className="mx-auto max-w-6xl">
    <Link href="/" className="text-indigo-600">← Back to portfolio</Link>
    <p className="mt-10 font-mono text-sm uppercase tracking-widest text-indigo-600">Personal Project · Odoo 18 Community</p>
    <h1 className="mt-4 text-5xl font-semibold tracking-[-.045em]">Texarium ERP</h1>
    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">A personal ERP project exploring the business rules connecting purchasing, inventory, approvals and finance. Each case study explains the problem, my contribution, the implementation and its validation scope.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {[['Workflow governance', 'Approver pools, rejection feedback and linked document revisions.'], ['Access boundaries', 'Company, Branch and Warehouse permissions with a clear working context.'], ['Connected operations', 'Purchase, inventory and finance workflows built around native Odoo records.']].map(([title, text]) => <div key={title} className="rounded-xl border border-slate-200 p-5"><h2 className="text-lg font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
    </div>
    <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">The examples use fictional local demo data. Screenshots identify their version or capture period, and validation results describe the scope checked. These are personal project examples, separate from my professional Odoo 14 contributions.</p>
    <div className="mt-10 grid gap-6 md:grid-cols-2">{projects.filter(project => project.featured).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    <div className="mt-12 flex flex-wrap gap-4"><Link href="/#contact" className="rounded-full bg-indigo-600 px-5 py-3 font-semibold text-white">Discuss a role or project →</Link><a href="/cv.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-5 py-3">View resume ↗</a></div>
  </div></main></>;
}
