    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import RecentTracker from "@/components/RecentTracker";
    import ShareBar from "@/components/ShareBar";
    import JsonLd from "@/components/JsonLd";
    import { buildBreadcrumbsJsonLd, guideCrumbs } from "@/lib/breadcrumbs";

    export const metadata = {
      title: "Receipt Template PDF (Free Download Generator)",
      description: "Create a printable receipt template PDF instantly — add payer name, amount, purpose, and method.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <RecentTracker title="Receipt Template PDF (Free Download Generator)" href="/receipt-template-pdf" type="Guide" />
          <JsonLd data={buildBreadcrumbsJsonLd(guideCrumbs("Receipt Template PDF (Free Download Generator)", "/receipt-template-pdf"))} />
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Receipt Template PDF (Free Download Generator)</h1>
            <p className="mt-3 text-slate-600">Create a printable receipt template PDF instantly — add payer name, amount, purpose, and method.</p>

            <p className="mt-4 text-slate-600">A receipt is proof of payment. It typically includes a receipt number, date, received-from name, amount, and what the payment is for.</p>
<p className="mt-4 text-slate-600">If needed, add a payment method (cash, transfer, card) and an issuer name.</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Generate a receipt PDF →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/payment-receipt-format">Payment receipt format →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All PDF templates →</a>
              </div>
            </div>

            <ShareBar title="Receipt Template PDF (Free Download Generator)" path="/receipt-template-pdf" description="Create a printable receipt template PDF instantly — add payer name, amount, purpose, and method." />
          </article>

          <SiteFooter />
        </main>
      );
    }
