import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  title: "Tax Invoice Template (Free PDF Generator)",
  description:
    "Create a tax invoice template with VAT or GST calculation. Generate and download as PDF instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />

      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Tax Invoice Template
        </h1>

        <p className="mt-4 text-slate-600">
          A tax invoice includes VAT or GST details required for legal
          accounting purposes. It clearly shows tax rate and tax amount.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Required details</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Seller tax registration number</li>
          <li>Invoice number and date</li>
          <li>Tax rate (VAT/GST)</li>
          <li>Tax amount</li>
          <li>Grand total</li>
        </ul>

        <div className="mt-8">
          <a
            href="/invoice-generator"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Generate Tax Invoice →
          </a>
        </div>

        <ShareBar
          title="Tax Invoice Template"
          path="/tax-invoice-template"
          description="Free VAT/GST invoice template PDF generator."
        />
      </article>

      <SiteFooter />
    </main>
  );
}
