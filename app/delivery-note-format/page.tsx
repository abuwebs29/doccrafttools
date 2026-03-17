import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Delivery Note Format (Template + Examples)",
  description: "Delivery note format explained with template fields, examples, and tips for businesses shipping goods.",
  alternates: { canonical: "/delivery-note-format" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Delivery Note Format (Template + Examples)"
      description="Delivery note format explained with template fields, examples, and tips for businesses shipping goods."
      path="/delivery-note-format"
      category="Format guide"
      ctaLabel="Open delivery note generator"
      ctaHref="/delivery-note-generator"
      secondaryLabel="See invoice generator"
      secondaryHref="/invoice-generator"
      highlights=['Clear structure', 'Practical explanation', 'Related tools linked']
      sections=[{"title": "Why format matters", "paragraphs": ["A practical delivery note format improves clarity, speeds up review, and helps reduce disputes about totals, dates, or responsibilities.", "This page explains the structure that makes the document easier to read and more consistent across repeated use."]}, {"title": "Recommended delivery note structure", "bullets": ["Delivery note number and delivery date", "Sender and receiver details", "Item list and quantities delivered", "Reference number such as PO or invoice", "Notes, signatures, or receiving confirmation"]}, {"title": "Best practices", "bullets": ["Use clear labels and simple wording.", "Keep dates, numbers, and references consistent.", "Review local tax or compliance requirements when relevant."]}]
      faqs=[{"q": "Why does delivery note format (template + examples) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]
      relatedTitle="Related delivery note pages"
      trackerTitle="Delivery Note Format (Template + Examples)"
    />
  );
}
