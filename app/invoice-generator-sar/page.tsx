import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator SAR",
  description: "Create invoices in SAR online and export them as PDF, Excel, or Word. Great for Saudi billing workflows.",
  alternates: { canonical: "/invoice-generator-sar" },
  openGraph: {
    title: "Free Invoice Generator SAR",
    description: "Create invoices in SAR online and export them as PDF, Excel, or Word. Great for Saudi billing workflows.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator SAR",
    description: "Create invoices in SAR online and export them as PDF, Excel, or Word. Great for Saudi billing workflows.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator SAR</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create invoices in SAR online and export them as PDF, Excel, or Word. Great for Saudi billing workflows.</p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="SAR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice generator for SAR</h2>
        <p className="mt-3 text-slate-600">This page helps businesses create invoices in Saudi Riyal with a clean format that works for services, projects, and standard billing.</p>
        <p className="mt-3 text-slate-600">Use it when you need a fast invoice in SAR with simple export options.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Common use cases</h2>
        <p className="mt-3 text-slate-600">Useful for agencies, service businesses, freelancers, and small businesses operating in Saudi Arabia.</p>
      </section>

      <ShareBar title="Free Invoice Generator SAR" path="/invoice-generator-sar" description="Create invoices in SAR online and export them as PDF, Excel, or Word. Great for Saudi billing workflows." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-generator-sar" />
      <SiteFooter />
    </main>
  );
}
