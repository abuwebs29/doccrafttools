import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Delivery Note Sample",
  description: "Use a delivery note sample to understand item lists, dispatch information, signatures, and received-by details.",
  alternates: { canonical: "/delivery-note-sample" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Delivery Note Sample"
      description="Use a delivery note sample to understand item lists, dispatch information, signatures, and received-by details."
      path="/delivery-note-sample"
      category="Sample"
      ctaLabel="Open delivery note generator"
      ctaHref="/delivery-note-generator"
      secondaryLabel="See invoice generator"
      secondaryHref="/invoice-generator"
      highlights=['Clear structure', 'Practical explanation', 'Related tools linked']
      sections=[{"title": "Why samples matter", "paragraphs": ["A strong delivery note sample shows the final structure before you prepare your own version.", "Samples are useful when you want to check field order, wording, and the level of detail a professional document should contain."]}, {"title": "What a good delivery note sample should show", "bullets": ["Delivery note number and delivery date", "Sender and receiver details", "Item list and quantities delivered", "Reference number such as PO or invoice", "Notes, signatures, or receiving confirmation"]}, {"title": "How to use this page", "paragraphs": ["Use the sample as a reference, then create your own delivery note with the generator or template page so the final version matches your business details."]}]
      faqs=[{"q": "Why does delivery note sample matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]
      relatedTitle="Related delivery note pages"
      trackerTitle="Delivery Note Sample"
    />
  );
}
