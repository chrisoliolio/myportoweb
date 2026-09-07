import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

interface ProjectsProps {
  standalone?: boolean;
}

export function Projects({ standalone = false }: ProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id={standalone ? undefined : "projects"} className="bg-[#f7f8f5] py-20 sm:py-28" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="font-mono text-xs font-bold tracking-[0.16em] text-emerald-700 uppercase">Featured Projects</p><Heading id="projects-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-emerald-950 sm:text-5xl">ERP work built around complex business rules.</Heading></div>
          <p className="max-w-sm text-sm leading-6 text-emerald-950/60">Six anonymized project summaries representing Odoo customization across finance, operations, workflows, and multi-company processes.</p>
        </div>
        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:gap-6">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
