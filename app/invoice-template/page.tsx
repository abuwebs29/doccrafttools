
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Template Generator",
  description: "Create a professional invoice template online and export it as PDF, Excel, or Word.",
  alternates: { canonical: "/invoice-template" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template Generator</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a professional invoice template online and export it as PDF, Excel, or Word.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Free Invoice Template Generator</h2>
        <p className="mt-3 text-slate-600">
          Use this page to build an invoice, then export it as PDF, Excel, or Word depending on your workflow.
        </p>
      </section>

      <ShareBar title="Free Invoice Template Generator" path="/invoice-template" />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
