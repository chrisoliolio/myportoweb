import Image from "next/image";
import type { Project } from "@/types/portfolio";
import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-900/10 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-indigo-600/25 hover:shadow-xl hover:shadow-slate-900/8 sm:p-5">
      {project.video ? <Link href={`/projects/${project.slug}`} className="relative block overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
        <Image src={`/videos/${project.video}.${project.video === "08-texorium-interactive-approval" ? "png" : "jpg"}`} alt={`${project.title} application preview`} width={960} height={540} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <span className="absolute bottom-3 right-3 rounded-lg bg-slate-950/85 px-3 py-1.5 text-xs font-medium text-white">View implementation ↗</span>
      </Link> : <ProjectVisual index={index} />}
      <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
        <span className="mb-3 self-start rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Personal Project · Odoo 18</span>
        <p className="font-mono text-xs font-bold tracking-[0.13em] text-indigo-600 uppercase">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-900">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-slate-900/65">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md bg-slate-950/5 px-2.5 py-1.5 text-xs font-medium text-slate-900/75">{tag}</span>)}</div>
        <Link href={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-500">View Case Study <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
