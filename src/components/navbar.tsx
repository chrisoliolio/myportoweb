"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#contributions", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#skills", label: "Stack" },
  { href: "/#projects", label: "Projects" },
  { href: "/texarium", label: "ERP Showcase" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pf-nav sticky top-0 z-50">
      <nav className="pf-nav-inner" aria-label="Main navigation">
        <Link href="/#home" className="pf-signature" onClick={() => setIsOpen(false)}>christian<span>.dev</span></Link>
        <div className="pf-nav-links">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
        <a className="pf-nav-resume" href="/cv.pdf" target="_blank" rel="noreferrer">Resume ↓</a>
        <button type="button" className="pf-mobile-toggle" onClick={() => setIsOpen(open => !open)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close navigation" : "Open navigation"}><span aria-hidden="true">{isOpen ? "×" : "☰"}</span></button>
      </nav>
      {isOpen && <div id="mobile-menu" className="pf-mobile-menu">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>)}<a href="/cv.pdf" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>Resume ↓</a></div>}
    </header>
  );
}
