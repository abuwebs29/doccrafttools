import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/guides");

export default function Page() {
  return (
    <ArticleLandingPage
      title="Business Document Guides"
      description="Read practical guides, comparisons, and formatting tips for invoices, receipts, quotations, delivery notes, and rent receipts."
      path="/guides"
      category="Guides hub"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse PDF templates"
      secondaryHref="/pdf-templates"
      highlights={["Templates", "Guides", "Tools linked together"]}
      sections={[
        { title: "What you can find here", paragraphs: ["This hub brings together document generators, template pages, examples, and plain-English explanations so you can choose the right business document with confidence.", "Use the guides to understand what each document means, which fields matter, and how to avoid common formatting mistakes before sending a file to a client, tenant, or supplier."] },
        { title: "Best way to use the hub", bullets: ["Start with the main generator when you need to create a document now.", "Use template pages when you want a reusable structure.", "Read format, sample, or comparison pages when you need context before sending a document."] },
        { title: "Why these guides are useful", paragraphs: ["Business documents can look similar, but they are used at different points in a transaction. These guides help you decide whether you need an invoice, receipt, quotation, delivery note, or rent receipt."] },
      ]}
      faqs={[
        { q: "What is the purpose of this hub page?", a: "It helps users discover the right generator, template, or guide without having to search the site manually." },
        { q: "Do I need to sign up to use the tools?", a: "The site is designed to let users start creating documents quickly without adding unnecessary friction." },
      ]}
      relatedTitle="Related business document pages"
      trackerTitle="Business Document Guides"
    />
  );
}