import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free INR Receipt Generator (PDF) — Create Receipt in INR",
  description: "Create printable receipts in INR and download a PDF instantly. No sign-up required.",
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
          Create printable receipts in INR and download a PDF instantly. No sign-up required.
        </p>
      </header>

      <TemplateEngine template={templates.receipt} initialCurrencyCode="INR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">INR Receipt Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to create receipts in Indian Rupees (INR) for payments, deposits, or business transactions.</p>
      </section>

      <ShareBar title="Free INR Receipt Generator (PDF)" path="/receipt-generator-inr" />
      <EmbedCodeBlock toolName="receipt generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <SiteFooter />
    </main>
  );
}
