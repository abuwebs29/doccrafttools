import "./globals.css";
import Script from "next/script";

const site = "https://doccrafttools.com";

export const metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Free Invoice Generator, Receipt Generator & PDF Templates | DocCraft Tools",
    template: "%s | DocCraft Tools",
  },
  description:
    "Generate professional PDFs instantly: invoice, receipt, quotation, delivery note, rent receipt — no login.",
  openGraph: {
    type: "website",
    url: site,
    title: "Free Invoice Generator, Receipt Generator & PDF Templates | DocCraft Tools",
    description:
      "Generate professional PDFs instantly: invoice, receipt, quotation and more — no login.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
