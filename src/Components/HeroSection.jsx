import React from "react";
import { motion } from "framer-motion";

const cn = (...c) => c.filter(Boolean).join(" ");

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const floaty = (delay = 0) => ({
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay },
  },
});

function Card({ className, children, delay = 0 }) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl bg-white shadow-2xl shadow-black/20 ring-1 ring-black/5",
        className
      )}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      whileHover={{ y: -6, rotate: -0.4 }}
      whileTap={{ scale: 0.99 }}
      {...floaty(delay)}
    >
      {children}
    </motion.div>
  );
}

function Pill() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={fadeUp}
      className="inline-flex items-center gap-2 rounded-4 bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur border-"
    >
      Introducing Saatosa
    </motion.div>
  );
}

function BarChart() {
  const bars = [28, 55, 22, 66, 48, 24, 33];
  return (
    <div className="mt-6">
      <div className="flex items-end gap-2 h-24">
        {bars.map((h, idx) => (
          <motion.div
            key={idx}
            className="w-8 rounded-xl bg-[#2f8cff]"
            initial={{ height: 0, opacity: 0.7 }}
            whileInView={{ height: `${h}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1 + idx * 0.06,
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>Today</span>
      </div>
    </div>
  );
}

function MiniLine() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-900">Average time</span>
        <span className="text-gray-500">steps</span>
      </div>

      <div className="mt-3 h-20 overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 to-white">
        <svg viewBox="0 0 300 80" className="h-full w-full">
          <path
            d="M0,45 C25,20 55,55 80,35 C110,10 135,60 160,30 C190,5 215,50 240,25 C265,5 285,45 300,20"
            fill="none"
            stroke="#2f8cff"
            strokeWidth="3"
          />
          <path
            d="M0,45 C25,20 55,55 80,35 C110,10 135,60 160,30 C190,5 215,50 240,25 C265,5 285,45 300,20 L300,80 L0,80 Z"
            fill="rgba(47,140,255,0.18)"
          />
        </svg>
      </div>

      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-gray-900">
            Set Daily Reminder
          </div>
          <div className="text-xs text-gray-500">
            Reminder after you reached
          </div>
        </div>
        <div className="h-7 w-12 rounded-full bg-gray-200 p-1">
          <div className="h-5 w-5 rounded-full bg-white shadow" />
        </div>
      </div>
    </div>
  );
}

function Donut() {
  return (
    <div className="relative mx-auto mt-3 grid place-items-center">
      <svg width="210" height="210" viewBox="0 0 210 210" className="block">
        <circle
          cx="105"
          cy="105"
          r="82"
          stroke="#eaf2ff"
          strokeWidth="18"
          fill="none"
        />
        <motion.circle
          cx="105"
          cy="105"
          r="82"
          stroke="#2f8cff"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 82}
          strokeDashoffset={2 * Math.PI * 82}
          initial={{ strokeDashoffset: 2 * Math.PI * 82 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 82 * 0.35 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          transform="rotate(-90 105 105)"
        />
        <motion.circle
          cx="105"
          cy="105"
          r="82"
          stroke="#18d0ff"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 82}
          strokeDashoffset={2 * Math.PI * 82}
          initial={{ strokeDashoffset: 2 * Math.PI * 82 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 82 * 0.58 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.15 }}
          transform="rotate(-90 105 105)"
          opacity="0.85"
        />
      </svg>

      <div className="absolute inset-0 grid place-items-center text-center">
        <div className="text-2xl font-extrabold text-gray-900">45623</div>
        <div className="text-sm text-gray-500">visitors this month</div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background (HEX gradient like screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b1e] via-[#0a1a3a] to-[#1a3cff]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_20%,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,rgba(59,130,246,0.22),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Pill />

            <motion.h1
              className="mt-6 text-white font-abold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.55 }}
              variants={fadeUp}
              custom={1}
            >
              Ultimate Guide to <br /> the Right Tool
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-white/75 text-base sm:text-lg"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.55 }}
              variants={fadeUp}
              custom={2}
            >
              Transform the way you manage customer relationships with our
              AI-powered CRM platform.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.55 }}
              variants={fadeUp}
              custom={3}
            >
              <button className="inline-flex items-center gap-2 rounded-1xl bg-[#2f8cff] px-6 py-3 text-white font-semibold shadow-lg shadow-black/20 hover:bg-[#2576d6] transition">
                Try 14-days Free Trial <span aria-hidden="true">↗</span>
              </button>

              <div className="flex items-center gap-6 text-white/75 text-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="grid place-items-center h-5 w-5 rounded-full border-1 bg-white/10 ring-1 ring-white/10">
                    ✓
                  </span>
                  No credit card required
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="grid place-items-center h-5 w-5 rounded-full border-1 bg-white/10 ring-1 ring-white/10">
                    ★
                  </span>
                  4.8(520+) Reviews
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative h-[400px] sm:h-[500px]">
            {/* Big card (donut) */}
            <Card
              className="absolute right-0 top-40 w-[90%] sm:w-[80%] p-7"
              delay={0.12}
            >
              <Donut />
              <div className="mt-5">
                <div className="text-lg font-semibold text-gray-900">
                  You are doing good!
                </div>
                <div className="text-sm text-gray-500">
                  You almost reached your goal
                </div>
              </div>
            </Card>

            {/* Top card */}
            <Card
              className="absolute left-10 top-0 w-[68%] sm:w-[52%] p-6"
              delay={0.05}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-gray-900">
                    2h 20m
                  </div>
                  <div className="mt-1 ml-20 text-sm text-gray-500">
                    Average time you spent per day
                  </div>
                </div>
                <div className="text-[#2f8cff] font-bold">↓</div>
              </div>
              <BarChart />
            </Card>

            {/* Mini card */}
            <Card
              className="absolute left-0 bottom-6 w-[54%] sm:w-[48%] p-6"
              delay={0.2}
            >
              <MiniLine />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
