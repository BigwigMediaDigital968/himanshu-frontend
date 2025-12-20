"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const testimonials = [
  {
    msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut doloribus explicabo vel cumque ducimus delectus nostrum voluptates soluta doloremque officia!",
    name: "Priya Mehra",
    location: "New Delhi",
    initial: "P",
  },
  {
    msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut doloribus explicabo vel cumque ducimus delectus nostrum voluptates soluta doloremque officia!",
    name: "Rahul Verma",
    location: "Gurugram",
    initial: "R",
  },
  {
    msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut doloribus explicabo vel cumque ducimus delectus nostrum voluptates soluta doloremque officia!",
    name: "Sneha Kapoor",
    location: "Delhi",
    initial: "S",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-12 w-11/12 md:w-4/5 mx-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] text-center mb-12">
        What Our Patients Say
      </h2>

      <div className="relative flex items-center justify-center">
        {/* LEFT ARROW OUTSIDE */}
        <button
          className="hidden md:block
        testi-prev 
        absolute left-0 md:-left-10 top-1/2 -translate-y-1/2
        bg-white p-4 rounded-full shadow-md
        border border-[var(--med-border)]
        text-[var(--med-primary)]
        hover:bg-[var(--med-primary)] hover:text-white
        transition-all duration-300 z-20
      "
        >
          <FaChevronLeft />
        </button>

        {/* SLIDER BOX (centered between arrows) */}
        <div
          className="
        relative bg-[var(--med-light)]
        border border-[var(--med-border)]
        rounded-3xl p-10 md:p-14
        overflow-hidden md:mx-24
        w-full
      "
        >
          {/* Big Quote Icon */}
          <div className="absolute -top-8 left-4 text-[var(--med-primary)]/10 text-[150px] font-serif pointer-events-none select-none">
            “
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{
              nextEl: ".testi-next",
              prevEl: ".testi-prev",
            }}
            className="mySwiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <p className="text-xl mt-5 md:text-2xl font-semibold text-[var(--med-text)] mb-10 leading-relaxed">
                  “{t.msg}”
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="
                w-14 h-14 rounded-full bg-[var(--med-primary)]
                text-white flex items-center justify-center text-xl font-bold
              "
                  >
                    {t.initial}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[var(--med-text)]">
                      {t.name}
                    </h4>
                    <p className="text-[var(--med-text)]/60 text-sm">
                      {t.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT ARROW OUTSIDE */}
        <button
          className="hidden md:block
        testi-next 
        absolute right-0 md:-right-10 top-1/2 -translate-y-1/2
        bg-white p-4 rounded-full shadow-md
        border border-[var(--med-border)]
        text-[var(--med-primary)]
        hover:bg-[var(--med-primary)] hover:text-white
        transition-all duration-300 z-20
      "
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
