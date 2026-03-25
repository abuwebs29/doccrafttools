import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
<<<<<<< HEAD
=======
  alternates: { canonical: "/" },
>>>>>>> 25b8b526da89e5a2987f60196f3fcc87c402283e
  title: {
    default: `Free Invoice Generator, Receipt Generator & PDF Templates | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Generate professional PDFs instantly: invoice, receipt, quotation, delivery note, rent receipt — no login.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Free Invoice Generator, Receipt Generator & PDF Templates | ${SITE_NAME}`,
    description:
      "Generate professional PDFs instantly: invoice, receipt, quotation and more — no login.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Free Invoice Generator, Receipt Generator & PDF Templates | ${SITE_NAME}`,
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
