import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Quotation Sample",
  description: "Review a quotation sample with scope, pricing, validity date, terms, and approval-ready structure.",
  alternates: { canonical: "/quotation-sample" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Quotation Sample</h1>
      <p className="mt-2 max-w-3xl text-slate-600">A quotation sample helps you present pricing clearly before work starts. It should include validity dates, deliverables, optional tax, and terms.</p>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
