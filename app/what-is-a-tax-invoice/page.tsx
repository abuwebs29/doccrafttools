    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import ShareBar from "@/components/ShareBar";

    export const metadata = {
  alternates: { canonical: "/what-is-a-tax-invoice" },
      title: "What Is a Tax Invoice? (VAT/GST Invoice Guide)",
      description: "A tax invoice includes VAT/GST details required for compliant billing. Learn what to include and generate a tax invoice PDF instantly.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">What Is a Tax Invoice? (VAT/GST Invoice Guide)</h1>
            <p className="mt-4 text-slate-600">A tax invoice includes VAT/GST details required for compliant billing. Learn what to include and generate a tax invoice PDF instantly.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700">Quick action:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/invoice-generator"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Generate Tax Invoice →
                </a>
              </div>
            </div>


        <h2 className="mt-10 text-xl font-semibold">What to include</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li>Seller tax registration number</li><li>Invoice number and date</li><li>Line items and subtotal</li><li>Tax rate and tax amount</li><li>Total including tax</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">Tax invoice vs normal invoice</h2>
        <p className="mt-3 text-slate-600">A normal invoice may not show registration details and tax breakdown. A tax invoice does.</p>

        <h2 className="mt-10 text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
<div className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">Is a tax invoice mandatory?</h3><p className="mt-2 text-slate-600">Depends on your region and whether you must charge VAT/GST.</p></div>
</div>


            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Related pages</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/tax-invoice-template">Tax Invoice Template →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/invoice-number-format">Invoice Number Format →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/invoice-payment-terms-explained">Invoice Payment Terms →</a>
              </div>
            </div>

            <ShareBar title="What Is a Tax Invoice? (VAT/GST Invoice Guide)" path="/what-is-a-tax-invoice" description="A tax invoice includes VAT/GST details required for compliant billing. Learn what to include and generate a tax invoice PDF instantly." />
          </article>

          <SiteFooter />
        </main>
      );
    }
