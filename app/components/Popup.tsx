"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ButtonFill from "./Button";
import popup from "../assets/popup.png";

interface PopupFormProps {
  open: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ open, onClose }) => {
  const [phone, setPhone] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-11/12 max-w-3xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.15)] border border-white/30 animate-popupSlide overflow-hidden flex flex-col md:flex-row">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black transition text-xl z-10"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative w-full md:w-1/2 h-48 md:h-auto">
          <Image
            src={popup}
            alt="Doctor Appointment"
            fill
            className="object-fill"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/40" />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-(--med-primary)">
            Book Appointment
          </h2>

          <form className="space-y-2">
            {/* Name */}
            <div>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:border-(--med-primary)"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone with Country Code */}
            <div>
              <PhoneInput
                country="in"
                value={phone}
                onChange={setPhone}
                enableSearch
                countryCodeEditable={false}
                placeholder="Phone Number"
                containerClass="!w-full mt-1"
                inputClass="!w-full !h-[44px] !pl-12 !pr-4 !rounded-lg !border !border-gray-300 focus:!border-[var(--med-primary)] !bg-white/10 "
                buttonClass="!border !border-gray-300 !rounded-l-lg"
                dropdownClass="!text-gray-800"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:border-(--med-primary)"
                placeholder="Enter email address"
              />
            </div>

            {/* Disease / Condition */}
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
                <option value="disease-1">Disease 1</option>
                <option value="disease-2">Disease 2</option>
                <option value="disease-3">Disease 3</option>
                <option value="disease-4">Disease 4</option>
                <option value="disease-5">Disease 5</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <textarea
                className="w-full mt-1 px-4 py-2.5 rounded-lg h-28 border border-gray-300 resize-none focus:border-(--med-primary)"
                placeholder="Write your concern"
              />
            </div>

            {/* Attach Medical Report (PDF) */}
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

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn .35s ease-out;
        }

        @keyframes popupSlide {
          0% { opacity:0; transform: translateY(20px) scale(.95); }
          100% { opacity:1; transform: translateY(0) scale(1); }
        }
        .animate-popupSlide {
          animation: popupSlide .45s cubic-bezier(0.16,0.8,0.32,1);
        }
      `}</style>
    </div>
  );
};

export default PopupForm;
