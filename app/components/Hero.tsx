"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { motion, easeInOut } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  CheckCircle,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

import ButtonFill from "./Button";
import PopupForm from "./Popup";
import HeroForm from "./HeroForm";
const slides = [
  {
    image: slide1,
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus temporibus aliquid!",
    badge1: { icon: CheckCircle, text: "5000+ Successful Treatments" },
    badge2: { icon: Shield, text: "Latest Laser Technology" },
  },
  {
    image: slide2,
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus temporibus aliquid!",
    badge1: { icon: Star, text: "10+ Years Experience" },
    badge2: { icon: CheckCircle, text: "Minimally Invasive Procedures" },
  },
  {
    image: slide3,
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus temporibus aliquid!",
    badge1: { icon: Shield, text: "Advanced Wound Care" },
    badge2: { icon: Star, text: "Precision Vascular Diagnosis" },
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: easeInOut },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.25 } },
  };

  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
          loop
          speed={1000}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="w-full h-[65vh] md:h-[85vh] lg:h-[92vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center"
                  style={{
                    background: `linear-gradient(
                    90deg,
                    rgba(11, 141, 133, 0.92) 0%,
                    rgba(11, 141, 133, 0.45) 45%,
                    rgba(11, 141, 133, 0.1) 100%
                  )`,
                  }}
                >
                  <motion.div
                    key={active}
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="w-11/12 md:w-5/6 mx-auto text-white max-w-7xl"
                  >
                    <motion.h1
                      variants={slideLeft}
                      className="text-3xl md:text-4xl lg:text-5xl max-w-4xl font-bold mb-5"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      variants={slideLeft}
                      className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      variants={slideLeft}
                      className="flex flex-wrap gap-3 mb-8"
                    >
                      {[slide.badge1, slide.badge2].map((badge, idx) => {
                        const Icon = badge.icon;
                        return (
                          <span
                            key={idx}
                            className="flex items-center gap-2 bg-white/15 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30"
                          >
                            <Icon size={18} />
                            {badge.text}
                          </span>
                        );
                      })}
                    </motion.div>

                    <motion.div variants={slideLeft}>
                      <ButtonFill
                        onClick={() => setOpenPopup(true)}
                        text="Book Appointment"
                        className="text-white border border-white"
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Arrows */}
                <button className="hidden md:block hero-prev absolute left-5 top-1/2 -translate-y-1/2 z-40 bg-white/25 backdrop-blur-xl p-3 rounded-full">
                  <ChevronLeft size={26} className="text-white" />
                </button>

                <button className="hidden md:block hero-next absolute right-5 top-1/2 -translate-y-1/2 z-40 bg-white/25 backdrop-blur-xl p-3 rounded-full">
                  <ChevronRight size={26} className="text-white" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* STATIC FORM (DESKTOP ONLY) */}
        {/* <div className="hidden lg:block absolute top-1/2 right-[6%] -translate-y-1/2 z-40">
          <HeroForm />
        </div> */}

        {/* MOBILE POPUP FORM */}
        <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />

        {/* Pagination Styling */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.6) !important;
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            background: white !important;
            width: 12px;
            height: 12px;
          }
        `}</style>
      </section>

      {/* STATS SECTION — CONNECTED TO HERO */}
      <section className="relative z-30 -mt-20 md:-mt-16">
        <div className="w-11/12 md:w-5/6 mx-auto">
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
              <p className="text-3xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                12+
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Years Experience
              </p>
            </div>

            {/* STAT 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-center text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                5000+
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Patients Treated
              </p>
            </div>

            {/* STAT 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                15+
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Medical Awards
              </p>
            </div>

            {/* STAT 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[var(--med-primary)]">
                98%
              </p>
              <p className="text-[var(--med-text)]/70 mt-1 text-sm tracking-wide">
                Patient Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
