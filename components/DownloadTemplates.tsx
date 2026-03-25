const files = [
  { href: "/templates/invoice-template.pdf", label: "Download Invoice Template PDF" },
  { href: "/templates/invoice-template.docx", label: "Download Invoice Template Word" },
  { href: "/templates/invoice-template.xlsx", label: "Download Invoice Template Excel" },
  { href: "/templates/receipt-template.pdf", label: "Download Receipt Template PDF" },
  { href: "/templates/receipt-template.docx", label: "Download Receipt Template Word" },
  { href: "/templates/receipt-template.xlsx", label: "Download Receipt Template Excel" },
];

export default function DownloadTemplates() {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Free downloadable templates</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
        Download simple starter templates in PDF, Word, and Excel format, then customize them or use the online generators for a cleaner finished document.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((file) => (
          <a
            key={file.href}
            href={file.href}
            download
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            {file.label}
          </a>
        ))}
      </div>
    </section>
  );
}
