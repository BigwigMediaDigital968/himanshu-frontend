"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";
import { GiH2O } from "react-icons/gi";

export default function VaricoseVeinsContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the main causes of varicose veins?",
      a: (
        <p>
          Weak vein valves, genetics, prolonged standing, aging, pregnancy, and
          excess weight are the most common causes. These conditions often
          require professional evaluation and{" "}
          <b>varicose veins treatment in Gurgaon.</b>
        </p>
      ),
    },
    {
      q: "Are varicose veins a worry?",
      a: (
        <p>
          They can become a concern if pain, swelling, skin changes, or ulcers
          develop. Early evaluation and{" "}
          <b>varicose veins treatment in Gurgaon</b> help prevent complications.
        </p>
      ),
    },
    {
      q: "Is walking good for varicose veins?",
      a: (
        <p>
          Yes. Walking improves blood circulation in the legs and reduces
          pressure in the veins, making it one of the best daily habits for vein
          health alongside proper <b>varicose veins treatment in Gurgaon</b>.
        </p>
      ),
    },
    {
      q: "Can varicose veins go away on their own?",
      a: (
        <p>
          Minor varicose veins may improve with lifestyle changes, but most
          require medical evaluation and{" "}
          <b>varicose veins treatment in Gurgaon</b> for long-term relief.
        </p>
      ),
    },
    {
      q: "Is treatment for varicose veins painful?",
      a: (
        <p>
          Most modern procedures used in{" "}
          <b>varicose veins treatment in Gurgaon</b> are minimally invasive and
          designed for patient comfort.
        </p>
      ),
    },
    {
      q: "Can varicose veins cause serious health problems?",
      a: (
        <p>
          Yes. If untreated, they can lead to ulcers, blood clots, or chronic
          venous insufficiency, which is why timely{" "}
          <b>varicose veins treatment in Gurgaon</b> is recommended.
        </p>
      ),
    },
    {
      q: "How can I prevent varicose veins?",
      a: (
        <p>
          Regular exercise, maintaining a healthy weight, avoiding prolonged
          standing or sitting, and wearing compression stockings can help reduce
          the risk and complement <b>varicose veins treatment in Gurgaon</b>.
        </p>
      ),
    },
    {
      q: "When should I see a doctor?",
      a: (
        <p>
          Seek medical attention if you notice swelling, persistent pain, or
          skin changes around your veins. Early consultation ensures better
          outcomes and timely <b>varicose veins treatment in Gurgaon</b>.
        </p>
      ),
    },
  ];

  const symptoms = [
    "Twisted, bulging blue veins in the legs",
    "Visible spider veins on thighs and/or calves",
    "Heaviness or ache in the legs, especially after standing for long periods or sitting with knees bent",
    "Swelling of the lower legs, ankles, and feet",
    "Itching or irritation around the affected veins",
    "Muscle cramps or restless legs, especially at night",
  ];

  const causes = [
    "Valve weakness or damaged veins causing blood pooling",
    "Aging – wall deterioration in elderly veins is natural",
    "Genetics – those with relatives afflicted by varicose veins have the condition more often",
    "Remaining upright or sitting for long periods of time, which strains leg veins",
    "Pregnancy – due to increased blood volume and hormonal changes",
    "Obesity – which puts excessive pressure on the veins",
  ];

  const complications = [
    "Ulcers on the skin near the ankle due to long-term pooling of fluid",
    "Superficial or deep venous thrombosis (blood clots) that may be life-threatening",
    "Chronic venous insufficiency, where blood flow is compromised, causing swelling and skin changes",
    "Hemorrhage from veins located near the surface of the skin",
  ];

  const treatments = [
    {
      name: "Endovenous Laser Treatment (EVLT)",
      badge: "Most Effective",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "One of the most effective procedures in modern varicose veins treatment in Gurgaon. Uses laser energy to close the damaged vein.",
    },
    {
      name: "Medical Glue Treatment (Cyanoacrylate Closure)",
      badge: "No Compression",
      badgeClass: "bg-teal-100 text-teal-700",
      desc: "Medical glue seals the affected vein without the need for multiple compression sessions.",
    },
    {
      name: "Foam Sclerotherapy",
      badge: "Minimally Invasive",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "A foam solution is injected into problematic veins to shrink and eventually eliminate them.",
    },
    {
      name: "Microphlebectomy / Stab Phlebectomy",
      badge: "Superficial Veins",
      badgeClass: "bg-purple-100 text-purple-700",
      desc: "Small incisions are made to safely remove superficial varicose veins.",
    },
    {
      name: "Radiofrequency Ablation (RFA)",
      badge: "Advanced",
      badgeClass: "bg-emerald-100 text-emerald-700",
      desc: "A minimally invasive treatment that uses radiofrequency heat to seal damaged veins. Improves blood flow, reduces pain and swelling, and ensures faster recovery with minimal discomfort.",
    },
    // {
    //   name: "Iliac Vein Stenting",
    //   badge: "Hypertension",
    //   badgeClass: "bg-orange-100 text-orange-700",
    //   desc: "Used to treat venous hypertension by opening narrowed or compressed veins.",
    // },
    // {
    //   name: "Deep Vein Thrombolysis",
    //   badge: "Clot Dissolution",
    //   badgeClass: "bg-red-100 text-red-700",
    //   desc: "A specialized procedure that dissolves dangerous clots in the deep veins.",
    // },
    // {
    //   name: "DVT Mechanical Thrombectomy",
    //   badge: "Clot Removal",
    //   badgeClass: "bg-rose-100 text-rose-700",
    //   desc: "Removes clots from deep veins using advanced medical devices.",
    // },
    // {
    //   name: "IVC Filter Insertion & Retrieval",
    //   badge: "Clot Prevention",
    //   badgeClass: "bg-amber-100 text-amber-700",
    //   desc: "Helps prevent blood clots from reaching the lungs.",
    // },
    // {
    //   name: "Pulmonary Embolism Suction Thrombectomy",
    //   badge: "Life-Saving",
    //   badgeClass: "bg-red-100 text-red-700",
    //   desc: "A life-saving procedure used to remove clots from the lungs.",
    // },
  ];

  const BulletItem = ({
    text,
    color = "bg-[var(--med-primary)]",
  }: {
    text: string;
    color?: string;
  }) => (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <span
        className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${color}`}
      />
      {text}
    </li>
  );

  return (
    <div className="font-sans">
      {/* ── HERO ── */}
      <div className="relative rounded-2xl overflow-hidden bg-[var(--med-primary)] mb-12 px-6 py-10 md:px-12 md:py-14">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          Vascular Specialist · Gurgaon
        </p>
        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          Varicose Veins Treatment in Gurgaon
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-2">
          by Dr. Himanshu Verma
        </p>
        <p className="text-white/70 text-sm max-w-xl mb-8">
          Advanced minimally invasive procedures to restore healthy blood flow,
          relieve discomfort, and prevent complications -{" "}
          <b>PERSONALIZED FOR YOU</b>.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["9 Procedures", "Treatment Options"],
            ["Minimally Invasive", "Preferred Approach"],
            ["Early Detection", "Best Outcomes"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Are Varicose Veins?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The legs are the most prevalent location for varicose veins, which
            are swollen, twisted veins. The condition develops due to the
            weakening of the valves in the veins, allowing blood flow in the
            reverse direction (backward) and thus pooling; the pooling of the
            blood leads to swelling and also to the appearance of bulging out of
            the skin. Varicose Veins Treatment are often thought of as only
            being a cosmetic problem; however, they can be a sign of other
            vascular problems and, if left untreated, preventable damage may
            result and/or lead to more serious conditions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you are looking for <b>varicose veins treatment in Gurgaon</b>,
            early consultation with a specialist can help prevent complications
            and improve your vein health.
          </p>
        </div>

        {/* CTA card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)]">
            When to Consult
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Should you see varicose veins, spider veins, bluish veins, or have
            discomfort in your legs, consult a qualified specialist such as{" "}
            <b>Dr. Himanshu</b> for early diagnosis and effective{" "}
            <b>varicose veins treatment in Gurgaon</b>. so as to provide early
            diagnosis and effective care. Schedule a consultation today to
            understand your vein health and explore the best options for{" "}
            <b>varicose veins treatment in Gurgaon</b>.
          </p>
          {[
            "Varicose or spider veins",
            "Leg heaviness or aching",
            "Visible bluish veins",
            "Leg swelling or discomfort",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule a Consultation"
          />
        </div>
      </div>

      {/* ── SYMPTOMS & CAUSES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Symptoms & Causes
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Understanding Varicose Veins
          </h3>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Comprehending the symptoms and causes of varicose veins is
            invaluable in their early detection and effective management. People
            seeking <b>varicose veins treatment in Gurgaon</b> should understand
            the warning signs to ensure timely medical attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Symptoms */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <h3 className="text-base font-bold text-gray-800">
                What Are the Symptoms of Varicose Veins?
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Varicose veins can present themselves in various ways. Common
              symptoms include:
            </p>
            <ul className="space-y-2">
              {symptoms.map((s) => (
                <BulletItem key={s} text={s} color="bg-orange-400" />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              The symptoms vary in severity and can worsen over time.
              Nonetheless, early treatment can prevent progression of the
              condition. If you experience heavy or aching legs, consult Dr.
              Himanshu for proper evaluation and{" "}
              <b>varicose veins treatment in Gurgaon</b> tailored to your
              specific condition.
            </p>
          </div>

          {/* Causes */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                What Causes Varicose Veins?
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Reasons for the development of varicose veins include:
            </p>
            <ul className="space-y-2">
              {causes.map((c) => (
                <BulletItem key={c} text={c} />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Early treatment and lifestyle modifications can help lower the
              risk of complications. If you notice early symptoms, consulting a
              specialist for <b>varicose veins treatment in Gurgaon</b> can help
              protect your long-term vein health.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 text-sm flex-1">
            If you experience heavy or aching legs, consult Dr. Himanshu for
            proper evaluation and <b>varicose veins treatment in Gurgaon</b>{" "}
            tailored to your specific condition.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* ── COMPLICATIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Why Early Treatment Matters
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Are the Serious Complications of Varicose Veins?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            While many people experience mild symptoms, untreated varicose veins
            can lead to serious complications. This is why timely{" "}
            <b>varicose veins treatment in Gurgaon</b> is recommended for
            patients experiencing persistent symptoms. Possible complications
            include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {complications.map((c, i) => (
            <div
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4"
            >
              <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm leading-snug">{c}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 text-sm flex-1">
            Early referral and intervention can help prevent these
            complications. Dr. Himanshu offers comprehensive{" "}
            <b>varicose veins treatment in Gurgaon</b> for patients dealing with
            chronic venous disorders and lymphatic issues.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book an Appointment"
          />
        </div>
      </div>

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Advanced Procedures
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Advanced Varicose Veins Treatment Options
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            The Varicose Veins Treatment depends on the severity of symptoms and
            the underlying venous condition. Patients seeking{" "}
            <b>varicose veins treatment in Gurgaon</b> can benefit from advanced
            minimally invasive procedures designed to improve blood flow,
            relieve discomfort, and prevent complications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="border border-[var(--med-border)] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-gray-800 text-sm leading-snug">
                  {t.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${t.badgeClass}`}
                >
                  {t.badge}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/90 max-w-xl">
            Early diagnosis and the right{" "}
            <b>varicose veins treatment in Gurgaon</b> can help prevent serious
            complications such as ulcers, blood clots, and chronic venous
            insufficiency. If your legs feel heavy, swollen, or painful, consult
            Dr. Himanshu to find the most suitable{" "}
            <b>varicose veins treatment in Gurgaon</b> for your condition.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Consult Dr. Himanshu
          </button>
        </div>
      </div>

      {/* ── WHY CHOOSE ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Why Choose Dr. Himanshu Verma?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              With expertise in advanced endovascular techniques and
              comprehensive vascular care, Dr. Himanshu delivers the most
              effective and personalized{" "}
              <b className="text-white">varicose veins treatment in Gurgaon</b>.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
            {[
              "Minimally invasive, faster recovery",
              "9 advanced treatment procedures available",
              "Personalized care for every patient",
              "Expert in chronic venous & lymphatic disorders",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="Schedule an Appointment"
            />
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Common Questions
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">FAQs</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen
                    ? "border-[var(--med-primary)] bg-[var(--med-light)]"
                    : "border-[var(--med-border)] bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left gap-4"
                >
                  <span
                    className={`font-semibold text-sm md:text-base pr-2 ${
                      isOpen ? "text-[var(--med-primary)]" : "text-gray-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-4 h-4 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-[var(--med-primary)]"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-700 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-[var(--med-primary)]" />
          <p className="text-xl font-bold text-gray-800">
            Protect Your Long-Term Leg Health.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          If your legs feel heavy, swollen, or painful, consult Dr. Himanshu to
          find the most suitable <b>varicose veins treatment in Gurgaon</b> for
          your condition. Don't wait — early treatment delivers the best
          outcomes.
        </p>
        <div className="flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule a Consultation"
          />
        </div>
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
