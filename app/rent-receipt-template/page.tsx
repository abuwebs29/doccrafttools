import { ToolLandingPage } from "@/components/SeoPageLayouts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/rent-receipt-template");

export default function Page() {
  return (
    <ToolLandingPage
      title="Rent Receipt Template (Printable PDF Generator)"
      description="Generate a rent receipt PDF with tenant/landlord details, property address, rent period, and amount paid."
      path="/rent-receipt-template"
      templateId="rent_receipt"
      toolId="rent_receipt"
      toolName="Rent Receipt Template (Printable PDF Generator)"
      embedPath="/embed/rent-receipt"
      trackerTitle="Rent Receipt Template"
      introTitle="What this rent receipt page helps you do"
      introParagraphs={["A good rent receipt template gives you a reusable structure for dates, parties, amounts, and supporting details so each document stays consistent.", "This page combines a ready-made rent receipt layout with online editing so you can move from draft to finished export faster."]}
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