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
      <title>Vascular Surgery Treatments in Gurgaon | Dr. Himanshu Verma</title>

      <meta
        name="title"
        content="Vascular Surgery Treatments in Gurgaon | Dr. Himanshu Verma"
      />

      <meta
        name="description"
        content="Looking for the best vascular surgeon in Gurgaon? Consult Dr. Himanshu Verma at Fortis for advanced treatment of varicose veins, PAD, DVT & more. Schedule now."
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
                    // {
                    //   label: "Advanced Venous Interventions",
                    //   id: "dvt-advanced-venous",
                    // },
                    // {
                    //   label: "Pulmonary Embolism (PE) Management",
                    //   id: "pulmonary-embolism",
                    // },
                    // {
                    //   label: "Aortic, Visceral & Renal Artery Interventions",
                    //   id: "aortic-visceral-renal",
                    // },
                    // {
                    //   label: "Onco-Vascular Surgery & Rare Vascular Disorders",
                    //   id: "onco-vascular",
                    // },
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
                    // {
                    //   label: "Pediatric & Iatrogenic Vascular Injuries",
                    //   id: "vascular-trauma",
                    // },
                    // {
                    //   label: "AV Malformations & Complex Vascular Anomalies",
                    //   id: "av-malformations",
                    // },
                    // {
                    //   label: "ECMO Cannulation & Large-Bore Access Care",
                    //   id: "ecmo-access",
                    // },
                    // {
                    //   label: "Special Interests",
                    //   id: "special-interests",
                    // },
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
                desc="Varicose veins are swollen, twisted veins caused by poor blood circulation, leading to pain, heaviness, and visible veins. Advanced varicose veins treatment, like laser and RFA, offers safe, effective relief with faster recovery."
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
                desc="Chronic venous insufficiency occurs when leg veins cannot return blood properly, causing swelling, pain, skin changes, and ulcers. Advanced chronic venous insufficiency treatment improves circulation and prevents complications for long-term relief."
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
                desc="Lymphatic disorders can cause swelling, heaviness, and discomfort due to poor lymph flow. Expert lymphatic care and lymphedema treatment help reduce swelling, improve circulation, and enhance quality of life with personalized management."
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
                desc="Pelvic venous disorders occur due to enlarged pelvic veins, leading to chronic pelvic pain, heaviness, and discomfort. Advanced pelvic venous disorder treatment helps relieve symptoms and improve daily life with minimally invasive procedures."
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
                desc="Gonadal vein disease occurs due to enlarged or faulty veins, causing pelvic pain, heaviness, and discomfort, especially in women. Advanced gonadal vein treatment provides effective relief through minimally invasive procedures. "
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
                desc="An AV fistula is a surgical connection between an artery and vein, created for effective dialysis access. Proper AV fistula care ensures better blood flow, fewer complications, and long-term function for patients undergoing kidney dialysis. "
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
                desc="Dialysis access is a vital procedure for patients with kidney failure, allowing efficient blood flow during treatment. Options like AV fistula, graft, or catheter ensure safe and reliable dialysis access for long-term care."
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
                desc="Central venous care focuses on managing central veins used for dialysis and long-term treatments. Conditions like vein blockage or narrowing can affect blood flow, and timely central venous treatment helps maintain safe, effective access. "
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
                desc="Peripheral artery disease (PAD) occurs when arteries narrow, reducing blood flow to the legs, causing pain, cramps, or slow-healing wounds. Early peripheral artery disease treatment improves circulation and prevents serious complications."
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
                desc="Advanced limb salvage focuses on saving legs affected by severe infections, poor circulation, or non-healing wounds. Specialized advanced limb salvage treatment restores blood flow, promotes healing, and helps avoid amputation with timely care"
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
                desc="Diabetic foot is a serious condition caused by poor circulation and nerve damage, leading to wounds, infections, or ulcers. Early diabetic foot treatment helps prevent complications and supports faster healing with proper care. "
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
                desc="Wound care focuses on treating slow-healing or infected wounds caused by poor circulation, diabetes, or injury. Advanced wound care treatment promotes faster healing, prevents infection, and improves overall skin health with proper medical care. "
                link="/services/diabetic-wound-care-in-gurgaon"
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
                desc="Amputation surgery is performed when severe infection or poor blood flow makes limb-saving difficult. Expert amputation care focuses on safety, faster recovery, and rehabilitation to help patients regain mobility and quality of life. "
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
                desc="Deep vein thrombosis (DVT) occurs when a blood clot forms in deep veins, usually in the legs, causing pain and swelling. Early deep vein thrombosis treatment prevents serious complications like pulmonary embolism. "
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
                desc="Pulmonary embolism is a serious condition where a blood clot blocks the arteries in the lungs, causing sudden breathlessness and chest pain. Immediate pulmonary embolism treatment is crucial to prevent life-threatening complications."
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
                desc="An abdominal aortic aneurysm is a bulging of the main artery in the abdomen that can rupture if untreated. Early abdominal aortic aneurysm treatment helps prevent serious complications with timely monitoring or minimally invasive repair. "
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
                desc="Vascular trauma refers to injury to blood vessels caused by accidents, cuts, or fractures, leading to bleeding or reduced blood flow. Timely vascular trauma treatment is crucial to restoring circulation and preventing complications."
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
                desc="Onco vascular surgery focuses on managing blood vessels affected by cancer or tumor growth. Advanced onco vascular surgery helps safely remove tumors, restore blood flow, and support better treatment outcomes."
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
                desc="Arteriovenous malformation (AVM) is an abnormal connection between arteries and veins, disrupting normal blood flow and causing pain, swelling, or bleeding. Advanced arteriovenous malformation treatment helps manage symptoms and prevent complications."
                link="/services/arteriovenous-malformation-treatment-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
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
