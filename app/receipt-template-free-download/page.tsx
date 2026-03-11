import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Receipt Template Download",
  description: "Create and download a free receipt template online. Export as PDF, Excel, or Word for payments and business records.",
  alternates: { canonical: "/receipt-template-free-download" },
  openGraph: {
    title: "Free Receipt Template Download",
    description: "Create and download a free receipt template online. Export as PDF, Excel, or Word for payments and business records.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Receipt Template Download",
    description: "Create and download a free receipt template online. Export as PDF, Excel, or Word for payments and business records.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Receipt Template Download</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create and download a free receipt template online. Export as PDF, Excel, or Word for payments and business records.</p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Download a free receipt template</h2>
        <p className="mt-3 text-slate-600">This page is for users who want a quick receipt layout they can generate and export immediately without searching for static downloads.</p>
        <p className="mt-3 text-slate-600">Use it when you need a fast, printable proof-of-payment document for customers or records.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why it is useful</h2>
        <p className="mt-3 text-slate-600">It helps small businesses and freelancers create professional receipts without spreadsheet or word-processing setup.</p>
      </section>

      <ShareBar title="Free Receipt Template Download" path="/receipt-template-free-download" description="Create and download a free receipt template online. Export as PDF, Excel, or Word for payments and business records." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <InternalLinks currentPath="/receipt-template-free-download" />
      <SiteFooter />
    </main>
  );
}
