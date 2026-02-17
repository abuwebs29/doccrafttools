import "./globals.css";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SKR2R64LCM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PASTE-YOUR-ID-HERE');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
