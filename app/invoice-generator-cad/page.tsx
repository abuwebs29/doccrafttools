import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator CAD",
  description: "Create invoices in CAD online and export them as PDF, Excel, or Word. Useful for Canadian billing workflows.",
  alternates: { canonical: "/invoice-generator-cad" },
  openGraph: {
    title: "Free Invoice Generator CAD",
    description: "Create invoices in CAD online and export them as PDF, Excel, or Word. Useful for Canadian billing workflows.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator CAD",
    description: "Create invoices in CAD online and export them as PDF, Excel, or Word. Useful for Canadian billing workflows.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator CAD</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create invoices in CAD online and export them as PDF, Excel, or Word. Useful for Canadian billing workflows.</p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="CAD" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice generator for CAD</h2>
        <p className="mt-3 text-slate-600">This page helps you generate invoices in Canadian Dollars for freelancers, agencies, and businesses that invoice Canadian clients.</p>
        <p className="mt-3 text-slate-600">Use it when you want a clean CAD invoice format with fast export options.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Who should use it</h2>
        <p className="mt-3 text-slate-600">Useful for Canadian small businesses, consultants, agencies, and service providers.</p>
      </section>

      <ShareBar title="Free Invoice Generator CAD" path="/invoice-generator-cad" description="Create invoices in CAD online and export them as PDF, Excel, or Word. Useful for Canadian billing workflows." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-generator-cad" />
      <SiteFooter />
    </main>
  );
}
