import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Consulting Invoice Template",
  description: "Create a consulting invoice template online. Export as PDF, Excel, or Word for consulting services and retainers.",
  alternates: { canonical: "/consulting-invoice-template" },
  openGraph: {
    title: "Consulting Invoice Template",
    description: "Create a consulting invoice template online. Export as PDF, Excel, or Word for consulting services and retainers.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting Invoice Template",
    description: "Create a consulting invoice template online. Export as PDF, Excel, or Word for consulting services and retainers.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Consulting Invoice Template</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a consulting invoice template online. Export as PDF, Excel, or Word for consulting services and retainers.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Consulting invoice template for professional services</h2>
        <p className="mt-3 text-slate-600">Consultants often bill by project, milestone, or retainer. This page helps you create an invoice template that fits consulting workflows and client communication.</p>
        <p className="mt-3 text-slate-600">Use it for strategy, advisory, coaching, management consulting, and service-based work.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Recommended for</h2>
        <p className="mt-3 text-slate-600">Independent consultants, boutique firms, agencies, and service professionals who want polished client billing.</p>
      </section>

      <ShareBar title="Consulting Invoice Template" path="/consulting-invoice-template" description="Create a consulting invoice template online. Export as PDF, Excel, or Word for consulting services and retainers." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/consulting-invoice-template" />
      <SiteFooter />
    </main>
  );
}
