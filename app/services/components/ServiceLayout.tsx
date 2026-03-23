"use client";

import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FinalCTA from "@/app/components/CTA";
import FloatingContactActions from "@/app/components/ContactActions";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import Link from "next/link";
import { useState } from "react";
import PageTransition from "@/app/components/PageTransition";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ServiceLayout({
  title,
  description,
  children,
}: ServiceLayoutProps) {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="bg-[var(--med-light)]">
      <Nav />

      {/* HERO */}
      <section className="py-16 bg-[#64bab4] rounded-b-3xl">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-white/80 max-w-3xl">{description}</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16">
        <div className="w-11/12 md:w-5/6 mx-auto grid lg:grid-cols-12 gap-10">
          {/* SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <div className="bg-white rounded-3xl p-6 border border-[var(--med-border)] shadow-md">
              {/* Sidebar CTA */}
              <div className="bg-[var(--med-light)] rounded-2xl p-6 border border-[var(--med-border)]">
                <h4 className="font-semibold text-[var(--med-primary)] mb-2">
                  Need Expert Advice?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Dr. Himanshu Verma specializes in treating complex pelvic
                  venous conditions.
                </p>
                <ButtonFill
                  onClick={() => setOpenPopup(true)}
                  text="Book Consultation"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </aside>

          {/* CONTENT */}

          <div className="lg:col-span-8 bg-white p-10 rounded-3xl shadow-lg">
            <PageTransition>{children}</PageTransition>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <FloatingContactActions />

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
