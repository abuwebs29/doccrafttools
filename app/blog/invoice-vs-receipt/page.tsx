import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Invoice vs Receipt: When to Use Each Document | DocCraft Tools",
  description: "Learn when to send an invoice, when to issue a receipt, and how both documents fit into a simple payment workflow.",
  alternates: { canonical: "/blog/invoice-vs-receipt" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article>
        <header className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business document guide</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Invoice vs Receipt: When to Use Each Document</h1>
          <p className="mt-3 text-lg leading-7 text-slate-600">Learn when to send an invoice, when to issue a receipt, and how both documents fit into a simple payment workflow.</p>
          <a className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/invoice-generator">Open invoice generator</a>
        </header>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Quick answer</h2>
          <p className="mt-3 text-slate-600">An invoice is a request for payment. A receipt is proof that payment has been received. Many small businesses need both: the invoice explains what is owed, while the receipt confirms the transaction after payment.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">When to use an invoice</h2>
          <p className="mt-3 text-slate-600">Use an invoice before payment is made or when payment will be collected later. It should include your business details, customer details, invoice number, issue date, due date, itemized products or services, taxes, discounts, total amount due, and payment instructions.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">When to use a receipt</h2>
          <p className="mt-3 text-slate-600">Use a receipt after payment has been made. It should show the amount paid, date of payment, payment method, payer details, seller details, and a clear description of what the payment covered. Receipts are useful for customer records, rent payments, deposits, cash payments, and service work.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Common mistake to avoid</h2>
          <p className="mt-3 text-slate-600">Do not treat an invoice as proof of payment unless it is clearly marked paid and supported by payment details. If a client asks for confirmation that money was received, create a receipt or payment receipt instead of only resending the original invoice.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold">Practical next step</h2>
          <p className="mt-3 text-slate-600">Use the related DocCraft tool to create a clean document, then review the details carefully before sending it to a customer, tenant, supplier, or client.</p>
          <a className="mt-4 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50" href="/invoice-generator">Open invoice generator</a>
        </section>
        <section className="mt-8 space-y-3">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">What is the difference between an invoice and a receipt?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Can an invoice be used as a receipt?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Should freelancers send receipts?</summary>
            <p className="mt-3 text-slate-600">This guide explains the practical answer and links to a free tool you can use to create the related document.</p>
          </details>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
