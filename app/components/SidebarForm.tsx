"use client";

import React, { useState } from "react";
import axios from "axios";
import type { AxiosError } from "axios";

export default function SidebarSimpleForm() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [files, setFiles] = useState<File[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    disease: "",
    concern: "",
  });

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  /* ================= HANDLERS ================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val) && val.length <= 10) {
      setFormData({ ...formData, phone: val });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("");

    if (!formData.name.trim()) {
      setStatusMessage("Please enter your name.");
      return;
    }

    if (formData.phone.length !== 10) {
      setStatusMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.concern.trim()) {
      setStatusMessage("Please describe your concern.");
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData();

      payload.append("name", formData.name);
      payload.append("phone", formData.countryCode + formData.phone);
      payload.append("email", formData.email);
      payload.append("disease", formData.disease);
      payload.append("concern", formData.concern);

      files.forEach((file) => {
        payload.append("files", file);
      });

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/appointment`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setStatusMessage("Thank you! Our medical team will contact you shortly.");

      setFormData({
        name: "",
        countryCode: "+91",
        phone: "",
        email: "",
        disease: "",
        concern: "",
      });
      setFiles([]);
    } catch (err: unknown) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <p className="text-sm text-gray-500 mb-4">
        Share your concern and our medical expert will reach out.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* NAME */}
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
          required
        />

        {/* PHONE */}
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="border rounded-md px-2 py-2 text-sm w-24"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+971">+971</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handlePhoneChange}
            className="flex-1 border rounded-md px-3 py-2 text-sm"
            required
          />
        </div>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
        />

        {/* DISEASE */}
        <select
          name="disease"
          value={formData.disease}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">Select Disease / Condition</option>
          <option>Varicose Veins</option>
          <option>Peripheral Artery Disease</option>
          <option>Diabetic Foot</option>
          <option>DVT (Blood Clot)</option>
          <option>Carotid Artery Disease</option>
          <option>Other</option>
        </select>

        {/* CONCERN */}
        <textarea
          name="concern"
          placeholder="Write your concern"
          rows={3}
          value={formData.concern}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
          required
        />

        {/* FILE UPLOAD */}
        <input
          type="file"
          multiple
          accept="image/*,.pdf"
          onChange={handleFileChange}
          className="w-full text-sm border rounded-md px-3 py-2"
        />

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md font-semibold text-sm"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {statusMessage && (
        <p className="mt-3 text-center text-sm text-gray-600">
          {statusMessage}
        </p>
      )}
    </div>
  );
}
