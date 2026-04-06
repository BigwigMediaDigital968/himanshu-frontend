"use client";

import React, { useEffect, useRef, useState } from "react";

const symptoms = [
  { icon: "🦵", text: "Blue, twisted, protruding veins in the legs" },
  { icon: "🔵", text: "Visible spider veins on the calves or thighs" },
  { icon: "⚖️", text: "Leg pain or heaviness after prolonged standing" },
  { icon: "🦶", text: "Swelling in ankles, feet, and lower legs" },
  { icon: "🔥", text: "Discomfort or itching near affected veins" },
  { icon: "🌙", text: "Leg restlessness or cramping, especially at night" },
];

const causes = [
  {
    title: "Damaged Valves",
    desc: "Blood pooling due to damaged veins or weak valves",
    icon: "💧",
  },
  {
    title: "Aging",
    desc: "Wall degradation in older veins is a normal part of aging",
    icon: "⏳",
  },
  {
    title: "Genetics",
    desc: " People who have relatives with varicose veins are more likely to get the condition themselves",
    icon: "🧬",
  },
  {
    title: "Prolonged Standing",
    desc: "Sitting for extended periods of time or staying upright strains the veins in the legs",
    icon: "🧍",
  },
  {
    title: "Pregnancy",
    desc: " as a result of hormonal changes and increased blood volume",
    icon: "🤰",
  },
  {
    title: "Obesity",
    desc: "Obesity causes the veins to be too compressed",
    icon: "⚖️",
  },
];

const treatments = [
  {
    name: "Endovenous Laser Treatment (EVLT)",
    short: "EVLT",
    desc: " One of the most successful methods for varicose vein treatment in Delhi today is endovenous laser treatment (EVLT). The injured vein is sealed with laser energy. ",
    badge: "Most Popular",
    color: "#0b8d85",
  },
  {
    name: "Medical Glue Treatment",
    short: "VenaSeal",
    desc: " VenaSeal is a minimally invasive, glue-based treatment for varicose veins that seals the affected vein without surgery, allowing quick recovery and usually no need for compression stockings. ",
    badge: "No Surgery",
    color: "#1a9e96",
  },
  {
    name: "Foam Sclerotherapy",
    short: "Sclerotherapy",
    desc: " To reduce and eventually eradicate troublesome veins, a foam solution is injected into them. ",
    badge: "Non-Invasive",
    color: "#129990",
  },
  {
    name: "Microphlebectomy",
    short: "Stab Phlebectomy",
    desc: "Superficial varicose veins can be safely removed via microphlebectomy or stab phlebectomy, which involves making tiny incisions. ",
    badge: "Precise",
    color: "#0e8880",
  },
  {
    name: "Radiofrequency Ablation (RFA)",
    short: "RFA",
    desc: "Using heat to seal and repair damaged veins, RFA is a minimally invasive Varicose Vein Treatment. It facilitates rapid recovery with little discomfort, enhances blood flow, and lessens pain and edema. ",
    badge: "Fast Recovery",
    color: "#087870",
  },
];

const complications = [
  {
    title: "Skin Ulcers",
    desc: "Skin ulcers close to the ankle brought on by persistent fluid buildup",
    icon: "🩹",
  },
  {
    title: "Blood Clots",
    desc: "Blood clots that could be fatal due to superficial or profound venous thrombosis",
    icon: "🩸",
  },
  {
    title: "CVI",
    desc: "Chronic venous insufficiency, which results in altered skin and swelling due to reduced blood flow",
    icon: "🔄",
  },
  {
    title: "Bleeding",
    desc: "bleeding from veins close to the skin's surface",
    icon: "❗",
  },
];

const faqs = [
  {
    q: "Can varicose veins be cured permanently?",
    a: (
      <>
        Modern Varicose Vein Treatment in Delhi, such as laser therapy,
        radiofrequency ablation (RFA), and sclerotherapy, can effectively
        eliminate existing varicose veins. However, new veins may develop over
        time if underlying risk factors are not managed.
      </>
    ),
  },
  {
    q: "Can you live a long life with varicose veins?",
    a: (
      <>
        Yes, most people live a normal life with varicose veins. With timely{" "}
        Varicose Vein Treatment in Delhi, complications can be prevented and
        overall quality of life improved.
      </>
    ),
  },
  {
    q: "What is the best treatment for varicose veins?",
    a: (
      <>
        The best Varicose Vein Treatment in Delhi includes minimally invasive
        procedures like Endovenous Laser Treatment (EVLT) and RFA, which are
        safe, effective, and offer quick recovery.
      </>
    ),
  },
  {
    q: "Is varicose vein treatment painful?",
    a: (
      <>
        Most Varicose Vein Treatment in Delhi options are minimally invasive and
        performed under local anesthesia, ensuring little to no pain during the
        procedure.
      </>
    ),
  },
  {
    q: "How long does it take to recover after treatment?",
    a: (
      <>
        Recovery after Varicose Vein Treatment in Delhi is usually quick, and
        patients can resume normal activities within 1–3 days in most cases.
      </>
    ),
  },
  {
    q: "What happens if varicose veins are left untreated?",
    a: "Without proper treatment, the condition may worsen and lead to swelling, skin changes, blood clots, or leg ulcers.",
  },
  {
    q: "Who is at risk of developing varicose veins?",
    a: (
      <>
        Common risk factors include aging, genetics, obesity, pregnancy, and
        prolonged standing. Seeking early Varicose Vein Treatment in Delhi can
        help manage symptoms effectively.
      </>
    ),
  },
  {
    q: "Can varicose veins come back after treatment?",
    a: (
      <>
        While treated veins do not return, new veins may develop over time.
        Regular follow-ups after Varicose Vein Treatment in Delhi can help in
        early detection and management.
      </>
    ),
  },
  {
    q: "Are there non-surgical treatments available?",
    a: (
      <>
        Yes, Varicose Vein Treatment in Delhi includes non-surgical options like
        compression stockings, lifestyle changes, and minimally invasive
        procedures.
      </>
    ),
  },
  {
    q: "When should I see a doctor for varicose veins?",
    a: (
      <>
        You should consult a specialist for Varicose Vein Treatment in Delhi if
        you experience pain, swelling, heaviness, or visible vein enlargement.
      </>
    ),
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

function FAQItem({
  q,
  a,
  idx,
}: {
  q: string;
  a: React.ReactNode;
  idx: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="faq-item"
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
          maxHeight: open ? 200 : 0,
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

export default function DelhiContent() {
  const [activeTreatment, setActiveTreatment] = useState(0);

  return (
    <div style={{ color: "var(--med-text)", overflowX: "hidden" }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(135deg, #f3fcfb 0%, #e8f7f6 40%, #d7ecea 100%)",
          padding: "80px 0 60px",
          overflow: "hidden",
        }}
      >
        {/* Decorative veins SVG bg */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.07,
            width: 480,
            pointerEvents: "none",
          }}
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 40 Q340 160 380 240 Q420 320 360 440"
            stroke="#0b8d85"
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M440 80 Q370 180 410 260 Q450 340 390 460"
            stroke="#0b8d85"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M360 20 Q310 140 350 220 Q390 300 330 420"
            stroke="#0b8d85"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            // padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
          <nav style={{ marginBottom: 24, fontSize: 13, color: "#5a7a80" }}>
            <a
              href="/"
              style={{ color: "var(--med-primary)", textDecoration: "none" }}
            >
              Home
            </a>
            <span style={{ margin: "0 8px" }}>›</span>
            <a
              href="/services"
              style={{ color: "var(--med-primary)", textDecoration: "none" }}
            >
              Services
            </a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span>Varicose Vein Treatment in Delhi</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(11,141,133,0.12)",
                  borderRadius: 40,
                  padding: "6px 16px",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--med-primary)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--med-primary)",
                    letterSpacing: 0.5,
                  }}
                >
                  Advanced Vascular Care · Delhi
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: 20,
                  color: "var(--med-text)",
                }}
              >
                Varicose Vein Treatment
                <br />
                <span style={{ color: "var(--med-primary)" }}>in Delhi</span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#3d5a65",
                  maxWidth: 580,
                  marginBottom: 32,
                }}
              >
                Varicose veins are bulging, twisted veins most common in the
                legs. They arise from weakened venous valves, causing blood to
                pool and swell beneath the skin. While often dismissed as
                cosmetic, they can signal deeper vascular issues early expert
                care makes all the difference.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  className="btn-9"
                  style={{ textDecoration: "none", display: "inline-block" }}
                >
                  Book Consultation
                </a>
                <a
                  href="#treatments"
                  style={{
                    padding: "12px 28px",
                    borderRadius: 10,
                    border: "2px solid var(--med-primary)",
                    color: "var(--med-primary)",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: 15,
                    background: "#fff",
                  }}
                >
                  View Treatments
                </a>
              </div>
            </div>

            {/* Stats card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "32px 28px",
                boxShadow: "0 8px 40px rgba(11,141,133,0.12)",
                border: "1px solid var(--med-border)",
                minWidth: 220,
                display: "none",
              }}
              className="hero-stats"
            >
              {[
                // { val: "Laser + Glue + RFA", label: "Advanced Treatments" },
                { val: "1–3", label: "Days Recovery" },
                { val: "100%", label: "Minimally Invasive" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    padding: i > 0 ? "20px 0 0" : "0 0 20px",
                    borderBottom:
                      i < 2 ? "1px solid var(--med-border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 30,
                      fontWeight: 800,
                      color: "var(--med-primary)",
                    }}
                  >
                    {s.val}
                  </div>
                  <div style={{ fontSize: 13, color: "#5a7a80", marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      {/* <section
        style={{ background: "var(--med-primary)", padding: "28px 24px" }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
            textAlign: "center",
          }}
        >
          {[
            { val: "5+", label: "Treatment Options" },
            { val: "1–3 Days", label: "Typical Recovery" },
            { val: "Local Anaesthesia", label: "Minimal Pain" },
            { val: "Laser + Glue + RFA", label: "Advanced Tech" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
                {s.val}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.75)",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA STRIP ── */}
      <AnimatedSection>
        <section
          style={{
            background: "var(--med-light)",
            padding: "40px 24px",
            borderBottom: "1px solid var(--med-border)",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: 16.5,
                color: "#3d5a65",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              In order to have an early diagnosis and efficient treatment, you
              should see a trained varicose vein expert like <b>Dr. Himanshu</b>{" "}
              for
              <b>varicose vein treatment in Delhi</b> if you have varicose
              veins, spider veins, bluish veins, or discomfort in your legs. To
              learn more about the health of your veins and discover the best
              choices for <b>varicose vein treatment in West Delhi</b>, schedule
              a consultation right now.
            </p>
            <a
              href="contact"
              className="btn-9"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Schedule a Consultation Now
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CAUSES ── */}
      <AnimatedSection>
        <section
          id="causes"
          style={{ padding: "72px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--med-primary)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Know the Causes
              </h3>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "var(--med-text)",
                }}
              >
                What Leads to Varicose Veins?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 960,
                  margin: "12px auto 0",
                }}
              >
                Early detection and efficient treatment of varicose veins depend
                heavily on an understanding of their symptoms and causes. To
                guarantee the best medical attention, anyone seeking treatment
                for varicose veins in Delhi should be aware of the warning
                signals.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {causes.map((c, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid var(--med-border)",
                    borderRadius: 16,
                    padding: "24px 22px",
                    background: "var(--med-light)",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 32px rgba(11,141,133,0.15)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: 26,
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(11,141,133,0.1)",
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
                        color: "var(--med-text)",
                        marginBottom: 6,
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#5a7a80",
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

            <div style={{ textAlign: "center", marginTop: 52 }}>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 960,
                  margin: "12px auto 0",
                }}
              >
                The risk of problems can be reduced with early treatment and
                lifestyle changes. Seeing a specialist for varicose vein
                treatment in South Delhi might help safeguard your long-term
                vein health if you experience early signs.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SYMPTOMS ── */}
      <AnimatedSection>
        <section
          id="symptoms"
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
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
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
                Know Your Body
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "#fff",
                }}
              >
                What Varicose Vein Symptoms Are There?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 960,
                  margin: "12px auto 0",
                }}
              >
                There are several ways that varicose veins can happen. general
                signs and symptoms include:
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {symptoms.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 14,
                    padding: "20px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
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
                  <span style={{ fontSize: 24 }}>{s.icon}</span>
                  <span
                    style={{
                      fontSize: 14.5,
                      color: "#fff",
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {s.text}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 15,
                  marginBottom: 20,
                }}
              >
                The intensity of the symptoms of varicose veins varies, and they
                may get worse over time. However, early intervention can stop
                the illness from getting worse. For a thorough assessment and
                customized varicose vein treatment in Delhi, see Dr. Himanshu if
                your legs feel heavy or painful.
              </p>
              <a
                href="#contact"
                style={{
                  background: "#fff",
                  color: "var(--med-primary)",
                  padding: "13px 30px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: 15,
                }}
              >
                Get Assessed Today
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
                Serious Complications of Untreated Varicose Veins
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 960,
                  margin: "12px auto 0",
                }}
              >
                Even though many people only have minor symptoms, varicose veins
                can cause major problems if left untreated. For individuals with
                prolonged symptoms, the best varicose vein treatment in East
                Delhi is advised. Among the potential issues are:
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
            <div style={{ textAlign: "center", marginTop: 52 }}>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 960,
                  margin: "12px auto 0",
                }}
              >
                These issues can be avoided with early referral and
                intervention. For patients with lymphatic problems and
                persistent venous illnesses, Dr. Himanshu provides thorough
                varicose vein treatment in Delhi. Make an appointment right now
                to guarantee the long-term health of your legs.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── TREATMENTS ── */}
      <AnimatedSection>
        <section
          id="treatments"
          style={{
            padding: "72px 24px",
            background: "var(--med-light)",
          }}
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
                  maxWidth: 960,
                  margin: "12px auto 0",
                }}
              >
                The varicose vein treatment in North Delhi depends on the
                severity of symptoms and the underlying venous condition.
                Patients seeking varicose vein treatment in Delhi can benefit
                from advanced minimally invasive procedures designed to improve
                blood flow, relieve discomfort, and prevent complications.
                Common treatment approaches include:
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
                padding: "40px 36px",
                boxShadow: "0 8px 40px rgba(11,141,133,0.12)",
                border: "1px solid var(--med-border)",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 32,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 20,
                  background:
                    "linear-gradient(135deg, var(--med-primary), var(--med-primary-dark))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
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

            {/* All treatments grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
                marginTop: 24,
              }}
            >
              {treatments.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTreatment(i)}
                  style={{
                    borderRadius: 14,
                    padding: "18px 16px",
                    border: `2px solid ${activeTreatment === i ? "var(--med-primary)" : "var(--med-border)"}`,
                    background:
                      activeTreatment === i ? "rgba(11,141,133,0.06)" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--med-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {t.badge}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--med-text)",
                    }}
                  >
                    {t.short}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 52 }}>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7a80",
                  maxWidth: 960,
                  margin: "12px auto 0",
                }}
              >
                Serious consequences, including ulceration, blood clots, and
                chronic venous insufficiency, can be avoided with early
                diagnosis and appropriate varicose vein treatment in Central
                Delhi. See Dr. Himanshu for the best varicose vein treatment in
                Delhi if your legs feel uncomfortable, heavy, or bloated.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection>
        <section id="faq" style={{ padding: "72px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--med-primary)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Frequently Asked Questions
              </h2>
              <h3
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  marginTop: 8,
                  color: "var(--med-text)",
                }}
              >
                Your Varicose Vein Questions Answered
              </h3>
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
              multiple cities.
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
                  city: "Varanasi",
                  href: "/services/varicose-vein-treatment-in-varanasi",
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
            Take the First Step Toward Healthier Veins
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            Schedule a consultation with Dr. Himanshu Verma today to learn about
            the best varicose vein treatment options tailored to your condition
            and lifestyle.
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

      <style>{`
        @media (min-width: 768px) {
          .hero-stats { display: block !important; }
        }
      `}</style>
    </div>
  );
}
