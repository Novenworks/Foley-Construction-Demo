import { Link } from "@tanstack/react-router";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-slate-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-semibold">Foley Construction</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
            Family-owned design-build remodeling for Fullerton and historic
            Orange County homes. Licensed, bonded, and insured.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/55">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/55">
            Contact
          </p>
          <p className="mt-3 text-sm">
            <a className="hover:underline" href={site.phoneTel}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-sm text-cream/80">
            {site.addressLine1}
            <br />
            {site.addressLine2}
          </p>
          <p className="mt-3 text-xs text-cream/60">
            CSLB #{site.licenseNumber} · {site.licenseClass}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© Foley Construction. All rights reserved.</p>
          <p>Marks and project photography remain property of their owners.</p>
        </div>
      </div>
    </footer>
  );
}
