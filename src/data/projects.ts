import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    "slug": "texarium-approval-matrix",
    "title": "Texarium · Approval & Document Governance",
    "category": "Workflow / Purchase / Security",
    "summary": "Configurable approver pools, rejection reasons and traceable PO revisions on Odoo 18 Community.",
    "overview": "A shared approval engine for controlled business documents, with separate approval requests and a retained history of decisions.",
    "businessProblem": "Documents across business applications need consistent approvals and visible accountability.",
    "requirements": [
      "By User or By Hierarchy approver pools",
      "Configurable minimum approvals per stage",
      "Rejection reason and resubmission history",
      "Linked PO revisions with fresh approval"
    ],
    "role": [
      "Build a shared approval engine and application adapters",
      "Resolve approvers from employee hierarchy",
      "Enforce access and unchanged-document checks"
    ],
    "solution": [
      "Several eligible users can share a stage. With a minimum of one, the first valid approval completes that stage; separate stages still run in sequence.",
      "Rejected documents can return to Draft for correction while retaining earlier decisions.",
      "A cancelled PO that was previously confirmed can produce a linked /R1 revision. The original remains cancelled and the new version needs approval."
    ],
    "technicalAreas": [
      "Odoo ORM",
      "employee hierarchy",
      "record rules",
      "approval snapshots"
    ],
    "challenges": [
      "Prevent self-approval, duplicate votes and stale approvals after a document changes",
      "Retain version and decision history without reusing receipt or invoice links"
    ],
    "impact": [
      "Local demo records show approved PO and PR requests, a rejected PR with feedback, and an approved P00004/R1 linked to its original PO."
    ],
    "tags": [
      "Odoo 18 Community",
      "Texarium",
      "Python",
      "PostgreSQL"
    ],
    "portfolioValue": [
      "Odoo ORM",
      "employee hierarchy",
      "record rules",
      "approval snapshots"
    ],
    "featured": true,
    "image": "/images/projects/approval-governance.png",
    "imageCaption": "Local demo, November 2026: Daniel completes a By Hierarchy stage with a minimum of one approval. Maya remains an eligible candidate, not a required second approver."
  },
  {
    "slug": "texarium-multicompany-budget",
    "title": "Texarium · Company–Branch Access Controls",
    "category": "Organization / Security / UI",
    "summary": "Separate Company and Branch selectors, permission checks and branch defaults for a two-country ERP workspace.",
    "overview": "Custom Texarium branches separate operational units from legal companies. Users select an allowed working scope while server checks preserve access boundaries.",
    "businessProblem": "Users working across companies and branches need clear context selection without gaining access to unauthorized business units.",
    "requirements": [
      "Two legal companies: Indonesia and Singapore",
      "Six custom branches with associated warehouses",
      "Allowed Company–Branch–Warehouse settings per user",
      "Multi-select scope with Apply, Reset and branch defaults"
    ],
    "role": [
      "Implement custom branch ownership and user scope validation",
      "Connect the native company service to a separate Branch selector",
      "Verify branch-aware search, aggregates and defaults"
    ],
    "solution": [
      "Indonesia contains Jakarta, Surabaya and Bali; Singapore contains Central, East and West.",
      "The Company selector lives in the sidebar; the Branch selector groups allowed branches under selected companies.",
      "Branch context narrows supported branch-aware models. Models without branch ownership retain their existing access rules; single-company dashboards retain the primary company currency."
    ],
    "technicalAreas": [
      "res.company",
      "texarium.branch",
      "stock.warehouse",
      "Odoo context",
      "OWL services",
      "record rules"
    ],
    "challenges": [
      "Keep browser selections within server-authorized scope",
      "Avoid mixing IDR and SGD totals or implying every model is branch-aware"
    ],
    "impact": [
      "Selector and scope regression: 21 tests passed. Browser checks covered company switching, branch subsets, persistence and document defaults."
    ],
    "tags": [
      "Odoo 18 Community",
      "Texarium",
      "Python",
      "PostgreSQL"
    ],
    "portfolioValue": [
      "Multi-company security",
      "Server-side scope validation",
      "OWL interface integration"
    ],
    "featured": true,
    "image": "/images/projects/company-branch.png",
    "imageCaption": "Local demo, November 2026: six branches grouped under Texarium Indonesia and Texarium Singapore. The purchase dashboard behind the selector is empty in this setup."
  },
  {
    "slug": "texarium-operational-dashboards",
    "title": "Texarium · ERP Workspace & Operational Dashboards",
    "category": "Purchase / Inventory / UI",
    "summary": "Operational dashboards and a branded workspace for Texarium on Odoo 18 Community.",
    "overview": "Operational dashboards and a branded workspace for Texarium on Odoo 18 Community.",
    "businessProblem": "Operations need accessible purchasing and inventory information in a consistent workspace.",
    "requirements": [
      "Purchase overview",
      "Inventory overview",
      "Date filters",
      "Responsive scrolling and branded navigation"
    ],
    "role": [
      "Build custom dashboard actions",
      "Integrate operational data and navigation",
      "Customize login, sidebar and selectable themes"
    ],
    "solution": [
      "Purchase and Inventory dashboards expose operational summaries.",
      "A custom login and shared UI provide a consistent Texarium workspace."
    ],
    "technicalAreas": [
      "OWL",
      "JavaScript",
      "XML",
      "SCSS",
      "Odoo ORM"
    ],
    "challenges": [
      "Keep dashboard data company scoped",
      "Support long pages and shared navigation"
    ],
    "impact": [
      "Local browser checks cover dashboard rendering and navigation; the workspace includes a custom login and shared navigation."
    ],
    "tags": [
      "Odoo 18 Community",
      "Texarium",
      "Python",
      "PostgreSQL"
    ],
    "portfolioValue": [
      "OWL",
      "JavaScript",
      "XML",
      "SCSS",
      "Odoo ORM"
    ],
    "featured": true,
    "image": "/images/projects/company-branch.png",
    "imageCaption": "Purchase workspace, November 2026, with the Branch selector open. This setup has no purchase transactions; populated charts are not shown here."
  },
  {
    "slug": "texarium-finance-operations",
    "title": "Texarium · Finance Operations & Bank Reconciliation",
    "category": "Accounting / Finance",
    "summary": "Cash advances, settlement, petty cash, expense reimbursement and bank reconciliation built on Odoo 18 Community.",
    "overview": "Cash advances, settlement, petty cash, expense reimbursement and bank reconciliation in Texarium, built on Odoo 18 Community.",
    "businessProblem": "Finance teams need controlled disbursements, traceable settlements and bank matching.",
    "requirements": [
      "Cash advance and full settlement",
      "Petty cash funding and vouchers",
      "Hierarchical approval",
      "Native payments and bank matching"
    ],
    "role": [
      "Separate finance models and integrate approval controls",
      "Connect cash documents to native payments",
      "Validate balanced journals and reconciled bank statement lines"
    ],
    "solution": [
      "Dedicated transfer and outstanding accounts connect source documents to native bank payments.",
      "Local finance scenarios exercise company-scoped payments and settlement."
    ],
    "technicalAreas": [
      "account.payment",
      "account.move",
      "hr.expense.sheet",
      "multi-company"
    ],
    "challenges": [
      "Prevent duplicate payments",
      "Preserve approval snapshots and company boundaries"
    ],
    "impact": [
      "Local finance scenarios demonstrate linked source documents, payments and bank reconciliation."
    ],
    "tags": [
      "Odoo 18 Community",
      "Texarium",
      "Python",
      "PostgreSQL"
    ],
    "portfolioValue": [
      "account.payment",
      "account.move",
      "hr.expense.sheet",
      "multi-company"
    ],
    "featured": true,
    "image": "/images/projects/finance-current-20261106.jpg",
    "imageCaption": "Current Texarium UI, 6 November 2026: vendor payment entry with fictional preview values. This form was not saved, posted or reconciled; it illustrates the current interface rather than a completed bank reconciliation."
  },
  {
    "slug": "texarium-inventory-quality-control",
    "title": "Texarium · Inventory & Quality Control",
    "category": "Inventory / Quality / Valuation",
    "summary": "Controlled receipts, quality inspection, stock release, supplier returns and valuation in Texarium on Odoo 18.",
    "overview": "Controlled receipts, quality inspection, stock release, supplier returns and valuation in Texarium on Odoo 18.",
    "businessProblem": "Received goods need inspection before becoming available stock, with traceable rejected quantities.",
    "requirements": [
      "Quality hold location",
      "Pass and reject quantities",
      "Controlled release and supplier return",
      "Stock valuation and accounting entries"
    ],
    "role": [
      "Implement receipt and quality-control integration",
      "Connect approved inspections to stock operations",
      "Validate quantity and valuation through accounting"
    ],
    "solution": [
      "An earlier local procurement validation received twenty units, released eighteen and returned two.",
      "Native stock valuation remains connected to posted accounting entries."
    ],
    "technicalAreas": [
      "stock.picking",
      "stock.move",
      "stock.valuation.layer",
      "quality inspection"
    ],
    "challenges": [
      "Keep receipt and return quantities consistent",
      "Avoid counting receipt valuation again as purchase budget actual"
    ],
    "impact": [
      "Earlier local validation recorded eighteen ending units and an inventory value of IDR 2,250,000; the current screenshot shows a separate, unprocessed receipt."
    ],
    "tags": [
      "Odoo 18 Community",
      "Texarium",
      "Python",
      "PostgreSQL"
    ],
    "portfolioValue": [
      "stock.picking",
      "stock.move",
      "stock.valuation.layer",
      "quality inspection"
    ],
    "featured": true,
    "image": "/images/projects/inventory-current-20261106.jpg",
    "imageCaption": "Current Texarium UI, 6 November 2026: receipt JKT/IN/00006 linked to P00004/R1, showing grouped fields and ten units awaiting processing. Its status is Ready; this capture does not show completed quality inspection or stock release."
  },
  {
    "slug": "texarium-stock-ledger",
    "title": "Texarium · Stock Ledger Report",
    "category": "Inventory / Reporting",
    "summary": "Custom Stock Ledger presenting opening balances, movements and ending quantity and value in Texarium on Odoo 18.",
    "overview": "Custom Stock Ledger presenting opening balances, movements and ending quantity and value in Texarium on Odoo 18.",
    "businessProblem": "Inventory users need a single report to trace movements and reconcile balances.",
    "requirements": [
      "Opening and ending balances",
      "Product and date filters",
      "Warehouse and location context",
      "Movement reference and valuation"
    ],
    "role": [
      "Adapt the Stock Ledger reporting concept to Odoo 18",
      "Build report filters and presentation",
      "Validate movement and closing-value calculations"
    ],
    "solution": [
      "The ledger consolidates opening, incoming, outgoing and ending balances.",
      "An earlier local procurement validation demonstrated eighteen ending units valued at IDR 2,250,000. The current screenshot comes from a separate setup with no completed stock movements."
    ],
    "technicalAreas": [
      "stock.move",
      "stock.valuation.layer",
      "Python",
      "OWL",
      "PostgreSQL"
    ],
    "challenges": [
      "Respect company and warehouse access",
      "Keep quantity and valuation understandable"
    ],
    "impact": [
      "Saved report scenario and browser verification demonstrate traceable stock movements."
    ],
    "tags": [
      "Odoo 18 Community",
      "Texarium",
      "Python",
      "PostgreSQL"
    ],
    "portfolioValue": [
      "stock.move",
      "stock.valuation.layer",
      "Python",
      "OWL",
      "PostgreSQL"
    ],
    "featured": true,
    "image": "/images/projects/stock-ledger-current-20261106.jpg",
    "imageCaption": "Current Texarium UI, 6 November 2026: Stock Ledger filtered to AGY Industrial Fastener, Jakarta Warehouse and Texarium Indonesia for 1–6 November. No completed stock movements exist in this demo setup, so balances and transaction counts are zero."
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
