import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...c) => c.filter(Boolean).join(" ");

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function LogoCard({ children }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -3, scale: 1.02 }}
      className={cn(
        "group flex h-20 items-center justify-center rounded-2xl px-5",
        "bg-white/0 hover:bg-white/5 ring-1 ring-white/0 hover:ring-white/10",
        "transition"
      )}
    >
      <div className="text-white/90 group-hover:text-white transition">
        {children}
      </div>
    </motion.div>
  );
}

/** Simple inline SVG “logos” (no external assets needed) */
function Utopia() {
  return (
    <span className="text-3xl font-extrabold tracking-widest">UTOSIA</span>
  );
}
function FoxHub() {
  return (
    <div className="flex items-center gap-3">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6l8 6 8-6v12H4V6z"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.9"
        />
      </svg>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-extrabold tracking-wide">FOX</span>
        <span className="text-lg font-semibold opacity-90">HUB</span>
      </div>
    </div>
  );
}
function Radiyal() {
  return (
    <div className="flex items-center gap-3">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3v18"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.9"
        />
        <path
          d="M3 12h18"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.9"
        />
        <path
          d="M6 6l12 12"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
      <span className="text-2xl font-semibold">Radiyal</span>
    </div>
  );
}
function UBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid place-items-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10">
        <span className="text-xl font-black">U</span>
      </div>
      <span className="text-2xl font-extrabold tracking-wider">UTOSIA</span>
    </div>
  );
}
function Goldline() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid place-items-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 18V6M12 18V8M17 18V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="text-2xl font-semibold">goldline</span>
    </div>
  );
}
function Am() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid place-items-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l2.2 5.6L20 11l-5.8 2.4L12 19l-2.2-5.6L4 11l5.8-2.4L12 3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-2xl font-semibold">am</span>
    </div>
  );
}

/** slides array (you can add more logos here) */
const slides = [
  { id: "utosia1", node: <Utopia /> },
  { id: "foxhub", node: <FoxHub /> },
  { id: "radiyal", node: <Radiyal /> },
  { id: "utosia2", node: <UBadge /> },
  { id: "goldline", node: <Goldline /> },
  { id: "am", node: <Am /> },
];

// Decide how many logos per page based on screen size
function usePerView() {
  const [perView, setPerView] = useState(6);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return 2; // mobile
      if (w < 768) return 3; // sm
      if (w < 1024) return 4; // md
      return 6; // lg+
    };
    const onResize = () => setPerView(calc());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return perView;
}

export default function TrustedCarousel() {
  const perView = usePerView();
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < slides.length; i += perView) {
      chunks.push(slides.slice(i, i + perView));
    }
    return chunks.length ? chunks : [slides];
  }, [perView]);

  const maxPage = pages.length - 1;

  const next = () => setPage((p) => (p >= maxPage ? 0 : p + 1));
  const prev = () => setPage((p) => (p <= 0 ? maxPage : p - 1));

  // Auto play
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3000);
    return () => clearInterval(timerRef.current);
  }, [paused, maxPage]);

  // Drag (swipe)
  const dragThreshold = 80;

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b1e] via-[#0a1a3a] to-[#1a3cff]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_10%_30%,rgba(255,255,255,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_20%,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-white/90 font-semibold text-xl sm:text-2xl">
            Trusted by companies around the world
          </p>
        </motion.div>

        {/* Carousel box */}
        <div
          className="relative mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Buttons */}
          <button
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-2xl bg-white/10 p-3 text-white hover:bg-white/15 ring-1 ring-white/10 transition hidden sm:inline-flex"
            aria-label="Previous"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-2xl bg-white/10 p-3 text-white hover:bg-white/15 ring-1 ring-white/10 transition hidden sm:inline-flex"
            aria-label="Next"
          >
            →
          </button>

          {/* Slide viewport */}
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/0">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                className={cn(
                  "grid gap-4 p-4 sm:p-5",
                  // responsive grid, but also matches perView chunk sizes
                  "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                )}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -dragThreshold) next();
                  if (info.offset.x > dragThreshold) prev();
                }}
              >
                {pages[page].map((s) => (
                  <LogoCard key={s.id}>{s.node}</LogoCard>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={cn(
                  "h-2.5 rounded-full transition",
                  i === page
                    ? "w-8 bg-white/80"
                    : "w-2.5 bg-white/30 hover:bg-white/45"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
