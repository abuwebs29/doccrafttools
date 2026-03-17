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
        <p className="mt-2 max-w-3xl text-slate-600">
          Generate a printable payment receipt PDF in seconds. Add payer details, amount, purpose, payment method,
          logo, and download a clean receipt for business or personal use.
        </p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <ShareBar
        title="Free Receipt Generator (PDF)"
        path="/receipt-generator"
        description="Generate and download a clean receipt PDF instantly — no login."
      />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Use one receipt page for every currency</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Choose the currency inside the receipt form instead of using separate URLs. This page is the main
          canonical receipt generator and is designed to cover cash receipts, payment acknowledgements, rent
          receipts, and general proof-of-payment documents.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">When to use a receipt</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Use a receipt after payment is collected for services, products, deposits, tuition, subscriptions,
            donations, or rent. A receipt confirms that money has been received and gives both parties a clean
            record of the transaction.
          </p>
          <h3 className="mt-5 text-base font-semibold">What to include in a receipt</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>Receipt number and payment date</li>
            <li>Name of the payer and receiver</li>
            <li>Amount paid and payment method</li>
            <li>Reason for payment or item description</li>
            <li>Optional notes, signature area, and logo</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Receipt vs invoice</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            An invoice requests payment before or by a due date. A receipt confirms that payment has already been
            made. Many businesses use both documents in the same workflow: first the invoice, then the receipt.
          </p>
          <h3 className="mt-5 text-base font-semibold">How to make a receipt online</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>Enter payer and receiver information.</li>
            <li>Add the amount, payment date, and purpose.</li>
            <li>Select the right currency inside the form.</li>
            <li>Review the receipt and download the PDF.</li>
          </ol>
        </div>
      </section>

      <ToolSeoBlock toolId="receipt" />

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Related receipt resources</h2>
        <div className="mt-4 grid gap-2 text-sm">
          <a className="font-semibold text-slate-900 hover:underline" href="/receipt-template">Receipt Template →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/payment-receipt-format">Payment Receipt Format →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-generator">Rent Receipt Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-template">Rent Receipt Template →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All PDF Templates →</a>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
