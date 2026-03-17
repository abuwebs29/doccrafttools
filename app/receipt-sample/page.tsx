import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Receipt Sample",
  description: "See the fields and structure of a printable receipt sample for payments, rent, and business transactions.",
  alternates: { canonical: "/receipt-sample" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Receipt Sample</h1>
      <p className="mt-2 max-w-3xl text-slate-600">A receipt sample should show payer name, amount paid, payment method, date, and purpose of payment. It is useful for proof of payment and bookkeeping.</p>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
