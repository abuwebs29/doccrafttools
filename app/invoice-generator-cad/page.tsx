import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free CAD Invoice Generator (PDF) — Create Invoice in CAD",
  description: "Create professional invoices in CAD and download a printable PDF. No sign-up required.",
  alternates: {
    canonical: "/invoice-generator-cad",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free CAD Invoice Generator (PDF)" href="/invoice-generator-cad" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free CAD Invoice Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create professional invoices in CAD and download a printable PDF. No sign-up required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="CAD" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">CAD Invoice Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to create invoices in Canadian Dollars (CAD) for client work and small business billing.</p>
        <p className="mt-3 text-slate-600">Add your line items, optional tax, and export a clean PDF in seconds.</p>
      </section>

      <ShareBar title="Free CAD Invoice Generator (PDF)" path="/invoice-generator-cad" />
      <EmbedCodeBlock toolName="invoice generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
