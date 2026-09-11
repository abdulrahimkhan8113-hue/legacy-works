#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const indexPath = resolve(distDir, "index.html");

function fail(message) {
  console.error(`[verify-static-build] ${message}`);
  process.exit(1);
}

if (!existsSync(indexPath)) fail("dist/index.html is missing");

const html = readFileSync(indexPath, "utf8");
if (/src=["']\/src\//.test(html)) {
  fail("index.html still references source files instead of compiled assets");
}

const assetPaths = [...html.matchAll(/(?:src|href)=["']\/?(assets\/[^"']+)["']/g)].map(
  ([, assetPath]) => assetPath,
);

if (!assetPaths.some((assetPath) => assetPath.endsWith(".js"))) {
  fail("index.html has no compiled JavaScript entry");
}

for (const assetPath of assetPaths) {
  const filePath = resolve(distDir, assetPath);
  if (!filePath.startsWith(`${distDir}/`) || !existsSync(filePath)) {
    fail(`referenced asset is missing: ${assetPath}`);
  }
}

for (const requiredFile of ["404.html", "CNAME", ".nojekyll"]) {
  if (!existsSync(resolve(distDir, requiredFile))) fail(`${requiredFile} is missing`);
}

console.log(`[verify-static-build] Verified ${assetPaths.length} compiled assets and SPA fallback files.`);