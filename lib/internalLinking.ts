export type InternalLink = { href: string; anchor: string };
export type InternalLinkMap = Record<string, InternalLink[]>;

export const INTERNAL_LINKS: InternalLinkMap = {
  "/": [
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    },
    {
      "href": "/receipt-generator",
      "anchor": "Receipt Generator"
    },
    {
      "href": "/quotation-generator",
      "anchor": "Quotation Generator"
    },
    {
      "href": "/delivery-note-generator",
      "anchor": "Delivery Note Generator"
    },
    {
      "href": "/invoice-template",
      "anchor": "Invoice Template"
    },
    {
      "href": "/invoice-template-excel",
      "anchor": "Invoice Template Excel"
    },
    {
      "href": "/invoice-template-word",
      "anchor": "Invoice Template Word"
    },
    {
      "href": "/receipt-template",
      "anchor": "Receipt Template"
    },
    {
      "href": "/commercial-invoice-template",
      "anchor": "Commercial Invoice Template"
    },
    {
      "href": "/tax-invoice-template",
      "anchor": "Tax Invoice Template"
    }
  ],
  "/invoice-generator": [
    {
      "href": "/invoice-template",
      "anchor": "Invoice Template"
    },
    {
      "href": "/invoice-template-excel",
      "anchor": "Invoice Template Excel"
    },
    {
      "href": "/invoice-template-word",
      "anchor": "Invoice Template Word"
    },
    {
      "href": "/gst-invoice-generator",
      "anchor": "GST Invoice Generator"
    },
    {
      "href": "/invoice-generator-usd",
      "anchor": "Invoice Generator USD"
    },
    {
      "href": "/invoice-generator-inr",
      "anchor": "Invoice Generator INR"
    },
    {
      "href": "/invoice-generator-uk",
      "anchor": "Invoice Generator GBP"
    },
    {
      "href": "/commercial-invoice-template",
      "anchor": "Commercial Invoice Template"
    },
    {
      "href": "/tax-invoice-template",
      "anchor": "Tax Invoice Template"
    }
  ],
  "/receipt-generator": [
    {
      "href": "/receipt-template",
      "anchor": "Receipt Template"
    },
    {
      "href": "/receipt-template-word",
      "anchor": "Receipt Template Word"
    },
    {
      "href": "/receipt-template-excel",
      "anchor": "Receipt Template Excel"
    },
    {
      "href": "/receipt-template-pdf",
      "anchor": "Receipt Template PDF"
    },
    {
      "href": "/rent-receipt-generator",
      "anchor": "Rent Receipt Generator"
    }
  ],
  "/quotation-generator": [
    {
      "href": "/estimate-vs-quotation",
      "anchor": "Estimate vs Quotation"
    },
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    },
    {
      "href": "/delivery-note-generator",
      "anchor": "Delivery Note Generator"
    }
  ],
  "/delivery-note-generator": [
    {
      "href": "/delivery-note-format",
      "anchor": "Delivery Note Format"
    },
    {
      "href": "/delivery-note-vs-invoice",
      "anchor": "Delivery Note vs Invoice"
    },
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    }
  ],
  "/invoice-template": [
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    },
    {
      "href": "/invoice-template-excel",
      "anchor": "Invoice Template Excel"
    },
    {
      "href": "/invoice-template-word",
      "anchor": "Invoice Template Word"
    },
    {
      "href": "/commercial-invoice-template",
      "anchor": "Commercial Invoice Template"
    },
    {
      "href": "/tax-invoice-template",
      "anchor": "Tax Invoice Template"
    }
  ],
  "/invoice-template-excel": [
    {
      "href": "/invoice-template",
      "anchor": "Invoice Template"
    },
    {
      "href": "/invoice-template-word",
      "anchor": "Invoice Template Word"
    },
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    }
  ],
  "/invoice-template-word": [
    {
      "href": "/invoice-template",
      "anchor": "Invoice Template"
    },
    {
      "href": "/invoice-template-excel",
      "anchor": "Invoice Template Excel"
    },
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    }
  ],
  "/receipt-template": [
    {
      "href": "/receipt-generator",
      "anchor": "Receipt Generator"
    },
    {
      "href": "/receipt-template-word",
      "anchor": "Receipt Template Word"
    },
    {
      "href": "/receipt-template-excel",
      "anchor": "Receipt Template Excel"
    }
  ],
  "/commercial-invoice-template": [
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    },
    {
      "href": "/invoice-template",
      "anchor": "Invoice Template"
    },
    {
      "href": "/tax-invoice-template",
      "anchor": "Tax Invoice Template"
    }
  ],
  "/tax-invoice-template": [
    {
      "href": "/gst-invoice-generator",
      "anchor": "GST Invoice Generator"
    },
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    },
    {
      "href": "/invoice-template",
      "anchor": "Invoice Template"
    }
  ],
  "/gst-invoice-generator": [
    {
      "href": "/invoice-generator-inr",
      "anchor": "Invoice Generator INR"
    },
    {
      "href": "/tax-invoice-template",
      "anchor": "Tax Invoice Template"
    },
    {
      "href": "/invoice-generator",
      "anchor": "Invoice Generator"
    }
  ]
};


export const GENERIC_INTERNAL_LINKS: InternalLink[] = [
  { href: "/invoice-generator", anchor: "Invoice Generator" },
  { href: "/invoice-template", anchor: "Invoice Template" },
  { href: "/receipt-generator", anchor: "Receipt Generator" },
  { href: "/commercial-invoice-template", anchor: "Commercial Invoice Template" },
  { href: "/tax-invoice-template", anchor: "Tax Invoice Template" }
];

export function normalizePath(path: string): string {
  if (!path) return "/";
  path = path.replace(/^https?:\/\/[^/]+/i, "");
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return path;
}

export function getInternalLinks(currentPath: string): InternalLink[] {
  const normalized = normalizePath(currentPath);
  return INTERNAL_LINKS[normalized] ?? GENERIC_INTERNAL_LINKS;
}


// PHASE10_EXPANSION
export const EXTRA_INTERNAL_LINKS = {
  "/invoice-template": [
    { href: "/invoice-template-excel", anchor: "Invoice Template Excel" },
    { href: "/invoice-template-word", anchor: "Invoice Template Word" },
    { href: "/invoice-generator", anchor: "Invoice Generator" }
  ],
  "/receipt-template": [
    { href: "/receipt-generator", anchor: "Receipt Generator" },
    { href: "/payment-receipt-format", anchor: "Payment Receipt Format" }
  ],
  "/commercial-invoice-template": [
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-generator", anchor: "Invoice Generator" }
  ],
  "/tax-invoice-template": [
    { href: "/gst-invoice-generator", anchor: "GST Invoice Generator" },
    { href: "/invoice-template", anchor: "Invoice Template" }
  ]
};
