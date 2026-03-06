import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Receipt Generator in GBP (PDF)",
  description: "Create a printable receipt in GBP and download a PDF instantly. No login required.",
  alternates: {
    canonical: "/receipt-generator-gbp",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free Receipt Generator in GBP (PDF)" href="/receipt-generator-gbp" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Receipt Generator in GBP (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a printable receipt in GBP and download a PDF instantly. No login required.
        </p>
      </header>

      <TemplateEngine template={templates.receipt} initialCurrencyCode="GBP" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">GBP Receipt Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to create receipts in British Pounds for customer payments and business records.</p>
      </section>

      <ShareBar title="Free Receipt Generator in GBP (PDF)" path="/receipt-generator-gbp" description="Create a printable receipt in GBP and download a PDF instantly. No login required." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <SiteFooter />
    </main>
  );
}
