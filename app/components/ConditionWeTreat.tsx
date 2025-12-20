"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import condition1 from "../assets/codition.webp";
import condition2 from "../assets/codition.webp";
import condition3 from "../assets/codition.webp";
import condition4 from "../assets/codition.webp";
import condition5 from "../assets/codition.webp";
import condition6 from "../assets/codition.webp";

type Condition = {
  title: string;
  desc: string;
  image: any;
};

const conditions: Condition[] = [
  {
    title: "Lorem Ipsum Disease",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: condition1,
  },
  {
    title: "Lorem Ipsum Disease",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: condition2,
  },
  {
    title: "Lorem Ipsum Disease",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: condition3,
  },
  {
    title: "Lorem Ipsum Disease",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: condition4,
  },
  {
    title: "Lorem Ipsum Disease",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: condition5,
  },
  {
    title: "Lorem Ipsum Disease",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: condition6,
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
    <div className="relative w-full h-48">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
      />

      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* TITLE ON IMAGE */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <h3 className="text-white text-base font-semibold tracking-wide">
          {item.title}
        </h3>
      </div>

      {/* HOVER OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-[var(--med-primary)] via-[var(--med-primary)]/90 to-[var(--med-primary)]/70
          opacity-0 group-hover:opacity-100
          transition-all duration-500
          flex items-center justify-center
          text-center px-6
        "
      >
        <p className="text-white text-sm leading-relaxed">{item.desc}</p>
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
