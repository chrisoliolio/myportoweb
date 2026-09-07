import type { Service } from "@/types/portfolio";

export const services: Service[] = [
  { slug: "custom-module-development", title: "Odoo Custom Module Development", description: "Develop custom Odoo modules based on business requirements." },
  { slug: "odoo-customization", title: "Odoo Customization", description: "Modify existing Odoo modules, views, workflows, reports, and business logic." },
  { slug: "workflow-automation", title: "Workflow Automation", description: "Automate repetitive ERP processes and approval flows." },
  { slug: "inventory-warehouse", title: "Inventory & Warehouse Customization", description: "Customize stock, lot, UoM, warehouse, reservation, and valuation workflows." },
  { slug: "accounting-customization", title: "Accounting Customization", description: "Handle custom payment, reconciliation, journal-entry, exchange-rate, and financial workflows." },
  { slug: "bug-fixing", title: "Bug Fixing & Troubleshooting", description: "Investigate and resolve Odoo backend, frontend, ORM, XML/QWeb, database, and workflow issues." },
];
