import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/what-is-a-tax-invoice");

export default function Page() {
  return (
    <ArticleLandingPage
      title="What Is a Tax Invoice? (VAT/GST Invoice Guide)"
      description="A tax invoice includes VAT/GST details required for compliant billing. Learn what to include and generate a tax invoice PDF instantly."
      path="/what-is-a-tax-invoice"
      category="How-to guide"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Start with the purpose", "paragraphs": ["This guide explains how to handle what is a tax invoice? (vat/gst invoice guide) in a way that is clear for both you and the recipient.", "The best results come from using a consistent structure, clear labels, and wording that makes the next action easy to understand."]}, {"title": "Steps to follow", "bullets": ["Identify the key fields that must appear on the document.", "Use consistent numbering and date formats.", "Review wording, totals, and references before sending or printing.", "Keep a saved copy for accounting and recordkeeping."]}, {"title": "Helpful next step", "paragraphs": ["After reviewing the basics, use the related invoice tool to build a faster and cleaner version online."]}]}
      faqs={[{"q": "Why does what is a tax invoice? (vat/gst invoice guide) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related invoice pages"
      trackerTitle="What Is a Tax Invoice? (VAT/GST Invoice Guide)"
    />
  );
}