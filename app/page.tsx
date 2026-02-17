import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RecentlyUsed from "@/components/RecentlyUsed";
import PopularTemplates from "@/components/PopularTemplates";

export const metadata = {
  title: "DocCraft Tools — Free PDF Templates Generator",
  description: "Generate invoices, receipts, quotations and more as clean printable PDFs — no login.",
};

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a href={href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
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

      <header className="mt-6">
        <h1 className="text-4xl font-extrabold tracking-tight">Free PDF Templates — Generated Instantly</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Create professional documents as printable PDFs: invoices, receipts, quotations, delivery notes and rent receipts.
          No login. No storage. Works in your browser.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/pdf-templates">
            Browse All Templates →
          </a>
          <a className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50" href="/how-to-make-an-invoice">
            Learn: How to make an invoice →
          </a>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Card title="Invoice Generator" desc="Items, tax, notes and logo — instant PDF." href="/invoice-generator" />
        <Card title="Receipt Generator" desc="Printable payment receipt PDF in seconds." href="/receipt-generator" />
        <Card title="Quotation / Estimate Generator" desc="Send a professional quote PDF fast." href="/quotation-generator" />
        <Card title="Delivery Note Generator" desc="Delivery proof with item list and signatures." href="/delivery-note-generator" />
        <Card title="Rent Receipt Generator" desc="Tenant/landlord rent receipt with period and amount." href="/rent-receipt-generator" />
        <Card title="Business Documents Hub" desc="Browse all business document generators and guides." href="/business-documents" />
      </section>

      <PopularTemplates className="mt-10" />
      <RecentlyUsed className="mt-10" />

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Popular guides</h2>
        <div className="mt-4 grid gap-2 text-sm">
          <a className="font-semibold text-slate-900 hover:underline" href="/how-to-make-an-invoice">How to Make an Invoice →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/invoice-format">Invoice Format (Examples) →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/receipt-template-pdf">Receipt Template PDF →</a>
          <a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-template">Rent Receipt Template →</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
