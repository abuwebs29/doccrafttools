import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Delivery Note vs Invoice (Clear Comparison)",
  description: "Understand the difference between delivery notes and invoices.",
  alternates: { canonical: "/delivery-note-vs-invoice" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Delivery Note vs Invoice (Clear Comparison)"
      description="Understand the difference between delivery notes and invoices."
      path="/delivery-note-vs-invoice"
      category="Comparison"
      ctaLabel="Open delivery note generator"
      ctaHref="/delivery-note-generator"
      secondaryLabel="See invoice generator"
      secondaryHref="/invoice-generator"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Key difference at a glance", "paragraphs": ["Delivery Note vs Invoice (Clear Comparison) are related business topics, but they are not used at the same stage of the workflow.", "This page helps users understand the timing, purpose, and expected content of each document so they can choose the right one."]}, {"title": "What to compare", "bullets": ["Purpose of the document", "When it is issued or shared", "What action the recipient should take next", "Which details must stay consistent across related documents"]}, {"title": "Common mistakes to avoid", "bullets": ["Sending the wrong document for the current stage of work.", "Leaving out dates, totals, or reference numbers that connect documents together.", "Using inconsistent terminology that confuses clients or internal teams."]}]}
      faqs={[{"q": "Why does delivery note vs invoice (clear comparison) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related delivery note pages"
      trackerTitle="Delivery Note vs Invoice (Clear Comparison)"
    />
  );
}
