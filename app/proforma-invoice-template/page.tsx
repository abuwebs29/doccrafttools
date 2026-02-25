import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";
import InternalLinks from "@/components/InternalLinks";

export const metadata = {
  title: "Proforma Invoice Template (Free PDF Generator)",
  description:
    "Create a proforma invoice template for advance billing or quotations. Download as PDF instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Proforma Invoice Template
        </h1>

        <p className="mt-4 text-slate-600">
          A proforma invoice is issued before final sale. It outlines estimated costs and terms.
        </p>

        <div className="mt-8">
          <a
            href="/invoice-generator"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Generate Proforma Invoice →
          </a>
        </div>

        <ShareBar
          title="Proforma Invoice Template"
          path="/proforma-invoice-template"
          description="Free proforma invoice PDF generator."
        />
              <InternalLinks currentPath="/proforma-invoice-template" />
      </article>
      <SiteFooter />
    </main>
  );
}