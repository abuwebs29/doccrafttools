import { ToolLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Quotation Generator",
  description: "Create a professional quotation online, customize the details, and export a clean version in minutes.",
  alternates: { canonical: "/quotation-generator" },
};

export default function Page() {
  return (
    <ToolLandingPage
      title="Quotation Generator"
      description="Create a professional quotation online, customize the details, and export a clean version in minutes."
      path="/quotation-generator"
      templateId="quotation"
      toolId="quotation"
      toolName="Quotation Generator"
      embedPath="/embed/quotation"
      trackerTitle="Quotation Generator"
      introTitle="What this quotation page helps you do"
      introParagraphs={["This quotation page is built for users who want a faster way to create consistent documents without starting from a blank file.", "Use it to customize business details, add the right fields, and generate a professional quotation that is ready to download and share."]}
      includeTitle="What to include in a quotation"
      includeItems={["Quotation number and date", "Business and customer details", "Item descriptions and pricing", "Validity date and optional tax", "Approval notes or payment expectations"]}
      useCasesTitle="Who should use this quotation page"
      useCases={[{"title": "Freelancers", "text": "Send estimates before work starts and convert approved quotes into invoices later."}, {"title": "Consultants", "text": "Share clear pricing, scope, timelines, and validity dates with new prospects."}, {"title": "Agencies", "text": "Present branded proposals for project, retainer, or campaign-based work."}, {"title": "Service businesses", "text": "Standardize quote requests and keep approvals organized."}]}
      formatTitle="Why this version is useful"
      formatParagraphs={["This page supports people who need a clean, professional quotation without complex software or spreadsheet formulas.", "It also helps search intent by combining the practical tool with enough explanatory content to answer common quotation questions on the same page."]}
      faqs={[{"q": "What is a quotation?", "a": "A quotation is a structured business document used to keep payment, pricing, delivery, or rental records clear and consistent."}, {"q": "Who can use this quotation page?", "a": "Freelancers, consultants, small businesses, landlords, and operations teams can all adapt the structure to their workflow."}, {"q": "Can I customize this quotation?", "a": "Yes. You can adjust names, dates, items, taxes, notes, and other key details before exporting the final version."}]}
      relatedTitle="Related quotation pages"
    />
  );
}
