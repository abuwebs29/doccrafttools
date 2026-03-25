import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Invoice Format (Simple Professional Layout Guide)",
  description: "Learn the correct invoice format with examples and required fields for freelancers and businesses.",
  alternates: { canonical: "/invoice-format" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Invoice Format (Simple Professional Layout Guide)"
      description="Learn the correct invoice format with examples and required fields for freelancers and businesses."
      path="/invoice-format"
      category="Format guide"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Why format matters", "paragraphs": ["A practical invoice format improves clarity, speeds up review, and helps reduce disputes about totals, dates, or responsibilities.", "This page explains the structure that makes the document easier to read and more consistent across repeated use."]}, {"title": "Recommended invoice structure", "bullets": ["Business name and contact details", "Client billing details", "Invoice number and issue date", "Due date and payment terms", "Line items, taxes, discounts, and total"]}, {"title": "Best practices", "bullets": ["Use clear labels and simple wording.", "Keep dates, numbers, and references consistent.", "Review local tax or compliance requirements when relevant."]}]}
      faqs={[{"q": "Why does invoice format (simple professional layout guide) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related invoice pages"
      trackerTitle="Invoice Format (Simple Professional Layout Guide)"
    />
  );
}
