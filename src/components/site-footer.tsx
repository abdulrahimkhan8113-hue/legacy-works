import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contact, services } from "@/lib/site-data";
import logo from "@/assets/logo-tayeb.png";
import WhatsappFAB from "@/components/ui/whatsapp-fab";

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
      <path fill="#4285F4" d="M23.5 12.27c0-.86-.08-1.5-.24-2.16H12v3.92h6.6c-.13 1.1-.85 2.76-2.44 3.87l-.02.15 3.54 2.74.25.02c2.25-2.08 3.57-5.14 3.57-8.54z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.78-2.93c-1.01.7-2.37 1.2-4.16 1.2-3.18 0-5.87-2.09-6.83-4.98l-.14.01-3.68 2.85-.05.13C3.27 21.3 7.31 24 12 24z" />
      <path fill="#FBBC05" d="M5.17 14.38A7.39 7.39 0 014.76 12c0-.83.15-1.63.4-2.38l-.01-.16-3.72-2.9-.12.06A11.99 11.99 0 000 12c0 1.94.47 3.77 1.31 5.38l3.86-3z" />
      <path fill="#EB4335" d="M12 4.64c2.26 0 3.78.98 4.65 1.8l3.4-3.32C17.95 1.18 15.24 0 12 0 7.31 0 3.27 2.7 1.31 6.62l3.85 3C6.13 6.73 8.82 4.64 12 4.64z" />
    </svg>
  );
}


export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/40">
      <div className="grid-blueprint absolute inset-0 opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Tayeb & Company" className="h-12 w-12 rounded-md bg-card object-contain p-1 ring-1 ring-border" />
              <div>
                <div className="font-display text-lg font-semibold">Tayeb &amp; Company</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-copper">Est. 1983</div>
              </div>
            </div>
            <p className="mt-6 font-serif-elegant text-lg leading-snug text-foreground/90">
              "{contact.tagline}"
            </p>
            <div className="mt-5 flex items-center gap-2" aria-label="Tayeb & Company social profiles">
              {[
                {
                  href: "https://www.instagram.com/tayebcompany?igsh=YjFwODJpb2VrZ3dn&utm_source=qr",
                  label: "Instagram",
                  Icon: Instagram,
                  background: "linear-gradient(45deg,#F58529 0%,#DD2A7B 45%,#8134AF 75%,#515BD4 100%)",
                  shadow: "0 8px 20px -8px rgba(221,42,123,0.75)",
                },
                {
                  href: "https://www.facebook.com/share/19TbvdWY1H/",
                  label: "Facebook",
                  Icon: Facebook,
                  background: "linear-gradient(180deg,#1877F2 0%,#0C5DD1 100%)",
                  shadow: "0 8px 20px -8px rgba(24,119,242,0.75)",
                },
                {
                  href: "https://share.google/tcGGF6TItuaVMfEwO",
                  label: "Google",
                  Icon: GoogleGlyph,
                  background: "#ffffff",
                  shadow: "0 8px 20px -8px rgba(66,133,244,0.6)",
                },
              ].map(({ href, label, Icon, background, shadow }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={{ background, boxShadow: shadow }}
                  className="grid h-10 w-10 place-items-center rounded-full text-white transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-copper">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-foreground/70 hover:text-foreground">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-copper">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-foreground">About Us</Link></li>
              <li><Link to="/projects" className="text-foreground/70 hover:text-foreground">Projects</Link></li>
              <li><Link to="/certificates" className="text-foreground/70 hover:text-foreground">Achievements</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-copper">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" /><span>{contact.address}</span></li>
              {contact.phones.map((p) => (
                <li key={p} className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" /><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-foreground">{p}</a></li>
              ))}
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" /><a href={`mailto:${contact.email}`} className="break-all hover:text-foreground">{contact.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Tayeb &amp; Company Engineering Works. All rights reserved.</p>
          <p>
            <a
              href="https://www.risesol.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-amber-600 animate-pulse font-bold"
            >
              Developed by RiseSol. Systems
            </a>
          </p>
          <p>A legacy of precision since 1983.</p>
        </div>
      </div>
      <WhatsappFAB />
    </footer>
  );
}
