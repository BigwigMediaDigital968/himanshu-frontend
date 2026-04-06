"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const symptoms = [
  { icon: "🦵", text: "Twisted and bulging blue veins in the legs" },
  { icon: "🔵", text: "Spider veins visible on the thighs or calves" },
  {
    icon: "⚖️",
    text: "Leg soreness or heaviness, especially after standing or sitting for a long time with your knees bent ",
  },
  { icon: "🦶", text: "Swelling in the ankles, feet, and lower legs" },
  { icon: "🔥", text: "Pain or itching around the affected veins" },
  {
    icon: "🌙",
    text: "Legs that are restless or cramping, especially at night",
  },
];

const causes = [
  {
    title: "Damaged Valves",
    desc: "Blood collecting because of broken veins or weak valves",
    icon: "💧",
  },
  {
    title: "Aging",
    desc: "As veins get older, their walls break down",
    icon: "⏳",
  },
  {
    title: "Genetics",
    desc: "If you have family members with varicose veins, you are more likely to have them yourself",
    icon: "🧬",
  },
  {
    title: "Prolonged Standing",
    desc: "The veins in the legs get tired when you sit or stand for long periods of time",
    icon: "🧍",
  },
  {
    title: "Pregnancy",
    desc: "due to hormonal changes and a rise in blood volume",
    icon: "🤰",
  },
  {
    title: "Obesity",
    desc: "Being overweight makes the veins overly tight",
    icon: "⚖️",
  },
];

const treatments = [
  {
    name: "Endovenous Laser Treatment (EVLT)",
    short: "EVLT",
    desc: " Endovenous laser treatment (EVLT) is one of the best varicose vein treatments in Varanasi right now. Laser energy closes the damaged vein. ",
    badge: "Most Popular",
  },
  {
    name: "Medical Glue Treatment",
    short: "Medical Glue",
    desc: "Medical Glue Treatment is an advanced varicose vein treatment in Varanasi that seals the affected vein quickly and effectively without surgery.",
    badge: "No Surgery",
  },
  {
    name: "Foam Sclerotherapy",
    short: "Sclerotherapy",
    desc: " A foam solution is injected into the veins that are causing problems to make them smaller and finally get rid of them. ",
    badge: "Non-Invasive",
  },
  {
    name: "Microphlebectomy / Stab Phlebectomy",
    short: "Microphlebectomy",
    desc: "There are two ways to safely remove superficial varicose veins. Both methods entail making small cuts.",
    badge: "Precise",
  },
  {
    name: "Radiofrequency Ablation (RFA)",
    short: "RFA",
    desc: "A minimally invasive varicose vein treatment that uses heat to seal and heal veins that are damaged veins. It makes it easier to recover quickly with less pain, improves blood flow, and reduces pain and swelling. ",
    badge: "Fast Recovery",
  },
];

const complications = [
  {
    title: "Skin Ulcers",
    desc: "Persistent fluid buildup might cause skin sores near the ankle",
    icon: "🩹",
  },
  {
    title: "Blood Clots",
    desc: "Blood clots that can become serious if caused by deep venous thrombosis",
    icon: "🩸",
  },
  {
    title: "Chronic Venous Insufficiency",
    desc: "It leads to skin changes and swelling caused by decreased blood flow, as well as bleeding from veins near the skin's surface",
  },
];

const faqs = [
  {
    q: "Why is surgery for varicose veins done?",
    a: "Surgery is done to relieve pain, swelling, and discomfort caused by varicose veins. It also helps prevent complications like ulcers, bleeding, or blood clots, and improves the appearance of the legs.",
  },
  {
    q: "What is done in the surgery for varicose veins?",
    a: "Modern treatments include minimally invasive procedures like laser therapy, radiofrequency ablation, or sclerotherapy. These methods close or remove the damaged veins with small incisions or injections.",
  },
  {
    q: "How long will the patient remain unconscious after varicose vein treatment?",
    a: "Most procedures are done under local anesthesia, so the patient stays awake or lightly sedated. In rare cases of general anesthesia, unconsciousness lasts only during the procedure.",
  },
  {
    q: "Can I walk after surgery for varicose veins?",
    a: "Yes, walking is usually encouraged soon after the procedure to improve blood circulation. Most patients can walk the same day and resume normal activities within a few days.",
  },
  {
    q: "How much will it cost to remove varicose veins?",
    a: "The cost varies depending on the treatment type, severity, and clinic, but in India it typically ranges from ₹30,000 to ₹1,50,000. Minimally invasive procedures may cost more but offer quicker recovery.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </div>
  );
}

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: "1px solid var(--med-border)",
        borderRadius: 14,
        marginBottom: 12,
        overflow: "hidden",
        background: open ? "var(--med-light)" : "#fff",
        transition: "background 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 22px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              minWidth: 28,
              height: 28,
              borderRadius: "50%",
              background: "var(--med-primary)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {idx + 1}
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "var(--med-text)",
              lineHeight: 1.4,
            }}
          >
            {q}
          </span>
        </span>
        <span
          style={{
            fontSize: 20,
            color: "var(--med-primary)",
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.3s",
            fontWeight: 300,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 220 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p
          style={{
            padding: "0 22px 18px 62px",
            fontSize: 14.5,
            color: "#4a6070",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function VaranasiContent() {
  const [activeTreatment, setActiveTreatment] = useState(0);

  return (
    <div
      style={{
        color: "var(--med-text)",
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f3fcfb 0%, #e8f7f6 40%, #d7ecea 100%)",
          padding: "50px 0 80px",
        }}
      >
        {/* Decorative SVG — Ganges-inspired wave + vein motif */}
        <svg
          className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-[520px]"
          viewBox="0 0 520 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M460 30 Q390 130 430 210 Q470 290 400 370"
            stroke="#0b8d85"
            strokeWidth="26"
            strokeLinecap="round"
          />
          <path
            d="M500 60 Q420 160 460 240 Q500 320 430 380"
            stroke="#0b8d85"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M0 340 Q80 310 160 340 Q240 370 320 340 Q400 310 520 340"
            stroke="#0b8d85"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700/70">
            <a href="/" className="hover:text-teal-900 transition-colors">
              Home
            </a>
            <span>/</span>
            <a
              href="/services"
              className="hover:text-teal-900 transition-colors"
            >
              Services
            </a>
            <span>/</span>
            <span className="text-teal-900">Varanasi</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-teal-600/10 rounded-full px-4 py-1.5 mb-6 border border-teal-600/20">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
                  Advanced Vascular Care · Varanasi
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Varicose Vein <br />
                <span className="text-teal-600">Treatment in Varanasi</span>
              </h1>

              <p className="text-md text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Varicose veins are swollen and twisted. They are most frequent
                in the legs. The condition happens when the venous valves
                weaken, allowing blood to flow backward and pool, making the
                skin look swollen and bulging. People often think of varicose
                veins as just a cosmetic problem, but they could be a sign of
                other vascular problems that, if not treated, could bring about
                unavoidable injury or make existing problems worse. If you want
                to get varicose vein treatment in Varanasi, talking to a
                specialist early on will help you avoid problems and improve the
                health of your veins.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-teal-100">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">
                    Expert Diagnosis
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-teal-100">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">
                    Minimally Invasive
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: CTA Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl shadow-teal-900/10 p-8 border border-white relative overflow-hidden group">
                {/* Subtle background glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-50 rounded-full blur-3xl group-hover:bg-teal-100 transition-colors" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Book a Consultation
                  </h3>
                  <p className="text-slate-500 mb-8">
                    Get a personalized treatment plan from Varanasi's leading
                    specialist.
                  </p>

                  <div className="space-y-4 mb-8 text-sm">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="bg-teal-600 p-2 rounded-lg text-white">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Expert Consultation
                        </p>
                        <p className="text-slate-500">
                          With Dr. Himanshu Verma
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="bg-teal-600 p-2 rounded-lg text-white">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Quick Response
                        </p>
                        <p className="text-slate-500">
                          Connect with our care team today
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="#contact"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20 group/btn"
                    >
                      Schedule Appointment
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#treatments"
                      className="w-full bg-transparent text-teal-700 border-teal-700 border hover:bg-teal-700 hover:text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20 group/btn"
                    >
                      View All Treatments
                    </Link>
                  </div>

                  <p className="text-center mt-6 text-xs text-slate-400">
                    Available for Spider Veins, Varicose & Leg Pain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SYMPTOMS ── */}
      <AnimatedSection>
        <section
          id="symptoms"
          style={{ padding: "72px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--med-primary)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Recognise Early Signs
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "var(--med-text)",
                }}
              >
                What Are the Signs of Varicose Veins?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 860,
                  margin: "12px auto 0",
                }}
              >
                Knowing the signs and causes of varicose veins is very important
                for finding them early and treating them quickly. Anyone who
                wants to get varicose vein treatment in Varanasi should know the
                warning signs to make sure they get the best care. There are a
                number of reasons why varicose veins might happen. Some common
                signs and symptoms are:
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {symptoms.map((s, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid var(--med-border)",
                    borderRadius: 14,
                    padding: "20px 20px",
                    background: "var(--med-light)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "0 6px 24px rgba(11,141,133,0.13)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "rgba(11,141,133,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </span>
                  <span
                    style={{
                      fontSize: 14.5,
                      color: "#3d5a65",
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {s.text}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <p style={{ fontSize: 15, color: "#5a7a80", marginBottom: 20 }}>
                The symptoms of varicose veins can be mild or severe, and they
                may get worse over time. But early varicose vein treatment in
                Varanasi can keep the disease from getting worse. If your legs
                feel heavy or painful, consult Dr. Himanshu in Varanasi for a
                full evaluation and personalized therapy for your varicose
                veins.
              </p>
              <a
                href="#contact"
                className="btn-9"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Get a Full Evaluation
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CAUSES ── */}
      <AnimatedSection>
        <section
          id="causes"
          style={{
            padding: "72px 24px",
            background: "linear-gradient(135deg, #0b8d85 0%, #086b65 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 75% 40%, rgba(255,255,255,0.07) 0%, transparent 55%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Understanding the Root
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "#fff",
                }}
              >
                What Causes Varicose Veins?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 560,
                  margin: "12px auto 0",
                }}
              >
                Early awareness of causes helps reduce risk and enables timely
                intervention. There are many reasons why varicose veins can
                form, including:
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {causes.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 16,
                    padding: "22px 20px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.12)";
                  }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 6,
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.78)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <p style={{ fontSize: 15, color: "#fff", marginBottom: 20 }}>
                Early therapy and adjustments to your lifestyle can lower the
                chance of issues. If you notice early symptoms of varicose
                veins, going to a specialist for varicose vein treatment in
                Varanasi might help protect your veins in the long run.
              </p>
              <a
                href="#contact"
                className="btn-9"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Connect with us now!
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── COMPLICATIONS ── */}
      <AnimatedSection>
        <section
          id="complications"
          style={{ padding: "72px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#c0392b",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Don't Ignore the Signs
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "var(--med-text)",
                }}
              >
                What Are the Serious Complications of Varicose Veins?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 860,
                  margin: "12px auto 0",
                }}
              >
                Varicose veins can cause big issues if they aren't addressed,
                even though many people only have mild symptoms. People who have
                had problems for a long time should get the best varicose vein
                treatment in Varanasi. Some of the problems that could happen
                are:
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
              }}
            >
              {complications.map((c, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #fdd",
                    borderRadius: 16,
                    padding: "28px 22px",
                    textAlign: "center",
                    background: "#fff9f9",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#c0392b",
                      marginBottom: 8,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#7a4a4a",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <p style={{ fontSize: 15, color: "#5a7a80", marginBottom: 20 }}>
                Early referral and intervention can help prevent these problems.
                Dr. Himanshu offers complete varicose vein treatment in Varanasi
                for people who have lymphatic issues and long-term venous
                diseases. Make an appointment straight away to make sure your
                legs stay healthy for a long time.
              </p>
              <a
                href="#contact"
                className="btn-9"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Book an Appointment Now
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── TREATMENTS ── */}
      <AnimatedSection>
        <section
          id="treatments"
          style={{ padding: "72px 24px", background: "var(--med-light)" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--med-primary)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Treatment Options
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "var(--med-text)",
                }}
              >
                Advanced Varicose Veins Treatment Options
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 580,
                  margin: "12px auto 0",
                }}
              >
                The severity of the symptoms and the underlying venous problem
                will determine the type of varicose vein treatment in Varanasi.
                Patients in Varanasi who want to get rid of their varicose veins
                can benefit from innovative minimally invasive techniques that
                increase blood flow, ease pain, and stop problems from
                happening. Some common ways to treat are:
              </p>
            </div>

            {/* Tabs */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: 32,
              }}
            >
              {treatments.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTreatment(i)}
                  style={{
                    padding: "9px 18px",
                    borderRadius: 40,
                    border: "2px solid",
                    borderColor:
                      activeTreatment === i
                        ? "var(--med-primary)"
                        : "var(--med-border)",
                    background:
                      activeTreatment === i ? "var(--med-primary)" : "#fff",
                    color: activeTreatment === i ? "#fff" : "var(--med-text)",
                    fontWeight: 600,
                    fontSize: 13.5,
                    cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                >
                  {t.short}
                </button>
              ))}
            </div>

            {/* Active treatment card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "36px",
                boxShadow: "0 8px 40px rgba(11,141,133,0.12)",
                border: "1px solid var(--med-border)",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 28,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: 20,
                  background:
                    "linear-gradient(135deg, var(--med-primary), var(--med-primary-dark))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#fff",
                  textAlign: "center",
                  padding: "0 8px",
                  lineHeight: 1.3,
                  flexShrink: 0,
                }}
              >
                {treatments[activeTreatment].short}
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: "var(--med-text)",
                      margin: 0,
                    }}
                  >
                    {treatments[activeTreatment].name}
                  </h3>
                  <span
                    style={{
                      background: "rgba(11,141,133,0.12)",
                      color: "var(--med-primary)",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "3px 12px",
                      borderRadius: 20,
                    }}
                  >
                    {treatments[activeTreatment].badge}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 15.5,
                    color: "#3d5a65",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {treatments[activeTreatment].desc}
                </p>
              </div>
            </div>

            {/* All treatments quick-select grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
                marginTop: 22,
              }}
            >
              {treatments.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTreatment(i)}
                  style={{
                    borderRadius: 14,
                    padding: "16px 16px",
                    border: `2px solid ${activeTreatment === i ? "var(--med-primary)" : "var(--med-border)"}`,
                    background:
                      activeTreatment === i ? "rgba(11,141,133,0.06)" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--med-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {t.badge}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: "var(--med-text)",
                    }}
                  >
                    {t.short}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <p style={{ fontSize: 15, color: "#5a7a80", marginBottom: 20 }}>
                Early diagnosis and proper varicose vein treatment in Varanasi
                will help you avoid serious problems, including ulcers, blood
                clots, and chronic venous insufficiency. If your legs hurt, feel
                heavy, or seem swollen, see Dr. Himanshu for the best varicose
                vein treatment in Varanasi.
              </p>
              <a
                href="#contact"
                className="btn-9"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Book an Appointment Now
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection>
        <section id="faq" style={{ padding: "72px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--med-primary)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Patient Questions
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "var(--med-text)",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 500,
                  margin: "12px auto 0",
                }}
              >
                Everything you need to know about varicose vein treatment in
                Varanasi.
              </p>
            </div>
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} idx={i} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── OTHER CITIES ── */}
      <AnimatedSection>
        <section
          style={{
            padding: "56px 24px",
            background: "var(--med-light)",
            borderTop: "1px solid var(--med-border)",
          }}
        >
          <div
            style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "var(--med-text)",
                marginBottom: 8,
              }}
            >
              Our Varicose Vein Services in Other Cities
            </h2>
            <p style={{ fontSize: 15, color: "#5a7a80", marginBottom: 32 }}>
              Dr. Himanshu Verma provides expert varicose vein care across
              multiple cities in India.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  city: "Gurgaon",
                  href: "/services/varicose-veins-treatment-in-gurgaon",
                },
                {
                  city: "Delhi",
                  href: "/services/varicose-vein-treatment-in-delhi",
                },
              ].map((loc) => (
                <a
                  key={loc.city}
                  href={loc.href}
                  style={{
                    padding: "13px 28px",
                    borderRadius: 12,
                    border: "2px solid var(--med-primary)",
                    color: "var(--med-primary)",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: 15,
                    background: "#fff",
                    transition: "all 0.25s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--med-primary)";
                    el.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "#fff";
                    el.style.color = "var(--med-primary)";
                  }}
                >
                  Varicose Veins Treatment in {loc.city}
                </a>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FINAL CTA ── */}
      <section
        id="contact"
        style={{
          padding: "72px 24px",
          background: "linear-gradient(135deg, #0b8d85 0%, #065c57 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Take the First Step Toward Healthier Veins in Varanasi
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            Call us immediately to set up a consultation with Dr. Himanshu Verma
            and discover the best varicose vein treatment tailored to your
            condition.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+918826833598"
              style={{
                background: "#fff",
                color: "var(--med-primary)",
                padding: "14px 32px",
                borderRadius: 12,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: 16,
                display: "inline-block",
              }}
            >
              📞 Call Now
            </a>
            <a
              href="/contact-us"
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.6)",
                padding: "14px 32px",
                borderRadius: 12,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: 16,
                display: "inline-block",
              }}
            >
              Book Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
