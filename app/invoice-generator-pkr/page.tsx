import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free PKR Invoice Generator (PDF) — Create Invoice in PKR",
  description: "Create professional invoices in PKR and download a printable PDF. No sign-up required.",
  alternates: {
    canonical: "/invoice-generator-pkr",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free PKR Invoice Generator (PDF)" href="/invoice-generator-pkr" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free PKR Invoice Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create professional invoices in PKR and download a printable PDF. No sign-up required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="PKR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">PKR Invoice Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to create invoices in Pakistani Rupees (PKR) for freelance work, services, and small businesses.</p>
        <p className="mt-3 text-slate-600">Generate a printable invoice PDF online without login.</p>
      </section>

      <ShareBar title="Free PKR Invoice Generator (PDF)" path="/invoice-generator-pkr" />
      <EmbedCodeBlock toolName="invoice generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
