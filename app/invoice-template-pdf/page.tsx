    import SiteNav from "@/components/SiteNav";
import InternalLinks from "@/components/InternalLinks";
    import SiteFooter from "@/components/SiteFooter";
    import RecentTracker from "@/components/RecentTracker";
    import ShareBar from "@/components/ShareBar";
    import JsonLd from "@/components/JsonLd";
    import { buildBreadcrumbsJsonLd, guideCrumbs } from "@/lib/breadcrumbs";

    export const metadata = {
      title: "Invoice Template PDF",
      description: "Use this invoice template PDF generator to create invoices with items, tax, notes and logo — instantly.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <RecentTracker title="Invoice Template PDF" href="/invoice-template-pdf" type="Guide" />
          <JsonLd data={buildBreadcrumbsJsonLd(guideCrumbs("Invoice Template PDF", "/invoice-template-pdf"))} />
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template PDF</h1>
            <p className="mt-3 text-slate-600">Use this invoice template PDF generator to create invoices with items, tax, notes and logo — instantly.</p>

            <p className="mt-4 text-slate-600">Instead of downloading a static template, generate a clean invoice PDF by filling a simple form.</p>
<p className="mt-4 text-slate-600">This helps you avoid formatting issues and ensures totals are calculated correctly.</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Open Invoice Generator →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/invoice-format">Invoice format guide →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All templates →</a>
              </div>
            </div>

            <ShareBar title="Invoice Template PDF" path="/invoice-template-pdf" description="Use this invoice template PDF generator to create invoices with items, tax, notes and logo — instantly." />
                  <InternalLinks currentPath="/invoice-template-pdf" />
      </article>

          <SiteFooter />
        </main>
      );
    }