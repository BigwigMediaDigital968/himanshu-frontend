"use client";
import { useEffect, useState } from "react";

interface InfoItem {
  _id: string;
  title: string;
  description: string;
  images?: { url: string }[];
}

export default function UserInfoCarouselPopup() {
  const [open, setOpen] = useState(false);
  const [infoList, setInfoList] = useState<InfoItem[]>([]);
  const [current, setCurrent] = useState(0);

  // Open popup after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Fetch info
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/info`);
        const data = await res.json();
        setInfoList(data.data || []);
      } catch (err) {
        console.error("Failed to fetch info");
      }
    };
    fetchInfo();
  }, []);

  if (!open || infoList.length === 0) return null;

  const item = infoList[current];
  const hasMultiple = infoList.length > 1;

  const next = () => {
    setCurrent((p) => (p === infoList.length - 1 ? 0 : p + 1));
  };

  const prev = () => {
    setCurrent((p) => (p === 0 ? infoList.length - 1 : p - 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="relative bg-white rounded-2xl max-w-md w-full h-[70vh] shadow-lg flex flex-col border border-[var(--med-border)]">
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
          rounded-full bg-[var(--med-light)] text-[var(--med-text)]
          hover:bg-[var(--med-border)] transition z-10"
        >
          ✕
        </button>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* TITLE */}
          <h2 className="text-xl font-bold text-center text-[var(--med-text)]">
            {item.title}
          </h2>

          {/* IMAGES */}
          {item.images && item.images.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt="info"
                  className="h-40 w-full object-cover rounded-xl border border-[var(--med-border)]"
                />
              ))}
            </div>
          )}

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed break-words whitespace-pre-wrap text-[var(--med-text)]">
            {item.description}
          </p>
        </div>

        {/* NAVIGATION – only if multiple */}
        {hasMultiple && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[var(--med-border)] bg-[var(--med-light)]">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center
              bg-[var(--med-primary)] text-white
              hover:bg-[var(--med-primary-dark)] transition"
            >
              ‹
            </button>

            <span className="text-xs text-[var(--med-text)]">
              {current + 1} of {infoList.length}
            </span>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center
              bg-[var(--med-primary)] text-white
              hover:bg-[var(--med-primary-dark)] transition"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
