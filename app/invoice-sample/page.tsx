import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Invoice Sample",
  description: "See what a professional invoice sample should include, from business details to totals and payment instructions.",
  alternates: { canonical: "/invoice-sample" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Invoice Sample</h1>
      <p className="mt-2 max-w-3xl text-slate-600">A strong invoice sample shows clear business details, client details, line items, totals, taxes, and a due date. Use the online generator to build the same structure instantly.</p>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
