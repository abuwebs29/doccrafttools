export default function PopularTemplates({ className = "" }: { className?: string }) {
  const popular = [
    { title: "Invoice Generator", href: "/invoice-generator", desc: "Most used business document." },
    { title: "Receipt Generator", href: "/receipt-generator", desc: "Proof of payment in seconds." },
    { title: "Quotation Generator", href: "/quotation-generator", desc: "Send an estimate before invoicing." },
  ];

  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      <h2 className="text-xl font-semibold">Popular templates</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {popular.map((p) => (
          <a key={p.href} href={p.href} className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
            <div className="text-sm font-extrabold text-slate-900">{p.title}</div>
            <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
