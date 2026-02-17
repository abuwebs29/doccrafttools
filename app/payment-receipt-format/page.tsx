    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import RecentTracker from "@/components/RecentTracker";
    import ShareBar from "@/components/ShareBar";
    import JsonLd from "@/components/JsonLd";
    import { buildBreadcrumbsJsonLd, guideCrumbs } from "@/lib/breadcrumbs";

    export const metadata = {
      title: "Payment Receipt Format (Examples + Free PDF Generator)",
      description: "Payment receipt format explained with examples and a free PDF receipt generator.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <RecentTracker title="Payment Receipt Format (Examples + Free PDF Generator)" href="/payment-receipt-format" type="Guide" />
          <JsonLd data={buildBreadcrumbsJsonLd(guideCrumbs("Payment Receipt Format (Examples + Free PDF Generator)", "/payment-receipt-format"))} />
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Payment Receipt Format (Examples + Free PDF Generator)</h1>
            <p className="mt-3 text-slate-600">Payment receipt format explained with examples and a free PDF receipt generator.</p>

            <p className="mt-4 text-slate-600">A payment receipt should clearly show who paid, who received, the amount, the date, and the reason for payment.</p>
<p className="mt-4 text-slate-600">Use a unique receipt number for easy tracking and bookkeeping.</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Create a receipt PDF →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-template">Rent receipt template →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice generator →</a>
              </div>
            </div>

            <ShareBar title="Payment Receipt Format (Examples + Free PDF Generator)" path="/payment-receipt-format" description="Payment receipt format explained with examples and a free PDF receipt generator." />
          </article>

          <SiteFooter />
        </main>
      );
    }
