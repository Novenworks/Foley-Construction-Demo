import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/outreach")({
  component: OutreachPage,
  head: () => ({
    meta: [
      { title: "Outreach brief | Foley Construction (operator only)" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
});

const captures = [
  {
    file: "before-original-desktop.png",
    label: "BEFORE — original site, desktop",
  },
  { file: "after-desktop.png", label: "AFTER — redesign, desktop 1440" },
  { file: "after-mobile.png", label: "AFTER — redesign, mobile ~390" },
  { file: "after-scroll.gif", label: "Scrolling GIF" },
  { file: "after-scroll.mp4", label: "Scrolling MP4" },
];

function OutreachPage() {
  return (
    <div className="min-h-dvh bg-cream text-ink">
      <div className="border-b border-line bg-slate-deep px-4 py-3 text-xs text-cream/80">
        Operator-only. Unlinked from prospect nav, footer, and sitemap. noindex.
      </div>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          Novenworks speculative demo
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
          Foley Construction outreach brief
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          Prospect 06/20 · Fullerton, CA · design-build remodeling. Built as a
          concept. Foley Construction is not a Novenworks client.
        </p>

        <Section title="Business snapshot">
          <Dl
            rows={[
              ["Business", site.name],
              ["Legal name (CSLB)", site.legalName],
              ["Qualifying individual", site.qualifyingIndividual],
              ["Trade", "Design-build remodeling / custom home construction"],
              ["Area", "Fullerton and historic Orange County"],
              ["Phone", site.phoneDisplay],
              ["Address", `${site.addressLine1}, ${site.addressLine2}`],
              ["License", `CSLB #${site.licenseNumber} · ${site.licenseClass} · ${site.licenseStatus}`],
              ["Original site", site.originalUrl],
              ["Contact page", site.originalContactUrl],
              [
                "GitHub",
                "https://github.com/Novenworks/Foley-Construction-Demo",
              ],
              ["Deployed demo", "https://foley-construction-demo.vercel.app"],
            ]}
          />
        </Section>

        <Section title="Agency situation">
          <p>
            The live footer reads “Designed and Maintained by HostingOC.com.”
            HostingOC is an active Orange County / Los Angeles web design and
            hosting firm (hostingoc.com). Do not claim there is no agency. Do
            not attack HostingOC. Do not imply the relationship is defunct.
            The observation is about the current public presentation of Foley
            Construction, not about the vendor.
          </p>
        </Section>

        <Section title="Original-site observations">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              The live site is a fixed 770px table layout with MS Sans Serif,
              Dreamweaver image-swap navigation, and a leftover “0” sitting in
              the homepage markup. It does not reflow on a phone.
            </li>
            <li>
              Visible copy errors: the services filename is{" "}
              <code>sevices.html</code>; “There is no job to small”; “We
              deliver on on schedule.”
            </li>
            <li>
              Kitchen, bath, and general galleries are Flash SWF files. Only{" "}
              <code>kitchen.swf</code> still resolves. <code>bath.swf</code>,{" "}
              <code>general.swf</code>, <code>header.swf</code>, and{" "}
              <code>BeforeAfter.swf</code> return 404, so most of the project
              proof is invisible to a modern browser.
            </li>
            <li>
              A long, specific testimonials page exists, plus real kitchen
              photography — neither is used with any hierarchy on the
              homepage.
            </li>
            <li>
              Contact is phone, fax, and a street address. There is no form,
              no click-to-call on the wordmark, and no license number on the
              public site even though CSLB #518685 is current.
            </li>
          </ol>
        </Section>

        <Section title="Redesign improvements">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Clarity: a single hero statement, service groups that match how
              homeowners decide (kitchen / bath / family room / addition), and
              a visible phone CTA.
            </li>
            <li>
              Trust: CSLB #518685, class, and status on the homepage, with a
              verify link on About. Bonded and insured kept as first-party
              claims supported by the license record.
            </li>
            <li>
              Visual credibility: first-party kitchen and family-room
              photography used large, instead of 141×109 and 190×100 thumbs
              beside italic Times headlines.
            </li>
            <li>
              Mobile usability: fluid layout, 44px tap targets, a working
              menu, and a persistent call button.
            </li>
            <li>
              Conversion: consultation as the primary action, with an honest
              demo form that refuses to pretend it emails the office.
            </li>
          </ol>
        </Section>

        <Section title="Talking points">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              The company already has the ingredients of a credible remodeling
              site — real kitchens, named client letters, a Fullerton address,
              a current Class B license — and almost none of that is
              structured for a phone-using homeowner.
            </li>
            <li>
              The Flash galleries are a concrete, non-insulting problem: the
              kitchen slideshow still contains sixteen project photos that
              nobody can see without extracting the SWF.
            </li>
            <li>
              This is a speculative concept, not a claim that Novenworks was
              hired, and not a claim that HostingOC did anything wrong. The
              pitch is a stronger presentation of a business that already
              exists.
            </li>
          </ol>
        </Section>

        <Section title="Personalization hooks">
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Muckenthaler Cultural Center: a published thank-you from Patricia
              House, Executive Director, for amphitheater cover work. A
              Fullerton civic landmark, not a generic “we love the community”
              line.
            </li>
            <li>
              Scott Foley is addressed by name in multiple first-party
              letters; Tina is thanked for always being on the phone; Mike
              McLean is named as project supervisor. The operation is personal.
            </li>
            <li>
              Klosterman letter mentions a sitting area and deck, and notes
              (on the original site) that the project was featured in the LA
              Times and OC Register — treat that as their testimonial, not as
              a verified current award unless re-checked.
            </li>
          </ul>
        </Section>

        <Section title="What not to say">
          <ul className="list-disc space-y-2 pl-5">
            <li>Do not say “your website sucks,” “ancient,” or insult HostingOC.</li>
            <li>Do not claim Novenworks was hired or that this is the live site.</li>
            <li>Do not claim ownership of Foley photography or the Foley name.</li>
            <li>
              Do not invent ROI, lead lift, SEO rankings, review totals, star
              ratings, project counts, staff size, warranties, financing, or
              “39 years in business.”
            </li>
            <li>
              Do not upgrade “over 22 years” into a founding-year marketing
              line. License first issued 1987 is a CSLB fact; years
              specializing is first-party copy.
            </li>
            <li>
              Do not cite BuildZoom scores, permit valuations, or aggregator
              review counts in the pitch.
            </li>
            <li>
              Do not promise the Flash files can be restored as video without
              Foley supplying masters.
            </li>
          </ul>
        </Section>

        $1
<li>Scott, I made something for Foley Construction</li>
<li>Had an idea for Foley Construction</li>
<li>Scott, I tried something with the Foley Construction site</li>
$2

        $1`Hi Scott,

Quick one. I was looking through the Foley Construction site and had an idea I could not really explain in an email, so I built it.

I focused on the real project work and the finished results.

https://foley-construction-demo.vercel.app

Figured you might want to see what I came up with. If it feels useful, I can show you the thinking behind it.

Vincent
Novenworks`$2

        $1`Hi Scott,

Just bumping this once in case it got buried. I spent some real time on the Foley Construction concept and wanted to make sure you saw it.

https://foley-construction-demo.vercel.app

No worries if the timing is off.

Vincent`$2

        <Section title="Capture package">
          <p className="mb-6 text-sm text-ink-soft">
            Files live at <code>/outreach/…</code> on this demo. They are
            filled in after visual QA.
          </p>
          <div className="space-y-8">
            {captures.map((c) => (
              <figure key={c.file} className="space-y-2">
                <figcaption className="text-sm font-medium">
                  {c.label}{" "}
                  <a
                    className="text-slate underline"
                    href={`/outreach/${c.file}`}
                  >
                    {c.file}
                  </a>
                </figcaption>
                {c.file.endsWith(".mp4") ? (
                  <video
                    className="w-full rounded-md border border-line bg-ink"
                    controls
                    src={`/outreach/${c.file}`}
                  />
                ) : c.file.endsWith(".gif") ? (
                  <img
                    src={`/outreach/${c.file}`}
                    alt={c.label}
                    className="w-full rounded-md border border-line"
                  />
                ) : (
                  <img
                    src={`/outreach/${c.file}`}
                    alt={c.label}
                    className="w-full rounded-md border border-line"
                  />
                )}
              </figure>
            ))}
          </div>
        </Section>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-line pt-8">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

function Dl({ rows }: { rows: Array<[string, string]> }) {
  return (
    <dl className="space-y-2">
      {rows.map(([k, v]) => (
        <div key={k} className="grid gap-1 sm:grid-cols-3">
          <dt className="text-muted">{k}</dt>
          <dd className="sm:col-span-2 text-ink">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
