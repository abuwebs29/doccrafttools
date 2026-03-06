import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator USA (PDF)",
  description: "Create a professional invoice for USA clients in USD and download a printable PDF instantly.",
  alternates: {
    canonical: "/invoice-generator-usa",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Invoice Generator USA (PDF)" href="/invoice-generator-usa" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator USA (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a professional invoice for USA clients in USD and download a printable PDF instantly.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="USD" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice Generator for USA</h2>
        <p className="mt-3 text-slate-600">Use this page if you invoice customers in the United States and want billing in US Dollars.</p>
        <p className="mt-3 text-slate-600">Generate a clean invoice PDF online without sign-up.</p>
      </section>

      <ShareBar title="Free Invoice Generator USA (PDF)" path="/invoice-generator-usa" description="Create a professional invoice for USA clients in USD and download a printable PDF instantly." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
