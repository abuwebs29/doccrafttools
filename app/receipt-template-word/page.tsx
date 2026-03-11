import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Receipt Template Word (DOC Export)",
  description: "Create a receipt template and export it to Word. Useful for editable receipt documents and business administration.",
  alternates: { canonical: "/receipt-template-word" },
  openGraph: {
    title: "Free Receipt Template Word (DOC Export)",
    description: "Create a receipt template and export it to Word. Useful for editable receipt documents and business administration.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Receipt Template Word (DOC Export)",
    description: "Create a receipt template and export it to Word. Useful for editable receipt documents and business administration.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Receipt Template Word (DOC Export)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a receipt template and export it to Word. Useful for editable receipt documents and business administration.</p>
      </header>

      <TemplateEngine template={templates.receipt} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why use a receipt template in Word?</h2>
        <p className="mt-3 text-slate-600">Word receipt templates are useful when you need an editable document format for payment confirmations, business paperwork, or office workflows.</p>
        <p className="mt-3 text-slate-600">Use this page if you want a document-style receipt that can be exported and edited easily.</p>
      </section>

      <ShareBar title="Free Receipt Template Word (DOC Export)" path="/receipt-template-word" description="Create a receipt template and export it to Word. Useful for editable receipt documents and business administration." />
      <EmbedCodeBlock toolName="Receipt Generator" embedPath="/embed/receipt" />
      <ToolSeoBlock toolId="receipt" />
      <InternalLinks currentPath="/receipt-template-word" />
      <SiteFooter />
    </main>
  );
}
