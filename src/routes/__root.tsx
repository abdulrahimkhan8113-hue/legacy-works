import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LoadingScreen } from "@/components/loading-screen";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-copper">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tayeb & Company — Industrial Insulation & HVAC Since 1983" },
      { name: "description", content: "Pakistan's trusted partner for hot & cold insulation, HVAC ductwork, valve/flange box and motor cover fabrication. Building trust since 1983." },
      { name: "keywords", content: "industrial insulation Pakistan, hot insulation, cold insulation, HVAC ductwork, valve box fabrication, flange box, motor covers, thermal insulation Multan, Tayeb Company" },
      { name: "author", content: "Tayeb & Company Engineering Works" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Tayeb & Company" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:title", content: "Tayeb & Company — Industrial Insulation & HVAC Since 1983" },
      { property: "og:description", content: "44+ years of precision insulation, HVAC and industrial fabrication across Pakistan." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tayeb & Company — Industrial Insulation & HVAC Since 1983" },
      { name: "twitter:description", content: "44+ years of precision insulation, HVAC and industrial fabrication across Pakistan." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tayeb & Company Engineering Works",
          alternateName: "Tayeb & Company",
          url: "https://tayebcompany.com",
          foundingDate: "1983",
          description: "Pakistan's trusted industrial insulation, HVAC and fabrication specialists since 1983.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Multan",
            addressCountry: "PK",
          },
          areaServed: "PK",
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </ThemeProvider>
  );
}
