    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import RecentTracker from "@/components/RecentTracker";
    import ShareBar from "@/components/ShareBar";
    import JsonLd from "@/components/JsonLd";
    import { buildBreadcrumbsJsonLd, guideCrumbs } from "@/lib/breadcrumbs";

    export const metadata = {
      title: "How to Make an Invoice (Step-by-Step)",
      description: "A simple step-by-step method to create a professional invoice — plus a free PDF invoice generator.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <RecentTracker title="How to Make an Invoice (Step-by-Step)" href="/how-to-make-an-invoice" type="Guide" />
          <JsonLd data={buildBreadcrumbsJsonLd(guideCrumbs("How to Make an Invoice (Step-by-Step)", "/how-to-make-an-invoice"))} />
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">How to Make an Invoice (Step-by-Step)</h1>
            <p className="mt-3 text-slate-600">A simple step-by-step method to create a professional invoice — plus a free PDF invoice generator.</p>

            <p className="mt-4 text-slate-600">Add your business details (name, address, and contact info).</p>
<p className="mt-4 text-slate-600">Add client details (name, address).</p>
<p className="mt-4 text-slate-600">Add line items (description, quantity, unit price).</p>
<p className="mt-4 text-slate-600">Add optional tax and notes (payment terms, bank details).</p>
<p className="mt-4 text-slate-600">Download as a PDF and send to your client.</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Use the free Invoice Generator →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/invoice-format">Invoice format examples →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All PDF templates →</a>
              </div>
            </div>

            <ShareBar title="How to Make an Invoice (Step-by-Step)" path="/how-to-make-an-invoice" description="A simple step-by-step method to create a professional invoice — plus a free PDF invoice generator." />
          </article>

          <SiteFooter />
        </main>
      );
    }
