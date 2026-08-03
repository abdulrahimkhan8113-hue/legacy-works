#!/usr/bin/env node
/**
 * Postbuild: generate a static SPA index.html in the built client output so the app
 * can be deployed to static hosts without relying on the SSR worker output.
 * The client bundle hydrates from scratch and router navigation works via
 * the platform rewrite fallback.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");
const candidateClientDirs = [distDir, join(distDir, "client")];
const clientDir = candidateClientDirs.find((dir) =>
  existsSync(join(dir, "assets")) && existsSync(join(dir, ".vite", "manifest.json")),
);

if (!clientDir) {
  console.error("[spa-html] built assets or manifest not found — run `vite build --config vite.spa.config.ts` first.");
  process.exit(1);
}

const manifestPath = join(clientDir, ".vite", "manifest.json");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const manifestEntries = Object.values(manifest);
const entry = manifestEntries.find((item) => item && item.isEntry && typeof item.file === "string");
const entryJs = entry?.file;
const entryCss = Array.isArray(entry?.css) ? entry.css[0] : undefined;

if (!entryJs) {
  console.error(`[spa-html] Could not find a client entry in ${manifestPath}`);
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tayeb &amp; Company — A Legacy of Precision Since 1983</title>
    <meta name="description" content="Pakistan's leading partner in thermal insulation, HVAC engineering, and industrial fabrication. Established 1983." />
    <meta property="og:title" content="Tayeb & Company — Industrial Engineering Legacy" />
    <meta property="og:description" content="44+ years of precision engineering in thermal insulation, HVAC and industrial fabrication across Pakistan." />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="https://tayebcompany.com/" />
    <meta property="og:url" content="https://tayebcompany.com/" />
    <meta property="og:site_name" content="Tayeb & Company" />
    <meta name="robots" content="index, follow" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <meta property="og:image" content="https://tayebcompany.com/og-image.jpg" />
    <meta name="twitter:image" content="https://tayebcompany.com/og-image.jpg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&display=swap" />
${entryCss ? `    <link rel="stylesheet" href="/${entryCss}" />\n` : ""}    <script type="module" crossorigin src="/${entryJs}"></script>
  </head>
  <body>
    <div id="root">
      <div id="prerender-seo" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0;">
        <header><a href="/">Tayeb &amp; Company</a></header>
        <main>
          <h1>Tayeb &amp; Company — Industrial Insulation &amp; HVAC Since 1983</h1>
          <p>Pakistan's trusted partner for hot insulation, cold insulation, industrial duct work, valve box fabrication, flange box fabrication and motor covers.</p>
          <p>Building trust since 1983 with more than 1,000 industrial projects delivered across Pakistan.</p>
          <nav aria-label="Services">
            <a href="/about">About Us</a> · <a href="/services">Services</a> · <a href="/projects">Projects</a> · <a href="/certificates">Achievements</a> · <a href="/contact">Contact</a>
          </nav>
        </main>
      </div>
    </div>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html, "utf8");
writeFileSync(join(clientDir, "404.html"), html, "utf8");
writeFileSync(join(clientDir, ".nojekyll"), "", "utf8");
writeFileSync(join(clientDir, "CNAME"), "tayebcompany.com\n", "utf8");
console.log(`[spa-html] Wrote ${join(clientDir, "index.html")} (entry=${entryJs}${entryCss ? `, css=${entryCss}` : ""})`);

// Copy public/ assets that the build may not auto-copy (defensive)
const publicDir = resolve(__dirname, "..", "public");
if (existsSync(publicDir)) {
  for (const f of readdirSync(publicDir)) {
    const src = join(publicDir, f);
    const dst = join(clientDir, f);
    if (!existsSync(dst)) {
      try { copyFileSync(src, dst); console.log(`[spa-html] copied public/${f}`); } catch {}
    }
  }
}
