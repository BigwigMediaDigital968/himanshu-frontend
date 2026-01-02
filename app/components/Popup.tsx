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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disease, setDisease] = useState("");
  const [message, setMessage] = useState("");

  // 🔥 file states
  const [images, setImages] = useState<File[]>([]);
  const [pdf, setPdf] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  // 🔥 handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const isPdf = files[0].type === "application/pdf";

    if (isPdf) {
      setPdf(files[0]);
      setImages([]);
    } else {
      setImages(files);
      setPdf(null);
    }
  };

  // 🔥 submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("disease", disease);
      formData.append("message", message);

      // 🖼️ images
      if (images.length > 0) {
        images.forEach((img) => {
          formData.append("images", img);
        });
      }

      // 📄 pdf
      if (pdf) {
        formData.append("report", pdf);
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/appointment`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");

      alert("Appointment submitted successfully");
      onClose();
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-11/12 max-w-3xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.15)] border border-white/30 animate-popupSlide overflow-hidden flex flex-col md:flex-row">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black transition text-xl z-10"
        >
          ✕
        </button>

        {/* IMAGE */}
        <div className="hidden md:block relative w-full md:w-1/2 h-48 md:h-auto">
          <Image
            src={popup}
            alt="Doctor Appointment"
            fill
            className="object-fill"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/40" />
        </div>

        {/* FORM */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-(--med-primary)">
            Book Appointment
          </h2>

          <form className="space-y-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full px-4 py-2.5 rounded-lg border"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <PhoneInput
              country="in"
              value={phone}
              onChange={setPhone}
              enableSearch
              countryCodeEditable={false}
              containerClass="!w-full"
              inputClass="!w-full !h-[44px]"
            />

            <input
              type="email"
              className="w-full px-4 py-2.5 rounded-lg border"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              className="w-full px-4 py-2.5 rounded-lg border"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
            >
              <option value="">Select Disease</option>
              <option value="Disease 1">Disease 1</option>
              <option value="Disease 2">Disease 2</option>
              <option value="Disease 3">Disease 3</option>
              <option value="Disease 4">Disease 4</option>
              <option value="Disease 5">Disease 5</option>
            </select>

            <textarea
              className="w-full px-4 py-2.5 rounded-lg h-28 border resize-none"
              placeholder="Write your concern"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* FILE INPUT */}
            <input
              type="file"
              accept="application/pdf,image/*"
              multiple
              onChange={handleFileChange}
              className="
                w-full px-4 py-2.5 rounded-lg border
                bg-white/10 text-sm
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:bg-[var(--med-primary)]/10
                file:text-[var(--med-primary)]
                hover:file:bg-[var(--med-primary)]/20
              "
            />

            <ButtonFill
              type="submit"
              text={loading ? "Submitting..." : "Submit"}
              className="w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
