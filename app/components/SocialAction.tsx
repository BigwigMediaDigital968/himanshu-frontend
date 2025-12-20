"use client";

import { useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaYoutube, FaShareAlt } from "react-icons/fa";

export default function FloatingBottomLeftSocial() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* GOOEY SVG FILTER */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -7
              "
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* FLOATING MENU */}
      <div className="hidden md:block fixed bottom-3 left-10 z-50">
        <div className="relative gooey-menu" style={{ filter: "url(#goo)" }}>
          {/* MAIN BUTTON */}
          <button onClick={() => setOpen(!open)} className="gooey-btn main-btn">
            <FaShareAlt />
          </button>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/share/1DxjE4e1wq/"
            target="_blank"
            className={`gooey-btn child-btn ${open ? "open fb" : ""}`}
          >
            <BsFacebook />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/drhimanshu_verma"
            target="_blank"
            className={`gooey-btn child-btn ${open ? "open ig" : ""}`}
          >
            <BsInstagram />
          </a>

          {/* YOUTUBE */}
          <a
            href="https://www.youtube.com/channel/UCEoRfpXsGBAhPTUFdJDqGaQ"
            target="_blank"
            className={`gooey-btn child-btn ${open ? "open yt" : ""}`}
          >
            <FaYoutube />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/drhimanshuverma"
            target="_blank"
            className={`gooey-btn child-btn ${open ? "open in" : ""}`}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}
