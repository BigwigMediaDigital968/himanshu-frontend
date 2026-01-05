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
import type { StaticImageData } from "next/image";
import image1 from "../assets/gallery/avfcare/1-12.webp";
import image2 from "../assets/gallery/avfcare/1-14.webp";
import image3 from "../assets/gallery/avfcare/1-15.webp";
import image4 from "../assets/gallery/avfcare/1-19.webp";
import image5 from "../assets/gallery/avfcare/1-23.webp";
import image6 from "../assets/gallery/avfcare/1-9.webp";
import image7 from "../assets/gallery/avfcare/DSC00077-scaled-1.webp";
import image8 from "../assets/gallery/avfcare/DSC_0972-scaled-1.webp";
import image9 from "../assets/gallery/avfcare/DSC_1036-scaled-1.webp";
import image10 from "../assets/gallery/avfcare/Picture23.webp";
import image11 from "../assets/gallery/avfcare/img-1-3-scaled-1.webp";
import image12 from "../assets/gallery/podcast/IMG_5282.webp";
import image13 from "../assets/gallery/podcast/IMG_5304.webp";
import image14 from "../assets/gallery/podcast/_DSC5049.webp";
import image15 from "../assets/gallery/avfcare/DSC00019.webp";
import image16 from "../assets/gallery/avfcare/DSC09998.webp";
import image17 from "../assets/gallery/avfcare/DSC00030.webp";
import image18 from "../assets/gallery/himanshu/1.webp";
import image19 from "../assets/gallery/himanshu/2.webp";
import image20 from "../assets/gallery/himanshu/3.webp";
import image21 from "../assets/gallery/himanshu/4.webp";
import image22 from "../assets/gallery/himanshu/5.webp";
import image23 from "../assets/gallery/himanshu/6.webp";
import image24 from "../assets/gallery/himanshu/7.webp";
import image25 from "../assets/gallery/himanshu/8.webp";

/* ------------------ TYPES ------------------ */
type Category = "Dr. Himanshu" | "avf" | "podcast" | "training";

type GalleryItem =
  | {
      type: "single";
      src: string | StaticImageData;

      category: Category;
    }
  | {
      type: "beforeAfter";
      before: string;
      after: string;
      category: Category;
    };

/* ------------------ DATA ------------------ */
const galleryImages: GalleryItem[] = [
  {
    type: "single",
    src: image1,

    category: "avf",
  },
  {
    type: "single",
    src: image2,

    category: "avf",
  },
  {
    type: "single",
    src: image3,

    category: "avf",
  },
  {
    type: "single",
    src: image4,

    category: "avf",
  },
  {
    type: "single",
    src: image5,

    category: "avf",
  },
  {
    type: "single",
    src: image6,

    category: "avf",
  },
  {
    type: "single",
    src: image7,

    category: "avf",
  },
  {
    type: "single",
    src: image8,

    category: "avf",
  },
  {
    type: "single",
    src: image9,

    category: "avf",
  },
  {
    type: "single",
    src: image10,

    category: "avf",
  },
  {
    type: "single",
    src: image11,

    category: "avf",
  },
  {
    type: "single",
    src: image12,

    category: "podcast",
  },
  {
    type: "single",
    src: image13,

    category: "podcast",
  },
  {
    type: "single",
    src: image14,

    category: "podcast",
  },
  {
    type: "single",
    src: image15,

    category: "avf",
  },
  {
    type: "single",
    src: image16,
    category: "avf",
  },
  {
    type: "single",
    src: image17,
    category: "avf",
  },
  {
    type: "single",
    src: image18,
    category: "Dr. Himanshu",
  },
  {
    type: "single",
    src: image19,
    category: "Dr. Himanshu",
  },
  {
    type: "single",
    src: image20,
    category: "Dr. Himanshu",
  },
  {
    type: "single",
    src: image21,
    category: "Dr. Himanshu",
  },
  {
    type: "single",
    src: image22,
    category: "Dr. Himanshu",
  },
  {
    type: "single",
    src: image23,
    category: "Dr. Himanshu",
  },
  {
    type: "single",
    src: image24,
    category: "Dr. Himanshu",
  },
  {
    type: "single",
    src: image25,
    category: "Dr. Himanshu",
  },

  // {
  //   type: "beforeAfter",
  //   before: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  //   after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  //   title: "AVF Before & After",
  //   category: "avf",
  // },
];

/* ------------------ COMPONENT ------------------ */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("Dr. Himanshu");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  const filteredImages = galleryImages.filter(
    (img) => img.category === activeTab
  );

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
            Clinical visuals, treatment highlights, and insights from AVF Care,
            patient care programs, and the Doc Talk Show.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* TABS (UNCHANGED STYLE) */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto py-2">
            <button
              className={`btn-9 btn-sm transition-all ${
                activeTab === "Dr. Himanshu"
                  ? "!bg-[var(--med-primary-dark)] !text-white ring-2 ring-[#64bab4] ring-offset-2 shadow-md"
                  : "!bg-[var(--med-primary)]"
              }`}
              onClick={() => setActiveTab("Dr. Himanshu")}
            >
              Dr. Himanshu
            </button>

            <button
              className={`btn-9 btn-sm transition-all ${
                activeTab === "avf"
                  ? "!bg-[var(--med-primary-dark)] !text-white ring-2 ring-[#64bab4] ring-offset-2 shadow-md"
                  : "!bg-[var(--med-primary)]"
              }`}
              onClick={() => setActiveTab("avf")}
            >
              AVF Care
            </button>

            <button
              className={`btn-9 btn-sm transition-all ${
                activeTab === "podcast"
                  ? "!bg-[var(--med-primary-dark)] !text-white ring-2 ring-[#64bab4] ring-offset-2 shadow-md"
                  : "!bg-[var(--med-primary)]"
              }`}
              onClick={() => setActiveTab("podcast")}
            >
              Podcast
            </button>
            {/* 
            <button
              className={`btn-9 btn-sm transition-all ${
                activeTab === "training"
                  ? "!bg-[#64bab4] !text-white ring-2 ring-[#64bab4] ring-offset-2 shadow-md"
                  : ""
              }`}
              onClick={() => setActiveTab("training")}
            >
              Training
            </button> */}
          </div>

          {/* GRID / EMPTY STATE */}
          {filteredImages.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="max-w-sm w-full text-center bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#64bab4]/10 flex items-center justify-center">
                  <span className="text-2xl">🖼️</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  No Images Available
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Images for this category will be added soon. Please check
                  another section or come back later.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.type === "single" ? item.src : item.after}
                    alt={item.category}
                    width={600}
                    height={400}
                    className="h-[260px] w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full px-4 max-h-[85vh] flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-10 right-0 text-white"
              >
                ✕ Close
              </button>

              {selectedItem.type === "single" ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.category}
                  width={800}
                  height={300}
                  className="rounded-xl object-contain w-full max-h-[80vh]"
                />
              ) : (
                <BeforeAfterSlider
                  before={selectedItem.before}
                  after={selectedItem.after}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <PopupForm open={false} onClose={() => {}} />
      <FloatingContactActions />
    </div>
  );
}

/* ------------------ BEFORE AFTER ------------------ */
function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative h-[70vh] rounded-xl overflow-hidden">
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
