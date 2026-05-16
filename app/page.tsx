"use client";
import Image from "next/image";
import Nav from "./components/Navbar";
import HeroCarousel from "./components/Hero";
import ButtonFill from "./components/Button";
import PopupForm from "./components/Popup";
import { useState, useEffect } from "react";
import Script from "next/script";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { CheckCircle2, ChevronDown, Scissors, Stethoscope } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Activity,
  HeartPulse,
  Syringe,
  ShieldPlus,
  Footprints,
  Droplets,
  Wind,
  Network,
  Microscope,
  Ambulance,
  GitBranch,
  Cpu,
  Star,
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
import ServiceTable from "./components/ServiceTable";

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
    a: (
      <>
        Dr. Himanshu Verma treats a wide range of vascular conditions, including{" "}
        <a
          className="text-[#0b8d85]"
          href="https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon"
        >
          varicose veins
        </a>
        ,{" "}
        <a
          className="text-[#0b8d85]"
          href="https://www.drhimanshuverma.com/services/peripheral-artery-disease-treatment-in-gurgaon"
        >
          peripheral artery disease (PAD)
        </a>
        , diabetic foot and non-healing wounds, deep vein thrombosis (DVT),
        aortic and peripheral aneurysms, carotid artery disease, and dialysis
        access problems such as AV fistula blockage or failure.
      </>
    ),
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

// const services = [
//   {
//     title: "Varicose Veins, Chronic Venous Disorders & Lymphatic Care",
//     desc: "Comprehensive management of varicose veins, venous insufficiency, and lymphatic disorders using minimally invasive techniques.",
//     icon: Droplets,
//     link: "/services/varicose-veins-treatment-in-gurgaon",
//   },
//   {
//     title: "Pelvic Venous Disorders & Gonadal Vein Disease",
//     desc: "Advanced diagnosis and treatment of pelvic congestion syndrome and gonadal vein disorders causing chronic pelvic pain.",
//     icon: HeartPulse,
//     link: "/services/pelvic-venous-disorder-treatment-in-gurgaon",
//   },
//   {
//     title: "AV Fistula, Dialysis Access & Central Venous Care",
//     desc: "Creation, maintenance, and salvage of dialysis access including AV fistulas, grafts, and central venous interventions.",
//     icon: Syringe,
//     link: "/services/av-fistula-treatment-in-gurgaon",
//   },
//   {
//     title: "Peripheral Artery Disease (PAD) & Advanced Limb Salvage",
//     desc: "Endovascular and surgical treatment of PAD focused on restoring blood flow and preventing limb loss.",
//     icon: ShieldPlus,
//   },
//   {
//     title: "Diabetic Foot, Wound Care & Minor Amputations",
//     desc: "Specialized care for diabetic foot ulcers, chronic wounds, infection control, and limb-preserving procedures.",
//     icon: Footprints,
//   },
//   {
//     title: "Deep Vein Thrombosis (DVT) & Advanced Venous Interventions",
//     desc: "Expert management of acute and chronic DVT using catheter-based thrombolysis and venous reconstruction.",
//     icon: Activity,
//   },
//   {
//     title: "Pulmonary Embolism (PE) Management",
//     desc: "Rapid diagnosis and minimally invasive treatment of pulmonary embolism to reduce mortality and complications.",
//     icon: Wind,
//   },
//   {
//     title: "Aortic, Visceral & Renal Artery Interventions",
//     desc: "Endovascular treatment of complex aortic, visceral, and renal artery diseases using advanced stent technologies.",
//     icon: Network,
//   },
//   {
//     title: "Onco-Vascular Surgery & Rare Vascular Disorders",
//     desc: "Specialized vascular procedures in oncology patients and management of rare and complex vascular conditions.",
//     icon: Microscope,
//   },
//   {
//     title: "Vascular Trauma, Pediatric & Iatrogenic Vascular Injuries",
//     desc: "Emergency and reconstructive care for traumatic, pediatric, and procedure-related vascular injuries.",
//     icon: Ambulance,
//   },
//   {
//     title: "AV Malformations & Complex Vascular Anomalies",
//     desc: "Multidisciplinary treatment of arteriovenous malformations and congenital vascular anomalies.",
//     icon: GitBranch,
//   },
//   {
//     title: "ECMO Cannulation & Large-Bore Access Care",
//     desc: "Expert cannulation and management of ECMO and other large-bore vascular access systems in critical care.",
//     icon: Cpu,
//   },
//   {
//     title: "Special Interests",
//     desc: "Focused expertise in advanced vascular techniques, complex cases, and emerging endovascular innovations.",
//     icon: Star,
//   },
// ];

const services = [
  {
    title: "Varicose Veins",
    desc: "Minimally invasive treatment for varicose veins with faster recovery and improved circulation.",
    icon: Droplets,
    link: "/services/varicose-veins-treatment-in-gurgaon",
  },
  {
    title: "Chronic Venous Insufficiency",
    desc: "Advanced care for long-term venous disorders causing swelling, pain, and skin changes.",
    icon: Activity,
    link: "/services/chronic-venous-insufficiency-treatment-in-gurgaon",
  },
  {
    title: "Lymphatic Care",
    desc: "Comprehensive management of lymphedema and lymphatic drainage disorders.",
    icon: GitBranch,
    link: "/services/lymphatic-care-treatment-in-gurgaon",
  },
  {
    title: "Pelvic Venous Disorders",
    desc: "Treatment for pelvic congestion syndrome and chronic pelvic pain due to vein issues.",
    icon: HeartPulse,
    link: "/services/pelvic-venous-disorder-treatment-in-gurgaon",
  },
  {
    title: "Gonadal Vein Disease",
    desc: "Targeted therapy for gonadal vein reflux and associated pelvic symptoms.",
    icon: Network,
    link: "/services/gonadal-vein-disease-treatment-in-gurgaon",
  },
  {
    title: "AV Fistula",
    desc: "Creation and repair of AV fistulas for effective dialysis access.",
    icon: Syringe,
    link: "/services/av-fistula-treatment-in-gurgaon",
  },
  {
    title: "Dialysis Access",
    desc: "Specialized procedures to establish and maintain reliable dialysis access.",
    icon: Cpu,
    link: "/services/dialysis-access-treatment-in-gurgaon",
  },
  {
    title: "Central Venous Care",
    desc: "Expert care for central venous lines and vascular access complications.",
    icon: ShieldPlus,
    link: "/services/central-venous-care-treatment-in-gurgaon",
  },
  {
    title: "Peripheral Artery Disease (PAD)",
    desc: "Advanced treatment to restore blood flow and reduce limb risk.",
    icon: Activity,
    link: "/services/peripheral-artery-disease-treatment-in-gurgaon",
  },
  {
    title: "Advanced Limb Salvage",
    desc: "Cutting-edge techniques to prevent amputations and save limbs.",
    icon: ShieldPlus,
    link: "/services/limb-salvage-surgery-in-gurgaon",
  },
  {
    title: "Diabetic Foot",
    desc: "Comprehensive diabetic foot care to prevent ulcers and complications.",
    icon: Footprints,
    link: "/services/diabetic-foot-treatment-in-gurgaon",
  },
  {
    title: "Wound Care",
    desc: "Specialized management of chronic and non-healing wounds.",
    icon: Activity,
    link: "/services/diabetic-wound-care-in-gurgaon",
  },
  // {
  //   title: "Minor Amputations",
  //   desc: "Precision procedures for infection control and limb preservation.",
  //   icon: Scissors,
  //   link: "/services/amputation-surgery-in-gurgaon",
  // },
  {
    title: "Amputation Surgery",
    desc: "Advanced surgical care for necessary limb removal with rehabilitation focus.",
    icon: Ambulance,
    link: "/services/amputation-surgery-in-gurgaon",
  },
  {
    title: "Deep Vein Thrombosis",
    desc: "Early diagnosis and treatment of blood clots in deep veins.",
    icon: Activity,
    link: "/services/deep-vein-thrombosis-treatment-in-gurgaon",
  },
  {
    title: "Pulmonary Embolism",
    desc: "Emergency care for life-threatening lung clots.",
    icon: Wind,
    link: "/services/pulmonary-embolism-treatment-in-gurgaon",
  },
  {
    title: "Abdominal Aortic Aneurysm",
    desc: "Minimally invasive repair of life-threatening aortic aneurysms.",
    icon: Network,
    link: "/services/abdominal-aortic-aneurysm-treatment-in-gurgaon",
  },
  {
    title: "Advanced Venous Interventions",
    desc: "Complex venous reconstruction and catheter-based therapies.",
    icon: Activity,
    link: "/services/deep-vein-thrombosis-treatment-in-gurgaon",
  },
  {
    title: "Pulmonary Embolism (PE) Management",
    desc: "Comprehensive PE management using advanced catheter-based techniques.",
    icon: Wind,
    link: "/services/pulmonary-embolism-treatment-in-gurgaon",
  },
  {
    title: "Aortic, Visceral & Renal Artery Interventions",
    desc: "Treatment of complex arterial diseases using endovascular techniques.",
    icon: Network,
    link: "/services/vascular-trauma-treatment-in-gurgaon", // adjust if you create specific page
  },
  {
    title: "Onco-Vascular Surgery & Rare Vascular Disorders",
    desc: "Specialized vascular procedures in cancer and rare conditions.",
    icon: Microscope,
    link: "/services/onco-vascular-surgery-in-gurgaon",
  },
  {
    title: "Vascular Trauma",
    desc: "Emergency care for vascular injuries and trauma cases.",
    icon: Ambulance,
    link: "/services/vascular-trauma-treatment-in-gurgaon",
  },
  {
    title: "Arteriovenous Malformation",
    desc: "Treatment of abnormal artery-vein connections.",
    icon: GitBranch,
    link: "/services/arteriovenous-malformation-treatment-in-gurgaon",
  },
  {
    title: "Pediatric & Iatrogenic Vascular Injuries",
    desc: "Special care for vascular injuries in children and medical complications.",
    icon: Activity,
    link: "/services/vascular-trauma-treatment-in-gurgaon",
  },
  {
    title: "AV Malformations & Complex Vascular Anomalies",
    desc: "Advanced multidisciplinary care for vascular anomalies.",
    icon: GitBranch,
    link: "/services/arteriovenous-malformation-treatment-in-gurgaon",
  },
  {
    title: "ECMO Cannulation & Large-Bore Access Care",
    desc: "Critical care vascular access including ECMO support.",
    icon: Cpu,
    link: "/services/av-dialysis-central-care",
  },
  {
    title: "Special Interests",
    desc: "Focus on innovation, research, and complex vascular procedures.",
    icon: Star,
    link: "/services",
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

const collaborations = [
  {
    name: "AyuSynk Devices",
    logo: partners,
    desc: (
      <>
        Collaborative development of an{" "}
        <strong>AI-enabled digital stethoscope</strong> designed for{" "}
        <strong>remote AV fistula monitoring</strong>. This means your fistula
        can be monitored from home - <b>fewer hospital visits</b>. This
        innovation enables early detection of vascular access complications and
        continuous care beyond hospital settings.
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://www.drhimanshuverma.com/#organization",
      name: "Dr Himanshu Verma Vascular Clinic",
      url: "https://www.drhimanshuverma.com/",
      logo: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
      image:
        "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
      telephone: "+91 8826833598",
      email: "varenyamvascular@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Fortis Memorial Research Centre, Opposite HUDA City Centre, Sector 44",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122003",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Gurugram",
        },
        {
          "@type": "AdministrativeArea",
          name: "Delhi NCR",
        },
      ],
      department: {
        "@id": "https://www.drhimanshuverma.com/#physician",
      },
    },
    {
      "@type": "Physician",
      "@id": "https://www.drhimanshuverma.com/#physician",
      name: "Dr Himanshu Verma",
      url: "https://www.drhimanshuverma.com/",
      image:
        "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
      jobTitle: "Vascular Surgeon",
      medicalSpecialty: "VascularSurgery",
      worksFor: {
        "@id": "https://www.drhimanshuverma.com/#organization",
      },
      affiliation: {
        "@type": "Hospital",
        name: "Fortis Memorial Research Institute",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sector 44",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122003",
          addressCountry: "IN",
        },
      },
      knowsAbout: [
        "Varicose Veins Treatment",
        "Peripheral Artery Disease Treatment",
        "AV Fistula Surgery",
        "Dialysis Access Management",
        "Pelvic Congestion Syndrome Treatment",
        "Deep Vein Thrombosis Treatment",
        "Endovascular Treatment",
      ],
    },
  ],
};

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* FAQ Schema Markup */}
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Organization Schema Markup */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* SEO Meta Data */}
      <title>Vascular & Endovascular Surgeon in Gurgaon | Dr. Himanshu</title>
      <meta
        name="title"
        content="Vascular & Endovascular Surgeon in Gurgaon | Dr. Himanshu"
      />
      <meta
        name="description"
        content="Vascular Surgeon at Fortis Gurgaon. 17+ years experience, 5000+ surgeries. Minimally invasive treatment. Book your consultation today."
      />

      <meta
        name="keywords"
        content="vascular surgeon Gurgaon, endovascular surgeon Gurgaon, Dr Himanshu Verma, best vascular doctor Gurgaon, AV fistula surgeon India, varicose veins treatment Gurgaon, PAD treatment India, limb salvage specialist Gurgaon, dialysis access surgeon, vascular specialist Fortis FMRI"
      />

      <link rel="canonical" href="https://www.drhimanshuverma.com/" />

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
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg"
      />
      <meta property="og:url" content="https://www.drhimanshuverma.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dr Himanshu Verma" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Dr. Himanshu Verma | Vascular & Endovascular Surgeon in Gurgaon"
      />
      <meta
        name="twitter:description"
        content="Dr. Himanshu Verma is a leading Vascular & Endovascular Surgeon in Gurgaon with 17+ years of experience, specializing in AV fistula, varicose veins, peripheral arterial disease (PAD) & limb salvage using advanced minimally invasive techniques."
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg"
      />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

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
            {/* NAME & DESIGNATION */}
            <div className="leading-tight">
              <h1 className="text-3xl md:text-4xl font-bold text-(--med-primary) transition">
                Best Vascular & Endovascular Surgeon in Gurgaon
              </h1>
              {/* <p className="text-lg text-gray-500">
                Director – Vascular & Endovascular Surgeon
              </p> */}
            </div>

            {/* ABOUT TEXT */}
            <h2 className="font-semibold text-[var(--med-primary)] mb-0">
              About
            </h2>
            <p className="text-[var(--med-text)]/90 leading-relaxed text-justify">
              <br />
              Dr. Himanshu Verma is a highly experienced Vascular & Endovascular
              Surgeon with over 17 years of expertise, currently serving as
              Director – Vascular & Endovascular Surgery at Fortis FMRI,
              Gurgaon.
            </p>

            <p className="text-[var(--med-text)]/90 leading-relaxed text-justify">
              He specializes in AV fistula and dialysis access surgery,{" "}
              <a
                className="text-[var(--med-primary)]"
                href="services/varicose-veins-treatment-in-gurgaon"
              >
                varicose veins
              </a>
              , peripheral arterial disease, diabetic foot care, and limb
              salvage, using advanced minimally invasive, endovascular, and
              hybrid techniques. Known for his patient-centric, evidence-based
              approach, Dr. Verma focuses on durable outcomes, limb
              preservation, and minimizing repeat procedures for complex
              vascular conditions.
            </p>

            {/* <p className="text-[var(--med-text)]/90 leading-relaxed text-justify mb-4">
              Dr. Verma follows a patient-centric, evidence-based approach,
              focusing on long-term access preservation, limb salvage, and
              reducing repeat procedures—particularly for patients with chronic
              kidney disease and complex vascular conditions. He practices at
              Fortis FMRI, Gurgaon, a leading tertiary care hospital with
              advanced vascular and hybrid operating facilities.
            </p> */}
            <div className="leading-tight">
              <h2 className="text-xl md:text-2xl font-bold text-(--med-primary) transition">
                Dr. Himanshu Verma
              </h2>
              <p className="text-lg text-gray-500">
                Director – Vascular & Endovascular Surgeon
              </p>
            </div>

            {/* HIGHLIGHTS */}
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
                  Expertise in AV fistula, dialysis access & limb salvage
                </span>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-3 transition hover:border-[var(--med-primary)] hover:shadow-sm">
                <CheckCircle2
                  className="text-[var(--med-primary)] mt-1"
                  size={20}
                />
                <span className="text-[var(--med-text)]/85">
                  Patient-centric, evidence-based vascular care
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div>
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
                  src={himanshu}
                  alt="Doctor himanshu verma vascular surgeon in gurgaon image"
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

      <section className="py-12 bg-white">
        {/* HEADER */}
        <div className="w-11/12 md:w-5/6 mx-auto flex justify-between items-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)]">
            Our Services
          </h2>

          <Link href="/services">
            <button className="px-6 py-2 cursor-pointer rounded-full bg-[var(--med-primary)] text-white font-medium hover:opacity-90 transition">
              All Services
            </button>
          </Link>
        </div>

        {/* CAROUSEL WITH OUTSIDE ARROWS */}
        <div className="w-11/12 md:w-5/6 mx-auto relative">
          {/* LEFT ARROW */}
          <button
            className="hidden md:flex swiper-prev absolute -left-12 lg:-left-20

 top-1/2 -translate-y-1/2 z-10
          w-12 h-12 rounded-full bg-white shadow-lg
          items-center justify-center
          text-[var(--med-primary)]
          hover:bg-[var(--med-primary)] hover:text-white
          transition"
            aria-label="Previous service"
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT ARROW */}
          <button
            className="hidden md:flex swiper-next absolute -right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-10
          w-12 h-12 rounded-full bg-white shadow-lg
          items-center justify-center
          text-[var(--med-primary)]
          hover:bg-[var(--med-primary)] hover:text-white
          transition"
            aria-label="Next service"
          >
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isAlt = idx % 2 !== 0;

              const CardContent = (
                <div
                  className={`
      h-full min-h-[340px]
      rounded-2xl p-8 text-center
      transition-all duration-300
      border border-[var(--med-border)]
      flex flex-col justify-between
      ${
        isAlt
          ? "bg-[var(--med-primary)] text-white"
          : "bg-[var(--med-light)] text-[var(--med-text)]"
      }
      hover:-translate-y-2 hover:shadow-xl
    `}
                >
                  <div>
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
                    <h3 className="text-lg font-semibold mb-4 leading-snug">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`text-sm leading-relaxed ${
                        isAlt ? "text-white/90" : "text-[var(--med-text)]/70"
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* READ MORE */}
                  {service.link && (
                    <Link
                      href={service.link}
                      className={`
          mt-6 inline-flex items-center justify-center
          text-sm font-medium
          ${isAlt ? "text-white " : "text-[var(--med-primary)]"}
          hover:opacity-80 transition
        `}
                    >
                      Read more →
                    </Link>
                  )}
                </div>
              );

              return <SwiperSlide key={idx}>{CardContent}</SwiperSlide>;
            })}
          </Swiper>
        </div>
      </section>

      <ConditionsWeTreat />

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

      <TestimonialSlider />

      <section className="w-full py-20 bg-gray-50">
        {" "}
        <div className="max-w-6xl mx-auto px-4">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {" "}
            {/* AVF Workshop */}{" "}
            <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-blue-50 to-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {" "}
              <span className="inline-block mb-3 text-sm font-semibold text-blue-600">
                {" "}
                Hands-on Training{" "}
              </span>{" "}
              <h2 className="text-3xl font-semibold mb-4">AVF Workshop</h2>{" "}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {" "}
                Hands-on AVF workshops focused on vascular access planning,
                surgical techniques, and post-procedure care. Designed for
                clinicians and healthcare professionals.{" "}
              </p>{" "}
              <Link
                href="https://avfcareworkshop.com/workshops/"
                rel="nofollow noopener noreferrer"
              >
                {" "}
                <ButtonFill text="Explore Workshop" />{" "}
              </Link>{" "}
              {/* Decorative Blur */}{" "}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />{" "}
            </div>{" "}
            {/* Podcast */}{" "}
            <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-green-50 to-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {" "}
              <span className="inline-block mb-3 text-sm font-semibold text-green-600">
                {" "}
                Expert Conversations{" "}
              </span>{" "}
              <h2 className="text-3xl font-semibold mb-4">Podcast</h2>{" "}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {" "}
                Listen to expert-led discussions on vascular health, patient
                care, innovations, and real-world medical insights from industry
                professionals.{" "}
              </p>{" "}
              <Link
                href="https://www.youtube.com/@doctalkshow"
                rel="nofollow noopener noreferrer"
              >
                {" "}
                <ButtonFill text="Listen Now" />{" "}
              </Link>{" "}
              {/* Decorative Blur */}{" "}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* FAQs */}
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
      <ServiceTable />
      <Footer />

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
      {/* <UserInfoCarouselPopup /> */}
    </div>
  );
}
