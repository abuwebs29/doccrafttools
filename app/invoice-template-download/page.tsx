import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Invoice Template Download",
  description: "Create an invoice template online and download it in PDF, Excel, or Word. Fast and easy for small businesses.",
  alternates: { canonical: "/invoice-template-download" },
  openGraph: {
    title: "Invoice Template Download",
    description: "Create an invoice template online and download it in PDF, Excel, or Word. Fast and easy for small businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Template Download",
    description: "Create an invoice template online and download it in PDF, Excel, or Word. Fast and easy for small businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template Download</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create an invoice template online and download it in PDF, Excel, or Word. Fast and easy for small businesses.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Download an invoice template instantly</h2>
        <p className="mt-3 text-slate-600">This landing page targets users who want a downloadable invoice template without spending time editing static files. Build it online and export the format you need.</p>
        <p className="mt-3 text-slate-600">Use it when you need professional invoices quickly for clients, projects, or business billing.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Best formats</h2>
        <p className="mt-3 text-slate-600">You can use PDF for sending, Excel for bookkeeping, and Word for editable document workflows.</p>
      </section>

      <ShareBar title="Invoice Template Download" path="/invoice-template-download" description="Create an invoice template online and download it in PDF, Excel, or Word. Fast and easy for small businesses." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-download" />
      <SiteFooter />
    </main>
  );
}
