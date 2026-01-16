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
import FinalCTA from "../components/CTA";

/* ------------------ TYPES ------------------ */
type Category = "DR. Himanshu" | "AVF care" | "Podcast" | "training";

interface GalleryImage {
  _id: string;
  url: string;
  category: Category;
  createdAt: string;
}

type GalleryItem = {
  type: "single";
  src: string;
  category: Category;
  _id: string;
};

/* ------------------ COMPONENT ------------------ */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("DR. Himanshu");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Fetch gallery images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/gallery`);
        const data = await res.json();
        const images = (data.data || data || []).map((img: GalleryImage) => ({
          type: "single" as const,
          src: img.url,
          category: img.category,
          _id: img._id,
        }));
        setGalleryImages(images);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
        setGalleryImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
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
                activeTab === "DR. Himanshu"
                  ? "!bg-[var(--med-primary-dark)] !text-white ring-2 ring-[#64bab4] ring-offset-2 shadow-md"
                  : "!bg-[var(--med-primary)]"
              }`}
              onClick={() => setActiveTab("DR. Himanshu")}
            >
              DR. Himanshu
            </button>

            <button
              className={`btn-9 btn-sm transition-all ${
                activeTab === "AVF care"
                  ? "!bg-[var(--med-primary-dark)] !text-white ring-2 ring-[#64bab4] ring-offset-2 shadow-md"
                  : "!bg-[var(--med-primary)]"
              }`}
              onClick={() => setActiveTab("AVF care")}
            >
              AVF Care
            </button>

            <button
              className={`btn-9 btn-sm transition-all ${
                activeTab === "Podcast"
                  ? "!bg-[var(--med-primary-dark)] !text-white ring-2 ring-[#64bab4] ring-offset-2 shadow-md"
                  : "!bg-[var(--med-primary)]"
              }`}
              onClick={() => setActiveTab("Podcast")}
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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#64bab4]/10 flex items-center justify-center">
                  <span className="text-2xl animate-spin">⏳</span>
                </div>
                <p className="text-gray-600">Loading images...</p>
              </div>
            </div>
          ) : filteredImages.length === 0 ? (
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
              {filteredImages.map((item) => (
                <motion.div
                  key={item._id}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.category}
                    width={600}
                    height={400}
                    className="h-[260px] w-full object-contain"
                    unoptimized
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

              <Image
                src={selectedItem.src}
                alt={selectedItem.category}
                width={800}
                height={300}
                className="rounded-xl object-contain w-full max-h-[80vh]"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <FinalCTA />
      <Footer />
      <PopupForm open={false} onClose={() => {}} />
      <FloatingContactActions />
    </div>
  );
}
