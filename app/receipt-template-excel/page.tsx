import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Receipt Template Excel (XLS Export)",
  description: "Create a receipt template and export it to Excel. Ideal for spreadsheet-based payment records and bookkeeping.",
  alternates: { canonical: "/receipt-template-excel" },
  openGraph: {
    title: "Free Receipt Template Excel (XLS Export)",
    description: "Create a receipt template and export it to Excel. Ideal for spreadsheet-based payment records and bookkeeping.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Receipt Template Excel (XLS Export)",
    description: "Create a receipt template and export it to Excel. Ideal for spreadsheet-based payment records and bookkeeping.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Receipt Template Excel (XLS Export)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a receipt template and export it to Excel. Ideal for spreadsheet-based payment records and bookkeeping.</p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why use a receipt template in Excel?</h2>
        <p className="mt-3 text-slate-600">Excel receipt templates work well for payment records, spreadsheet-based accounting, and business workflows that need tabular data.</p>
        <p className="mt-3 text-slate-600">This page helps you create a clean receipt and export it in a spreadsheet-friendly format.</p>
      </section>

      <ShareBar title="Free Receipt Template Excel (XLS Export)" path="/receipt-template-excel" description="Create a receipt template and export it to Excel. Ideal for spreadsheet-based payment records and bookkeeping." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <InternalLinks currentPath="/receipt-template-excel" />
      <SiteFooter />
    </main>
  );
}
