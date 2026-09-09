import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FinalCta } from "@/components/home/FinalCta";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About | Foley Construction" }],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Family-owned · Fullerton
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            A local remodeling company with a long California license record.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink-soft">
            Foley Construction is family owned and has been specializing in
            custom home remodeling and construction for over 22 years. The
            staff and crew is dedicated to masterful work, done on time.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Fully insured, Foley Construction specializes in Fullerton, as
            well as other historic Orange County locations. The company is
            committed to providing cost-efficient, high-quality projects and
            to listening to clients’ needs.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            The qualifying individual on the California license is Scott
            Fredrick Foley. Client letters on the current website address him
            by name and mention a small, familiar crew.
          </p>
        </div>
        <aside className="rounded-xl border border-line bg-cream p-6 lg:col-span-5">
          <h2 className="font-display text-2xl font-semibold">
            License record
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-muted">Business</dt>
              <dd className="text-right font-medium">{site.legalName}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-muted">CSLB</dt>
              <dd className="text-right font-medium">#{site.licenseNumber}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-muted">Class</dt>
              <dd className="text-right font-medium">{site.licenseClass}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-muted">Status</dt>
              <dd className="text-right font-medium">{site.licenseStatus}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-muted">First issued</dt>
              <dd className="text-right font-medium">{site.licenseIssued}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Expires</dt>
              <dd className="text-right font-medium">{site.licenseExpires}</dd>
            </div>
          </dl>
          <a
            className="mt-5 inline-block text-sm font-medium text-slate hover:underline"
            href={site.licenseUrl}
            target="_blank"
            rel="noreferrer"
          >
            Verify on CSLB.ca.gov
          </a>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            License facts are from the California Contractors State License
            Board, retrieved September 2026. Always re-check before hiring.
          </p>
        </aside>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">
            What this page does not claim
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Foley Construction’s current website does not publish staff count,
            annual volume, warranties, financing, or a numbered project
            tally. This redesign does not invent those figures. The “over 22
            years” phrasing is the company’s own, and it remains a true
            floor; the license was first issued in 1987 and reissued to the
            current corporation in 2004.
          </p>
        </div>
      </section>
      <FinalCta />
    </SiteShell>
  );
}
