"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import condition1 from "../assets/conditionTreat/AORTA & MAJOR ARTERIES.png";
import condition2 from "../assets/conditionTreat/BLOCKED LEG ARTERIES _ POOR BLOOD CIRCULATION.png";
import condition3 from "../assets/conditionTreat/BLOOD CLOTS (DVT).png";
import condition4 from "../assets/conditionTreat/DIABETIC FOOT & NON-HEALING WOUNDS.png";
import condition5 from "../assets/conditionTreat/DIALYSIS & AV FISTULA CARE.png";
import condition6 from "../assets/conditionTreat/VARICOSE VEINS.png";

type Condition = {
  title: string;
  image: any;
};

const conditions: Condition[] = [
  {
    title: "VARICOSE VEINS",
    image: condition6,
  },
  {
    title: "DIALYSIS & AV FISTULA CARE",
    image: condition5,
  },
  {
    title: "BLOCKED LEG ARTERIES / POOR BLOOD CIRCULATION ",
    image: condition2,
  },
  {
    title: "DIABETIC FOOT & NON-HEALING WOUNDS ",
    image: condition4,
  },
  {
    title: "BLOOD CLOTS (DVT)",
    image: condition3,
  },
  {
    title: "AORTA & MAJOR ARTERIES",
    image: condition1,
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
    {/* IMAGE */}
    <div className="relative w-full h-48 overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
      />

      {/* SOFT OVERLAY (always on) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* TEXT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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

      {/* MOBILE SLIDER (AUTO SLIDE) */}
      <div className="md:hidden w-full px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
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
