"use client";
import Image from "next/image";
import Nav from "./components/Navbar";
import HeroCarousel from "./components/Hero";
import ButtonFill from "./components/Button";
import PopupForm from "./components/Popup";
import { useState, useEffect } from "react";

import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import {
  Activity,
  CheckCircle2,
  ChevronDown,
  Footprints,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import TestimonialSlider from "./components/Testimonial";
import faq from "./assets/faq.png";
import FinalCTA from "./components/CTA";
import ConditionsWeTreat from "./components/ConditionWeTreat";
import team2 from "./assets/team/chandrakanta.webp";
import team3 from "./assets/team/sanoj.webp";
import team4 from "./assets/team/trish.webp";
import team5 from "./assets/team/Ms Saisri.jpeg";
import team6 from "./assets/team/Dr.Monika Doohun.jpeg";
import WhyChooseUs from "./components/WhyChooseUs";
import FloatingContactActions from "./components/ContactActions";
import himanshu from "./assets/logo-removebg-preview.png";
import Link from "next/link";
import partners from "./assets/ayusync.webp";

const faqs = [
  {
    q: "What does a vascular surgeon do?",
    a: "A vascular surgeon diagnoses and treats diseases of the blood vessels, including arteries, veins, and the lymphatic system. This includes conditions such as blocked arteries, varicose veins, diabetic foot problems, blood clots, aneurysms, and dialysis access issues. Treatment may involve medical management, minimally invasive endovascular procedures, or open vascular surgery, depending on the condition.",
  },
  {
    q: "When should I see a vascular surgeon?",
    a: "You should consult a vascular surgeon if you have symptoms like leg pain while walking, persistent leg swelling, visible or painful varicose veins, non-healing wounds, diabetic foot ulcers, sudden limb swelling, numbness, or coldness in the hands or feet. Early evaluation helps prevent serious complications such as infections, limb loss, or life-threatening vascular events.",
  },
  {
    q: "What conditions are treated by Dr. Himanshu Verma?",
    a: "Dr. Himanshu Verma treats a wide range of vascular conditions, including varicose veins, peripheral artery disease (PAD), diabetic foot and non-healing wounds, deep vein thrombosis (DVT), aortic and peripheral aneurysms, carotid artery disease, and dialysis access problems such as AV fistula blockage or failure.",
  },
  {
    q: "What is endovascular treatment and how is it beneficial?",
    a: "Endovascular treatment is a minimally invasive method used to treat vascular diseases through small punctures instead of large surgical cuts. It often involves the use of catheters, balloons, or stents to restore blood flow. Benefits include less pain, faster recovery, reduced hospital stay, and lower risk compared to traditional open surgery in suitable patients.",
  },
  {
    q: "Can vascular problems be treated without major surgery?",
    a: "Yes, many vascular conditions can now be treated using minimally invasive endovascular procedures rather than major open surgery. These treatments are performed through small needle punctures and are commonly used for conditions like blocked arteries, varicose veins, blood clots, and dialysis access issues. However, the treatment approach depends on the severity of the disease, the overall health of the patient, and anatomical factors.",
  },
];

const services = [
  {
    title: "Varicose Vein Treatments",
    desc: "Comprehensive evaluation and minimally invasive treatment options for varicose veins, including laser and endovenous procedures.",
    icon: Stethoscope,
  },
  {
    title: "Dialysis Access & AV Fistula Care",
    desc: "Expert creation, maintenance, and salvage of AV fistulas and dialysis access for patients with chronic kidney disease.",
    icon: Activity,
  },
  {
    title: "Peripheral Artery Disease (PAD)",
    desc: "Advanced diagnosis and treatment of peripheral artery disease using endovascular, open, and hybrid revascularization techniques.",
    icon: HeartPulse,
  },
  {
    title: "Diabetic Foot & Wound Care",
    desc: "Multidisciplinary management of diabetic foot ulcers and complex wounds with a strong focus on limb salvage.",
    icon: Footprints,
  },
];

const teamMembers = [
  {
    name: "Dr. Himanshu Verma",
    role: "Director – Vascular & Endovascular Surgeon",
    image: himanshu,
    description:
      "A leading Vascular & Endovascular Surgeon at Fortis Hospital, Gurgaon, Dr. Himanshu Verma has extensive experience in managing complex vascular conditions. A trainer and the founder of AVF Care Workshop, he is dedicated to advancing fistula care through education, training, and patient-centered clinical excellence, and also hosts the Doc Talk Show podcast.",
  },
  {
    name: "Ms. Chanderkanta",
    role: "Program Manager, Department of Vascular Surgery",
    image: team2,
    description:
      "Ms. Chandrakanta Thakur leads the AVF Care Workshop as Head of Programs and Strategic Partnerships, overseeing strategy, hospital partnerships, and multi-city execution. As Program Manager, she ensures smooth operations, revenue growth, NABH compliance, MIS and MBR reporting, and team performance. Her leadership aligns patient-first care with operational discipline and sustainable program growth.",
  },
  {
    name: "Dr. Trisha Sachan",
    role: "Renal Nutritionist & Clinical Research Associate",
    image: team4,
    description:
      "Dr. Trisha Sachan holds a PhD in Renal Nutrition and specializes in diet planning for patients with kidney disease. Her clinical and research expertise supports improved patient outcomes through nutrition guidance, preventive care, and evidence-based workshop practices.",
  },
  {
    name: "Mr. Sanoj Yadav",
    role: "Vascular Access Nurse",
    image: team3,
    description:
      "Mr. Sanoj Yadav is a dedicated Vascular Access Nurse with hands-on experience in dialysis patient care. He focuses on patient education, access monitoring, and post-procedure support, ensuring consistent and high-quality care across all affiliated centers.",
  },
  {
    name: "Ms Saisri",
    role: "Patient care coordinator",
    image: team5,
    description:
      "Ms. Saisri is a Patient Care Coordinator dedicated to ensuring a smooth and supportive healthcare experience for patients. She serves as a key point of contact, assisting with appointment scheduling, coordination of care, and communication between patients, families, and the medical team.",
  },
  {
    name: "Dr. Monika Doohun",
    role: "Resident",
    image: team6,
    description:
      "Dr. Monika is a resident in the Department of Vascular and Endovascular Surgery, where she works closely with senior surgeons in the management of patients undergoing vascular procedures. Her responsibilities include assisting in preoperative evaluation, patient preparation, and coordination of investigations, as well as active involvement in postoperative care and follow-up. She contributes to patient monitoring, wound care, and management of complications under supervision.",
  },
];

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
                Director – Vascular & Endovascular Surgeon
              </p>
            </div>

            <p className="text-[var(--med-text)]/90 leading-relaxed mb-4 text-justify">
              Dr. Himanshu Verma is a Director - Vascular & Endovascular Surgeon
              (specializes in diagnosing, managing, and treating diseases of the
              blood vessels) with over 17 years of extensive clinical experience
              in managing complex arterial, venous, lymphatic, and
              dialysis-access disorders. He is widely recognized for treating
              high-risk and limb- or life-threatening vascular conditions using
              advanced, evidence-based techniques.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <li className="flex items-start gap-3 rounded-xl border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-3 transition hover:border-[var(--med-primary)] hover:shadow-sm">
                <CheckCircle2
                  className="text-[var(--med-primary)] mt-1"
                  size={20}
                />
                <span className="text-[var(--med-text)]/85">
                  17+ years of vascular & endovascular experience
                </span>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-3 transition hover:border-[var(--med-primary)] hover:shadow-sm">
                <CheckCircle2
                  className="text-[var(--med-primary)] mt-1"
                  size={20}
                />
                <span className="text-[var(--med-text)]/85">
                  Director – Vascular & Endovascular Surgery, Fortis FMRI
                </span>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-3 transition hover:border-[var(--med-primary)] hover:shadow-sm">
                <CheckCircle2
                  className="text-[var(--med-primary)] mt-1"
                  size={20}
                />
                <span className="text-[var(--med-text)]/85">
                  Expertise in minimally invasive & hybrid vascular procedures
                </span>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-3 transition hover:border-[var(--med-primary)] hover:shadow-sm">
                <CheckCircle2
                  className="text-[var(--med-primary)] mt-1"
                  size={20}
                />
                <span className="text-[var(--med-text)]/85">
                  Patient-centric, multidisciplinary approach to complex cases
                </span>
              </li>
            </ul>

            <div>
              {/* keep using your ButtonFill; setOpenPopup should come from outer scope */}
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Request a Callback"
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
                  src={himanshu}
                  alt="Doctor"
                  fill
                  className="object-contain object-center transform transition-transform duration-700"
                  priority
                />
              </div>

              {/* small overlay badge on the polygon for credibility */}
              <div className="absolute -bottom-4 left-6 md:left-8 bg-white/95 rounded-full px-3 py-1 border border-[var(--med-border)] text-sm text-[var(--med-text)]">
                17+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-12 bg-[var(--med-light)]">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)]">
              Meet Our Dedicated Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              A highly skilled team working alongside Dr. Himanshu Verma to
              deliver advanced vascular and endovascular care with compassion.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="group relative rounded-3xl overflow-hidden
  border border-[var(--med-border)]
  bg-white shadow-md hover:shadow-xl transition-all duration-500
  cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative h-[390px] md:h-[420px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain
              transition-transform duration-700
              group-hover:scale-105"
                  />
                </div>

                {/* STATIC NAME BAR */}
                <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 group-hover:opacity-0">
                  <h3 className="text-lg font-semibold text-[var(--med-primary)]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>

                  {/* Mobile CTA */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(activeIndex === index ? null : index);
                    }}
                    className="mt-2 text-sm font-medium text-[var(--med-primary)] underline lg:hidden"
                  >
                    View Profile
                  </button>
                </div>

                {/* HOVER FULL-HEIGHT TRANSLUCENT PANEL */}
                <div
                  className={`
    absolute inset-0
    bg-[var(--med-primary)]/60
    backdrop-blur-md
    text-white
    px-6 py-8
    transition-all duration-500 ease-out
    flex flex-col justify-end

    ${
      activeIndex === index
        ? "translate-y-0 opacity-100"
        : "translate-y-full opacity-0"
    }

    lg:translate-y-full
    lg:opacity-100
    lg:group-hover:translate-y-0
  `}
                >
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>

                  <p className="text-sm text-white/80 mb-4">{member.role}</p>

                  <p className="text-sm text-white/90 leading-relaxed text-justify">
                    {member.description}
                  </p>

                  {/* Mobile hint */}
                  <span className="mt-4 text-xs text-white/70 lg:hidden">
                    Tap to close
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        {/* SECTION HEADER */}
        <div className="w-11/12 md:w-5/6 mx-auto flex gap-2 justify-between mb-14">
          <div className="hidden lg:block"></div>
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
          <Link href="/services">
            <ButtonFill text="All Services" />
          </Link>
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

      <ConditionsWeTreat />

      <section className="py-14 relative overflow-hidden">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)]">
              Industry Collaboration
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Partnering with innovative healthcare technology companies to
              advance vascular diagnostics and remote patient monitoring.
            </p>
          </div>

          {/* Glass Card */}
          <div
            className="
        bg-white/70 backdrop-blur-xl
        border border-[var(--med-border)]
        rounded-3xl
        px-6 md:px-12 py-10
        shadow-md
      "
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo */}
              <div
                className="
            w-full md:w-1/4
            flex items-center justify-center
            bg-white/80 backdrop-blur
            border border-[var(--med-border)]
            rounded-2xl
            p-6
            shadow-sm
          "
              >
                <Image
                  src={partners} // import your logo
                  alt="AyuSynk Devices"
                  className="max-h-16 object-contain"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--med-text)] mb-3">
                  AyuSynk Devices
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Collaborative development of an{" "}
                  <strong>AI-enabled digital stethoscope </strong>
                  designed for <strong>remote AV fistula monitoring</strong>.
                  This innovation aims to enable early detection of vascular
                  access complications, improve patient outcomes, and support
                  continuous monitoring beyond hospital settings.
                </p>

                {/* Optional highlight pills */}
                <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                  <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-[var(--med-light)] text-[var(--med-primary)] border border-[var(--med-border)]">
                    AI-Enabled Diagnostics
                  </span>
                  <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-[var(--med-light)] text-[var(--med-primary)] border border-[var(--med-border)]">
                    Remote Monitoring
                  </span>
                  <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-[var(--med-light)] text-[var(--med-primary)] border border-[var(--med-border)]">
                    AV Fistula Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

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
                  openIndex === i ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
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
      {/* <UserInfoCarouselPopup /> */}
    </div>
  );
}
