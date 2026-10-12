import { profile } from "@/data/profile";

const contactLinks = [
  { label: "Email", href: profile.contacts.email ? `mailto:${profile.contacts.email}` : null, value: profile.contacts.email },
  { label: "LinkedIn", href: profile.contacts.linkedIn, value: profile.contacts.linkedIn },
  { label: "GitHub", href: profile.contacts.github, value: profile.contacts.github },
  { label: "WhatsApp", href: profile.contacts.whatsapp, value: profile.contacts.phone },
].filter((contact): contact is { label: string; href: string; value: string } => Boolean(contact.href && contact.value));

export function Contact() {
  return (
    <section id="contact" className="bg-[#f6f7fb] py-20 sm:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:grid lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-14">
          <div><p className="font-mono text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">09 / Contact</p><h2 id="contact-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Let&apos;s work together.</h2><p className="mt-6 max-w-xl text-base leading-7 text-white/72">Have an Odoo project, customization requirement, bug to investigate, or ERP workflow to develop? I&apos;m open to freelance Odoo work and practical collaboration.</p></div>
          <div className="mt-10 border-t border-white/12 pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            {contactLinks.length > 0 ? <div><div className="grid gap-3">{contactLinks.map((contact) => <a key={contact.label} href={contact.href} className="group flex items-center justify-between rounded-xl border border-white/12 px-4 py-3.5 text-sm text-white transition hover:border-violet-300/60 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300" aria-label={`${contact.label}: ${contact.value}`}><span className="min-w-0"><span className="block font-semibold">{contact.label}</span><span className="mt-0.5 block break-all text-xs text-white/60">{contact.value}</span></span><span className="text-violet-300 transition group-hover:translate-x-1" aria-hidden="true">↗</span></a>)}</div><p className="mt-5 text-sm text-white/60">Based in {profile.location}</p></div> : <div><p className="font-mono text-xs font-bold tracking-[0.14em] text-violet-300 uppercase">Direct contact</p><p className="mt-4 text-sm leading-6 text-white/68">Direct contact links will appear here once contact details are provided.</p></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
