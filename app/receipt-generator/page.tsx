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
  alternates: { canonical: "/receipt-generator" },
  title: toolSchema.receipt.title,
  description: toolSchema.receipt.description,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Receipt Generator" href="/receipt-generator" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Receipt Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Generate a printable payment receipt PDF in seconds. Add payer, amount, purpose and logo.
        </p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <ShareBar title="Free Receipt Generator (PDF)" path="/receipt-generator" description="Generate and download a clean PDF instantly — no login." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Receipt Generator supports multiple currencies</h2>
        <p className="mt-3 text-slate-600">Use the main receipt generator and select the currency in the form instead of relying on many similar URLs. This helps search engines focus on the strongest version of the tool.</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/receipt-generator">USD</a>
          <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/receipt-generator">GBP</a>
          <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/receipt-generator">EUR</a>
          <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/receipt-generator">INR</a>
          <a className="rounded-xl border border-slate-200 px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/receipt-generator">SAR</a>
        </div>
      </section>



<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">When to use a receipt</h2>
  <p className="mt-3 text-slate-600">Use a receipt to confirm that payment has already been made for products, services, rent, deposits, reimbursements, or one-time transactions.</p>
</section>

<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">What to include in a receipt</h2>
  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
    <li>Payer name and payment date</li>
    <li>Amount received and selected currency</li>
    <li>Payment method and payment purpose</li>
    <li>Receiver or issuer details</li>
    <li>Optional notes and logo</li>
  </ul>
</section>

<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">How to make a receipt</h2>
  <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
    <li>Enter the payer and payment details</li>
    <li>Select the correct currency in the form</li>
    <li>Add optional notes or branding</li>
    <li>Download the PDF and share it instantly</li>
  </ol>
</section>

<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Receipt vs invoice</h2>
  <p className="mt-3 text-slate-600">An invoice asks for payment. A receipt confirms payment has already been received. Many businesses use both documents in the same workflow.</p>
</section>

      <ToolSeoBlock toolId="receipt" />

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
