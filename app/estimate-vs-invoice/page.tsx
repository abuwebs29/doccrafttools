import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Estimate vs Invoice",
  description: "Compare estimates and invoices so you know when to quote work and when to send a final bill.",
  alternates: { canonical: "/estimate-vs-invoice" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Estimate vs Invoice"
      description="Compare estimates and invoices so you know when to quote work and when to send a final bill."
      path="/estimate-vs-invoice"
      category="Comparison"
      ctaLabel="Open quotation generator"
      ctaHref="/quotation-generator"
      secondaryLabel="Compare with invoice generator"
      secondaryHref="/invoice-generator"
      highlights=['Clear structure', 'Practical explanation', 'Related tools linked']
      sections=[{"title": "Key difference at a glance", "paragraphs": ["Estimate vs Invoice are related business topics, but they are not used at the same stage of the workflow.", "This page helps users understand the timing, purpose, and expected content of each document so they can choose the right one."]}, {"title": "What to compare", "bullets": ["Purpose of the document", "When it is issued or shared", "What action the recipient should take next", "Which details must stay consistent across related documents"]}, {"title": "Common mistakes to avoid", "bullets": ["Sending the wrong document for the current stage of work.", "Leaving out dates, totals, or reference numbers that connect documents together.", "Using inconsistent terminology that confuses clients or internal teams."]}]
      faqs=[{"q": "Why does estimate vs invoice matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]
      relatedTitle="Related quotation pages"
      trackerTitle="Estimate vs Invoice"
    />
  );
}
