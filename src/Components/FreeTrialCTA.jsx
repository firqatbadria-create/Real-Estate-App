import React from "react";

export default function FreeTrialCTA() {
  return (
    <section className="px-4 py-14">
      <div
        className="
          relative mx-auto max-w-7xl overflow-hidden rounded-3xl
          bg-gradient-to-r from-[#0b0f14] via-[#1b2a7a] to-[#3aa9ff]
          p-10 lg:p-16
        "
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="inline-block rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold">
              Get Started
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight lg:text-5xl">
              Ready To Get 14 days of <br /> free Trail!
            </h2>

            <p className="mt-6 max-w-md text-white/80">
              The financial reports and insights have given me a much clearer
              picture of my spending habits.
            </p>

            <button
              className="
                mt-8 inline-flex items-center gap-2 rounded-xl
                bg-[#3aa9ff] px-7 py-4 font-bold text-white
                transition hover:bg-[#2f8fe0]
              "
            >
              Start 14-days Free Trial
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="relative flex justify-center lg:justify-end">
            {/* MAIN CARD */}
            <div className="relative z-10 w-72 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center justify-center">
                <div className="relative h-40 w-40 rounded-full border-[14px] border-[#e6f2ff]">
                  <div className="absolute inset-0 rounded-full border-[14px] border-t-[#3aa9ff] border-r-[#2f8fe0] border-b-[#4f46e5] z-50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-slate-900">
                      45623
                    </span>
                    <span className="text-sm text-slate-500">
                      visitors this month
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center font-bold text-slate-900">
                You are doing good!
              </p>
              <p className="text-center text-sm text-slate-500">
                You almost reached your goal
              </p>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 w-64 rounded-2xl bg-white p-5 shadow-xl ml-20 mt-40 z-50">
              <p className="text-xl font-bold text-slate-900">2h 20m</p>
              <p className="text-sm text-slate-500">
                Average time you spent per day
              </p>

              <div className="mt-4 flex items-end gap-2">
                {[40, 70, 30, 90, 65, 35, 50].map((h, i) => (
                  <div
                    key={i}
                    className="w-6 rounded-md bg-[#3aa9ff]"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
