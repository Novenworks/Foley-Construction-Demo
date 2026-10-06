/** Canonical first-party + CSLB facts. Do not invent numbers, awards, or ratings. */

export const site = {
  name: "Foley Construction",
  legalName: "Scott F Foley Construction Inc",
  tagline: "Design-Build Remodeling in Fullerton",
  heroHeadline: "Thoughtful Remodeling for Fullerton Homes",
  heroSupport:
    "We bring more than two decades of custom remodeling experience to kitchens, bathrooms, family spaces, and larger home projects across Fullerton and Orange County.",
  phoneDisplay: "(714) 879-4618",
  phoneTel: "tel:+17148794618",
  faxDisplay: "(714) 879-4539",
  addressLine1: "205 N. Orange Ave",
  addressLine2: "Fullerton, CA 92833",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=205+N+Orange+Ave+Fullerton+CA+92833",
  originalUrl: "https://www.foleyconstruction.com/",
  originalContactUrl: "https://www.foleyconstruction.com/contact.html",
  licenseNumber: "518685",
  licenseClass: "B — General Building",
  licenseStatus: "Current and active",
  licenseIssued: "October 5, 1987",
  licenseExpires: "March 31, 2028",
  licenseUrl: "https://cslb.ca.gov/518685",
  qualifyingIndividual: "Scott Fredrick Foley",
  yearsCopy: "over 22 years",
  area: "Fullerton and historic Orange County locations",
  ctaPrimary: "Schedule a Consultation",
  ctaSecondary: "View Our Work",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "kitchens",
    title: "Kitchens",
    summary:
      "Custom kitchen remodels, including lighting and tile, granite, and solid-surface installations.",
    href: "/work#kitchens",
    image: "/images/kitchens/hero-kitchen.jpg",
    imageAlt: "Remodeled Fullerton kitchen with island, granite counters, and stainless appliances — Foley Construction project photography",
  },
  {
    slug: "bathrooms",
    title: "Bathrooms",
    summary:
      "Bathroom remodels, including master baths and master suites.",
    href: "/services#bathrooms",
    image: "/images/spaces/bathroom.jpg",
    imageAlt: "Bathroom remodel with tiled shower and wood vanity — Foley Construction project photography",
  },
  {
    slug: "family-rooms",
    title: "Family rooms",
    summary:
      "Family room and den remodels and additions.",
    href: "/work#living",
    image: "/images/spaces/family-room.jpg",
    imageAlt: "Finished family room with fireplace, built-ins, and wood floors — Foley Construction project photography",
  },
  {
    slug: "additions",
    title: "Room additions",
    summary:
      "Second stories, garages, guest rooms, offices, sun rooms, porches, and other additions.",
    href: "/services#additions",
    image: "/images/kitchens/kitchen-03.jpg",
    imageAlt: "Dining and living space connected to a remodeled kitchen — Foley Construction project photography",
  },
] as const;

export const remodelList = [
  "Whole house",
  "Kitchen",
  "Bathroom",
  "Bedroom",
  "Laundry room",
  "Lighting",
  "Ceilings and soffits",
  "Tile, granite, and solid-surface installations",
] as const;

export const additionList = [
  "Second story",
  "Garages",
  "Mother-in-law room",
  "Family room / den",
  "Kitchen",
  "Master suite",
  "Bedroom",
  "Bathroom",
  "Office",
  "Guest room",
  "Garden room",
  "Dining room",
  "Sun room",
  "Porches",
] as const;

export const secondaryCapabilities = [
  { title: "Patios and decks", body: "Outdoor living spaces as part of our design-build services." },
  { title: "Lighting and interiors", body: "Lighting, ceilings, and soffits as part of our remodel work." },
  { title: "Finish installations", body: "Tile, granite, and solid-surface material installations." },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "Call us to talk through the remodeling work you have in mind. We schedule a consultation about your project.",
  },
  {
    n: "02",
    title: "Design-build",
    body: "We are a design-build company: design and construction with one team.",
  },
  {
    n: "03",
    title: "Build with care",
    body: "Our family-owned crew works on Fullerton and historic Orange County homes, with an emphasis on workmanship and staying on schedule.",
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  note?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I just wanted to officially thank you for a job very well done. We are enjoying our new sitting area and deck more and more every day, and sing your praises to anyone who will listen. You did a great job, Scott, and we thoroughly enjoyed working with you and your crew.",
    name: "Mr. and Mrs. Klosterman",
    note: "First-party testimonial on foleyconstruction.com. The original note mentions the project was featured in the LA Times and Orange County Register; that press placement has not been independently re-verified here.",
  },
  {
    quote:
      "We are extremely pleased with the quality and craftsmanship of the project. The crew and subcontractors were all very nice and true experts. Thank you for the great job!",
    name: "Mr. and Mrs. Hobbick",
  },
  {
    quote:
      "I have always heard horror stories about construction projects. None of them came true on my project. Your staff was fabulous. They showed up for work every day, were polite and professional, and did a wonderful job. The job was finished on time and came out better than I could have hoped for.",
    name: "Lorraine Jones",
  },
  {
    quote:
      "Once again Foley Construction has outdone itself. The master bathroom remodel was wonderful and surprisingly painless for such a project. Mike, Kevin, Dave, John and all of your team of subcontractors were respectful of our time and our home.",
    name: "Chris Brown",
  },
  {
    quote:
      "We felt oddly a little sad when everyone had finished and left for good. That’s how much everyone made the construction process painless and ever enjoyable. We are so pleased with the finished product. You really paid better attention to detail than we did. The framing, plumbing, roofing, electrical, tile, finish carpentry are all excellent.",
    name: "Mr. and Mrs. Bradbury",
  },
  {
    quote:
      "Once again you and your crew have met all of our expectations and have done an excellent job on our kitchen upgrade. Over the past 10 or more years you have made improvements to our home in a professional and friendly manner.",
    name: "Pete and Anne Peterson",
  },
];

export const kitchenPhotos = [
  { src: "/images/kitchens/hero-kitchen.jpg", alt: "Kitchen remodel with island, granite counters, and stainless range — Foley Construction", featured: true },
  { src: "/images/kitchens/kitchen-07.jpg", alt: "White kitchen with island seating and pendant lights — Foley Construction" },
  { src: "/images/kitchens/kitchen-09.jpg", alt: "Bright kitchen with dark counters and wood floors — Foley Construction" },
  { src: "/images/kitchens/kitchen-01.jpg", alt: "Kitchen island with granite and adjacent dining room — Foley Construction" },
  { src: "/images/kitchens/kitchen-02.jpg", alt: "Kitchen range wall with tiled backsplash — Foley Construction" },
  { src: "/images/kitchens/kitchen-12.jpg", alt: "Kitchen with wood cabinets and granite counters — Foley Construction" },
  { src: "/images/kitchens/kitchen-14.jpg", alt: "White kitchen with round dining table — Foley Construction" },
  { src: "/images/kitchens/kitchen-05.jpg", alt: "Compact U-shaped kitchen remodel — Foley Construction" },
  { src: "/images/kitchens/kitchen-08.jpg", alt: "Kitchen with stainless appliances and tile backsplash — Foley Construction" },
  { src: "/images/kitchens/kitchen-11.jpg", alt: "Kitchen island with stools and pendant lighting — Foley Construction" },
  { src: "/images/kitchens/kitchen-13.jpg", alt: "Kitchen island with granite and pendant lights — Foley Construction" },
  { src: "/images/kitchens/kitchen-16.jpg", alt: "Breakfast area adjoining a remodeled kitchen — Foley Construction" },
] as const;

export const livingPhotos = [
  { src: "/images/spaces/family-room.jpg", alt: "Family room with fireplace, built-in cabinetry, and wood floors — Foley Construction", featured: true },
  { src: "/images/kitchens/kitchen-03.jpg", alt: "Dining room open to a remodeled kitchen — Foley Construction" },
  { src: "/images/kitchens/kitchen-04.jpg", alt: "Dining space connected to kitchen remodel — Foley Construction" },
  { src: "/images/spaces/family-room-alt.jpg", alt: "Family living space with fireplace — Foley Construction" },
] as const;
