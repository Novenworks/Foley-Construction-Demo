import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FinalCta } from "@/components/home/FinalCta";
import { kitchenPhotos, livingPhotos } from "@/lib/site";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [{ title: "Our Work | Foley Construction" }],
  }),
});

function WorkPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Project photography
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Kitchens, family rooms, and the rooms around them.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            A look at kitchens, family rooms, and a bathroom from our
            projects.
          </p>
        </div>
      </section>

      <section id="kitchens" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Kitchens
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {kitchenPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              className={i === 0 ? "col-span-2 md:col-span-3" : ""}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full rounded-lg object-cover ${
                  i === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
                }`}
              />
            </figure>
          ))}
        </div>
      </section>

      <section id="living" className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Family rooms and living spaces
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {livingPhotos.map((photo, i) => (
              <figure
                key={photo.src}
                className={i === 0 ? "col-span-2" : ""}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full rounded-lg object-cover ${
                    i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"
                  }`}
                />
              </figure>
            ))}
            <figure>
              <img
                src="/images/spaces/bathroom.jpg"
                alt="Bathroom remodel with tiled shower — Foley Construction project photography"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-2 text-xs text-muted">
                Bathroom remodel.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteShell>
  );
}
