export const WHATSAPP_NUMBER = "5511957089927";
export const PHONE_DISPLAY = "(11) 95708-9927";

export function whatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
