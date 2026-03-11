    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import ShareBar from "@/components/ShareBar";

    export const metadata = {
  alternates: { canonical: "/difference-between-invoice-and-receipt" },
      title: "Difference Between Invoice and Receipt (Simple Guide)",
      description: "Learn the difference between an invoice and a receipt, when to use each, and how to generate invoice and receipt PDFs instantly.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Difference Between Invoice and Receipt (Simple Guide)</h1>
            <p className="mt-4 text-slate-600">Learn the difference between an invoice and a receipt, when to use each, and how to generate invoice and receipt PDFs instantly.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700">Quick action:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/invoice-generator"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Create an Invoice PDF →
                </a>
              </div>
            </div>


        <h2 className="mt-10 text-xl font-semibold">Invoice vs receipt (quick summary)</h2>
        <p className="mt-3 text-slate-600"><strong>Invoice</strong> = request for payment (before payment). <strong>Receipt</strong> = proof of payment (after payment).</p>

        <h2 className="mt-10 text-xl font-semibold">Key differences</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li>Timing: invoice first, receipt after</li>
<li>Purpose: request vs confirmation</li>
<li>Records: what’s owed vs what’s paid</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
<div className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">Should I issue a receipt for cash?</h3><p className="mt-2 text-slate-600">Yes—cash receipts reduce disputes and help bookkeeping.</p></div>
<div className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">Can a receipt replace an invoice?</h3><p className="mt-2 text-slate-600">Usually no—use invoice to request payment and receipt to confirm payment.</p></div>
</div>


            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Related pages</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt Generator →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/blank-receipt-template">Blank Receipt Template →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/invoice-payment-terms-explained">Invoice Payment Terms →</a>
              </div>
            </div>

            <ShareBar title="Difference Between Invoice and Receipt (Simple Guide)" path="/difference-between-invoice-and-receipt" description="Learn the difference between an invoice and a receipt, when to use each, and how to generate invoice and receipt PDFs instantly." />
          </article>

          <SiteFooter />
        </main>
      );
    }
