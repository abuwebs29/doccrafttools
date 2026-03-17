import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Estimate vs Invoice",
  description: "Compare estimates and invoices so you know when to quote work and when to send a final bill.",
  alternates: { canonical: "/estimate-vs-invoice" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Estimate vs Invoice</h1>
      <p className="mt-2 max-w-3xl text-slate-600">An estimate gives a provisional cost before work begins. An invoice is a formal request for payment after work is approved or delivered.</p>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">When to use each</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">Use an estimate while scope is still flexible. Use an invoice once the amount due is final and ready to collect.</p>
      </section>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
