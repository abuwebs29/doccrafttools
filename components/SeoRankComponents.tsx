import Link from "next/link";

const sampleMap: Record<string, { img: string; pdf: string; label: string }> = {
  default: {
    img: "/invoice-sample.png",
    pdf: "/samples/invoice-sample.pdf",
    label: "Download sample invoice PDF",
  },
  freelancer: {
    img: "/invoice-freelancer.png",
    pdf: "/samples/invoice-freelancer.pdf",
    label: "Download freelancer invoice sample PDF",
  },
  uae: {
    img: "/invoice-uae.png",
    pdf: "/samples/invoice-uae.pdf",
    label: "Download UAE invoice sample PDF",
  },
  consultant: {
    img: "/invoice-consultant.png",
    pdf: "/samples/invoice-consultant.pdf",
    label: "Download consultant invoice sample PDF",
  },
  rent: {
    img: "/receipt-rent.png",
    pdf: "/samples/receipt-rent.pdf",
    label: "Download rent receipt sample PDF",
  },
  business: {
    img: "/receipt-business.png",
    pdf: "/samples/receipt-business.pdf",
    label: "Download business receipt sample PDF",
  },
};

export function ExamplePreview({ variant = "default" }: { variant?: string }) {
  const sample = sampleMap[variant] ?? sampleMap.default;

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">Real example preview</h2>
      <p className="mt-3 text-slate-600">
        Review a realistic sample before you create your own document. This helps
        users understand layout, field order, and how totals or notes typically appear.
      </p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <img
          src={sample.img}
          alt={sample.label}
          className="w-full object-cover"
        />
      </div>
      <a
        href={sample.pdf}
        className="mt-4 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
      >
        {sample.label}
      </a>
    </section>
  );
}

export function SeoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-600">{children}</div>
    </section>
  );
}

export function InlineLinks({ topic = "invoice" }: { topic?: "invoice" | "receipt" | "quotation" | "delivery-note" }) {
  if (topic === "receipt") {
    return (
      <p>
        You can create a receipt instantly with our{" "}
        <Link href="/receipt-generator" className="text-blue-600 underline">
          receipt generator
        </Link>, compare layouts with the{" "}
        <Link href="/receipt-template" className="text-blue-600 underline">
          receipt template
        </Link>, review a{" "}
        <Link href="/receipt-sample" className="text-blue-600 underline">
          sample receipt
        </Link>, or learn the difference between{" "}
        <Link href="/receipt-vs-invoice" className="text-blue-600 underline">
          receipts and invoices
        </Link>.
      </p>
    );
  }

  if (topic === "quotation") {
    return (
      <p>
        Use the{" "}
        <Link href="/quotation-generator" className="text-blue-600 underline">
          quotation generator
        </Link>, compare it with an{" "}
        <Link href="/invoice-vs-quotation" className="text-blue-600 underline">
          invoice vs quotation guide
        </Link>, and review a{" "}
        <Link href="/quotation-sample" className="text-blue-600 underline">
          quotation sample
        </Link>{" "}
        before sharing it with a customer.
      </p>
    );
  }

  if (topic === "delivery-note") {
    return (
      <p>
        Use the{" "}
        <Link href="/delivery-note-generator" className="text-blue-600 underline">
          delivery note generator
        </Link>, review the{" "}
        <Link href="/delivery-note-format" className="text-blue-600 underline">
          delivery note format
        </Link>, and compare it with an{" "}
        <Link href="/delivery-note-vs-invoice" className="text-blue-600 underline">
          invoice
        </Link>{" "}
        when you need both shipping and billing records.
      </p>
    );
  }

  return (
    <p>
      Create documents instantly with our{" "}
      <Link href="/invoice-generator" className="text-blue-600 underline">
        invoice generator
      </Link>, customize a{" "}
      <Link href="/invoice-template" className="text-blue-600 underline">
        free invoice template
      </Link>, review an{" "}
      <Link href="/invoice-sample" className="text-blue-600 underline">
        invoice sample
      </Link>, learn{" "}
      <Link href="/how-to-make-an-invoice" className="text-blue-600 underline">
        how to make an invoice
      </Link>, or compare{" "}
      <Link href="/invoice-vs-receipt-difference" className="text-blue-600 underline">
        invoices and receipts
      </Link>{" "}
      before sending a client-ready document.
    </p>
  );
}
