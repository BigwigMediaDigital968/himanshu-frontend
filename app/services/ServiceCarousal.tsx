"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselItem } from "../type";

interface CarouselProps {
  images: CarouselItem[];
}

const ServiceCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextStep = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const onDragEnd = (_: any, info: any) => {
    if (info.offset.x < -50) nextStep();
    if (info.offset.x > 50) prevStep();
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full aspect-video overflow-hidden rounded-3xl bg-gray-50 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[index].id}
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
                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  fill
                  priority
                  className="max-w-[400px] aspect-square mx-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="inset-x-0 bottom-8 flex justify-center items-center gap-6 z-10 mt-5">
          <button
            onClick={prevStep}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-[var(--med-primary)] shadow-md flex items-center justify-center text-navy-900 hover:bg-[var(--med-primary)] hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="bg-white/90 backdrop-blur border border-[var(--med-primary)] px-5 py-2 rounded-full shadow-md text-[10px] font-bold tracking-[0.2em] text-navy-900/60 uppercase">
            {index + 1}
            <span className="mx-2 text-gold-400">/</span>
            {images.length}
          </div>

          <button
            onClick={nextStep}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-[var(--med-primary)] shadow-md flex items-center justify-center text-navy-900 hover:bg-[var(--med-primary)] hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;