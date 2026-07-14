import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { projects, type Project } from "@/lib/site-data";
import { ProjectModal } from "@/components/project-modal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Industrial Projects Portfolio — Tayeb & Company" },
      { name: "description", content: "Selected industrial insulation, HVAC and fabrication projects delivered across 80+ Pakistani cities by Tayeb & Company." },
      { property: "og:title", content: "Industrial Projects Portfolio — Tayeb & Company" },
      { property: "og:description", content: "A nationwide portfolio of thermal insulation and HVAC engineering deployments." },
      { property: "og:url", content: "https://tayebcompany.com/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://tayebcompany.com/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div className="pt-28 pb-24 sm:pt-32 w-full overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-copper">
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="mt-6 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">Selected Work</div>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            44+ years, one nation, countless plants.
          </h1>
          <p className="mt-5 text-base text-foreground/80 sm:text-lg">
            A growing portfolio of thermal insulation, ductwork and HVAC engineering across Pakistan's industrial corridors. Click any project for details.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:border-copper/50 hover:shadow-glow [touch-action:manipulation] w-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden w-full">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-copper/40 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-copper backdrop-blur">
                  {p.city}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold sm:text-lg line-clamp-1">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Engineered &amp; installed by the Tayeb team.
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}

