import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "DocCraft Tools — أدوات PDF مجانية",
  description: "أنشئ مستندات PDF احترافية خلال ثوانٍ بدون تسجيل.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10" dir="rtl">
      <header className="mb-8 flex items-center justify-between">
        <a href="/" className="text-sm font-extrabold tracking-tight text-slate-900">DocCraft Tools</a>
        <div className="flex gap-3 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="/ar/pdf-templates">القوالب</a>
          <a className="hover:text-slate-900" href="/invoice-generator">الفاتورة</a>
          <a className="hover:text-slate-900" href="/receipt-generator">الإيصال</a>
        </div>
      </header>

      <h1 className="text-3xl font-extrabold tracking-tight">أدوات PDF مجانية — إنشاء فوري</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        أنشئ فواتير وإيصالات وعروض أسعار كمستندات PDF جاهزة للطباعة. بدون تسجيل. بدون تخزين بيانات.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href="/ar/pdf-templates">
          تصفح جميع القوالب →
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}
