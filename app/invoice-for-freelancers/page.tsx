import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Invoice for Freelancers",
  description: "Create a freelancer invoice with the right fields, payment terms, and a clean layout clients can process quickly.",
  alternates: { canonical: "/invoice-for-freelancers" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="Invoice for Freelancers"
      description="Create a freelancer invoice with the right fields, payment terms, and a clean layout clients can process quickly."
      path="/invoice-for-freelancers"
      category="Guide"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Browse invoice templates"
      secondaryHref="/invoice-template"
      highlights={['Clear structure', 'Practical explanation', 'Related tools linked']}
      sections={[{"title": "What this page covers", "paragraphs": ["This page is designed to answer common questions about invoice for freelancers and guide the user toward the right document workflow.", "It works best when paired with the related invoice generator or template page so readers can move from explanation to action immediately."]}, {"title": "Key points to keep in mind", "bullets": ["Use consistent document titles and numbering.", "Include the parties, dates, amounts, and references that matter most.", "Link educational pages to practical tools so users can act on what they just learned."]}, {"title": "Next action", "paragraphs": ["Once you understand the basics, open the related invoice page to generate a ready-to-use version online."]}]}
      faqs={[{"q": "Why does invoice for freelancers matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]}
      relatedTitle="Related invoice pages"
      trackerTitle="Invoice for Freelancers"
    />
  );
}
