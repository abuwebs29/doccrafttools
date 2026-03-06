import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free GST Invoice Generator (India)",
  description:
    "Create a GST invoice online for India and download a printable PDF. Add tax percentage, line items, and business details instantly.",
  alternates: {
    canonical: "/gst-invoice-generator",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <RecentTracker title="Free GST Invoice Generator (India)" href="/gst-invoice-generator" type="Tool" />
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free GST Invoice Generator (India)</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create a GST invoice online for India and download a printable PDF in seconds.
        </p>
      </header>

      <TemplateEngine template={templates.invoice} initialCurrencyCode="INR" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What is a GST invoice?</h2>
        <p className="mt-3 text-slate-600">
          A GST invoice is commonly used in India to bill customers while showing the applicable tax percentage and total amount due.
        </p>
        <p className="mt-3 text-slate-600">
          Use this page when you want to create an invoice in INR and export it as a clean PDF for freelance work, services, or small business billing.
        </p>
      </section>

      <ShareBar title="Free GST Invoice Generator (India)" path="/gst-invoice-generator" description="Create a GST invoice online for India and download a printable PDF." />
      <EmbedCodeBlock toolName="Invoice Generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
