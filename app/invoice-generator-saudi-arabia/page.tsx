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
  title: "Free Invoice Generator Saudi Arabia (SAR) — Create Invoice Online",
  description: "Generate invoices in Saudi Riyal (SAR) and export as PDF. Add tax percent if applicable.",
  alternates: {
    canonical: "/invoice-generator-sar",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Invoice Generator Saudi Arabia (SAR)" href="/invoice-generator-sar" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator Saudi Arabia (SAR)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Generate invoices in Saudi Riyal (SAR) and export as PDF. Add tax percent if applicable.
        </p>
      </header>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <h2 className="text-base font-bold">Country note</h2>
            <p className="mt-2">
              This page preselects <strong>SAR</strong>. If you need tax/VAT/GST, use the <strong>Tax (%)</strong> field.
              Always check local rules for invoice requirements.
            </p>
          </section>

          <TemplateEngine template={templates.invoice} initialCurrencyCode="SAR" />

      <ShareBar title="Free Invoice Generator Saudi Arabia (SAR)" path="/invoice-generator-sar" />
      <EmbedCodeBlock path="/embed/invoice" />

      <ToolSeoBlock id="invoice" />
      <SiteFooter />
    </main>
  );
}