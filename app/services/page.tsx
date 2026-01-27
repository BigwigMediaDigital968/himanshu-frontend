"use client";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import FinalCTA from "../components/CTA";
import FloatingContactActions from "../components/ContactActions";
import ButtonFill from "../components/Button";

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
    <>
      {/* SEO Meta Tags */}

      <title>
        Vascular Surgery Treatments in Gurgaon | AV Fistula, Varicose Veins, PAD
      </title>
      <meta
        name="title"
        content="Vascular Surgery Treatments in Gurgaon | AV Fistula, Varicose Veins, PAD"
      />
      <meta
        name="description"
        content="Explore advanced vascular treatments including AV fistula surgery, dialysis access, varicose veins, diabetic foot care & limb salvage using minimally invasive techniques."
      />

      <link rel="canonical" href="https://www.drhimanshuverma.com/services" />

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
              surgical expertise. Each service is tailored to restore blood
              flow, relieve symptoms, and improve long-term quality of life.
            </p>
          </div>
        </section>

        {/* SERVICES CONTENT */}
        <section className="py-16 ">
          <div className="w-11/12 md:w-5/6 mx-auto grid lg:grid-cols-3 gap-5">
            {/* LEFT STICKY INDEX */}
            <aside className="hidden lg:block lg:col-span-1 sticky top-28 h-fit">
              <div className="bg-white rounded-2xl p-6 border border-[var(--med-border)] shadow-sm h-[50vh] overflow-auto">
                <h3 className="font-semibold underline text-[var(--med-primary)] text-2xl mb-4">
                  Our Services
                </h3>
                <ol className="space-y-3 text-sm">
                  {[
                    {
                      label:
                        "Varicose Veins, Chronic Venous Disorders & Lymphatic Care",
                      id: "varicose-veins",
                    },
                    {
                      label: "Pelvic Venous Disorders & Gonadal Vein Disease",
                      id: "pelvic-venous-disorders",
                    },
                    {
                      label:
                        "AV Fistula, Dialysis Access & Central Venous Care",
                      id: "dialysis-access",
                    },
                    {
                      label:
                        "Peripheral Artery Disease (PAD) & Advanced Limb Salvage",
                      id: "pad-limb-salvage",
                    },
                    {
                      label: "Diabetic Foot, Wound Care & Minor Amputations",
                      id: "diabetic-foot",
                    },
                    {
                      label:
                        "Deep Vein Thrombosis (DVT) & Advanced Venous Interventions",
                      id: "dvt-advanced-venous",
                    },
                    {
                      label: "Pulmonary Embolism (PE) Management",
                      id: "pulmonary-embolism",
                    },
                    {
                      label: "Aortic, Visceral & Renal Artery Interventions",
                      id: "aortic-visceral-renal",
                    },
                    {
                      label: "Onco-Vascular Surgery & Rare Vascular Disorders",
                      id: "onco-vascular",
                    },
                    {
                      label:
                        "Vascular Trauma, Pediatric & Iatrogenic Vascular Injuries",
                      id: "vascular-trauma",
                    },
                    {
                      label: "AV Malformations & Complex Vascular Anomalies",
                      id: "av-malformations",
                    },
                    {
                      label: "ECMO Cannulation & Large-Bore Access Care",
                      id: "ecmo-access",
                    },
                    {
                      label: "Special Interests",
                      id: "special-interests",
                    },
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
              {/* CTA BOX */}
              <div className="mt-6 bg-white  rounded-2xl p-6 shadow-md">
                <h4 className="text-lg font-semibold mb-2">
                  Need Help Choosing the Right Treatment?
                </h4>

                <p className="text-sm text-black/50 mb-4 leading-relaxed">
                  If you’re confused by multiple medical opinions or unsure
                  which treatment is right for you, our team can guide you
                  clearly.
                </p>

                <ButtonFill
                  onClick={() => setOpenPopup(true)}
                  text="Request a Callback"
                />
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-2 space-y-16">
              <ServiceCard
                id="varicose-veins"
                title="Varicose Veins, Chronic Venous Disorders & Lymphatic Care"
                items={[
                  "Varicose veins and chronic venous insufficiency",
                  "Superficial, deep, and perforator venous reflux",
                  "Venous ulcers and non-healing venous wounds",
                  "Compression therapy, multilayer bandaging, and ulcer care",
                  "Manual lymphatic drainage (MLD) and compression therapy for lymphedema",
                  "Management of recurrent and complex venous disease",
                  {
                    title: "Minimally invasive venous treatments including:",
                    subItems: [
                      "Endovenous Laser Therapy (EVLT)",
                      "Radiofrequency Ablation (RFA)",
                      "Cyanoacrylate glue closure",
                      "Foam sclerotherapy",
                      "Stab phlebectomy",
                      "Iliac vein stenting for deep venous obstruction",
                    ],
                  },
                ]}
              />

              <ServiceCard
                id="pelvic-venous-disorders"
                title="Pelvic Venous Disorders & Gonadal Vein Disease"
                items={[
                  "Pelvic Congestion Syndrome (PCS) due to pelvic venous reflux",
                  "Vulval, vaginal, and perineal varicosities",
                  "Male varicocele related to gonadal vein reflux",
                  "Integrated management of pelvic and lower-limb venous reflux",
                  {
                    title:
                      "Image-guided, minimally invasive endovascular treatments including:",
                    subItems: [
                      "Pelvic vein embolization / coiling",
                      "Gonadal (ovarian and testicular) vein embolization",
                    ],
                  },
                ]}
              />

              <ServiceCard
                id="dialysis-access"
                title="AV Fistula, Dialysis Access & Central Venous Care"
                items={[
                  "AV fistula creation (radiocephalic, brachiocephalic, brachiobasilic vein transposition – staged)",
                  "Balloon-assisted maturation (BAM angioplasty)",
                  "AV fistula salvage, revision, and thrombectomy",
                  "Central venous stenosis management and stenting",
                  "AV graft placement and revision",
                  "Tunneled dialysis catheter (Permacath) insertion, exchange, and complex re-tunneling",
                  "Complex central line placements, chemoports, and long-term vascular access",
                  "Long-term dialysis access planning and failing access management",
                ]}
              />

              <ServiceCard
                id="pad-limb-salvage"
                title="Peripheral Artery Disease (PAD) & Advanced Limb Salvage"
                items={[
                  "Peripheral arterial disease and critical limb ischemia",
                  "Non-healing ischemic and diabetic foot ulcers",
                  {
                    title: "Endovascular angioplasty and stenting including:",
                    subItems: [
                      "Tibial angioplasty",
                      "Below-the-ankle and plantar artery angioplasty",
                      "Popliteal artery angioplasty and stenting",
                      "Superficial femoral artery (SFA) angioplasty and stenting",
                      "Iliac artery angioplasty and stenting",
                    ],
                  },
                  "Common femoral artery endarterectomy with patch plasty",
                  "Open bypass surgery and hybrid revascularization",
                  {
                    title: "Aorto-iliac disease management including:",
                    subItems: [
                      "Kissing iliac stents",
                      "Distal aortic and iliac bifurcation stenting",
                      "CERAB (Covered Endovascular Reconstruction of the Aortic Bifurcation)",
                      "Aorto-bifemoral bypass and endovascular reconstructions",
                    ],
                  },
                  "Internal iliac artery angioplasty in selected cases (including erectile dysfunction)",
                  "High-risk, multi-level limb salvage procedures",
                ]}
              />

              <ServiceCard
                id="diabetic-foot"
                title="Diabetic Foot, Wound Care & Minor Amputations"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              <ServiceCard
                id="dvt-advanced-venous"
                title="Deep Vein Thrombosis (DVT) & Advanced Venous Interventions"
                items={[
                  "Acute and chronic deep vein thrombosis (DVT)",
                  "Post-thrombotic syndrome management",
                  "Catheter-directed thrombolysis",
                  "Mechanical thrombectomy for venous thrombosis",
                  "Venous stenting for chronic venous obstruction",
                ]}
              />

              <ServiceCard
                id="pulmonary-embolism"
                title="Pulmonary Embolism (PE) Management"
                items={[
                  "Comprehensive pulmonary embolism management under a multidisciplinary Pulmonary Embolism Response Team (PERT) program",
                  "Catheter-based interventions in selected high-risk pulmonary embolism cases",
                ]}
              />
              <ServiceCard
                id="aortic-visceral-renal"
                title="Aortic, Visceral & Renal Artery Interventions"
                items={[
                  "Abdominal and thoracic aortic aneurysm repair (EVAR / TEVAR)",
                  "Aortic angioplasty and stenting for complex aortic syndromes",
                  {
                    title: "Renal artery angioplasty and stenting for:",
                    subItems: [
                      "Resistant hypertension",
                      "Takayasu’s arteritis",
                    ],
                  },
                  "Superior mesenteric artery (SMA) angioplasty and stenting",
                  "Chronic mesenteric ischemia and weight-loss syndromes",
                  {
                    title: "Acute mesenteric ischemia management including:",
                    subItems: [
                      "SMA embolectomy",
                      "SMA thrombolysis",
                      "SMA thrombectomy",
                    ],
                  },
                  "Open mesenteric revascularization and ileo-SMA bypass procedures",
                ]}
              />
              <ServiceCard
                id="onco-vascular"
                title="Onco-Vascular Surgery & Rare Vascular Disorders"
                items={[
                  "Vascular involvement in complex tumor resections (onco-vascular surgery)",
                  "IVC tumor thrombus management",
                  "Carotid body tumors and vascular neck tumors",
                  "Thoracic outlet syndrome and cervical rib–related vascular compression",
                  "Management of complex vascular encasement during oncologic surgery",
                ]}
              />

              <ServiceCard
                id="vascular-trauma"
                title="Vascular Trauma, Pediatric & Iatrogenic Vascular Injuries"
                items={[
                  "Arterial and venous vascular trauma management",
                  "Pediatric vascular injuries",
                  "Iatrogenic vascular injuries",
                  "Emergency vascular repairs",
                  "Complex intravascular foreign body retrievals",
                ]}
              />

              <ServiceCard
                id="av-malformations"
                title="AV Malformations & Complex Vascular Anomalies"
                items={[
                  "Peripheral and visceral arteriovenous malformations (AVMs)",
                  "Endovascular embolization and surgical management of vascular malformations",
                ]}
              />

              <ServiceCard
                id="ecmo-access"
                title="ECMO Cannulation & Large-Bore Access Care"
                items={[
                  "ECMO cannulation support",
                  "Management of large-bore arterial and venous access",
                  "Treatment of ECMO-related vascular complications",
                ]}
              />

              <ServiceCard
                id="special-interests"
                title="Special Interests"
                items={[
                  "High-risk and redo vascular procedures",
                  "Complex multi-level revascularization",
                  "Image-guided and minimally invasive vascular interventions",
                  "Dialysis access optimization and quality improvement",
                  "Multidisciplinary care for limb salvage, venous disease, oncology, and trauma",
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
    </>
  );
}

/* Reusable block */
type ServiceItem =
  | string
  | {
      title: string;
      subItems: string[];
    };

function ServiceCard({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: ServiceItem[];
}) {
  return (
    <div
      id={id}
      data-aos="fade-up"
      className="relative bg-white rounded-3xl p-8 md:p-10 border border-[var(--med-border)] shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)] transition-all duration-300"
    >
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <span className="h-10 w-1 rounded-full bg-[var(--med-primary)]" />
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--med-primary)]">
          {title}
        </h2>
      </div>

      {/* Items */}
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => {
          // ✅ Normal item
          if (typeof item === "string") {
            return (
              <li
                key={i}
                className="group flex items-start gap-3 rounded-2xl bg-[var(--med-light)] px-4 py-3 text-sm md:text-base text-gray-700 hover:bg-white border border-transparent hover:border-[var(--med-primary)] transition"
              >
                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--med-primary)] text-xs font-bold shadow-sm">
                  ✓
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            );
          }

          // ✅ Item with sub-items
          return (
            <li
              key={i}
              className="col-span-full rounded-2xl bg-[var(--med-light)] p-5 border border-transparent hover:border-[var(--med-primary)] transition"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--med-primary)] text-xs font-bold shadow-sm">
                  ✓
                </span>
                <span className="font-medium text-gray-800">{item.title}</span>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3 pl-10">
                {item.subItems.map((sub, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
