import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Business Documents Generator",
  description: "Generate business documents as PDFs: invoices, receipts, quotations, delivery notes and more.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Business Documents Generator</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Create professional business documents as printable PDFs — fast, clean, and free.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Start with the most used documents</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li><a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice Generator</a></li>
          <li><a className="font-semibold text-slate-900 hover:underline" href="/quotation-generator">Quotation / Estimate Generator</a></li>
          <li><a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt Generator</a></li>
          <li><a className="font-semibold text-slate-900 hover:underline" href="/delivery-note-generator">Delivery Note Generator</a></li>
          <li><a className="font-semibold text-slate-900 hover:underline" href="/rent-receipt-generator">Rent Receipt Generator</a></li>
        </ul>
      </div>

      <SiteFooter />
    </main>
  );
}
