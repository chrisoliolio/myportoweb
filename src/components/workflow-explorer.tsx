"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { name: "Purchase", icon: "01", action: "A request becomes an approved order.", detail: "Eligible approvers → Minimum approvals → Confirm", code: "purchase.order", state: "Approved", caption: "Start with a controlled purchasing decision." },
  { name: "Inventory", icon: "02", action: "Receive, inspect, and release the goods.", detail: "Receipt → Quality control → Available stock", code: "stock.picking", state: "Validated", caption: "Keep the physical movement connected to the order." },
  { name: "Accounting", icon: "03", action: "Connect the bill, payment, and bank entry.", detail: "Vendor bill → Payment → Reconciliation", code: "account.move", state: "Reconciled", caption: "Close the loop with a traceable financial record." },
];

export function WorkflowExplorer() {
  const panel = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(preference.matches);
      setPlaying(!preference.matches);
    };
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (panel.current) observer.observe(panel.current);
    return () => { preference.removeEventListener("change", update); observer.disconnect(); };
  }, []);
  useEffect(() => {
    if (!playing || !visible || reducedMotion) return;
    const timer = window.setInterval(() => setStage(value => (value + 1) % stages.length), 3200);
    return () => window.clearInterval(timer);
  }, [playing, visible, reducedMotion]);
  const current = stages[stage];

  return <div ref={panel} className={`pf-flow ${playing && visible && !reducedMotion ? "is-running" : "is-paused"}`}>
    <div className="pf-flow-header"><span><span className="pf-flow-led" /> WORKFLOW EXPLORER</span><button type="button" onClick={() => setPlaying(value => !value)} disabled={reducedMotion} aria-label={playing ? "Pause workflow animation" : "Play workflow animation"}>{playing ? "Ⅱ Pause" : "▷ Play"}</button></div>
    <div className="pf-flow-map">
      <svg className="pf-flow-wires" viewBox="0 0 360 330" preserveAspectRatio="none" aria-hidden="true"><path d="M180 50 V290" className="pf-flow-wire" /><path d="M180 50 V290" className="pf-flow-packet" /></svg>
      {stages.map((item,index) => <button type="button" key={item.name} className={`pf-flow-node ${stage === index ? "is-active" : ""} ${index < stage ? "is-complete" : ""}`} aria-pressed={stage === index} aria-controls="workflow-description" onClick={() => { setStage(index); setPlaying(false); }}>
        <span className="pf-flow-icon" aria-hidden="true">{index < stage ? "✓" : item.icon}</span><span><strong>{item.name}</strong><span className="pf-flow-model">{item.code}</span></span><span className="pf-flow-status">{stage === index ? item.state : index < stage ? "Complete" : "Next"}</span>
      </button>)}
    </div>
    <div className="pf-flow-description" id="workflow-description" aria-live={playing ? "off" : "polite"}><div key={stage} className="pf-flow-description-content"><span className="pf-flow-step">0{stage + 1} / CONNECTED OPERATIONS</span><h2>{current.action}</h2><p>{current.detail}</p><p className="pf-flow-caption">{current.caption}</p></div></div>
    <div className="pf-flow-footer"><span>Texarium ERP</span><span>Illustrated workflow · Select a step ↗</span></div>
  </div>;
}
