
import Link from "next/link";

export function ExamplePreview({ variant = "default" }: { variant?: string }) {
  const map: any = {
    default: {
      img: "/invoice-sample.png",
      pdf: "/samples/invoice-sample.pdf",
    },
    freelancer: {
      img: "/invoice-freelancer.png",
      pdf: "/samples/invoice-freelancer.pdf",
    },
    uae: {
      img: "/invoice-uae.png",
      pdf: "/samples/invoice-uae.pdf",
    },
    consultant: {
      img: "/invoice-consultant.png",
      pdf: "/samples/invoice-consultant.pdf",
    },
  };

  const data = map[variant] || map.default;

  return (
    <div className="mt-6">
      <img src={data.img} className="rounded-xl border" />
      <a href={data.pdf} className="text-blue-600 underline mt-2 block">
        Download sample PDF
      </a>
    </div>
  );
}

export function SeoBlock({ title, children }: any) {
  return (
    <section className="mt-10 p-6 border rounded-2xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function InlineLinks() {
  return (
    <p>
      Use our <Link href="/invoice-generator">invoice generator</Link> or{" "}
      <Link href="/invoice-template">invoice template</Link>.
    </p>
  );
}

export function AdvancedFAQ() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">FAQ</h2>
      <p>Do I need VAT in UAE? Yes if registered.</p>
      <p>Invoice numbering? Must be unique.</p>
    </div>
  );
}
