import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";

interface ProjectPageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-emerald-950" aria-label={project.title}>
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <Link href="/#projects" className="font-mono text-xs font-bold tracking-[0.13em] text-emerald-700 uppercase">← Back to featured work</Link>
      </div>

      <section className="border-y border-emerald-950/10 bg-emerald-950 py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.16em] text-lime-300 uppercase">{project.category}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white/85">{tag}</span>)}</div>
          </div>
          <ProjectVisual index={projectIndex} />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <section className="grid gap-9 border-b border-emerald-950/10 pb-14 lg:grid-cols-[.78fr_1.22fr]" aria-labelledby="overview-title">
          <div><SectionLabel number="01" title="Overview" /><h2 id="overview-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">The project context.</h2></div>
          <div className="space-y-6"><p className="text-lg leading-8 text-emerald-950/78">{project.overview}</p><div className="rounded-2xl border border-emerald-950/10 bg-white p-6"><p className="font-mono text-xs font-bold tracking-[0.14em] text-emerald-700 uppercase">Business problem</p><p className="mt-3 leading-7 text-emerald-950/70">{project.businessProblem}</p></div></div>
        </section>

        <section className="grid gap-9 border-b border-emerald-950/10 py-14 lg:grid-cols-[.78fr_1.22fr]" aria-labelledby="requirements-title">
          <div><SectionLabel number="02" title="Key requirements" /><h2 id="requirements-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">What the workflow needed to handle.</h2></div>
          <ul className="grid gap-3 sm:grid-cols-2">{project.requirements.map((requirement, index) => <li key={requirement} className="flex gap-3 rounded-xl border border-emerald-950/10 bg-white p-4 text-sm leading-6 text-emerald-950/75"><span className="font-mono text-xs font-bold text-emerald-700">0{index + 1}</span>{requirement}</li>)}</ul>
        </section>

        <section className="grid gap-5 border-b border-emerald-950/10 py-14 lg:grid-cols-2" aria-label="Role and solution">
          <CasePanel eyebrow="03 / My role" title="Contribution to the customization" items={project.role} />
          <CasePanel eyebrow="04 / Solution" title="The Odoo approach" items={project.solution} tone="dark" />
        </section>

        <section className="grid gap-9 border-b border-emerald-950/10 py-14 lg:grid-cols-[.78fr_1.22fr]" aria-labelledby="technical-title">
          <div><SectionLabel number="05" title="Technical implementation" /><h2 id="technical-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Relevant technical areas.</h2></div>
          <div className="flex flex-wrap content-start gap-2">{project.technicalAreas.map((area) => <span key={area} className="rounded-md border border-emerald-950/10 bg-white px-3 py-2 font-mono text-xs text-emerald-950/75">{area}</span>)}</div>
        </section>

        <section className="grid gap-5 border-b border-emerald-950/10 py-14 lg:grid-cols-2" aria-label="Challenges and impact">
          <CasePanel eyebrow="06 / Challenges" title="Technical considerations" items={project.challenges} />
          <CasePanel eyebrow="07 / Result & impact" title="Qualitative outcomes" items={project.impact} tone="lime" />
        </section>

        <section className="pt-14" aria-labelledby="technologies-title">
          <SectionLabel number="08" title="Technologies & modules" />
          <h2 id="technologies-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Technology focus.</h2>
          <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white">{tag}</span>)}</div>
          <Link href="/#projects" className="mt-12 inline-flex rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">Back to Projects</Link>
        </section>
      </div>
    </main>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return <p className="font-mono text-xs font-bold tracking-[0.16em] text-emerald-700 uppercase">{number} / {title}</p>;
}

function CasePanel({ eyebrow, title, items, tone = "light" }: { eyebrow: string; title: string; items: string[]; tone?: "light" | "dark" | "lime" }) {
  const toneClass = tone === "dark" ? "border-emerald-950 bg-emerald-950 text-white" : tone === "lime" ? "border-lime-300 bg-lime-200 text-emerald-950" : "border-emerald-950/10 bg-white text-emerald-950";
  const eyebrowClass = tone === "dark" ? "text-lime-300" : "text-emerald-700";
  const textClass = tone === "dark" ? "text-white/80" : "text-emerald-950/75";

  return <article className={`rounded-2xl border p-6 sm:p-8 ${toneClass}`}><p className={`font-mono text-xs font-bold tracking-[0.14em] uppercase ${eyebrowClass}`}>{eyebrow}</p><h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><ul className={`mt-6 space-y-4 text-sm leading-6 ${textClass}`}>{items.map((item) => <li key={item} className="flex gap-3"><span className={`mt-2 size-1.5 shrink-0 rounded-full ${tone === "dark" ? "bg-lime-300" : "bg-emerald-700"}`} />{item}</li>)}</ul></article>;
}
