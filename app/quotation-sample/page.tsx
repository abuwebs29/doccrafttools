import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Quotation Sample",
  description: "Review a quotation sample with scope, pricing, validity date, terms, and approval-ready structure.",
  alternates: { canonical: "/quotation-sample" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Quotation Sample"
      description="Review a quotation sample with scope, pricing, validity date, terms, and approval-ready structure."
      path="/quotation-sample"
      category="Sample"
      ctaLabel="Open quotation generator"
      ctaHref="/quotation-generator"
      secondaryLabel="Compare with invoice generator"
      secondaryHref="/invoice-generator"
      highlights=['Clear structure', 'Practical explanation', 'Related tools linked']
      sections=[{"title": "Why samples matter", "paragraphs": ["A strong quotation sample shows the final structure before you prepare your own version.", "Samples are useful when you want to check field order, wording, and the level of detail a professional document should contain."]}, {"title": "What a good quotation sample should show", "bullets": ["Quotation number and date", "Business and customer details", "Item descriptions and pricing", "Validity date and optional tax", "Approval notes or payment expectations"]}, {"title": "How to use this page", "paragraphs": ["Use the sample as a reference, then create your own quotation with the generator or template page so the final version matches your business details."]}]
      faqs=[{"q": "Why does quotation sample matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]
      relatedTitle="Related quotation pages"
      trackerTitle="Quotation Sample"
    />
  );
}
