"use client";
import Image from "next/image";
import Nav from "./components/Navbar";
import HeroCarousel from "./components/Hero";
import ButtonFill from "./components/Button";
import PopupForm from "./components/Popup";
import { useState, useEffect } from "react";
import doctor from "./assets/Dr-Himanshu-Verma-Fortis.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { ChevronDown } from "lucide-react";
import TestimonialSlider from "./components/Testimonial";
import { UserRound, Stethoscope, Scissors, CalendarCheck } from "lucide-react";
import faq from "./assets/faq.png";
import FinalCTA from "./components/CTA";
import ConditionsWeTreat from "./components/ConditionWeTreat";
import team from "./assets/Dr-Himanshu-Verma-Fortis.webp";
import WhyChooseUs from "./components/WhyChooseUs";
import FloatingContactActions from "./components/ContactActions";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import partner1 from "./assets/logo.png";
import partner2 from "./assets/logo.png";
import partner3 from "./assets/logo.png";
import partner4 from "./assets/logo.png";
import partner5 from "./assets/logo.png";

const collaborations = [
  { logo: partner1, name: "Hospital Partner 1" },
  { logo: partner2, name: "Medical Lab 2" },
  { logo: partner3, name: "Healthcare Group 3" },
  { logo: partner4, name: "Diagnostic Center 4" },
  { logo: partner5, name: "Insurance Partner 5" },
];

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque leo ac urna tempus, vitae facilisis ipsum vulputate.",
  },
  {
    q: "Consectetur adipiscing elit?",
    a: "Etiam nec ligula eget elit bibendum cursus. Mauris euismod, justo vitae facilisis sollicitudin, sem odio blandit leo, sit amet gravida.",
  },
  {
    q: "Curabitur vel turpis non elit dapibus?",
    a: "Curabitur vulputate eros ac massa ultrices, ac volutpat tortor hendrerit. Maecenas non risus sit amet quam ultricies viverra.",
  },
  {
    q: "Donec porta sem nec sapien viverra?",
    a: "Suspendisse quis neque non enim vestibulum finibus. Quisque sagittis metus at neque tristique, non interdum elit porttitor.",
  },
];

const services = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: UserRound,
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
    icon: Stethoscope,
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco.",
    icon: Scissors,
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    icon: CalendarCheck,
  },
];

const teamMembers = [
  {
    name: "Dr. Lorem Ipsum",
    role: "Consultant Vascular Surgeon",
    image: team,
    linkedin: "https://linkedin.com/in/loremipsum",
    instagram: "https://instagram.com/dr.lorem",
  },
  {
    name: "Dr. Dolor Sit",
    role: "Endovascular Specialist",
    image: team,
    linkedin: "https://linkedin.com/in/dolorsit",
    instagram: "",
  },
  {
    name: "Amet Consectetur",
    role: "Senior Vascular Nurse",
    image: team,
    linkedin: "",
    instagram: "https://instagram.com/amet.consectetur",
  },
  {
    name: "Adipiscing Elit",
    role: "Clinical Coordinator",
    image: team,
    linkedin: "",
    instagram: "",
  },
];

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // INITIALIZE AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    const timer = setTimeout(() => {
      setOpenPopup(true);
    }, 1500);

    // Cleanup (important)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Nav />
      <HeroCarousel />

      {/* ABOUT SECTION — polygon image treatment */}
      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        <div
          className="
      grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
      bg-white/10 backdrop-blur-xl rounded-3xl
      border border-white/20
    "
        >
          {/* LEFT: content */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="leading-tight">
              <p className="text-3xl md:text-4xl font-bold text-(--med-primary) transition">
                Dr. Himanshu Verma
              </p>
              <p className="text-lg text-gray-500">
                Vascular & Endovascular Surgeon
              </p>
            </div>

            <p className="text-[var(--med-text)]/90 leading-relaxed mb-4 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              temporibus ipsa adipisci hic recusandae aspernatur at dicta quasi
              eaque, magnam praesentium nisi vitae tenetur asperiores provident
              facere qui rem cupiditate in sint. Quam incidunt consequuntur
              aspernatur. Illo neque consectetur quisquam eligendi modi, odio
              dignissimos, sapiente officia cum, corrupti molestias ipsam.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--med-primary)] text-xl">✔</span>
                <span className="text-[var(--med-text)]/85">
                  12+ years of clinical experience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--med-primary)] text-xl">✔</span>
                <span className="text-[var(--med-text)]/85">
                  Specialized in modern diagnostic care
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--med-primary)] text-xl">✔</span>
                <span className="text-[var(--med-text)]/85">
                  Friendly, patient-centered approach
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--med-primary)] text-xl">✔</span>
                <span className="text-[var(--med-text)]/85">
                  Minimally invasive procedures
                </span>
              </li>
            </ul>

            <div>
              {/* keep using your ButtonFill; setOpenPopup should come from outer scope */}
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Book Appointment"
              />
            </div>
          </div>

          {/* RIGHT: polygon image with decorative SVG */}
          <div
            className="flex justify-center lg:justify-end group"
            data-aos="zoom-in"
          >
            <div className="relative">
              {/* image container clipped to polygon (slanted) */}
              <div className="relative overflow-hidden rounded-2xl w-[300px] sm:w-[420px] md:w-[520px] h-[220px] sm:h-[320px] md:h-[450px] border">
                <Image
                  src={doctor}
                  alt="Doctor"
                  fill
                  className="object-contain object-center transform transition-transform duration-700"
                  priority
                />
              </div>

              {/* small overlay badge on the polygon for credibility */}
              <div className="absolute -bottom-4 left-6 md:left-8 bg-white/95 rounded-full px-3 py-1 border border-[var(--med-border)] text-sm text-[var(--med-text)]">
                12+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)]">
              Trusted Healthcare Partners
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-gray-600">
              Collaborating with leading hospitals, diagnostics, and healthcare
              institutions to deliver advanced vascular care.
            </p>
          </div>

          {/* Glass Container */}
          <div
            className="
        bg-white/70 backdrop-blur-xl
        rounded-3xl px-6 md:px-12 py-10
      "
          >
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              breakpoints={{
                360: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {collaborations.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="
      group h-full
      bg-white/80 backdrop-blur-xl
      border border-[var(--med-border)]
      rounded-2xl p-6
      flex flex-col items-center justify-center
      text-center
      shadow-sm
      hover:shadow-lg hover:-translate-y-1
      transition-all duration-300
    "
                  >
                    {/* Logo */}
                    <div className="h-16 flex items-center justify-center mb-4">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        className="
          max-h-14 object-contain
          opacity-80 group-hover:opacity-100
          transition
        "
                      />
                    </div>

                    {/* Partner Name */}
                    <p className="text-sm font-semibold text-[var(--med-text)]">
                      {item.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--med-light)]">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-(--med-primary) transition">
              Meet Our Dedicated Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              A highly skilled team working alongside Dr. Himanshu Verma to
              deliver advanced vascular and endovascular care with compassion.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="
        group relative rounded-3xl overflow-hidden
        border border-[var(--med-border)]
        shadow-md hover:shadow-xl transition-all duration-500
      "
              >
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[320px] object-cover"
                />

                {/* Hover Overlay */}
                <div
                  className="
          absolute inset-0
          bg-[var(--med-primary)]/75
          backdrop-blur-sm
          flex flex-col items-center justify-center text-center
          opacity-0 group-hover:opacity-90
          transition-all duration-500
          p-6
        "
                >
                  <h3 className="text-lg font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/90">{member.role}</p>

                  {/* Social Icons – render only if URL exists */}
                  {(member.linkedin || member.instagram) && (
                    <div className="flex gap-4 mt-5">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                  w-10 h-10 rounded-full bg-white/20
                  flex items-center justify-center
                  hover:bg-white hover:text-[var(--med-primary)]
                  text-white transition
                "
                        >
                          <FaLinkedinIn />
                        </a>
                      )}

                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                  w-10 h-10 rounded-full bg-white/20
                  flex items-center justify-center
                  hover:bg-white hover:text-[var(--med-primary)]
                  text-white transition
                "
                        >
                          <FaInstagram />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <TestimonialSlider />

      <ConditionsWeTreat />

      <section className="py-12 bg-white">
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2
            className="
        text-3xl md:text-4xl font-bold 
        text-[var(--med-primary)]
        mb-4
      "
            data-aos="fade-up"
          >
            Our Services
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isAlt = idx % 2 !== 0;

            return (
              <div
                key={idx}
                className={`
                rounded-2xl p-8 text-center transition-all duration-300
                border border-[var(--med-border)]
                ${
                  isAlt
                    ? "bg-[var(--med-primary)] text-white"
                    : "bg-[var(--med-light)] text-[var(--med-text)]"
                }
                hover:-translate-y-2
                hover:shadow-xl
              `}
              >
                {/* ICON */}
                <div
                  className={`
                  w-16 h-16 mx-auto mb-6 rounded-full
                  flex items-center justify-center
                  ${
                    isAlt
                      ? "bg-white/20 text-white"
                      : "bg-[var(--med-primary)] text-white"
                  }
                `}
                >
                  <Icon size={32} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-sm leading-relaxed ${
                    isAlt ? "text-white/90" : "text-[var(--med-text)]/70"
                  }`}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="py-12 "
        style={{
          backgroundImage: `url(${faq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 w-11/12 md:w-4/5 mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[var(--med-border)] rounded-xl bg-white/70 backdrop-blur-md overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-semibold text-[var(--med-text)]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-[var(--med-text)]/80 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}
