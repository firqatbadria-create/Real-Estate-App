import React, { useEffect, useMemo, useRef, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const demoItems = [
  {
    id: 1,
    price: "40.00$",
    beds: 2,
    baths: 1,
    size: 200,
    location: "Location, Dubai, 4th street",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    price: "900.000$",
    beds: 3,
    baths: 3,
    size: 200,
    location: "Location, Dubai, 4th street",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    price: "30.000$",
    beds: 2,
    baths: 2,
    size: 200,
    location: "Location, Dubai, 4th street",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 4,
    price: "120.000$",
    beds: 4,
    baths: 3,
    size: 320,
    location: "Location, Dubai, 7th street",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9b78825?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    price: "75.000$",
    beds: 3,
    baths: 2,
    size: 180,
    location: "Location, Dubai, 9th street",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    price: "75.000$",
    beds: 3,
    baths: 2,
    size: 180,
    location: "Location, Dubai, 9th street",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
  },
];

function ArrowButton({ direction = "next", onClick, disabled }) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-12 w-12 rounded-full grid place-items-center transition",
        isPrev
          ? "bg-black text-white"
          : "bg-white text-black ring-1 ring-black/20",
        disabled && "opacity-60 cursor-not-allowed"
      )}
      aria-label={isPrev ? "Previous" : "Next"}
      type="button"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isPrev ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

function PropertyCard({ item }) {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-gray-100 shadow-sm">
      {/* image */}
      <img
        src={item.img}
        alt={item.location}
        className="h-[340px] w-[full] object-cover"
        loading="lazy"
      />

      {/* bottom glass info */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="rounded-2xl bg-black/35 backdrop-blur-md px-5 py-3 text-white">
          <div className="text-1xl font-bold">{item.price}</div>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-white/90">
            <span>{item.beds}bed</span>
            <span>{item.baths}bath</span>
            <span>{item.size}sq²</span>
          </div>
          <div className="mt-1 text-sm font-semibold text-white/85">
            {item.location}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Props:
 * - items?: array of property objects (same shape as demoItems)
 * - autoPlay?: boolean
 * - intervalMs?: number
 */
export default function PopularCarousel({
  items,
  autoPlay = false,
  intervalMs = 4500,
}) {
  const data = items?.length ? items : demoItems;

  // responsive cards per view
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // compute max index so we don't overflow
  const maxIndex = useMemo(() => {
    return Math.max(0, data.length - perView);
  }, [data.length, perView]);

  // update perView based on screen width
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // keep index valid when perView changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // autoplay optional
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, intervalMs);
    return () => clearInterval(t);
  }, [autoPlay, intervalMs, maxIndex]);

  // translate logic
  // Each card is 100/perView %, so moving by (index * that %) shifts one card
  const translatePct = (index * 100) / perView;

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Popular in Your Area
            </h2>
          </div>

          <div className="flex flex-col items-end gap-4">
            <p className="text-lg font-bold text-gray-900">
              The most viewed houses in past week
            </p>

            <div className="flex items-center gap-4">
              <ArrowButton
                direction="next"
                onClick={next}
                disabled={index >= maxIndex}
              />
              <ArrowButton
                direction="prev"
                onClick={prev}
                disabled={index <= 0}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${translatePct}%)`,
              }}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "shrink-0",
                    perView === 1 && "w-full",
                    perView === 2 && "w-[calc(50%-16px)]",
                    perView === 3 && "w-[calc(33.333%-21.33px)]"
                  )}
                >
                  <PropertyCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots (optional) */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  i === index ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
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
