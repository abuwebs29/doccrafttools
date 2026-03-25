import type { Metadata } from "next";
import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { receiptUseCaseSlugs, titleFromSlug } from "@/lib/programmaticSeo";

export function generateStaticParams() {
  return receiptUseCaseSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const title = titleFromSlug(params.slug);
  return {
    title: `Receipt for ${title}`,
    description: `Learn how to issue a receipt for ${title.toLowerCase()} payments with the right fields, clean wording, and a practical proof-of-payment structure.`,
    alternates: { canonical: `/receipt-for/${params.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const title = titleFromSlug(params.slug);
  return (
    <ArticleLandingPage
      title={`Receipt for ${title}`}
      description={`Use this page to understand what a useful receipt for ${title.toLowerCase()} should include and how to keep payment confirmation clear and easy to review.`}
      path={`/receipt-for/${params.slug}`}
      category="Use-case receipt"
      ctaLabel="Open receipt generator"
      ctaHref="/receipt-generator"
      secondaryLabel="Browse receipt templates"
      secondaryHref="/receipt-template"
      highlights={["Proof of payment", "Use-case focused", "Generator linked"]}
      sections={[
        { title: "Required receipt fields", bullets: ["Receipt number and payment date", "Payer and receiver names", `Reason the ${title.toLowerCase()} payment was made`, "Amount received and payment method", "Optional notes, references, or signature"] },
        { title: "Why this page is useful", paragraphs: [`A receipt for ${title.toLowerCase()} should be clear enough to confirm the payment purpose without leaving room for confusion later.`, "Use-case pages help users adapt the core receipt structure to real-world payment scenarios rather than relying on vague generic wording."] },
        { title: "Best next step", paragraphs: ["Use the receipt generator when you want a faster way to create a clean, printable proof-of-payment document online."] },
      ]}
      faqs={[
        { q: `Is a receipt for ${title.toLowerCase()} enough as proof of payment?`, a: "It is generally useful as proof of payment, but exact legal or tax requirements depend on local rules and the type of transaction." },
        { q: "What is the difference between a receipt and an invoice?", a: "An invoice asks for payment. A receipt confirms that payment has already been received." },
      ]}
      relatedTitle="Related receipt use-case pages"
      trackerTitle={`Receipt for ${title}`}
    />
  );
}
