import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Highlights } from "@/components/highlights";
import { AdditionalOdooExperience } from "@/components/additional-odoo-experience";
import { Education } from "@/components/education";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600">Personal Project</p>
          <h2 className="text-3xl font-bold">Texarium ERP · Odoo 18</h2>
          <p className="mt-3 text-slate-600">Explore custom approvals, Stock Ledger, finance operations and a complete procurement workflow.</p>
          <a href="/texorium" className="mt-5 inline-block font-semibold text-indigo-600">Watch the ERP walkthroughs →</a>
        </section>
        <About />
        <Skills />
        <Highlights />
        <Experience />
        <AdditionalOdooExperience />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
