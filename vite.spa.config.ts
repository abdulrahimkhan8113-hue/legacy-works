/**
 * Pure SPA Vite config for static deployment (Vercel, Netlify, etc.)
 *
 * This config intentionally does NOT use @lovable.dev/vite-tanstack-config
 * or the tanstackStart() plugin — both are SSR-oriented and require
 * window.$_TSR hydration data on the client, which causes a blank screen
 * when deploying as a static SPA.
 *
 * Instead, we build a standard client-only React SPA with TanStack Router
 * (not TanStack Start) for routing.
 *
 * We use `tanstackRouterGenerator` (not `TanStackRouterVite`) because the
 * full TanStackRouterVite plugin in v1.16x triggers a multi-environment
 * (client + SSR) build that breaks static deploys.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouterGenerator } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    // Only generate the route tree — does NOT add SSR/multi-env build setup
    tanstackRouterGenerator({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      quoteStyle: "double",
      semicolons: true,
    }),
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
  ],
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    manifest: true,
  },
  css: {
    transformer: "lightningcss",
  },
  server: {
    host: "::",
    port: 8080,
  },
});
