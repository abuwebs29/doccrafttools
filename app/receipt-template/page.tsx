import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Receipt Template (PDF, Excel & Word)",
  description: "Create a professional receipt template online and export it as PDF, Excel, or Word. Great for payments, deposits, and small businesses.",
  alternates: { canonical: "/receipt-template" },
  openGraph: {
    title: "Free Receipt Template (PDF, Excel & Word)",
    description: "Create a professional receipt template online and export it as PDF, Excel, or Word. Great for payments, deposits, and small businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Receipt Template (PDF, Excel & Word)",
    description: "Create a professional receipt template online and export it as PDF, Excel, or Word. Great for payments, deposits, and small businesses.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Receipt Template (PDF, Excel & Word)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a professional receipt template online and export it as PDF, Excel, or Word. Great for payments, deposits, and small businesses.</p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What is a receipt template?</h2>
        <p className="mt-3 text-slate-600">A receipt template helps you document payments clearly with payer details, amount, date, payment method, and purpose.</p>
        <p className="mt-3 text-slate-600">Use this page if you want a reusable receipt layout that can be exported in multiple formats.</p>
      </section>

      <ShareBar title="Free Receipt Template (PDF, Excel & Word)" path="/receipt-template" description="Create a professional receipt template online and export it as PDF, Excel, or Word. Great for payments, deposits, and small businesses." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <InternalLinks currentPath="/receipt-template" />
      <SiteFooter />
    </main>
  );
}
