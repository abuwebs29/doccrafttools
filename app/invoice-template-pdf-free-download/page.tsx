import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  alternates: { canonical: "/invoice-template-pdf-free-download" },
  title: "Free Invoice Template PDF (Download Instantly)",
  description: "Download a free invoice template PDF or generate a custom invoice online. No signup required—get a clean PDF in seconds.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template PDF (Download Instantly)</h1>
        <p className="mt-4 text-slate-600">Download a free invoice template PDF or generate a custom invoice online. No signup required—get a clean PDF in seconds.</p>

        <section className="mt-8">
          <h2 className="text-xl font-bold">What a good invoice includes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Invoice number + invoice date</li>
            <li>Seller and client details</li>
            <li>Itemized list of services/products</li>
            <li>Subtotal, tax (optional), and total amount</li>
            <li>Due date + payment terms</li>
          </ul>
          <p className="mt-3 text-sm text-slate-600">
            Related:{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/invoice-due-date-wording">invoice due date wording</a> and{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/invoice-number-format">invoice number format</a>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Fast option: generate your PDF invoice</h2>
          <p className="mt-3 text-slate-700">
            If you want a PDF that’s already filled in with your details, use the generator. It’s faster than editing a template.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Generate Invoice PDF →
            </a>
            <a href="/simple-invoice-template" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              View Simple Invoice Template →
            </a>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">FAQ</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="font-semibold">Can I use this for freelancing?</div>
              <div className="mt-1 text-sm text-slate-600">Yes—freelancers can use an invoice template or the generator.</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="font-semibold">Should I add payment terms?</div>
              <div className="mt-1 text-sm text-slate-600">
                Yes. See{" "}
                <a className="font-semibold text-slate-900 hover:underline" href="/invoice-payment-terms-explained">payment terms examples</a>.
              </div>
            </div>
          </div>
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

        <ShareBar title="Free Invoice Template PDF (Download Instantly)" path="/invoice-template-pdf-free-download" description="Download a free invoice template PDF or generate a custom invoice online. No signup required—get a clean PDF in seconds." />
      </article>
      <SiteFooter />
    </main>
  );
}
