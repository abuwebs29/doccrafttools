import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Template (PDF, Excel & Word)",
  description: "Create a free invoice template online and export it as PDF, Excel, or Word. Fast, clean, and easy for freelancers and businesses.",
  alternates: { canonical: "/invoice-template" },
  openGraph: {
    title: "Free Invoice Template (PDF, Excel & Word)",
    description: "Create a free invoice template online and export it as PDF, Excel, or Word. Fast, clean, and easy for freelancers and businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Template (PDF, Excel & Word)",
    description: "Create a free invoice template online and export it as PDF, Excel, or Word. Fast, clean, and easy for freelancers and businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template (PDF, Excel & Word)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a free invoice template online and export it as PDF, Excel, or Word. Fast, clean, and easy for freelancers and businesses.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What is an invoice template?</h2>
        <p className="mt-3 text-slate-600">An invoice template gives you a reusable structure for billing clients. It usually includes your business details, client details, line items, tax, subtotal, and total.</p>
        <p className="mt-3 text-slate-600">Use this page if you want a quick invoice layout that you can customize and export in multiple formats for different workflows.</p>
      </section>

      <ShareBar title="Free Invoice Template (PDF, Excel & Word)" path="/invoice-template" description="Create a free invoice template online and export it as PDF, Excel, or Word. Fast, clean, and easy for freelancers and businesses." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template" />
      <SiteFooter />
    

// PHASE10_SEO_BLOCK
<section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h2 className="text-xl font-semibold">Why use this template?</h2>
<p className="mt-3 text-slate-600">
A professional document template helps freelancers and businesses create clear financial records.
DocCraft Tools lets you generate clean PDFs instantly, customize line items, add taxes,
and export invoices or receipts quickly without complex accounting software.
</p>
</section>

</main>
  );
}
