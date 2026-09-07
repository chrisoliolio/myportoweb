import Image from "next/image";
import Link from "next/link";

import { profile } from "@/data/profile";

const heroIntro =
  "I specialize in Odoo 14 customization, workflow automation, inventory, accounting, purchase, sales, multi-company, and multi-currency processes. My work focuses on translating operational requirements into maintainable modules and practical business workflows using Python, PostgreSQL, XML, QWeb, JavaScript, and the Odoo ORM.";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-emerald-950 text-white" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[3rem] border-white/[0.045] sm:size-[27rem]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-28 size-72 rounded-full border-[2.5rem] border-lime-300/[0.06] sm:size-96" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-6xl font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
            Christian <span className="block">Oliver</span>
          </h1>

          <p className="mt-7 font-mono text-sm font-bold tracking-[0.08em] text-lime-300 sm:text-base">{profile.role}</p>

          <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
            Building reliable ERP solutions for real business requirements.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{heroIntro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200">
              View My Work <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/45 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get In Touch
            </Link>
            <Link href="/cv.pdf" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Download CV
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/25 sm:p-4">
            {profile.profileImage ? (
              <Image src={profile.profileImage} alt="Christian Oliver" width={720} height={900} className="aspect-[4/5] w-full rounded-[1.45rem] object-cover" priority />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-[1.45rem] bg-[#e9eee5] px-8 text-center text-emerald-950" role="img" aria-label="Profile image placeholder for Christian Oliver">
                <span className="flex size-28 items-center justify-center rounded-full border border-emerald-950/15 bg-white text-3xl font-semibold tracking-[-0.08em] shadow-sm">CO</span>
                <p className="mt-6 font-mono text-xs font-bold tracking-[0.14em] uppercase">Profile image</p>
                <p className="mt-2 text-sm leading-6 text-emerald-950/65">Add your photo at <code className="font-mono text-xs">public/profile.jpg</code></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
