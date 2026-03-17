import { ToolLandingPage } from "@/components/SeoPageLayouts";

export const metadata = {
  title: "Delivery Note Generator",
  description: "Create a professional delivery note online, customize the details, and export a clean version in minutes.",
  alternates: { canonical: "/delivery-note-generator" },
};

export default function Page() {
  return (
    <ToolLandingPage
      title="Delivery Note Generator"
      description="Create a professional delivery note online, customize the details, and export a clean version in minutes."
      path="/delivery-note-generator"
      templateId="delivery_note"
      toolId="delivery_note"
      toolName="Delivery Note Generator"
      embedPath="/embed/delivery-note"
      trackerTitle="Delivery Note Generator"
      introTitle="What this delivery note page helps you do"
      introParagraphs={["This delivery note page is built for users who want a faster way to create consistent documents without starting from a blank file.", "Use it to customize business details, add the right fields, and generate a professional delivery note that is ready to download and share."]}
      includeTitle="What to include in a delivery note"
      includeItems={["Delivery note number and delivery date", "Sender and receiver details", "Item list and quantities delivered", "Reference number such as PO or invoice", "Notes, signatures, or receiving confirmation"]}
      useCasesTitle="Who should use this delivery note page"
      useCases={[{"title": "Suppliers", "text": "Document the items that were shipped or handed over to the customer."}, {"title": "Warehouses", "text": "Keep delivery records aligned with orders, invoices, and receiving teams."}, {"title": "Distributors", "text": "Track quantities and references for partial or full deliveries."}, {"title": "Operations teams", "text": "Use a clear paper trail when goods move between locations or customers."}]}
      formatTitle="Why this version is useful"
      formatParagraphs={["This page supports people who need a clean, professional delivery note without complex software or spreadsheet formulas.", "It also helps search intent by combining the practical tool with enough explanatory content to answer common delivery note questions on the same page."]}
      faqs={[{"q": "What is a delivery note?", "a": "A delivery note is a structured business document used to keep payment, pricing, delivery, or rental records clear and consistent."}, {"q": "Who can use this delivery note page?", "a": "Freelancers, consultants, small businesses, landlords, and operations teams can all adapt the structure to their workflow."}, {"q": "Can I customize this delivery note?", "a": "Yes. You can adjust names, dates, items, taxes, notes, and other key details before exporting the final version."}]}
      relatedTitle="Related delivery note pages"
    />
  );
}
