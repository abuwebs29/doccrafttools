import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Receipt for Business",
  description: "Create a business receipt format for products, services, deposits, or in-person payments.",
  alternates: { canonical: "/receipt-for-business" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Receipt for Business</h1>
      <p className="mt-2 max-w-3xl text-slate-600">Businesses use receipts to confirm completed transactions, reduce disputes, and keep cleaner records for accounting and customer support.</p>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-slate-700">Use one clean receipt layout for online orders, store sales, deposits, and services. The core fields stay the same even if the transaction type changes.</p>
      </section>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
