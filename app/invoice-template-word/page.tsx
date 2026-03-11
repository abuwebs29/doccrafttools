import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free Invoice Template Word (DOC Export)",
  description: "Create a free invoice template and export it to Word. Perfect for editable document workflows and professional invoice customization.",
  alternates: { canonical: "/invoice-template-word" },
  openGraph: {
    title: "Free Invoice Template Word (DOC Export)",
    description: "Create a free invoice template and export it to Word. Perfect for editable document workflows and professional invoice customization.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Template Word (DOC Export)",
    description: "Create a free invoice template and export it to Word. Perfect for editable document workflows and professional invoice customization.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free Invoice Template Word (DOC Export)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a free invoice template and export it to Word. Perfect for editable document workflows and professional invoice customization.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why use an invoice template in Word?</h2>
        <p className="mt-3 text-slate-600">Word invoice templates are useful when you want a document-style invoice that can be edited, shared, or adjusted in a text-first workflow.</p>
        <p className="mt-3 text-slate-600">Use this page if you prefer Word-compatible exports while still keeping PDF and Excel options available.</p>
      </section>

      <ShareBar title="Free Invoice Template Word (DOC Export)" path="/invoice-template-word" description="Create a free invoice template and export it to Word. Perfect for editable document workflows and professional invoice customization." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-word" />
      <SiteFooter />
    </main>
  );
}
