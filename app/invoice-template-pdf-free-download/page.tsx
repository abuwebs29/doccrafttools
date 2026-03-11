import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Invoice Template PDF Free Download",
  description: "Create a free invoice template and download it as PDF. Fast, printable, and suitable for freelancers and businesses.",
  alternates: { canonical: "/invoice-template-pdf-free-download" },
  openGraph: {
    title: "Invoice Template PDF Free Download",
    description: "Create a free invoice template and download it as PDF. Fast, printable, and suitable for freelancers and businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Template PDF Free Download",
    description: "Create a free invoice template and download it as PDF. Fast, printable, and suitable for freelancers and businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template PDF Free Download</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a free invoice template and download it as PDF. Fast, printable, and suitable for freelancers and businesses.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Download an invoice template as PDF</h2>
        <p className="mt-3 text-slate-600">PDF invoices are useful because they look consistent on every device and are easy to send to clients. This page helps you create a printable invoice template quickly.</p>
        <p className="mt-3 text-slate-600">Use it when you want a professional invoice without editing complicated spreadsheet or document files first.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Who should use it</h2>
        <p className="mt-3 text-slate-600">Ideal for freelancers, agencies, contractors, and small businesses that need clean invoice PDFs.</p>
      </section>

      <ShareBar title="Invoice Template PDF Free Download" path="/invoice-template-pdf-free-download" description="Create a free invoice template and download it as PDF. Fast, printable, and suitable for freelancers and businesses." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-pdf-free-download" />
      <SiteFooter />
    </main>
  );
}
