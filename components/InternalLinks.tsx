import Link from "next/link";
import { getInternalLinks } from "@/lib/internalLinking";

type Props = {
  /** Current canonical path like "/invoice-generator" */
  currentPath: string;
  title?: string;
};

export default function InternalLinks({ currentPath, title = "Related pages" }: Props) {
  const links = getInternalLinks(currentPath);

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">
        Jump to the most useful tools and templates.
      </p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900" href={l.href}>
              {l.anchor}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
