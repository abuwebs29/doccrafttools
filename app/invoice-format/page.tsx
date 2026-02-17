    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import RecentTracker from "@/components/RecentTracker";
    import ShareBar from "@/components/ShareBar";
    import JsonLd from "@/components/JsonLd";
    import { buildBreadcrumbsJsonLd, guideCrumbs } from "@/lib/breadcrumbs";

    export const metadata = {
      title: "Invoice Format (Examples + Free PDF Generator)",
      description: "Invoice format examples and the essential fields your invoice should include (with a free PDF generator).",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <RecentTracker title="Invoice Format (Examples + Free PDF Generator)" href="/invoice-format" type="Guide" />
          <JsonLd data={buildBreadcrumbsJsonLd(guideCrumbs("Invoice Format (Examples + Free PDF Generator)", "/invoice-format"))} />
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Invoice Format (Examples + Free PDF Generator)</h1>
            <p className="mt-3 text-slate-600">Invoice format examples and the essential fields your invoice should include (with a free PDF generator).</p>

            <p className="mt-4 text-slate-600">A complete invoice usually includes an invoice number, date, seller details, buyer details, line items, totals, and payment terms.</p>
<p className="mt-4 text-slate-600">If you charge tax, show the tax rate and amount clearly and include the grand total.</p>
<p className="mt-4 text-slate-600">Use consistent formatting so clients can read it quickly and pay faster.</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Create an invoice PDF now →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/how-to-make-an-invoice">How to make an invoice →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/quotation-generator">Quotation generator →</a>
              </div>
            </div>

            <ShareBar title="Invoice Format (Examples + Free PDF Generator)" path="/invoice-format" description="Invoice format examples and the essential fields your invoice should include (with a free PDF generator)." />
          </article>

          <SiteFooter />
        </main>
      );
    }
