import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Receipt vs Invoice",
  description: "Learn the difference between a receipt and an invoice, with practical examples of when to issue each document.",
  alternates: { canonical: "/receipt-vs-invoice" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Receipt vs Invoice</h1>
      <p className="mt-2 max-w-3xl text-slate-600">An invoice asks a customer to pay. A receipt confirms that the customer already paid. Businesses often use both in the same transaction lifecycle.</p>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Simple difference</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Invoice: payment request before or by the due date</li>
          <li>Receipt: proof that money was received</li>
          <li>Invoice includes balance due, receipt includes amount paid</li>
        </ul>
      </section>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
