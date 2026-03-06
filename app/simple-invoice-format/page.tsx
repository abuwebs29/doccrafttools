import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  title: "Simple Invoice Format (Free PDF Example)",
  description: "A simple invoice format you can copy, plus tips for invoice numbers, due dates, and payment terms. Generate a PDF in seconds.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Simple Invoice Format (Free PDF Example)</h1>
        <p className="mt-4 text-slate-600">A simple invoice format you can copy, plus tips for invoice numbers, due dates, and payment terms. Generate a PDF in seconds.</p>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Simple invoice format (layout)</h2>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <div className="font-semibold">INVOICE</div>
            <div className="mt-2">Invoice #: 2026-001</div>
            <div>Date: Feb 21, 2026</div>
            <div className="mt-4 font-semibold">Bill To:</div>
            <div>Client Name</div>
            <div className="mt-4 font-semibold">Items:</div>
            <div>Service A — 1 × $100</div>
            <div>Service B — 2 × $50</div>
            <div className="mt-4 font-semibold">Total: $200</div>
            <div className="mt-2">Due: Net 15</div>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Improve it with:{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/invoice-number-format">invoice number format</a>,{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/invoice-due-date-wording">due date wording</a>,{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/payment-terms-examples">payment terms</a>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Best practices</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Keep item descriptions clear and specific</li>
            <li>Always include a due date</li>
            <li>Use consistent invoice numbering</li>
            <li>Send as PDF for easy tracking</li>
          </ul>
        </section>


        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="text-sm font-semibold text-slate-900">Create a PDF in seconds</div>
          <p className="mt-2 text-sm text-slate-600">
            No signup. No watermark. Download instantly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Open Invoice Generator →
            </a>
            <a href="/receipt-generator" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Open Receipt Generator →
            </a>
          </div>
        </div>

        <ShareBar title="Simple Invoice Format (Free PDF Example)" path="/simple-invoice-format" description="A simple invoice format you can copy, plus tips for invoice numbers, due dates, and payment terms. Generate a PDF in seconds." />
      </article>
      <SiteFooter />
    </main>
  );
}
