import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Commercial Invoice Template",
  description: "Create a commercial invoice template online for international shipments and business documentation. Export as PDF, Excel, or Word.",
  alternates: { canonical: "/commercial-invoice-template" },
  openGraph: {
    title: "Free Commercial Invoice Template",
    description: "Create a commercial invoice template online for international shipments and business documentation. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Commercial Invoice Template",
    description: "Create a commercial invoice template online for international shipments and business documentation. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Commercial Invoice Template</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a commercial invoice template online for international shipments and business documentation. Export as PDF, Excel, or Word.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What is a commercial invoice template?</h2>
        <p className="mt-3 text-slate-600">A commercial invoice template is often used for international trade and shipping documentation. It includes seller details, buyer details, goods description, quantity, and value.</p>
        <p className="mt-3 text-slate-600">Use this page when you need a clean commercial invoice layout for exports, customs paperwork, or shipment records.</p>
      </section>

      <ShareBar title="Free Commercial Invoice Template" path="/commercial-invoice-template" description="Create a commercial invoice template online for international shipments and business documentation. Export as PDF, Excel, or Word." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/commercial-invoice-template" />
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
