import Link from "next/link";

type LinkItem = { href: string; label: string; description?: string };

export default function RelatedTools({
  title = "Related tools and guides",
  links,
}: {
  title?: string;
  links?: LinkItem[];
}) {
  const defaultLinks: LinkItem[] = [
    { href: "/invoice-generator", label: "Invoice Generator", description: "Create polished invoice PDFs online." },
    { href: "/receipt-generator", label: "Receipt Generator", description: "Make proof-of-payment receipts in seconds." },
    { href: "/quotation-generator", label: "Quotation Generator", description: "Send fast estimates and quotations." },
    { href: "/invoice-template", label: "Invoice Template", description: "Use a ready-made invoice layout." },
    { href: "/receipt-template", label: "Receipt Template", description: "Start from a printable receipt format." },
    { href: "/pdf-templates", label: "All PDF Templates", description: "Browse all business document tools." },
  ];

  const items = links ?? defaultLinks;

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
            <div className="font-semibold text-slate-900">{item.label}</div>
            {item.description ? <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
