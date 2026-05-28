import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | DocCraft Tools",
  description: "Read the terms for using DocCraft Tools, including document generator use, acceptable use, disclaimers, and contact information.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Terms and Conditions</h1>
        <p className="mt-3 text-slate-600">
          These terms explain how you may use {SITE_NAME}. By using this website, you agree to use the tools and information responsibly and to review any document before sending it to another person or organization.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Use of the website</h2>
        <p className="mt-2 text-slate-600">
          DocCraft Tools provides online generators, templates, examples, and guides for common business documents such as invoices, receipts, quotations, rent receipts, and delivery notes. The tools are intended to help you prepare clear documents faster, but you remain responsible for the accuracy of the details you enter.
        </p>

        <h2 className="mt-8 text-xl font-semibold">No professional advice</h2>
        <p className="mt-2 text-slate-600">
          Content on this site is provided for general information only. It is not legal, tax, accounting, or financial advice. Rules can vary by country, industry, and transaction type, so you should consult a qualified professional when you need advice for your specific situation.
        </p>

        <h2 className="mt-8 text-xl font-semibold">User responsibility</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Check names, addresses, tax numbers, prices, totals, dates, and payment terms before sharing a document.</li>
          <li>Confirm whether your document needs specific wording or fields under local rules.</li>
          <li>Keep your own records and backups of documents you create.</li>
          <li>Do not use the site to create misleading, fraudulent, unlawful, or harmful documents.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Intellectual property</h2>
        <p className="mt-2 text-slate-600">
          The website design, templates, text, and software are owned by DocCraft Tools or its licensors. You may use generated documents for your own personal or business needs, but you may not copy, resell, or reproduce the website itself without permission.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Availability and changes</h2>
        <p className="mt-2 text-slate-600">
          We aim to keep the website useful and available, but we do not guarantee uninterrupted access. We may update, remove, or change features, templates, content, and these terms from time to time.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Limitation of liability</h2>
        <p className="mt-2 text-slate-600">
          To the maximum extent permitted by law, DocCraft Tools is not responsible for losses caused by incorrect document details, missed payments, compliance issues, website downtime, or decisions made based on general information from the site.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-slate-600">
          Questions about these terms? Email <a className="font-semibold text-slate-900 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
