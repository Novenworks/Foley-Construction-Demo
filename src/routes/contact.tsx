import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact | Foley Construction" }],
  }),
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Fullerton office
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Call to schedule a consultation about your remodeling needs.
          </h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a
            href={site.phoneTel}
            className="inline-flex items-center gap-3 font-display text-3xl font-semibold text-ink hover:text-slate"
          >
            <Phone className="size-7" />
            {site.phoneDisplay}
          </a>
          <p className="mt-6 text-sm text-ink-soft">
            {site.addressLine1}
            <br />
            {site.addressLine2}
          </p>
          <p className="mt-3 text-sm text-muted">Fax {site.faxDisplay}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            Phone is the conversion path Foley Construction publishes. The
            note form on this page is a demo of how a redesigned site could
            collect project details — it does not email the office.
          </p>
          <a
            className="mt-4 inline-block text-sm font-medium text-slate hover:underline"
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
