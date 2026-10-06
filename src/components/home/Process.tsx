import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="border-y border-line bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          How a project starts
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A straightforward path from the first call to finished work.
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.n} className="relative">
              <p className="font-display text-4xl text-slate/40">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted">
          Timelines and pricing depend on your house and your project. Call us
          and we will talk through the details.
        </p>
      </div>
    </section>
  );
}
