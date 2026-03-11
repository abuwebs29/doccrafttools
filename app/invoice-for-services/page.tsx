import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  alternates: { canonical: "/invoice-for-services" },
  title: "Invoice for Services Template (Example PDF)",
  description: "Create an invoice for services rendered with a professional format.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice for Services Template (Example PDF)</h1>
        <p className="mt-4 text-slate-600">Create an invoice for services rendered with a professional format.</p>
        <p className='mt-6 text-slate-600'>Service invoices clearly describe work completed and include payment terms.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Invoice for Services Template (Example PDF)" path="/invoice-for-services" description="Create an invoice for services rendered with a professional format." />
      </article>
      <SiteFooter />
    </main>
  );
}
