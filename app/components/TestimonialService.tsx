"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "../data/testimonialData";

type Props = {
  testimonials: Testimonial[];
};
export default function TestimonialsServices({ testimonials }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    /* Added overflow-x-hidden to prevent any potential leaks */
    <section className="py-12 bg-[var(--med-light)] rounded-3xl border border-[var(--med-border)] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Patient Stories
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--med-text)]">
            What Our Patients Say
          </h2>
        </div>

        <div className="relative group px-2 md:px-12 max-w-[320px] md:max-w-full">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex">
              {testimonials.map((t) => (
                <div key={t.id} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-white border border-[var(--med-border)] p-6 md:p-10 rounded-3xl shadow-sm relative flex flex-col h-full">
                    <Quote className="absolute top-6 right-8 text-[var(--med-border)] w-12 h-12 opacity-30" />

                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-8 flex-grow">
                      "{t.content}"
                    </p>

                    <div className="border-t border-[var(--med-border)] pt-5 mt-auto">
                      <h4 className="font-bold text-[var(--med-text)] text-lg uppercase tracking-tight line-clamp-1">
                        {t.name}
                      </h4>
                      {t.procedure && (
                        <span className="text-[var(--med-primary)] text-sm font-semibold">
                          {t.procedure}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FIX 2: Updated Button Positioning
              On Mobile (default): positioned at 'left-1' (just inside the px-4 gutter)
              On Desktop (md:): shifted further out with '-left-2' or '-left-4'
          */}
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="absolute top-1/2 left-1 md:-left-2 lg:left-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[var(--med-border)] flex items-center justify-center text-[var(--med-primary)] shadow-md hover:bg-[var(--med-primary)] hover:text-white transition-all z-20 disabled:opacity-0 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="absolute top-1/2 right-1 md:-right-2 lg:right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[var(--med-border)] flex items-center justify-center text-[var(--med-primary)] shadow-md hover:bg-[var(--med-primary)] hover:text-white transition-all z-20 disabled:opacity-0 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-8 text-center px-4">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
            Trusted by 1000+ patients
          </p>
        </div>
      </div>
    </section>
  );
}
