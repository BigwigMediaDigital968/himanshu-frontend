"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import UserInfoCarouselPopup from "../components/UserInfoPopup";
import ButtonFill from "../components/Button";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const RequestCallbackPage = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disease, setDisease] = useState("");
  const [message, setMessage] = useState("");

  const [images, setImages] = useState<File[]>([]);
  const [pdf, setPdf] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // handle file selection
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

  // submit form
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

      if (images.length > 0) {
        images.forEach((img) => formData.append("images", img));
      }

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
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* LEFT: IMAGE / CAROUSEL */}
          <div className="hidden md:block w-1/2">
            <UserInfoCarouselPopup />
          </div>

          {/* RIGHT: FORM */}
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-2xl font-bold mb-2 text-(--med-primary)">
              Request a Consultation
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Share your concern and our medical team will get back to you
              shortly.
            </p>

            <form className="space-y-3" onSubmit={handleSubmit}>
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
              />

              <select
                className="w-full px-4 py-2.5 rounded-lg border"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
              >
                <option value="">Select Disease</option>
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

              <ButtonFill
                type="submit"
                text={loading ? "Submitting..." : "Submit"}
                className="w-full"
              />
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RequestCallbackPage;
