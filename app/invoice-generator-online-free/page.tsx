import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  title: "Free Invoice Generator Online (No Sign Up Required)",
  description: "Create a professional invoice online for free. Customize, preview, and download a clean PDF instantly—no signup required.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator Online (No Sign Up Required)</h1>
        <p className="mt-4 text-slate-600">Create a professional invoice online for free. Customize, preview, and download a clean PDF instantly—no signup required.</p>

        <section className="mt-8">
          <h2 className="text-xl font-bold">What you get</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">✅ Instant PDF download</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">✅ Works on mobile + desktop</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">✅ No signup / no login</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">✅ Clean layout (client-ready)</div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">How to create an invoice online (3 steps)</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
            <li>Add your business info + your client’s info.</li>
            <li>Add items/services, quantity, and price (tax optional).</li>
            <li>Preview, then download your invoice as a PDF.</li>
          </ol>
          <p className="mt-3 text-sm text-slate-600">
            Helpful guides:{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/invoice-number-format">invoice number format</a>,{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/payment-terms-examples">payment terms examples</a>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">FAQ</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="font-semibold">Is it really free?</div>
              <div className="mt-1 text-sm text-slate-600">Yes—create and download a PDF invoice without signing up.</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="font-semibold">Do I need to create an account?</div>
              <div className="mt-1 text-sm text-slate-600">No. You can generate invoices instantly.</div>
            </div>
          </div>
        </section>


        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="text-sm font-semibold text-slate-900">Create a PDF in seconds</div>
          <p className="mt-2 text-sm text-slate-600">
            No signup. No watermark. Download instantly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Open Invoice Generator →
            </a>
            <a href="/receipt-generator" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Open Receipt Generator →
            </a>
          </div>
        </div>

        <ShareBar title="Free Invoice Generator Online (No Sign Up Required)" path="/invoice-generator-online-free" description="Create a professional invoice online for free. Customize, preview, and download a clean PDF instantly—no signup required." />
      </article>
      <SiteFooter />
    </main>
  );
}
