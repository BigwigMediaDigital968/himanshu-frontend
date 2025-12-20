"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import ButtonFill from "./Button";
import "react-phone-input-2/lib/style.css";

export default function HeroForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-md text-gray-800">
      <h3 className="text-xl font-bold mb-4 text-teal-700">Book Appointment</h3>

      <form className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
          required
        />

        {/* Phone with country code */}
        <div className="w-full">
          <PhoneInput
            country="in"
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            enableSearch
            countryCodeEditable={false}
            placeholder="Phone Number"
            inputClass="!w-full !h-[48px] !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-teal-500"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Concern"
          rows={3}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        <ButtonFill text="Submit" className="w-full" />
      </form>
    </div>
  );
}
