import { Link } from "@tanstack/react-router";
import { kitchenPhotos, livingPhotos } from "@/lib/site";
import { Button } from "@/components/ui/button";

const featured = [
  kitchenPhotos[0],
  kitchenPhotos[1],
  livingPhotos[0],
  kitchenPhotos[2],
  kitchenPhotos[5],
  kitchenPhotos[6],
];

export function WorkShowcase() {
  return (
    <section className="bg-slate-deep py-20 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">
              Real project photography
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Our own projects.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/78">
              Photographs of kitchens, family rooms, and bathrooms from our
              projects.
            </p>
          </div>
          <Button asChild variant="light">
            <Link to="/work">See the full gallery</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {featured.map((photo, i) => (
            <figure
              key={photo.src}
              className={`overflow-hidden rounded-lg bg-ink ${
                i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover ${
                  i === 0 ? "h-full min-h-64 md:min-h-[28rem]" : "aspect-[4/3]"
                }`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
