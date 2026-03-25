import Link from "next/link";
import { getClusterLinks } from "@/lib/internalLinking";

export default function InternalLinks({
  currentPath,
  title = "Related resources",
}: {
  currentPath: string;
  title?: string;
}) {
  const links = getClusterLinks(currentPath);

  if (!links.length) return null;

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
