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
import Link from "next/link";

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
      <title>
        Vascular Surgery Treatments in Gurgaon | AV Fistula, Varicose Veins, PAD
      </title>

      <meta
        name="title"
        content="Vascular Surgery Treatments in Gurgaon | AV Fistula, Varicose Veins, PAD"
      />

      <meta
        name="description"
        content="Explore advanced vascular surgery treatments in Gurgaon including AV fistula surgery, dialysis access, varicose veins laser treatment, peripheral arterial disease (PAD), diabetic foot care and limb salvage procedures by Dr. Himanshu Verma."
      />

      <meta
        name="keywords"
        content="vascular surgery treatments Gurgaon, AV fistula surgery India, dialysis access surgery, varicose veins laser treatment Gurgaon, peripheral artery disease treatment, diabetic foot care India, limb salvage surgery, minimally invasive vascular surgery, endovascular procedures Gurgaon, vascular disease treatment"
      />

      <link rel="canonical" href="https://www.drhimanshuverma.com/services" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Vascular Surgery Treatments in Gurgaon | AV Fistula, Varicose Veins, PAD"
      />

      <meta
        property="og:description"
        content="Advanced vascular and endovascular treatments in Gurgaon including AV fistula, dialysis access, varicose veins laser therapy, PAD treatment and limb salvage using minimally invasive techniques by Dr. Himanshu Verma."
      />

      <meta
        property="og:image"
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg"
      />

      <meta
        property="og:url"
        content="https://www.drhimanshuverma.com/services"
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dr Himanshu Verma" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Vascular Surgery Treatments in Gurgaon | AV Fistula, Varicose Veins, PAD"
      />

      <meta
        name="twitter:description"
        content="Comprehensive vascular surgery services including AV fistula, dialysis access, varicose veins laser treatment, PAD and limb salvage procedures in Gurgaon."
      />

      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg"
      />

      <meta
        name="twitter:url"
        content="https://www.drhimanshuverma.com/services"
      />

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
                      label: "Varicose Veins",
                      id: "varicose-veins",
                    },
                    {
                      label: "Chronic Venous Insufficiency",
                      id: "chronic-venous-disorders",
                    },
                    {
                      label: "Lymphatic Care",
                      id: "lymphatic-care",
                    },
                    {
                      label: "Pelvic Venous Disorders",
                      id: "pelvic-venous-disorders",
                    },
                    {
                      label: "Gonadal Vein Disease",
                      id: "gondal-vein-disease",
                    },
                    {
                      label: "AV Fistula",
                      id: "av-fistula",
                    },
                    {
                      label: "Dialysis Access",
                      id: "dialysis-access",
                    },
                    {
                      label: "Central Venous Care",
                      id: "central-venous-care",
                    },
                    {
                      label: "Peripheral Artery Disease (PAD)",
                      id: "pad-art",
                    },
                    {
                      label: "Advanced Limb Salvage",
                      id: "limb-salvage",
                    },
                    {
                      label: "Diabetic Foot",
                      id: "diabetic-foot",
                    },
                    {
                      label: "Wound Care",
                      id: "wound-care",
                    },
                    {
                      label: "Minor Amputations",
                      id: "minor-ampu",
                    },
                    {
                      label: "Amputation Surgery",
                      id: "amp-sur",
                    },
                    {
                      label: "Deep Vein Thrombosis",
                      id: "deep-vein",
                    },
                    {
                      label: "Pulmonary Embolism",
                      id: "pul-emb",
                    },
                    {
                      label: "Abdominal Aortic Aneurysm",
                      id: "abd-aor",
                    },
                    {
                      label: "Advanced Venous Interventions",
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
                      label: "Vascular Trauma",
                      id: "vas-tra",
                    },
                    {
                      label: "ONCO Vascular Surgery",
                      id: "onc-vas",
                    },
                    {
                      label: "Arteriovenous Malformation",
                      id: "art-mal",
                    },
                    {
                      label: "Pediatric & Iatrogenic Vascular Injuries",
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
                      className="group flex items-start gap-3 cursor-pointer text-gray-600 hover:text-[var(--med-primary)] transition"
                    >
                      {/* Highlighted number */}
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--med-light)] text-[var(--med-primary)] text-xs font-semibold border border-[var(--med-border)] group-hover:bg-[var(--med-primary)] group-hover:text-white transition flex-shrink-0">
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
              {/* Varicose Veins */}

              <ServiceCard
                id="varicose-veins"
                title="Varicose Veins"
                desc="Varicose veins are swollen, twisted veins caused by poor blood flow, leading to pain, heaviness, and visible vein changes. Minimally invasive treatments like laser and RFA effectively restore circulation with quick recovery."
                link="/services/varicose-veins-treatment-in-gurgaon"
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

              {/* Chronic Venous Disorders */}
              <ServiceCard
                id="chronic-venous-disorders"
                title="Chronic Venous Insufficiency"
                desc="Chronic venous insufficiency occurs when leg veins fail to return blood efficiently, causing swelling, pain, skin changes, and ulcers. Advanced treatments like laser, RFA, and compression therapy improve circulation and promote healing."
                link="/services/chronic-venous-insufficiency-treatment-in-gurgaon"
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

              {/* Lymphatic Care */}
              <ServiceCard
                id="lymphatic-care"
                title="Lymphatic Care"
                desc="Lymphatic disorders cause fluid buildup (lymphedema), leading to swelling, discomfort, and recurrent infections. Specialized care including MLD, compression therapy, and advanced techniques helps improve drainage and reduce swelling."
                link="/services/lymphatic-care-treatment-in-gurgaon"
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

              {/* Pelvic Venous Disorder */}
              <ServiceCard
                id="pelvic-venous-disorders"
                title="Pelvic Venous Disorders"
                desc="Pelvic venous disorders occur due to abnormal vein flow in the pelvis, causing chronic pain, varicosities, and discomfort. Minimally invasive embolization treatments effectively block faulty veins and relieve symptoms."
                link="/services/pelvic-venous-disorder-treatment-in-gurgaon"
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

              {/* Gondal Vein */}
              <ServiceCard
                id="gondal-vein-disease"
                title="Gonadal Vein Disease"
                desc="Gonadal vein disease leads to abnormal blood flow in ovarian or testicular veins, causing pelvic pain or varicocele. Minimally invasive embolization treatments effectively seal faulty veins and relieve symptoms."
                link="/services/gonadal-vein-disease-treatment-in-gurgaon"
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

              {/* AV Fistula */}
              <ServiceCard
                id="av-fistula"
                title="AV Fistula"
                desc="AV fistula and dialysis access procedures create reliable blood flow for safe and effective dialysis treatment. Advanced techniques ensure long-term access function, fewer complications, and better patient outcomes."
                link="/services/av-fistula-treatment-in-gurgaon"
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
              {/* Dialysis Access */}
              <ServiceCard
                id="dialysis-access"
                title="Dialysis Access"
                desc="AV fistula and dialysis access procedures create reliable blood flow for safe and effective dialysis treatment. Advanced techniques ensure long-term access function, fewer complications, and better patient outcomes."
                link="/services/dialysis-access-treatment-in-gurgaon"
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

              {/* central venous care */}
              <ServiceCard
                id="central-venous-care"
                title="Central Venous Care"
                desc="AV fistula and dialysis access procedures create reliable blood flow for safe and effective dialysis treatment. Advanced techniques ensure long-term access function, fewer complications, and better patient outcomes."
                link="/services/central-venous-care-treatment-in-gurgaon"
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

              {/* Peripheral Artery Disease */}
              <ServiceCard
                id="pad-art"
                title="Peripheral Artery Disease (PAD)"
                desc="Peripheral artery disease (PAD) reduces blood flow to the limbs, causing pain, ulcers, and risk of limb loss. Advanced angioplasty, stenting, and bypass procedures restore circulation and improve limb health."
                link="/services/peripheral-artery-disease-treatment-in-gurgaon"
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

              {/* Advance Limb */}
              <ServiceCard
                id="limb-salvage"
                title="Advanced Limb Salvage"
                desc="Advanced limb salvage focuses on restoring blood flow and healing non-healing wounds to prevent amputation. Combined endovascular and surgical techniques help save limbs and improve quality of life."
                link="/services/limb-salvage-surgery-in-gurgaon"
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

              {/* Diabitic Foot */}
              <ServiceCard
                id="diabetic-foot"
                title="Diabetic Foot"
                desc="Diabetic foot conditions can lead to non-healing wounds, infections, and risk of amputation if untreated. Comprehensive wound care, revascularization, and timely interventions help preserve function and prevent complications."
                link="/services/diabetic-foot-treatment-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Wound Care */}
              <ServiceCard
                id="wound-care"
                title="Wound Care"
                desc="Diabetic foot conditions can lead to non-healing wounds, infections, and risk of amputation if untreated. Comprehensive wound care, revascularization, and timely interventions help preserve function and prevent complications."
                link="/services/diabetic-wound-care-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Minor Ampu */}
              <ServiceCard
                id="minor-ampu"
                title="Minor Amputations"
                desc="Diabetic foot conditions can lead to non-healing wounds, infections, and risk of amputation if untreated. Comprehensive wound care, revascularization, and timely interventions help preserve function and prevent complications."
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Amputation Surgery */}
              <ServiceCard
                id="amp-sur"
                title="Amputation Surgery"
                desc="Amputation surgery is performed when severe vascular disease, trauma, or infection compromises blood flow and threatens overall health. Timely surgical intervention, advanced techniques, and comprehensive rehabilitation support help preserve quality of life, prevent complications, and promote optimal recovery."
                link="/services/amputation-surgery-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Deep Vein Thrombosis */}
              <ServiceCard
                id="deep-vein"
                title="Deep Vein Thrombosis"
                desc="Diabetic foot conditions can lead to non-healing wounds, infections, and risk of amputation if untreated. Comprehensive wound care, revascularization, and timely interventions help preserve function and prevent complications."
                link="/services/deep-vein-thrombosis-treatment-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Pulmonary Embolism */}
              <ServiceCard
                id="pul-emb"
                title="Pulmonary Embolism"
                desc="Diabetic foot conditions can lead to non-healing wounds, infections, and risk of amputation if untreated. Comprehensive wound care, revascularization, and timely interventions help preserve function and prevent complications."
                link="/services/pulmonary-embolism-treatment-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Abdominal Aortic Aneurysm */}
              <ServiceCard
                id="abd-aor"
                title="Abdominal Aortic Aneurysm"
                desc="Diabetic foot conditions can lead to non-healing wounds, infections, and risk of amputation if untreated. Comprehensive wound care, revascularization, and timely interventions help preserve function and prevent complications."
                link="/services/abdominal-aortic-aneurysm-treatment-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Vascular Trauma Treatment  */}
              <ServiceCard
                id="vas-tra"
                title="Vascular Trauma"
                desc="Vascular trauma represents one of the most critical medical emergencies, involving damage to the body's blood vessels, arteries, veins, or capillaries that transport blood throughout the body."
                link="/services/vascular-trauma-treatment-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* ONCO Vascular  */}
              <ServiceCard
                id="onc-vas"
                title="ONCO Vascular Surgery"
                desc="Vascular trauma represents one of the most critical medical emergencies, involving damage to the body's blood vessels, arteries, veins, or capillaries that transport blood throughout the body."
                link="/services/onco-vascular-surgery-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Arteriovenous Malformation  */}
              <ServiceCard
                id="art-mal"
                title="Arteriovenous Malformation"
                desc="Vascular trauma represents one of the most critical medical emergencies, involving damage to the body's blood vessels, arteries, veins, or capillaries that transport blood throughout the body."
                link="/services/arteriovenous-malformation-treatment-in-gurgaon"
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
                desc="Deep vein thrombosis (DVT) involves blood clots in deep veins, causing pain, swelling, and risk of serious complications. Advanced treatments like thrombolysis, thrombectomy, and stenting help restore normal blood flow."
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
                desc="Pulmonary embolism is a serious condition where blood clots block arteries in the lungs, potentially life-threatening. Rapid diagnosis and advanced catheter-based treatments help restore blood flow and improve survival."
                items={[
                  "Comprehensive pulmonary embolism management under a multidisciplinary Pulmonary Embolism Response Team (PERT) program",
                  "Catheter-based interventions in selected high-risk pulmonary embolism cases",
                ]}
              />

              <ServiceCard
                id="aortic-visceral-renal"
                title="Aortic, Visceral & Renal Artery Interventions"
                desc="Aortic, visceral, and renal artery diseases can affect blood supply to vital organs, leading to serious complications. Advanced endovascular and surgical interventions restore circulation and prevent life-threatening outcomes."
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
                desc="Onco-vascular surgery manages tumors involving blood vessels and rare vascular disorders requiring complex care. Specialized surgical techniques ensure safe tumor removal while preserving critical blood flow."
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
                desc="Vascular injuries from trauma, medical procedures, or pediatric conditions require urgent and specialized care. Advanced surgical and endovascular techniques help restore blood flow and prevent life-threatening complications."
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
                desc="Arteriovenous malformations (AVMs) are abnormal connections between arteries and veins that can disrupt normal blood flow. Advanced embolization and surgical treatments help control symptoms and prevent complications."
                items={[
                  "Peripheral and visceral arteriovenous malformations (AVMs)",
                  "Endovascular embolization and surgical management of vascular malformations",
                ]}
              />

              <ServiceCard
                id="ecmo-access"
                title="ECMO Cannulation & Large-Bore Access Care"
                desc="ECMO and large-bore access procedures require precise vascular expertise for critically ill patients. Specialized care ensures safe cannulation, optimal flow, and management of access-related complications."
                items={[
                  "ECMO cannulation support",
                  "Management of large-bore arterial and venous access",
                  "Treatment of ECMO-related vascular complications",
                ]}
              />

              <ServiceCard
                id="special-interests"
                title="Special Interests"
                desc="Specialized expertise in complex and high-risk vascular conditions requiring advanced planning and precision. Focus on minimally invasive techniques and multidisciplinary care for optimal patient outcomes."
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
  desc,
  link,
}: {
  id: string;
  title: string;
  items: ServiceItem[];
  desc: string;
  link?: string;
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

      <p>{desc}</p>

      {/* Items */}
      {/* <ul className="grid sm:grid-cols-2 gap-4">
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
      </ul> */}

      {/* Learn More Link */}
      {link && (
        <div className="mt-6 flex justify-end">
          <Link
            href={link}
            className="text-[var(--med-primary)] font-semibold hover:underline inline-flex items-center gap-1 transition-transform hover:translate-x-1"
          >
            Read more &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
