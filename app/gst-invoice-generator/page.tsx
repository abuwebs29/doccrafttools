import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";

export const metadata = {
  title: "Free GST Invoice Generator (India) — Create GST Invoice Online",
  description:
    "Create a GST invoice online for India and download a printable PDF. Add GST percentage, business details, and line items instantly.",
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
          A GST invoice is used in India to bill customers while showing the applicable GST percentage and tax amount.
          It usually includes supplier details, invoice number, invoice date, line items, subtotal, GST, and total amount.
        </p>
        <p className="mt-3 text-slate-600">
          Use this page if you need to create an invoice in INR with GST-style billing and export it as a clean PDF.
        </p>
      </section>

      <ShareBar title="Free GST Invoice Generator (India)" path="/gst-invoice-generator" />
      <EmbedCodeBlock toolName="invoice generator" embedPath="/embed/invoice" />
      <ToolSeoBlock toolId="invoice" />
      <SiteFooter />
    </main>
  );
}
