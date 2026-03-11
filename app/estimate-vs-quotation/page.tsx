import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  alternates: { canonical: "/estimate-vs-quotation" },
  title: "Estimate vs Quotation (Key Differences)",
  description: "Learn the difference between an estimate and a quotation in business.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Estimate vs Quotation (Key Differences)</h1>
        <p className="mt-4 text-slate-600">Learn the difference between an estimate and a quotation in business.</p>
        <p className='mt-6 text-slate-600'>An estimate is approximate; a quotation is fixed and binding.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Estimate vs Quotation (Key Differences)" path="/estimate-vs-quotation" description="Learn the difference between an estimate and a quotation in business." />
      </article>
      <SiteFooter />
    </main>
  );
}
