import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator in INR (PDF)",
  description: "Create a professional invoice in INR and download a printable PDF instantly. No login required.",
  alternates: {
    canonical: "/invoice-generator",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Invoice Generator in INR (PDF)" href="/invoice-generator-inr" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator in INR (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a professional invoice in INR and download a printable PDF instantly. No login required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="INR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">INR Invoice Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to generate invoices in Indian Rupees for local billing and freelance work.</p>
        <p className="mt-3 text-slate-600">You can add line items, tax, notes, and export a clean PDF online.</p>
      </section>

      <ShareBar title="Free Invoice Generator in INR (PDF)" path="/invoice-generator-inr" description="Create a professional invoice in INR and download a printable PDF instantly. No login required." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
