import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ShareBar from "@/components/ShareBar";

export const metadata = {
  title: "Blank Receipt Template (Free Printable PDF)",
  description:
    "Download a blank receipt template PDF. Create and print a simple receipt with payer name, amount, date and signature instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />

      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Blank Receipt Template
        </h1>

        <p className="mt-4 text-slate-600">
          A blank receipt template is a simple document used to confirm
          payment received. It can be printed and filled manually or
          generated digitally as a PDF.
        </p>

        <h2 className="mt-8 text-xl font-semibold">
          What to include in a blank receipt
        </h2>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Receipt number</li>
          <li>Date of payment</li>
          <li>Name of payer</li>
          <li>Amount received</li>
          <li>Payment method (cash, transfer, card)</li>
          <li>Signature of issuer</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">
          When to use a blank receipt
        </h2>

        <p className="mt-3 text-slate-600">
          Blank receipts are commonly used by small businesses,
          freelancers, landlords and service providers who need a quick
          proof of payment document.
        </p>

        <div className="mt-8">
          <a
            href="/receipt-generator"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Generate Blank Receipt PDF →
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold">
            Related Templates
          </h2>

          <div className="mt-3 grid gap-2 text-sm">
            <a
              className="font-semibold text-slate-900 hover:underline"
              href="/receipt-template-pdf"
            >
              Receipt Template PDF →
            </a>

            <a
              className="font-semibold text-slate-900 hover:underline"
              href="/cash-receipt-template"
            >
              Cash Receipt Template →
            </a>

            <a
              className="font-semibold text-slate-900 hover:underline"
              href="/rent-receipt-template"
            >
              Rent Receipt Template →
            </a>
          </div>
        </div>

        <ShareBar
          title="Blank Receipt Template"
          path="/blank-receipt-template"
          description="Free printable blank receipt PDF template."
        />
      </article>

      <SiteFooter />
    </main>
  );
}
