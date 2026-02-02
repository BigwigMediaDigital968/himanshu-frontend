"use client";

import Script from "next/script";

import Image from "next/image";
import doctorImg from "../assets/logo-removebg-preview.png"; // replace with actual image
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "../components/Button";
import FinalCTA from "../components/CTA";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  BookOpen,
  Presentation,
  ClipboardCheck,
  Handshake,
} from "lucide-react";
import { Award, GraduationCap } from "lucide-react";
import { Trophy, Medal, Star } from "lucide-react";
import FloatingContactActions from "../components/ContactActions";
import PhoneInput from "react-phone-input-2";
import { FaWhatsapp } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import partners from "../assets/ayusync.webp";
import assets from "../assets/vascular-surgery-society-image.jpeg";

const awards = [
  {
    title: "Best Poster – AVATAR 2018",
    desc: "Awarded 1st Prize for Best Poster presentation at AVATAR 2018.",
    icon: Trophy,
  },
  {
    title: "Best Poster Runner-Up",
    desc: "Runner-Up for Best Poster at iCON, Phoenix, Arizona (2014).",
    icon: Medal,
  },
  {
    title: "Invited Faculty – VEITH Symposium",
    desc: "Invited Faculty member at VEITH Symposium, New York (2017 & 2019).",
    icon: Users,
  },
  {
    title: "Research & Publications",
    desc: "Author of 29+ research publications and 9 book chapters.",
    icon: BookOpen,
  },
  {
    title: "Conference Presentations",
    desc: "18 oral presentations and 13 poster presentations at national and international conferences.",
    icon: Presentation,
  },
  {
    title: "Journal Reviewer",
    desc: "Reviewer for the Indian Journal of Vascular & Endovascular Surgery.",
    icon: ClipboardCheck,
  },
];

const collaborations = [
  {
    name: "AyuSynk Devices",
    logo: partners,
    desc: (
      <>
        Collaborative development of an{" "}
        <strong>AI-enabled digital stethoscope</strong> designed for{" "}
        <strong>remote AV fistula monitoring</strong>. This innovation enables
        early detection of vascular access complications and continuous care
        beyond hospital settings.
      </>
    ),
    tags: ["AI-Enabled Diagnostics", "Remote Monitoring", "AV Fistula Care"],
  },
  // {
  //   name: "MedTech Innovations",
  //   logo: partners,
  //   desc: (
  //     <>
  //       Partnership focused on{" "}
  //       <strong>advanced vascular imaging systems</strong> to enhance diagnostic
  //       accuracy and procedural planning in complex arterial and venous
  //       diseases.
  //     </>
  //   ),
  //   tags: ["Vascular Imaging", "Endovascular Planning", "Precision Care"],
  // },
  // {
  //   name: "VascuSense Health",
  //   logo: partners,
  //   desc: (
  //     <>
  //       Joint research on <strong>wearable vascular monitoring devices</strong>{" "}
  //       aimed at early detection of peripheral arterial disease and
  //       post-procedure follow-up.
  //     </>
  //   ),
  //   tags: ["Wearable Health Tech", "PAD Monitoring", "Preventive Care"],
  // },
];

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Himanshu Verma",
  image: "https://www.drhimanshuverma.com/logo-removebg-preview.png", // optional but recommended
  description:
    "Dr. Himanshu Verma is a highly experienced Vascular & Endovascular Surgeon with over 17 years of clinical expertise. He is Director – Vascular & Endovascular Surgery at Fortis Memorial Research Centre, Gurgaon, specializing in complex arterial, venous, lymphatic, and dialysis-access disorders using advanced minimally invasive and evidence-based techniques.",
  medicalSpecialty: ["Vascular Surgery", "Endovascular Surgery"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Fortis Memorial Research Centre, Opposite HUDA City Centre, Sector 44",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.4541",
    longitude: "77.0720",
  },
  telephone: "+91-8826833598",
  url: "https://www.drhimanshuverma.com/about",
  priceRange: "₹₹₹",
  openingHours: ["Mo-Sa 10:00-18:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "501",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Banaras Hindu University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Narayana Hrudayalaya, Bangalore",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Mayo Clinic, USA",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Johns Hopkins Hospital, USA",
    },
  ],
  knowsAbout: [
    "Varicose Veins Treatment",
    "Peripheral Artery Disease",
    "Diabetic Foot Care",
    "Endovascular Procedures",
    "Limb Salvage Surgery",
    "Dialysis Access Surgery",
    "Pelvic Venous Disease",
    "Onco-Vascular Surgery",
    "Aneurysm Repair",
    "Vascular Trauma & Emergency Care",
  ],
  sameAs: [
    // add real profiles when available
    // "https://www.linkedin.com/in/…",
    // "https://www.google.com/maps?cid=…"
  ],
};

export default function About() {
  const [openPopup, setOpenPopup] = useState(false);

  // INITIALIZE AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      {/* Physician Schema Markup */}
      <Script
        id="about-physician-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />
      {/* SEO Meta Tags */}

      <title>
        About Dr. Himanshu Verma | Vascular & Endovascular Surgeon, Fortis FMRI
      </title>
      <meta
        name="title"
        content="About Dr. Himanshu Verma | Vascular & Endovascular Surgeon, Fortis FMRI"
      />
      <meta
        name="description"
        content="Know Dr. Himanshu Verma, Director – Vascular & Endovascular Surgery at Fortis FMRI Gurgaon, with 17+ years of expertise in complex vascular and limb-saving procedures."
      />

      <link rel="canonical" href="https://www.drhimanshuverma.com/about" />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Dr. Himanshu Verma | Vascular & Endovascular Surgeon in Gurgaon"
      />
      <meta
        property="og:description"
        content="Dr. Himanshu Verma is a leading Vascular & Endovascular Surgeon in Gurgaon with 17+ years of experience, specializing in AV fistula, varicose veins, peripheral arterial disease (PAD) & limb salvage using advanced minimally invasive techniques."
      />
      <meta
        property="og:image"
        content="https://www.drhimanshuverma.com/_next/static/media/logo-removebg-preview.2f05ed1b.png"
      />
      <meta property="og:url" content="https://www.drhimanshuverma.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dr Himanshu Verma" />
      <meta property="og:locale" content="en_IN" />

      <div>
        <Nav />
        <section className="py-12 bg-[#64bab4] rounded-r-full">
          <div className="w-11/12 md:w-5/6 mx-auto gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Qualifications */}
              <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
                MBBS, MS, MCh (Vascular Surgery), FEVS
                <br />
                <span className="normal-case text-[var(--med-text)]/70">
                  (Vascular & Endovascular Surgeon)
                </span>
              </p>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
                Dr. Himanshu Verma
              </h1>

              {/* Description */}
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                Director – Vascular & Endovascular Surgery at Fortis FMRI,
                Gurgaon, Dr. Himanshu Verma is a highly experienced vascular
                specialist with over 17 years of clinical expertise in treating
                complex arterial, venous, lymphatic, and dialysis-access
                disorders. He is known for delivering advanced, patient- focused
                vascular care using evidence-based and minimally invasive
                techniques.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="w-11/12 md:w-5/6 mx-auto">
            {/* TOP: CONTENT + IMAGE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-16">
              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--med-text)] mb-6">
                  Dr. Himanshu Verma
                </h2>

                <p className="text-[var(--med-text)]/75 leading-relaxed mb-4 text-justify">
                  Dr. Himanshu Verma is a Director – Vascular & Endovascular
                  Surgeon with over 17 years of extensive clinical experience in
                  the comprehensive management of complex vascular conditions.
                  His expertise spans arterial, venous, lymphatic, and
                  dialysis-access disorders, with a special focus on high-risk
                  and limb- or life-threatening cases.
                </p>

                <p className="text-[var(--med-text)]/75 leading-relaxed text-justify mb-6">
                  He specializes in advanced endovascular interventions, open
                  vascular surgery, and hybrid procedures, tailoring treatment
                  strategies to individual patient needs. Dr. Verma is deeply
                  involved in complex vascular reconstructions, onco-vascular
                  surgery, emergency and trauma care, limb salvage, pelvic
                  venous disease, dialysis access creation, and advanced
                  arterial revascularization. His approach emphasizes
                  evidence-based, multidisciplinary, and patient-centric care.
                </p>

                <ButtonFill
                  onClick={() => setOpenPopup(true)}
                  text="Request a Callback"
                />
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center ">
                <div
                  className="
                relative w-72 h-72 md:w-96 md:h-96
                overflow-hidden
                border border-[var(--med-border)]
                shadow-[0_20px_40px_rgba(11,141,133,0.15)]
              "
                >
                  <Image
                    src={doctorImg}
                    alt="Doctor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM: EXPERIENCE & SPECIALIZATION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* EXPERIENCE */}
              <div
                className="
              bg-[var(--med-light)]
              border border-[var(--med-border)]
              rounded-2xl p-8
            "
              >
                <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-4">
                  Experience
                </h3>
                <p className="text-[var(--med-text)]/75 leading-relaxed">
                  Over 17 years of extensive clinical experience in vascular and
                  endovascular surgery, currently serving as Director – Vascular
                  & Endovascular Surgery at Fortis FMRI, Gurgaon. Proven
                  expertise in managing high-risk, complex, and advanced
                  vascular cases with consistent clinical excellence.
                </p>
              </div>

              {/* SPECIALIZATION */}
              <div
                className="
              bg-[var(--med-light)]
              border border-[var(--med-border)]
              rounded-2xl p-8
            "
              >
                <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-4">
                  Specialization
                </h3>
                <ul className="space-y-2 text-[var(--med-text)]/75">
                  <li>• Complex arterial and venous reconstructions</li>
                  <li>
                    • Endovascular interventions & hybrid vascular procedures
                  </li>
                  <li>• Limb salvage, trauma & emergency vascular care</li>
                  <li>• Dialysis access surgery & pelvic venous disease</li>
                  <li>
                    • Onco-vascular surgery & advanced arterial
                    revascularization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-11/12 md:w-5/6 mt-10 mx-auto  bg-[var(--med-light)] px-8 py-5 rounded-2xl">
            <h3 className="text-2xl font-semibold text-[var(--med-primary)] mb-6">
              Professional Society Memberships
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[var(--med-text)]/80">
              <li>• Association of Surgeons of India (ASI)</li>
              <li>• Vascular Society of India</li>
              <li>• Society of Vascular Surgery (USA)</li>
              <li>• South Asian American Vascular Society</li>
              <li>• Varanasi Nephrology Society</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="w-11/12 md:w-5/6 mx-auto">
            {/* HEADER */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-4">
                Education & Training
              </h2>
              <p className="text-[var(--med-text)]/70 max-w-2xl mx-auto">
                Academic excellence and advanced surgical training that form the
                foundation of trusted vascular care.
              </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* LEFT — LATEST / HIGHLIGHT */}
              <div
                className="
          lg:col-span-1
          bg-[var(--med-light)]
          border-2 border-[var(--med-primary)]
          rounded-3xl p-8 lg:h-[53vh]
          shadow-[0_25px_50px_rgba(11,141,133,0.18)]
          relative
        "
                data-aos="fade-up"
              >
                {/* BADGE */}
                <span className="absolute top-6 right-6 bg-[var(--med-primary)] text-white text-xs px-4 py-1 rounded-full">
                  Latest Training
                </span>

                <div className="w-14 h-14 rounded-full bg-[var(--med-primary)]/15 flex items-center justify-center mb-6">
                  <Award className="text-[var(--med-primary)]" size={28} />
                </div>

                <h3 className="text-xl font-bold text-[var(--med-text)] mb-4">
                  Recent Advanced Training
                </h3>

                <p className="text-[var(--med-text)]/80 leading-relaxed font-medium">
                  Recently trained in Foam Sclerotherapy <br />
                  Bassi-Tessari Phlebolymphology Academy, Italy
                </p>
              </div>

              {/* RIGHT — 6 ITEMS (OLDER → NEWER TOP TO BOTTOM) */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* 1 */}
                <div className="bg-white border border-[var(--med-border)] rounded-2xl p-6">
                  <h4 className="font-semibold text-[var(--med-text)]">MBBS</h4>
                  <p className="text-sm text-[var(--med-text)]/70">
                    Banaras Hindu University <br />
                    (2002–2008)
                  </p>
                </div>

                {/* 2 */}
                <div className="bg-white border border-[var(--med-border)] rounded-2xl p-6">
                  <h4 className="font-semibold text-[var(--med-text)]">
                    MS General Surgery
                  </h4>
                  <p className="text-sm text-[var(--med-text)]/70">
                    Banaras Hindu University <br />
                    (2008–2011)
                  </p>
                </div>

                {/* 3 */}
                <div className="bg-white border border-[var(--med-border)] rounded-2xl p-6">
                  <h4 className="font-semibold text-[var(--med-text)]">
                    Fellowship in Vascular Surgery
                  </h4>
                  <p className="text-sm text-[var(--med-text)]/70">
                    Narayana Hrudayalaya, Bangalore <br />
                    (2011–2014)
                  </p>
                </div>

                {/* 4 */}
                <div className="bg-white border border-[var(--med-border)] rounded-2xl p-6">
                  <h4 className="font-semibold text-[var(--med-text)]">
                    Ted Rogers Clinical Research Fellowship
                  </h4>
                  <p className="text-sm text-[var(--med-text)]/70">
                    Mayo Clinic, USA <br />
                    (2015–2016)
                  </p>
                </div>

                {/* 5 */}
                <div className="bg-white border border-[var(--med-border)] rounded-2xl p-6">
                  <h4 className="font-semibold text-[var(--med-text)]">
                    Advanced Clinical Exposure
                  </h4>
                  <p className="text-sm text-[var(--med-text)]/70">
                    Johns Hopkins Hospital, USA
                  </p>
                </div>

                {/* 6 */}
                <div className="bg-white border border-[var(--med-border)] rounded-2xl p-6">
                  <h4 className="font-semibold text-[var(--med-text)]">
                    European Vascular Training
                  </h4>
                  <p className="text-sm text-[var(--med-text)]/70">
                    European Vascular Courses & international programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <WhyChooseUs /> */}

        <section className="py-12 bg-white relative overflow-hidden">
          <div className="relative w-11/12 md:w-5/6 mx-auto">
            {/* HEADER */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-4">
                Awards & Achievements
              </h2>
              <p className="text-[var(--med-text)]/70 max-w-2xl mx-auto">
                Milestones that reflect excellence, dedication, and leadership
                in vascular and endovascular care.
              </p>
            </div>

            {/* RIBBON CONTENT */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {awards.map((award, idx) => {
                const Icon = award.icon;
                return (
                  <div
                    key={idx}
                    className="
                  w-full
                  bg-white
                  border border-[var(--med-border)]
                  rounded-3xl
                  px-8 py-10
                  text-center
                  shadow-[0_18px_40px_rgba(11,141,133,0.15)]
                  hover:-translate-y-2
                  transition-all duration-300
                "
                    data-aos="fade-up"
                    data-aos-delay={idx * 120}
                  >
                    {/* ICON */}
                    <div className="mx-auto w-16 h-16 rounded-full bg-[var(--med-primary)]/15 flex items-center justify-center mb-6">
                      <Icon size={30} className="text-[var(--med-primary)]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold text-[var(--med-text)] mb-3">
                      {award.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-[var(--med-text)]/70 leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Association with society of Vascular Surgery */}
        <section
          className="w-full py-16"
          style={{ backgroundColor: "var(--med-light)" }}
        >
          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-4">
              Association with the Society of Vascular Surgery (SVS)
            </h2>
            <p className="text-[var(--med-text)]/70 max-w-2xl mx-auto">
              Alignment with International Vascular Surgery Standards
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left: Image */}
              <div className="w-full">
                <Image
                  src={assets}
                  alt="International Vascular Surgery Standards"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-md object-cover border w-full h-auto"
                  style={{ borderColor: "var(--med-border)" }}
                />
              </div>

              {/* Right: Content */}
              <div>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--med-text)" }}
                >
                  Our vascular and endovascular practice is guided by
                  evidence-based protocols and internationally accepted clinical
                  standards.
                </p>

                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--med-text)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--med-primary)" }}
                  >
                    Dr. Himanshu Verma
                  </span>{" "}
                  is an International Member of the Society of Vascular Surgery
                  (SVS), USA, the world’s leading professional body dedicated to
                  advancing vascular health through research, education, and
                  clinical guidelines.
                </p>

                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--med-text)" }}
                >
                  Our clinical decision-making, patient counselling, and
                  treatment planning are aligned with SVS clinical practice
                  guidelines, adapted thoughtfully to Indian patient profiles
                  and healthcare settings.
                </p>

                <p
                  className="leading-relaxed"
                  style={{ color: "var(--med-text)" }}
                >
                  We believe that combining international standards with local
                  clinical expertise leads to safer procedures, better long-term
                  outcomes, and informed patient participation in care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 relative overflow-hidden bg-white">
          <div className="relative w-11/12 md:w-5/6 mx-auto">
            {/* TITLE */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)]">
                Industry Collaboration
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Partnering with innovative healthcare technology companies to
                advance vascular diagnostics and remote patient monitoring.
              </p>
            </div>

            {/* CAROUSEL WRAPPER */}
            <div className="relative">
              {/* LEFT ARROW */}
              <button
                className="hidden md:flex collab-prev absolute -left-16 top-1/2 -translate-y-1/2 z-10
                  w-12 h-12 rounded-full bg-white shadow-lg
                  items-center justify-center
                  text-[var(--med-primary)]
                  hover:bg-[var(--med-primary)] hover:text-white
                  transition"
                aria-label="Previous collaboration"
              >
                <ChevronLeft size={22} />
              </button>

              {/* RIGHT ARROW */}
              <button
                className="hidden md:flex collab-next absolute -right-16 top-1/2 -translate-y-1/2 z-10
                  w-12 h-12 rounded-full bg-white shadow-lg
                  items-center justify-center
                  text-[var(--med-primary)]
                  hover:bg-[var(--med-primary)] hover:text-white
                  transition"
                aria-label="Next collaboration"
              >
                <ChevronRight size={22} />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".collab-prev",
                  nextEl: ".collab-next",
                }}
                spaceBetween={32}
                slidesPerView={1}
              >
                {collaborations.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    {/* GLASS CARD */}
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
                        {/* LOGO */}
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
                            src={item.logo}
                            alt={item.name}
                            className="max-h-16 object-contain"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="w-full md:w-3/4 text-center md:text-left">
                          <h3 className="text-xl md:text-2xl font-semibold text-[var(--med-text)] mb-3">
                            {item.name}
                          </h3>

                          <p className="text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>

                          {/* TAGS */}
                          <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                            {item.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-4 py-1.5 text-xs font-medium rounded-full
                                    bg-[var(--med-light)]
                                    text-[var(--med-primary)]
                                    border border-[var(--med-border)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="py-12 ">
          <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT — CONTACT INFO */}
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-6">
                Get in Touch
              </h2>

              <p className="text-[var(--med-text)]/70 mb-10 max-w-md">
                Have a medical query or need guidance about your treatment
                options? Our support team will connect with you and help you
                take the next step.
              </p>

              <div className="space-y-6">
                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                    <MapPin className="text-[var(--med-primary)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--med-text)]">
                      Address
                    </p>
                    <p className="text-[var(--med-text)]/70 text-sm">
                      Fortis Memorial Research Centre, Opposite HUDA City
                      Centre,
                      <br />
                      Sector 44, Gurugram, Haryana 122003
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                    <Phone className="text-[var(--med-primary)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--med-text)]">
                      Phone
                    </p>
                    <p className="text-[var(--med-text)]/70 text-sm">
                      <a href="tel:+918826833598">+91 88268 33598</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                    <BsWhatsapp className="w-6 h-6 text-[var(--med-primary)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--med-text)]">
                      Whatsapp
                    </p>
                    <p className="text-[var(--med-text)]/70 text-sm">
                      <a href="https://wa.me/918826833598">+91 88268 33598</a>
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                    <Mail className="text-[var(--med-primary)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--med-text)]">
                      Email
                    </p>
                    <p className="text-[var(--med-text)]/70 text-sm">
                      <a href="mailto:varenyamvascular@gmail.com">
                        varenyamvascular@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* TIMING */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                    <Clock className="text-[var(--med-primary)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--med-text)]">
                      Working Hours
                    </p>
                    <p className="text-[var(--med-text)]/70 text-sm">
                      Mon – Sat: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — CONTACT FORM */}
            <div
              data-aos="fade-up"
              className="
            bg-white/90 backdrop-blur-xl
            border border-[var(--med-border)]
            rounded-3xl p-8 md:p-10
            shadow-[0_20px_40px_rgba(11,141,133,0.15)]
          "
            >
              <h3 className="text-2xl font-bold text-[var(--med-primary)] mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none
              "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none
              "
                />

                <div className="w-full">
                  <PhoneInput
                    country="in"
                    enableSearch
                    countryCodeEditable={false}
                    placeholder="Phone Number"
                    inputClass="!w-full !h-[48px] !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-teal-500"
                  />
                </div>

                <div>
                  <select
                    className="
      w-full mt-1 px-4 py-2.5 rounded-lg
      border border-gray-300
      bg-white/10
      text-gray-800
      focus:outline-none
      focus:border-[var(--med-primary)]
    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Disease
                    </option>
                    <option value="Varicose Vein Treatments">
                      Varicose Vein Treatments
                    </option>
                    <option value="Dialysis Access (AV Fistula & CKD Care)">
                      Dialysis Access (AV Fistula & CKD Care)
                    </option>
                    <option value="Peripheral Artery Disease – Diagnosis & Treatment">
                      Peripheral Artery Disease – Diagnosis & Treatment
                    </option>
                    <option value="Aortic & Major Vessel Interventions">
                      Aortic & Major Vessel Interventions
                    </option>
                    <option value="Visceral Artery Interventions">
                      Visceral Artery Interventions
                    </option>
                    <option value="Carotid & Upper-Body Artery Procedures">
                      Carotid & Upper-Body Artery Procedures
                    </option>
                    <option value="Venous & Lymphedema Care">
                      Venous & Lymphedema Care
                    </option>
                    <option value="Diabetic Foot & Wound Care">
                      Diabetic Foot & Wound Care
                    </option>
                    <option value="Diagnostic & Support Services">
                      Diagnostic & Support Services
                    </option>
                    <option value="AV Fistula Care Workshop">
                      AV Fistula Care Workshop
                    </option>
                    <option value="Preventive & Advisory Services">
                      Preventive & Advisory Services
                    </option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none resize-none
              "
                />

                <div>
                  <input
                    type="file"
                    accept="application/pdf"
                    className="
      w-full px-4 py-2.5
      rounded-lg
      border border-gray-300
      bg-white/10
      text-gray-700 text-sm
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:bg-[var(--med-primary)]/10
      file:text-[var(--med-primary)]
      hover:file:bg-[var(--med-primary)]/20
      focus:outline-none
      focus:border-[var(--med-primary)]
    "
                  />
                </div>

                <ButtonFill type="submit" text="Submit" className="w-full" />
              </form>
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
        <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
        <FloatingContactActions />
      </div>
    </>
  );
}
