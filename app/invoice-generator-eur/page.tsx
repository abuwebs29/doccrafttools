import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator EUR",
  description: "Create invoices in EUR online and export them as PDF, Excel, or Word. Suitable for European clients and businesses.",
  alternates: { canonical: "/invoice-generator-eur" },
  openGraph: {
    title: "Free Invoice Generator EUR",
    description: "Create invoices in EUR online and export them as PDF, Excel, or Word. Suitable for European clients and businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator EUR",
    description: "Create invoices in EUR online and export them as PDF, Excel, or Word. Suitable for European clients and businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator EUR</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create invoices in EUR online and export them as PDF, Excel, or Word. Suitable for European clients and businesses.</p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="EUR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice generator for EUR</h2>
        <p className="mt-3 text-slate-600">This page is built for businesses and freelancers who invoice clients in euros. It provides a clean layout with fast export options.</p>
        <p className="mt-3 text-slate-600">Use it for cross-border client work, agency billing, and European service invoicing.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Who it helps</h2>
        <p className="mt-3 text-slate-600">Useful for freelancers, consultants, agencies, and EU-focused small businesses.</p>
      </section>

      <ShareBar title="Free Invoice Generator EUR" path="/invoice-generator-eur" description="Create invoices in EUR online and export them as PDF, Excel, or Word. Suitable for European clients and businesses." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-generator-eur" />
      <SiteFooter />
    </main>
  );
}
