import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Invoice for Consultants",
  description: "Use a consultant invoice format that clearly explains advisory services, retainers, and milestones.",
  alternates: { canonical: "/invoice-for-consultants" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Invoice for Consultants</h1>
      <p className="mt-2 max-w-3xl text-slate-600">Consultant invoices should explain deliverables, workshop dates, retainers, and professional fees in a way finance teams can approve quickly.</p>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Recommended sections</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">Include scope summary, period covered, line-item billing, taxes, and payment instructions. If you bill monthly, use the same numbering system every month.</p>
      </section>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
