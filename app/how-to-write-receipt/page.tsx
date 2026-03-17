import { ArticleLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "How to Write a Receipt",
  description: "Learn how to write a receipt step by step, including the payer, amount, date, payment method, and reason for payment.",
  alternates: { canonical: "/how-to-write-receipt" },
};

export default function Page() {
  return (
    <ArticleLandingPage
      title="How to Write a Receipt"
      description="Learn how to write a receipt step by step, including the payer, amount, date, payment method, and reason for payment."
      path="/how-to-write-receipt"
      category="How-to guide"
      ctaLabel="Open receipt generator"
      ctaHref="/receipt-generator"
      secondaryLabel="Browse receipt templates"
      secondaryHref="/receipt-template"
      highlights=['Clear structure', 'Practical explanation', 'Related tools linked']
      sections=[{"title": "Start with the purpose", "paragraphs": ["This guide explains how to handle how to write a receipt in a way that is clear for both you and the recipient.", "The best results come from using a consistent structure, clear labels, and wording that makes the next action easy to understand."]}, {"title": "Steps to follow", "bullets": ["Identify the key fields that must appear on the document.", "Use consistent numbering and date formats.", "Review wording, totals, and references before sending or printing.", "Keep a saved copy for accounting and recordkeeping."]}, {"title": "Helpful next step", "paragraphs": ["After reviewing the basics, use the related receipt tool to build a faster and cleaner version online."]}]
      faqs=[{"q": "Why does how to write a receipt matter?", "a": "It helps users understand when this document or concept should be used and what details need to be included."}, {"q": "Should I use a template or a generator?", "a": "Use a template when you want a reusable layout. Use the generator when you want a faster workflow, easy edits, and cleaner exports."}, {"q": "Can I adapt this for my business?", "a": "Yes. Adjust wording, references, dates, and required fields to match your clients, country, and internal process."}]
      relatedTitle="Related receipt pages"
      trackerTitle="How to Write a Receipt"
    />
  );
}
