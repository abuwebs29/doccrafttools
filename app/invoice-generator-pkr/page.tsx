import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Generator PKR",
  description: "Create invoices in PKR online and export them as PDF, Excel, or Word for freelance and business billing.",
  alternates: { canonical: "/invoice-generator-pkr" },
  openGraph: {
    title: "Free Invoice Generator PKR",
    description: "Create invoices in PKR online and export them as PDF, Excel, or Word for freelance and business billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator PKR",
    description: "Create invoices in PKR online and export them as PDF, Excel, or Word for freelance and business billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Generator PKR</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create invoices in PKR online and export them as PDF, Excel, or Word for freelance and business billing.</p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="PKR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Invoice generator for PKR</h2>
        <p className="mt-3 text-slate-600">This page helps freelancers and businesses create invoices in Pakistani Rupees without relying on static templates or manual calculations.</p>
        <p className="mt-3 text-slate-600">Use it for client billing, freelance work, or project-based invoicing in PKR.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why use it</h2>
        <p className="mt-3 text-slate-600">It saves time, improves document quality, and supports multiple export formats.</p>
      </section>

      <ShareBar title="Free Invoice Generator PKR" path="/invoice-generator-pkr" description="Create invoices in PKR online and export them as PDF, Excel, or Word for freelance and business billing." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-generator-pkr" />
      <SiteFooter />
    </main>
  );
}
