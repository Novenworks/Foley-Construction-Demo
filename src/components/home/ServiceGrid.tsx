import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";

export function ServiceGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          What we build
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Remodeling work, grouped the way homeowners decide.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          We are a full-service design-build company for custom home
          remodeling: kitchens, bathrooms, family rooms, and larger additions.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const to = service.href.startsWith("/work") ? "/work" : "/services";
          const hash = service.href.split("#")[1];
          const isLowRes = service.slug === "bathrooms";
          return (
            <Link
              key={service.slug}
              to={to}
              hash={hash}
              className={
                isLowRes
                  ? "group flex min-h-72 flex-col overflow-hidden rounded-xl border border-line bg-cream"
                  : "group relative isolate min-h-72 overflow-hidden rounded-xl bg-slate-deep"
              }
            >
              {isLowRes ? (
                <>
                  <div className="flex flex-1 items-center justify-center bg-secondary p-6">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="max-h-40 w-auto rounded-md object-contain shadow-soft"
                      width={190}
                      height={100}
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-3xl font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                      {service.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/35 to-ink/10" />
                  <div className="relative flex h-full min-h-72 flex-col justify-end p-6 sm:p-7">
                    <h3 className="font-display text-3xl font-semibold text-cream">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/85">
                      {service.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cream">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
