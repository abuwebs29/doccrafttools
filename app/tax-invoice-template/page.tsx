import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Tax Invoice Template",
  description: "Create a tax invoice template online and export it as PDF, Excel, or Word. Ideal for VAT, GST, and business billing.",
  alternates: { canonical: "/tax-invoice-template" },
  openGraph: {
    title: "Free Tax Invoice Template",
    description: "Create a tax invoice template online and export it as PDF, Excel, or Word. Ideal for VAT, GST, and business billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tax Invoice Template",
    description: "Create a tax invoice template online and export it as PDF, Excel, or Word. Ideal for VAT, GST, and business billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Tax Invoice Template</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a tax invoice template online and export it as PDF, Excel, or Word. Ideal for VAT, GST, and business billing.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What is a tax invoice template?</h2>
        <p className="mt-3 text-slate-600">A tax invoice template includes the standard billing details plus tax information such as VAT or GST percentage, tax amount, and total due.</p>
        <p className="mt-3 text-slate-600">Use this page when your invoice needs to reflect tax calculations for clients, business records, or compliance workflows.</p>
      </section>

      <ShareBar title="Free Tax Invoice Template" path="/tax-invoice-template" description="Create a tax invoice template online and export it as PDF, Excel, or Word. Ideal for VAT, GST, and business billing." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/tax-invoice-template" />
      <SiteFooter />
    </main>
  );
}
