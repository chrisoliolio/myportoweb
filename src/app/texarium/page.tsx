import Link from "next/link";
import { Navbar } from "@/components/navbar";

const recordings = [
  ["08-texarium-interactive-approval", "Hierarchical approval in action", "Officer submits a new RFQ. Manager and Director approve sequentially, automatically confirming the Purchase Order."],
  ["01-texarium-login", "Custom login", "Burgundy branding and a connected ERP workspace."],
  ["02-texarium-dashboards", "Operational dashboards", "Purchase and Inventory insights in a consistent interface."],
  ["03-texarium-stock-ledger", "Stock Ledger", "Opening balance, movements, ending quantity and valuation."],
  ["04-texarium-approval", "Approval Matrix", "Configurable approval workflows and document visibility."],
  ["06-texarium-integrated-procurement", "Budget to bank reconciliation", "A completed workflow: budget, hierarchical approval, receipt, quality control, vendor return, bill, payment and bank matching."],
  ["07-texarium-finance", "Finance operations", "Cash advance settlement, petty cash funding, expense reimbursement and reconciled bank transactions."],
];

export default function TexariumPage() {
  return <><Navbar /><main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
    <Link href="/" className="text-indigo-600">← Back to portfolio</Link>
    <p className="mt-10 font-mono text-sm uppercase tracking-widest text-indigo-600">Personal Project · Odoo 18 Community · Python · OWL · PostgreSQL</p>
    <h1 className="mt-4 text-5xl font-semibold tracking-[-.045em]">Texarium ERP</h1>
    <p className="mt-5 max-w-3xl text-lg text-slate-600">An independent learning and portfolio project bringing procurement, inventory, approvals and finance together on Odoo 18 Community. These recordings show locally configured business scenarios, including Indonesia and Singapore company and branch structures.</p>
    <p className="mt-4 max-w-3xl text-slate-600">My contribution covers custom addons, employee hierarchy approvals, financial workflow integration, Stock Ledger reporting, branded UI and functional validation. The approval video captures actual submission and sequential approval clicks. Other videos are silent walkthroughs of saved transactions.</p>
    <div className="mt-10 grid gap-8 md:grid-cols-2">{recordings.map(([file, title, description]) => <article key={file} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <video poster={`/videos/${file}.${file === "08-texarium-interactive-approval" ? "png" : "jpg"}`} controls playsInline preload="none" className="aspect-video w-full bg-slate-950" aria-label={title}><source src={`/videos/${file}.mp4`} type="video/mp4" />{file === "08-texarium-interactive-approval" && <track kind="captions" src="/videos/08-texarium-interactive-approval.vtt" srcLang="id" label="Bahasa Indonesia" default />}Your browser does not support video playback.</video>
      <div className="p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-slate-600">{description}</p></div>
    </article>)}</div>
  </main></>;
}
