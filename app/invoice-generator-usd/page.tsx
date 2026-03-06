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
  title: "Free USD Invoice Generator (PDF) — Create Invoice in USD",
  description: "Create professional invoices in USD and download a printable PDF. No sign-up required.",
  alternates: {
    canonical: "/invoice-generator-usd",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free USD Invoice Generator (PDF)" href="/invoice-generator-usd" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free USD Invoice Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create professional invoices in USD and download a printable PDF. No sign-up required.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="USD" />

      <ShareBar title="Free USD Invoice Generator (PDF)" path="/invoice-generator-usd" />
      <EmbedCodeBlock path="/embed/invoice" />

      <ToolSeoBlock id="invoice" />
      <SiteFooter />
    </main>
  );
}