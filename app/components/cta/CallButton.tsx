"use client";

import { PhoneCall } from "lucide-react";
import { ctaBase, ctaStyles, CTAVariant } from "./styles";

interface CallButtonProps {
  label?: string;
  phone?: string;
  variant?: CTAVariant;
  className?: string;
}

export default function CallButton({
  label = "Call Now",
  phone = "+918826833598",
  variant = "onDark",
  className = "",
}: CallButtonProps) {
  return (
    <a
      href={`tel:${phone}`}
      className={`${ctaBase} ${ctaStyles[variant].call} ${className}`}
    >
      <PhoneCall className="w-4 h-4" />
      {label}
    </a>
  );
}
