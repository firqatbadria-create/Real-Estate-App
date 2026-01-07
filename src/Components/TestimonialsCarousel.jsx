import React, { useMemo, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const demoTestimonials = [
  {
    id: 1,
    name: "Zahra Aljasim",
    rating: 5,
    text: "The team made my first home incredibly smooth. They were patient and helped me to buy my dream home.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Maryam Ahmady",
    rating: 5,
    text: "Fast responses, honest advice, and excellent support. I felt confident during the whole process.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Mohammad Ali",
    rating: 5,
    text: "Great service and professional agents. They showed me the best options and negotiated a good deal.",
    avatar:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Sara Noor",
    rating: 5,
    text: "From viewing to paperwork, everything was organized. Highly recommended for buying and selling.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
  },
];

function ArrowButton({ direction = "next", onClick }) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-12 w-12 rounded-full grid place-items-center transition",
        isPrev
          ? "bg-black text-white"
          : "bg-white text-black ring-1 ring-black/20",
        "hover:scale-[1.03]"
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

function SideCard({ person }) {
  // Fixed height & rounded corners like your UI
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-[26px] bg-gray-100">
      <img
        src={person.avatar}
        alt={person.name}
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
      {/* name overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="rounded-2xl bg-black/35 backdrop-blur-md px-4 py-3">
          <p className="text-white text-lg font-bold">{person.name}</p>
        </div>
      </div>
    </div>
  );
}

function CenterCard({ person }) {
  // FIXED HEIGHT to align with side cards area
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-[28px] bg-[#5a5858] text-white">
      <div className="grid h-full grid-cols-[200px_1fr] gap-6 p-6">
        {/* Left photo: fixed width & full height */}
        <div className="h-full overflow-hidden rounded-[22px] bg-white/10">
          <img
            src={person.avatar}
            alt={person.name}
            className="h-full w-50 object-center"
            loading="lazy"
          />
        </div>

        {/* Right text */}
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="text-5xl font-extrabold tracking-tight">
              [+{person.rating}]
            </div>

            <p className="mt-5 text-xl font-semibold leading-relaxed text-white/90">
              {person.text}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold">{person.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel({ testimonials }) {
  const data = testimonials?.length ? testimonials : demoTestimonials;
  const [index, setIndex] = useState(0);

  const prevIndex = useMemo(
    () => (index - 1 + data.length) % data.length,
    [index, data.length]
  );
  const nextIndex = useMemo(
    () => (index + 1) % data.length,
    [index, data.length]
  );

  const left = data[prevIndex];
  const center = data[index];
  const right = data[nextIndex];

  const goPrev = () => setIndex((i) => (i - 1 + data.length) % data.length);
  const goNext = () => setIndex((i) => (i + 1) % data.length);

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="inline-block border-b-4 border-sky-500 pb-1">
                What our Happy
              </span>
              <br />
              <span className="inline-block border-b-4 border-sky-500 pb-1">
                Client Say
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-right text-lg font-bold text-gray-900">
            Real stories from real Clients who found their dream homes with us
          </p>
        </div>

        {/* Layout like your UI */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-10 items-center">
          {/* Left card */}
          <div className="hidden lg:block">
            <SideCard person={left} />
          </div>

          {/* Center card */}
          <CenterCard person={center} />

          {/* Right column: buttons + card */}
          <div className="flex flex-col items-end gap-6">
            <div className="flex items-center gap-4">
              <ArrowButton direction="next" onClick={goNext} />
              <ArrowButton direction="prev" onClick={goPrev} />
            </div>

            <div className="hidden lg:block w-full">
              <SideCard person={right} />
            </div>
          </div>
        </div>

        {/* Mobile side cards (show below) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          <SideCard person={left} />
          <SideCard person={right} />
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {data.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                i === index ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
