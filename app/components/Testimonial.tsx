"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const testimonials = [
  {
    msg: "We recently visited with my CKD Mom having couple of failed fistula for dialysis access to Dr. Himanshu Verma, it was indeed for the first time we were explained about the entire procedure so easily and even the surgery also went so effortlessly good…. the entire team was very positive and supportive🙂 Highly recommended for patients suffering from any vascular challenges. Dr. Verma is very good and for fistula he easily can be best👍🏻 Thanks to entire team and Dr. Himanshu….. I am now praying for my Mom's successful fistula🙏🏻",
    name: "Sugandha Vashist",
    initial: "S",
    diagnosis: "Chronic Kidney Disease",
    procedure: "AV Fistula Creation",
  },
  {
    msg: "Have a great experience with Doc Himanshu Verma ji. Very keen in his work and also a good human being. We came to Fortis with sorrow and gone with happy faces. The way the team handled my brother's case was quite good, especially Miss Chanderkanta who supported us all the time. Once again thanks to the whole vascular team for their extended support and good response.",
    name: "Amit Sharma",
    initial: "A",
    diagnosis: "Peripheral Artery Disease",
    procedure: "Angioplasty",
  },
  {
    msg: "I had visited Dr. Himanshu with my mother for her varicose vein issue. What really stood out to me was his no-nonsense approach — he didn't suggest unnecessary tests, medicines, or treatments. He simply told us what was actually needed and nothing more. It's rare to come across a doctor who is so genuine, professional, and clearly not driven by money. He was kind, patient, and explained things clearly. Felt grateful that we found someone like him. Highly recommend.",
    name: "Arjita Singh",
    initial: "A",
    diagnosis: "Varicose Veins",
    procedure: "Conservative Management",
  },
  {
    msg: "It's very happy to say you sir. After your consultation my both leg pain and enlarged vein are really reduced. Also the stocking is very helpful during my long standing duties. Thank you so much sir and wish you all the best for your upcoming career. Best Vascular Surgeon.",
    name: "Harshith Goud",
    initial: "H",
    diagnosis: "Varicose Veins",
    procedure: "Compression Therapy",
  },
  {
    msg: "We were really fortunate to discover Dr. Himanshu Verma when we were at our lowest and considering peritoneal dialysis as the only option. In addition to getting our mother an exquisite working graft for dialysis, he has been incredibly supportive and optimistic. The physician who recommended Dr. Himanshu assured us that only he would be able to create a fistula or graft — and it truly came to pass. There are not enough words to express our gratitude.",
    name: "Richy",
    initial: "R",
    diagnosis: "End Stage Renal Disease",
    procedure: "AV Graft Placement",
  },
  {
    msg: "When I visited Dr. Himanshu Verma, I was suffering from severe leg pain due to varicose veins. After evaluation, he recommended laser surgery. To my surprise, pain relief was almost immediate. The swelling reduced quickly, and I recovered faster than expected. Dr. Himanshu Verma is one of the best vascular surgeons in India — highly skilled, humble, and very clear in explanations. Strongly recommended.",
    name: "K A D",
    initial: "K",
    diagnosis: "Varicose Veins",
    procedure: "Endovenous Laser Ablation",
  },
  {
    msg: "Recently visited Dr. Himanshu's OPD for my mother. I truly appreciate Dr. Himanshu and his staff members Ms. Chanderkanta and Mr. Sanoj. Everything was explained patiently and in depth. We were treated like family members. These kinds of doctors are rare whose first priority is patient health, not money. Anyone looking for the right vascular surgeon should consult Dr. Himanshu once without second thought 🫰🏻",
    name: "Nisha Malik",
    initial: "N",
    diagnosis: "Deep Vein Thrombosis",
    procedure: "Anticoagulation Therapy",
  },
  {
    msg: "For the outstanding care during my mother's fistula surgery, I am immensely appreciative of Dr. Himanshu Verma and his staff. From consultation to recovery, they showed exceptional knowledge, empathy, and professionalism. The procedure was precise and recovery was quick. I heartily endorse Dr. Himanshu Verma for his commitment to patient welfare.",
    name: "Kanapuram Sudeekshitha",
    initial: "K",
    diagnosis: "Chronic Kidney Disease",
    procedure: "AV Fistula Creation",
  },
  {
    msg: "We met Dr. Himanshu after visiting multiple hospitals without clear answers. His approach was professional, compassionate, and transparent. He followed a multidisciplinary approach for my wife's Takayasu Arteritis. Last year, he performed a Femoral-Popliteal Bypass Surgery which saved her leg and helped it heal beautifully.",
    name: "Manish Singh",
    initial: "M",
    diagnosis: "Takayasu Arteritis",
    procedure: "Femoral-Popliteal Bypass",
  },
  {
    msg: "Dr. Himanshu Verma is not just an exceptional vascular surgeon but also a doctor who truly cares. He explains every detail, listens patiently, and ensures you feel supported throughout recovery. His dedication and personal touch turn a difficult medical journey into a reassuring experience. A truly compassionate doctor who treats you like family.",
    name: "Bhavna Bansal",
    initial: "B",
    diagnosis: "Carotid Artery Stenosis",
    procedure: "Carotid Endarterectomy",
  },
];

export default function TestimonialSlider() {
  const [expanded, setExpanded] = useState<boolean[]>([]);

  const toggleReadMore = (index: number) => {
    setExpanded((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  const MAX_LENGTH = 220;

  return (
    <section className="py-12 w-11/12 md:w-4/5 mx-auto relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .testimonial-swiper .swiper-wrapper {
            display: flex;
            align-items: stretch !important;
          }
          .testimonial-swiper .swiper-slide {
            height: auto !important;
            display: flex !important;
            align-items: stretch;
          }
          .testimonial-swiper .swiper-slide > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
        `,
        }}
      />
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] text-center mb-12">
        What Our Patients Say
      </h2>

      <div className="relative flex items-center justify-center">
        {/* LEFT ARROW */}
        <button
          className="hidden md:block
          testi-prev
          absolute left-0 md:-left-10 top-1/2 -translate-y-1/2
          bg-white p-4 rounded-full shadow-md
          border border-[var(--med-border)]
          text-[var(--med-primary)]
          hover:bg-[var(--med-primary)] hover:text-white
          transition-all duration-300 z-20"
        >
          <FaChevronLeft />
        </button>

        {/* SLIDER BOX */}
        <div
          className="
          relative bg-[var(--med-light)]
          border border-[var(--med-border)]
          rounded-3xl p-10 md:p-14
          overflow-hidden md:mx-24
          w-full"
        >
          {/* Big Quote Icon */}
          <div className="absolute -top-8 left-4 text-[var(--med-primary)]/10 text-[150px] font-serif pointer-events-none select-none">
            “
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{
              nextEl: ".testi-next",
              prevEl: ".testi-prev",
            }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((t, i) => {
              const isLong = t.msg.length > MAX_LENGTH;
              const isExpanded = expanded[i];

              return (
                <SwiperSlide key={i}>
                  <div className="relative h-full flex flex-col w-full">
                    {/* Dialogue Bubble */}
                    <div
                      className="
                      relative bg-white
                      border border-[var(--med-border)]
                      rounded-3xl p-8
                      shadow-sm hover:shadow-md
                      transition-all duration-300
                      flex-1 flex flex-col min-h-0"
                    >
                      <p className="text-lg md:text-xl font-semibold text-[var(--med-text)] leading-relaxed flex-1 min-h-0">
                        "
                        {isExpanded || !isLong
                          ? t.msg
                          : `${t.msg.slice(0, MAX_LENGTH)}...`}
                        "
                      </p>

                      {isLong && (
                        <button
                          onClick={() => toggleReadMore(i)}
                          className="mt-3 text-sm font-semibold text-[var(--med-primary)] hover:underline self-start flex-shrink-0"
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </button>
                      )}

                      {/* Speech Tail */}
                      <div
                        className="
                        absolute -bottom-4 left-10
                        w-6 h-6 bg-white
                        border-l border-b border-[var(--med-border)]
                        rotate-45"
                      />
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-8 pl-6 flex-shrink-0">
                      <div
                        className="
                        w-12 h-12 rounded-full bg-[var(--med-primary)]
                        text-white flex items-center justify-center
                        text-lg font-bold flex-shrink-0"
                      >
                        {t.initial}
                      </div>

                      <div className="flex-1">
                        <h4 className="text-base font-bold text-[var(--med-text)]">
                          {t.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {t.diagnosis} • {t.procedure}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* RIGHT ARROW */}
        <button
          className="hidden md:block
          testi-next
          absolute right-0 md:-right-10 top-1/2 -translate-y-1/2
          bg-white p-4 rounded-full shadow-md
          border border-[var(--med-border)]
          text-[var(--med-primary)]
          hover:bg-[var(--med-primary)] hover:text-white
          transition-all duration-300 z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
