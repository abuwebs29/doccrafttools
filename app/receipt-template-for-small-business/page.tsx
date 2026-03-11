import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Receipt Template for Small Business",
  description: "Create a small business receipt template online and export it as PDF, Excel, or Word.",
  alternates: { canonical: "/receipt-template-for-small-business" },
  openGraph: {
    title: "Receipt Template for Small Business",
    description: "Create a small business receipt template online and export it as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Receipt Template for Small Business",
    description: "Create a small business receipt template online and export it as PDF, Excel, or Word.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Receipt Template for Small Business</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a small business receipt template online and export it as PDF, Excel, or Word.</p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Receipt templates for small businesses</h2>
        <p className="mt-3 text-slate-600">Small businesses need clear records for payments, deposits, and customer transactions. This page helps you create a simple receipt template quickly.</p>
        <p className="mt-3 text-slate-600">Use it when you want a clean receipt format for customer-facing or internal use.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Helpful for</h2>
        <p className="mt-3 text-slate-600">Shops, service businesses, consultants, and local businesses that need payment documentation.</p>
      </section>

      <ShareBar title="Receipt Template for Small Business" path="/receipt-template-for-small-business" description="Create a small business receipt template online and export it as PDF, Excel, or Word." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <InternalLinks currentPath="/receipt-template-for-small-business" />
      <SiteFooter />
    </main>
  );
}
