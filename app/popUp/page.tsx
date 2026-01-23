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
  const [error, setError] = useState("");

  // OTP & FLOW STATES
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [success, setSuccess] = useState(false);

  // -----------------------------
  // Handle file selection
  // -----------------------------
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

  // -----------------------------
  // STEP 1: SEND OTP
  // -----------------------------
  const handleSendOtp = async (e: React.FormEvent) => {
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
        `${process.env.NEXT_PUBLIC_API_BASE}/appointment/send-otp`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setOtpSent(true); // 🔑 show OTP field
    } catch (err: any) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // STEP 2: VERIFY OTP
  // -----------------------------
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/appointment/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
        },
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess(true); // ✅ close form
    } catch (err: any) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* LEFT */}
          <div className="hidden md:block w-1/2">
            <UserInfoCarouselPopup />
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 p-8">
            {!success ? (
              <>
                <h1 className="text-2xl font-bold mb-2 text-(--med-primary)">
                  Request a Consultation
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                  Share your concern and our medical team will get back to you
                  shortly. hehhe
                </p>

                <form
                  className="space-y-3"
                  onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
                >
                  {!otpSent && (
                    <>
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
                    </>
                  )}

                  {otpSent && (
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit OTP"
                      className="w-full px-4 py-2.5 rounded-lg border text-center tracking-widest"
                      required
                    />
                  )}

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <ButtonFill
                    type="submit"
                    text={
                      loading
                        ? otpSent
                          ? "Verifying..."
                          : "Sending OTP..."
                        : otpSent
                          ? "Verify OTP"
                          : "Submit"
                    }
                    className="w-full"
                  />
                </form>
              </>
            ) : (
              // ✅ SUCCESS MESSAGE
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-green-600 mb-3">
                  Appointment Confirmed 🎉
                </h2>
                <p className="text-gray-600">
                  Thank you! Our medical team will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RequestCallbackPage;
