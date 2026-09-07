import type { Project } from "@/types/portfolio";
import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-emerald-950/10 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-emerald-900/25 hover:shadow-xl hover:shadow-emerald-950/8 sm:p-5">
      <ProjectVisual index={index} />
      <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
        <p className="font-mono text-xs font-bold tracking-[0.13em] text-emerald-700 uppercase">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-emerald-950">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-emerald-950/65">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md bg-emerald-950/5 px-2.5 py-1.5 text-xs font-medium text-emerald-950/75">{tag}</span>)}</div>
        <Link href={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-600">View Case Study <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
