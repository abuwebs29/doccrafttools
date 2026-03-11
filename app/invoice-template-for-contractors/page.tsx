import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Invoice Template for Contractors",
  description: "Create a contractor invoice template online and export it as PDF, Excel, or Word for project-based billing.",
  alternates: { canonical: "/invoice-template-for-contractors" },
  openGraph: {
    title: "Invoice Template for Contractors",
    description: "Create a contractor invoice template online and export it as PDF, Excel, or Word for project-based billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Template for Contractors",
    description: "Create a contractor invoice template online and export it as PDF, Excel, or Word for project-based billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template for Contractors</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a contractor invoice template online and export it as PDF, Excel, or Word for project-based billing.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Contractor invoice templates for project work</h2>
        <p className="mt-3 text-slate-600">Contractors often need invoices that clearly show labor, project descriptions, quantities, and totals. This page helps you build a contractor-friendly template.</p>
        <p className="mt-3 text-slate-600">Use it for construction, repairs, maintenance, and installation work.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Who should use it</h2>
        <p className="mt-3 text-slate-600">Independent contractors, trade professionals, and project-based service providers.</p>
      </section>

      <ShareBar title="Invoice Template for Contractors" path="/invoice-template-for-contractors" description="Create a contractor invoice template online and export it as PDF, Excel, or Word for project-based billing." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-for-contractors" />
      <SiteFooter />
    </main>
  );
}
