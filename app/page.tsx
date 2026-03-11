import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RecentlyUsed from "@/components/RecentlyUsed";
import PopularTemplates from "@/components/PopularTemplates";

export const metadata = {
  alternates: { canonical: "/" },
  title: "Free Invoice Generator, Receipt Generator & PDF Templates | DocCraft Tools",
  description: "Create professional invoices, receipts, quotations and delivery notes instantly. Free PDF generator with templates for freelancers and businesses.",
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
        <h1 className="text-4xl font-extrabold tracking-tight">Free Invoice Generator, Receipt Generator & Business Document Templates</h1>
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

<section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Popular Generators by Currency</h2>
  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
    <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-usd">Invoice Generator (USD) →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-inr">Invoice Generator (INR) →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator-uk">Invoice Generator (UK / GBP) →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator-usd">Receipt Generator (USD) →</a>
  </div>
</section>


<section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Export Invoice in Multiple Formats</h2>
  <p className="mt-2 text-slate-600">Create invoices and export them as PDF, Excel, or Word.</p>
  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
    <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice Generator →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/invoice-template-excel">Export Invoice to Excel →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/invoice-template-word">Export Invoice to Word →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/receipt-template">Receipt Template →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/commercial-invoice-template">Commercial Invoice Template →</a>
    <a className="font-semibold text-slate-900 hover:underline" href="/tax-invoice-template">Tax Invoice Template →</a>
  </div>
</section>

      <PopularTemplates className="mt-10" />
      <RecentlyUsed className="mt-10" />

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Popular guides</h2>
  <p className="mt-2 text-sm text-slate-600">
    Quick explanations and copy‑paste examples — linked to free generators.
  </p>
  <div className="mt-5 grid gap-6 md:grid-cols-3 text-sm">
    <div>
      <div className="font-bold text-slate-900">Invoices</div>
      <div className="mt-3 grid gap-2">
        <a className="font-semibold text-slate-900 hover:underline" href="/invoice-format">Invoice format →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/invoice-number-format">Invoice number format →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/invoice-payment-terms-explained">Payment terms wording →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/what-is-a-tax-invoice">What is a tax invoice? →</a>
      </div>
    </div>
    <div>
      <div className="font-bold text-slate-900">Receipts</div>
      <div className="mt-3 grid gap-2">
        <a className="font-semibold text-slate-900 hover:underline" href="/payment-receipt-format">Payment receipt format →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/receipt-template-pdf">Receipt template PDF →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-format">Rent receipt format →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/difference-between-invoice-and-receipt">Invoice vs receipt →</a>
      </div>
    </div>
    <div>
      <div className="font-bold text-slate-900">Business docs</div>
      <div className="mt-3 grid gap-2">
        <a className="font-semibold text-slate-900 hover:underline" href="/estimate-vs-quotation">Estimate vs quotation →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/delivery-note-format">Delivery note format →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/delivery-note-vs-invoice">Delivery note vs invoice →</a>
        <a className="font-semibold text-slate-900 hover:underline" href="/guides">See all guides →</a>
      </div>
    </div>
  </div>
</section>

      <SiteFooter />
    </main>
  );
}
