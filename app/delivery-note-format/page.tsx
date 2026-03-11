    import SiteNav from "@/components/SiteNav";
    import SiteFooter from "@/components/SiteFooter";
    import ShareBar from "@/components/ShareBar";

    export const metadata = {
  alternates: { canonical: "/delivery-note-format" },
      title: "Delivery Note Format (Template + Examples)",
      description: "Delivery note format explained with template fields, examples, and tips for businesses shipping goods.",
    };

    export default function Page() {
      return (
        <main className="mx-auto max-w-4xl px-4 py-10">
          <SiteNav />

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Delivery Note Format (Template + Examples)</h1>
            <p className="mt-4 text-slate-600">Delivery note format explained with template fields, examples, and tips for businesses shipping goods.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700">Quick action:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/invoice-generator"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Create an Invoice PDF →
                </a>
              </div>
            </div>


        <h2 className="mt-10 text-xl font-semibold">What to include</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
<li>Delivery note number and date</li><li>Sender and receiver details</li><li>Item list (description + quantity)</li><li>Delivery address</li><li>Receiver signature</li>
</ul>

        <h2 className="mt-10 text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
<div className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">Is a delivery note the same as an invoice?</h3><p className="mt-2 text-slate-600">No—delivery note confirms delivery; invoice requests payment.</p></div>
</div>


            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">Related pages</h2>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="font-semibold text-slate-900 hover:underline" href="/commercial-invoice-template">Commercial Invoice Template →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/quotation-generator">Quotation Generator →</a>
<a className="font-semibold text-slate-900 hover:underline" href="/difference-between-invoice-and-receipt">Difference: Invoice vs Receipt →</a>
              </div>
            </div>

            <ShareBar title="Delivery Note Format (Template + Examples)" path="/delivery-note-format" description="Delivery note format explained with template fields, examples, and tips for businesses shipping goods." />
          </article>

          <SiteFooter />
        </main>
      );
    }
