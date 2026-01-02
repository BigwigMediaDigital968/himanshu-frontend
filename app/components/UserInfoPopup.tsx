"use client";
import { useEffect, useState } from "react";
import popup from "../assets/popup.png";

interface InfoItem {
  _id: string;
  title: string;
  description: string;
  images?: { url: string }[];
}

export default function UserInfoCarouselPopup() {
  const [infoList, setInfoList] = useState<InfoItem[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/info`);
        const data = await res.json();
        setInfoList(data.data || []);
      } catch (err) {
        setInfoList([]);
      }
    };
    fetchInfo();
  }, []);

  /* -----------------------------------------
     🔥 FALLBACK WHEN NO DATA
  ----------------------------------------- */
  if (infoList.length === 0) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={popup.src}
          alt="popup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    );
  }

  /* -----------------------------------------
     NORMAL FLOW
  ----------------------------------------- */
  const item = infoList[current];
  const heroImage = item.images?.[0]?.url;
  const hasMultiple = infoList.length > 1;

  const next = () => setCurrent((p) => (p === infoList.length - 1 ? 0 : p + 1));
  const prev = () => setCurrent((p) => (p === 0 ? infoList.length - 1 : p - 1));

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* FULL IMAGE */}
      {heroImage ? (
        <img
          src={heroImage}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[var(--med-light)]" />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col">
        {/* TITLE */}
        <div className="p-6">
          <h2 className="text-white text-xl font-semibold leading-tight">
            {item.title}
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="flex-1 px-6 flex items-center justify-center">
          <div className="max-h-full overflow-y-auto">
            <p className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
              {item.description}
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        {hasMultiple && (
          <div className="p-5 flex items-center justify-between">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center
                bg-white/20 text-white backdrop-blur
                hover:bg-white/30 transition"
            >
              ‹
            </button>

            <span className="text-xs text-white/80">
              {current + 1} / {infoList.length}
            </span>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center
                bg-white/20 text-white backdrop-blur
                hover:bg-white/30 transition"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
