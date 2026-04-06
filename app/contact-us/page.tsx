"use client";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";

import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "../components/Button";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FloatingContactActions from "../components/ContactActions";

export default function About() {
  const [openPopup, setOpenPopup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [disease, setDisease] = useState("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [pdf, setPdf] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // FILE HANDLER
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const pdfFile = files.find((f) => f.type === "application/pdf");
    const imageFiles = files.filter((f) => f.type.startsWith("image/"));

    if (pdfFile && imageFiles.length > 0) {
      alert("Upload either images OR a PDF");
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

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
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
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  // INITIALIZE AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="bg-[var(--med-light)]">
      <Nav />
      <section className="py-12 bg-[#64bab4] rounded-r-full">
        <div className="w-11/12 md:w-5/6 mx-auto gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Qualifications */}
            <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
              Get in Touch
            </p>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              CONTACT US
            </h1>

            {/* Description */}
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
              If you need answers for any question, please send to us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT — CONTACT INFO */}
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-text)] mb-6">
              Get in Touch
            </h2>

            <p className="text-[var(--med-text)]/70 mb-10 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, repellendus. Saepe quia minus quidem.
            </p>

            <div className="space-y-6">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <MapPin className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">
                    Address
                  </p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    Lorem Ipsum Street, Sector 00,
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <Phone className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">Phone</p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    +91 00000 00000
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <Mail className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">Email</p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    info@example.com
                  </p>
                </div>
              </div>

              {/* TIMING */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <Clock className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">
                    Working Hours
                  </p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    Mon – Sat: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div
            data-aos="fade-up"
            className="
            bg-white/90 backdrop-blur-xl
            border border-[var(--med-border)]
            rounded-3xl p-8 md:p-10
            shadow-[0_20px_40px_rgba(11,141,133,0.15)]
          "
          >
            <h3 className="text-2xl font-bold text-[var(--med-primary)] mb-6">
              Send Us a Message
            </h3>

            {/* <form className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none
              "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none
              "
              />

              <div className="w-full">
                <PhoneInput
                  country="in"
                  enableSearch
                  countryCodeEditable={false}
                  placeholder="Phone Number"
                  inputClass="!w-full !h-[48px] !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-teal-500"
                />
              </div>

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

              <textarea
                rows={4}
                placeholder="Your Message"
                className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none resize-none
              "
              />

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
            </form> */}
            {!success ? (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--med-border)] focus:ring-2 focus:ring-[var(--med-primary)] outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--med-border)] focus:ring-2 focus:ring-[var(--med-primary)] outline-none"
                />

                <PhoneInput
                  country="in"
                  value={phone}
                  onChange={setPhone}
                  enableSearch
                  countryCodeEditable={false}
                  containerClass="!w-full"
                  inputClass="!w-full !h-[48px]"
                />

                <select
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                >
                  <option value="">Select Disease</option>
                  <option value="Varicose Vein Treatments">
                    Varicose Vein Treatments
                  </option>
                  <option value="Dialysis Access">Dialysis Access</option>
                  <option value="Peripheral Artery Disease">
                    Peripheral Artery Disease
                  </option>
                  <option value="Venous Care">Venous Care</option>
                  <option value="Diabetic Foot">Diabetic Foot</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--med-border)] focus:ring-2 focus:ring-[var(--med-primary)] outline-none resize-none"
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
                  text={loading ? "Submitting..." : "Send Message"}
                  className="w-full"
                />
              </form>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-xl font-bold text-green-600 mb-2">
                  Message Sent 🎉
                </h2>
                <p className="text-gray-600">
                  Our team will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative w-full h-[420px] md:h-[520px]">
        {/* GOOGLE MAP */}
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* OVERLAY CARD */}
        <div
          className="
          absolute bottom-6 left-1/2 -translate-x-1/2
          bg-white/95 backdrop-blur-xl
          border border-[var(--med-border)]
          rounded-2xl
          shadow-[0_20px_40px_rgba(11,141,133,0.25)]
          px-6 py-5
          w-[92%] max-w-xl
        "
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
              <MapPin className="text-[var(--med-primary)]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--med-text)] mb-1">
                Our Location
              </h3>
              <p className="text-sm text-[var(--med-text)]/70">
                Lorem Ipsum Clinic, Sector 00, New Delhi, India
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}
