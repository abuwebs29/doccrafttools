import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/invoice-vs-receipt-difference");

export default function Page() {
  return (
    <ArticleLandingPage
      title="Invoice vs Receipt: What\u2019s the Difference?"
      description="Invoices request payment. Receipts confirm payment. Learn the difference with simple examples\u2014and create PDFs instantly."
      path="/invoice-vs-receipt-difference"
      category="Comparison"
      ctaLabel="Open receipt generator"
      ctaHref="/receipt-generator"
      secondaryLabel="Browse receipt templates"
      secondaryHref="/receipt-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Key difference at a glance", "paragraphs": ["Invoice vs Receipt: What’s the Difference? are related business topics, but they are not used at the same stage of the workflow.", "This page helps users understand the timing, purpose, and expected content of each document so they can choose the right one."]}, {"title": "What to compare", "bullets": ["Purpose of the document", "When it is issued or shared", "What action the recipient should take next", "Which details must stay consistent across related documents"]}, {"title": "Common mistakes to avoid", "bullets": ["Sending the wrong document for the current stage of work.", "Leaving out dates, totals, or reference numbers that connect documents together.", "Using inconsistent terminology that confuses clients or internal teams."]}]}
      faqs={[{"q": "Why does invoice vs receipt: what’s the difference? matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related receipt pages"
      trackerTitle="Invoice vs Receipt: What\u2019s the Difference?"
    />
  );
}