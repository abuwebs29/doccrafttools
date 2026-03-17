import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import RelatedTools from "@/components/RelatedTools";
import PageFaq from "@/components/PageFaq";
import { templates } from "@/lib/templates";
import { toolSchema } from "@/lib/schemaRegistry";

export const metadata = {
  alternates: { canonical: "/quotation-generator" },
  title: toolSchema.quotation.title,
  description: toolSchema.quotation.description,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Quotation Generator" href="/quotation-generator" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Quotation / Estimate Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a quotation PDF with items, optional tax, validity date and notes.
        </p>
      </header>

      <TemplateEngine template={templates.quotation} />

      <ShareBar title="Free Quotation / Estimate Generator (PDF)" path="/quotation-generator" description="Generate and download a clean PDF instantly — no login." />
      <EmbedCodeBlock toolName="Quotation Generator" embedPath="/embed/quotation" />

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">What a quotation should include</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>Customer details and quotation number</li>
            <li>Item or service descriptions with pricing</li>
            <li>Validity date and optional tax</li>
            <li>Approval terms and notes</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Why quotation pages drive traffic</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Comparison pages, samples, and format guides help users understand when to quote and when to invoice. That makes the main generator page stronger and easier to rank.</p>
        </div>
      </section>

      <ToolSeoBlock toolId="quotation" />
      <PageFaq items={[{q:"What is the difference between a quotation and an invoice?",a:"A quotation proposes pricing before approval. An invoice requests payment after approval or delivery."},{q:"Can a quotation become an invoice?",a:"Yes. Many businesses convert accepted quotations into invoices with the same line items and totals."}]} />
      <RelatedTools title="Related quotation, invoice, and receipt pages" />
      <SiteFooter />
    </main>
  );
}
