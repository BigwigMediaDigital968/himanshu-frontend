'use client';

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function PopUpHandler() {
  const popups = [
    {
      title: "India's first IVC FILTER EXTRACTION USING LASER RETRIEVAL SYSTEM",
      image: '/298715.jpeg',
    }
  ];

  // Hidden until the consultation form has been closed
  const [active, setActive] = useState<number>(-1);

  useEffect(() => {
    const show = () => setActive(0);
    window.addEventListener("consultation-form-closed", show);
    return () => window.removeEventListener("consultation-form-closed", show);
  }, []);

  if (active < 0 || active >= popups.length) return null;

  const currentPopup = popups[active];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-white max-w-3xl w-full relative rounded-lg overflow-hidden shadow-2xl border border-gray-100">
        
        {/* Close Button Floating on top of the image */}
        <button 
          onClick={() => setActive(-1)}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full cursor-pointer bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Wrapper */}
        <div className="relative w-full aspect-video">
          <img 
            src={currentPopup.image} 
            alt={currentPopup.title} 
            className="w-full h-full object-cover"
          />

          {/* Bottom Title Overlay with Dark Gradient */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20">
            <h2 className="text-white text-lg md:text-xl font-bold tracking-wide drop-shadow-sm leading-snug">
              {currentPopup.title}
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}