"use client";

import CTAButtons, { CTAButtonType } from "./CTAButtons";

interface InlineCTAProps {
  title: string;
  subtitle: string;
  button: string;
  onBook: () => void;
  whatsappMessage?: string;
  buttons?: CTAButtonType[];
}

export default function InlineCTA({
  title,
  subtitle,
  button,
  onBook,
  whatsappMessage,
  buttons,
}: InlineCTAProps) {
  return (
    <div className="my-10 rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6 md:p-8 flex flex-col gap-5">
      <div>
        <p className="text-lg md:text-xl font-bold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>
      <CTAButtons
        variant="onLight"
        buttons={buttons}
        onBook={onBook}
        bookLabel={button}
        whatsappMessage={whatsappMessage}
      />
    </div>
  );
}
