import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Invoice Format UAE",
  description: "Review a practical invoice format for UAE businesses, including VAT-aware structure and client-ready fields.",
  alternates: { canonical: "/invoice-format-uae" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Invoice Format UAE</h1>
      <p className="mt-2 max-w-3xl text-slate-600">UAE invoices usually need clean seller and buyer details, invoice number, issue date, itemized charges, VAT fields where applicable, and payment instructions.</p>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
