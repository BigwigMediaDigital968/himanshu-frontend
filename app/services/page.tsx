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
import ServiceFaqs from "./ServiceFaqs";

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
        content="Expert vascular & endovascular surgery in Gurgaon - Varicose Veins, AV Fistula, Diabetic Foot, PAD & more. Consult Dr. Himanshu Verma at Fortis Hospital, Sector 44."
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Himanshu Verma - Vascular & Endovascular Surgeon",
              url: "https://www.drhimanshuverma.com/services",
              telephone: "+918826833598",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Fortis Memorial Research Centre, Sector 44",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122003",
                addressCountry: "IN",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Vascular Surgery Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Varicose Veins Treatment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "AV Fistula",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.drhimanshuverma.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://www.drhimanshuverma.com/services",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is vascular surgery and when is it needed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vascular surgery is a medical specialty that treats diseases of the blood vessels,arteries, veins, and lymphatic system, outside of the heart and brain. It is needed when conditions like blocked arteries, varicose veins, aneurysms, blood clots, or diabetic foot complications affect blood flow and cannot be managed with medication alone. Both open surgical and minimally invasive endovascular techniques are used depending on the condition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between vascular surgery and endovascular surgery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vascular surgery involves traditional open surgical procedures to repair orVascular surgery involves traditional open surgical procedures to repair or bypass damaged blood vessels. Endovascular surgery is a minimally invasive approach where the surgeon works through small incisions using catheters, stents, or grafts guided by imaging. Endovascular procedures typically result in less pain, shorter hospital stays, and faster recovery compared to open surgery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is Dr. Himanshu Verma and what is his specialisation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dr. Himanshu Verma is a Vascular and Endovascular Surgeon based in Gurugram, Haryana. He practices at Fortis Memorial Research Centre, Sector 44, Gurugram, and specialises in advanced, evidence-based vascular care including minimally invasive treatments for varicose veins, AV fistula, peripheral artery disease, diabetic foot, deep vein thrombosis, aortic aneurysm, and more. He is known for combining surgical expertise with a patient-first approach.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What services does Dr. Himanshu Verma offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dr. Himanshu Verma offers a comprehensive range of vascular and endovascular services including: Varicose Veins Treatment, Chronic Venous Insufficiency, AV Fistula Creation and Care, Dialysis Access, Peripheral Artery Disease (PAD) Treatment, Diabetic Foot Management, Wound Care, Deep Vein Thrombosis (DVT) Treatment, Pulmonary Embolism Management, Abdominal Aortic Aneurysm Repair, Limb Salvage Surgery, Amputation Surgery, Lymphatic Care, Pelvic Venous Disorders, Onco Vascular Surgery, and Arteriovenous Malformation Treatment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is an AV Fistula and why is it created?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "An AV (Arteriovenous) Fistula is a surgically created connection between an artery and a vein, most commonly in the forearm or upper arm. It is primarily created for patients with chronic kidney disease who require regular haemodialysis. The fistula allows large volumes of blood to be drawn out, cleaned by the dialysis machine, and returned efficiently. It is considered the gold standard for dialysis access due to its durability, lower infection risk, and better long-term outcomes compared to grafts or catheters.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the treatment options for varicose veins available at Dr. Himanshu Verma's clinic?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dr. Himanshu Verma offers advanced, minimally invasive treatments for varicose veins including Laser Ablation (EVLA), Radiofrequency Ablation (RFA), Sclerotherapy, and VenaSeal. These procedures are performed as day-care treatments with no general anaesthesia required in most cases, minimal downtime, and significantly less pain compared to traditional vein stripping surgery. The choice of treatment depends on the severity and pattern of the varicose veins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is Dr. Himanshu Verma's clinic located and how can I book an appointment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dr. Himanshu Verma practices at Fortis Memorial Research Centre, Opposite HUDA City Centre, Sector 44, Gurugram, Haryana 122003. To book an appointment, you can call or WhatsApp at +91 88268 33598, or email at varenyamvascular@gmail.com. You can also request a callback directly through the website at drhimanshuverma.com.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Dr. Himanshu Verma available for consultations in Delhi or other cities?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, in addition to his primary practice in Gurugram, Dr. Himanshu Verma is available for vascular surgery consultations in Delhi and Varanasi. Patients from across NCR and other regions can book appointments through the website or contact the clinic directly at +91 88268 33598 to confirm availability and consultation schedules at specific locations.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Himanshu Verma",
              url: "https://www.drhimanshuverma.com",
              medicalSpecialty: "Vascular Surgery",
              worksFor: {
                "@type": "Hospital",
                name: "Fortis Memorial Research Centre",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Sector 44, Opposite HUDA City Centre",
                  addressLocality: "Gurugram",
                  addressRegion: "Haryana",
                  postalCode: "122003",
                  addressCountry: "IN",
                },
              },
            },
          ]),
        }}
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
            <aside className="lg:col-span-1 md:sticky top-28 h-fit">
              <div className="bg-white rounded-2xl p-6 border border-[var(--med-border)] shadow-sm lg:h-[50vh] lg:overflow-auto">
                {/* ✅ SHOW ALWAYS */}
                <h2 className="font-semibold underline text-[var(--med-primary)] text-xl md:text-2xl mb-4">
                  Our Services
                </h2>
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
                      label: "Diabetic Wound Care",
                      id: "wound-care",
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
                      label: "Minor Amputations",
                      id: "min-amp",
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
                desc="Varicose veins are enlarged, twisted veins that develop when venous valves weaken,
causing blood to pool in the legs. Left untreated, they can progress to chronic pain, skin
discolouration, and venous ulcers. Dr. Himanshu Verma offers evidence-based, minimally
invasive treatments including Laser Ablation (EVLA), Radiofrequency Ablation (RFA),
Sclerotherapy, and VenaSeal, all performed as day-care procedures with minimal downtime
and no general anaesthesia in most cases.
"
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
                desc="Chronic venous insufficiency (CVI) occurs when leg veins fail to return blood efficiently to the
heart, leading to persistent swelling, heaviness, skin changes, and non-healing ulcers. It is
one of the most underdiagnosed vascular conditions in India. Dr. Himanshu Verma uses a
combination of compression therapy, endovenous procedures, and lifestyle guidance to
manage CVI effectively, prevent disease progression, and restore long-term circulatory
health.
"
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
                desc="Lymphoedema and lymphatic disorders cause progressive swelling, skin thickening, and
recurrent infections due to impaired lymph drainage. Without timely management, the
condition can significantly reduce quality of life and lead to permanent tissue changes. Dr.
Himanshu Verma provides personalised lymphatic care including complete decongestive
therapy (CDT), compression management, and surgical options where appropriate, tailored
to each patient's stage and lifestyle needs.
"
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
                desc="Pelvic venous disorders, including pelvic congestion syndrome, arise from incompetent or
dilated pelvic veins that cause chronic pelvic pain, heaviness, and discomfort, particularly in
women of reproductive age. These conditions are frequently misdiagnosed as
gynaecological issues. Dr. Himanshu Verma specialises in minimally invasive ovarian and
pelvic vein embolisation procedures that effectively reduce pain and improve daily function
without the need for open surgery.
"
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
                desc="Gonadal vein incompetence leads to reflux of blood in the ovarian or testicular veins,
contributing to pelvic pain, varicocele, and venous congestion. This condition is often
overlooked despite being a significant cause of chronic discomfort. Dr. Himanshu Verma
offers targeted endovascular embolisation for gonadal vein disease, a safe, image-guided,
day-care procedure that eliminates reflux and provides lasting symptom relief with minimal
recovery time."
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
                desc="An arteriovenous (AV) fistula is a surgically created connection between an artery and a
vein, primarily used as a dialysis access point for patients with chronic kidney disease. It is
considered the gold standard for haemodialysis access due to its durability, lower infection
risk, and superior long-term outcomes. Dr. Himanshu Verma performs AV fistula creation and
maintenance with precision, ensuring optimal blood flow and prolonged access function for
dialysis-dependent patients."
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
                desc="Reliable dialysis access is critical for patients with end-stage renal disease undergoing
regular haemodialysis. Access options include AV fistula, synthetic AV graft, and tunnelled
central venous catheters, each suited to different clinical situations. Dr. Himanshu Verma
evaluates each patient's vascular anatomy and medical condition to recommend and create
the most appropriate, durable dialysis access, minimising complications and ensuring
consistent treatment delivery over the long term."
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
                desc="Central venous care involves the management of large veins, including the jugular,
subclavian, and femoral veins, used for dialysis, chemotherapy, long-term medication, and
nutritional support. Conditions such as central vein stenosis or thrombosis can compromise
access and treatment efficacy. Dr. Himanshu Verma offers expert diagnosis and
endovascular treatment of central venous obstruction, including balloon angioplasty and
stenting, to restore safe and effective venous access."
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
                desc="Peripheral artery disease (PAD) occurs when atherosclerosis narrows the arteries supplying
blood to the legs, causing pain during walking (claudication), non-healing wounds, and in
severe cases, critical limb ischaemia. PAD significantly increases the risk of heart attack and
stroke if left unmanaged. Dr. Himanshu Verma offers both endovascular interventions,
angioplasty and stenting, and open surgical bypass to restore circulation, relieve symptoms,
and protect long-term limb and cardiovascular health."
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
                desc="Critical limb-threatening ischaemia (CLTI) presents a high risk of amputation without timely
intervention. Advanced limb salvage combines vascular reconstruction, wound management,
and infection control to restore blood flow and preserve the affected limb. Dr. Himanshu
Verma employs a multidisciplinary approach, integrating endovascular procedures, bypass
surgery, and specialised wound care, to achieve the best possible outcomes for patients
facing limb loss due to severe vascular compromise.
"
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
                desc="Diabetic foot complications arise from the combination of peripheral neuropathy and poor
arterial circulation, leading to slow-healing wounds, deep infections, and ulcers that can
progress rapidly. Early vascular assessment and intervention are critical to preventing
amputation. Dr. Himanshu Verma provides comprehensive diabetic foot care, including
vascular restoration through angioplasty or bypass, wound debridement, infection
management, and long-term monitoring to protect limb integrity and improve patient
outcomes."
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
                title="Diabetic Wound Care"
                desc="Chronic wounds in diabetic patients result from impaired blood supply, nerve damage, and
reduced immunity, making healing slow, infection likely, and recurrence common. Effective
wound care requires addressing the underlying vascular insufficiency alongside local wound
treatment. Dr. Himanshu Verma's approach integrates revascularisation, advanced wound
dressings, offloading strategies, and infection control to promote healing, prevent
deterioration, and reduce the risk of limb-threatening complications in diabetic patients."
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
                desc="When severe infection, gangrene, or critical ischaemia makes limb preservation no longer
viable, amputation surgery becomes a life-saving intervention. The goal is to remove the
affected tissue at the most appropriate level while preserving maximum function for
rehabilitation. Dr. Himanshu Verma performs amputation surgery with a focus on patient
safety, optimal wound closure, and post-operative recovery planning, ensuring patients are
supported through every step toward regaining mobility and quality of life."
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
                title="Deep Vein Thrombosis (DVT)"
                desc="Deep vein thrombosis (DVT) occurs when a blood clot forms in the deep veins, most
commonly in the legs, causing pain, swelling, and redness. If untreated, the clot can dislodge
and travel to the lungs, causing a life-threatening pulmonary embolism. Dr. Himanshu Verma
provides prompt diagnosis through duplex ultrasound and manages DVT with
anticoagulation therapy, catheter-directed thrombolysis, or mechanical thrombectomy
depending on the severity and clinical presentation.
"
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
                desc="Pulmonary embolism (PE) is a medical emergency in which a blood clot, typically originating
from the leg veins, blocks one or more pulmonary arteries, causing sudden breathlessness,
chest pain, and reduced oxygen levels. Immediate diagnosis and treatment are essential to
prevent cardiac arrest and death. Dr. Himanshu Verma is experienced in managing high-risk
PE through catheter-directed thrombolysis and percutaneous thrombectomy, offering rapid,
targeted intervention to restore pulmonary blood flow."
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
                desc="An abdominal aortic aneurysm (AAA) is an abnormal bulging of the aorta, the body's largest
artery, in the abdomen. It is often asymptomatic until rupture, which carries an extremely
high mortality rate. Regular surveillance is essential for at-risk individuals, including older
men and smokers. Dr. Himanshu Verma offers both endovascular aneurysm repair (EVAR)
and open surgical repair, selecting the safest approach based on aneurysm size, anatomy,
and the patient's overall health status.
"
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
                desc="Vascular trauma involves injury to arteries or veins caused by road accidents, penetrating
wounds, fractures, or iatrogenic injury. It is a time-critical emergency, uncontrolled vascular
injury can cause severe blood loss, limb ischaemia, and death within minutes. Dr. Himanshu
Verma is trained in emergency vascular repair, including open vessel reconstruction and
endovascular stent-graft placement, to rapidly restore circulation, control haemorrhage, and
preserve both limb and life following vascular injury."
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
                desc="Cancer and its treatments can directly involve or compromise major blood vessels, through
tumour invasion, surgical resection, or treatment-related thrombosis. Onco vascular surgery
addresses these complex vascular challenges in cancer patients, often in collaboration with
oncology and surgical teams. Dr. Himanshu Verma provides expert vascular support for
cancer surgeries including vessel reconstruction, tumour thrombus removal, and
management of treatment-related vascular complications to ensure safe oncological
outcomes."
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
                title="Arteriovenous Malformation (AVM)"
                desc="Arteriovenous malformations (AVMs) are abnormal tangles of blood vessels that create
direct connections between arteries and veins, bypassing the normal capillary system. They
can cause pain, swelling, skin discolouration, bleeding, and in some locations,
life-threatening complications. Dr. Himanshu Verma evaluates each AVM individually, using
imaging-guided embolisation, sclerotherapy, surgical excision, or a combination of
approaches, to reduce symptoms and prevent progression with the least invasive method
possible."
                link="/services/arteriovenous-malformation-treatment-in-gurgaon"
                items={[
                  "Advanced diabetic foot management",
                  "Surgical wound debridement",
                  "Toe and forefoot amputations",
                  "Integrated wound care and revascularization strategies",
                ]}
              />

              {/* Minor Amputaion  */}
              <ServiceCard
                id="min-amp"
                title="Minor Amputations"
                desc="Minor amputations involve the surgical removal of a toe, part of the foot, or a small section of
the lower limb affected by gangrene, deep infection, or irreversible ischaemia, typically in
diabetic or PAD patients. The primary goal is to eliminate the source of infection while
preserving as much functional limb as possible. Dr. Himanshu Verma performs minor
amputations with careful pre-operative vascular assessment to optimise wound healing and
support the patient's return to mobility."
                link="#"
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

        <ServiceFaqs />

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
            Book a Consultation &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
