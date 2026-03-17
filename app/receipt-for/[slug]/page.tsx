import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import RelatedTools from "@/components/RelatedTools";
import PageFaq from "@/components/PageFaq";
import { receiptUseCaseSlugs, titleFromSlug } from "@/lib/programmaticSeo";

export function generateStaticParams() {
  return receiptUseCaseSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const title = titleFromSlug(params.slug);
  return {
    title: `Receipt for ${title}`,
    description: `Make a printable receipt for ${title.toLowerCase()} payments. See what fields to include and when a payment receipt should be issued.`,
    alternates: { canonical: `/receipt-for/${params.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const title = titleFromSlug(params.slug);
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Receipt for {title}</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          Use this guide to create a clean receipt for {title.toLowerCase()} payments. A clear receipt protects both parties and confirms the exact amount, date, and reason for payment.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Required fields</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Receipt number and payment date</li>
          <li>Payer and receiver names</li>
          <li>Amount paid and payment method</li>
          <li>Purpose of payment and optional notes</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/receipt-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Create receipt online</Link>
          <Link href="/receipt-template" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900">Browse receipt templates</Link>
        </div>
      </section>
      <PageFaq items={[
        { q: `Is a receipt for ${title.toLowerCase()} legally useful?`, a: "A receipt is generally useful as proof of payment, but legal requirements depend on local law and the type of transaction." },
        { q: "What is the difference between a receipt and an invoice?", a: "An invoice asks for payment. A receipt confirms that payment was received." },
      ]} />
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
