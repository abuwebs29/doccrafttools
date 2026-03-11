import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  alternates: { canonical: "/pdf-templates" },
  title: "Free PDF Templates",
  description: "All DocCraft Tools PDF generators: invoice, receipt, quotation, delivery note, rent receipt.",
};

const tools = [
  { href: "/invoice-generator", title: "Invoice Generator", desc: "Professional invoices with items, tax and logo." },
  { href: "/receipt-generator", title: "Receipt Generator", desc: "Printable payment receipts in seconds." },
  { href: "/quotation-generator", title: "Quotation / Estimate Generator", desc: "Send quotes with items, tax and validity date." },
  { href: "/delivery-note-generator", title: "Delivery Note Generator", desc: "Delivery proof with sender/receiver and item list." },
  { href: "/rent-receipt-generator", title: "Rent Receipt Generator", desc: "Tenant/landlord rent receipts with period and amount." },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Free PDF Templates</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Generate clean, printable PDFs instantly. No login. No storage. Built for freelancers and small businesses.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {tools.map((t) => (
          <a key={t.href} href={t.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
            <div className="text-lg font-extrabold">{t.title}</div>
            <div className="mt-2 text-sm text-slate-600">{t.desc}</div>
            <div className="mt-4 text-sm font-semibold">Open →</div>
          </a>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Popular guides</h2>
        <div className="mt-4 grid gap-2 text-sm">
          <a className="font-semibold hover:underline" href="/how-to-make-an-invoice">How to Make an Invoice →</a>
          <a className="font-semibold hover:underline" href="/invoice-format">Invoice Format (Examples) →</a>
          <a className="font-semibold hover:underline" href="/receipt-template-pdf">Receipt Template PDF →</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
