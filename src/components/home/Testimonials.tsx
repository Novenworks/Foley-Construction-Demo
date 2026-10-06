import { testimonials } from "@/lib/site";

export function Testimonials() {
  const shown = testimonials.slice(0, 4);
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          In their words
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Letters from our clients.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Client letters from the testimonials page on foleyconstruction.com.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {shown.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col justify-between rounded-xl border border-line bg-paper p-6 sm:p-7"
            >
              <p className="font-display text-xl leading-snug text-ink sm:text-[1.35rem]">
                “{t.quote}”
              </p>
              <footer className="mt-6 text-sm font-medium text-ink-soft">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
