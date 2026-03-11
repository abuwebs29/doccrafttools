import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  alternates: { canonical: "/simple-invoice-template" },
  title: "Simple Invoice Template (Free PDF)",
  description: "Create a simple invoice template PDF for quick billing without complex software.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Simple Invoice Template (Free PDF)</h1>
        <p className="mt-4 text-slate-600">Create a simple invoice template PDF for quick billing without complex software.</p>
        <p className='mt-6 text-slate-600'>A simple invoice template is ideal for freelancers and small businesses needing quick billing.</p>
        <div className="mt-8">
          <a href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Create Invoice PDF →
          </a>
        </div>
        <ShareBar title="Simple Invoice Template (Free PDF)" path="/simple-invoice-template" description="Create a simple invoice template PDF for quick billing without complex software." />
      </article>
      <SiteFooter />
    </main>
  );
}
