import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "How to Create a Professional Invoice Online | DocCraft Tools",
  description: "A practical checklist for creating clear invoices with item details, dates, payment terms, taxes, and client information.",
  alternates: { canonical: "/blog/how-to-create-professional-invoice" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article>
        <header className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business document guide</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">How to Create a Professional Invoice Online</h1>
          <p className="mt-3 text-lg leading-7 text-slate-600">A practical checklist for creating clear invoices with item details, dates, payment terms, taxes, and client information.</p>
          <a className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/invoice-generator">Create an invoice</a>
        </header>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Start with complete business details</h2>
          <p className="mt-3 text-slate-600">Add your business name, address, email, phone number, and tax registration number if it applies to your location. This makes the invoice easier for clients to verify and file.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Use a clear invoice number</h2>
          <p className="mt-3 text-slate-600">Every invoice should have a unique number. A simple sequence such as INV-001, INV-002, and INV-003 is enough for many small businesses. Keep the format consistent so invoices are easy to track later.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Describe each item clearly</h2>
          <p className="mt-3 text-slate-600">Avoid vague lines such as service fee or project work. Use specific descriptions, quantities, rates, and totals. If the work covers a period, add the date range so the client understands exactly what they are paying for.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Set payment expectations</h2>
          <p className="mt-3 text-slate-600">Add a due date, accepted payment methods, bank details or payment instructions, and any late payment terms. Clear wording reduces back-and-forth and helps clients pay faster.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Review before sending</h2>
          <p className="mt-3 text-slate-600">Check spelling, totals, currency, tax amounts, contact details, and notes. Download a PDF so the layout stays consistent when the client opens it.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold">Practical next step</h2>
          <p className="mt-3 text-slate-600">Use the related DocCraft tool to create a clean document, then review the details carefully before sending it to a customer, tenant, supplier, or client.</p>
          <a className="mt-4 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50" href="/invoice-generator">Create an invoice</a>
        </section>
        <section className="mt-8 space-y-3">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">What should a professional invoice include?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Do invoices need a due date?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Is a PDF invoice better than a Word file?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
