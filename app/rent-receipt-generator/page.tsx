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
  title: toolSchema.rent_receipt.title,
  description: toolSchema.rent_receipt.description,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Rent Receipt Generator" href="/rent-receipt-generator" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Rent Receipt Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a rent receipt PDF with tenant/landlord details, property, period and amount.
        </p>
      </header>

      <TemplateEngine template={templates.rent_receipt} />

      <ShareBar title="Free Rent Receipt Generator (PDF)" path="/rent-receipt-generator" description="Generate and download a clean PDF instantly — no login." />
      <EmbedCodeBlock toolName="Rent Receipt Generator" embedPath="/embed/rent-receipt" />

      <ToolSeoBlock toolId="rent_receipt" />

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
