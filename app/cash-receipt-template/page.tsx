import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";
import InternalLinks from "@/components/InternalLinks";

export const metadata = {
  title: "Cash Receipt Template (Free PDF Generator)",
  description:
    "Create a printable cash receipt template PDF. Add payer name, amount received and payment purpose instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />

      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Cash Receipt Template
        </h1>

        <p className="mt-4 text-slate-600">
          A cash receipt confirms payment received in cash.
          It includes receipt number, payer name, amount received,
          date and payment purpose.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Essential fields</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Receipt number</li>
          <li>Date</li>
          <li>Received from</li>
          <li>Amount in numbers</li>
          <li>Payment purpose</li>
        </ul>

        <div className="mt-8">
          <a
            href="/receipt-generator"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Generate Cash Receipt →
          </a>
        </div>

        <ShareBar
          title="Cash Receipt Template"
          path="/cash-receipt-template"
          description="Free printable cash receipt PDF generator."
        />
              <InternalLinks currentPath="/cash-receipt-template" />
      </article>

      <SiteFooter />
    </main>
  );
}