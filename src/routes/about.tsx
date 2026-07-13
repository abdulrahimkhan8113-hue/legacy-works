import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileText, Landmark, Hash, Calendar, Building2 } from "lucide-react";
import founder from "@/assets/founder-zulfiqar.png";
import ceo from "@/assets/ceo-shamas.png";
import gm from "@/assets/gm-nasir.png";
import { team, governmentRegistration } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tayeb & Company" },
      { name: "description", content: "The story, leadership and standards behind Tayeb & Company — building trust since 1983." },
      { property: "og:title", content: "About Tayeb & Company" },
      { property: "og:description", content: "Founded 1983. The leadership and legacy behind Pakistan's industrial insulation specialists." },
    ],
  }),
  component: AboutPage,
});

const portraits: Record<string, string> = {
  "Zulfiqar Ali Qureshi (Late)": founder,
  "Shamas Tayeb": ceo,
  "Muhammad Nasir Farooq": gm,
};

function AboutPage() {
  const founderMember = team.find((m) => m.role === "Founder");
  const ceoMember = team.find((m) => m.role === "Chief Executive Officer");
  const gmMember = team.find((m) => m.role === "General Manager");

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">Our Story</div>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Delivering Industrial Solutions Since 1983.
          </h1>
          <div className="mt-6 space-y-5 text-base text-foreground/80 sm:text-lg">
            <p>
              Since 1983, Tayeb &amp; Company has been committed to one purpose: providing reliable, high-performance insulation and fabrication solutions for Pakistan's industries.
            </p>
            <p>
              We understand that every industrial facility depends on efficiency, safety, and uninterrupted operations. That's why we deliver solutions that minimize energy loss, improve system performance, and ensure long-term reliability. Our work goes beyond insulation—we help industries operate smarter, safer, and more efficiently.
            </p>
            <p>
              Over 44+ years, Tayeb &amp; Company has earned the trust of industrial clients by consistently delivering quality workmanship, technical expertise, and dependable service. From Hot Insulation and Cold Insulation to Industrial Duct Work, Valve Box, Flange Box, and Motor Cover Fabrication, every solution is engineered to meet the highest standards of performance.
            </p>
            <p>
              With 1,000+ successfully completed projects across 80+ cities in Pakistan, we continue to support industries including power, cement, fertilizer, chemical, textile, food processing, pharmaceuticals, and manufacturing.
            </p>
            <p>
              At Tayeb &amp; Company, we don't just complete projects—we build lasting partnerships by providing solutions that improve productivity, reduce energy costs, and create long-term value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / PROMISE */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              label: "Our Mission",
              title: "Pakistan's most trusted partner.",
              body: "To be Pakistan's most trusted industrial insulation and fabrication partner by delivering innovative, reliable, and cost-effective solutions that enhance efficiency, safety, and sustainability.",
            },
            {
              label: "Our Vision",
              title: "The benchmark for excellence.",
              body: "To set the benchmark for excellence in industrial insulation and fabrication, empowering industries with world-class solutions that drive progress and long-term success.",
            },
            {
              label: "Our Promise",
              title: "Your Industry. Our Expertise.",
              body: "Reliable Solutions Since 1983.",
            },
          ].map((b) => (
            <article
              key={b.label}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-elevated"
            >
              <div className="absolute inset-0 grid-blueprint opacity-30" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">{b.label}</div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-tight">{b.title}</h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{b.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* FOUNDER — featured */}
      {founderMember && (
        <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">Our Founder</div>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">The vision that began it all.</h2>

          <article className="mt-10 overflow-hidden rounded-3xl border border-copper/30 bg-card shadow-elevated">
            <div className="grid gap-0 lg:grid-cols-[minmax(280px,420px)_1fr]">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary lg:aspect-auto">
                <img
                  src={portraits[founderMember.name]}
                  alt={founderMember.name}
                  className="img-enhanced h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <div className="text-[10px] uppercase tracking-[0.3em] text-copper">{founderMember.role}</div>
                <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{founderMember.name}</h3>
                <p className="mt-5 text-base leading-relaxed text-foreground/80">{founderMember.bio}</p>
                <blockquote className="mt-6 border-l-2 border-copper/60 pl-5 font-serif-elegant text-lg leading-relaxed text-foreground/85">
                  &ldquo;Precision is not a technique — it is a promise we make to every joint, every flange, every plant we serve.&rdquo;
                </blockquote>
                <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Founder &middot; 1983
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* CEO + MD / GM */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">Leadership Today</div>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">Stewards of the standard.</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[ceoMember, gmMember].filter(Boolean).map((m) => (
            <article key={m!.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-elevated transition-all hover:border-copper/50 hover:shadow-glow">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary sm:aspect-[4/5]">
                <img
                  src={portraits[m!.name]}
                  alt={m!.name}
                  className="img-enhanced h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-[10px] uppercase tracking-[0.3em] text-copper">
                  {m!.role === "General Manager" ? "Managing Director" : m!.role}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold">{m!.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{m!.bio}</p>
                <blockquote className="mt-5 border-l-2 border-copper/50 pl-4 text-sm italic text-foreground/80">
                  {m!.role === "Chief Executive Officer"
                    ? "“We carry 44+ years of trust into every new project — modernised, but never compromised.”"
                    : "“Our field teams are the front line of the Tayeb Standard — discipline, every day, on every site.”"}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GOVERNMENT / TAX REGISTRATION */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">Government &amp; Taxation</div>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">Registered, compliant, verifiable.</h2>
        <p className="mt-4 max-w-3xl text-foreground/75">
          Tayeb &amp; Company is a registered taxpayer with the Federal Board of Revenue (FBR), Pakistan — full compliance documentation is available for review.
        </p>

        <article className="mt-8 overflow-hidden rounded-3xl border border-copper/30 bg-card shadow-elevated">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-copper">
              <ShieldCheck className="h-3.5 w-3.5" /> Verified Registration
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              {governmentRegistration.title}
            </h3>
            <div className="mt-2 text-sm text-foreground/70">{governmentRegistration.authority}</div>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <Detail icon={Hash} label="License / NTN" value={governmentRegistration.ntn} />
              <Detail icon={Calendar} label="Date of Registration" value={governmentRegistration.registrationDate} />
              <Detail icon={Landmark} label="Tax Office" value={governmentRegistration.taxOffice} />
              <Detail icon={Building2} label="Registered Name" value={governmentRegistration.registeredName} />
            </dl>

            <div className="mt-5 rounded-xl border border-copper/25 bg-secondary/40 p-4 text-xs leading-relaxed text-foreground/80 sm:text-sm">
              Issued under {governmentRegistration.section}.
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={governmentRegistration.image}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                <FileText className="h-4 w-4" /> View PDF Certificate
              </a>
              <a
                href={governmentRegistration.image}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground/80 hover:border-copper/60 hover:text-copper"
              >
                Download
              </a>
            </div>
          </div>
        </article>
      </section>


      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-copper/30 bg-card p-10 shadow-elevated sm:p-14">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">The Tayeb Standard</div>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">Quality that never compromises, no matter the scale.</h2>
          <p className="mt-6 max-w-3xl text-foreground/75 leading-relaxed">
            From a single valve box in a textile plant to refinery-wide insulation contracts, the Tayeb method is the same: rigorous specification, uncompromising material selection, and craftsmanship that survives decades of thermal cycling.
          </p>
        </div>
      </section>
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
        <div className="mt-1 break-words text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
