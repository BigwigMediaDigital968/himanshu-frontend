"use client";
import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ButtonFill from "./Button";
import UserInfoCarouselPopup from "./UserInfoPopup";
import { SERVICES } from "../data";
import { Check, ChevronDown, Search } from "lucide-react";

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
        <div className="w-full md:w-1/2 p-8 md:min-h-[600px]">
          {!success ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-(--med-primary)">
                Request a Consultation
              </h2>

              <p className="text-sm text-gray-600 mb-4">
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

                <div className="hidden">
                  <select
                    className="w-full px-4 py-2.5 rounded-lg border"
                    value={disease}
                    onChange={(e) => setDisease(e.target.value)}
                    required
                  >
                    <option value="">Select Disease</option>
                    {
                      SERVICES.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.text}
                        </option>
                      ))
                    }
                  </select>
                </div>
                  <MedicalSelect services={SERVICES} disease={disease} setDisease={setDisease} />


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
                          <div className="flex items-center justify-center h-full">
            
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-green-600 mb-3">
                Appointment Booked 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you! Our medical team will contact you shortly.
              </p>

              <ButtonFill text="Close" className="w-full" onClick={onClose} />
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;

export const MedicalSelect = ({ services, disease, setDisease }: { services: typeof SERVICES; disease: string; setDisease: (disease: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredServices = services.filter(service =>
    service.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedServiceText = services.find(s => s.value === disease)?.text || "Select Disease";

  return (
    <div className="relative w-full font-sans" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ring transition-all duration-200 bg-transparent
          ${isOpen ? 'border-[#0d9488] ring-2 ring-[#0d9488]/10' : 'border-gray-300 hover:border-gray-400'}`}
      >
        <span className={`truncate ${!disease ? 'text-gray-400' : 'text-gray-800'}`}>
          {selectedServiceText}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-1/2 w-80 sm:absolute sm:top-full sm:left-0 sm:translate-0 z-50 sm:w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">

          {/* Search Input for long lists */}
          <div className="p-2 border-b border-gray-50 hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search condition..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 rounded-md focus:outline-none border-none focus:ring-1 focus:ring-[#0d9488]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Scrollable Options List */}
          <ul className="max-h-[260px] sm:max-h-[250px] overflow-y-auto custom-scrollbar py-1">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <li
                  key={service.value}
                  onClick={() => {
                    setDisease(service.value);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className={`flex items-center justify-between px-4 py-2 text-base cursor-pointer transition-colors
                    ${disease === service.value ? 'bg-teal-50 text-[#0d9488] font-medium' : 'text-gray-700 hover:bg-gray-200 hover:text-(--med-primary)'}`}
                >
                  {service.text}
                  {disease === service.value && <Check className="w-4 h-4" />}
                </li>
              ))
            ) : (
              <li className="px-4 py-6 text-center text-sm text-gray-500">
                No matching diseases found.
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Hidden input for form submission compatibility */}
      <input type="hidden" name="disease" value={disease} required />

      {/* Custom Scrollbar CSS */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0b8d85ba;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0b8d85;
        }
      `}</style>
    </div>
  );
};
