import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const GA_MEASUREMENT_ID = "G-SKR2R64LCM";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8584088490383284"
     crossorigin="anonymous"></script>
        
        {children}
      </body>
    </html>
  );
}
