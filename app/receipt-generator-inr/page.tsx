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
  title: "Free INR Receipt Generator (PDF) — Create Receipt in INR",
  description: "Generate a payment receipt in INR and download a clean PDF instantly. No login required.",
  alternates: {
    canonical: "/receipt-generator-inr",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free INR Receipt Generator (PDF)" href="/receipt-generator-inr" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free INR Receipt Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Generate a payment receipt in INR and download a clean PDF instantly. No login required.
        </p>
      </header>

      <TemplateEngine template={templates.receipt} initialCurrencyCode="INR" />

      <ShareBar title="Free INR Receipt Generator (PDF)" path="/receipt-generator-inr" />
      <EmbedCodeBlock path="/embed/receipt" />

      <ToolSeoBlock id="receipt" />
      <SiteFooter />
    </main>
  );
}