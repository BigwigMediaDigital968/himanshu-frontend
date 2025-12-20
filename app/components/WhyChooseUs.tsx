"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";

import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "../components/Button";

import whychooseus from "../assets/img10.jpg";

export default function WhyChooseUs() {
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
      <section className="py-12 relative">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* SMALL TITLE */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-2 text-[var(--med-primary)] mb-10  "
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT IMAGE */}
            <div data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={whychooseus} // replace with your image
                  alt="Medical Team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div data-aos="fade-right">
              <p className="text-[var(--med-text)]/80 leading-relaxed mb-8 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                earum incidunt autem, impedit veniam fugit nisi nam hic cumque
                quidem ullam, aspernatur culpa. Similique eius earum qui
                perspiciatis accusantium ad ipsam libero, adipisci ex. Ipsam
                nisi dolore velit, aut dignissimos amet nulla incidunt adipisci
                praesentium quae vel, eligendi quisquam repellat suscipit eius
                alias minima tempora harum. Explicabo, labore? Fugiat, iste.
              </p>

              {/* CHECK LIST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  "Personalized Support",
                  "Health & Safety Focus",
                  "State-of-the-Art Techniques",
                  "Patient-Centered Approach",
                  "Proven Results",
                  "Affordable Cost",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-[var(--med-primary)] text-lg">✔</span>
                    <span className="text-[var(--med-text)] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Book Appointment"
              />
            </div>
          </div>
        </div>
      </section>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
