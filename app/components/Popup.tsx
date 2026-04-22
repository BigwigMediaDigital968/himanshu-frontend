"use client";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ButtonFill from "./Button";
import UserInfoCarouselPopup from "./UserInfoPopup";

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

  const [images, setImages] = useState<File[]>([]);
  const [pdf, setPdf] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setEmail("");
      setDisease("");
      setMessage("");
      setImages([]);
      setPdf(null);
      setError("");
      setLoading(false);
      setSuccess(false);
    }
  }, [open]);

  if (!open) return null;

  // ---------------------------------
  // FILE HANDLING
  // ---------------------------------
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const pdfFile = files.find((f) => f.type === "application/pdf");
    const imageFiles = files.filter((f) => f.type.startsWith("image/"));

    if (pdfFile && imageFiles.length > 0) {
      alert("Please upload either images OR a PDF, not both.");
      e.target.value = "";
      return;
    }

    if (pdfFile) {
      setPdf(pdfFile);
      setImages([]);
    } else {
      setImages(imageFiles);
      setPdf(null);
    }
  };

  // ---------------------------------
  // SUBMIT (DIRECT API CALL)
  // ---------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("disease", disease);
      formData.append("message", message);

      images.forEach((img) => formData.append("images", img));
      if (pdf) formData.append("report", pdf);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/appointment`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit appointment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="relative w-11/12 max-w-3xl bg-white/90 rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl z-10 cursor-pointer"
        >
          ✕
        </button>

        {/* LEFT */}
        <div className="hidden md:block w-1/2">
          <UserInfoCarouselPopup />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 p-8">
          {!success ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-(--med-primary)">
                Request a Consultation
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                Share your concern and our medical team will get back to you
                shortly.
              </p>

              <form className="space-y-2" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  required
                />

                <select
                  className="w-full px-4 py-2.5 rounded-lg border"
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                  required
                >
                  <option value="">Select Disease</option>
                  <option value="Varicose Vein Treatments">
                    Varicose Vein Treatments
                  </option>
                  <option value="Dialysis Access (AV Fistula & CKD Care)">
                    Dialysis Access
                  </option>
                  <option value="Peripheral Artery Disease">
                    Peripheral Artery Disease
                  </option>
                  <option value="Aortic & Major Vessel Interventions">
                    Aortic Interventions
                  </option>
                  <option value="Venous & Lymphedema Care">Venous Care</option>
                  <option value="Diabetic Foot & Wound Care">
                    Diabetic Foot
                  </option>
                </select>

                <textarea
                  className="w-full px-4 py-2.5 rounded-lg h-28 border resize-none"
                  placeholder="Write your concern"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <input
                  type="file"
                  accept="application/pdf,image/*"
                  multiple
                  onChange={handleFileChange}
                  className="w-full px-4 py-2.5 rounded-lg border text-sm"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <ButtonFill
                  type="submit"
                  text={loading ? "Submitting..." : "Book Appointment"}
                  className="w-full"
                />
              </form>
            </>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-green-600 mb-3">
                Appointment Booked 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you! Our medical team will contact you shortly.
              </p>

              <ButtonFill text="Close" className="w-full" onClick={onClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
