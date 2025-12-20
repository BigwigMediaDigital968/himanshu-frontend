"use client";

import { Phone, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function FloatingContactActions() {
  return (
    <>
      {/* MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 w-full">
          <a
            href="tel:+918826833598"
            className="icon-shake flex flex-col items-center justify-center py-3 text-[var(--med-primary)]"
          >
            <Phone size={20} />
            <span className="text-xs mt-1 font-medium">Call</span>
          </a>

          <a
            href="https://wa.me/8826833598"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-shake flex flex-col items-center justify-center py-3 text-green-600"
          >
            <BsWhatsapp size={20} />
            <span className="text-xs mt-1 font-medium">WhatsApp</span>
          </a>

          <a
            href="mailto:support@bigiwgmediadigital.com"
            className="icon-shake flex flex-col items-center justify-center py-3 text-[var(--med-primary)]"
          >
            <Mail size={20} />
            <span className="text-xs mt-1 font-medium">Contact</span>
          </a>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block fixed bottom-0 right-0 z-50">
        <div className="flex items-center gap-5 bg-[var(--med-primary)] rounded-tl-3xl px-5 py-3 shadow-lg">
          <a href="tel:+8826833598" className="icon-shake text-white">
            <Phone size={18} />
          </a>

          <a
            href="https://wa.me/8826833598"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-shake text-white hover:text-green-400"
          >
            <BsWhatsapp size={18} />
          </a>

          <a
            href="mailto:support@bigiwgmediadigital.com"
            className="icon-shake text-white hover:text-red-600"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
