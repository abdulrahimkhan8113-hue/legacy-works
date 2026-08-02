const WHATSAPP_GREEN = "#25D366";

export function WhatsappFAB({ phone = "03006346506" }: { phone?: string }) {
  const cleaned = phone.replace(/[^0-9]/g, "").replace(/^0/, "");
  const whatsappHref = `https://wa.me/92${cleaned}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] sm:bottom-5 sm:right-5">
      <div className="relative">
        <span aria-hidden className="pointer-events-none absolute inset-0 animate-ping rounded-full" style={{ background: WHATSAPP_GREEN, opacity: 0.35 }} />
        <span aria-hidden className="pointer-events-none absolute inset-0 animate-ping rounded-full" style={{ background: WHATSAPP_GREEN, opacity: 0.25, animationDelay: "0.6s" }} />
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Tayeb & Company on WhatsApp"
          className="relative shrink-0 rounded-full p-3 shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-90 hover:shadow-2xl"
          style={{ width: 56, height: 56, background: WHATSAPP_GREEN, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20.52 3.48A11.77 11.77 0 0012 .7 11.7 11.7 0 003.5 3.5 11.77 11.77 0 00.7 12c0 2.1.55 4.12 1.6 5.9L.5 23.5l5.05-1.33A11.78 11.78 0 0012 23.3c6.5 0 11.8-5.3 11.8-11.8 0-3.16-1.23-6.12-3.48-8.02z" fill="#fff" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default WhatsappFAB;
