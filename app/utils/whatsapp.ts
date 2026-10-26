export const WHATSAPP_NUMBER = "918826833598";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Dr. Himanshu Verma, I would like to book a consultation. Could we connect to discuss this?";

export const getWhatsAppLink = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
