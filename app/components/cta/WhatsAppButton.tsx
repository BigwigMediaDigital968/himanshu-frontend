"use client";

import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../../utils/whatsapp";
import { ctaBase, ctaStyles, CTAVariant } from "./styles";

interface WhatsAppButtonProps {
  label?: string;
  // Prefilled text; falls back to the generic message
  message?: string;
  variant?: CTAVariant;
  className?: string;
}

export default function WhatsAppButton({
  label = "WhatsApp",
  message,
  variant = "onDark",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${ctaBase} ${ctaStyles[variant].whatsapp} ${className}`}
    >
      <FaWhatsapp className="w-4 h-4" />
      {label}
    </a>
  );
}
