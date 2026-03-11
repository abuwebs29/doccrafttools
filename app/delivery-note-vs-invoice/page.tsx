import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  alternates: { canonical: "/delivery-note-vs-invoice" },
  title: "Delivery Note vs Invoice (Clear Comparison)",
  description: "Understand the difference between delivery notes and invoices.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Delivery Note vs Invoice (Clear Comparison)</h1>
        <p className="mt-4 text-slate-600">Understand the difference between delivery notes and invoices.</p>
        <p className='mt-6 text-slate-600'>A delivery note confirms goods delivered, while an invoice requests payment.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Delivery Note vs Invoice (Clear Comparison)" path="/delivery-note-vs-invoice" description="Understand the difference between delivery notes and invoices." />
      </article>
      <SiteFooter />
    </main>
  );
}
