    import SiteNav from "@/components/SiteNav";
import InternalLinks from "@/components/InternalLinks";
    import SiteFooter from "@/components/SiteFooter";
    import ShareBar from "@/components/ShareBar";

    export const metadata = {
      title: "Invoice Number Format (Examples + Best Practices)",
      description: "Invoice number format examples, best practices, and tips to avoid duplicate invoice numbers for freelancers and small businesses.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Invoice Number Format (Examples + Best Practices)</h1>
            <p className="mt-4 text-slate-600">Invoice number format examples, best practices, and tips to avoid duplicate invoice numbers for freelancers and small businesses.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700">Quick action:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/invoice-generator"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Create Invoice PDF →
                </a>
              </div>
            </div>


        <h2 className="mt-10 text-xl font-semibold">Examples</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li>001, 002, 003…</li>
<li>INV-2026-001</li>
<li>INV-2026-02-001</li>
<li>INV-ABU-001</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">Best practices</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li>Keep numbers unique</li><li>Use a prefix like INV</li><li>Use leading zeros for sorting</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
<div className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">Can I start at 100?</h3><p className="mt-2 text-slate-600">Yes—many businesses start at 100 or 1000.</p></div>
</div>


            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Related pages</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/invoice-payment-terms-explained">Invoice Payment Terms →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/tax-invoice-template">Tax Invoice Template →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/commercial-invoice-template">Commercial Invoice Template →</a>
              </div>
            </div>

            <ShareBar title="Invoice Number Format (Examples + Best Practices)" path="/invoice-number-format" description="Invoice number format examples, best practices, and tips to avoid duplicate invoice numbers for freelancers and small businesses." />
                  <InternalLinks currentPath="/invoice-number-format" />
      </article>

          <SiteFooter />
        </main>
      );
    }