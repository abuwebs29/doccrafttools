import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "How to Write a Receipt",
  description: "Learn how to write a receipt step by step, including the payer, amount, date, payment method, and reason for payment.",
  alternates: { canonical: "/how-to-write-receipt" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">How to Write a Receipt</h1>
      <p className="mt-2 max-w-3xl text-slate-600">Write the receipt number, payment date, payer details, amount paid, method of payment, and a short reason for payment. Then sign or stamp it if needed.</p>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Add the date and receipt number.</li>
          <li>List who paid and who received the payment.</li>
          <li>Enter the amount and payment method.</li>
          <li>Describe what the payment was for.</li>
          <li>Save or print the finished receipt.</li>
        </ol>
      </section>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
