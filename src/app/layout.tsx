import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Oliver | Odoo / ERP Developer",
  description: "Odoo / ERP developer experienced in Python, PostgreSQL and business workflows. Explore Texarium case studies and professional contributions in Construction, RMA, HR, Accounting and Inventory.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
