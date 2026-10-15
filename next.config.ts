import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/texorium", destination: "/texarium", permanent: true },
      {
            "source": "/projects/multi-currency-payment-reconciliation",
            "destination": "/projects/texarium-finance-operations",
            "permanent": true
      },
      {
            "source": "/projects/receiving-control-dashboard",
            "destination": "/projects/texarium-operational-dashboards",
            "permanent": true
      },
      {
            "source": "/projects/multi-uom-inventory-stock-valuation",
            "destination": "/projects/texarium-inventory-quality-control",
            "permanent": true
      },
      {
            "source": "/projects/dynamic-multi-level-approval-workflow",
            "destination": "/projects/texarium-approval-matrix",
            "permanent": true
      },
      {
            "source": "/projects/custom-stock-ledger-report",
            "destination": "/projects/texarium-stock-ledger",
            "permanent": true
      },
      {
            "source": "/projects/intercompany-purchase-sales-automation",
            "destination": "/projects/texarium-multicompany-budget",
            "permanent": true
      }
];
  },
};

export default nextConfig;
