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
        <p className="mt-2 max-w-3xl text-slate-600">
          Create a professional invoice PDF online in minutes. Add your business details, client information,
          line items, tax, notes, logo, and download a clean invoice without signing up.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <ShareBar
        title="Free Invoice Generator (PDF)"
        path="/invoice-generator"
        description="Generate and download a clean PDF invoice instantly — no login."
      />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Create invoices in any currency from one page</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Use the currency selector inside the form to create invoices in USD, GBP, EUR, INR, AED, SAR, AUD,
          CAD, PKR, and more. This main page is the canonical invoice tool, so there is no need to visit a
          separate currency URL.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Who should use this invoice generator</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Freelancers, consultants, agencies, contractors, and small businesses can use this tool to issue
            simple invoice PDFs without design work or spreadsheet formulas. It is useful for one-time projects,
            recurring services, hourly work, and product sales.
          </p>
          <h3 className="mt-5 text-base font-semibold">What to include in an invoice</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>Business name, logo, address, and contact details</li>
            <li>Client name and billing information</li>
            <li>Invoice number, issue date, and due date</li>
            <li>Line items, quantities, rates, discounts, and taxes</li>
            <li>Payment terms, notes, and bank or wallet details</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">How to create an invoice online</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>Enter your business and client information.</li>
            <li>Add products or services with quantity and price.</li>
            <li>Select the right currency directly in the invoice form.</li>
            <li>Review totals, tax, and payment terms.</li>
            <li>Download the finished invoice as a PDF.</li>
          </ol>
          <h3 className="mt-5 text-base font-semibold">Common invoice mistakes to avoid</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>Missing due dates or incomplete payment instructions</li>
            <li>Using inconsistent invoice numbers</li>
            <li>Forgetting taxes, discounts, or shipping charges</li>
            <li>Sending invoices without clear service descriptions</li>
          </ul>
        </div>
      </section>

      <ToolSeoBlock toolId="invoice" />

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Related invoice resources</h2>
        <div className="mt-4 grid gap-2 text-sm">
          <a className="font-semibold text-slate-900 hover:underline" href="/invoice-template">Invoice Template →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/simple-invoice-template">Simple Invoice Template →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/invoice-format">Invoice Format Guide →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/how-to-make-an-invoice">How to Make an Invoice →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/quotation-generator">Quotation Generator →</a>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
