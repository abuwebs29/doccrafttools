import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Receipt Template Google Docs",
  description: "Create a free receipt template online with a document-style layout. Export as PDF, Excel, or Word.",
  alternates: { canonical: "/receipt-template-google-docs" },
  openGraph: {
    title: "Free Receipt Template Google Docs",
    description: "Create a free receipt template online with a document-style layout. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Receipt Template Google Docs",
    description: "Create a free receipt template online with a document-style layout. Export as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Receipt Template Google Docs</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a free receipt template online with a document-style layout. Export as PDF, Excel, or Word.</p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why use a receipt template for Google Docs?</h2>
        <p className="mt-3 text-slate-600">Many business owners prefer a document-style receipt layout because it feels simple, familiar, and easy to share. This page gives you a fast way to create that style of receipt.</p>
        <p className="mt-3 text-slate-600">Use it when you need proof of payment for customers, clients, or internal records.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Common use cases</h2>
        <p className="mt-3 text-slate-600">Useful for rent receipts, service receipts, payment confirmations, and simple office workflows.</p>
      </section>

      <ShareBar title="Free Receipt Template Google Docs" path="/receipt-template-google-docs" description="Create a free receipt template online with a document-style layout. Export as PDF, Excel, or Word." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <InternalLinks currentPath="/receipt-template-google-docs" />
      <SiteFooter />
    </main>
  );
}
