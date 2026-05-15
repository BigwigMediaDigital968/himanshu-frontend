import ServiceLayout from "../components/ServiceLayout";
import PeripheralArteryContent from "./PeriferalContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/peripheral-artery-disease-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Peripheral Artery Disease Treatment in Gurgaon | Dr. Himanshu",
  description:
    "Get advanced PAD treatment in Gurgaon by Dr. Himanshu Verma at Fortis. Angioplasty, stenting & bypass to restore blood flow & prevent limb loss. Consult today.",
  keywords: [
    "Peripheral Artery Disease treatment in Gurgaon",
    "PAD treatment Gurgaon",
    "Peripheral arterial disease specialist Gurgaon",
    "vascular surgeon Gurgaon",
    "leg artery blockage treatment Gurgaon",
    "PAD angioplasty Gurgaon",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Peripheral Artery Disease Treatment in Gurgaon | PAD Specialist",
    description:
      "Expert diagnosis and treatment for Peripheral Artery Disease including angioplasty and vascular procedures.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Peripheral Artery Disease Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PAD Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced Peripheral Artery Disease treatment to restore blood flow and improve mobility.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const MedicalProcedureschema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      name: "Digital Subtraction Angiography (DSA)",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Used both as a diagnostic tool and as the imaging platform for performing endovascular interventions in the same session.",
      bodyLocation: "Peripheral arteries",
      followup: "Post-procedure monitoring of vessel patency",
    },
    {
      "@type": "MedicalProcedure",
      name: "Iliac Artery Angioplasty and Stenting",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Balloon expansion of narrowed iliac arteries supplying the pelvis and legs, followed by placement of a metal stent to maintain vessel patency.",
      bodyLocation: "Iliac arteries",
      preparation: "CT/MR Angiography or DSA for pre-procedure mapping",
      howPerformed:
        "Endovascular; balloon catheter with stent deployment under fluoroscopic guidance",
      followup: "Regular imaging surveillance to monitor for restenosis",
    },
    {
      "@type": "MedicalProcedure",
      name: "Femoral Artery Angioplasty",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Balloon catheter treatment of blockages in the common femoral artery, the main artery supplying the thigh and lower leg.",
      bodyLocation: "Common femoral artery",
      howPerformed:
        "Endovascular; balloon catheter inflation under fluoroscopic guidance",
      followup: "Doppler ultrasound surveillance",
    },
    {
      "@type": "MedicalProcedure",
      name: "Femoral Endarterectomy",
      description:
        "Surgical removal of plaque buildup from inside the femoral artery; typically used for localised disease at the groin level.",
      bodyLocation: "Common femoral artery",
      howPerformed:
        "Open surgical technique with arteriotomy and plaque excision",
      followup: "Post-operative wound care and vascular surveillance",
    },
    {
      "@type": "MedicalProcedure",
      name: "Superficial Femoral Artery (SFA) Angioplasty",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Balloon-based opening of blockages in the SFA, one of the most commonly affected arteries in PAD patients.",
      bodyLocation: "Superficial femoral artery",
      howPerformed:
        "Endovascular; balloon catheter under fluoroscopic guidance",
    },
    {
      "@type": "MedicalProcedure",
      name: "SFA Drug-Eluting Balloon Angioplasty",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Advanced SFA angioplasty using an anti-restenosis medication-coated balloon, which releases drug into the artery wall to reduce the risk of re-narrowing after treatment.",
      bodyLocation: "Superficial femoral artery",
      howPerformed:
        "Endovascular; drug-coated balloon catheter inflation under fluoroscopic guidance",
      followup: "Imaging surveillance to assess drug effect and patency",
    },
    {
      "@type": "MedicalProcedure",
      name: "SFA Stenting",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Placement of a self-expanding metal stent in the SFA to maintain patency after angioplasty, used when balloon treatment alone is insufficient.",
      bodyLocation: "Superficial femoral artery",
      howPerformed:
        "Endovascular; self-expanding stent deployment under IVUS and fluoroscopic guidance",
    },
    {
      "@type": "MedicalProcedure",
      name: "Below-Knee (BTK / TBL) Angioplasty",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Technically demanding endovascular treatment of blocked arteries in the calf and foot; critical for limb salvage in patients with diabetic foot disease or critical limb ischemia.",
      bodyLocation: "Infrapopliteal / tibial arteries",
      howPerformed:
        "Endovascular; balloon catheter under fluoroscopic guidance with road-mapping",
    },
    {
      "@type": "MedicalProcedure",
      name: "Femoro-Popliteal Bypass",
      description:
        "Surgical bypass using the patient's own vein or a synthetic graft to reroute blood around a blocked segment of the femoral or popliteal artery.",
      bodyLocation: "Femoral artery to popliteal artery",
      howPerformed:
        "Open vascular surgery; autologous saphenous vein or PTFE graft bypass",
      followup: "Graft surveillance with Doppler ultrasound",
    },
    {
      "@type": "MedicalProcedure",
      name: "Femoro-Tibial Bypass",
      description:
        "Bypass surgery extending from the femoral artery to the tibial vessels in the lower leg; reserved for extensive multi-level disease where endovascular options are unsuitable.",
      bodyLocation: "Femoral artery to tibial vessels",
      howPerformed: "Open vascular surgery; autologous vein or synthetic graft",
      followup: "Long-term graft patency monitoring",
    },
    {
      "@type": "MedicalProcedure",
      name: "Tibial and Plantar Vessel Angioplasty",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Restoration of blood flow to the smallest vessels supplying the foot and toes; essential for wound healing in patients with diabetic foot and critical ischemia.",
      bodyLocation: "Tibial and plantar arteries",
      howPerformed:
        "Endovascular; micro-catheter balloon technique under fluoroscopic guidance",
    },
    {
      "@type": "MedicalProcedure",
      name: "Intravascular Lithotripsy (Shockwave Therapy)",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Uses sonic pressure waves to break up heavily calcified plaque within artery walls, making them suitable for balloon treatment when conventional angioplasty would fail.",
      bodyLocation: "Calcified peripheral arteries",
      howPerformed:
        "Endovascular; shockwave catheter delivery under fluoroscopic guidance",
    },
    {
      "@type": "MedicalProcedure",
      name: "IVUS-Guided Endovascular Procedure",
      procedureType: "http://schema.org/PercutaneousProcedure",
      description:
        "Use of a miniature intravascular ultrasound probe inside the artery to guide stent placement with precision, ensuring optimal sizing and positioning to reduce complications and restenosis risk.",
      bodyLocation: "Peripheral arteries",
      howPerformed:
        "Endovascular; IVUS catheter used adjunctively during angioplasty or stenting",
    },
    {
      "@type": "MedicalProcedure",
      name: "Embolectomy for Acute Limb Ischemia",
      description:
        "Emergency surgical removal of a blood clot that has suddenly blocked an artery, causing acute loss of blood supply to the limb. A limb- and life-saving procedure requiring immediate intervention.",
      bodyLocation: "Peripheral artery (site of acute occlusion)",
      howPerformed:
        "Open surgical technique; Fogarty balloon catheter embolectomy",
      followup: "Intensive post-operative monitoring; anticoagulation therapy",
    },
  ],
};

export default function PeripheralArteryPage() {
  return (
    <>
      {/* ✅ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* ================= BUSINESS ================= */
              {
                "@type": "MedicalBusiness",
                name: "Dr. Himanshu Verma - Vascular Surgeon",
                image: OG_IMAGE,
                url: PAGE_URL,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
                  addressCountry: "IN",
                },
                areaServed: "Gurgaon",
              },

              /* ================= DOCTOR ================= */
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
              },

              /* ================= CONDITION ================= */
              {
                "@type": "MedicalCondition",
                name: "Peripheral Artery Disease",
                alternateName: "PAD",
                description:
                  "A circulatory condition where narrowed arteries reduce blood flow to the limbs, causing pain, mobility issues, and potential complications.",
                signOrSymptom: [
                  { "@type": "MedicalSymptom", name: "Leg pain while walking" },
                  { "@type": "MedicalSymptom", name: "Numbness in legs" },
                  { "@type": "MedicalSymptom", name: "Cold feet or legs" },
                  { "@type": "MedicalSymptom", name: "Slow healing wounds" },
                  { "@type": "MedicalSymptom", name: "Weak pulse in legs" },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Peripheral Artery Disease Treatment",
                procedureType: "Vascular Intervention",
                howPerformed:
                  "Treatment includes angioplasty, stenting, bypass surgery, and minimally invasive vascular procedures to restore blood flow.",
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Peripheral Artery Disease Treatment in Gurgaon",
                description:
                  "Advanced diagnosis and treatment for Peripheral Artery Disease in Gurgaon including angioplasty and vascular procedures.",
                inLanguage: "en-IN",
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                },
              },

              /* ================= BREADCRUMB ================= */
              {
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
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Peripheral Artery Disease Treatment in Gurgaon",
                    item: PAGE_URL,
                  },
                ],
              },

              /* ================= FAQ ================= */
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What are the symptoms of blocked arteries in the legs?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pain while walking, numbness, cold feet, slow-healing wounds, and shiny skin are common symptoms.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How to test for Peripheral Artery Disease?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tests include Ankle-Brachial Index (ABI), Doppler ultrasound, and angiography.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the first symptom of PAD?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Intermittent leg pain while walking, known as claudication.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can PAD lead to heart problems?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Peripheral Artery Disease increases the risk of heart attack and stroke.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is PAD reversible?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "While not fully reversible, lifestyle changes and treatment can significantly improve symptoms.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "When should I seek treatment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Immediate consultation is recommended if you experience leg pain, wounds, or cold feet.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the best treatment for blocked leg arteries?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Treatment depends on severity and may include angioplasty, medication, or bypass surgery.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Himanshu Verma",
            medicalSpecialty: "Vascular Surgery",
            description:
              "Specialist in Peripheral Artery Disease (PAD) diagnosis and minimally invasive endovascular treatments.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "10",
              reviewCount: "10",
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Rakesh Chawla" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "I had been ignoring cramps in my calves for almost a year, assuming it was just muscle fatigue. When the pain started, even while walking short distances, I consulted Dr. Himanshu Verma. He immediately suspected Peripheral Artery Disease and got a Doppler test done. The blockage was identified early, and he treated it with a minimally invasive angioplasty. Within a week, I could walk comfortably again. Very precise diagnosis.",
                name: "Very precise diagnosis",
                keywords: [
                  "PAD",
                  "Doppler test",
                  "angioplasty",
                  "calf cramps",
                  "minimally invasive",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Preeti Bansal" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "My mother (age 68) had discoloration in her toes and constant leg pain at night. We were really worried. Dr. Himanshu calmly explained that it was advanced PAD and needed urgent attention. He performed a procedure to restore blood flow, and the improvement was visible within days. His confidence really reassured us.",
                name: "His confidence really reassured us",
                keywords: [
                  "PAD",
                  "toe discoloration",
                  "leg pain",
                  "blood flow restoration",
                  "elderly patient",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Kunal Aggarwal" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "I am diabetic, so when I started having numbness and slow-healing wounds on my foot, it became serious. Dr. Himanshu Verma handled my case very carefully, considering my sugar levels. He planned the treatment step-by-step and avoided major surgery. My wound has healed now, and circulation is much better.",
                name: "Step-by-step care for a diabetic patient",
                keywords: [
                  "PAD",
                  "diabetes",
                  "foot wound",
                  "numbness",
                  "circulation",
                  "non-surgical treatment",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Ritu Chhabra" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "What I liked most about Dr. Himanshu was that he didn't rush into procedures. He first tried medication and lifestyle correction for my PAD symptoms. When that didn't fully help, he suggested the next step. Very ethical doctor, not money-minded.",
                name: "Ethical and patient-first approach",
                keywords: [
                  "PAD",
                  "conservative treatment",
                  "lifestyle correction",
                  "ethical doctor",
                  "medication-first",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Mohit Sachdeva" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "I was unable to walk more than 100 meters without severe pain in my legs. After treatment from Dr. Himanshu Verma, I can now walk almost 2–3 km daily. He explained everything clearly, even showing the blockage in reports. That transparency really built trust.",
                name: "Transparent treatment that transformed my walking ability",
                keywords: [
                  "PAD",
                  "leg pain",
                  "walking improvement",
                  "blockage",
                  "transparent communication",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Sushma Kohli" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "My father had a high risk of amputation due to poor blood circulation caused by PAD. Dr. Himanshu Verma treated him with an endovascular procedure and literally saved his leg. We are extremely grateful for his expertise.",
                name: "Saved my father's leg",
                keywords: [
                  "PAD",
                  "amputation risk",
                  "endovascular procedure",
                  "limb salvage",
                  "blood circulation",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Varun Talwar" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "I visited Dr. Himanshu after experiencing a cold sensation and weakness in my legs. He diagnosed early-stage Peripheral Artery Disease and treated it before it got worse. His preventive approach really made a difference.",
                name: "Early diagnosis made all the difference",
                keywords: [
                  "PAD",
                  "early stage",
                  "cold sensation",
                  "leg weakness",
                  "preventive treatment",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Neelam Ahuja" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "Very humble and approachable doctor. I never felt rushed during the consultation. He answered all my questions about PAD and made sure I understood the treatment options. Recovery was smooth and well-monitored.",
                name: "Humble, thorough, and well-monitored recovery",
                keywords: [
                  "PAD",
                  "patient communication",
                  "approachable doctor",
                  "recovery monitoring",
                  "consultation quality",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Tarun Oberoi" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "I had already consulted two doctors before meeting Dr. Himanshu Verma, but wasn't satisfied. He gave a completely different perspective and suggested a less invasive solution. The results were excellent, and I avoided a major surgery.",
                name: "Different perspective that avoided major surgery",
                keywords: [
                  "PAD",
                  "second opinion",
                  "minimally invasive",
                  "surgical avoidance",
                  "alternative treatment",
                ],
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Shweta Suri" },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                reviewBody:
                  "My husband's case was complicated because of his smoking history and severe artery blockage. Dr. Himanshu handled it very professionally and planned the treatment carefully. The improvement in his walking ability has been life-changing.",
                name: "Life-changing improvement in a complex case",
                keywords: [
                  "PAD",
                  "artery blockage",
                  "smoking history",
                  "complex case",
                  "walking improvement",
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MedicalProcedureschema),
        }}
      />

      <ServiceLayout
        title="Peripheral Artery Disease Treatment in Gurgaon"
        description="Medically reviewed by Dr. Himanshu Verma, MCh Vascular Surgery | Director, Fortis FMRI Gurgaon | Last reviewed: April 2025"
      >
        <PeripheralArteryContent />
      </ServiceLayout>
    </>
  );
}
