import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { ServicesCarousel } from "@/components/home/services-carousel";
import { BoilerShowcase } from "@/components/home/boiler-showcase";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { FounderLegacy } from "@/components/home/founder-legacy";
import { ProjectPulse } from "@/components/home/project-pulse";
import { CertificatesStrip } from "@/components/home/certificates-strip";
import { MissionVision } from "@/components/home/mission-vision";
import { CtaBand } from "@/components/home/cta-band";
import { FeaturedProducts } from "@/components/home/featured-products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Industrial Insulation & HVAC in Pakistan | Tayeb & Company" },
      { name: "description", content: "Hot & cold insulation, HVAC ductwork, valve/flange boxes and motor covers for Pakistan's industries. 44+ years, 1000+ projects. Multan-based, nationwide." },
      { property: "og:title", content: "Industrial Insulation & HVAC in Pakistan | Tayeb & Company" },
      { property: "og:description", content: "44+ years of precision thermal insulation and HVAC engineering across Pakistan. 1000+ projects delivered." },
      { property: "og:url", content: "https://tayebcompany.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://tayebcompany.com/og-image.jpg" },
      { name: "twitter:image", content: "https://tayebcompany.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://tayebcompany.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Tayeb & Company Engineering Works",
          image: "https://tayebcompany.com/og-image.jpg",
          url: "https://tayebcompany.com/",
          telephone: "+92-300-6346506",
          email: "info@tayebcompany.com",
          foundingDate: "1983",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bismillah Town, Bahawalpur Bypass Chowk",
            addressLocality: "Multan",
            addressCountry: "PK",
          },
          areaServed: "Pakistan",
          knowsAbout: [
            "Hot Insulation",
            "Cold Insulation",
            "Industrial Duct Work",
            "Valve Box Fabrication",
            "Flange Box Fabrication",
            "Motor Covers",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesCarousel />
      <BoilerShowcase />
      <FeaturedProjects />
      <ProjectPulse />
      <CertificatesStrip />
      <FounderLegacy />
      <MissionVision />
      <CtaBand />
    </>
  );
}
