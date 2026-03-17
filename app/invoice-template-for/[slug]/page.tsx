import type { Metadata } from "next";
import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { invoiceUseCaseSlugs, titleFromSlug } from "@/lib/programmaticSeo";

export function generateStaticParams() {
  return invoiceUseCaseSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const title = titleFromSlug(params.slug);
  return {
    title: `Invoice Template for ${title}`,
    description: `Use a free invoice template for ${title.toLowerCase()} work. Learn what to include, when to send it, and how to move from template to finished invoice faster.`,
    alternates: { canonical: `/invoice-template-for/${params.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const title = titleFromSlug(params.slug);
  return (
    <ArticleLandingPage
      title={`Invoice Template for ${title}`}
      description={`Use this page to understand what a strong invoice template for ${title.toLowerCase()} should include and how to keep billing clear, consistent, and easy to approve.`}
      path={`/invoice-template-for/${params.slug}`}
      category="Use-case template"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights={["Use-case focused", "Template guidance", "Generator linked"]}
      sections={[
        { title: "What to include", bullets: ["Business and client details", "Invoice number, issue date, and due date", `A clear description of the ${title.toLowerCase()} work or deliverable`, "Rates, taxes, totals, and payment terms"] },
        { title: "Why this use-case page matters", paragraphs: [`Templates for ${title.toLowerCase()} work should speak directly to the service, scope, and payment expectations involved.`, "That makes the page more useful than a generic invoice page and helps users understand exactly how to adapt the structure to their business."] },
        { title: "Best next step", paragraphs: ["Review the structure here, then use the main invoice generator if you want automatic totals, cleaner formatting, and a faster export workflow."] },
      ]}
      faqs={[
        { q: `Can I use this page for ${title.toLowerCase()} billing?`, a: "Yes. Customize the service description, payment terms, and references to match the actual work being billed." },
        { q: "Should I use a template or the generator?", a: "Use the template for a reusable structure. Use the generator when you want faster edits, automatic totals, and a cleaner finished document." },
      ]}
      relatedTitle="Related invoice use-case pages"
      trackerTitle={`Invoice Template for ${title}`}
    />
  );
}
