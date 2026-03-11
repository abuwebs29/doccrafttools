import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Template UK",
  description: "Create a free invoice template for UK businesses and freelancers. Export as PDF, Excel, or Word.",
  alternates: { canonical: "/invoice-template-uk" },
  openGraph: {
    title: "Free Invoice Template UK",
    description: "Create a free invoice template for UK businesses and freelancers. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Template UK",
    description: "Create a free invoice template for UK businesses and freelancers. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template UK</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a free invoice template for UK businesses and freelancers. Export as PDF, Excel, or Word.</p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="GBP" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice template for UK businesses</h2>
        <p className="mt-3 text-slate-600">This page is tailored for UK-style invoicing where GBP formatting and professional business presentation matter. It works well for consultants, agencies, and contractors.</p>
        <p className="mt-3 text-slate-600">Use it when you want a clean invoice template for British clients and projects.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">When to use it</h2>
        <p className="mt-3 text-slate-600">Useful for service invoices, freelance billing, agency retainers, and standard small-business invoicing in the UK.</p>
      </section>

      <ShareBar title="Free Invoice Template UK" path="/invoice-template-uk" description="Create a free invoice template for UK businesses and freelancers. Export as PDF, Excel, or Word." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-uk" />
      <SiteFooter />
    </main>
  );
}
