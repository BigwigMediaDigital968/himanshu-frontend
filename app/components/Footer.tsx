"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import logo from "../assets/logo.png";
import bg from "../assets/slide1.png";
import ButtonFill from "./Button";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (err: any) {
      setError(err.message || "Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      className="relative text-white pt-12 pb-20 md:pb-8"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* --- OVERLAY FIXED --- */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_bottom_right,rgba(11,141,133,0.65),rgba(10,37,64,0.9))]
        backdrop-blur-[2px]
      "
      ></div>

      {/* EMAIL SUBSCRIPTION – NO BOX */}
      <div className="relative z-20 w-11/12 md:w-5/6 mx-auto mb-14">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Stay Updated on Vascular Health
            </h3>
            <p className="mt-2 text-white/80 max-w-lg text-sm">
              Receive expert insights, clinic updates, and preventive care
              guidance directly from Dr. Himanshu Verma.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="
          w-full sm:w-80
          bg-transparent
          border-b border-white/50
          px-2 py-3
          text-white placeholder-white/60
          text-sm
          outline-none
          focus:border-[var(--med-primary)]
          transition
        "
            />

            <ButtonFill
              type="submit"
              text={loading ? "Subscribing..." : "Subscribe →"}
              className="text-white border border-white"
              disabled={loading}
            />
          </form>
        </div>

        {/* ✅ Messages BELOW the row */}
        {message && (
          <p className="mt-3 text-sm text-green-300 text-center md:text-right">
            {message}
          </p>
        )}

        {error && (
          <p className="mt-3 text-sm text-red-300 text-center md:text-right">
            {error}
          </p>
        )}
      </div>

      {/* --- CONTENT FIX (z-10) --- */}
      <div className="relative z-10 w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* LOGO + SOCIAL */}
        <div>
          <Image
            src={logo}
            alt="Doctor Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h2 className="text-2xl font-bold mb-4 mt-4">Dr. Himanshu Verma</h2>

          <div className="flex items-center gap-4 mb-8">
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-600" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-400" />
            <FaYoutube className="text-xl cursor-pointer hover:text-red-500" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
          </div>
        </div>

        {/* LOCATION 1 */}
        <div className="relative z-10">
          <h3 className="text-sm font-semibold tracking-wider mb-2">
            MAIN CLINIC LOCATION
          </h3>
          <div className="w-10 h-[2px] bg-[var(--med-primary)] mb-4"></div>

          <div className="flex items-start gap-3 text-white/80 text-sm">
            <IoLocationOutline className="text-xl mt-1" />
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod tempor.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div className="relative z-10">
          <h3 className="text-sm font-semibold tracking-wider mb-2">CONTACT</h3>
          <div className="w-10 h-[2px] bg-[var(--med-primary)] mb-4"></div>

          <div className="flex items-center gap-3 text-white/80 text-sm mb-3">
            <IoCallOutline className="text-xl" />
            <p>+91 123456789</p>
          </div>

          <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
            <IoMailOutline className="text-xl" />
            <p>abc@xyz.com</p>
          </div>
        </div>

        {/* LOCATION 2 */}
        <div className="relative z-10">
          <h3 className="text-sm font-semibold tracking-wider mb-2">
            VISITING CLINIC
          </h3>
          <div className="w-10 h-[2px] bg-[var(--med-primary)] mb-4"></div>

          <div className="flex items-start gap-3 text-white/80 text-sm">
            <IoLocationOutline className="text-xl mt-1" />
            <p>
              Lorem ipsum dolor sit amet,
              <br /> adipiscing elit sed do,
              <br /> eiusmod tempor incididunt.
            </p>
          </div>

          <div className="flex items-center gap-3 text-white/80 text-sm mt-3">
            <IoCallOutline className="text-xl" />
            <p>1234567890</p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="relative z-10 border-t border-white/10 my-5 py-6 bg-black/40">
        <div className="w-11/12 md:w-5/6 mx-auto text-center md:text-left flex flex-wrap gap-4 md:gap-10 justify-center md:justify-start text-white/60 text-sm">
          <span>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </span>
          <span>|</span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </span>
          <span>|</span>
          <span>
            <Link href="/blogs">Blogs</Link>
          </span>
        </div>
      </div>

      {/* RIGHTS & CREDITS */}
      <div className="relative z-10 w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row justify-between mt-4 text-center text-white/50 text-xs md:text-sm">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <br />
        <h2>
          Design & Developed by{" "}
          <span className="text-[var(--med-primary)] font-semibold">
            <Link href="https://www.bigwigmediadigital.com">
              Bigwig Media Digital
            </Link>
          </span>
        </h2>
      </div>
    </footer>
  );
}
