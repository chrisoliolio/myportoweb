import { Projects } from "@/components/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return <main aria-label="Featured projects"><div className="mx-auto max-w-6xl px-6 pt-8 lg:px-8"><Link href="/#projects" className="font-mono text-xs font-bold tracking-[0.12em] text-indigo-600 uppercase">← Back to portfolio</Link></div><Projects standalone /></main>;
}
