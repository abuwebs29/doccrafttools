import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Invoice for Consultants",
  description: "Use a consultant invoice format that clearly explains advisory services, retainers, and milestones.",
  alternates: { canonical: "/invoice-for-consultants" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Invoice for Consultants"
      description="Use a consultant invoice format that clearly explains advisory services, retainers, and milestones."
      path="/invoice-for-consultants"
      category="Guide"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "What this page covers", "paragraphs": ["This page is designed to answer common questions about invoice for consultants and guide the user toward the right document workflow.", "It works best when paired with the related invoice generator or template page so readers can move from explanation to action immediately."]}, {"title": "Key points to keep in mind", "bullets": ["Use consistent document titles and numbering.", "Include the parties, dates, amounts, and references that matter most.", "Link educational pages to practical tools so users can act on what they just learned."]}, {"title": "Next action", "paragraphs": ["Once you understand the basics, open the related invoice page to generate a ready-to-use version online."]}]}
      faqs={[{"q": "Why does invoice for consultants matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related invoice pages"
      trackerTitle="Invoice for Consultants"
    />
  );
}
