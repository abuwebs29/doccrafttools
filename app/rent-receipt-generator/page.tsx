import { ToolLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Free Rent Receipt Generator | Create Printable Rent Receipts",
  description: "Create a rent receipt online with tenant, landlord, payment period, and amount received, then export a printable PDF.",
  alternates: { canonical: "/rent-receipt-generator" },
};

export default function Page() {
  return (
    <ToolLandingPage
      title="Rent Receipt Generator"
      description="Create a professional rent receipt online, customize the details, and export a clean version in minutes."
      path="/rent-receipt-generator"
      templateId="rent_receipt"
      toolId="rent_receipt"
      toolName="Rent Receipt Generator"
      embedPath="/embed/rent-receipt"
      trackerTitle="Rent Receipt Generator"
      introTitle="What this rent receipt page helps you do"
      introParagraphs={["This rent receipt page is built for users who want a faster way to create consistent documents without starting from a blank file.", "Use it to customize business details, add the right fields, and generate a professional rent receipt that is ready to download and share."]}
      includeTitle="What to include in a rent receipt"
      includeItems={["Receipt number and payment date", "Tenant and landlord names", "Property address", "Rent period covered", "Amount paid and payment method"]}
      useCasesTitle="Who should use this rent receipt page"
      useCases={[{"title": "Landlords", "text": "Issue monthly or one-off proof of rent payments with the key tenancy details included."}, {"title": "Tenants", "text": "Keep a printable record of paid rent for reimbursements, tax, or visa paperwork."}, {"title": "Property managers", "text": "Standardize monthly receipts across multiple units and tenants."}, {"title": "Account teams", "text": "Maintain a clear payment history for rental transactions."}]}
      formatTitle="Why this version is useful"
      formatParagraphs={["This page supports people who need a clean, professional rent receipt without complex software or spreadsheet formulas.", "It also helps search intent by combining the practical tool with enough explanatory content to answer common rent receipt questions on the same page."]}
      faqs={[{"q": "What is a rent receipt?", "a": "A rent receipt is a structured business document used to keep payment, pricing, delivery, or rental records clear and consistent."}, {"q": "Who can use this rent receipt page?", "a": "Freelancers, consultants, small businesses, landlords, and operations teams can all adapt the structure to their workflow."}, {"q": "Can I customize this rent receipt?", "a": "Yes. You can adjust names, dates, items, taxes, notes, and other key details before exporting the final version."}]}
      relatedTitle="Related rent receipt pages"
    />
  );
}
