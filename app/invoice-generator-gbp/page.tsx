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
  title: "Free GBP Invoice Generator (PDF) — Create Invoice in GBP",
  description: "Create professional invoices in GBP and download a printable PDF. No sign-up required.",
  alternates: {
    canonical: "/invoice-generator",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free GBP Invoice Generator (PDF)" href="/invoice-generator-gbp" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free GBP Invoice Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create professional invoices in GBP and download a printable PDF. No sign-up required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="GBP" />

      <ShareBar title="Free GBP Invoice Generator (PDF)" path="/invoice-generator-gbp" />
      <EmbedCodeBlock toolName="invoice generator" embedPath="/embed/invoice" />

      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}