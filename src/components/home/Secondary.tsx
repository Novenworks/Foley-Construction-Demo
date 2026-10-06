import { additionList, remodelList, secondaryCapabilities } from "@/lib/site";

export function Secondary() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Also in the shop
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
            Additions, finishes, and outdoor living.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            We do more than kitchens and baths. No job is too small.
          </p>
          <ul className="mt-6 space-y-4">
            {secondaryCapabilities.map((item) => (
              <li key={item.title}>
                <p className="font-medium text-ink">{item.title}</p>
                <p className="text-sm text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          <div className="rounded-xl border border-line bg-cream p-6">
            <h3 className="font-display text-2xl font-semibold">Remodels</h3>
            <ul className="mt-4 columns-1 space-y-1.5 text-sm text-ink-soft sm:columns-1">
              {remodelList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-cream p-6">
            <h3 className="font-display text-2xl font-semibold">Room additions</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
              {additionList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
