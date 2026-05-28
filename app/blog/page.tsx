import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Business Document Blog | DocCraft Tools",
  description: "Practical guides for invoices, receipts, quotations, delivery notes, and small business document workflows.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <header className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">DocCraft Blog</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Business document guides</h1>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-slate-600">Helpful articles that explain how to create, review, and organize invoices, receipts, quotations, delivery notes, and related business records.</p>
      </header>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
          <a className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow" href="/blog/invoice-vs-receipt">
            <h2 className="text-xl font-semibold text-slate-900">Invoice vs Receipt: When to Use Each Document</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Learn when to send an invoice, when to issue a receipt, and how both documents fit into a simple payment workflow.</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-slate-900">Read guide →</span>
          </a>
          <a className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow" href="/blog/how-to-create-professional-invoice">
            <h2 className="text-xl font-semibold text-slate-900">How to Create a Professional Invoice Online</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">A practical checklist for creating clear invoices with item details, dates, payment terms, taxes, and client information.</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-slate-900">Read guide →</span>
          </a>
          <a className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow" href="/blog/receipt-record-keeping-small-business">
            <h2 className="text-xl font-semibold text-slate-900">Receipt Record Keeping for Small Businesses</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Learn what receipt details to keep, how to organize receipts, and why clear records help with customer support and bookkeeping.</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-slate-900">Read guide →</span>
          </a>
          <a className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow" href="/blog/quotation-vs-estimate">
            <h2 className="text-xl font-semibold text-slate-900">Quotation vs Estimate: Simple Business Guide</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Understand the difference between a quotation and an estimate before sending pricing to a customer.</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-slate-900">Read guide →</span>
          </a>
          <a className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow" href="/blog/delivery-note-checklist">
            <h2 className="text-xl font-semibold text-slate-900">Delivery Note Checklist for Products and Shipments</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Use this checklist to create delivery notes that clearly record shipped items, quantities, and delivery confirmation.</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-slate-900">Read guide →</span>
          </a>
      </section>
      <SiteFooter />
    </main>
  );
}
