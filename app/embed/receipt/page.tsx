import TemplateEngine from "@/components/TemplateEngine";
import { templates } from "@/lib/templates";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  robots: { index: false, follow: false },
  title: "Embed — Receipt Generator",
  description: "Embedded Receipt Generator by DocCraft Tools.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div>
            <div className="text-sm font-extrabold text-slate-900">Receipt Generator</div>
            <div className="text-xs text-slate-600">
              Embedded tool by 
              <a className="font-semibold text-slate-900 hover:underline" href={siteConfig.siteUrl} target="_blank" rel="noreferrer">
                DocCraft Tools
              </a>
            </div>
          </div>
          <a
            href={`${siteConfig.siteUrl}/receipt-generator`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
          >
            Open full page →
          </a>
        </div>

        <TemplateEngine template={templates.receipt} />

        <div className="mt-6 text-center text-xs text-slate-500">
          Powered by 
          <a className="font-semibold text-slate-700 hover:underline" href={siteConfig.siteUrl} target="_blank" rel="noreferrer">
            DocCraft Tools
          </a>
        </div>
      </div>
    </main>
  );
}
