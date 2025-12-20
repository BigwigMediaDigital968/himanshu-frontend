"use client";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingContactActions from "../components/ContactActions";

const podcasts = [
  {
    title:
      "Doc Talk Ep 10 – Your Baby’s First Guardian Angel | Dr Himanshu Verma x Dr Megha Consul",
    youtubeId: "pefBKwpqhzQ?si=s0TR9fsp5cvDZuzy",
    desc: "Expert discussion on common vascular conditions and early symptoms.",
  },
  {
    title: "Doc Talk Ep. 9 | Every Beat Matters | Don’t Wait for the Pain",
    youtubeId: "FxDR9wlRvcU?si=plX8Zx88phwBEjh_&pieshare=1",
    desc: "How modern minimally invasive procedures improve patient outcomes.",
  },
  {
    title:
      "DocTalk Ep. 8 | It’s Okay Not To Be Okay | Understanding Mental Health with Dr. Sameer Kalani",
    youtubeId: "TTRE-TCZKvk?si=1vNvVIM2UYshDmN6&pieshare=1",
    desc: "Key signs, prevention tips, and patient awareness.",
  },
];

export default function Podcast() {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Nav />

      {/* HERO */}
      <section className="py-16 bg-[#64bab4] rounded-r-full">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
            Medical Knowledge & Awareness
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
            Medical Podcast Series
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Expert discussions, patient awareness talks, and insights on
            vascular and endovascular health.
          </p>
        </div>
      </section>

      {/* PODCAST GRID */}
      <section className="py-24 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="
                        group
                        rounded-2xl
                        overflow-hidden
                        border
                        bg-white
                        shadow-md
                        transition-all
                        duration-500
                        ease-out
                        transform
                        hover:-translate-y-3
                        hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                    "
            >
              {/* Video */}
              <div className="aspect-video overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.youtubeId}`}
                  title={podcast.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="
                            w-full h-full
                            transition-transform
                            duration-500
                            group-hover:scale-[1.06]
                            "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{podcast.title}</h3>
                {/* <p className="text-gray-600 text-sm">{podcast.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}
