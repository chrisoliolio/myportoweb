"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-[#f7f8f5]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/#home" className="flex items-center gap-2 font-semibold tracking-tight text-emerald-950" onClick={() => setIsOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-emerald-900 font-mono text-sm text-lime-200">&lt;/&gt;</span>
          <span>CO</span>
        </Link>

        <div className="hidden items-center gap-4 text-sm font-medium text-emerald-950/70 lg:gap-6 md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-emerald-700">{link.label}</Link>)}
        </div>

        <Link href="/#contact" className="hidden rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 md:block">Let&apos;s connect</Link>

        <button type="button" className="grid size-10 place-items-center rounded-lg text-emerald-950 md:hidden" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="flex w-5 flex-col gap-1.5"><span className="h-0.5 w-full bg-current" /><span className="h-0.5 w-full bg-current" /><span className="h-0.5 w-full bg-current" /></span>
        </button>
      </nav>
      {isOpen && (
        <div id="mobile-menu" className="border-t border-emerald-950/10 bg-[#f7f8f5] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm font-medium text-emerald-950/80">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>)}
          </div>
        </div>
      )}
    </header>
  );
}
