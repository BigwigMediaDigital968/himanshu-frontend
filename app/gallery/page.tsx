"use client";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";
import FloatingContactActions from "../components/ContactActions";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

/* ------------------ GALLERY DATA ------------------ */
type GalleryItem =
  | {
      type: "single";
      src: string;
      title: string;
    }
  | {
      type: "beforeAfter";
      before: string;
      after: string;
      title: string;
    };

const galleryImages: GalleryItem[] = [
  {
    type: "single",
    src: "https://plus.unsplash.com/premium_photo-1664478187629-ca157d088d48",
    title: "Endovascular Procedure",
  },
  {
    type: "beforeAfter",
    before: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    title: "Before & After Treatment",
  },
  {
    type: "single",
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    title: "Advanced Equipment",
  },
  {
    type: "single",
    src: "https://images.unsplash.com/photo-1579154491915-611e891d3a5b",
    title: "Clinical Environment",
  },
  {
    type: "beforeAfter",
    before: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    title: "Before & After Treatment",
  },
  {
    type: "beforeAfter",
    before: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    title: "Before & After Treatment",
  },
];

/* ------------------ MAIN COMPONENT ------------------ */
export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /* ESC KEY CLOSE */
  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  /* AOS */
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Nav />

      {/* HERO */}
      <section className="py-16 bg-[#64bab4] rounded-r-full">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <p className="text-sm font-semibold tracking-widest text-white/80 uppercase">
            Clinical Excellence in Practice
          </p>
          <h1 className="text-4xl font-bold text-white mt-4">
            Our Medical Gallery
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            Clinical visuals, treatment highlights, and facility insights
            focused on vascular and endovascular care.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* BUTTONS */}
          <div className="flex gap-2 mb-10 overflow-x-auto sm:overflow-visible">
            <button className="btn-9 btn-sm">Button 1</button>
            <button className="btn-9 btn-sm">Button 2</button>
            <button className="btn-9 btn-sm">Button 3</button>
            <button className="btn-9 btn-sm">Button 4</button>
            <button className="btn-9 btn-sm">Button 5</button>
          </div>

          {/* GALLERY */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={item.type === "single" ? item.src : item.after}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="h-[260px] w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null &&
          (() => {
            const currentItem = galleryImages[selectedIndex];

            return (
              <motion.div
                className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedIndex(null)}
              >
                <motion.div
                  className="relative max-w-6xl w-full px-4"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                  drag={currentItem.type === "single" ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (currentItem.type !== "single") return;

                    if (info.offset.x > 120 && selectedIndex > 0) {
                      setSelectedIndex(selectedIndex - 1);
                    }

                    if (
                      info.offset.x < -120 &&
                      selectedIndex < galleryImages.length - 1
                    ) {
                      setSelectedIndex(selectedIndex + 1);
                    }
                  }}
                >
                  {/* CLOSE */}
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="absolute -top-10 right-0 text-white"
                  >
                    ✕ Close
                  </button>

                  {/* CONTENT */}
                  {currentItem.type === "single" ? (
                    <Image
                      src={currentItem.src}
                      alt={currentItem.title}
                      width={1200}
                      height={800}
                      className="rounded-xl object-contain w-full"
                    />
                  ) : (
                    <BeforeAfterSlider
                      before={currentItem.before}
                      after={currentItem.after}
                    />
                  )}

                  <p className="text-center text-white/80 mt-4">
                    {currentItem.title}
                  </p>
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>

      <Footer />
      <PopupForm open={false} onClose={() => {}} />
      <FloatingContactActions />
    </div>
  );
}

/* ------------------ BEFORE AFTER SLIDER ------------------ */
function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className="relative h-[70vh] rounded-xl overflow-hidden"
      onPointerDown={(e) => e.stopPropagation()} // ⬅️ IMPORTANT
    >
      <Image src={after} fill alt="" className="object-cover" />
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <Image src={before} fill alt="" className="object-cover" />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(+e.target.value)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/2"
      />
    </div>
  );
}
