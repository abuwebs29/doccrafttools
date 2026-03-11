import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
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

      <ToolSeoBlock toolId="quotation" />

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Try also</h2>
        <div className="mt-4 grid gap-2 text-sm">
          <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/quotation-generator">Quotation Generator →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All PDF Templates →</a>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
