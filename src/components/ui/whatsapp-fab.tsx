import React, { useEffect, useRef, useState } from "react";

const WHATSAPP_GREEN = "#25D366";
const WHATSAPP_HEADER = "#25D366"; // header same green
const WHATSAPP_TEXT_BG = "#111827"; // dark bubble background similar to screenshot

export function WhatsappFAB({ phone = "03006346506", initialMessage = "👋 Hi Tayeb & Company! I want to inquire about a project. OR Type your message here." }: { phone?: string; initialMessage?: string }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(initialMessage);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const cleaned = phone.replace(/[^0-9]/g, "").replace(/^0/, "");

  function send() {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/92${cleaned}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  const callHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <div ref={wrapperRef} className="fixed right-5 bottom-5 z-50 flex items-end">
      {/* Popup container */}
      <div className={`mr-3 transition-all ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        <div className="rounded-lg overflow-hidden shadow-2xl" style={{ width: 'min(320px, calc(100vw - 48px))' }}>
          {/* Header */}
          <div style={{ background: WHATSAPP_HEADER }} className="px-3 py-2 flex items-center gap-3">
            <div style={{ width: 36, height: 36, borderRadius: 9999, background: "rgba(255,255,255,0.12)", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* official WhatsApp icon (white) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M20.52 3.48A11.77 11.77 0 0012 .7 11.7 11.7 0 003.5 3.5 11.77 11.77 0 00.7 12c0 2.1.55 4.12 1.6 5.9L.5 23.5l5.05-1.33A11.78 11.78 0 0012 23.3c6.5 0 11.8-5.3 11.8-11.8 0-3.16-1.23-6.12-3.48-8.02z" fill="#ffffff" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Tayeb & Company</div>
              <div className="text-[11px] text-white/90">Typically replies within minutes</div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/90">✕</button>
          </div>

          {/* Body */}
          <div style={{ background: '#0b1220' }} className="p-3">
            <div style={{ background: WHATSAPP_TEXT_BG }} className="p-3 rounded-md text-sm text-white leading-relaxed">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-transparent resize-none outline-none text-sm"
                aria-label="Message"
                style={{ color: 'white' }}
              />
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <button onClick={send} className="flex items-center justify-center gap-2 rounded-md px-3 py-2" style={{ background: WHATSAPP_GREEN, color: '#fff', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.77 11.77 0 0012 .7 11.7 11.7 0 003.5 3.5 11.77 11.77 0 00.7 12c0 2.1.55 4.12 1.6 5.9L.5 23.5l5.05-1.33A11.78 11.78 0 0012 23.3c6.5 0 11.8-5.3 11.8-11.8 0-3.16-1.23-6.12-3.48-8.02z" fill="#fff"/></svg>
                Chat on WhatsApp
              </button>

              <a href={callHref} className="flex items-center justify-center gap-2 rounded-md px-3 py-2" style={{ background: '#fff', color: '#111827', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.05l-2.21 2.16z" fill="#111827"/></svg>
                Call +92 {cleaned}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating FAB */}
  <button onClick={() => setOpen((o) => !o)} aria-label="Open WhatsApp chat" className="rounded-full p-3 shadow-lg" style={{ width: 56, height: 56, background: WHATSAPP_GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M20.52 3.48A11.77 11.77 0 0012 .7 11.7 11.7 0 003.5 3.5 11.77 11.77 0 00.7 12c0 2.1.55 4.12 1.6 5.9L.5 23.5l5.05-1.33A11.78 11.78 0 0012 23.3c6.5 0 11.8-5.3 11.8-11.8 0-3.16-1.23-6.12-3.48-8.02z" fill="#fff" />
        </svg>
      </button>
    </div>
  );
}

export default WhatsappFAB;
