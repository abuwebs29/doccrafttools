import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";
import InternalLinks from "@/components/InternalLinks";

export const metadata = {
  title: "Proforma Invoice vs Invoice (What’s the Difference?)",
  description: "Learn when to use proforma invoices versus standard invoices.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Proforma Invoice vs Invoice (What’s the Difference?)</h1>
        <p className="mt-4 text-slate-600">Learn when to use proforma invoices versus standard invoices.</p>
        <p className='mt-6 text-slate-600'>A proforma invoice is issued before sale; a standard invoice requests payment.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Proforma Invoice vs Invoice (What’s the Difference?)" path="/proforma-vs-invoice" description="Learn when to use proforma invoices versus standard invoices." />
              <InternalLinks currentPath="/proforma-vs-invoice" />
      </article>
      <SiteFooter />
    </main>
  );
}