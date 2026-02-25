import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";
import InternalLinks from "@/components/InternalLinks";

export const metadata = {
  title: "Payment Receipt Format (Printable Example)",
  description: "Understand the correct payment receipt format and generate a printable PDF instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Payment Receipt Format (Printable Example)</h1>
        <p className="mt-4 text-slate-600">Understand the correct payment receipt format and generate a printable PDF instantly.</p>
        <p className='mt-6 text-slate-600'>A payment receipt confirms money received and includes payer name, amount, date, and method.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Payment Receipt Format (Printable Example)" path="/payment-receipt-format" description="Understand the correct payment receipt format and generate a printable PDF instantly." />
              <InternalLinks currentPath="/payment-receipt-format" />
      </article>
      <SiteFooter />
    </main>
  );
}