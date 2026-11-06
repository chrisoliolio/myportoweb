import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import Link from "next/link";

export const metadata: Metadata = { title: "Odoo ERP Case Studies | Christian Oliver", description: "Explore Texarium ERP case studies: approvals, company and branch controls, finance, inventory, reporting and workspace design." };

export default function ProjectsPage() {
  return <><Navbar /><main className="portfolio-document min-h-screen" aria-label="Featured projects"><div className="mx-auto max-w-6xl px-6 pt-8 lg:px-8"><Link href="/#projects" className="font-mono text-xs font-bold tracking-[0.12em] text-indigo-600 uppercase">← Back to portfolio</Link></div><Projects standalone /></main></>;
}
