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
  active: "pelvic" | "gonadal";
}

export default function ServiceLayout1({
  title,
  description,
  children,
  active,
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
              <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-6 px-2">
                Select Condition
              </h3>

              <div className="flex flex-col gap-3">
                <Link
                  href="/services/pelvic-venous-disorder-treatment-in-gurgaon"
                  className={`px-5 py-4 rounded-xl transition-all duration-300 ${
                    active === "pelvic"
                      ? "bg-[var(--med-primary)] text-white shadow-lg"
                      : "bg-[var(--med-light)] text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                  }`}
                >
                  Pelvic Venous Disorders
                </Link>

                <Link
                  href="/services/gonadal-vein-disease-treatment-in-gurgaon"
                  className={`px-5 py-4 rounded-xl transition-all duration-300 ${
                    active === "gonadal"
                      ? "bg-[var(--med-primary)] text-white shadow-lg"
                      : "bg-[var(--med-light)] text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                  }`}
                >
                  Gonadal Vein Disease
                </Link>
              </div>

              {/* Sidebar CTA */}
              <div className="mt-8 bg-[var(--med-light)] rounded-2xl p-6 border border-[var(--med-border)]">
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
