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
  title: "Free Invoice Generator USA (USD) — Create Invoice Online",
  description: "Create invoices in US Dollars (USD) with a clean printable PDF. Great for freelancers and small businesses in the USA.",
  alternates: {
    canonical: "/invoice-generator-usd",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Invoice Generator USA (USD)" href="/invoice-generator-usd" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator USA (USD)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create invoices in US Dollars (USD) with a clean printable PDF. Great for freelancers and small businesses in the USA.
        </p>
      </header>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <h2 className="text-base font-bold">Country note</h2>
            <p className="mt-2">
              This page preselects <strong>USD</strong>. If you need tax/VAT/GST, use the <strong>Tax (%)</strong> field.
              Always check local rules for invoice requirements.
            </p>
          </section>

          <TemplateEngine template={templates.invoice} initialCurrencyCode="USD" />

      <ShareBar title="Free Invoice Generator USA (USD)" path="/invoice-generator-usd" />
      <EmbedCodeBlock toolName="invoice generator" embedPath="/embed/invoice" />

      <ToolSeoBlock id="invoice" />
      <SiteFooter />
    </main>
  );
}