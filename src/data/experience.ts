import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    role: "Odoo Developer", company: "HashMicro", period: "Feb 2024 - Present", location: "Remote",
    description: "Develop and customize Odoo solutions that support business workflows, operational controls, and ERP integrations.",
    highlights: [
      "Work with Python, XML, QWeb, JavaScript, PostgreSQL, and the Odoo ORM to deliver maintainable modules and resolve production issues.",
      "Support accounting, inventory, purchasing, sales, reporting, and multi-company processes.",
      "Customize HR overtime approval editing and payslip report layouts.",
      "Contribute targeted fixes to MRP production-plan views and customize construction job order reports with signatures.",
    ],
    technologies: ["Odoo 14", "Python", "Odoo ORM", "PostgreSQL", "XML / QWeb", "JavaScript"],
  },
  { role: "Odoo Developer", company: "PT. Sama Sama Sukses", period: "Aug 2021 - Jan 2024", location: "Tangerang, Banten", description: "Customized Odoo 14 modules, views, reports, and workflows for operational requirements.", highlights: ["Applied Odoo and CSS development skills to improve ERP usability and workflow consistency."], technologies: ["Odoo 14", "XML", "QWeb", "CSS"] },
  { role: "Research and Development Engineer", company: "PT. SuryaSukses Adi Perkasa", period: "Feb 2021 - Jul 2022", location: "Cibitung, West Java", description: "Developed product concepts, product designs, and pallet drawings for research and development needs.", highlights: [], technologies: [] },
];
