    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import RecentTracker from "@/components/RecentTracker";
    import ShareBar from "@/components/ShareBar";
    import JsonLd from "@/components/JsonLd";
    import { buildBreadcrumbsJsonLd, guideCrumbs } from "@/lib/breadcrumbs";

    export const metadata = {
      title: "Simple Invoice Template",
      description: "A simple invoice template is best for quick billing — generate a clean one-page PDF in seconds.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <RecentTracker title="Simple Invoice Template" href="/simple-invoice-template" type="Guide" />
          <JsonLd data={buildBreadcrumbsJsonLd(guideCrumbs("Simple Invoice Template", "/simple-invoice-template"))} />
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Simple Invoice Template</h1>
            <p className="mt-3 text-slate-600">A simple invoice template is best for quick billing — generate a clean one-page PDF in seconds.</p>

            <p className="mt-4 text-slate-600">Keep it simple: invoice number, date, your details, client details, one or more line items, and the total.</p>
<p className="mt-4 text-slate-600">Add a short note like payment due date to speed up payment.</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Generate a simple invoice PDF →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/how-to-make-an-invoice">How to make an invoice →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt generator →</a>
              </div>
            </div>

            <ShareBar title="Simple Invoice Template" path="/simple-invoice-template" description="A simple invoice template is best for quick billing — generate a clean one-page PDF in seconds." />
          </article>

          <SiteFooter />
        </main>
      );
    }
