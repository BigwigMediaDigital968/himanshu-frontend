"use client";

import { ctaBase, ctaStyles, CTAVariant } from "./styles";

interface BookButtonProps {
  onClick: () => void;
  label?: string;
  variant?: CTAVariant;
  className?: string;
}

export default function BookButton({
  onClick,
  label = "Book a Consultation",
  variant = "onDark",
  className = "",
}: BookButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${ctaBase} ${ctaStyles[variant].book} cursor-pointer ${className}`}
    >
      📅 {label}
    </button>
  );
}
