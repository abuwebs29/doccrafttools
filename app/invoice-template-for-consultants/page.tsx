import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Invoice Template for Consultants",
  description: "Create a consultant invoice template online and export it as PDF, Excel, or Word. Great for retainers and advisory work.",
  alternates: { canonical: "/invoice-template-for-consultants" },
  openGraph: {
    title: "Invoice Template for Consultants",
    description: "Create a consultant invoice template online and export it as PDF, Excel, or Word. Great for retainers and advisory work.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Template for Consultants",
    description: "Create a consultant invoice template online and export it as PDF, Excel, or Word. Great for retainers and advisory work.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template for Consultants</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a consultant invoice template online and export it as PDF, Excel, or Word. Great for retainers and advisory work.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Consultant invoice templates made simple</h2>
        <p className="mt-3 text-slate-600">Consultants often invoice for retainers, sessions, or project milestones. This page helps you generate a template suited to consulting work.</p>
        <p className="mt-3 text-slate-600">Use it for advisory, coaching, strategy, and professional services.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why consultants use it</h2>
        <p className="mt-3 text-slate-600">It keeps billing clear, structured, and easy to export for clients and accounting.</p>
      </section>

      <ShareBar title="Invoice Template for Consultants" path="/invoice-template-for-consultants" description="Create a consultant invoice template online and export it as PDF, Excel, or Word. Great for retainers and advisory work." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-for-consultants" />
      <SiteFooter />
    </main>
  );
}
