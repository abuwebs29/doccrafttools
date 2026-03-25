import { ToolLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Free Receipt Template Word (DOC Export)",
  description: "Create a receipt template and export it to Word. Useful for editable receipt documents and business administration.",
  alternates: { canonical: "/receipt-template-word" },
};

export default function Page() {
  return (
    <ToolLandingPage
      title="Free Receipt Template Word (DOC Export)"
      description="Create a receipt template and export it to Word. Useful for editable receipt documents and business administration."
      path="/receipt-template-word"
      templateId="receipt"
      toolId="receipt"
      toolName="Free Receipt Template Word (DOC Export)"
      embedPath="/embed/receipt"
      trackerTitle="Receipt Template Word"
      introTitle="What this receipt page helps you do"
      introParagraphs={["A good receipt template gives you a reusable structure for dates, parties, amounts, and supporting details so each document stays consistent.", "This page combines a ready-made receipt layout with online editing so you can move from draft to finished export faster."]}
      includeTitle="What to include in a receipt"
      includeItems={["Receipt number and payment date", "Payer and receiver details", "Amount paid and payment method", "Purpose of payment", "Optional notes or signature"]}
      useCasesTitle="Who should use this receipt page"
      useCases={[{"title": "Retail and service businesses", "text": "Confirm payment quickly with a clear receipt that is easy to share or print."}, {"title": "Landlords and property managers", "text": "Track rent or deposit payments with a repeatable proof-of-payment format."}, {"title": "Freelancers", "text": "Issue receipts after payment for one-time projects, deposits, and final balances."}, {"title": "Small teams", "text": "Keep internal records clean with consistent payer, date, amount, and method fields."}]}
      formatTitle="Why this version is useful"
      formatParagraphs={["This page supports people who need a clean, professional receipt without complex software or spreadsheet formulas.", "It also helps search intent by combining the practical tool with enough explanatory content to answer common receipt questions on the same page."]}
      faqs={[{"q": "What is a receipt?", "a": "A receipt is a structured business document used to keep payment, pricing, delivery, or rental records clear and consistent."}, {"q": "Who can use this receipt page?", "a": "Freelancers, consultants, small businesses, landlords, and operations teams can all adapt the structure to their workflow."}, {"q": "Can I customize this receipt?", "a": "Yes. You can adjust names, dates, items, taxes, notes, and other key details before exporting the final version."}]}
      relatedTitle="Related receipt pages"
    />
  );
}
