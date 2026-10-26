"use client";

import BookButton from "./cta/BookButton";
import CallButton from "./cta/CallButton";
import WhatsAppButton from "./cta/WhatsAppButton";
import { CTAVariant } from "./cta/styles";

export type CTAButtonType = "book" | "call" | "whatsapp";

interface CTAButtonsProps {
  // Which buttons to show, in this order. Defaults to all three.
  buttons?: CTAButtonType[];
  // Required only when "book" is shown
  onBook?: () => void;
  bookLabel?: string;
  callLabel?: string;
  whatsappLabel?: string;
  // Prefilled WhatsApp text; falls back to the generic message
  whatsappMessage?: string;
  variant?: CTAVariant;
  className?: string;
}

export default function CTAButtons({
  buttons = ["book", "call", "whatsapp"],
  onBook,
  bookLabel,
  callLabel,
  whatsappLabel,
  whatsappMessage,
  variant = "onDark",
  className = "",
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${className}`}>
      {buttons.map((type) => {
        if (type === "book" && onBook)
          return (
            <BookButton
              key={type}
              onClick={onBook}
              label={bookLabel}
              variant={variant}
            />
          );
        if (type === "call")
          return <CallButton key={type} label={callLabel} variant={variant} />;
        if (type === "whatsapp")
          return (
            <WhatsAppButton
              key={type}
              label={whatsappLabel}
              message={whatsappMessage}
              variant={variant}
            />
          );
        return null;
      })}
    </div>
  );
}
