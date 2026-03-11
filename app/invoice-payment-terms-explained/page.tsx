    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import ShareBar from "@/components/ShareBar";

    export const metadata = {
  alternates: { canonical: "/invoice-payment-terms-explained" },
      title: "Invoice Payment Terms Explained (Net 30, Net 15, Due on Receipt)",
      description: "Understand invoice payment terms like Net 30, Net 15, and Due on Receipt. Learn best practices and generate invoices with clear terms.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Invoice Payment Terms Explained (Net 30, Net 15, Due on Receipt)</h1>
            <p className="mt-4 text-slate-600">Understand invoice payment terms like Net 30, Net 15, and Due on Receipt. Learn best practices and generate invoices with clear terms.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700">Quick action:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/invoice-generator"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Create Invoice with Terms →
                </a>
              </div>
            </div>


        <h2 className="mt-10 text-xl font-semibold">Common payment terms</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li><strong>Due on receipt</strong>: immediate</li>
<li><strong>Net 7 / Net 15 / Net 30</strong>: due in 7/15/30 days</li>
<li><strong>EOM</strong>: end of month</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">Best practices</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li>Write an exact due date</li><li>Add payment methods</li><li>Follow up politely</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
<div className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">What does Net 30 mean?</h3><p className="mt-2 text-slate-600">Payment due within 30 days of the invoice date.</p></div>
</div>


            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Related pages</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice Generator →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/proforma-invoice-template">Proforma Invoice Template →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/difference-between-invoice-and-receipt">Difference: Invoice vs Receipt →</a>
              </div>
            </div>

            <ShareBar title="Invoice Payment Terms Explained (Net 30, Net 15, Due on Receipt)" path="/invoice-payment-terms-explained" description="Understand invoice payment terms like Net 30, Net 15, and Due on Receipt. Learn best practices and generate invoices with clear terms." />
          </article>

          <SiteFooter />
        </main>
      );
    }
