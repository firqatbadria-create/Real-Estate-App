import React from "react";
import Rmboimg from "../components/images//img-in.avif";

const cn = (...c) => c.filter(Boolean).join(" ");

function Star({ filled = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 2.7l2.9 6.2 6.8.6-5.1 4.4 1.6 6.6L12 17.9 5.8 20.5l1.6-6.6-5.1-4.4 6.8-.6L12 2.7z" />
    </svg>
  );
}

function StarBox({ filled = true }) {
  return (
    <span
      className={cn(
        "grid h-9 w-9 place-items-center rounded-md",
        filled ? "bg-sky-500 text-white" : "bg-slate-200 text-slate-400"
      )}
    >
      <Star filled={filled} />
    </span>
  );
}

export default function TestimonialSplit() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Card wrapper */}
        <div className="relative overflow-visible rounded-3xl bg-[#081B2D]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left content */}
            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
              {/* Big curved shape */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[72%] rounded-[2.2rem] bg-white/10 opacity-25 blur-[0px]" />
              <div className="pointer-events-none absolute -left-20 top-20 h-[520px] w-[520px] rounded-full bg-white/10 opacity-20" />

              <div className="relative">
                {/* Header row */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Avatar"
                    className="h-14 w-14 rounded-full ring-2 ring-white/25"
                  />
                  <div>
                    <p className="text-xl font-extrabold text-white">
                      Dennis J. Lester
                    </p>
                    <p className="text-white/80 font-semibold">
                      CEO &amp; Founder
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-white/90 font-semibold">
                  The financial reports and insights have given me a much
                  clearer picture of my spending habits. I used to think I was
                  budgeting properly, but this platform helped me identify areas
                  where I could save more. It&#39;s a game-changer.
                </p>

                {/* Stars + rating */}
                <div className="mt-10 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <StarBox filled />
                    <StarBox filled />
                    <StarBox filled />
                    <StarBox filled />
                    <StarBox filled />
                  </div>
                </div>

                <p className="mt-4 text-white/90 text-lg font-bold">
                  4.7/5 on Trustp
                </p>
              </div>
            </div>

            {/* Right image */}
            <div className="relative px-6 pb-10 lg:px-10 lg:pb-0">
              {/* Make the image card “float” a bit upward like your screenshot */}
              <div className="relative -mt-10 lg:-mt-16">
                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/10">
                  <img
                    src={Rmboimg}
                    alt="Office"
                    className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                  />
                  {/* subtle dark overlay at bottom for depth */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Outer padding effect */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
