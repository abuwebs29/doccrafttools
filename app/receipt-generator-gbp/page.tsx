import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free GBP Receipt Generator (PDF) — Create Receipt in GBP",
  description: "Create printable receipts in GBP and download a PDF instantly. No sign-up required.",
  alternates: {
    canonical: "/receipt-generator-gbp",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free GBP Receipt Generator (PDF)" href="/receipt-generator-gbp" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free GBP Receipt Generator (PDF)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create printable receipts in GBP and download a PDF instantly. No sign-up required.
        </p>
      </header>

      <TemplateEngine template={templates.receipt} initialCurrencyCode="GBP" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">GBP Receipt Generator</h2>
        <p className="mt-3 text-slate-600">Use this page to create receipts in British Pounds (GBP) for customer payments and expense records.</p>
      </section>

      <ShareBar title="Free GBP Receipt Generator (PDF)" path="/receipt-generator-gbp" />
      <EmbedCodeBlock toolName="receipt generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <SiteFooter />
    </main>
  );
}
