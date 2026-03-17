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
  <h2 className="text-xl font-semibold">Invoice Generator supports multiple currencies</h2>
  <p className="mt-3 text-slate-600">Choose your currency inside the generator instead of using separate duplicate URLs. This helps keep the main tool page authoritative while still supporting international invoicing.</p>
  <div className="mt-4 flex flex-wrap gap-3 text-sm">
    <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/invoice-generator">USD</a>
    <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/invoice-generator">GBP</a>
    <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/invoice-generator">EUR</a>
    <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/invoice-generator">INR</a>
    <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/invoice-generator">AED</a>
    <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/invoice-generator">SAR</a>
  </div>
</section>



<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Who should use this invoice generator</h2>
  <p className="mt-3 text-slate-600">Freelancers, consultants, agencies, contractors, and small businesses can use this tool to create professional invoice PDFs without signing up.</p>
  <p className="mt-3 text-slate-600">Use it for service invoices, product billing, project milestones, retainers, and one-off client work.</p>
</section>

<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">What to include in an invoice</h2>
  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
    <li>Invoice number and issue date</li>
    <li>Your business details and client details</li>
    <li>Line items, quantity, rate, and totals</li>
    <li>Tax, VAT, or GST if applicable</li>
    <li>Due date, payment terms, and notes</li>
  </ul>
</section>

<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">How to create an invoice online</h2>
  <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
    <li>Add your business and client details</li>
    <li>Enter items, quantities, and prices</li>
    <li>Select the currency directly inside the form</li>
    <li>Review totals and download the PDF instantly</li>
  </ol>
</section>

<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Common invoice mistakes to avoid</h2>
  <p className="mt-3 text-slate-600">Avoid missing due dates, inconsistent invoice numbering, unclear payment terms, and incorrect tax totals. A clear invoice reduces payment delays and back-and-forth with clients.</p>
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
