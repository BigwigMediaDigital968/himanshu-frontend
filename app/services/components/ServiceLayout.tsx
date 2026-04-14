"use client";

import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FinalCTA from "@/app/components/CTA";
import FloatingContactActions from "@/app/components/ContactActions";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { useState } from "react";
import PageTransition from "@/app/components/PageTransition";
import AboutServiceTable from "@/app/components/AboutServiceTable";
import { usePathname } from "next/navigation";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const servicesData = [
  {
    id: "varicose-veins",
    title: "Varicose Veins",
    desc: "Varicose veins are swollen, twisted veins caused by poor blood circulation, leading to pain, heaviness, and visible veins. Advanced varicose veins treatment, like laser and RFA, offers safe, effective relief with faster recovery.",
    link: "/services/varicose-veins-treatment-in-gurgaon",
    items: [
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
    ],
  },
  {
    id: "chronic-venous-disorders",
    title: "Chronic Venous Insufficiency",
    desc: "Chronic venous insufficiency occurs when leg veins cannot return blood properly, causing swelling, pain, skin changes, and ulcers. Advanced chronic venous insufficiency treatment improves circulation and prevents complications for long-term relief.",
    link: "/services/chronic-venous-insufficiency-treatment-in-gurgaon",
    items: [
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
    ],
  },
  {
    id: "lymphatic-care",
    title: "Lymphatic Care",
    desc: "Lymphatic disorders can cause swelling, heaviness, and discomfort due to poor lymph flow. Expert lymphatic care and lymphedema treatment help reduce swelling, improve circulation, and enhance quality of life with personalized management.",
    link: "/services/lymphatic-care-treatment-in-gurgaon",
    items: [
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
    ],
  },
  {
    id: "pelvic-venous-disorders",
    title: "Pelvic Venous Disorders",
    desc: "Pelvic venous disorders occur due to enlarged pelvic veins, leading to chronic pelvic pain, heaviness, and discomfort. Advanced pelvic venous disorder treatment helps relieve symptoms and improve daily life with minimally invasive procedures.",
    link: "/services/pelvic-venous-disorder-treatment-in-gurgaon",
    items: [
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
    ],
  },
  {
    id: "gondal-vein-disease",
    title: "Gonadal Vein Disease",
    desc: "Gonadal vein disease occurs due to enlarged or faulty veins, causing pelvic pain, heaviness, and discomfort, especially in women. Advanced gonadal vein treatment provides effective relief through minimally invasive procedures.",
    link: "/services/gonadal-vein-disease-treatment-in-gurgaon",
    items: [
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
    ],
  },
  {
    id: "av-fistula",
    title: "AV Fistula",
    desc: "An AV fistula is a surgical connection between an artery and vein, created for effective dialysis access.",
    link: "/services/av-fistula-treatment-in-gurgaon",
    items: [
      "AV fistula creation (radiocephalic, brachiocephalic, brachiobasilic vein transposition – staged)",
      "Balloon-assisted maturation (BAM angioplasty)",
      "AV fistula salvage, revision, and thrombectomy",
      "Central venous stenosis management and stenting",
      "AV graft placement and revision",
      "Tunneled dialysis catheter (Permacath) insertion, exchange, and complex re-tunneling",
      "Complex central line placements, chemoports, and long-term vascular access",
      "Long-term dialysis access planning and failing access management",
    ],
  },
  {
    id: "dialysis-access",
    title: "Dialysis Access",
    desc: "Dialysis access is a vital procedure for patients with kidney failure.",
    link: "/services/dialysis-access-treatment-in-gurgaon",
    items: [
      "AV fistula creation",
      "BAM angioplasty",
      "Fistula revision",
      "Central venous stenting",
      "AV graft placement",
      "Permacath insertion",
      "Long-term access planning",
    ],
  },
  {
    id: "central-venous-care",
    title: "Central Venous Care",
    desc: "Central venous care focuses on managing central veins used for dialysis and long-term treatments.",
    link: "/services/central-venous-care-treatment-in-gurgaon",
    items: [
      "AV fistula creation",
      "BAM angioplasty",
      "Fistula revision",
      "Central venous stenting",
      "AV graft placement",
      "Permacath insertion",
      "Long-term access planning",
    ],
  },
  {
    id: "pad-art",
    title: "Peripheral Artery Disease (PAD)",
    desc: "Peripheral artery disease (PAD) occurs when arteries narrow.",
    link: "/services/peripheral-artery-disease-treatment-in-gurgaon",
    items: [
      "Peripheral arterial disease",
      "Critical limb ischemia",
      {
        title: "Endovascular procedures:",
        subItems: [
          "Tibial angioplasty",
          "Popliteal angioplasty",
          "SFA angioplasty",
          "Iliac stenting",
        ],
      },
    ],
  },
  {
    id: "limb-salvage",
    title: "Advanced Limb Salvage",
    desc: "Advanced limb salvage focuses on saving legs affected by severe infections.",
    link: "/services/limb-salvage-surgery-in-gurgaon",
    items: [
      "Critical limb ischemia",
      "Diabetic ulcers",
      "Revascularization",
      "Hybrid surgery",
    ],
  },
  {
    id: "diabetic-foot",
    title: "Diabetic Foot",
    desc: "Diabetic foot is a serious condition caused by poor circulation and nerve damage.",
    link: "/services/diabetic-foot-treatment-in-gurgaon",
    items: [
      "Foot management",
      "Wound debridement",
      "Toe amputation",
      "Revascularization",
    ],
  },
  {
    id: "wound-care",
    title: "Wound Care",
    desc: "Wound care focuses on treating slow-healing wounds.",
    link: "/services/diabetic-wound-care-in-gurgaon",
    items: [
      "Wound management",
      "Debridement",
      "Infection control",
      "Healing support",
    ],
  },
  {
    id: "amp-sur",
    title: "Amputation Surgery",
    desc: "Amputation surgery is performed when severe infection or poor blood flow occurs.",
    link: "/services/amputation-surgery-in-gurgaon",
    items: [
      "Toe amputation",
      "Forefoot amputation",
      "Post-op care",
      "Rehabilitation",
    ],
  },
  {
    id: "deep-vein",
    title: "Deep Vein Thrombosis",
    desc: "Deep vein thrombosis (DVT) occurs when a blood clot forms in deep veins.",
    link: "/services/deep-vein-thrombosis-treatment-in-gurgaon",
    items: ["DVT management", "Clot prevention", "Medication therapy"],
  },
  {
    id: "pul-emb",
    title: "Pulmonary Embolism",
    desc: "Pulmonary embolism is a serious condition caused by blood clots in lungs.",
    link: "/services/pulmonary-embolism-treatment-in-gurgaon",
    items: ["Emergency care", "Clot removal", "Monitoring"],
  },
  {
    id: "abd-aor",
    title: "Abdominal Aortic Aneurysm",
    desc: "An abdominal aortic aneurysm is a bulging of the main artery.",
    link: "/services/abdominal-aortic-aneurysm-treatment-in-gurgaon",
    items: ["Monitoring", "Endovascular repair", "Surgical repair"],
  },
  {
    id: "vas-tra",
    title: "Vascular Trauma",
    desc: "Vascular trauma refers to injury to blood vessels caused by accidents.",
    link: "/services/vascular-trauma-treatment-in-gurgaon",
    items: ["Emergency repair", "Bleeding control", "Circulation restoration"],
  },
];

export default function ServiceLayout({
  title,
  description,
  children,
}: ServiceLayoutProps) {
  const [openPopup, setOpenPopup] = useState(false);
  const pathname = usePathname();
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

          <div className="lg:col-span-8 bg-white p-5 sm:p-10 rounded-3xl shadow-lg">
            <PageTransition>{children}</PageTransition>
            <AboutServiceTable
              title="Explore Our Services"
              services={servicesData}
              currentPath={pathname}
            />
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
