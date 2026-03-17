import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Business Documents Generator",
  description: "Generate invoices, receipts, quotations, delivery notes, and rent receipts from one business document hub.",
  alternates: { canonical: "/business-documents" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Business Documents Generator"
      description="Generate invoices, receipts, quotations, delivery notes, and rent receipts from one business document hub."
      path="/business-documents"
      category="Business documents hub"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse PDF templates"
      secondaryHref="/pdf-templates"
      highlights={["Templates", "Guides", "Tools linked together"]}
      sections={[
        { title: "What you can find here", paragraphs: ["This hub brings together core document tools, supporting template pages, and educational content so users can move from research to action quickly.", "It is designed to strengthen both usability and search visibility by connecting high-intent pages with helpful supporting content."] },
        { title: "Best way to use the hub", bullets: ["Start with the main generator when you need to create a document now.", "Use template pages when you want a reusable structure.", "Read format, sample, or comparison pages when you need context before sending a document."] },
        { title: "Why this matters for growth", paragraphs: ["A strong hub page helps users discover related routes and helps search engines understand the full topic cluster around business documents."] },
      ]}
      faqs={[
        { q: "What is the purpose of this hub page?", a: "It helps users discover the right generator, template, or guide without having to search the site manually." },
        { q: "Do I need to sign up to use the tools?", a: "The site is designed to let users start creating documents quickly without adding unnecessary friction." },
      ]}
      relatedTitle="Related business document pages"
      trackerTitle="Business Documents Generator"
    />
  );
}
