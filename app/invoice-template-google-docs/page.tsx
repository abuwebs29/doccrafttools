import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Template Google Docs",
  description: "Create a free invoice template inspired by Google Docs workflows. Export as PDF, Excel, or Word.",
  alternates: { canonical: "/invoice-template-google-docs" },
  openGraph: {
    title: "Free Invoice Template Google Docs",
    description: "Create a free invoice template inspired by Google Docs workflows. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Template Google Docs",
    description: "Create a free invoice template inspired by Google Docs workflows. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template Google Docs</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a free invoice template inspired by Google Docs workflows. Export as PDF, Excel, or Word.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why use an invoice template for Google Docs?</h2>
        <p className="mt-3 text-slate-600">Many freelancers and small businesses like document-style invoice templates because they feel familiar and easy to share. This page gives you a simple invoice structure you can export quickly.</p>
        <p className="mt-3 text-slate-600">Use it when you want a clean invoice layout that works well for document-first workflows and client billing.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Best use cases</h2>
        <p className="mt-3 text-slate-600">This template is useful for consultants, agencies, freelancers, and service businesses that want fast invoice creation without complicated accounting tools.</p>
      </section>

      <ShareBar title="Free Invoice Template Google Docs" path="/invoice-template-google-docs" description="Create a free invoice template inspired by Google Docs workflows. Export as PDF, Excel, or Word." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-google-docs" />
      <SiteFooter />
    </main>
  );
}
