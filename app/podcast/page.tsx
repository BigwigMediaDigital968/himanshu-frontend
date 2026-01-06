"use client";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";
import FloatingContactActions from "../components/ContactActions";

import AOS from "aos";
import "aos/dist/aos.css";
import FinalCTA from "../components/CTA";

/* ------------------------------------
   PODCAST DATA TYPE
------------------------------------ */
type Podcast = {
  title: string;
  desc?: string;
  youtubeId?: string; // ONLY video ID
  videoSrc?: string; // local / CDN video
};

/* ------------------------------------
   PODCAST DATA
------------------------------------ */
const podcasts: Podcast[] = [
  {
    title:
      "Doc Talk Ep 10 – Your Baby’s First Guardian Angel | Dr Himanshu Verma x Dr Megha Consul",
    youtubeId: "pefBKwpqhzQ",
  },
  {
    title:
      "Doc Talk Ep. 9 | Before It’s Too Late | Preventing Heart Disease with Dr. Anshul K. Gupta",
    youtubeId: "FxDR9wlRvcU",
  },
  {
    title:
      "DocTalk Ep. 8 | It’s Okay Not To Be Okay | Understanding Mental Health with Dr. Sameer Kalani",
    youtubeId: "TTRE-TCZKvk",
  },
  {
    title:
      "Doc Talk Ep. 7 | Saving Hearts, Saving Lives | Cardiac Surgery with Dr. Mahesh Wadhwani",
    youtubeId: "RY2osYwyyow",
  },
  {
    title:
      "DocTalk Ep. 6 | Saving Smiles | Understanding Root Canal Treatment with Dr. Rabbpreet Kaur",
    youtubeId: "5jYkk4ik4Ns",
  },
  {
    title:
      "DocTalk Ep. 5 | Beyond the White Coat | Leadership in Healthcare with Dr. (Major) Rahul Prashad",
    youtubeId: "SUAkrDTXrpE",
  },
  {
    title:
      "Doc Talk Ep. 4 | When Every Second Counts | Inside Trauma Surgery with Dr. Shashi Prakash Mishra",
    youtubeId: "6SKkhj_dSmk",
  },
  {
    title:
      "Doc Talk Ep. 3 | Rebuilding with Precision | Plastic & Microvascular Surgery with Dr. Amitabh Singh",
    youtubeId: "i2wUFisbG5g",
  },
  {
    title:
      "DocTalk Ep. 2 | Caring for Little Hearts | Pediatric Cardiac Care with Dr. Deepak Thakur",
    youtubeId: "Q81ekTCUATQ",
  },
  {
    title:
      "Doc Talk Ep. 1 | Beyond the Diagnosis | Cancer Surgery & Early Detection with Dr. Vedant Kabra",
    youtubeId: "N2tCFOLKnFw",
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
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
              "
            >
              {/* VIDEO */}
              <div className="aspect-video overflow-hidden bg-black">
                {podcast.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${podcast.youtubeId}`}
                    title={podcast.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="
                      w-full h-full
                      transition-transform
                      duration-500
                      group-hover:scale-[1.06]
                    "
                  />
                ) : (
                  <video
                    src={podcast.videoSrc}
                    controls
                    preload="metadata"
                    className="
                      w-full h-full
                      object-cover
                    "
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-snug">
                  {podcast.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
      <Footer />

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}
