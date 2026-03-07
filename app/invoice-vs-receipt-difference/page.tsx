import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";
import InternalLinks from "@/components/InternalLinks";

export const metadata = {
  title: "Invoice vs Receipt: What’s the Difference?",
  description: "Invoices request payment. Receipts confirm payment. Learn the difference with simple examples—and create PDFs instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice vs Receipt: What’s the Difference?</h1>
        <p className="mt-4 text-slate-600">Invoices request payment. Receipts confirm payment. Learn the difference with simple examples—and create PDFs instantly.</p>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Quick comparison</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Item</th>
                  <th className="px-4 py-3">Invoice</th>
                  <th className="px-4 py-3">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 font-semibold">Purpose</td>
                  <td className="px-4 py-3">Requests payment</td>
                  <td className="px-4 py-3">Confirms payment was received</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">When sent</td>
                  <td className="px-4 py-3">Before payment</td>
                  <td className="px-4 py-3">After payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Key fields</td>
                  <td className="px-4 py-3">Due date, payment terms</td>
                  <td className="px-4 py-3">Paid date, payment reference</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">When you need each one</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Use an <span className="font-semibold">invoice</span> when you’re requesting payment for work or goods.</li>
            <li>Use a <span className="font-semibold">receipt</span> after you’ve received payment and want to provide proof.</li>
          </ul>
          <p className="mt-3 text-sm text-slate-600">
            Related:{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/proforma-invoice-vs-invoice">proforma invoice vs invoice</a>.
          </p>
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

        <ShareBar title="Invoice vs Receipt: What’s the Difference?" path="/invoice-vs-receipt-difference" description="Invoices request payment. Receipts confirm payment. Learn the difference with simple examples—and create PDFs instantly." />
              <InternalLinks currentPath="/invoice-vs-receipt-difference" />
      </article>
      <SiteFooter />
    </main>
  );
}