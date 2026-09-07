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
        <About />
        <Highlights />
        <Experience />
        <Skills />
        <Projects />
        <AdditionalOdooExperience />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
