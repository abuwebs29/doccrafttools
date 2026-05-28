import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/privacy");

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-slate-600">
          DocCraft Tools is built to be privacy-first. Documents are generated locally in your browser where possible, and we do not ask you to create an account to use the core tools.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Data you enter into tools</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Document fields you type, such as client names, invoice items, amounts, and notes, are processed in your browser to create the document.</li>
          <li>Optional logos or images you upload are processed locally to place them into your exported file.</li>
          <li>We do not intentionally store your generated document content on our servers.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Analytics and basic usage data</h2>
        <p className="mt-2 text-slate-600">
          We may use analytics tools to understand how visitors use the website. Analytics can collect information such as page views, browser type, device type, approximate location, referral source, and interaction events. This helps us improve pages, fix problems, and understand which tools are useful.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Cookies and advertising</h2>
        <p className="mt-2 text-slate-600">
          DocCraft Tools may use cookies and similar technologies for analytics, security, preferences, and advertising. If advertising is enabled, third-party vendors, including Google, may use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
        </p>
        <p className="mt-2 text-slate-600">
          Google&apos;s advertising cookies help Google and its partners serve relevant ads. Users can visit Google Ad Settings to control personalized advertising. You can also manage or block cookies through your browser settings, although some website features may not work as expected if cookies are disabled.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Third-party services</h2>
        <p className="mt-2 text-slate-600">
          We may use third-party services for analytics, hosting, performance, and advertising. These services may process limited technical information under their own privacy policies. We do not sell document content that you type into the generators.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Links to other websites</h2>
        <p className="mt-2 text-slate-600">
          Some pages may link to external websites for additional information or resources. We are not responsible for the privacy practices, content, or policies of external websites.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Data retention</h2>
        <p className="mt-2 text-slate-600">
          Because core document generation happens locally in your browser, we do not keep a copy of your generated files. Analytics and technical logs, if collected, may be retained for a limited period by us or our service providers for security, reporting, and improvement purposes.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-slate-600">
          Questions? Email{" "}
          <a className="font-semibold text-slate-900 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
