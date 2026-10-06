import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-deep">
      <img
        src="/images/kitchens/kitchen-07.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-slate-deep/80" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">
          Start a conversation
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
          Call us about the work you have in mind.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80">
          Call us directly to schedule a consultation. There is no job too
          small.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="light">
            <a href={site.phoneTel}>
              <Phone className="size-4" />
              {site.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-cream/35 text-cream hover:bg-cream/10 hover:text-cream"
          >
            <Link to="/contact">Send a project note</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
