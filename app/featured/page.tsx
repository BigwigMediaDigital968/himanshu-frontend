"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import PopupForm from "../components/Popup";
import FloatingContactActions from "../components/ContactActions";
import ButtonFill from "../components/Button";

import AOS from "aos";
import "aos/dist/aos.css";

import { Star } from "lucide-react";

/* ================= TYPES ================= */
interface FeaturedItem {
  _id: string;
  image: {
    url: string;
    publicId?: string;
  };
  title: string;
  link: string;
  createdAt?: string;
}

/* ================= COMPONENT ================= */
export default function Featured() {
  const [featured, setFeatured] = useState<FeaturedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);

  /* AOS INIT */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  /* FETCH FEATURED */
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/featured`
        );
        const data = res.data.data || res.data || [];
        setFeatured(data);
      } catch (error) {
        console.error("Failed to fetch featured:", error);
        setFeatured([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div>
      <Nav />

      {/* ================= HERO ================= */}
      <section className="py-16 bg-[#64bab4] rounded-r-full">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
            Featured Content & Highlights
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
            Featured Insights
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Discover our handpicked selection of featured articles, case
            studies, and medical highlights showcasing the latest in vascular
            and endovascular care.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* LOADING STATE */}
          {loading && (
            <div className="flex flex-col items-center py-24">
              <div className="w-12 h-12 border-4 border-[var(--med-primary)] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-500">Loading featured content...</p>
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && featured.length === 0 && (
            <div
              className="max-w-xl mx-auto bg-[var(--med-light)] border border-[var(--med-border)] rounded-3xl p-12 text-center"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--med-primary)]/15 flex items-center justify-center">
                <Star size={28} className="text-[var(--med-primary)]" />
              </div>

              <h2 className="text-2xl font-semibold text-[var(--med-text)] mb-4">
                No Featured Content Available Yet
              </h2>

              <p className="text-[var(--med-text)]/70 leading-relaxed mb-8">
                We are currently curating featured articles and medical insights
                to highlight the most important information about vascular and
                endovascular health. Please check back soon.
              </p>

              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Request a Consultation"
              />
            </div>
          )}

          {/* FEATURED LIST */}
          {!loading && featured.length > 0 && (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              data-aos="fade-up"
            >
              {featured.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white border border-[var(--med-border)] rounded-3xl overflow-hidden shadow hover:shadow-xl transition relative"
                >
                  {/* FEATURED BADGE */}
                  <div className="absolute top-4 right-4 z-10 bg-[var(--med-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>

                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="text-lg font-semibold text-[var(--med-text)] mb-2 line-clamp-2 hover:text-[var(--med-primary)] transition cursor-pointer">
                        {item.title}
                      </h3>
                    </a>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[var(--med-primary)] font-semibold hover:underline"
                    >
                      Visit Link →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}
