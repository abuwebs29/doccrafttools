import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  title: "Freelance Invoice Template (Professional PDF)",
  description: "Free freelance invoice template with professional layout and payment terms.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Freelance Invoice Template (Professional PDF)</h1>
        <p className="mt-4 text-slate-600">Free freelance invoice template with professional layout and payment terms.</p>
        <p className='mt-6 text-slate-600'>Freelancers should include service description, hourly rate, subtotal, and payment terms.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Freelance Invoice Template (Professional PDF)" path="/freelance-invoice-template" description="Free freelance invoice template with professional layout and payment terms." />
      </article>
      <SiteFooter />
    </main>
  );
}
