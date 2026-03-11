    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import ShareBar from "@/components/ShareBar";

    export const metadata = {
  alternates: { canonical: "/rent-receipt-format" },
      title: "Rent Receipt Format (Examples + Printable PDF)",
      description: "Rent receipt format explained with examples and a printable PDF generator for landlords and tenants.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Rent Receipt Format (Examples + Printable PDF)</h1>
            <p className="mt-4 text-slate-600">Rent receipt format explained with examples and a printable PDF generator for landlords and tenants.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700">Quick action:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/rent-receipt-generator"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Generate Rent Receipt PDF →
                </a>
              </div>
            </div>


        <h2 className="mt-10 text-xl font-semibold">What to include</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li>Receipt number and date</li><li>Tenant and landlord names</li><li>Property address</li><li>Rent period</li><li>Amount and payment method</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
<div className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">Is a signature required?</h3><p className="mt-2 text-slate-600">Not always, but it’s useful proof.</p></div>
</div>


            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Related pages</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-generator">Rent Receipt Generator →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-template">Rent Receipt Template →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/blank-receipt-template">Blank Receipt Template →</a>
              </div>
            </div>

            <ShareBar title="Rent Receipt Format (Examples + Printable PDF)" path="/rent-receipt-format" description="Rent receipt format explained with examples and a printable PDF generator for landlords and tenants." />
          </article>

          <SiteFooter />
        </main>
      );
    }
