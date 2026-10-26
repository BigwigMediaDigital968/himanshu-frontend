// onDark: for teal backgrounds, onLight: for white/light backgrounds
export type CTAVariant = "onDark" | "onLight";

export const ctaBase =
  "px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 text-center text-sm md:text-base flex items-center justify-center gap-2";

export const ctaStyles: Record<
  CTAVariant,
  { book: string; call: string; whatsapp: string }
> = {
  onDark: {
    book: "bg-white text-teal-900 hover:bg-teal-50",
    call: "bg-teal-800 text-white hover:bg-teal-700",
    whatsapp: "bg-emerald-500 text-white hover:bg-emerald-600",
  },
  onLight: {
    book: "bg-[var(--med-primary)] text-white hover:opacity-90",
    call: "border border-[var(--med-primary)] text-[var(--med-primary)] hover:bg-[var(--med-primary)] hover:text-white",
    whatsapp: "bg-emerald-500 text-white hover:bg-emerald-600",
  },
};
