import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    "slug": "texarium-finance-operations",
    "title": "Texarium \u00b7 Finance Operations & Bank Reconciliation",
    "category": "Accounting / Finance",
    "summary": "Cash advances, settlement, petty cash, expense reimbursement and bank reconciliation in Texarium, built on Odoo 18 Community.",
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
      "Saved finance scenarios cover eight companies and branches."
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
      "Persisted and verified forty reconciled payments across eight company and branch contexts."
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
    "video": "07-texarium-finance"
  },
  {
    "slug": "texarium-operational-dashboards",
    "title": "Texarium \u00b7 Purchase & Inventory Dashboards",
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
      "Recorded dashboard walkthroughs and validated browser rendering."
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
    "video": "02-texarium-dashboards"
  },
  {
    "slug": "texarium-inventory-quality-control",
    "title": "Texarium \u00b7 Inventory & Quality Control",
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
      "The recorded procurement scenario receives twenty units, releases eighteen and returns two.",
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
      "Verified ending quantity of eighteen and inventory value of IDR2,250,000."
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
    "video": "06-texarium-integrated-procurement"
  },
  {
    "slug": "texarium-approval-matrix",
    "title": "Texarium \u00b7 Hierarchical Approval Matrix",
    "category": "Workflow / Employees / Security",
    "summary": "Reusable approval matrices with employee hierarchy, sequential decisions and a central dashboard in Texarium on Odoo 18.",
    "overview": "Reusable approval matrices with employee hierarchy, sequential decisions and a central dashboard in Texarium on Odoo 18.",
    "businessProblem": "Documents across business applications need consistent approvals and visible accountability.",
    "requirements": [
      "Specific-user and hierarchy approvers",
      "Sequential stages and minimum approvals",
      "Decision history and feedback",
      "Pending approval dashboard"
    ],
    "role": [
      "Build a shared approval engine and application adapters",
      "Resolve approvers from employee hierarchy",
      "Enforce access and unchanged-document checks"
    ],
    "solution": [
      "Officer submission routes to Manager then Director.",
      "Final Purchase approval automatically confirms the Purchase Order."
    ],
    "technicalAreas": [
      "Odoo ORM",
      "employee hierarchy",
      "record rules",
      "approval snapshots"
    ],
    "challenges": [
      "Enforce current-stage approver permissions",
      "Prevent changed documents from using stale approval"
    ],
    "impact": [
      "Actual UI recording verifies submission and two approvals on P00152."
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
    "video": "08-texarium-interactive-approval"
  },
  {
    "slug": "texarium-stock-ledger",
    "title": "Texarium \u00b7 Stock Ledger Report",
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
      "The integrated procurement recording verifies eighteen ending units valued at IDR2,250,000."
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
    "video": "03-texarium-stock-ledger"
  },
  {
    "slug": "texarium-multicompany-budget",
    "title": "Texarium \u00b7 Multi-company, Branches & Budgets",
    "category": "Organization / Purchase / Budget",
    "summary": "Indonesia and Singapore company structures with branches and company-scoped purchasing budgets in Texarium on Odoo 18.",
    "overview": "Indonesia and Singapore company structures with branches and company-scoped purchasing budgets in Texarium on Odoo 18.",
    "businessProblem": "Business units need separate company access, approval hierarchies and budget visibility.",
    "requirements": [
      "Indonesia and Singapore companies",
      "Multiple branches in each country",
      "Company-scoped approvals",
      "Planned, committed, actual and available budget"
    ],
    "role": [
      "Configure native company and branch structures",
      "Integrate purchase allocation with budget tracking",
      "Test access boundaries and financial workflows across eight contexts"
    ],
    "solution": [
      "Purchase commitments remain until billing or explicit commitment closure.",
      "Stock purchase budget actual comes from posted vendor bills; receipt valuation is not counted twice."
    ],
    "technicalAreas": [
      "res.company",
      "purchase.order.line",
      "account.move.line",
      "company record rules"
    ],
    "challenges": [
      "Preserve company isolation",
      "Distinguish purchase budget from inventory valuation"
    ],
    "impact": [
      "Saved eight-context budget and finance validations; integrated budget5m, actual2.25m and available2.75m."
    ],
    "tags": [
      "Odoo 18 Community",
      "Texarium",
      "Python",
      "PostgreSQL"
    ],
    "portfolioValue": [
      "res.company",
      "purchase.order.line",
      "account.move.line",
      "company record rules"
    ],
    "featured": true,
    "video": "06-texarium-integrated-procurement"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
