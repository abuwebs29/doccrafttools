import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Template Download",
  description: "Create and download a free invoice template online. Export as PDF, Excel, or Word for freelance and business invoicing.",
  alternates: { canonical: "/invoice-template-free-download" },
  openGraph: {
    title: "Free Invoice Template Download",
    description: "Create and download a free invoice template online. Export as PDF, Excel, or Word for freelance and business invoicing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Template Download",
    description: "Create and download a free invoice template online. Export as PDF, Excel, or Word for freelance and business invoicing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template Download</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create and download a free invoice template online. Export as PDF, Excel, or Word for freelance and business invoicing.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Download a free invoice template</h2>
        <p className="mt-3 text-slate-600">This page is built for users who want a quick invoice template they can generate and export immediately. It combines the simplicity of a template with the speed of an online generator.</p>
        <p className="mt-3 text-slate-600">Use it to prepare professional invoices for clients, retainers, projects, or one-time services.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why it helps</h2>
        <p className="mt-3 text-slate-600">Instead of searching random downloads online, you can build an invoice in your browser and export it in the format you need.</p>
      </section>

      <ShareBar title="Free Invoice Template Download" path="/invoice-template-free-download" description="Create and download a free invoice template online. Export as PDF, Excel, or Word for freelance and business invoicing." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-free-download" />
      <SiteFooter />
    </main>
  );
}
