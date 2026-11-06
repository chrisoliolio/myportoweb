"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkflowExplorer } from "@/components/workflow-explorer";
import { usePortfolioMotion } from "@/components/use-portfolio-motion";
import type { CSSProperties } from "react";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";
import { additionalOdooExperience, education } from "@/data/professional";

const journey = [
  { year: "2021", label: "Engineering roots", title: "From product design to software.", company: experiences[2].company, period: experiences[2].period, text: experiences[2].description, details: ["An engineering background that shaped how I approach requirements, constraints, and practical solutions."], tags: ["Research & development", "Product design"] },
  { year: "2021–24", label: "Building with Odoo", title: "Turning requirements into ERP workflows.", company: experiences[1].company, period: experiences[1].period, text: experiences[1].description, details: experiences[1].highlights, tags: experiences[1].technologies },
  { year: "2024–now", label: "Professional experience", title: "Working through real business complexity.", company: experiences[0].company, period: experiences[0].period, text: experiences[0].description, details: experiences[0].highlights, tags: experiences[0].technologies },
  { year: "2026", label: "Personal exploration", title: "Building Texarium, one workflow at a time.", company: "Texarium ERP · Personal project", period: "Odoo 18 Community", text: "A personal learning project connecting procurement, inventory, approvals, reporting, and finance in a locally tested ERP workspace.", details: ["Reusable hierarchical approvals, custom Stock Ledger, and finance workflows.", "Case studies explain the implementation with local demo screenshots and scoped validation."], tags: ["Odoo 18 Community", "Python", "OWL", "PostgreSQL"] },
];
const filters = ["All work", "Finance", "Inventory", "Workflows"] as const;
type Filter = typeof filters[number];
function matches(slug: string, filter: Filter) {
  return filter === "All work" || (filter === "Finance" ? /finance|budget/.test(slug) : filter === "Inventory" ? /inventory|stock-ledger/.test(slug) : /approval|dashboards|multicompany/.test(slug));
}
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
function SectionHeading({ number, label, title, text }: { number: string; label: string; title: string; text?: string }) {
  return <div className="pf-section-heading"><div><p className="pf-eyebrow"><span>{number}</span> {label}</p><h2>{title}</h2></div>{text && <p className="pf-section-intro">{text}</p>}</div>;
}

export function PortfolioHome() {
  const root = useRef<HTMLElement>(null);
  const [activeJourney, setActiveJourney] = useState(2);
  const [filter, setFilter] = useState<Filter>("All work");
  usePortfolioMotion(root, filter);
  const current = journey[activeJourney];
  const visibleProjects = projects.filter(p => p.featured && matches(p.slug, filter));

  useEffect(() => {
    const page = root.current;
    if (!page || !("IntersectionObserver" in window)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const elements = Array.from(page.querySelectorAll<HTMLElement>(
      ".pf-section-heading, .pf-timeline, .pf-portrait, .pf-about > div:last-child, .pf-services article, .pf-project, .pf-showcase, .pf-contributions details, .pf-stack-row, .pf-education, .pf-contact .pf-wrap"
    )).filter(element => !element.dataset.revealed);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.classList.remove("pf-reveal-pending");
        element.classList.add("pf-revealed");
        element.dataset.revealed = "true";
        observer.unobserve(element);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    elements.forEach(element => {
      const siblings = element.parentElement?.children;
      const index = siblings ? Array.from(siblings).indexOf(element) : 0;
      const stagger = element.matches(".pf-project, .pf-services article, .pf-contributions details, .pf-stack-row");
      element.style.setProperty("--pf-reveal-delay", `${stagger ? (index % 3) * 85 : 0}ms`);
      element.classList.add("pf-reveal-pending");
      observer.observe(element);
    });
    const revealAll = () => {
      if (!motion.matches) return;
      observer.disconnect();
      elements.forEach(element => element.classList.remove("pf-reveal-pending"));
    };
    motion.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", revealAll);
      elements.forEach(element => element.classList.remove("pf-reveal-pending"));
    };
  }, [filter]);

  return <main ref={root} className="portfolio-home">
    <div className="pf-scroll-progress" aria-hidden="true" />
    <section id="home" className="pf-hero" aria-labelledby="home-title">
      <div className="pf-wrap">
        <div className="pf-hero-meta"><span><i /> Open to Odoo roles & freelance projects</span><span>Jakarta, Indonesia ↗</span></div>
        <div className="pf-hero-layout"><div className="pf-hero-copy">
          <p className="pf-eyebrow">HELLO WORLD <span aria-hidden="true">/</span> I&apos;M CHRISTIAN OLIVER</p>
          <h1 id="home-title">Business logic.<br /><span>Thoughtfully built.</span></h1>
          <p>I&apos;m an <strong>Odoo / ERP developer</strong> who turns complex business requirements into connected workflows, practical tools, and maintainable software.</p>
          <div className="pf-actions"><Link className="pf-button pf-button-primary" href="#projects">Explore my work <Arrow diagonal /></Link><a className="pf-button pf-button-outline" href="/cv.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↓</span></a><Link className="pf-text-link" href="#contact">Let&apos;s talk <Arrow /></Link></div>
        </div>
        <div className="pf-flow-motion"><WorkflowExplorer /></div></div>
        <div className="pf-hero-foot"><span className="pf-code-note"><span aria-hidden="true">&lt;/&gt;</span> Python at the core. Business in mind.</span><a href="#experience" className="pf-scroll">A little about my journey ↓</a></div>
      </div><span className="pf-hero-mark" aria-hidden="true">co.</span>
    </section>

    <section id="experience" className="pf-section pf-wrap">
      <SectionHeading number="01" label="THE JOURNEY" title="Always building. Always learning." text="From engineering and product design to the business rules behind an ERP." />
      <div className="pf-timeline" style={{ "--journey-index": activeJourney } as CSSProperties} role="group" aria-label="Select a career stage"><span className="pf-timeline-traveler" aria-hidden="true" />{journey.map((item,index)=><button key={item.year} type="button" aria-pressed={activeJourney === index} aria-controls="journey-detail" onClick={()=>setActiveJourney(index)} className={activeJourney===index ? "is-active" : ""}><span className="pf-timeline-dot" /><strong>{item.year}</strong><span>{item.label}</span></button>)}</div>
      <article key={activeJourney} id="journey-detail" className="pf-journey-detail pf-content-change" aria-live="polite"><div><p className="pf-eyebrow">{current.company}</p><h3>{current.title}</h3><p className="pf-period">{current.period}</p></div><div><p>{current.text}</p><ul>{current.details.map(text=><li key={text}>{text}</li>)}</ul><div className="pf-tags">{current.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>
    </section>

    <section id="about" className="pf-about-band"><div className="pf-wrap pf-about">
      <div className="pf-portrait"><Image src={profile.profileImage ?? "/profil.jpg"} alt="Christian Oliver, Odoo and ERP developer" width={480} height={560} sizes="(max-width: 700px) 80vw, 300px" /><div><span>CHRISTIAN OLIVER</span><span>Developer. Problem solver.</span></div></div>
      <div><p className="pf-eyebrow"><span>02</span> THE PERSON BEHIND THE CODE</p><h2>Curious about the business.<br />Careful with the details.</h2><p>My professional Odoo work covers Accounting, Inventory, Purchase, Sales, RMA and returns, Construction reports, and HR workflows. I enjoy understanding why a process works the way it does, then turning that understanding into clear, maintainable code.</p><p>Alongside that work, I develop <strong>Texarium ERP</strong> as a personal learning project on Odoo 18 Community. It is where I explore reusable approvals, connected workflows, and custom reporting through locally tested scenarios.</p><div className="pf-about-notes"><span>Professional work <strong>Odoo 14</strong></span><span>Personal project <strong>Odoo 18 Community</strong></span></div></div>
    </div></section>

    <section id="services" className="pf-section pf-wrap">
      <SectionHeading number="03" label="WHAT I DO" title="Practical solutions. Built with care." text="From a single report to the workflow connecting your business operations." />
      <div className="pf-services">{services.map((service,index)=><article key={service.slug}><span className="pf-service-icon" aria-hidden="true">{["{ }","</>","⇄","▦","Σ","⌕"][index]}</span><span className="pf-service-no">0{index+1}</span><h3>{service.title.replace("Odoo Custom Module Development","Custom module development")}</h3><p>{service.description}</p></article>)}</div>
    </section>

    <section id="projects" className="pf-section pf-project-section"><div className="pf-wrap">
      <SectionHeading number="04" label="SELECTED WORK" title="Less theory. More working software." text="Six case studies from Texarium: a personal learning and portfolio project, developed and tested locally." />
      <div className="pf-project-toolbar"><div className="pf-filters" role="group" aria-label="Filter projects">{filters.map(item=><button type="button" key={item} aria-pressed={filter===item} className={filter===item ? "is-active" : ""} onClick={()=>setFilter(item)}>{item}</button>)}</div><span aria-live="polite">{visibleProjects.length} case studies</span></div>
      <div key={filter} className="pf-projects">{visibleProjects.map(project=><article className="pf-project" key={project.slug}>
        <Link href={`/projects/${project.slug}`} className="pf-project-image" aria-label={`View ${project.title}`}><Image src={project.image!} alt={`${project.title} application screenshot`} width={960} height={540} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px" /><span className="pf-project-preview-note" aria-hidden="true"><span>VIEW THE IMPLEMENTATION</span><strong>{project.category}</strong></span><span className="pf-image-link" aria-hidden="true">↗</span></Link>
        <div className="pf-project-content"><p className="pf-eyebrow">{project.category}</p><h3><Link href={`/projects/${project.slug}`}>{project.title.replace(/^Texarium\s*·\s*/,"")}</Link></h3><p>{project.summary}</p><div className="pf-tags">{project.tags.filter(t=>t!=="Texarium").slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div><Link href={`/projects/${project.slug}`} className="pf-text-link">Explore case study <Arrow diagonal /></Link></div>
      </article>)}</div>
      <Link href="/texarium" className="pf-showcase"><div><p className="pf-eyebrow">EXPLORE THE ERP PROJECT</p><h3>Take a closer look at Texarium.</h3><p>Business context, implementation details, and screenshots from local demos.</p></div><span className="pf-button pf-button-primary">Explore Texarium <span aria-hidden="true">↗</span></span></Link>
    </div></section>

    <section id="contributions" className="pf-section pf-wrap"><SectionHeading number="05" label="PROFESSIONAL CONTRIBUTIONS" title="Experience beyond the personal project." text="Professional Odoo 14 contributions include Construction reports, RMA and returns, HR workflows, payroll reports, and operational maintenance." /><div className="pf-contributions">{[...additionalOdooExperience].sort((a,b)=>Number(Boolean(b.featured))-Number(Boolean(a.featured))).map(item=><details key={item.title} open={item.featured}><summary>{item.title}<span aria-hidden="true">+</span></summary><p>{item.description}</p><ul>{item.items.map(text=><li key={text}>{text}</li>)}</ul></details>)}</div></section>

    <section id="skills" className="pf-section pf-wrap pf-stack"><SectionHeading number="06" label="MY TOOLKIT" title="Tools I work with." />{skillGroups.map(group=><div className="pf-stack-row" key={group.title}><h3>{group.title}</h3><div>{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></div>)}<div className="pf-education"><p className="pf-eyebrow">EDUCATION</p>{education.map(item=><div key={item.institution}><h3>{item.institution}</h3><p>{item.degree} <span> / {item.period}</span></p></div>)}</div></section>

    <section id="contact" className="pf-contact"><div className="pf-wrap"><p className="pf-eyebrow"><i /> OPEN TO ODOO ROLES & FREELANCE PROJECTS</p><h2>Have a workflow<br />in mind? <span>Let&apos;s build it.</span></h2><p>Custom modules, a difficult bug, or a business process that could work better.<br className="hidden sm:block" /> I&apos;d be happy to hear about it.</p><a href={`mailto:${profile.contacts.email}`} className="pf-button pf-button-primary pf-email">{profile.contacts.email} <Arrow diagonal /></a><div className="pf-socials"><a href={profile.contacts.linkedIn ?? "#contact"} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={profile.contacts.whatsapp ?? "#contact"} target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a><a href="/cv.pdf" target="_blank" rel="noreferrer">Resume ↓</a></div></div></section>
    <footer className="pf-footer pf-wrap"><Link href="#home" className="pf-signature">christian<span>.dev</span></Link><p>© {new Date().getFullYear()} Christian Oliver</p><a href="#home">Back to top ↑</a></footer>
  </main>;
}
