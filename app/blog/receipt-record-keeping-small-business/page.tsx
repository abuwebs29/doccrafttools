import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Receipt Record Keeping for Small Businesses | DocCraft Tools",
  description: "Learn what receipt details to keep, how to organize receipts, and why clear records help with customer support and bookkeeping.",
  alternates: { canonical: "/blog/receipt-record-keeping-small-business" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article>
        <header className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business document guide</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Receipt Record Keeping for Small Businesses</h1>
          <p className="mt-3 text-lg leading-7 text-slate-600">Learn what receipt details to keep, how to organize receipts, and why clear records help with customer support and bookkeeping.</p>
          <a className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/receipt-generator">Create a receipt</a>
        </header>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Why receipts matter</h2>
          <p className="mt-3 text-slate-600">Receipts protect both the buyer and the seller. They confirm that a payment happened and create a record that can be checked later if there is a refund, dispute, warranty claim, rent question, or bookkeeping review.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Details to include</h2>
          <p className="mt-3 text-slate-600">A useful receipt should include the receipt number, date, seller details, buyer details if needed, item or service description, amount paid, tax if applicable, payment method, and any balance remaining.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Organizing receipts</h2>
          <p className="mt-3 text-slate-600">Use a consistent naming system for exported files, such as receipt-number-customer-date.pdf. Store receipts by month or customer and keep backups in a secure location. If you accept cash, receipts are especially important because there may be no automatic bank trail.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">When to issue a new receipt</h2>
          <p className="mt-3 text-slate-600">Issue a fresh receipt whenever a new payment is received. For partial payments, show the amount paid and remaining balance so both sides understand the payment status.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold">Practical next step</h2>
          <p className="mt-3 text-slate-600">Use the related DocCraft tool to create a clean document, then review the details carefully before sending it to a customer, tenant, supplier, or client.</p>
          <a className="mt-4 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50" href="/receipt-generator">Create a receipt</a>
        </section>
        <section className="mt-8 space-y-3">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">How long should I keep receipts?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">What should a receipt include?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Do cash payments need receipts?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
