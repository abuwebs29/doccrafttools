import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RelatedTools from "@/components/RelatedTools";

export const metadata = {
  title: "Receipt for Rent",
  description: "Make a rent receipt with tenant name, property details, rental period, payment date, and amount received.",
  alternates: { canonical: "/receipt-for-rent" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <h1 className="text-3xl font-extrabold tracking-tight">Receipt for Rent</h1>
      <p className="mt-2 max-w-3xl text-slate-600">A rent receipt confirms that the landlord or property manager received a rental payment for a specific period.</p>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Include these fields</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Tenant and landlord name</li>
          <li>Property address</li>
          <li>Rental period covered</li>
          <li>Amount paid and payment method</li>
        </ul>
      </section>
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
