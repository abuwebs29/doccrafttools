import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Invoice Template for Freelancers",
  description: "Create a freelancer invoice template online and export it as PDF, Excel, or Word. Ideal for freelance billing.",
  alternates: { canonical: "/invoice-template-for-freelancers" },
  openGraph: {
    title: "Invoice Template for Freelancers",
    description: "Create a freelancer invoice template online and export it as PDF, Excel, or Word. Ideal for freelance billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Template for Freelancers",
    description: "Create a freelancer invoice template online and export it as PDF, Excel, or Word. Ideal for freelance billing.",
    images: ["https://doccrafttools.com/og-image.svg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template for Freelancers</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Create a freelancer invoice template online and export it as PDF, Excel, or Word. Ideal for freelance billing.</p>
      </header>

      <TemplateEngine template={templates.invoice} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Why freelancers need a good invoice template</h2>
        <p className="mt-3 text-slate-600">Freelancers need invoices that are simple, professional, and fast to send. This page helps you build a clean invoice template for freelance work.</p>
        <p className="mt-3 text-slate-600">Use it for design, development, writing, consulting, and project-based client work.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Main benefit</h2>
        <p className="mt-3 text-slate-600">It makes billing easier while helping you look more professional with clients.</p>
      </section>

      <ShareBar title="Invoice Template for Freelancers" path="/invoice-template-for-freelancers" description="Create a freelancer invoice template online and export it as PDF, Excel, or Word. Ideal for freelance billing." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <InternalLinks currentPath="/invoice-template-for-freelancers" />
      <SiteFooter />
    </main>
  );
}
