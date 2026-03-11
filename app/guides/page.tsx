import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { guides } from "@/lib/guides";

export const metadata = {
  alternates: { canonical: "/guides" },
  title: "Guides",
  description: "Guides and examples for invoices, receipts, quotations and business documents.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Guides</h1>
        <p className="mt-2 text-slate-600">Short, practical guides with examples — plus free PDF generators.</p>
      </header>

      <section className="grid gap-4">
        {guides.map((g) => (
          <a key={g.path} href={g.path} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
            <div className="text-lg font-extrabold text-slate-900">{g.title}</div>
            <div className="mt-2 text-sm text-slate-600">{g.description}</div>
            <div className="mt-4 text-sm font-semibold text-slate-900">Read →</div>
          </a>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
