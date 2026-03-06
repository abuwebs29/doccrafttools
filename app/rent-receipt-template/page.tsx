    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import RecentTracker from "@/components/RecentTracker";
    import ShareBar from "@/components/ShareBar";
    import JsonLd from "@/components/JsonLd";
    import { buildBreadcrumbsJsonLd, guideCrumbs } from "@/lib/breadcrumbs";

    export const metadata = {
      title: "Rent Receipt Template (Printable PDF Generator)",
      description: "Generate a rent receipt PDF with tenant/landlord details, property address, rent period, and amount paid.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <RecentTracker title="Rent Receipt Template (Printable PDF Generator)" href="/rent-receipt-template" type="Guide" />
          <JsonLd data={buildBreadcrumbsJsonLd(guideCrumbs("Rent Receipt Template (Printable PDF Generator)", "/rent-receipt-template"))} />
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Rent Receipt Template (Printable PDF Generator)</h1>
            <p className="mt-3 text-slate-600">Generate a rent receipt PDF with tenant/landlord details, property address, rent period, and amount paid.</p>

            <p className="mt-4 text-slate-600">A rent receipt usually includes tenant name, landlord name, property address, rent period (month), amount paid, and payment method.</p>
<p className="mt-4 text-slate-600">It can also include signatures for extra clarity.</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-generator">Generate a rent receipt PDF →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt generator →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All PDF templates →</a>
              </div>
            </div>

            <ShareBar title="Rent Receipt Template (Printable PDF Generator)" path="/rent-receipt-template" description="Generate a rent receipt PDF with tenant/landlord details, property address, rent period, and amount paid." />
          </article>

          <SiteFooter />
        </main>
      );
    }
