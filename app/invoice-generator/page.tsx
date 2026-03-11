import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";
import { toolSchema } from "@/lib/schemaRegistry";

export const metadata = {
  alternates: { canonical: "/invoice-generator" },
  title: toolSchema.invoice.title,
  description: toolSchema.invoice.description,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Invoice Generator" href="/invoice-generator" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create an invoice PDF instantly. Add items, optional tax, notes and a logo.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <ShareBar title="Free Invoice Generator (PDF)" path="/invoice-generator" description="Generate and download a clean PDF instantly — no login." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />

<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Invoice Generators by Currency</h2>
  <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
    <li><a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-usd">Create Invoice in USD →</a></li>
    <li><a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-inr">Create Invoice in INR →</a></li>
    <li><a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-uk">Create Invoice in GBP →</a></li>
    <li><a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-aud">Create Invoice in AUD →</a></li>
    <li><a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-cad">Create Invoice in CAD →</a></li>
    <li><a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-pkr">Create Invoice in PKR →</a></li>
  </ul>
</section>

      <ToolSeoBlock toolId="invoice" />

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Try also</h2>
        <div className="mt-4 grid gap-2 text-sm">
          <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/quotation-generator">Quotation Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All PDF Templates →</a>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
