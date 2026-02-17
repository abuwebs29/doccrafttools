export type Guide = {
  title: string;
  path: string;
  description: string;
  date: string; // YYYY-MM-DD
};

export const guides: Guide[] = [
  {
    title: "How to Make an Invoice (Step-by-Step)",
    path: "/how-to-make-an-invoice",
    description: "Step-by-step guide to creating an invoice, plus a free invoice PDF generator.",
    date: "2026-02-14",
  },
  {
    title: "Invoice Format (Examples + Free PDF Generator)",
    path: "/invoice-format",
    description: "Invoice format examples and a free tool to generate invoice PDFs instantly.",
    date: "2026-02-14",
  },
  {
    title: "Receipt Template PDF (Free Download Generator)",
    path: "/receipt-template-pdf",
    description: "Create a printable receipt template PDF online with a free generator.",
    date: "2026-02-14",
  },
  {
    title: "Payment Receipt Format (Examples + Free PDF Generator)",
    path: "/payment-receipt-format",
    description: "Payment receipt format explained with examples and a free receipt PDF generator.",
    date: "2026-02-14",
  },
  {
    title: "Rent Receipt Template (Printable PDF Generator)",
    path: "/rent-receipt-template",
    description: "Generate a rent receipt template PDF with tenant/landlord details and rent period.",
    date: "2026-02-14",
  },
];
