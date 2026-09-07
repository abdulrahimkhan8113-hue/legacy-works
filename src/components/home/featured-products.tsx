import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Package, MessageCircle } from "lucide-react";
import { products, productCategories, type ProductCategory } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";

export function FeaturedProducts() {
  const [filter, setFilter] = useState<ProductCategory | "All">("All");

  const shown = useMemo(
    () =>
      filter === "All"
        ? products.slice(0, 6)
        : products.filter((p) => p.categories.includes(filter)).slice(0, 6),
    [filter],
  );

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-copper)" }}
      />
      <div className="grid-blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">
            <Package className="h-3.5 w-3.5" /> Materials We Supply
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Solutions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Insulation materials, piping solutions and accessories — stocked, specified and
            delivered nationwide from Multan.
          </p>
        </div>

        {/* category filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {(["All", ...productCategories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c as ProductCategory | "All")}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                filter === c
                  ? "border-transparent bg-accent text-accent-foreground"
                  : "border-border bg-card/50 text-muted-foreground hover:text-copper"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass-card group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.tagline}`}
                    loading="lazy"
                    className="img-enhanced h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="gradient-steel flex h-full w-full items-center justify-center">
                    <Package className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    {p.categories[0]}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-copper">{p.tagline}</p>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.overview}</p>

                <div className="mt-5 flex items-center gap-2">
                  <Link
                    to="/products"
                    hash={p.slug}
                    className="btn-outline-cta inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold"
                  >
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={whatsappLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${p.name} on WhatsApp`}
                    className="btn-cta inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="btn-cta inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
          >
            Explore Full Catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
