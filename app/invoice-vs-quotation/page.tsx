import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";
import PageFaq from "@/components/PageFaq";

export const metadata = {
  title: "Invoice vs Quotation",
  description: "Understand the difference between an invoice and a quotation, when to use each document, and how they fit into one workflow.",
  alternates: { canonical: "/invoice-vs-quotation" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Invoice vs Quotation</h1>
      <p className="mt-2 max-w-3xl text-slate-600">A quotation is sent before work starts to define scope and price. An invoice is sent after approval or delivery to request payment.</p>
      <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-900">
            <tr>
              <th className="px-4 py-3 font-semibold">Invoice</th>
              <th className="px-4 py-3 font-semibold">Quotation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td className="px-4 py-3">Requests payment</td><td className="px-4 py-3">Offers pricing before work begins</td></tr>
            <tr className="border-t"><td className="px-4 py-3">Includes due date and payment details</td><td className="px-4 py-3">Includes validity period and scope</td></tr>
            <tr className="border-t"><td className="px-4 py-3">Issued after approval or delivery</td><td className="px-4 py-3">Issued before approval</td></tr>
          </tbody>
        </table>
      </section>
      <PageFaq items={[{q:"Can one quotation become an invoice?",a:"Yes. Many businesses convert an approved quotation into an invoice with the same items and pricing."},{q:"Which comes first?",a:"The quotation usually comes first, followed by the invoice after approval or completion."}]} />
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
