import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/proforma-vs-invoice");

export default function Page() {
  return (
    <ArticleLandingPage
      title="Proforma Invoice vs Invoice (What\u2019s the Difference?)"
      description="Learn when to use proforma invoices versus standard invoices."
      path="/proforma-vs-invoice"
      category="Comparison"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Key difference at a glance", "paragraphs": ["Proforma Invoice vs Invoice (What’s the Difference?) are related business topics, but they are not used at the same stage of the workflow.", "This page helps users understand the timing, purpose, and expected content of each document so they can choose the right one."]}, {"title": "What to compare", "bullets": ["Purpose of the document", "When it is issued or shared", "What action the recipient should take next", "Which details must stay consistent across related documents"]}, {"title": "Common mistakes to avoid", "bullets": ["Sending the wrong document for the current stage of work.", "Leaving out dates, totals, or reference numbers that connect documents together.", "Using inconsistent terminology that confuses clients or internal teams."]}]}
      faqs={[{"q": "Why does proforma invoice vs invoice (what’s the difference?) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related invoice pages"
      trackerTitle="Proforma Invoice vs Invoice (What\u2019s the Difference?)"
    />
  );
}