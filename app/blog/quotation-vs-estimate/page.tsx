import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Quotation vs Estimate: Simple Business Guide | DocCraft Tools",
  description: "Understand the difference between a quotation and an estimate before sending pricing to a customer.",
  alternates: { canonical: "/blog/quotation-vs-estimate" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article>
        <header className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business document guide</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Quotation vs Estimate: Simple Business Guide</h1>
          <p className="mt-3 text-lg leading-7 text-slate-600">Understand the difference between a quotation and an estimate before sending pricing to a customer.</p>
          <a className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/quotation-generator">Create a quotation</a>
        </header>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">The basic difference</h2>
          <p className="mt-3 text-slate-600">An estimate is an approximate price. A quotation is usually a more fixed offer based on known details. The right choice depends on how certain you are about scope, cost, materials, and time.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Use an estimate when scope may change</h2>
          <p className="mt-3 text-slate-600">Estimates are useful for early conversations, inspections, or projects where the full work is not known yet. Make the wording clear so customers understand that final pricing can change.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Use a quotation when details are confirmed</h2>
          <p className="mt-3 text-slate-600">A quotation works better when the customer has provided enough information for a firm price. Include item descriptions, quantities, rates, taxes, validity period, payment terms, and any exclusions.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Add a validity date</h2>
          <p className="mt-3 text-slate-600">Pricing can change because of material costs, exchange rates, supplier availability, or schedule changes. A validity date helps prevent old quotes from being accepted long after conditions have changed.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold">Practical next step</h2>
          <p className="mt-3 text-slate-600">Use the related DocCraft tool to create a clean document, then review the details carefully before sending it to a customer, tenant, supplier, or client.</p>
          <a className="mt-4 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50" href="/quotation-generator">Create a quotation</a>
        </section>
        <section className="mt-8 space-y-3">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Is a quotation legally binding?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">When should I send an estimate?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">What should a quotation include?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
