import type { Metadata } from "next";
import { ArticleLandingPage } from "@/components/SeoPageLayouts";
import { invoiceFormatCountries, titleFromSlug } from "@/lib/programmaticSeo";

export function generateStaticParams() {
  return invoiceFormatCountries.map((country) => ({ country }));
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const country = titleFromSlug(params.country);
  return {
    title: `Invoice Format ${country}`,
    description: `Learn a practical invoice format for ${country}. Review the core fields, format best practices, and when to use the online generator to keep billing consistent.`,
    alternates: { canonical: `/invoice-format/${params.country}` },
  };
}

export default function Page({ params }: { params: { country: string } }) {
  const country = titleFromSlug(params.country);
  return (
    <ArticleLandingPage
      title={`Invoice Format ${country}`}
      description={`This guide explains a practical invoice structure for ${country} so businesses can keep client billing clear, consistent, and easier to review.`}
      path={`/invoice-format/${params.country}`}
      category="Country format guide"
      ctaLabel="Open invoice generator"
      ctaHref="/invoice-generator"
      secondaryLabel="Read invoice format guide"
      secondaryHref="/invoice-format"
      highlights={["Country-focused", "Format guidance", "Generator linked"]}
      sections={[
        { title: "Recommended invoice structure", bullets: ["Business and client details", "Invoice number, issue date, and due date", "Itemized products or services with rates and totals", "Tax lines and payment instructions", "References or registration details when required locally"] },
        { title: "Why local format pages matter", paragraphs: [`Users looking for invoice format ${country.toLowerCase()} usually want guidance that feels locally relevant, even if the core invoice structure stays similar across countries.`, "That makes country pages useful for both search intent and on-page trust, especially when paired with the main generator and broader invoice guides."] },
        { title: "Important note", paragraphs: ["Always review local tax, compliance, and recordkeeping requirements before issuing official documents. The generator is best used as a fast structure and workflow tool."] },
      ]}
      faqs={[
        { q: `Does ${country} require one exact invoice layout?`, a: "Many countries do not require one exact design, but they often require certain fields such as seller details, dates, numbers, and tax information." },
        { q: "Can I use one invoice tool for multiple countries?", a: "Yes. Use the same main generator and adapt wording, currency, and tax details to match the country and transaction." },
      ]}
      relatedTitle="Related invoice format pages"
      trackerTitle={`Invoice Format ${country}`}
    />
  );
}
