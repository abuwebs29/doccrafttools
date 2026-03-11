import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  alternates: { canonical: "/how-to-make-an-invoice-for-freelancer" },
  title: "How to Make an Invoice as a Freelancer (Step‑by‑Step)",
  description: "Learn how to create a freelancer invoice that looks professional and gets paid faster. Includes a checklist and copy‑paste wording.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">How to Make an Invoice as a Freelancer (Step‑by‑Step)</h1>
        <p className="mt-4 text-slate-600">Learn how to create a freelancer invoice that looks professional and gets paid faster. Includes a checklist and copy‑paste wording.</p>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Freelancer invoice checklist</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Your name/business name + contact details</li>
            <li>Client name + billing address</li>
            <li>Invoice number (unique) + invoice date</li>
            <li>Services list, hours/quantity, and rates</li>
            <li>Due date + payment terms</li>
            <li>Payment method (bank transfer, card, etc.)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Copy‑paste payment line</h2>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            Payment is due within 15 days of the invoice date. Thank you!
          </div>
          <p className="mt-3 text-sm text-slate-600">
            More options:{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="/invoice-due-date-wording">invoice due date wording</a>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Avoid these common mistakes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Missing invoice number or due date</li>
            <li>Vague service descriptions</li>
            <li>No payment method instructions</li>
            <li>Not sending a PDF (harder to track)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Quick start</h2>
          <p className="mt-3 text-slate-700">
            If you want the fastest way, open the generator and fill in your details—then download your PDF.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Create Freelancer Invoice →
            </a>
            <a href="/invoice-number-format" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Pick an Invoice Number Format →
            </a>
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

        <ShareBar title="How to Make an Invoice as a Freelancer (Step‑by‑Step)" path="/how-to-make-an-invoice-for-freelancer" description="Learn how to create a freelancer invoice that looks professional and gets paid faster. Includes a checklist and copy‑paste wording." />
      </article>
      <SiteFooter />
    </main>
  );
}
