import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/receipt-sample");

export default function Page() {
  return (
    <ArticleLandingPage
      title="Receipt Sample"
      description="See the fields and structure of a printable receipt sample for payments, rent, and business transactions."
      path="/receipt-sample"
      category="Sample"
      ctaLabel="Open receipt generator"
      ctaHref="/receipt-generator"
      secondaryLabel="Browse receipt templates"
      secondaryHref="/receipt-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Why samples matter", "paragraphs": ["A strong receipt sample shows the final structure before you prepare your own version.", "Samples are useful when you want to check field order, wording, and the level of detail a professional document should contain."]}, {"title": "What a good receipt sample should show", "bullets": ["Receipt number and payment date", "Payer and receiver details", "Amount paid and payment method", "Purpose of payment", "Optional notes or signature"]}, {"title": "How to use this page", "paragraphs": ["Use the sample as a reference, then create your own receipt with the generator or template page so the final version matches your business details."]}]}
      faqs={[{"q": "Why does receipt sample matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related receipt pages"
      trackerTitle="Receipt Sample"
    />
  );
}