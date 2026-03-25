import type { Metadata } from "next";

type SeoEntry = {
  title: string;
  description: string;
  canonical?: string;
  robots?: Metadata["robots"];
};

export const SEO_BY_ROUTE: Record<string, SeoEntry> = {
  "/": {
    title: "Free Invoice Generator, Receipt Generator & PDF Templates | DocCraft Tools",
    description: "Create invoices, receipts, quotations, and business PDFs online for free. Customize details and download clean templates instantly with DocCraft Tools.",
    canonical: "/",
  },
  "/about": {
    title: "About DocCraft Tools \u2013 Free Invoice & Receipt Tools",
    description: "Learn about DocCraft Tools and how we help businesses, freelancers, and landlords create invoices, receipts, and templates faster.",
    canonical: "/about",
  },
  "/ar": {
    title: "\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0627\u0644\u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629 | DocCraft Tools",
    description: "\u0623\u0646\u0634\u0626 \u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0648\u0642\u0648\u0627\u0644\u0628 PDF \u0645\u062c\u0627\u0646\u064a\u0629 \u0628\u0633\u0631\u0639\u0629 \u0645\u0639 \u0623\u062f\u0648\u0627\u062a \u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646 DocCraft Tools.",
    canonical: "/ar",
  },
  "/ar/pdf-templates": {
    title: "\u0642\u0648\u0627\u0644\u0628 PDF \u0645\u062c\u0627\u0646\u064a\u0629 \u0644\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0627\u0644\u0625\u064a\u0635\u0627\u0644\u0627\u062a \u2013 \u062a\u062d\u0645\u064a\u0644 \u0648\u062a\u062e\u0635\u064a\u0635",
    description: "\u062d\u0645\u0651\u0644 \u0642\u0648\u0627\u0644\u0628 PDF \u0645\u062c\u0627\u0646\u064a\u0629 \u0644\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0627\u0644\u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0645\u0639 \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u062a\u062e\u0635\u064a\u0635 \u0648\u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0628\u0633\u0647\u0648\u0644\u0629.",
    canonical: "/ar/pdf-templates",
  },
  "/blank-receipt-template": {
    title: "Blank Receipt Template \u2013 Free Printable PDF, Word & Excel",
    description: "Download a blank receipt template you can fill in for cash, rent, services, and general payment records.",
    canonical: "/blank-receipt-template",
  },
  "/business-documents": {
    title: "Business Documents List \u2013 Templates, Examples & Formats",
    description: "Explore essential business documents with templates and examples, including invoices, receipts, quotations, and delivery notes.",
    canonical: "/business-documents",
  },
  "/business-receipt-template": {
    title: "Business Receipt Template \u2013 Free Download & Customization",
    description: "Download a business receipt template to confirm payments clearly for products, services, and general business use.",
    canonical: "/business-receipt-template",
  },
  "/cash-receipt-template": {
    title: "Free Cash Receipt Template \u2013 Download & Print Instantly",
    description: "Use a simple cash receipt template to record payments clearly. Customize and print a professional receipt in seconds.",
    canonical: "/cash-receipt-template",
  },
  "/commercial-invoice-template": {
    title: "Commercial Invoice Template \u2013 Free Download & Example",
    description: "Download a commercial invoice template for shipments and exports. Customize item, sender, and receiver details easily.",
    canonical: "/commercial-invoice-template",
  },
  "/delivery-note-format": {
    title: "Delivery Note Format \u2013 Examples, Fields & Free Template",
    description: "Learn a clean delivery note format with examples, required fields, and a free template for shipping records.",
    canonical: "/delivery-note-format",
  },
  "/delivery-note-generator": {
    title: "Free Delivery Note Generator \u2013 Create & Download PDF Instantly",
    description: "Generate delivery notes quickly with item details and customer information, then download a professional PDF instantly.",
    canonical: "/delivery-note-generator",
  },
  "/delivery-note-sample": {
    title: "Delivery Note Sample \u2013 DocCraft Tools",
    description: "Learn more about delivery note sample on DocCraft Tools.",
    canonical: "/delivery-note-sample",
  },
  "/delivery-note-vs-invoice": {
    title: "Delivery Note vs Invoice \u2013 Differences Explained",
    description: "Compare delivery notes and invoices and learn how each document supports shipping, proof of delivery, and billing.",
    canonical: "/delivery-note-vs-invoice",
  },
  "/difference-between-invoice-and-receipt": {
    title: "Difference Between Invoice and Receipt \u2013 Explained Simply",
    description: "Learn the difference between an invoice and a receipt with straightforward examples and practical use cases.",
    canonical: "/difference-between-invoice-and-receipt",
  },
  "/disclaimer": {
    title: "Disclaimer \u2013 DocCraft Tools",
    description: "Read the legal disclaimer for DocCraft Tools and understand the limits of the information, templates, and tools provided.",
    canonical: "/disclaimer",
  },
  "/embed/delivery-note": {
    title: "Delivery Note Generator Embed \u2013 DocCraft Tools",
    description: "Embedded delivery note generator for DocCraft Tools.",
    canonical: "/embed/delivery-note",
    robots: { index: false, follow: false },
  },
  "/embed/invoice": {
    title: "Invoice Generator Embed \u2013 DocCraft Tools",
    description: "Embedded invoice generator for DocCraft Tools.",
    canonical: "/embed/invoice",
    robots: { index: false, follow: false },
  },
  "/embed/quotation": {
    title: "Quotation Generator Embed \u2013 DocCraft Tools",
    description: "Embedded quotation generator for DocCraft Tools.",
    canonical: "/embed/quotation",
    robots: { index: false, follow: false },
  },
  "/embed/receipt": {
    title: "Receipt Generator Embed \u2013 DocCraft Tools",
    description: "Embedded receipt generator for DocCraft Tools.",
    canonical: "/embed/receipt",
    robots: { index: false, follow: false },
  },
  "/embed/rent-receipt": {
    title: "Rent Receipt Generator Embed \u2013 DocCraft Tools",
    description: "Embedded rent receipt generator for DocCraft Tools.",
    canonical: "/embed/rent-receipt",
    robots: { index: false, follow: false },
  },
  "/estimate-vs-invoice": {
    title: "Estimate vs Invoice \u2013 Key Differences & Examples",
    description: "Compare estimates and invoices with simple explanations. Learn when to use each and how they fit into business workflows.",
    canonical: "/estimate-vs-invoice",
  },
  "/estimate-vs-quotation": {
    title: "Estimate vs Quotation \u2013 What\u2019s the Difference?",
    description: "Understand the difference between an estimate and a quotation with clear explanations and examples.",
    canonical: "/estimate-vs-quotation",
  },
  "/faq": {
    title: "Invoice & Receipt FAQ \u2013 Common Questions Answered",
    description: "Find clear answers to common questions about invoices, receipts, templates, formats, and online document generators.",
    canonical: "/faq",
  },
  "/freelance-invoice-template": {
    title: "Free Freelance Invoice Template \u2013 Download & Customize",
    description: "Download a freelance invoice template for projects, services, deposits, and final balances. Customize and use it fast.",
    canonical: "/freelance-invoice-template",
  },
  "/gst-invoice-generator": {
    title: "GST Invoice Generator \u2013 Create Tax Invoices Online for Free",
    description: "Create GST-ready invoices online with item details, taxes, and totals, then download a clean PDF instantly.",
    canonical: "/gst-invoice-generator",
  },
  "/guides": {
    title: "Free Invoice & Receipt Guides \u2013 Templates, Formats & Examples",
    description: "Browse practical guides for invoices, receipts, formats, templates, and business documents with examples and free tools.",
    canonical: "/guides",
  },
  "/how-to-make-an-invoice": {
    title: "How to Make an Invoice \u2013 Step-by-Step Guide + Free Template",
    description: "Learn how to create a professional invoice step by step. Includes examples, tips, and a free template to get started quickly.",
    canonical: "/how-to-make-an-invoice",
  },
  "/how-to-make-an-invoice-for-freelancer": {
    title: "How to Make an Invoice for Freelancers \u2013 Full Guide",
    description: "Learn how freelancers can create clear, professional invoices with item details, rates, and payment terms.",
    canonical: "/how-to-make-an-invoice-for-freelancer",
  },
  "/how-to-write-receipt": {
    title: "How to Write a Receipt \u2013 Complete Guide with Examples",
    description: "Learn how to write a receipt with clear examples for cash, rent, services, and general business payments.",
    canonical: "/how-to-write-receipt",
  },
  "/invoice-due-date-meaning": {
    title: "Invoice Due Date Meaning \u2013 Explained Simply",
    description: "Understand what an invoice due date means, why it matters, and how to set clear payment expectations.",
    canonical: "/invoice-due-date-meaning",
  },
  "/invoice-for-consultants": {
    title: "Invoice for Consultants \u2013 Free Template & Billing Guide",
    description: "Learn what to include on an invoice for consultants, including deliverables, rates, totals, and payment terms.",
    canonical: "/invoice-for-consultants",
  },
  "/invoice-for-freelancers": {
    title: "Invoice for Freelancers \u2013 Free Template & Guide",
    description: "Create better freelance invoices with clear service details, rates, and payment instructions.",
    canonical: "/invoice-for-freelancers",
  },
  "/invoice-for-services": {
    title: "Invoice for Services \u2013 Template, Fields & Examples",
    description: "Learn how to structure an invoice for services with a clean layout, clear descriptions, and easy-to-review totals.",
    canonical: "/invoice-for-services",
  },
  "/invoice-format": {
    title: "Invoice Format \u2013 Examples, Rules & Free Template",
    description: "Learn a practical invoice format with examples, required fields, and a free template to create clean, professional invoices.",
    canonical: "/invoice-format",
  },
  "/invoice-format-uae": {
    title: "Invoice Format UAE \u2013 Free Template + Example (VAT Ready)",
    description: "Learn the correct UAE invoice format with examples. Download a VAT-ready template and create compliant invoices easily.",
    canonical: "/invoice-format-uae",
  },
  "/invoice-format-uk": {
    title: "Invoice Format UK \u2013 Example, Rules & Free Template",
    description: "Understand the UK invoice format with examples, core fields, and a practical template for consistent billing.",
    canonical: "/invoice-format-uk",
  },
  "/invoice-generator": {
    title: "Free Invoice Generator \u2013 Create, Customize & Download PDF Instantly",
    description: "Create professional invoices online in seconds. Add items, taxes, and client details, then download a ready-to-use PDF instantly \u2014 no signup required.",
    canonical: "/invoice-generator",
  },
  "/invoice-number-format": {
    title: "Invoice Number Format \u2013 Examples, Rules & Best Practices",
    description: "Understand invoice numbering formats with clear examples. Learn best practices to organize and track invoices professionally.",
    canonical: "/invoice-number-format",
  },
  "/invoice-payment-terms-explained": {
    title: "Invoice Payment Terms Explained \u2013 Examples & Best Practices",
    description: "Learn common invoice payment terms, how to write them clearly, and how they affect billing and collections.",
    canonical: "/invoice-payment-terms-explained",
  },
  "/invoice-sample": {
    title: "Invoice Sample \u2013 Free Example & Template",
    description: "See a practical invoice sample with the main fields businesses and freelancers usually include in professional billing.",
    canonical: "/invoice-sample",
  },
  "/invoice-template": {
    title: "Free Invoice Template (Word, Excel, PDF) \u2013 Download & Customize",
    description: "Download free invoice templates in PDF, Word, and Excel formats. Customize easily for business, freelance, or service use.",
    canonical: "/invoice-template",
  },
  "/invoice-template-excel": {
    title: "Free Invoice Template Excel \u2013 Download & Customize Easily",
    description: "Download an Excel invoice template with a clean structure for items, rates, and totals. Customize it for your workflow.",
    canonical: "/invoice-template-excel",
  },
  "/invoice-template-pdf": {
    title: "Free Invoice Template PDF \u2013 Download & Customize Instantly",
    description: "Download a ready-to-use invoice template in PDF format. Customize details and create professional invoices quickly.",
    canonical: "/invoice-template-pdf",
  },
  "/invoice-template-pdf-free-download": {
    title: "Invoice Template PDF Free Download \u2013 Ready-to-Use Format",
    description: "Get a free invoice template PDF download for business or freelance use. Customize details and use it instantly.",
    canonical: "/invoice-template-pdf-free-download",
  },
  "/invoice-template-word": {
    title: "Free Invoice Template Word \u2013 Download, Edit & Use Instantly",
    description: "Download a free invoice template in Word format. Edit, customize, and use it for business or freelance billing.",
    canonical: "/invoice-template-word",
  },
  "/invoice-vs-quotation": {
    title: "Invoice vs Quotation \u2013 Key Differences Explained",
    description: "Learn the difference between an invoice and a quotation with simple examples and when to use each document.",
    canonical: "/invoice-vs-quotation",
  },
  "/invoice-vs-receipt-difference": {
    title: "Invoice vs Receipt \u2013 Key Differences Explained (With Examples)",
    description: "Understand the key differences between invoices and receipts. Learn when to use each with simple examples and explanations.",
    canonical: "/invoice-vs-receipt-difference",
  },
  "/payment-receipt-format": {
    title: "Payment Receipt Format \u2013 Examples & Free Template",
    description: "Explore payment receipt formats with examples and a free template to create clear, professional proof-of-payment records.",
    canonical: "/payment-receipt-format",
  },
  "/pdf-templates": {
    title: "Free PDF Templates \u2013 Download Invoice, Receipt & Business Templates",
    description: "Download free PDF templates for invoices, receipts, quotations, and business documents. Customize and use them instantly.",
    canonical: "/pdf-templates",
  },
  "/privacy": {
    title: "Privacy Policy \u2013 DocCraft Tools",
    description: "Read the privacy policy for DocCraft Tools, including how site data is handled and protected.",
    canonical: "/privacy",
  },
  "/proforma-invoice-template": {
    title: "Proforma Invoice Template \u2013 Free Download & Customization",
    description: "Get a free proforma invoice template for pre-sale estimates and transaction planning. Easy to edit and share.",
    canonical: "/proforma-invoice-template",
  },
  "/proforma-vs-invoice": {
    title: "Proforma Invoice vs Invoice \u2013 Explained with Examples",
    description: "Understand how a proforma invoice differs from a standard invoice, including purpose, timing, and typical use.",
    canonical: "/proforma-vs-invoice",
  },
  "/quotation-generator": {
    title: "Free Quote & Estimate Generator \u2013 Create Professional Quotes Online",
    description: "Create professional quotations online with pricing, items, and customer details, then download a clean PDF instantly \u2014 no signup required.",
    canonical: "/quotation-generator",
  },
  "/quotation-sample": {
    title: "Quotation Sample \u2013 Free Example & Format",
    description: "See a quotation sample with pricing, terms, and customer details, then create your own professional quote.",
    canonical: "/quotation-sample",
  },
  "/receipt-for-business": {
    title: "Receipt for Business \u2013 Template, Fields & Examples",
    description: "Learn how to issue a business receipt with the right payment details, proof-of-payment fields, and a clear layout.",
    canonical: "/receipt-for-business",
  },
  "/receipt-for-rent": {
    title: "Receipt for Rent \u2013 Format, Example & Template",
    description: "See what to include on a receipt for rent payments and how to create a clean proof-of-payment record.",
    canonical: "/receipt-for-rent",
  },
  "/receipt-generator": {
    title: "Free Receipt Generator (No Signup) \u2013 Create & Download PDF Instantly",
    description: "Generate clean and professional receipts instantly. Customize details, add payment info, and download a printable PDF \u2014 fast and free.",
    canonical: "/receipt-generator",
  },
  "/receipt-sample": {
    title: "Receipt Sample \u2013 Free Example & Template",
    description: "Review a receipt sample with payment details, dates, and amounts, then use the matching template or generator.",
    canonical: "/receipt-sample",
  },
  "/receipt-template": {
    title: "Free Receipt Template (PDF, Word, Excel) \u2013 Download & Print",
    description: "Download free receipt templates in PDF, Word, and Excel formats for business, rent, and service payments.",
    canonical: "/receipt-template",
  },
  "/receipt-template-excel": {
    title: "Free Receipt Template Excel \u2013 Download & Customize",
    description: "Download a receipt template in Excel format with a simple structure for payment details and totals.",
    canonical: "/receipt-template-excel",
  },
  "/receipt-template-pdf": {
    title: "Free Receipt Template PDF \u2013 Download & Print Instantly",
    description: "Download a professional receipt template in PDF format. Customize details and print or share it easily.",
    canonical: "/receipt-template-pdf",
  },
  "/receipt-template-word": {
    title: "Free Receipt Template Word \u2013 Download & Edit Easily",
    description: "Get a free receipt template in Word format. Customize names, amounts, and payment details quickly.",
    canonical: "/receipt-template-word",
  },
  "/receipt-vs-invoice": {
    title: "Receipt vs Invoice \u2013 Differences Explained Clearly",
    description: "See how receipts and invoices differ in purpose, timing, and content with practical business examples.",
    canonical: "/receipt-vs-invoice",
  },
  "/rent-receipt-format": {
    title: "Rent Receipt Format \u2013 Free Template & Example",
    description: "Learn the proper rent receipt format with examples and a free template for landlords and tenants.",
    canonical: "/rent-receipt-format",
  },
  "/rent-receipt-generator": {
    title: "Rent Receipt Generator \u2013 Create & Download Rental Receipts (Free)",
    description: "Create rent receipts for tenants and landlords in seconds. Customize payment details and download a professional PDF instantly \u2014 free and easy.",
    canonical: "/rent-receipt-generator",
  },
  "/rent-receipt-template": {
    title: "Free Rent Receipt Template \u2013 Download & Customize",
    description: "Download a free rent receipt template for landlords and tenants. Customize payment details and print instantly.",
    canonical: "/rent-receipt-template",
  },
  "/search": {
    title: "Search \u2013 DocCraft Tools",
    description: "Search DocCraft Tools for invoice, receipt, quotation, and template pages.",
    canonical: "/search",
    robots: { index: false, follow: true },
  },
  "/simple-invoice-format": {
    title: "Simple Invoice Format \u2013 Free Template & Example",
    description: "See a simple invoice format with clear examples and a free template for straightforward billing.",
    canonical: "/simple-invoice-format",
  },
  "/simple-invoice-template": {
    title: "Simple Invoice Template \u2013 Free Download & Easy Customization",
    description: "Download a simple invoice template for fast billing. Add items, totals, and payment details with minimal editing.",
    canonical: "/simple-invoice-template",
  },
  "/status": {
    title: "Status \u2013 DocCraft Tools",
    description: "Service status and uptime information for DocCraft Tools.",
    canonical: "/status",
    robots: { index: false, follow: true },
  },
  "/tax-invoice-template": {
    title: "Tax Invoice Template \u2013 Free Download & Example",
    description: "Download a tax invoice template with room for tax lines, totals, and business details. Customize and use instantly.",
    canonical: "/tax-invoice-template",
  },
  "/what-is-a-tax-invoice": {
    title: "What Is a Tax Invoice? Meaning, Example & Key Fields",
    description: "Learn what a tax invoice is, when to use it, and which fields to include for clear, compliant billing.",
    canonical: "/what-is-a-tax-invoice",
  },
};

export function buildMetadata(path: string): Metadata {
  const entry = SEO_BY_ROUTE[path];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: entry.canonical ? { canonical: entry.canonical } : undefined,
    robots: entry.robots,
  };
}

export function buildInvoiceFormatMetadata(country: string): Metadata {
  const label = titleFromSlug(country);
  return {
    title: `Invoice Format ${label} – Example, Rules & Free Template`,
    description: `Learn the invoice format for ${label} with examples, core fields, and practical tips for clear and consistent billing.`,
    alternates: { canonical: `/invoice-format/${country}` },
  };
}

export function buildInvoiceTemplateForMetadata(slug: string): Metadata {
  const label = titleFromSlug(slug);
  return {
    title: `Invoice Template for ${label} – Free Download & Customization`,
    description: `Use a free invoice template for ${label.toLowerCase()} work. Learn what to include and create cleaner invoices faster.`,
    alternates: { canonical: `/invoice-template-for/${slug}` },
  };
}

export function buildReceiptForMetadata(slug: string): Metadata {
  const label = titleFromSlug(slug);
  return {
    title: `Receipt for ${label} – Format, Example & Template`,
    description: `Learn how to issue a receipt for ${label.toLowerCase()} payments with the right fields, clear wording, and a practical proof-of-payment structure.`,
    alternates: { canonical: `/receipt-for/${slug}` },
  };
}

export function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}