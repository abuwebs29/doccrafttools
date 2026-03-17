import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Rent Receipt Format (Examples + Printable PDF)",
  description: "Rent receipt format explained with examples and a printable PDF generator for landlords and tenants.",
  alternates: { canonical: "/rent-receipt-format" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Rent Receipt Format (Examples + Printable PDF)"
      description="Rent receipt format explained with examples and a printable PDF generator for landlords and tenants."
      path="/rent-receipt-format"
      category="Format guide"
      ctaLabel="Open rent receipt generator"
      ctaHref="/rent-receipt-generator"
      secondaryLabel="See receipt generator"
      secondaryHref="/receipt-generator"
      highlights=['Clear structure', 'Practical explanation', 'Related tools linked']
      sections=[{"title": "Why format matters", "paragraphs": ["A practical rent receipt format improves clarity, speeds up review, and helps reduce disputes about totals, dates, or responsibilities.", "This page explains the structure that makes the document easier to read and more consistent across repeated use."]}, {"title": "Recommended rent receipt structure", "bullets": ["Receipt number and payment date", "Tenant and landlord names", "Property address", "Rent period covered", "Amount paid and payment method"]}, {"title": "Best practices", "bullets": ["Use clear labels and simple wording.", "Keep dates, numbers, and references consistent.", "Review local tax or compliance requirements when relevant."]}]
      faqs=[{"q": "Why does rent receipt format (examples + printable pdf) matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]
      relatedTitle="Related rent receipt pages"
      trackerTitle="Rent Receipt Format (Examples + Printable PDF)"
    />
  );
}
