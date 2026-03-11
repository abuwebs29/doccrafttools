import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  alternates: { canonical: "/invoice-format" },
  title: "Invoice Format (Simple Professional Layout Guide)",
  description: "Learn the correct invoice format with examples and required fields for freelancers and businesses.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Format (Simple Professional Layout Guide)</h1>
        <p className="mt-4 text-slate-600">Learn the correct invoice format with examples and required fields for freelancers and businesses.</p>
        <p className='mt-6 text-slate-600'>A proper invoice format includes seller details, buyer details, invoice number, date, line items, totals, and payment terms.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Invoice Format (Simple Professional Layout Guide)" path="/invoice-format" description="Learn the correct invoice format with examples and required fields for freelancers and businesses." />
      </article>
      <SiteFooter />
    </main>
  );
}
