import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free AUD Invoice Generator (PDF) — Create Invoice in AUD",
  description: "Create professional invoices in AUD and download a printable PDF. No sign-up required.",
  alternates: {
    canonical: "/invoice-generator-aud",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free AUD Invoice Generator (PDF)" href="/invoice-generator-aud" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free AUD Invoice Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create professional invoices in AUD and download a printable PDF. No sign-up required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="AUD" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">AUD Invoice Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to create invoices in Australian Dollars (AUD) for freelance, consulting, or business work.</p>
        <p className="mt-3 text-slate-600">You can add items, tax, payment notes, and download a clean invoice PDF instantly.</p>
      </section>

      <ShareBar title="Free AUD Invoice Generator (PDF)" path="/invoice-generator-aud" />
      <EmbedCodeBlock toolName="invoice generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
