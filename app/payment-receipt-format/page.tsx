import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/payment-receipt-format");

export default function Page() {
  return (
    <ArticleLandingPage
      title="Payment Receipt Format (Printable Example)"
      description="Understand the correct payment receipt format and generate a printable PDF instantly."
      path="/payment-receipt-format"
      category="Format guide"
      ctaLabel="Open receipt generator"
      ctaHref="/receipt-generator"
      secondaryLabel="Browse receipt templates"
      secondaryHref="/receipt-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Why format matters", "paragraphs": ["A practical receipt format improves clarity, speeds up review, and helps reduce disputes about totals, dates, or responsibilities.", "This page explains the structure that makes the document easier to read and more consistent across repeated use."]}, {"title": "Recommended receipt structure", "bullets": ["Receipt number and payment date", "Payer and receiver details", "Amount paid and payment method", "Purpose of payment", "Optional notes or signature"]}, {"title": "Best practices", "bullets": ["Use clear labels and simple wording.", "Keep dates, numbers, and references consistent.", "Review local tax or compliance requirements when relevant."]}]}
      faqs={[{"q": "Why does payment receipt format (printable example) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related receipt pages"
      trackerTitle="Payment Receipt Format (Printable Example)"
    />
  );
}