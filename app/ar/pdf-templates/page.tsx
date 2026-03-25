import SiteFooter from "@/components/SiteFooter";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/ar/pdf-templates");

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10" dir="rtl">
      <header className="mb-8 flex items-center justify-between">
        <a href="/ar" className="text-sm font-extrabold tracking-tight text-slate-900">DocCraft Tools</a>
        <div className="flex gap-3 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="/invoice-generator">الفاتورة</a>
          <a className="hover:text-slate-900" href="/receipt-generator">الإيصال</a>
        </div>
      </header>

      <h1 className="text-3xl font-extrabold tracking-tight">قوالب PDF مجانية</h1>
      <p className="mt-3 text-slate-600">اختر قالبًا وابدأ فورًا.</p>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <a className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition" href="/invoice-generator">
          <div className="text-lg font-extrabold">مولد الفواتير</div>
          <div className="mt-2 text-sm text-slate-600">إنشاء فاتورة PDF خلال ثوانٍ.</div>
          <div className="mt-4 text-sm font-semibold">فتح →</div>
        </a>
        <a className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition" href="/receipt-generator">
          <div className="text-lg font-extrabold">مولد الإيصالات</div>
          <div className="mt-2 text-sm text-slate-600">إنشاء إيصال دفع PDF جاهز للطباعة.</div>
          <div className="mt-4 text-sm font-semibold">فتح →</div>
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}