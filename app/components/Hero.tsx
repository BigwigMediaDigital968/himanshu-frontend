"use client";

import { useState } from "react";
import PopupForm from "./Popup";

export default function HeroCarousel() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <section className="relative w-full h-[30vh] md:h-[50vh] lg:h-screen overflow-hidden">
        {/* BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-fill"
          src="/himanshu.mp4" // 👈 replace with your video path
          autoPlay
          muted
          loop
          playsInline
        />

        {/* MOBILE POPUP FORM */}
        <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      </section>

      {/* STATS SECTION — CONNECTED TO HERO */}
      <section className="relative z-30 -mt-8 md:-mt-16">
        <div className="w-5/6 mx-auto">
          <div
            className="
        grid grid-cols-2 md:grid-cols-4 gap-6
        bg-white/70 backdrop-blur-2xl
        py-6 md:py-8
        rounded-3xl
        border border-white/30
      "
          >
            {/* STAT 1 */}
            <div
              data-aos="fade-up"
              className="flex flex-col items-center text-center"
            >
              <p className="text-2xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                17+
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Years of Experience
              </p>
            </div>

            {/* STAT 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-center text-center"
            >
              <p className="text-2xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                29+
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Research Publications
              </p>
            </div>

            {/* STAT 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center text-center"
            >
              <p className="text-2xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                6+
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Awards & Achievements
              </p>
            </div>

            {/* STAT 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center text-center"
            >
              <p className="text-2xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                Director
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Vascular & Endovascular Surgeon
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
