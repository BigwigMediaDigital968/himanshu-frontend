"use client";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import FinalCTA from "../components/CTA";
import FloatingContactActions from "../components/ContactActions";

export default function Services() {
  const [openPopup, setOpenPopup] = useState(false);

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

      {/* HERO / INTRO */}
      <section className="py-16 bg-[#64bab4] rounded-r-full">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
            Comprehensive Vascular Care
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vascular & Endovascular Services
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            Dr. Himanshu Verma offers advanced, evidence-based vascular and
            endovascular treatments using minimally invasive techniques and
            surgical expertise. Each service is tailored to restore blood flow,
            relieve symptoms, and improve long-term quality of life.
          </p>
        </div>
      </section>

      {/* SERVICES CONTENT */}
      <section className="py-16 ">
        <div className="w-11/12 md:w-5/6 mx-auto grid lg:grid-cols-4 gap-12">
          {/* LEFT STICKY INDEX */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-28 h-fit">
            <div className="bg-white rounded-2xl p-6 border border-[var(--med-border)] shadow-sm">
              <h3 className="font-semibold underline text-[var(--med-primary)] text-2xl mb-4">
                Our Services
              </h3>
              <ol className="space-y-3 text-sm">
                {[
                  { label: "Varicose Vein Treatments", id: "varicose-veins" },
                  {
                    label: "Dialysis Access (AV Fistula & CKD Care)",
                    id: "dialysis-access",
                  },
                  {
                    label: "Peripheral Artery Disease – Diagnosis & Treatment",
                    id: "pad",
                  },
                  {
                    label: "Aortic & Major Vessel Interventions",
                    id: "aortic",
                  },
                  { label: "Visceral Artery Interventions", id: "visceral" },
                  {
                    label: "Carotid & Upper-Body Artery Procedures",
                    id: "carotid",
                  },
                  { label: "Venous & Lymphedema Care", id: "venous" },
                  { label: "Diabetic Foot & Wound Care", id: "diabetic-foot" },
                  { label: "Diagnostic & Support Services", id: "diagnostic" },
                  { label: "AV Fistula Care Workshop", id: "avf-workshop" },
                  { label: "Preventive & Advisory Services", id: "preventive" },
                ].map((item, i) => (
                  <li
                    key={i}
                    onClick={() =>
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="
        group
        flex items-start gap-3
        cursor-pointer
        text-gray-600
        hover:text-[var(--med-primary)]
        transition
      "
                  >
                    {/* Highlighted number */}
                    <span
                      className="
          flex h-6 w-6 items-center justify-center
          rounded-full
          bg-[var(--med-light)]
          text-[var(--med-primary)]
          text-xs font-semibold
          border border-[var(--med-border)]
          group-hover:bg-[var(--med-primary)]
          group-hover:text-white
          transition
          flex-shrink-0
        "
                    >
                      {i + 1}
                    </span>

                    {/* Label */}
                    <span className="leading-snug">{item.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 space-y-16">
            <ServiceCard
              id="varicose-veins"
              title="Varicose Vein Treatments"
              items={[
                "Endovenous Laser Treatment (EVLT) for Varicose Veins",
                "Medical Glue Procedure (Cyanoacrylate Closure) for Varicose Veins",
                "Radiofrequency Ablation (if you want to add later)",
                "Foam Sclerotherapy",
                "Microphlebectomy / Stab Phlebectomy",
                "Iliac Vein Stenting for Venous Hypertension",
                "Deep Vein Thrombolysis",
                "Mechanical Thrombectomy for DVT",
                "IVC Filter Insertion & Retrieval",
                "Pulmonary Embolism Suction Thrombectomy",
              ]}
            />

            <ServiceCard
              id="dialysis-access"
              title="Dialysis Access (AV Fistula & CKD Care)"
              items={[
                "AV Fistula Creation (Radiocephalic / Brachiocephalic / Brachial Basilic)",
                "Basilic Vein Transposition",
                "AV Graft Placement",
                "Balloon Assisted Maturation (BAM) / AV Fistula Angioplasty",
                "Difficult AV Fistula Salvage Procedures",
                "AV Fistula Thrombectomy",
                "Lower-Limb AV Fistula Creation (Rare, Selected Cases)",
                "Permacath Insertion (Internal Jugular / Oblique Neck Approach)",
                "Difficult Permacath Insertion",
                "Subclavian / Femoral Temporary Dialysis Catheter",
                "Permacath Exchange or Repositioning",
              ]}
            />

            <ServiceCard
              id="pad"
              title="Peripheral Artery Disease (PAD)"
              items={[
                "Digital Subtraction Angiography (DSA)",
                "Iliac Artery Angioplasty & Stenting",
                "Femoral Artery Angioplasty",
                "Femoral Endarterectomy",
                "Superficial Femoral Artery (SFA) Angioplasty",
                "SFA Drug-Eluting Balloon Angioplasty",
                "SFA Stenting",
                "Below Knee (BTK / TBL) Angioplasty",
                "Femoro-Popliteal Bypass",
                "Femoro-Tibial Bypass",
                "Tibial / Plantar Vessel Angioplasty",
                "Intravascular Lithotripsy (Shockwave Therapy)",
                "IVUS – Intravascular Ultrasound Guided Procedures",
                "Embolectomy for Acute Limb Ischemia",
              ]}
            />

            <ServiceCard
              id="aortic"
              title="Aortic & Major Vessel Interventions"
              items={[
                "Endovascular Aortic Aneurysm Repair (EVAR)",
                "Thoracic Endovascular Aortic Repair (TEVAR)",
                "Hybrid Aortic Aneurysm Repair",
                "Aortic Dissection Treatment",
                "Iliac Branch Devices (optional)",
              ]}
            />
            <ServiceCard
              id="visceral"
              title="Visceral Artery Interventions"
              items={[
                "Renal Artery Angioplasty & Stenting",
                "Superior Mesenteric Artery (SMA) Angioplasty",
                "Celiac Artery Angioplasty (if needed)",
                "Mesenteric Ischemia Endovascular Management",
              ]}
            />

            <ServiceCard
              id="carotid"
              title="Carotid & Upper-Body Artery Procedures"
              items={[
                "Carotid Endarterectomy",
                "Carotid Artery Stenting",
                "Subclavian Artery Angioplasty & Stenting",
                "Carotid–Subclavian Bypass",
                "Vertebral Artery Stenting (optional)",
              ]}
            />

            <ServiceCard
              id="venous"
              title="Venous & Lymphedema Care"
              items={[
                "Chronic Venous Insufficiency Management",
                "Compression Therapy",
                "Manual Lymphatic Drainage (MLD)",
                "Lymphedema Treatment Program",
                "Ulcer Healing Protocols",
                "Iliac Vein Stenting for Non-Healing Ulcers",
              ]}
            />

            <ServiceCard
              id="diabetic-foot"
              title="Diabetic Foot & Wound Care"
              items={[
                "Diabetic Foot Ulcer Debridement",
                "Pressure Offloading (TCC / Customized Insoles)",
                "Infection Control and Limb Salvage Program",
                "Heel Ulcer / Forefoot Ulcer Care",
                "Advanced Dressings",
                "Negative Pressure Wound Therapy (if you want to add)",
              ]}
            />
            <ServiceCard
              id="diagnostic"
              title="Diagnostic & Support Services"
              items={[
                "Doppler Ultrasound for Arteries & Veins",
                "Vein Mapping for Dialysis Access",
                "Pre-dialysis Access Evaluation",
                "DVT Evaluation & Thrombosis Clinic",
                "Post-Angioplasty & Post-Stenting Surveillance",
                "Aneurysm Surveillance Program",
                "Post-AVF Creation Follow-Up & Flow Monitoring",
                "Second Opinion for Complex Vascular Cases",
              ]}
            />
            <ServiceCard
              id="avf-workshop"
              title="AV Fistula Care Workshop"
              items={["AV Fistula Care Workshop & Self-Examination Training"]}
            />
            <ServiceCard
              id="preventive"
              title="Preventive & Advisory Services"
              items={[
                "Comprehensive Vascular Second Opinion Service",
                "Patient Education & Preventive Vascular Care",
                "Medical Fitness, Corporate Screening & Health Advisory",
              ]}
            />
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}

/* Reusable block */
function ServiceCard({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: string[];
}) {
  return (
    <div
      id={id}
      data-aos="fade-up"
      className="relative bg-white rounded-3xl p-8 md:p-10 border border-[var(--med-border)] shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)] transition-all duration-300"
    >
      {/* Title with accent */}
      <div className="flex items-center gap-3 mb-8">
        <span className="h-10 w-1 rounded-full bg-[var(--med-primary)]" />
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--med-primary)]">
          {title}
        </h2>
      </div>

      {/* Items */}
      <ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="
              group
              flex items-start gap-3
              rounded-2xl
              bg-[var(--med-light)]
              px-4 py-3
              text-sm md:text-base
              text-gray-700
              border border-transparent
              hover:border-[var(--med-primary)]
              hover:bg-white
              transition-all duration-300
            "
          >
            {/* Icon badge */}
            <span
              className="
                mt-1
                flex h-7 w-7 items-center justify-center
                rounded-full
                bg-white
                text-[var(--med-primary)]
                text-xs font-bold
                shadow-sm
                flex-shrink-0
                group-hover:scale-110
                transition
              "
            >
              ✓
            </span>

            {/* Text */}
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
