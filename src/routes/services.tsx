import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FinalCta } from "@/components/home/FinalCta";
import { additionList, remodelList, services, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Services | Foley Construction" }],
  }),
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Design-build remodeling
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Custom home remodeling, from a kitchen to a second story.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            We are a full-service construction company for custom home
            remodeling and construction. Here is what we do.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.slug} id={s.slug} className="overflow-hidden rounded-xl border border-line bg-cream">
            <img
              src={s.image}
              alt={s.imageAlt}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-display text-3xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.summary}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section
        id="additions"
        className="border-y border-line bg-cream py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold">Remodels</h2>
            <ul className="mt-6 space-y-2 text-ink-soft">
              {remodelList.map((item) => (
                <li key={item} className="border-b border-line/70 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold">
              Room additions
            </h2>
            <ul className="mt-6 space-y-2 text-ink-soft">
              {additionList.map((item) => (
                <li key={item} className="border-b border-line/70 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <p className="text-sm text-ink-soft">
            We also build patios and decks. There is no job too small. Call{" "}
            <a className="font-medium text-ink underline" href={site.phoneTel}>
              {site.phoneDisplay}
            </a>{" "}
            to schedule a consultation.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">Schedule a consultation</Link>
          </Button>
        </div>
      </section>
      <FinalCta />
    </SiteShell>
  );
}
