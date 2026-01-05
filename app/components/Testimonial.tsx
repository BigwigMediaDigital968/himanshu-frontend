"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

const testimonials = [
  {
    videoSrc: "/testimonial/testimonial1.mp4",
  },
];

export default function TestimonialSlider() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.play();
      } else {
        video.pause();
      }
    });
    setPlayingIndex(index);
  };

  const handlePause = () => {
    setPlayingIndex(null);
  };

  return (
    <section className="py-14 w-11/12 md:w-4/5 mx-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] text-center mb-12">
        What Our Patients Say
      </h2>

      <div className="relative">
        {/* LEFT ARROW */}
        <button
          className="hidden md:flex testi-prev absolute -left-16 top-1/2 -translate-y-1/2
          bg-white p-4 rounded-full shadow-md border border-[var(--med-border)]
          text-[var(--med-primary)] hover:bg-[var(--med-primary)] hover:text-white
          transition-all duration-300 z-20"
        >
          <FaChevronLeft />
        </button>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          loop={testimonials.length > 4}
          centeredSlides={testimonials.length < 4}
          navigation={{
            nextEl: ".testi-next",
            prevEl: ".testi-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          onSlideChange={() => {
            videoRefs.current.forEach((v) => v?.pause());
            setPlayingIndex(null);
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden bg-black">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    className="w-full h-[220px] md:h-[260px] object-cover"
                    controls={playingIndex === i}
                    onPause={handlePause}
                  >
                    <source src={t.videoSrc} type="video/mp4" />
                  </video>

                  {/* PLAY BUTTON (ONLY WHEN NOT PLAYING) */}
                  {playingIndex !== i && (
                    <button
                      onClick={() => handlePlay(i)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40"
                    >
                      <span
                        className="
                          w-14 h-14 rounded-full bg-white
                          flex items-center justify-center
                          text-[var(--med-primary)] text-lg
                          shadow-xl
                        "
                      >
                        <FaPlay className="ml-1" />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* RIGHT ARROW */}
        <button
          className="hidden md:flex testi-next absolute -right-16 top-1/2 -translate-y-1/2
          bg-white p-4 rounded-full shadow-md border border-[var(--med-border)]
          text-[var(--med-primary)] hover:bg-[var(--med-primary)] hover:text-white
          transition-all duration-300 z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
