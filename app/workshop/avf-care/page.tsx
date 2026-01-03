"use client";

import Image from "next/image";
import { useState } from "react";

import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ButtonFill from "@/app/components/Button";
import PopupForm from "@/app/components/Popup";

import heroImg from "../../assets/avfcare/red-header.png";

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
          className="object-cover"
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

              <p className="text-black/80 leading-relaxed mb-6">
                The AVF Care Workshop, created by{" "}
                <strong>Dr. Himanshu Verma</strong>, Vascular and Endovascular
                Surgeon and Director of Vascular Surgery at Fortis Hospital,
                Gurugram, was designed to address the critical need for
                comprehensive AV fistula care. While fistula creation is an
                important first step, long-term monitoring and maintenance are
                essential to prevent complications such as narrowing and
                blockage.
              </p>

              <p className="text-black/80 leading-relaxed mb-8">
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

      <Footer />

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
