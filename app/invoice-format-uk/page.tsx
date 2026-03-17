import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Invoice Format UK",
  description: "Use a practical UK invoice format with supplier details, invoice number, issue date, itemized lines, and tax-ready totals.",
  alternates: { canonical: "/invoice-format-uk" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Invoice Format UK</h1>
      <p className="mt-2 max-w-3xl text-slate-600">A UK invoice format should make it easy for clients to review service descriptions, VAT treatment where relevant, and payment due dates.</p>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
