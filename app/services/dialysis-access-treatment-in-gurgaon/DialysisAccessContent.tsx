"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";

export default function DialysisAccessContent() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Dialysis Access
      </h2>

      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Understanding Dialysis Access
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Dialysis access is essential for patients undergoing kidney dialysis.
          Proper access ensures safe and effective removal of waste and excess
          fluids from the blood.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Types of Dialysis Access
        </h3>

        <ul className="space-y-3">
          {[
            "AV Fistula (preferred method)",
            "AV Graft",
            "Central Venous Catheter",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Schedule an Appointment"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
