// Global WhatsApp business configuration.
// Country code included, no "+" and no spaces.
export const WHATSAPP_PHONE = "923006346506";

export function whatsappLink(subject: string, phone: string = WHATSAPP_PHONE) {
  const message = `Hello! I am interested in ordering/inquiring about: ${subject}. Could you please share pricing and availability details?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function quoteLink(subject: string, phone: string = WHATSAPP_PHONE) {
  const message = `Hello! Please share the spec sheet and a formal quotation for: ${subject}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
