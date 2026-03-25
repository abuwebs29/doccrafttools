type LinkItem = {
  title: string;
  href: string;
};

type Cluster = {
  core: string;
  links: LinkItem[];
};

export const clusters: Record<string, Cluster> = {
  invoice: {
    core: "/invoice-generator",
    links: [
      { title: "Invoice Template", href: "/invoice-template" },
      { title: "Invoice Sample", href: "/invoice-sample" },
      { title: "How to Make an Invoice", href: "/how-to-make-an-invoice" },
      { title: "Invoice Format UAE", href: "/invoice-format-uae" },
      { title: "Invoice Payment Terms Explained", href: "/invoice-payment-terms-explained" },
      { title: "Invoice vs Receipt Difference", href: "/invoice-vs-receipt-difference" },
    ],
  },
  receipt: {
    core: "/receipt-generator",
    links: [
      { title: "Receipt Template", href: "/receipt-template" },
      { title: "Receipt Sample", href: "/receipt-sample" },
      { title: "How to Write a Receipt", href: "/how-to-write-receipt" },
      { title: "Rent Receipt Template", href: "/rent-receipt-template" },
      { title: "Receipt vs Invoice", href: "/receipt-vs-invoice" },
    ],
  },
  quotation: {
    core: "/quotation-generator",
    links: [
      { title: "Quotation Sample", href: "/quotation-sample" },
      { title: "Estimate vs Quotation", href: "/estimate-vs-quotation" },
      { title: "Invoice vs Quotation", href: "/invoice-vs-quotation" },
    ],
  },
};

export function getClusterLinks(path: string): LinkItem[] {
  const entry = Object.values(clusters).find((cluster) =>
    path.includes(cluster.core.split("/")[1])
  );

  return entry?.links || [];
}
