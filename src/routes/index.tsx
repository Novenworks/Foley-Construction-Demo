import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { Differentiation } from "@/components/home/Differentiation";
import { Process } from "@/components/home/Process";
import { Secondary } from "@/components/home/Secondary";
import { Testimonials } from "@/components/home/Testimonials";
import { LocalArea } from "@/components/home/LocalArea";
import { FinalCta } from "@/components/home/FinalCta";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Foley Construction | Design-Build Remodeling in Fullerton, CA",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <ServiceGrid />
      <WorkShowcase />
      <Differentiation />
      <Process />
      <Secondary />
      <Testimonials />
      <LocalArea />
      <FinalCta />
    </SiteShell>
  );
}
