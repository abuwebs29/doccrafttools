import { Suspense } from "react";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SKR2R64LCM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SKR2R64LCM');
          `}
        </Script>

        {/* Suspense Fix */}
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
