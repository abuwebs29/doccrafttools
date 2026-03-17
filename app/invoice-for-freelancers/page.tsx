import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";
import DownloadTemplates from "@/components/DownloadTemplates";

export const metadata = {
  title: "Invoice for Freelancers",
  description: "Create a freelancer invoice with the right fields, payment terms, and a clean layout clients can process quickly.",
  alternates: { canonical: "/invoice-for-freelancers" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Invoice for Freelancers</h1>
      <p className="mt-2 max-w-3xl text-slate-600">Freelancers need invoices that are clear, fast to create, and easy for clients to approve. Include project name, billing period, line items, and payment details.</p>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Freelancer invoice checklist</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Project or retainer name</li>
          <li>Billing period and due date</li>
          <li>Hours, deliverables, or milestone descriptions</li>
          <li>Preferred payment method and tax details</li>
        </ul>
      </section>
      <DownloadTemplates />
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
