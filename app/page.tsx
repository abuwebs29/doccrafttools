import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PopularTemplates from "@/components/PopularTemplates";
import RecentlyUsed from "@/components/RecentlyUsed";
import DownloadTemplates from "@/components/DownloadTemplates";
import RelatedTools from "@/components/RelatedTools";
import PageFaq from "@/components/PageFaq";

export const metadata = {
  alternates: { canonical: "/" },
  title: "Free Invoice Generator, Receipt Generator & Business Document Templates | DocCraft Tools",
  description: "Create invoices, receipts, quotations, delivery notes, and rent receipts online. Free business document tools with templates, guides, and printable exports.",
};

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a href={href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
      <div className="text-lg font-extrabold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
      <div className="mt-4 text-sm font-semibold text-slate-900">Open →</div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <SiteNav />
      <header className="mt-6 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm">
        <h1 className="text-4xl font-extrabold tracking-tight">Free invoice, receipt, quotation, and business document tools</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Create clean business documents online without signing up. Use free generators, practical templates, format guides, comparisons, and samples built for freelancers, consultants, landlords, and small businesses.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/invoice-generator">Open invoice generator</a>
          <a className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50" href="/pdf-templates">Browse all templates</a>
        </div>
      </header>
      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Invoice Generator" desc="Create professional invoices with tax, line items, and payment terms." href="/invoice-generator" />
        <Card title="Receipt Generator" desc="Generate proof-of-payment receipts in seconds." href="/receipt-generator" />
        <Card title="Quotation Generator" desc="Send fast estimates and quotations with a clean layout." href="/quotation-generator" />
        <Card title="Delivery Note Generator" desc="Track shipped or delivered goods with item references." href="/delivery-note-generator" />
        <Card title="Rent Receipt Generator" desc="Create monthly or one-off rent receipts online." href="/rent-receipt-generator" />
        <Card title="Business Document Guides" desc="Explore templates, comparisons, samples, and format guides." href="/guides" />
      </section>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-lg font-semibold">Built for intent</h2><p className="mt-2 text-sm leading-6 text-slate-600">Core tool pages handle high-intent searches while guides and format pages capture research traffic.</p></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-lg font-semibold">Designed for clarity</h2><p className="mt-2 text-sm leading-6 text-slate-600">Each page helps users understand what to include, when to use a document, and which tool solves the next step.</p></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-lg font-semibold">Ready to scale</h2><p className="mt-2 text-sm leading-6 text-slate-600">Templates, use-case pages, comparisons, and country guides strengthen internal linking and topical authority.</p></div>
      </section>
      <DownloadTemplates />
      <PopularTemplates className="mt-10" />
      <RecentlyUsed className="mt-10" />
      <RelatedTools title="Popular tools, templates, and guides" />
      <PageFaq items={[
        { q: "Is DocCraft Tools free to use?", a: "Yes. The core generators and content pages are built to let users create documents without signing up first." },
        { q: "Who are these tools for?", a: "Freelancers, consultants, agencies, landlords, and small businesses can all use the templates and generators." },
        { q: "What kind of pages are available?", a: "The site includes generators, templates, samples, format guides, comparisons, and how-to pages for common business documents." },
      ]} />
      <SiteFooter />
    </main>
  );
}
