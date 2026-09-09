import { site } from "@/lib/site";

const items = [
  { label: "CSLB license", value: `#${site.licenseNumber}` },
  { label: "Classification", value: "Class B" },
  { label: "Status", value: "Current & active" },
  { label: "Coverage", value: "Bonded & insured" },
  { label: "Ownership", value: "Family-owned" },
  { label: "Focus", value: "Fullerton, CA" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Verified credentials"
      className="border-b border-line bg-cream"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.label} className="bg-cream px-4 py-5 sm:px-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {item.label}
            </p>
            <p className="mt-1.5 text-sm font-medium text-ink">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
