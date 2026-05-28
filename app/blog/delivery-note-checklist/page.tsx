import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Delivery Note Checklist for Products and Shipments | DocCraft Tools",
  description: "Use this checklist to create delivery notes that clearly record shipped items, quantities, and delivery confirmation.",
  alternates: { canonical: "/blog/delivery-note-checklist" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article>
        <header className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business document guide</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Delivery Note Checklist for Products and Shipments</h1>
          <p className="mt-3 text-lg leading-7 text-slate-600">Use this checklist to create delivery notes that clearly record shipped items, quantities, and delivery confirmation.</p>
          <a className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/delivery-note-generator">Create a delivery note</a>
        </header>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">What a delivery note does</h2>
          <p className="mt-3 text-slate-600">A delivery note records what was sent or delivered. It is not normally a payment request. Instead, it helps the sender, receiver, warehouse, or customer confirm quantities, item descriptions, and delivery status.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Essential fields</h2>
          <p className="mt-3 text-slate-600">Include sender details, receiver details, delivery note number, delivery date, order or invoice reference, item names, quantities, units, notes about condition, and a signature or confirmation area if needed.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Check quantities carefully</h2>
          <p className="mt-3 text-slate-600">The most important part of a delivery note is matching the actual shipment. Review item counts before the document is signed or shared. If an item is missing or damaged, note it clearly.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Connect it with other documents</h2>
          <p className="mt-3 text-slate-600">A delivery note can reference a quotation, sales order, purchase order, or invoice. References make it easier to match the delivery with the correct transaction later.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold">Practical next step</h2>
          <p className="mt-3 text-slate-600">Use the related DocCraft tool to create a clean document, then review the details carefully before sending it to a customer, tenant, supplier, or client.</p>
          <a className="mt-4 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50" href="/delivery-note-generator">Create a delivery note</a>
        </section>
        <section className="mt-8 space-y-3">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Is a delivery note the same as an invoice?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Should a delivery note include prices?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Who signs a delivery note?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
