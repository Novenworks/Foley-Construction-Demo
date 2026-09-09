import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-deep">
      <img
        src="/images/kitchens/hero-kitchen.jpg"
        alt="Remodeled Fullerton kitchen with island, granite counters, and stainless appliances — Foley Construction project photography"
        className="absolute inset-0 h-full w-full object-cover object-[50%_62%]"
        width={864}
        height={563}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/78 via-ink/45 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end gap-6 px-4 py-16 sm:min-h-[38rem] sm:px-6 md:justify-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/75">
          Fullerton, California · Design-Build
        </p>
        <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-5xl md:text-[3.35rem]">
          {site.heroHeadline}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-cream/86 sm:text-lg">
          {site.heroSupport}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" variant="light">
            <Link to="/contact">{site.ctaPrimary}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-cream/35 text-cream hover:bg-cream/10 hover:text-cream">
            <Link to="/work">{site.ctaSecondary}</Link>
          </Button>
        </div>
        <a
          href={site.phoneTel}
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-cream/90 hover:text-cream"
        >
          <Phone className="size-4" />
          {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
