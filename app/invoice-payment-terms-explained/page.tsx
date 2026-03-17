import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Invoice Payment Terms Explained (Net 30, Net 15, Due on Receipt)",
  description: "Understand invoice payment terms like Net 30, Net 15, and Due on Receipt. Learn best practices and generate invoices with clear terms.",
  alternates: { canonical: "/invoice-payment-terms-explained" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Invoice Payment Terms Explained (Net 30, Net 15, Due on Receipt)"
      description="Understand invoice payment terms like Net 30, Net 15, and Due on Receipt. Learn best practices and generate invoices with clear terms."
      path="/invoice-payment-terms-explained"
      category="Guide"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights=['Clear structure', 'Practical explanation', 'Related tools linked']
      sections=[{"title": "Why format matters", "paragraphs": ["A practical invoice format improves clarity, speeds up review, and helps reduce disputes about totals, dates, or responsibilities.", "This page explains the structure that makes the document easier to read and more consistent across repeated use."]}, {"title": "Recommended invoice structure", "bullets": ["Business name and contact details", "Client billing details", "Invoice number and issue date", "Due date and payment terms", "Line items, taxes, discounts, and total"]}, {"title": "Best practices", "bullets": ["Use clear labels and simple wording.", "Keep dates, numbers, and references consistent.", "Review local tax or compliance requirements when relevant."]}]
      faqs=[{"q": "Why does invoice payment terms explained (net 30, net 15, due on receipt) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]
      relatedTitle="Related invoice pages"
      trackerTitle="Invoice Payment Terms Explained (Net 30, Net 15, Due on Receipt)"
    />
  );
}
