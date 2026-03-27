"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function ArteriovenousContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What causes arteriovenous malformation?",
      a: "Most cases of AVM are present at birth due to abnormal vessel development. Some may occur later after injury or through injection.",
    },
    {
      q: "How serious is an arteriovenous malformation?",
      a: "The seriousness of an Arteriovenous Malformation depends on its size and location. Some remain harmless, while others need treatment to prevent bleeding.",
    },
    {
      q: "What are the first signs of AVM?",
      a: "Early Arteriovenous Malformation Symptoms may include headaches, seizures, swelling, or visible veins.",
    },
    {
      q: "Can an arteriovenous malformation be cured?",
      a: "Many Arteriovenous Malformation cases can be effectively treated or controlled with the right approach.",
    },
    {
      q: "Should every arteriovenous malformation be treated?",
      a: "Not every AVM needs immediate treatment. A specialist evaluation helps decide the safest plan.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <div className="bg-[var(--med-primary)] text-white p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-3">
          Arteriovenous Malformation Treatment in Gurgaon
        </h1>
        <p className="text-white/80">
          Advanced AVM diagnosis and personalized care to prevent complications.
        </p>
      </div>

      {/* INTRO */}
      <div className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-bold">
          What is an arteriovenous malformation (AVM)?
        </h2>
        <p>
          An <b>Arteriovenous Malformation</b> is an abnormal connection between
          arteries and veins where blood flows directly without passing through
          capillaries. In a healthy body, capillaries slow blood flow and help
          tissues receive oxygen. In an <b>Arteriovenous Malformation</b>, this
          balance is disturbed, leading to high pressure within the vessels.
          Over time, it can weaken blood vessels and raise the risk of bleeding.
          Many patients live with an Arteriovenous Malformation for years
          without knowing it, while others develop Arteriovenous Malformation
          Symptoms early in life. Some cases of AVM are present at birth, some
          appear through injection or trauma, and some can develop anywhere in
          the body. <br />
          <br /> If you are experiencing unexplained pain, swelling, or
          neurological symptoms, consulting a specialist early can help identify
          an AVM and guide you toward the right Arteriovenous Malformation
          Treatment before complications arise. A timely evaluation often makes
          treatment safer and more effective, especially when considering
          Arteriovenous Malformation Treatment in Gurgaon.
        </p>
      </div>

      {/* TYPES */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          Types of arteriovenous malformation (AVMs)
        </h2>
        <p>
          There are different forms of arteriovenous malformation, depending on
          where the abnormal vessels are located.{" "}
        </p>
        <h3 className="font-bold text-xl">Brain arteriovenous malformations</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            A brain Arteriovenous Malformation affects blood flow inside the
            brain
          </li>
          <li>
            It may cause headaches, seizures, or bleeding, which are common
            Arteriovenous Malformation Symptoms
          </li>
          <li>
            Early detection of a brain AVM helps in timely Arteriovenous
            Malformation Treatment and reduces the risk of stroke{" "}
          </li>
        </ul>

        <h3 className="font-bold text-xl">
          Peripheral arteriovenous malformations
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            A peripheral Arteriovenous Malformation can occur in the limbs,
            lungs, or organs
          </li>
          <li>
            Arteriovenous Malformation Symptoms may include swelling, skin
            warmth, pain, or visible veins
          </li>
          <li>
            A peripheral AVM can affect daily movement and may require
            Arteriovenous Malformation Treatment
          </li>
        </ul>
        <p>
          If you notice unusual swelling or persistent discomfort, a focused
          check can rule out an Arteriovenous Malformation and provide
          clarity.{" "}
        </p>
      </div>

      {/* SYMPTOMS */}
      <div>
        <h2 className="text-2xl font-bold mb-3">
          What are the Arteriovenous Malformation Symptoms?
        </h2>
        <p>
          Arteriovenous Malformation Symptoms vary from person to person. Common
          signs include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 my-3">
          <li>Headaches or seizures linked to a brain AVM</li>
          <li>
            Swelling or pain due to a peripheral Arteriovenous Malformation
          </li>
          <li>Skin discoloration or warmth over the affected area</li>
          <li>Fatigue caused by altered blood flow from an AVM</li>
        </ul>
        <p>
          Some people may have no symptoms until an{" "}
          <b>Arteriovenous Malformation</b>
          bleeds. Listening to early body signals is important, particularly if
          you are planning for Arteriovenous Malformation Treatment in
          Gurgaon.{" "}
        </p>
      </div>

      {/* who get */}
      <div>
        <h2 className="text-2xl font-bold mb-3">
          Who is more likely to get arteriovenous malformations?
        </h2>
        <p>
          An <b>Arteriovenous Malformation</b> often develops by birth, meaning
          it forms during early growth. People with a family history of vascular
          conditions may have a higher chance of an{" "}
          <b>Arteriovenous Malformation</b>. Rarely, an <b>AVM</b> can appear
          later due to injury or through injection-related vascular damage.
          Since an <b>Arteriovenous Malformation</b> can affect anyone,
          awareness plays a key role in early care.
        </p>
      </div>

      {/* DIAGNOSIS */}
      <div>
        <h2 className="text-2xl font-bold mb-3">
          How are arteriovenous malformations diagnosed and treated?
        </h2>
        <p>
          Diagnosis of an Arteriovenous Malformation usually involves imaging
          tests, followed by appropriate Arteriovenous Malformation Treatment.
          such as ultrasound, CT scan, or MRI. These tests help locate the
          Arteriovenous Malformation and assess blood flow before starting
          Arteriovenous Malformation Treatment in Gurgaon.
          <br />
          <br />
          Arteriovenous Malformation Treatment in Gurgaon depends on the size
          and location of the Arteriovenous Malformation and may include:-
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 my-3">
          <li>
            Careful monitoring for stable <b>Arteriovenous Malformation</b>{" "}
            cases
          </li>
          <li>Image-guided procedures to reduce abnormal blood flow</li>
          <li>
            Surgical options when an <b>Arteriovenous Malformation</b> poses a
            high risk{" "}
          </li>
        </ul>
        <p>
          A personalized plan ensures that each Arteriovenous Malformation is
          managed safely with the right approach to Arteriovenous Malformation
          Treatment in Gurgaon. If you have concerns, seeking guidance early can
          help you understand the best next step for Arteriovenous Malformation
          Treatment in Gurgaon.{" "}
        </p>
      </div>

      {/* TREATMENT */}
      <div>
        <h2 className="text-2xl font-bold mb-3">
          Arteriovenous Malformation Treatment in Gurgaon
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Monitoring</li>
          <li>Image-guided procedures</li>
          <li>Surgery</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Why early care matters</h2>
        <p>
          Ignoring an Arteriovenous Malformation can lead to bleeding, nerve
          damage, or organ strain. Early care helps prevent complications and
          supports a better quality of life, especially when seeking expert
          Arteriovenous Malformation Treatment in Gurgaon. Understanding your
          condition empowers you to make informed decisions about your
          Arteriovenous Malformation.{" "}
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[var(--med-light)] p-6 rounded-2xl border-2 text-center">
        <p className="mb-4 text-gray-700">
          Early consultation helps prevent complications and ensures safe
          treatment.
        </p>
        <ButtonFill
          text="Book Consultation"
          onClick={() => setOpenPopup(true)}
        />
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        {faqs.map((faq, i) => {
          const isOpen = openFaqIndex === i;
          return (
            <div key={i} className="border rounded-xl mb-2">
              <button
                className="w-full flex justify-between p-4"
                onClick={() => setOpenFaqIndex(isOpen ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && <div className="p-4 text-gray-600">{faq.a}</div>}
            </div>
          );
        })}
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
