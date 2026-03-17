import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import RelatedTools from "@/components/RelatedTools";
import PageFaq from "@/components/PageFaq";
import { invoiceFormatCountries, titleFromSlug } from "@/lib/programmaticSeo";

export function generateStaticParams() {
  return invoiceFormatCountries.map((country) => ({ country }));
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const country = titleFromSlug(params.country);
  return {
    title: `Invoice Format ${country}`,
    description: `Learn a practical invoice format for ${country}. See the core fields, tax considerations, and best practices for clear client billing.`,
    alternates: { canonical: `/invoice-format/${params.country}` },
  };
}

export default function Page({ params }: { params: { country: string } }) {
  const country = titleFromSlug(params.country);
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Format {country}</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          This page explains a practical invoice structure for businesses serving clients in {country}. It is designed for clarity, recordkeeping, and faster payment collection.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Recommended invoice structure</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Business name, address, contact details, and branding</li>
          <li>Client information and invoice issue date</li>
          <li>Invoice number and due date</li>
          <li>Items or services with quantity, rate, and subtotal</li>
          <li>Tax lines, total amount due, and payment instructions</li>
        </ol>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          Tax rules vary by jurisdiction, so review local requirements before issuing official invoices. For day-to-day use, the online generator gives you a faster way to keep the format consistent.
        </p>
        <div className="mt-5 flex gap-3 flex-wrap">
          <Link href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Open invoice generator</Link>
          <Link href="/invoice-format" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900">Read general invoice format guide</Link>
        </div>
      </section>
      <PageFaq items={[
        { q: `Does ${country} require a specific invoice layout?`, a: "Many countries do not require one exact layout, but they often require specific fields such as seller details, invoice number, dates, and tax information." },
        { q: "Can I use one invoice tool for multiple countries?", a: "Yes. Use the same main invoice generator and adapt tax, wording, and currency to match the transaction." },
      ]} />
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
