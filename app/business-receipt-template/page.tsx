import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  title: "Business Receipt Template (Free Printable PDF)",
  description: "Generate a business receipt template for professional transactions.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Business Receipt Template (Free Printable PDF)</h1>
        <p className="mt-4 text-slate-600">Generate a business receipt template for professional transactions.</p>
        <p className='mt-6 text-slate-600'>Business receipts confirm completed payments and help with accounting records.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Business Receipt Template (Free Printable PDF)" path="/business-receipt-template" description="Generate a business receipt template for professional transactions." />
      </article>
      <SiteFooter />
    </main>
  );
}
