import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator in USD (PDF)",
  description: "Create a professional invoice in USD and download a printable PDF instantly. No login required.",
  alternates: {
    canonical: "/invoice-generator-usd",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Invoice Generator in USD (PDF)" href="/invoice-generator-usd" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator in USD (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a professional invoice in USD and download a printable PDF instantly. No login required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="USD" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">USD Invoice Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to generate invoices in US Dollars for freelance, consulting, or client work.</p>
        <p className="mt-3 text-slate-600">Add items, optional tax, payment notes, and export a clean PDF in seconds.</p>
      </section>

      <ShareBar title="Free Invoice Generator in USD (PDF)" path="/invoice-generator-usd" description="Create a professional invoice in USD and download a printable PDF instantly. No login required." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
