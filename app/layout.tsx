import "./globals.css";

const site = "https://doccrafttools.com";

export const metadata = {
  metadataBase: new URL(site),
  title: {
    default: "DocCraft Tools — Free PDF Templates Generator",
    template: "%s | DocCraft Tools",
  },
  description:
    "Generate professional PDFs instantly: invoice, receipt, quotation, delivery note, rent receipt — no login.",
  alternates: { canonical: site },
  openGraph: {
    type: "website",
    url: site,
    title: "DocCraft Tools — Free PDF Templates Generator",
    description:
      "Generate professional PDFs instantly: invoice, receipt, quotation and more — no login.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
