"use client";

import { useState } from "react";
import PopupForm from "./Popup";
import ButtonFill from "./Button";

export default function FinalCTA() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <section className="relative py-20 bg-[var(--med-primary)] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative w-11/12 md:w-5/6 mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Take the First Step Toward Better Health
        </h2>

        <p className="max-w-2xl mx-auto text-white/90 mb-10 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          incidunt. Voluptatem doloremque itaque pariatur?
        </p>

        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Book Appointment"
          className="border border-white text-white"
        />
      </div>
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </section>
  );
}
