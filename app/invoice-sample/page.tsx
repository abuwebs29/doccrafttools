import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Invoice Sample",
  description: "See what a professional invoice sample should include, from business details to totals and payment instructions.",
  alternates: { canonical: "/invoice-sample" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Invoice Sample"
      description="See what a professional invoice sample should include, from business details to totals and payment instructions."
      path="/invoice-sample"
      category="Sample"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "Why samples matter", "paragraphs": ["A strong invoice sample shows the final structure before you prepare your own version.", "Samples are useful when you want to check field order, wording, and the level of detail a professional document should contain."]}, {"title": "What a good invoice sample should show", "bullets": ["Business name and contact details", "Client billing details", "Invoice number and issue date", "Due date and payment terms", "Line items, taxes, discounts, and total"]}, {"title": "How to use this page", "paragraphs": ["Use the sample as a reference, then create your own invoice with the generator or template page so the final version matches your business details."]}]}
      faqs={[{"q": "Why does invoice sample matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related invoice pages"
      trackerTitle="Invoice Sample"
    />
  );
}
