"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo.png";
import ButtonFill from "./Button";
import PopupForm from "./Popup";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [podcastOpen, setPodcastOpen] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white border-b  shadow-sm z-50">
      <nav className="w-11/12  mx-auto flex items-center justify-between py-4 md:py-2">
        {/* LEFT — Logo + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={logo}
            alt="Doctor Logo"
            width={48}
            height={48}
            className="rounded-full shadow-sm"
          />
          <div className="leading-tight">
            <p className="text-[20px] font-bold text-(--med-text) group-hover:text-(--med-primary) transition">
              Dr. Himanshu Verma
            </p>
            <p className="text-[13px] text-gray-500 -mt-1">
              Vascular & Endovascular Surgeon
            </p>
          </div>
        </Link>

        {/* CENTER — Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-[16px] font-medium py-6">
          <Link
            href="/"
            className="text-black hover:text-(--med-primary) transition"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-black hover:text-(--med-primary) transition"
          >
            Services
          </Link>
          {/* Dropdown — Open on Hover */}
          {/* SERVICES DROPDOWN */}
          {/* <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-black flex items-center gap-1 hover:text-(--med-primary)">
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute -left-4 pt-8 bg-transparent top-full">
                <div className="bg-white shadow-xl py-3 w-56 text-black animate-fadeIn border border-(--med-border)">
                  <Link
                    href="/services/varicose-veins"
                    className="block px-4 py-2 hover:bg-(--med-light) hover:text-(--med-primary)"
                  >
                    Varicose Veins
                  </Link>
                  <Link
                    href="/services/angioplasty"
                    className="block px-4 py-2 hover:bg-(--med-light) hover:text-(--med-primary)"
                  >
                    Angioplasty
                  </Link>
                  <Link
                    href="/services/diabetic-foot"
                    className="block px-4 py-2 hover:bg-(--med-light) hover:text-(--med-primary)"
                  >
                    Diabetic Foot Care
                  </Link>
                </div>
              </div>
            )}
          </div> */}

          <Link
            href="/about"
            className="text-black hover:text-(--med-primary) transition"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-black hover:text-(--med-primary) transition"
          >
            Gallery
          </Link>
          {/* PODCAST DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setPodcastOpen(true)}
            onMouseLeave={() => setPodcastOpen(false)}
          >
            <button className="text-black flex items-center gap-1 hover:text-(--med-primary)">
              Podcast
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  podcastOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {podcastOpen && (
              <div className="absolute -left-4 pt-8 bg-transparent top-full">
                <div className="bg-white shadow-xl  py-3 w-56 text-black animate-fadeIn border border-(--med-border)">
                  <Link
                    href="/podcast"
                    className="block px-4 py-2 hover:bg-(--med-light) hover:text-(--med-primary)"
                  >
                    Doc Talk Show
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* WORKSHOP DROPDOWN */}
          {/* WORKSHOP DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setWorkshopOpen(true)}
            onMouseLeave={() => setWorkshopOpen(false)}
          >
            <button className="text-black flex items-center gap-1 hover:text-(--med-primary)">
              Workshop
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  workshopOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {workshopOpen && (
              <div className="absolute -left-4 pt-8 bg-transparent top-full">
                <div className="bg-white shadow-xl  py-2 w-64 text-black animate-fadeIn border border-(--med-border)">
                  {/* AVF CARE WORKSHOP */}
                  <div className="relative group">
                    <div className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-(--med-light)">
                      <span>AVF Care Workshop</span>
                      <ChevronDown size={14} className="-rotate-90" />
                    </div>

                    {/* SECOND LEVEL MENU */}
                    <div className="absolute left-full -top-2 hidden group-hover:block">
                      <div className="bg-white shadow-xl  py-2 w-48 border border-(--med-border)">
                        <Link
                          href="/workshop/avf-care/page-1"
                          className="block px-4 py-2 hover:bg-(--med-light) hover:text-(--med-primary)"
                        >
                          Page 1
                        </Link>
                        <Link
                          href="/workshop/avf-care/page-2"
                          className="block px-4 py-2 hover:bg-(--med-light) hover:text-(--med-primary)"
                        >
                          Page 2
                        </Link>
                        <Link
                          href="/workshop/avf-care/page-3"
                          className="block px-4 py-2 hover:bg-(--med-light) hover:text-(--med-primary)"
                        >
                          Page 3
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blogs"
            className="text-black hover:text-(--med-primary) transition"
          >
            Blog
          </Link>
          {/* <Link
            href="/contact-us"
            className="text-black hover:text-(--med-primary) transition"
          >
            Contact
          </Link> */}

          {/* Dropdown */}
        </div>

        {/* RIGHT — Call + Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book Appointment"
          />

          <button
            onClick={() => setSideOpen(true)}
            className="text-(--med-text) hover:text-(--med-primary) transition"
          >
            <Menu size={32} />
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-(--med-text)"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* RIGHT DESKTOP SIDEBAR — SOLID BG, ATTRACTIVE, PREMIUM */}
      <div
        className={`fixed top-0 right-0 h-full w-[30%] bg-white border-l text-(--med-border) shadow-2xl z-50 p-8 transform transition-transform duration-300 ${
          sideOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <div className="leading-tight">
            <p className="text-2xl font-bold text-(--med-primary)">
              Dr. Himanshu Verma
            </p>
            <p className="text-[13px] text-gray-500 -mt-1">
              Vascular & Endovascular Surgeon
            </p>
          </div>
          <button
            onClick={() => setSideOpen(false)}
            className="absolute top-5 right-5 text-(--med-text) hover:text-(--med-primary)"
          >
            <X size={32} />
          </button>
        </div>

        <div className="mt-14 space-y-8">
          {/* About */}
          <div>
            <h2 className="text-2xl font-semibold text-(--med-primary)">
              About Us
            </h2>
            <p className="text-[15px] text-gray-600 mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              magnam ratione placeat ullam debitis ducimus quam consequuntur
              excepturi quae harum.
            </p>
          </div>

          <hr className="text-(--med-border)" />

          {/* Social */}
          <div>
            <h3 className="text-2xl font-semibold text-(--med-primary)">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DxjE4e1wq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[var(--med-primary)] hover:text-blue-600 transition hover:scale-110"
              >
                <Facebook className="cursor-pointer" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/drhimanshu_verma?igsh=MTQybTFwYjA4dDNyNg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[var(--med-primary)] hover:text-pink-400 transition hover:scale-110"
              >
                <Instagram className="cursor-pointer" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@doctalkshow?si=8njkmzIGj66JOBJp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[var(--med-primary)] hover:text-red-500 transition hover:scale-110"
              >
                <Youtube className="cursor-pointer" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/drhimanshuverma?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--med-primary)] hover:text-blue-400 transition hover:scale-110"
              >
                <Linkedin className="cursor-pointer" />
              </a>
            </div>
          </div>

          <hr className="text-(--med-border)" />

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-(--med-primary)">
              Contact Us
            </h3>

            <div className="mt-3 space-y-3 text-[15px] text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="text-(--med-primary)" />
                doctorclinic@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-(--med-primary)" />
                +91 8826833598
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-(--med-primary)" />
                Delhi NCR, India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-full bg-white border-l border-(--med-border) shadow-2xl z-50 p-6 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <div className="leading-tight">
            <p className="text-2xl font-bold text-(--med-primary)">
              Dr. Himanshu Verma
            </p>
            <p className="text-[13px] text-gray-500 -mt-1">
              Vascular & Endovascular Surgeon
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 text-[var(--med-primary)]"
          >
            <X size={32} />
          </button>
        </div>

        <div className="mt-12 flex flex-col gap-6 text-[18px] font-medium">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-[var(--med-primary)]"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="text-[var(--med-primary)]"
          >
            Services
          </Link>

          {/* <details>
            <summary className="cursor-pointer text-[var(--med-primary)]">
              Services
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-2 text-[var(--med-primary)]">
              <Link href="/services/varicose-veins">Varicose Veins</Link>
              <Link href="/services/angioplasty">Angioplasty</Link>
              <Link href="/services/diabetic-foot">Diabetic Foot Care</Link>
            </div>
          </details> */}
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="text-[var(--med-primary)]"
          >
            About
          </Link>
          <Link href="/gallery" className="text-[var(--med-primary)]">
            Gallery
          </Link>

          {/* PODCAST */}
          <details>
            <summary className="cursor-pointer text-[var(--med-primary)]">
              Podcast
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-2 text-[var(--med-primary)]">
              <Link href="/podcast">Doc Talk Show</Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer text-[var(--med-primary)]">
              Workshop
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-3">
              {/* AVF CARE WORKSHOP */}
              <details>
                <summary className="cursor-pointer text-[var(--med-primary)]">
                  AVF Care Workshop
                </summary>

                <div className="ml-4 mt-2 flex flex-col gap-2 text-[var(--med-primary)]">
                  <Link href="/workshop/avf-care/page-1">Page 1</Link>
                  <Link href="/workshop/avf-care/page-2">Page 2</Link>
                  <Link href="/workshop/avf-care/page-3">Page 3</Link>
                </div>
              </details>
            </div>
          </details>

          <Link
            href="/blogs"
            onClick={() => setMobileOpen(false)}
            className="text-[var(--med-primary)]"
          >
            Blog
          </Link>
          {/* <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="text-[var(--med-primary)]"
          >
            Contact
          </Link> */}

          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book Appointment"
          />
          {/* <a
            href="tel:+919999999999"
            className="mt-4 px-6 py-3 bg-(--med-primary) text-white text-center rounded-full shadow-md"
          >
            Call Now
          </a> */}

          <div className="flex gap-5 mt-3">
            <Facebook className="text-(--med-primary)" />
            <Instagram className="text-(--med-primary)" />
            <Youtube className="text-(--med-primary)" />
            <Linkedin className="text-(--med-primary)" />
          </div>
        </div>
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </header>
  );
}
