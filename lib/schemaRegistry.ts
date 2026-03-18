import type { TemplateId } from "@/lib/templateTypes";

const site = "https://doccrafttools.com";

export type FaqItem = { q: string; a: string };

export type ToolSchema = {
  title: string;
  description: string;
  canonicalPath: string;
  appName: string;
  faq: FaqItem[];
};

export const toolSchema: Record<TemplateId, ToolSchema> = {
  invoice: {
    title: "Free Invoice Generator (PDF) — Instant Download",
    description: "Create a professional invoice PDF online. Add items, tax, notes and a logo. Download instantly.",
    canonicalPath: "/invoice-generator",
    appName: "Invoice Generator",
    faq: [
      { q: "Do you store my invoice data?", a: "No. PDFs are generated locally in your browser and we do not store your form data." },
      { q: "Is this invoice generator free?", a: "Yes. You can generate and download invoices as PDF for free." },
      { q: "Can I add multiple items?", a: "Yes. Add as many items as you need; the PDF supports multiple pages." },
      { q: "Can I add my logo?", a: "Yes. Upload a logo and it will be embedded into the PDF." },
      { q: "Can I include tax?", a: "Yes. Add an optional tax percentage and the total will be calculated automatically." },
      { q: "Is the PDF printable?", a: "Yes. The generated PDF is formatted for clean A4 printing." },
    ],
  },
  receipt: {
    title: "Free Receipt Generator (PDF) — Printable Payment Receipt",
    description: "Generate a clean payment receipt PDF instantly. Add amount, payer, purpose, method and logo.",
    canonicalPath: "/receipt-generator",
    appName: "Receipt Generator",
    faq: [
      { q: "Do you store my receipt data?", a: "No. PDF generation happens in your browser. We do not store your inputs." },
      { q: "Can I add a logo?", a: "Yes. Upload a logo and it will be included in the receipt PDF." },
      { q: "Can I use this as proof of payment?", a: "It’s commonly used as proof of payment, but verify requirements for your situation." },
      { q: "Is it free?", a: "Yes. The receipt PDF generator is free to use." },
      { q: "Can I use it for rent payments?", a: "Yes, or use the dedicated Rent Receipt generator for a rent-specific layout." },
      { q: "Will it work on mobile?", a: "Yes. The tool works on mobile and desktop." },
    ],
  },
  quotation: {
    title: "Free Quotation / Estimate Generator (PDF) — Instant Quote",
    description: "Create a professional quotation PDF online. Add items, tax, validity date, notes and logo.",
    canonicalPath: "/quotation-generator",
    appName: "Quotation / Estimate Generator",
    faq: [
      { q: "What is a quotation?", a: "A quotation (estimate) proposes pricing before you issue an invoice." },
      { q: "Can I add a validity date?", a: "Yes. Add a 'valid until' date to indicate how long the quote applies." },
      { q: "Do you store my quote data?", a: "No. Quotes are generated locally in your browser." },
      { q: "Can I add multiple items?", a: "Yes. Add multiple line items and download a multi-page PDF if needed." },
      { q: "Can I add tax?", a: "Yes. Add an optional tax percentage and totals will be calculated." },
      { q: "Can I add my logo?", a: "Yes. Upload a logo and it will be embedded into the PDF." },
    ],
  },
  delivery_note: {
    title: "Free Delivery Note Generator (PDF) — Printable DN",
    description: "Generate a delivery note PDF for delivered goods. Add sender/receiver, items, reference and notes.",
    canonicalPath: "/delivery-note-generator",
    appName: "Delivery Note Generator",
    faq: [
      { q: "What is a delivery note?", a: "A delivery note records what was delivered and to whom, often signed as proof of receipt." },
      { q: "Do you store my delivery note data?", a: "No. The PDF is generated locally in your browser." },
      { q: "Can I include a reference number?", a: "Yes. Add a reference like PO number or invoice number." },
      { q: "Can I add many items?", a: "Yes. The tool supports multiple items and adds pages automatically." },
      { q: "Is this the same as an invoice?", a: "No. A delivery note confirms delivery; an invoice requests payment." },
      { q: "Can I print it?", a: "Yes. The generated PDF is printable." },
    ],
  },
  rent_receipt: {
    title: "Free Rent Receipt Generator (PDF) — Instant Printable Receipt",
    description: "Create a rent receipt PDF in seconds. Tenant/landlord, property, rent period, amount and method.",
    canonicalPath: "/rent-receipt-generator",
    appName: "Rent Receipt Generator",
    faq: [
      { q: "What should a rent receipt include?", a: "Tenant and landlord names, property address, rent period, amount paid, date, and payment method." },
      { q: "Do you store my rent receipt data?", a: "No. PDFs are generated locally in your browser." },
      { q: "Can I add a logo?", a: "Yes. Upload a logo and it will be embedded into the PDF." },
      { q: "Is it free?", a: "Yes. You can generate and download rent receipts for free." },
      { q: "Can I use it for monthly rent?", a: "Yes. Set the rent period (e.g., Feb 2026) and generate the receipt." },
      { q: "Does it support printing?", a: "Yes. The PDF is formatted for clean printing." },
    ],
  },
};

export function buildWebAppJsonLd(toolId: TemplateId) {
  const t = toolSchema[toolId];
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: t.appName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    url: `${site}${t.canonicalPath}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function buildFaqJsonLd(toolId: TemplateId) {
  const t = toolSchema[toolId];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}
