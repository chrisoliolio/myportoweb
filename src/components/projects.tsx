import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

interface ProjectsProps {
  standalone?: boolean;
}

export function Projects({ standalone = false }: ProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id={standalone ? undefined : "projects"} className="bg-[#f6f7fb] py-20 sm:py-28" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="font-mono text-xs font-bold tracking-[0.16em] text-indigo-600 uppercase">Featured Projects</p><Heading id="projects-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl">ERP work built around complex business rules.</Heading></div>
          <p className="max-w-sm text-sm leading-6 text-slate-900/60">Six case studies from Texarium ERP, built on Odoo 18 Community, covering finance, inventory, reporting, approvals, dashboards and multi-company budgets.</p>
        </div>
        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:gap-6">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
