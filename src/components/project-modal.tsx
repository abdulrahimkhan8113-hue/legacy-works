import { useEffect } from "react";
import { Calendar, MapPin, X } from "lucide-react";
import type { Project } from "@/lib/site-data";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.removeProperty("pointer-events");
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-deep/85 px-3 py-4 backdrop-blur-sm sm:px-6" role="presentation" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative grid max-h-[90dvh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border/70 bg-card shadow-elevated md:grid-cols-2"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-copper/40 bg-background/90 text-copper shadow-elevated transition hover:bg-secondary"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-[240px] min-w-0 bg-secondary/20 sm:h-[320px] md:h-auto md:min-h-[420px]">
          <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        </div>

        <div className="min-w-0 space-y-5 overflow-y-auto p-5 pt-12 sm:p-8 sm:pt-12">
          <header className="space-y-2 text-left">
            <div className="inline-flex max-w-full items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-copper">
              <MapPin className="h-3.5 w-3.5 shrink-0" /> <span className="truncate">{project.city}</span>
            </div>
            <h2 id="project-modal-title" className="break-words font-display text-xl font-semibold leading-tight text-foreground sm:text-2xl">
              {project.title}
            </h2>
            {project.year && (
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-copper">
                <Calendar className="h-3.5 w-3.5 shrink-0" /> {project.year}
              </div>
            )}
          </header>

          <p className="break-words text-sm leading-relaxed text-foreground/85">
            {project.description ??
              "A representative deployment of the Tayeb Standard — insulation, ductwork and HVAC engineering executed end-to-end with our in-house fabrication and field teams."}
          </p>

          <div className="rounded-xl border border-copper/20 bg-secondary/20 p-4 text-xs leading-relaxed text-foreground/80 sm:text-sm">
            Part of 1000+ industrial projects delivered nationwide since 1983 — engineered, installed and signed off to the Tayeb Standard.
          </div>
        </div>
      </div>
    </div>
  );
}