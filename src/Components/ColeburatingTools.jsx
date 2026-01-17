import React from "react";
import Colimg from "../Components//images/yewmaymTi5GDV7YRiWVHnnTP4c.avif";

const cn = (...c) => c.filter(Boolean).join(" ");

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 0 1.415l-7.25 7.25a1 1 0 0 1-1.415 0l-3.25-3.25a1 1 0 1 1 1.414-1.415l2.543 2.543 6.543-6.543a1 1 0 0 1 1.415 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ScoreGauge({ value = 70 }) {
  // semicircle gauge
  const radius = 64;
  const cx = 80;
  const cy = 80;
  const startX = cx - radius;
  const startY = cy;
  const endX = cx + radius;
  const endY = cy;

  // map 0..100 to 0..180 degrees
  const angle = (Math.max(0, Math.min(100, value)) / 100) * Math.PI;
  const needleLen = 58;
  const nx = cx + Math.cos(Math.PI - angle) * needleLen;
  const ny = cy - Math.sin(Math.PI - angle) * needleLen;

  // progress arc (from left -> value)
  const progEndX = cx + Math.cos(Math.PI - angle) * radius;
  const progEndY = cy - Math.sin(Math.PI - angle) * radius;

  const largeArc = value > 50 ? 1 : 0;

  return (
    <div className="w-full">
      <div className="mx-auto w-[260px] sm:w-[300px]">
        <h4 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900">
          Riz’s Score
        </h4>

        <div className="mt-3 rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] ring-1 ring-black/5">
          <svg width="100%" viewBox="0 0 160 120" className="block">
            {/* background arc */}
            <path
              d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
              stroke="#dbeafe"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
            />
            {/* progress arc */}
            <path
              d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 1 ${progEndX} ${progEndY}`}
              stroke="#2f8df0"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
            />
            {/* needle */}
            <line
              x1={cx}
              y1={cy}
              x2={nx}
              y2={ny}
              stroke="#2f8df0"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx={cx} cy={cy} r="5" fill="#2f8df0" />
          </svg>

          <div className="text-center -mt-3">
            <div className="text-4xl font-extrabold text-slate-900">
              {value}
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Here are some tips on how to
              <br />
              improve your score
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollaborationSection() {
  const bullets = [
    "User-Friendly Interface for Effortless Navigation",
    "Customizable Dashboards Tailored to Your Needs",
    "Flexible Pricing Plans to Fit Any Budget",
  ];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Image + floating score card */}
          <div className="relative">
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl",
                "shadow-[0_18px_45px_rgba(15,23,42,0.15)] ring-1 ring-black/5"
              )}
            >
              {/* Replace src with your real image */}
              <img
                src={Colimg}
                alt="Team collaboration"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
            </div>

            {/* Floating score card */}
            <div className="pointer-events-none absolute ml-50 left-1/2 top-[54%] w-full -translate-x-1/2 -translate-y-1/2 sm:top-[55%] mt-5">
              <div className="mx-auto w-[72%] sm:w-[58%] md:w-[70%] lg:w-[70%]">
                <ScoreGauge value={70} />
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="md:pl-4 pt-5">
            <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Collaboration Tools for
              <br />
              Productivity
            </h2>

            <p className="mt-5 max-w-xl text-slate-600 leading-relaxed">
              Collaboration Tools for Team Productivity are designed to enable
              seamless communication and cooperation among team members, matter
              where they are located. In a SaaS platform, these tools
            </p>

            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2f8df0] text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-slate-900 font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-xl",
                  "bg-[#2f8df0] px-7 py-4 text-white font-bold",
                  "shadow-[0_10px_25px_rgba(47,141,240,0.35)]",
                  "hover:brightness-110 transition"
                )}
              >
                Start 14-days Free Trial <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
