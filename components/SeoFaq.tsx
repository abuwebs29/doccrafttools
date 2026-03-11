
export default function SeoFaq() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is DocCraft Tools free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, DocCraft Tools allows you to generate invoices, receipts and templates for free."
              }
            },
            {
              "@type": "Question",
              "name": "Can I export invoices to PDF or Excel?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, invoices can be exported as PDF, Excel or Word files."
              }
            }
          ]
        })
      }}
    />
  );
}
