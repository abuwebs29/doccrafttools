import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Template Excel (XLS Export)",
  description: "Create a free invoice template and export it to Excel. Ideal for spreadsheet workflows, bookkeeping, and small business invoicing.",
  alternates: { canonical: "/invoice-template-excel" },
  openGraph: {
    title: "Free Invoice Template Excel (XLS Export)",
    description: "Create a free invoice template and export it to Excel. Ideal for spreadsheet workflows, bookkeeping, and small business invoicing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Template Excel (XLS Export)",
    description: "Create a free invoice template and export it to Excel. Ideal for spreadsheet workflows, bookkeeping, and small business invoicing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template Excel (XLS Export)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a free invoice template and export it to Excel. Ideal for spreadsheet workflows, bookkeeping, and small business invoicing.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why use an invoice template in Excel?</h2>
        <p className="mt-3 text-slate-600">Excel invoice templates are useful when you want spreadsheet-friendly exports for accounting, bookkeeping, or editing invoice data in rows and columns.</p>
        <p className="mt-3 text-slate-600">This page helps you create an invoice and export it in an Excel-compatible format while still keeping a clean PDF option available.</p>
      </section>

      <ShareBar title="Free Invoice Template Excel (XLS Export)" path="/invoice-template-excel" description="Create a free invoice template and export it to Excel. Ideal for spreadsheet workflows, bookkeeping, and small business invoicing." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-excel" />
      <SiteFooter />
    </main>
  );
}
