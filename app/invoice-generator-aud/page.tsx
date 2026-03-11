import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator AUD",
  description: "Create invoices in AUD online and export them as PDF, Excel, or Word. Ideal for Australian business billing.",
  alternates: { canonical: "/invoice-generator-aud" },
  openGraph: {
    title: "Free Invoice Generator AUD",
    description: "Create invoices in AUD online and export them as PDF, Excel, or Word. Ideal for Australian business billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator AUD",
    description: "Create invoices in AUD online and export them as PDF, Excel, or Word. Ideal for Australian business billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator AUD</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create invoices in AUD online and export them as PDF, Excel, or Word. Ideal for Australian business billing.</p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="AUD" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice generator for AUD</h2>
        <p className="mt-3 text-slate-600">This page helps businesses and freelancers create invoices in Australian Dollars with a clean professional format.</p>
        <p className="mt-3 text-slate-600">Use it when you need quick invoicing for clients, projects, or service-based billing in AUD.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Best for</h2>
        <p className="mt-3 text-slate-600">Useful for Australian freelancers, contractors, agencies, and small businesses.</p>
      </section>

      <ShareBar title="Free Invoice Generator AUD" path="/invoice-generator-aud" description="Create invoices in AUD online and export them as PDF, Excel, or Word. Ideal for Australian business billing." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-generator-aud" />
      <SiteFooter />
    </main>
  );
}
