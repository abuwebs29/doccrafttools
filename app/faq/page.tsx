import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/faq");

export default function Page() {
  return (
    <ArticleLandingPage
      title="DocCraft Tools FAQ"
      description="Find quick answers about DocCraft Tools, document generators, templates, and common billing questions."
      path="/faq"
      category="FAQ"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse PDF templates"
      secondaryHref="/pdf-templates"
      highlights={["Templates", "Guides", "Tools linked together"]}
      sections={[
        { title: "What you can find here", paragraphs: ["This page brings together practical tools, templates, examples, and plain-English explanations so visitors can find the document format they need quickly.", "Use it to compare common business documents, understand the fields to include, and move from learning to creating a usable file."] },
        { title: "Best way to use the hub", bullets: ["Start with the main generator when you need to create a document now.", "Use template pages when you want a reusable structure.", "Read format, sample, or comparison pages when you need context before sending a document."] },
        { title: "Why this page is useful", paragraphs: ["Clear business document guidance helps reduce mistakes in payment records, delivery records, customer communication, and internal filing."] },
      ]}
      faqs={[
        { q: "What is the purpose of this hub page?", a: "It helps users discover the right generator, template, or guide without having to search the site manually." },
        { q: "Do I need to sign up to use the tools?", a: "The site is designed to let users start creating documents quickly without adding unnecessary friction." },
      ]}
      relatedTitle="Related business document pages"
      trackerTitle="DocCraft Tools FAQ"
    />
  );
}