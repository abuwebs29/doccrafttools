import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator in PKR (PDF)",
  description: "Create a professional invoice in PKR and download a printable PDF instantly. No login required.",
  alternates: {
    canonical: "/invoice-generator",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Invoice Generator in PKR (PDF)" href="/invoice-generator-pkr" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator in PKR (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a professional invoice in PKR and download a printable PDF instantly. No login required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="PKR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">PKR Invoice Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to create invoices in Pakistani Rupees for services, freelance work, and business billing.</p>
        <p className="mt-3 text-slate-600">Build a clean invoice and export a printable PDF in minutes.</p>
      </section>

      <ShareBar title="Free Invoice Generator in PKR (PDF)" path="/invoice-generator-pkr" description="Create a professional invoice in PKR and download a printable PDF instantly. No login required." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
