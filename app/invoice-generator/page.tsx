import { ToolLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Invoice Generator",
  description: "Create a professional invoice online, customize the details, and export a clean version in minutes.",
  alternates: { canonical: "/invoice-generator" },
};

export default function Page() {
  return (
    <ToolLandingPage
      title="Invoice Generator"
      description="Create a professional invoice online, customize the details, and export a clean version in minutes."
      path="/invoice-generator"
      templateId="invoice"
      toolId="invoice"
      toolName="Invoice Generator"
      embedPath="/embed/invoice"
      trackerTitle="Invoice Generator"
      introTitle="What this invoice page helps you do"
      introParagraphs={["This invoice page is built for users who want a faster way to create consistent documents without starting from a blank file.", "Use it to customize business details, add the right fields, and generate a professional invoice that is ready to download and share."]}
      includeTitle="What to include in a invoice"
      includeItems={["Business name and contact details", "Client billing details", "Invoice number and issue date", "Due date and payment terms", "Line items, taxes, discounts, and total"]}
      useCasesTitle="Who should use this invoice page"
      useCases={[{"title": "Freelancers", "text": "Bill project work, retainers, and hourly services with a consistent invoice structure."}, {"title": "Consultants", "text": "Show service descriptions, rates, taxes, and payment terms clearly for every client."}, {"title": "Agencies", "text": "Use a polished layout for itemized services, campaign work, and multi-line projects."}, {"title": "Small businesses", "text": "Standardize billing for products, services, and recurring customer accounts."}]}
      formatTitle="Why this version is useful"
      formatParagraphs={["This page supports people who need a clean, professional invoice without complex software or spreadsheet formulas.", "It also helps search intent by combining the practical tool with enough explanatory content to answer common invoice questions on the same page."]}
      faqs={[{"q": "What is a invoice?", "a": "A invoice is a structured business document used to keep payment, pricing, delivery, or rental records clear and consistent."}, {"q": "Who can use this invoice page?", "a": "Freelancers, consultants, small businesses, landlords, and operations teams can all adapt the structure to their workflow."}, {"q": "Can I customize this invoice?", "a": "Yes. You can adjust names, dates, items, taxes, notes, and other key details before exporting the final version."}]}
      relatedTitle="Related invoice pages"
    />
  );
}
