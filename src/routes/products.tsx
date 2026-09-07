import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  Package,
  Search,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { products, productCategories, type ProductCategory } from "@/data/products";
import { whatsappLink, quoteLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Insulation Products & Materials Catalog | Tayeb & Company" },
      {
        name: "description",
        content:
          "Rockwool, glass wool, ceramic wool, PU/PUR, Thermapore EPS, canvas cloth, aluminium tape, stainless steel banding and FRP cable trays — supplied across Pakistan.",
      },
      { property: "og:title", content: "Insulation Products & Materials Catalog | Tayeb & Company" },
      {
        property: "og:description",
        content:
          "Full catalog of thermal insulation materials, piping solutions and accessories with technical specifications and instant WhatsApp ordering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tayebcompany.com/products" },
      { property: "og:image", content: "https://tayebcompany.com/og-image.jpg" },
      { name: "twitter:image", content: "https://tayebcompany.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://tayebcompany.com/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<ProductCategory | "All">("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [variantIndex, setVariantIndex] = useState<Record<string, number>>({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCat = filter === "All" || p.categories.includes(filter);
      if (!inCat) return false;
      if (!q) return true;
      const haystack = [
        p.name,
        p.tagline,
        p.overview,
        ...p.categories,
        ...p.variants.flatMap((v) => [v.name, v.summary, ...v.applications]),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, filter]);

  return (
    <div className="pb-28 lg:pb-0">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="grid-blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-copper"
          >
            Product Catalog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Insulation Materials, Piping Solutions &amp; Accessories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base"
          >
            Every product below is stocked and supplied with full technical specifications. Tap
            “Order on WhatsApp” for pricing and availability.
          </motion.p>
        </div>
      </section>

      {/* Sticky search + filters */}
      <div className="glass sticky top-16 z-40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex lg:justify-between">
            <div className="relative min-w-0">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, specs or applications…"
                aria-label="Search products"
                className="w-full rounded-full border border-border bg-card/70 py-2 pl-9 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent lg:w-96"
              />
            </div>
            <div className="hidden flex-wrap gap-2 lg:flex">
              {(["All", ...productCategories] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c as ProductCategory | "All")}
                  className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    filter === c
                      ? "border-transparent bg-accent text-accent-foreground"
                      : "border-border bg-card/50 text-muted-foreground hover:text-copper"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="shrink-0 text-xs text-muted-foreground lg:hidden">
              {filtered.length} items
            </span>
          </div>

          <div className="mt-2 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden">
            {(["All", ...productCategories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c as ProductCategory | "All")}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  filter === c
                    ? "border-transparent bg-accent text-accent-foreground"
                    : "border-border bg-card/50 text-muted-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No products match “{query}”. Try a different term.
          </p>
        )}

        <div className="space-y-6">
          {filtered.map((p, i) => {
            const vi = variantIndex[p.slug] ?? 0;
            const variant = p.variants[vi] ?? p.variants[0];
            const expanded = openSlug === p.slug;
            const image = variant.image || p.image;

            return (
              <motion.article
                key={p.slug}
                id={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.05 }}
                className="glass-card scroll-mt-32 overflow-hidden rounded-2xl"
              >
                <div className="grid gap-0 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary md:aspect-auto md:min-h-full">
                    {image ? (
                      <img
                        src={image}
                        alt={`${p.name} — ${variant.name}`}
                        loading="lazy"
                        className="img-enhanced h-full w-full object-cover"
                      />
                    ) : (
                      <div className="gradient-steel flex h-full min-h-48 w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                        <Package className="h-8 w-8" />
                        <span className="text-[11px] uppercase tracking-widest">
                          Image coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap gap-2">
                      {p.categories.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-copper"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <h2 className="mt-3 font-display text-xl font-bold text-foreground sm:text-2xl">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {p.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.overview}
                    </p>

                    {p.variants.length > 1 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.variants.map((v, idx) => (
                          <button
                            key={v.slug}
                            onClick={() =>
                              setVariantIndex((s) => ({ ...s, [p.slug]: idx }))
                            }
                            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                              idx === vi
                                ? "border-transparent bg-accent text-accent-foreground"
                                : "border-border bg-card/50 text-muted-foreground hover:text-copper"
                            }`}
                          >
                            {v.name}
                          </button>
                        ))}
                      </div>
                    )}

                    <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                      {variant.summary}
                    </p>

                    <button
                      onClick={() => setOpenSlug(expanded ? null : p.slug)}
                      aria-expanded={expanded}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-copper"
                    >
                      {expanded ? "Hide specifications" : "View specifications"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expanded && (
                      <div className="mt-5 grid gap-6 lg:grid-cols-2">
                        <div className="min-w-0">
                          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Technical Specifications
                          </h3>
                          <div className="-mx-1 overflow-x-auto">
                            <table className="w-full min-w-[18rem] border-collapse text-sm">
                              <tbody>
                                {variant.specs.map((s) => (
                                  <tr key={s.label} className="border-b border-border/70">
                                    <th
                                      scope="row"
                                      className="w-2/5 py-2 pr-3 text-left align-top font-medium text-muted-foreground"
                                    >
                                      {s.label}
                                    </th>
                                    <td className="py-2 align-top text-foreground">{s.value}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Applications
                          </h3>
                          <ul className="space-y-1.5">
                            {variant.applications.map((a) => (
                              <li key={a} className="flex gap-2 text-sm text-foreground/85">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      <a
                        href={whatsappLink(`${p.name} - ${variant.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                      >
                        <MessageCircle className="h-4 w-4" /> Order on WhatsApp
                      </a>
                      <a
                        href={quoteLink(`${p.name} - ${variant.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-cta inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                      >
                        <FileText className="h-4 w-4" /> Request Quote / Spec Sheet
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card/60 p-6 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold">Need a material not listed here?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            We source and fabricate to specification. Tell us your temperature range, pipe size and
            quantity — we will revert with a complete offer.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("a custom insulation material requirement")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" /> Chat with our team
            </a>
            <Link
              to="/contact"
              className="btn-outline-cta inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl lg:hidden">
        <a
          href={whatsappLink("products from your catalog")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" /> Order / Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
