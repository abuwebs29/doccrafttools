
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Invoice Template Word Generator",
  description: "Create a Word-style invoice template and export it as PDF or Word.",
  alternates: { canonical: "/invoice-template-word" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template Word Generator</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a Word-style invoice template and export it as PDF or Word.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice Template Word Generator</h2>
        <p className="mt-3 text-slate-600">
          Use this page to build an invoice, then export it as PDF, Excel, or Word depending on your workflow.
        </p>
      </section>

      <ShareBar title="Invoice Template Word Generator" path="/invoice-template-word" />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
