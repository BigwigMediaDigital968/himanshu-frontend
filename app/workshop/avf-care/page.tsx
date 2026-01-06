"use client";

import Image from "next/image";
import { useState } from "react";

import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ButtonFill from "@/app/components/Button";
import PopupForm from "@/app/components/Popup";

import heroImg from "../../assets/avfcare/red-header.png";
import selfav from "../../assets/avfcare/Self-Examinations-involves-placing-stethoscope-1536x864.webp";
import Dietary from "../../assets/avfcare/Dietary-Modification-in-CKD-1536x819.webp";
import Exercising from "../../assets/avfcare/Header-Banner-for-Blog-1536x864.webp";
import Mental from "../../assets/avfcare/Header-Banner-for-Blog-1-1536x864.webp";
import Dialysis from "../../assets/avfcare/Header-Banner-for-Blog-2-1536x864.webp";
import avf from "../../assets/avfcare/Header-Banner-for-Blog-3-1536x864.webp";
import FinalCTA from "@/app/components/CTA";

const workshopSections = [
  {
    title: "Self-AV Fistula Examination",
    desc: "This segment empowers patients to take an active role in their care by teaching them how to conduct thorough self-examinations. Recognizing early signs of complications allows for timely intervention, ensuring the longevity and effectiveness of the fistula.",
    image: selfav,
  },
  {
    title: "Dietary Modification in CKD",
    desc: "Nutrition is a cornerstone of managing chronic kidney disease. Our workshops provide personalized dietary guidance to help patients make informed choices that support kidney function, improve overall health, and enhance quality of life.",
    image: Dietary,
  },
  {
    title: "Exercising When on Dialysis",
    desc: "Physical activity is vital for maintaining strength and well-being. We offer tailored exercise routines that are safe and effective for dialysis patients, promoting improved circulation and physical fitness.",
    image: Exercising,
  },
  {
    title: "Mental Health Support in CKD Patients",
    desc: "Living with CKD can be mentally and emotionally challenging. This component provides resources and strategies to support mental well-being, fostering a supportive and understanding patient community.",
    image: Mental,
  },
  {
    title: "Dialysis Essentials",
    desc: "We curate essential products designed to enhance the dialysis experience, including dialysis-friendly clothing, AV fistula bands, bleeding caps, AV fistula bandages, and thoughtful gifting options for patients and families.",
    image: Dialysis,
  },
  {
    title: "AVF Care Workshop for Dialysis Technicians",
    desc: "This specialized workshop focuses on AV fistula maturation, correct puncture techniques for different fistula types, and early identification of problems. Regularly conducted across hospitals, it strengthens technician expertise and improves overall patient care.",
    image: avf,
  },
];

export default function AVFCareWorkshop() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Nav />

      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroImg}
          alt="AV Fistula Care Workshop"
          fill
          priority
          className="object-cover lg:block hidden"
        />

        {/* Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--med-primary)]/20 via-[var(--med-primary)]/5 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-widest text-[var(--med-primary)] mb-3 font-semibold">
                AVF Care Workshop
              </p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-[var(--med-primary)]">
                A Lifeline for a Lifetime
              </h1>

              {/* Accent line */}
              <div className="w-16 h-1 bg-[var(--med-primary)] rounded-full mb-6" />

              <p className="text-black/80 leading-relaxed mb-6 text-justify">
                The AVF Care Workshop, created by{" "}
                <strong>Dr. Himanshu Verma</strong>, Vascular and Endovascular
                Surgeon and Director of Vascular Surgery at Fortis Hospital,
                Gurugram, was designed to address the critical need for
                comprehensive AV fistula care. While fistula creation is an
                important first step, long-term monitoring and maintenance are
                essential to prevent complications such as narrowing and
                blockage.
              </p>

              <p className="text-black/80 leading-relaxed mb-8 text-justify">
                The workshop provides holistic support through guided
                self-examination techniques, practical dietary guidance, and
                simple exercise routines. This approach empowers patients to
                actively care for their AV fistula while continuing their
                regular nephrology treatment with greater confidence and
                clarity.
              </p>

              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Request a Callback"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[var(--med-light)]">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-32">
          {workshopSections.map((item, index) => (
            <div
              key={index}
              className={`
              sticky top-28
              grid lg:grid-cols-2 gap-14 items-center
              bg-white rounded-3xl p-10
              shadow-xl
              ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
            `}
              style={{
                zIndex: workshopSections.length + index,
              }}
            >
              {/* IMAGE */}
              <div className="relative h-[340px] rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-2xl font-bold text-[var(--med-primary)] mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-[var(--med-text)]/80 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
      <Footer />

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
