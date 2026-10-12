import Link from "next/link";
import { profile } from "@/data/profile";

const navigation = [
  { href: "/#home", label: "Home" }, { href: "/#about", label: "About" }, { href: "/#experience", label: "Experience" }, { href: "/#skills", label: "Skills" }, { href: "/#projects", label: "Projects" }, { href: "/#services", label: "Services" }, { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: profile.contacts.linkedIn }, { label: "GitHub", href: profile.contacts.github },
].filter((social): social is { label: string; href: string } => Boolean(social.href));

export function Footer() {
  return <footer className="bg-white"><div className="mx-auto max-w-6xl px-6 py-10 lg:px-8"><div className="flex flex-col justify-between gap-8 border-b border-slate-900/10 pb-8 md:flex-row"><div><p className="font-semibold text-slate-900">Christian Oliver</p><p className="mt-2 text-sm text-slate-900/60">Custom Odoo development for business workflows.</p></div><nav aria-label="Footer navigation" className="flex max-w-md flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-900/65">{navigation.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">{item.label}</Link>)}</nav></div><div className="flex flex-col gap-4 pt-7 text-sm text-slate-900/55 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Christian Oliver All Rights Reserved</p>{socialLinks.length > 0 && <div className="flex gap-4">{socialLinks.map((social) => <a key={social.label} href={social.href} className="font-medium text-slate-900/65 transition hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">{social.label}</a>)}</div>}</div></div></footer>;
}
