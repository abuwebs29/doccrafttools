import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  title: "Invoice Due Date Meaning Explained",
  description: "Understand what invoice due date means and how it affects payments.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Due Date Meaning Explained</h1>
        <p className="mt-4 text-slate-600">Understand what invoice due date means and how it affects payments.</p>
        <p className='mt-6 text-slate-600'>The due date is the final date by which payment must be received.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Invoice Due Date Meaning Explained" path="/invoice-due-date-meaning" description="Understand what invoice due date means and how it affects payments." />
      </article>
      <SiteFooter />
    </main>
  );
}
