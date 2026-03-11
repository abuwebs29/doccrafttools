import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Contractor Invoice Template",
  description: "Create a contractor invoice template online. Export as PDF, Excel, or Word for project-based work and services.",
  alternates: { canonical: "/contractor-invoice-template" },
  openGraph: {
    title: "Contractor Invoice Template",
    description: "Create a contractor invoice template online. Export as PDF, Excel, or Word for project-based work and services.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Invoice Template",
    description: "Create a contractor invoice template online. Export as PDF, Excel, or Word for project-based work and services.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Contractor Invoice Template</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a contractor invoice template online. Export as PDF, Excel, or Word for project-based work and services.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice template for contractors</h2>
        <p className="mt-3 text-slate-600">Contractors need invoices that clearly show labor, materials, quantities, and project details. This page helps you generate a clean contractor invoice quickly.</p>
        <p className="mt-3 text-slate-600">Use it for construction, trade work, repairs, installation, and project-based jobs.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Useful for</h2>
        <p className="mt-3 text-slate-600">Independent contractors, trade professionals, and project-based service providers who need clear invoices.</p>
      </section>

      <ShareBar title="Contractor Invoice Template" path="/contractor-invoice-template" description="Create a contractor invoice template online. Export as PDF, Excel, or Word for project-based work and services." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/contractor-invoice-template" />
      <SiteFooter />
    </main>
  );
}
