"use client";

import Image from "next/image";
import { useState } from "react";
import himanshu from "../assets/logo-removebg-preview.png";
import team2 from "../assets/team/chandrakanta.webp";
import team3 from "../assets/team/sanoj.webp";
import team4 from "../assets/team/trish.webp";
import team5 from "../assets/team/Ms Saisri.jpeg";
import team6 from "../assets/team/Dr.Monika Doohun.jpeg";
import arushi from "../assets/team/dr-arushi.jpeg";

const teamMembers = [
  {
    name: "Dr. Himanshu Verma",
    role: "Director – Vascular & Endovascular Surgeon",
    image: himanshu,
    description:
      "A leading Vascular & Endovascular Surgeon at Fortis Hospital, Gurgaon, Dr. Himanshu Verma has extensive experience in managing complex vascular conditions. A trainer and the founder of AVF Care Workshop, he is dedicated to advancing fistula care through education, training, and patient-centered clinical excellence, and also hosts the Doc Talk Show podcast.",
  },
  {
    name: "Ms. Chanderkanta",
    role: "Program Manager, Department of Vascular Surgery",
    image: team2,
    description:
      "Ms. Chandrakanta Thakur leads the AVF Care Workshop as Head of Programs and Strategic Partnerships, overseeing strategy, hospital partnerships, and multi-city execution. As Program Manager, she ensures smooth operations, revenue growth, NABH compliance, MIS and MBR reporting, and team performance. Her leadership aligns patient-first care with operational discipline and sustainable program growth.",
  },
  {
    name: "Dr. Trisha Sachan",
    role: "Renal Nutritionist & Clinical Research Associate",
    image: team4,
    description:
      "Dr. Trisha Sachan holds a PhD in Renal Nutrition and specializes in diet planning for patients with kidney disease. Her clinical and research expertise supports improved patient outcomes through nutrition guidance, preventive care, and evidence-based workshop practices.",
  },
  {
    name: "Mr. Sanoj Yadav",
    role: "Vascular Access Nurse",
    image: team3,
    description:
      "Mr. Sanoj Yadav is a dedicated Vascular Access Nurse with hands-on experience in dialysis patient care. He focuses on patient education, access monitoring, and post-procedure support, ensuring consistent and high-quality care across all affiliated centers.",
  },
  {
    name: "Ms Saisri",
    role: "Patient care coordinator",
    image: team5,
    description:
      "Ms. Saisri is a Patient Care Coordinator dedicated to ensuring a smooth and supportive healthcare experience for patients. She serves as a key point of contact, assisting with appointment scheduling, coordination of care, and communication between patients, families, and the medical team.",
  },
  {
    name: "Dr. Arushi",
    role: "Resident Vascular Surgery (MBBS)",
    image: arushi,
    description:
      "Dr. Arushi is a resident in the Department of Vascular and Endovascular Surgery, where she works closely with senior surgeons in the management of patients undergoing vascular procedures. Her responsibilities include assisting in preoperative evaluation, patient preparation, and coordination of investigations, as well as active involvement in postoperative care and follow-up. She contributes to patient monitoring, wound care, and management of complications under supervision.",
  },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
        <section className="py-12 bg-[var(--med-light)]">
          <div className="w-11/12 md:w-5/6 mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)]">
                Meet Our Dedicated Team
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                A highly skilled team working alongside Dr. Himanshu Verma to
                deliver advanced vascular and endovascular care with compassion.
              </p>
            </div>
  
            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="group relative rounded-3xl overflow-hidden
    border border-[var(--med-border)]
    bg-white shadow-md hover:shadow-xl transition-all duration-500
    cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="relative h-[390px] md:h-[420px] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain
                transition-transform duration-700
                group-hover:scale-105"
                    />
                  </div>
  
                  {/* STATIC NAME BAR */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 group-hover:opacity-0">
                    <h3 className="text-lg font-semibold text-[var(--med-primary)]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
  
                    {/* Mobile CTA */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(activeIndex === index ? null : index);
                      }}
                      className="mt-2 text-sm font-medium text-[var(--med-primary)] underline lg:hidden"
                    >
                      View Profile
                    </button>
                  </div>
  
                  {/* HOVER FULL-HEIGHT TRANSLUCENT PANEL */}
                  <div
                    className={`
      absolute inset-0
      bg-[var(--med-primary)]/60
      backdrop-blur-md
      text-white
      px-6 py-8
      transition-all duration-500 ease-out
      flex flex-col justify-end
  
      ${
        activeIndex === index
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }
  
      lg:translate-y-full
      lg:opacity-100
      lg:group-hover:translate-y-0
    `}
                  >
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
  
                    <p className="text-sm text-white/80 mb-4">{member.role}</p>
  
                    <p className="text-sm text-white/90 leading-relaxed text-justify">
                      {member.description}
                    </p>
  
                    {/* Mobile hint */}
                    <span className="mt-4 text-xs text-white/70 lg:hidden">
                      Tap to close
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}
