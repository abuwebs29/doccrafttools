import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";
import InternalLinks from "@/components/InternalLinks";

export const metadata = {
  title: "Commercial Invoice Template (Free PDF Generator)",
  description:
    "Create a commercial invoice template PDF for international trade. Add exporter, importer, HS codes, totals and download instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />

      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Commercial Invoice Template
        </h1>

        <p className="mt-4 text-slate-600">
          A commercial invoice is used for international shipping and customs clearance.
          It includes exporter and importer details, product descriptions, HS codes,
          declared value, and total amount.
        </p>

        <h2 className="mt-8 text-xl font-semibold">What to include</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Exporter and importer information</li>
          <li>Invoice number and date</li>
          <li>Product description and quantity</li>
          <li>HS code (if applicable)</li>
          <li>Total declared value</li>
        </ul>

        <div className="mt-8">
          <a
            href="/invoice-generator"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Generate Commercial Invoice →
          </a>
        </div>

        <ShareBar
          title="Commercial Invoice Template"
          path="/commercial-invoice-template"
          description="Free commercial invoice PDF generator for international shipping."
        />
              <InternalLinks currentPath="/commercial-invoice-template" />
      </article>

      <SiteFooter />
    </main>
  );
}