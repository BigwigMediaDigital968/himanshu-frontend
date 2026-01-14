"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Condition = {
  title: string;
  youtubeId: string;
};

const conditions: Condition[] = [
  {
    title: "VARICOSE VEINS",
    youtubeId: "gvADB-nshqc",
  },
  {
    title: "BLOOD VESSEL BLOCKAGE",
    youtubeId: "pFddNZC67rQ",
  },
  {
    title: "DEEP VEIN THROMBOSIS DVT",
    youtubeId: "G4dz_vbYYDU",
  },
  {
    title: "AV GRAFT PUNCTURE",
    youtubeId: "FNwy-ZlK2RE",
  },
  {
    title: "INSTRUCTIONS AFTER AV FISTULA SURGERY",
    youtubeId: "MeoXB2zY-tQ",
  },
  {
    title: "PERIPHERAL ARTERY DISEASE",
    youtubeId: "to5YgVhc-xk",
  },
];

const ConditionCard = ({ item }: { item: Condition }) => (
  <div
    className="
      group relative overflow-hidden rounded-3xl
      border border-[var(--med-border)]
      bg-white cursor-pointer
      transition-all duration-500
      hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,141,133,0.25)]
    "
  >
    {/* VIDEO */}
    <div className="relative w-full h-48 overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1`}
        title={item.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="
          absolute inset-0 w-full h-full
          object-cover
          transition-all duration-700
          group-hover:scale-110
        "
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* TEXT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* TITLE */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <h3 className="text-white text-base font-semibold tracking-wide drop-shadow-md">
          {item.title}
        </h3>
      </div>
    </div>
  </div>
);

export default function ConditionsWeTreat() {
  return (
    <section className="py-12">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-3">
          Diseases We Treat
        </h2>
      </div>

      {/* DESKTOP / TABLET GRID */}
      <div className="hidden md:grid w-11/12 md:w-5/6 mx-auto grid-cols-2 lg:grid-cols-3 gap-10">
        {conditions.map((item, idx) => (
          <ConditionCard key={idx} item={item} />
        ))}
      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden w-full px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1.1}
          loop
        >
          {conditions.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ConditionCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
