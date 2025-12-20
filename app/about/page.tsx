"use client";

import Image from "next/image";
import doctorImg from "../assets/Dr-Himanshu-Verma-Fortis.webp"; // replace with actual image
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";

import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "../components/Button";
import FinalCTA from "../components/CTA";
import WhyChooseUs from "../components/WhyChooseUs";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Award, GraduationCap } from "lucide-react";
import { Trophy, Medal, Star } from "lucide-react";
import FloatingContactActions from "../components/ContactActions";
import PhoneInput from "react-phone-input-2";

const awards = [
  {
    title: "Excellence in Vascular Surgery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: Trophy,
  },
  {
    title: "Best Young Vascular Surgeon Award",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: Medal,
  },
  {
    title: "Outstanding Clinical Outcomes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: Star,
  },
];

export default function About() {
  const [openPopup, setOpenPopup] = useState(false);

  // INITIALIZE AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
      <Nav />
      <section className="py-12 bg-[#64bab4] rounded-r-full">
        <div className="w-11/12 md:w-5/6 mx-auto gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Qualifications */}
            <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
              MBBS, MS, MCh, FEVS
              <br />
              <span className="normal-case text-[var(--med-text)]/70">
                (Vascular & Endovascular Surgeon)
              </span>
            </p>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
              Dr. Himanshu Verma
            </h1>

            {/* Description */}
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              assumenda similique blanditiis saepe quidem minus mollitia
              deserunt ipsam obcaecati dicta neque at quam corrupti ab eos, nemo
              magnam illum illo cupiditate repellat, debitis eveniet amet quod!
              Incidunt ipsam quaerat eos!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* TOP: CONTENT + IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-16">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--med-text)] mb-6">
                Dr. Himanshu Verma
              </h2>

              <p className="text-[var(--med-text)]/75 leading-relaxed mb-4 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                porro sunt rem quod suscipit fugit, dolorem quis placeat vero
                aspernatur laboriosam tempora hic qui molestias quidem. Quae
                autem vel totam alias ut fugiat quibusdam nulla officia iusto
                temporibus, vitae error corporis sit ipsum dicta nam ad. Nam
                dolor quisquam amet!
              </p>

              <p className="text-[var(--med-text)]/75 leading-relaxed text-justify mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                excepturi velit dolore facilis earum? Culpa accusamus expedita
                dolorum? Dignissimos, accusamus vero rerum commodi vel molestias
                aut, dolor porro aperiam aliquid deleniti ipsa voluptas
                voluptatibus officia non veniam ipsum? Id, magnam eligendi
                possimus placeat distinctio aperiam reiciendis corrupti
                voluptatem alias laborum.
              </p>
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Book Appointment"
              />
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center ">
              <div
                className="
                relative w-72 h-72 md:w-96 md:h-96
                overflow-hidden
                border border-[var(--med-border)]
                shadow-[0_20px_40px_rgba(11,141,133,0.15)]
              "
              >
                <Image
                  src={doctorImg}
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM: EXPERIENCE & SPECIALIZATION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* EXPERIENCE */}
            <div
              className="
              bg-[var(--med-light)]
              border border-[var(--med-border)]
              rounded-2xl p-8
            "
            >
              <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-4">
                Experience
              </h3>
              <p className="text-[var(--med-text)]/75 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                molestiae magni facere, amet asperiores minima incidunt eaque
                laboriosam.
              </p>
            </div>

            {/* SPECIALIZATION */}
            <div
              className="
              bg-[var(--med-light)]
              border border-[var(--med-border)]
              rounded-2xl p-8
            "
            >
              <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-4">
                Specialization
              </h3>
              <ul className="space-y-2 text-[var(--med-text)]/75">
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-4">
              Education & Training
            </h2>
            <p className="text-[var(--med-text)]/70 max-w-2xl mx-auto">
              Academic excellence and advanced surgical training that form the
              foundation of trusted vascular care.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* LEFT — HIGHLIGHT */}
            <div
              className="
              lg:col-span-1
              bg-[var(--med-light)]
              border border-[var(--med-border)]
              rounded-3xl p-8
              shadow-[0_20px_40px_rgba(11,141,133,0.12)]
            "
              data-aos="fade-up"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--med-primary)]/15 flex items-center justify-center mb-6">
                <Award className="text-[var(--med-primary)]" size={28} />
              </div>

              <h3 className="text-xl font-bold text-[var(--med-text)] mb-4">
                Highest Qualification
              </h3>

              <p className="text-[var(--med-text)]/80 leading-relaxed">
                <strong>MCh – Vascular Surgery</strong> <br />
                Among the first MCh in Vascular Surgery in Delhi, with advanced
                exposure to complex vascular and endovascular procedures.
              </p>
            </div>

            {/* RIGHT — EDUCATION GRID */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* CARD 1 */}
              <div
                className="
                bg-white
                border border-[var(--med-border)]
                rounded-2xl p-6
                hover:shadow-lg transition
              "
                data-aos="fade-up"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-[var(--med-primary)]" />
                  <h4 className="font-semibold text-[var(--med-text)]">MBBS</h4>
                </div>
                <p className="text-sm text-[var(--med-text)]/70">
                  Lorem Ipsum Medical College <br />
                  Lorem Ipsum University
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="
                bg-white
                border border-[var(--med-border)]
                rounded-2xl p-6
                hover:shadow-lg transition
              "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-[var(--med-primary)]" />
                  <h4 className="font-semibold text-[var(--med-text)]">
                    MS – General Surgery
                  </h4>
                </div>
                <p className="text-sm text-[var(--med-text)]/70">
                  Lorem Ipsum Institute of Medical Sciences
                </p>
              </div>

              {/* CARD 3 */}
              <div
                className="
                bg-white
                border border-[var(--med-border)]
                rounded-2xl p-6
                hover:shadow-lg transition
              "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-[var(--med-primary)]" />
                  <h4 className="font-semibold text-[var(--med-text)]">
                    MCh – Vascular Surgery
                  </h4>
                </div>
                <p className="text-sm text-[var(--med-text)]/70">
                  Advanced super-speciality training in vascular and
                  endovascular surgery.
                </p>
              </div>

              {/* CARD 4 */}
              <div
                className="
                bg-white
                border border-[var(--med-border)]
                rounded-2xl p-6
                hover:shadow-lg transition
              "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-[var(--med-primary)]" />
                  <h4 className="font-semibold text-[var(--med-text)]">
                    FEVS Fellowship
                  </h4>
                </div>
                <p className="text-sm text-[var(--med-text)]/70">
                  European Fellowship in Vascular & Endovascular Surgery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <WhyChooseUs /> */}

      <section className="py-12 bg-white relative overflow-hidden">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-4">
              Awards & Achievements
            </h2>
            <p className="text-[var(--med-text)]/70 max-w-2xl mx-auto">
              Milestones that reflect excellence, dedication, and leadership in
              vascular and endovascular care.
            </p>
          </div>

          {/* RIBBON CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-center">
            {awards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <div
                  key={idx}
                  className="
                  w-full lg:w-1/3
                  bg-white
                  border border-[var(--med-border)]
                  rounded-3xl
                  px-8 py-10
                  text-center
                  shadow-[0_18px_40px_rgba(11,141,133,0.15)]
                  hover:-translate-y-2
                  transition-all duration-300
                "
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                >
                  {/* ICON */}
                  <div className="mx-auto w-16 h-16 rounded-full bg-[var(--med-primary)]/15 flex items-center justify-center mb-6">
                    <Icon size={30} className="text-[var(--med-primary)]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[var(--med-text)] mb-3">
                    {award.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-[var(--med-text)]/70 leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT — CONTACT INFO */}
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-6">
              Get in Touch
            </h2>

            <p className="text-[var(--med-text)]/70 mb-10 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, repellendus. Saepe quia minus quidem.
            </p>

            <div className="space-y-6">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <MapPin className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">
                    Address
                  </p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    Lorem Ipsum Street, Sector 00,
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <Phone className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">Phone</p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    +91 00000 00000
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <Mail className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">Email</p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    info@example.com
                  </p>
                </div>
              </div>

              {/* TIMING */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
                  <Clock className="text-[var(--med-primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--med-text)]">
                    Working Hours
                  </p>
                  <p className="text-[var(--med-text)]/70 text-sm">
                    Mon – Sat: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div
            data-aos="fade-up"
            className="
            bg-white/90 backdrop-blur-xl
            border border-[var(--med-border)]
            rounded-3xl p-8 md:p-10
            shadow-[0_20px_40px_rgba(11,141,133,0.15)]
          "
          >
            <h3 className="text-2xl font-bold text-[var(--med-primary)] mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none
              "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none
              "
              />

              <div className="w-full">
                <PhoneInput
                  country="in"
                  enableSearch
                  countryCodeEditable={false}
                  placeholder="Phone Number"
                  inputClass="!w-full !h-[48px] !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-teal-500"
                />
              </div>

              <div>
                <select
                  className="
      w-full mt-1 px-4 py-2.5 rounded-lg
      border border-gray-300
      bg-white/10
      text-gray-800
      focus:outline-none
      focus:border-[var(--med-primary)]
    "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Disease
                  </option>
                  <option value="disease-1">Disease 1</option>
                  <option value="disease-2">Disease 2</option>
                  <option value="disease-3">Disease 3</option>
                  <option value="disease-4">Disease 4</option>
                  <option value="disease-5">Disease 5</option>
                </select>
              </div>

              <textarea
                rows={4}
                placeholder="Your Message"
                className="
                w-full px-4 py-3 rounded-lg
                border border-[var(--med-border)]
                focus:ring-2 focus:ring-[var(--med-primary)]
                outline-none resize-none
              "
              />

              <div>
                <input
                  type="file"
                  accept="application/pdf"
                  className="
      w-full px-4 py-2.5
      rounded-lg
      border border-gray-300
      bg-white/10
      text-gray-700 text-sm
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:bg-[var(--med-primary)]/10
      file:text-[var(--med-primary)]
      hover:file:bg-[var(--med-primary)]/20
      focus:outline-none
      focus:border-[var(--med-primary)]
    "
                />
              </div>

              <ButtonFill type="submit" text="Submit" className="w-full" />
            </form>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}
