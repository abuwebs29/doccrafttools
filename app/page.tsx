import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RecentlyUsed from "@/components/RecentlyUsed";
import PopularTemplates from "@/components/PopularTemplates";
import InternalLinks from "@/components/InternalLinks";

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
        <h1 className="text-4xl font-extrabold tracking-tight">Free PDF Templates — Generated Instantly\1
        <p className="mt-4 text-slate-600">
          DocCraftTools helps you create clean, professional business documents in minutes — invoices, receipts, quotations, rent receipts, and delivery notes —
          and export them as PDF.
        </p>
        <p className="mt-3 text-slate-600">
          Start with the <a className="underline underline-offset-4" href="/invoice-generator">invoice generator</a> or pick a ready-made{" "}
          <a className="underline underline-offset-4" href="/pdf-templates">PDF template</a>. Need help with formatting and terms? Browse our{" "}
          <a className="underline underline-offset-4" href="/guides">step-by-step guides</a>.
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
          <InternalLinks currentPath="/" />
    </main>
  );
}