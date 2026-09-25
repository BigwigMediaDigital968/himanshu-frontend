"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// TODO: replace placeholder images with real article images
const featuredNews = [
  {
    source: "Health Dialogues",
    title: "Fortis Gurugram Launches AV Fistula Care Clinic for Dialysis Patients",
    image: "/medicaldialogues.webp",
    url: "https://health.medicaldialogues.in/latest-news/fortis-gurugram-launches-av-fistula-care-clinic-for-dialysis-patients-147617",
  },
  {
    source: "Drug Today",
    title: "Fortis Gurugram opens India's first AV fistula clinic to help dialysis patients live better",
    image: "/indianow24.webp",
    url: "https://drugtodayonline.com/medical-news/news-topic/fortis-gurugram-opens-india-s-first-av-fistula-clinic-to-help-dialysis-patients-live-better",
  },
  {
    source: "L'Express",
    title: "AVF Care Workshop in Mauritius",
    image: "/lexpress.jpg",
    url: "https://lexpress.mu/node/561832",
  },
  {
    source: "Total Khabare",
    title: "फोर्टिस गुरुग्राम ने शुरू किया भारत का पहला एवी फिस्टुला केयर क्लीनिक",
    image: "/indianow24.webp",
    url: "https://totalkhabare.com/62870/",
  },
  {
    source: "India Now24",
    title: "गुरुग्राम : फोर्टिस गुरुग्राम ने शुरू किया भारत का पहला एवी फिस्टुला केयर क्लीनिक",
    image: "/indianow24.webp",
    url: "https://indianow24.com/%E0%A4%97%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AE-%E0%A4%AB%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%BF%E0%A4%B8-%E0%A4%97%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%97-2/",
  },

];

export default function FeaturedNews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  // Move exactly one card (card width + gap) per click
  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  // Mouse drag (touch devices use native scrolling)
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: trackRef.current.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active || !trackRef.current) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) trackRef.current.scrollLeft = d.startScroll - dx;
  };

  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
  };

  // Don't open the article if the user was dragging
  const onClickCapture = (e: MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section className="py-14 bg-[var(--med-light)]">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)]">
            Featured in the News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Coverage of our AV fistula care work in national and international
            media.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous news"
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full bg-white shadow-lg
            items-center justify-center
            text-[var(--med-primary)]
            hover:bg-[var(--med-primary)] hover:text-white
            disabled:opacity-40 disabled:pointer-events-none
            transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next news"
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full bg-white shadow-lg
            items-center justify-center
            text-[var(--med-primary)]
            hover:bg-[var(--med-primary)] hover:text-white
            disabled:opacity-40 disabled:pointer-events-none
            transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* Track: native swipe on touch, click-and-drag with a mouse */}
          <div
            ref={trackRef}
            onScroll={updateEdges}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={onClickCapture}
            className={`flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${dragging
              ? "cursor-grabbing select-none"
              : "scroll-smooth snap-x snap-mandatory cursor-grab"
              }`}
          >
            {featuredNews.map((news) => (
              <div
                key={news.url}
                data-card
                className="shrink-0 snap-start basis-full sm:basis-[calc((100%-24px)/2)] md:basis-[calc((100%-48px)/3)]"
              >
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  aria-label={`${news.title} — ${news.source}`}
                  className="group relative block h-64 md:h-72 overflow-hidden rounded-2xl border border-[var(--med-border)] shadow-md"
                >
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    draggable={false}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-lg font-semibold text-white">
                      {news.source}
                    </p>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      {news.title}
                    </p>
                    <span className="mt-3 inline-block rounded-full border border-white/30 bg-[var(--med-primary)]/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md transition-all group-hover:border-[var(--med-primary)] group-hover:bg-[var(--med-primary)]">
                      Click here
                    </span>
                    </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
