import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Delivery Note Sample",
  description: "Use a delivery note sample to understand item lists, dispatch information, signatures, and received-by details.",
  alternates: { canonical: "/delivery-note-sample" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Delivery Note Sample</h1>
      <p className="mt-2 max-w-3xl text-slate-600">A delivery note sample shows how to document dispatched goods, quantities, and customer acknowledgement without turning the document into an invoice.</p>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
