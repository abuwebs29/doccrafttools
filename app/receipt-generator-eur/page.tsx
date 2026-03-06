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
  title: "Free EUR Receipt Generator (PDF) — Create Receipt in EUR",
  description: "Generate a payment receipt in EUR and download a clean PDF instantly. No login required.",
  alternates: {
    canonical: "/receipt-generator-eur",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free EUR Receipt Generator (PDF)" href="/receipt-generator-eur" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free EUR Receipt Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Generate a payment receipt in EUR and download a clean PDF instantly. No login required.
        </p>
      </header>

      <TemplateEngine template={templates.receipt} initialCurrencyCode="EUR" />

      <ShareBar title="Free EUR Receipt Generator (PDF)" path="/receipt-generator-eur" />
      <EmbedCodeBlock toolName="receipt generator" embedPath="/embed/receipt" />

      <ToolSeoBlock id="receipt" />
      <SiteFooter />
    </main>
  );
}