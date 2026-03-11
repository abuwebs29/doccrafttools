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
  title: toolSchema.delivery_note.title,
  description: toolSchema.delivery_note.description,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Delivery Note Generator" href="/delivery-note-generator" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Delivery Note Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Generate a delivery note PDF for delivered goods with item list and reference.
        </p>
      </header>

      <TemplateEngine template={templates.delivery_note} />

      <ShareBar title="Free Delivery Note Generator (PDF)" path="/delivery-note-generator" description="Generate and download a clean PDF instantly — no login." />
      <EmbedCodeBlock toolName="Delivery Note Generator" embedPath="/embed/delivery-note" />

      <ToolSeoBlock toolId="delivery_note" />

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
