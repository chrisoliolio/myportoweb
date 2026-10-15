import type { Education, ProfessionalHighlight } from "@/types/portfolio";

export const professionalHighlights: ProfessionalHighlight[] = [
  { title: "ERP Customization", description: "Business-specific Odoo module and workflow customization." },
  { title: "Accounting & Finance", description: "Payment, reconciliation, exchange-rate, journal, and valuation customization." },
  { title: "Inventory & Warehouse", description: "Stock, lot, UoM, reservation, receiving, delivery, and valuation workflows." },
  { title: "Workflow Automation", description: "Approval matrix, business validation, and automated document flow." },
  { title: "Multi-Company Operations", description: "Cross-company Purchase, Sales, Accounting, and business-context handling." },
  { title: "Production Troubleshooting", description: "Debugging Odoo ORM, XML, QWeb, PostgreSQL, security, and production workflow issues." },
];

export const education: Education[] = [{ institution: "Universitas Mercu Buana", degree: "Bachelor Degree, Information Technology", period: "2015 - 2020" }];

export const additionalOdooExperience = [
  {
    title: "Accounting & finance",
    description: "Customization and fixes for financial documents, valuation, and tax handling.",
    items: ["Exchange Rate-Based Stock Valuation", "Anglo-Saxon Accounting & Invoice Amount Due Fix", "Loan Accounting & Reclassification", "Down Payment & VAT Handling", "FIFO Valuation Fix"],
  },
  {
    title: "Inventory, purchase & sales",
    description: "Operational controls across stock movements, purchasing, and product selection.",
    items: ["Picking & Picking Approval", "Stock Quant Reservation Override", "Lot Assignment from Purchase", "RMA & Return Management", "Vendor Pricelist Customization", "Tax-Aware Purchase Pricing", "Product Category-Based Purchase Filtering", "RFQ & PO Dynamic Numbering", "Sales Product Filtering", "Product Part Number Search", "Product Category Access Control"],
  },
  {
    title: "HR & payroll reporting",
    description: "HR workflow customization and payslip report layouts.",
    items: ["HR Assessment & Psikotest Workflow", "HR Time-Off Reporting & Views", "Overtime Approval Editing", "Payslip Report Layouts"],
  },
  {
    title: "Manufacturing & construction",
    description: "Targeted fixes to production-plan views and reporting for construction and job orders.",
    items: ["MRP Production Plan View Fixes", "Construction / Project Reporting", "Job Order Reports & Signatures", "Work Order Management"],
  },
  {
    title: "Reporting & technical support",
    description: "Document customization, workflow notifications, and ongoing Odoo maintenance.",
    items: ["Custom Purchase & Invoice Reports", "Advanced QWeb & PDF Reporting", "Approval Notifications", "Odoo Technical Maintenance"],
  },
];
