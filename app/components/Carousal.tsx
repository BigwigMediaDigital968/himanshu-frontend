"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// 1. Define the type to handle both string URLs and imported assets
type ImageSource = string | StaticImageData;

interface CarouselItem {
  id: number;
  src: ImageSource;
  alt: string;
}

// Example of how you would import and use local images
// import HeroImage from "@/assets/hero.png";

const carouselImages: CarouselItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2070",
    alt: "Modern Villa",
  },
  // { id: 2, src: HeroImage, alt: "Local Asset Example" },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070",
    alt: "Kitchen Design",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const onDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) nextStep();
    if (info.offset.x > 50) prevStep();
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Container height matches your luxury aesthetic */}
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-3xl bg-gray-50 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselImages[index].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onDragEnd}
                className="w-full h-full relative cursor-grab active:cursor-grabbing"
              >
                {/* 2. Use Next.js Image for optimization and local asset support */}
                <Image
                  src={carouselImages[index].src}
                  alt={carouselImages[index].alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 1200px"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ── CONTROLS ── */}
          <div className="absolute inset-x-0 bottom-8 flex justify-center items-center gap-6 z-10">
            <button
              onClick={prevStep}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-navy-900 hover:bg-gold-400 hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="bg-white/90 backdrop-blur px-5 py-2 rounded-full shadow-md text-[10px] font-bold tracking-[0.2em] text-navy-900/60 uppercase">
              {index + 1} <span className="mx-2 text-gold-400">/</span>{" "}
              {carouselImages.length}
            </div>

            <button
              onClick={nextStep}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-navy-900 hover:bg-gold-400 hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
