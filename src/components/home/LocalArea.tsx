import { site } from "@/lib/site";

export function LocalArea() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          Based in Fullerton
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A shop on Orange Avenue, working historic Orange County homes.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Foley Construction lists its office at {site.addressLine1},{" "}
          {site.addressLine2}. The first-party site says the company
          specializes in Fullerton as well as other historic Orange County
          locations.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          One published letter thanks the company for work at the Muckenthaler
          Cultural Center — a Fullerton landmark — which is the kind of local
          thread a homeowner in this city actually recognizes.
        </p>
        <p className="mt-6 text-sm font-medium text-ink">
          {site.addressLine1}
          <br />
          {site.addressLine2}
        </p>
        <a
          className="mt-3 inline-block text-sm font-medium text-slate hover:underline"
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-line bg-cream">
        <img
          src="/images/spaces/family-room.jpg"
          alt="Family room remodel with fireplace and built-ins in a Fullerton home — Foley Construction project photography"
          className="aspect-[4/3] w-full object-cover"
          width={720}
          height={600}
        />
      </div>
    </section>
  );
}
