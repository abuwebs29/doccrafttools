export type InternalLink = { href: string; anchor: string };
export type InternalLinkMap = Record<string, InternalLink[]>;

/**
 * Hand-curated internal linking map (anchor text + target URL).
 * - Keys are canonical paths (no trailing slash except "/").
 * - Values are ordered lists (most important links first).
 */
export const INTERNAL_LINKS: InternalLinkMap = {
  "/": [
    {
      "href": "/invoice-generator",
      "anchor": "invoice generator"
    },
    {
      "href": "/receipt-generator",
      "anchor": "receipt generator"
    },
    {
      "href": "/quotation-generator",
      "anchor": "quotation generator"
    },
    {
      "href": "/delivery-note-generator",
      "anchor": "delivery note generator"
    },
    {
      "href": "/pdf-templates",
      "anchor": "PDF templates"
    },
    {
      "href": "/guides",
      "anchor": "invoice & receipt guides"
    }
  ],
  "/invoice-generator": [
    {
      "href": "/invoice-template-pdf",
      "anchor": "invoice template PDF"
    },
    {
      "href": "/invoice-format",
      "anchor": "invoice format guide"
    },
    {
      "href": "/invoice-number-format",
      "anchor": "invoice number format"
    },
    {
      "href": "/invoice-payment-terms-explained",
      "anchor": "invoice payment terms"
    },
    {
      "href": "/invoice-for-services",
      "anchor": "invoice for services"
    },
    {
      "href": "/receipt-generator",
      "anchor": "receipt generator"
    }
  ],
  "/invoice-generator-online-free": [
    {
      "href": "/invoice-generator",
      "anchor": "free invoice generator"
    },
    {
      "href": "/invoice-template-pdf-free-download",
      "anchor": "invoice template PDF free download"
    },
    {
      "href": "/how-to-make-an-invoice",
      "anchor": "how to make an invoice"
    },
    {
      "href": "/invoice-due-date-meaning",
      "anchor": "invoice due date meaning"
    },
    {
      "href": "/freelance-invoice-template",
      "anchor": "freelance invoice template"
    },
    {
      "href": "/receipt-generator",
      "anchor": "create a receipt"
    }
  ],
  "/receipt-generator": [
    {
      "href": "/receipt-template-pdf",
      "anchor": "receipt template PDF"
    },
    {
      "href": "/payment-receipt-format",
      "anchor": "payment receipt format"
    },
    {
      "href": "/cash-receipt-template",
      "anchor": "cash receipt template"
    },
    {
      "href": "/business-receipt-template",
      "anchor": "business receipt template"
    },
    {
      "href": "/difference-between-invoice-and-receipt",
      "anchor": "difference between invoice and receipt"
    },
    {
      "href": "/invoice-generator",
      "anchor": "invoice generator"
    }
  ],
  "/rent-receipt-generator": [
    {
      "href": "/rent-receipt-format",
      "anchor": "rent receipt format"
    },
    {
      "href": "/rent-receipt-template",
      "anchor": "rent receipt template"
    },
    {
      "href": "/receipt-template-pdf",
      "anchor": "receipt template PDF"
    },
    {
      "href": "/invoice-generator",
      "anchor": "invoice generator"
    },
    {
      "href": "/guides",
      "anchor": "guides"
    }
  ],
  "/quotation-generator": [
    {
      "href": "/estimate-vs-quotation",
      "anchor": "estimate vs quotation"
    },
    {
      "href": "/invoice-generator",
      "anchor": "invoice generator"
    },
    {
      "href": "/proforma-invoice-template",
      "anchor": "proforma invoice template"
    },
    {
      "href": "/pdf-templates",
      "anchor": "PDF templates"
    },
    {
      "href": "/guides",
      "anchor": "guides"
    }
  ],
  "/delivery-note-generator": [
    {
      "href": "/delivery-note-format",
      "anchor": "delivery note format"
    },
    {
      "href": "/delivery-note-vs-invoice",
      "anchor": "delivery note vs invoice"
    },
    {
      "href": "/invoice-generator",
      "anchor": "invoice generator"
    },
    {
      "href": "/quotation-generator",
      "anchor": "quotation generator"
    },
    {
      "href": "/guides",
      "anchor": "guides"
    }
  ],
  "/pdf-templates": [
    {
      "href": "/invoice-template-pdf",
      "anchor": "invoice template PDF"
    },
    {
      "href": "/receipt-template-pdf",
      "anchor": "receipt template PDF"
    },
    {
      "href": "/commercial-invoice-template",
      "anchor": "commercial invoice template"
    },
    {
      "href": "/proforma-invoice-template",
      "anchor": "proforma invoice template"
    },
    {
      "href": "/tax-invoice-template",
      "anchor": "tax invoice template"
    },
    {
      "href": "/simple-invoice-template",
      "anchor": "simple invoice template"
    }
  ],
  "/guides": [
    {
      "href": "/how-to-make-an-invoice",
      "anchor": "how to make an invoice"
    },
    {
      "href": "/invoice-format",
      "anchor": "invoice format"
    },
    {
      "href": "/invoice-payment-terms-explained",
      "anchor": "invoice payment terms explained"
    },
    {
      "href": "/difference-between-invoice-and-receipt",
      "anchor": "invoice vs receipt"
    },
    {
      "href": "/proforma-vs-invoice",
      "anchor": "proforma vs invoice"
    },
    {
      "href": "/delivery-note-vs-invoice",
      "anchor": "delivery note vs invoice"
    }
  ]
};

export const GENERIC_INTERNAL_LINKS: InternalLink[] = [
  {
    "href": "/invoice-generator",
    "anchor": "invoice generator"
  },
  {
    "href": "/invoice-template-pdf",
    "anchor": "invoice template PDF"
  },
  {
    "href": "/receipt-generator",
    "anchor": "receipt generator"
  },
  {
    "href": "/pdf-templates",
    "anchor": "PDF templates"
  },
  {
    "href": "/guides",
    "anchor": "guides"
  }
];

function getInternalLinksBase(currentPath: string): InternalLink[] {
  if (!currentPath) return GENERIC_INTERNAL_LINKS;
  const normalized = normalizePath(currentPath);
  return INTERNAL_LINKS[normalized] ?? GENERIC_INTERNAL_LINKS;
}

export function normalizePath(path: string): string {
  if (!path) return "/";
  // strip domain if passed accidentally
  path = path.replace(/^https?:\/\/[^/]+/i, "");
  // ensure leading slash
  if (!path.startsWith("/")) path = "/" + path;
  // remove trailing slash except root
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return path;
}


// PHASE11_EXPANSION
export const PHASE11_INTERNAL_LINKS: Record<string, { href: string; anchor: string }[]> = {
  "/invoice-template-google-docs": [
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-template-word", anchor: "Invoice Template Word" },
    { href: "/invoice-template-excel", anchor: "Invoice Template Excel" }
  ],
  "/invoice-template-free-download": [
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-template-pdf-free-download", anchor: "Invoice Template PDF Free Download" },
    { href: "/invoice-generator", anchor: "Invoice Generator" }
  ],
  "/receipt-template-excel": [
    { href: "/receipt-template", anchor: "Receipt Template" },
    { href: "/receipt-template-word", anchor: "Receipt Template Word" },
    { href: "/receipt-generator", anchor: "Receipt Generator" }
  ],
  "/invoice-template-pdf-free-download": [
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-template-word", anchor: "Invoice Template Word" },
    { href: "/invoice-template-excel", anchor: "Invoice Template Excel" }
  ],
  "/invoice-template-uk": [
    { href: "/invoice-generator-uk", anchor: "Invoice Generator UK" },
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/tax-invoice-template", anchor: "Tax Invoice Template" }
  ],
  "/invoice-generator-cad": [
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-template-excel", anchor: "Invoice Template Excel" }
  ],
  "/invoice-generator-aud": [
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-template-word", anchor: "Invoice Template Word" }
  ],
  "/invoice-generator-eur": [
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/commercial-invoice-template", anchor: "Commercial Invoice Template" }
  ],
  "/invoice-generator-sar": [
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/tax-invoice-template", anchor: "Tax Invoice Template" },
    { href: "/commercial-invoice-template", anchor: "Commercial Invoice Template" }
  ],
  "/invoice-generator-pkr": [
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-template-free-download", anchor: "Invoice Template Free Download" }
  ],
  "/receipt-template-google-docs": [
    { href: "/receipt-template", anchor: "Receipt Template" },
    { href: "/receipt-template-word", anchor: "Receipt Template Word" },
    { href: "/receipt-template-excel", anchor: "Receipt Template Excel" }
  ],
  "/freelance-invoice-template": [
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-for-services", anchor: "Invoice for Services" }
  ],
  "/consulting-invoice-template": [
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/invoice-payment-terms-explained", anchor: "Invoice Payment Terms" }
  ],
  "/contractor-invoice-template": [
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-generator", anchor: "Invoice Generator" },
    { href: "/tax-invoice-template", anchor: "Tax Invoice Template" }
  ],
  "/invoice-template-download": [
    { href: "/invoice-template", anchor: "Invoice Template" },
    { href: "/invoice-template-free-download", anchor: "Invoice Template Free Download" },
    { href: "/invoice-template-pdf-free-download", anchor: "Invoice Template PDF Free Download" }
  ]
};

const __phase11_original_getInternalLinks = typeof getInternalLinks === "function" ? getInternalLinks : null;

export function getInternalLinks(currentPath: string) {
  const normalized = typeof normalizePath === "function" ? normalizePath(currentPath) : currentPath;
  const extra = PHASE11_INTERNAL_LINKS[normalized];
  if (extra && extra.length) return extra;
  return __phase11_original_getInternalLinks ? __phase11_original_getInternalLinks(currentPath) : [];
}
