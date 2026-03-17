import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator in GBP (PDF)",
  description: "Create a professional invoice in GBP and download a printable PDF instantly. No login required.",
  alternates: {
    canonical: "/invoice-generator",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Invoice Generator in GBP (PDF)" href="/invoice-generator-uk" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator in GBP (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a professional invoice in GBP and download a printable PDF instantly. No login required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="GBP" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">GBP Invoice Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to generate invoices in British Pounds for UK clients and businesses.</p>
        <p className="mt-3 text-slate-600">Create a polished invoice PDF online with your items, tax, and notes.</p>
      </section>

      <ShareBar title="Free Invoice Generator in GBP (PDF)" path="/invoice-generator-uk" description="Create a professional invoice in GBP and download a printable PDF instantly. No login required." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
