import React from "react";
import { motion } from "framer-motion";

const cn = (...c) => c.filter(Boolean).join(" ");

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const floaty = (delay = 0) => ({
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
  },
});

function Pill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto inline-flex items-center rounded-xl bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-200"
    >
      Core Features
    </motion.div>
  );
}

function PrimaryButton({ children }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="rounded-2xl bg-sky-500 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition"
    >
      {children}
    </motion.button>
  );
}

function Tag({ label, className }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm",
        className
      )}
    >
      {label}
    </motion.span>
  );
}

function CardShell({ className, children, delay = 0.05 }) {
  return (
    <motion.div
      variants={cardIn}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-xl",
        className
      )}
      {...floaty(delay)}
    >
      {children}
    </motion.div>
  );
}

function DottedGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 80H540M60 160H540M60 240H540M60 320H540M60 400H540M60 480H540"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="6 10"
      />
      <path
        d="M100 60V540M200 60V540M300 60V540M400 60V540M500 60V540"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="6 10"
      />
    </svg>
  );
}

function AvatarRow() {
  const people = [
    { id: 1, bg: "bg-[#c9b18a]" },
    { id: 2, bg: "bg-[#d28a7c]" },
    { id: 3, bg: "bg-[#7a8796]" },
    { id: 4, bg: "bg-[#cfcfd6]" },
  ];
  return (
    <div className="flex items-center justify-center gap-3">
      {people.map((p, idx) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15 + idx * 0.08,
            duration: 0.5,
            ease: "easeOut",
          }}
          className={cn(
            "h-14 w-14 rounded-full ring-4 ring-white shadow-md",
            p.bg
          )}
          title="Customer"
        />
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Heading */}
        <div className="text-center">
          <Pill />

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Advanced Security Features
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            SaaS (Software as a Service) website provides businesses with
            cloud-based solutions that streamline operations, enhance
            productivity, and reduce the need.
          </motion.p>

          <div className="mt-7 flex justify-center">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {/* Card 1 (Dark) */}
          <CardShell
            className="bg-[#0b0f14] text-white min-h-[420px]"
            delay={0.05}
          >
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_20%,rgba(59,130,246,0.25),transparent_60%)]" />
            <DottedGrid />

            <div className="relative p-8">
              <h3 className="text-2xl font-extrabold leading-tight">
                AI for smarter customer <br /> management
              </h3>

              {/* tags / nodes */}
              <div className="mt-16 grid place-items-center">
                <div className="relative h-56 w-full max-w-[320px]">
                  {/* Cross lines */}
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15" />
                  <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/15" />
                  <div className="absolute inset-6 rounded-3xl border border-white/10" />

                  <div className="absolute left-1/2 top-3 -translate-x-1/2">
                    <Tag
                      label="HR Management"
                      className="bg-emerald-400/90 text-emerald-950"
                    />
                  </div>

                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Tag
                      label="Technology"
                      className="bg-blue-500/90 text-white"
                    />
                  </div>

                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Tag
                      label="Business"
                      className="bg-rose-500/90 text-white"
                    />
                  </div>

                  <div className="absolute left-1/2 bottom-5 -translate-x-1/2">
                    <Tag
                      label="Healthcare"
                      className="bg-white text-slate-900"
                    />
                  </div>

                  <div className="absolute right-10 bottom-2">
                    <Tag
                      label="Light LMS"
                      className="bg-amber-300 text-amber-950"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardShell>

          {/* Card 2 (Light gray) */}
          <CardShell
            className="bg-slate-100 text-slate-900 min-h-[420px]"
            delay={0.12}
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_60%_20%,rgba(59,130,246,0.15),transparent_65%)]" />

            <div className="relative p-8 flex flex-col h-full">
              <h3 className="text-2xl font-extrabold leading-tight">
                Customer relationships <br /> with intelligent CRM
              </h3>

              <div className="mt-12">
                <AvatarRow />
              </div>

              <div className="mt-auto pt-10 text-center">
                <p className="text-slate-500 text-lg">
                  We have more than{" "}
                  <span className="font-semibold text-slate-700">5m+</span>
                  <br />
                  global customer
                </p>
              </div>
            </div>
          </CardShell>

          {/* Card 3 (Blue rating) */}
          <CardShell
            className="bg-[#3192f6] text-white min-h-[420px]"
            delay={0.18}
          >
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_20%,rgba(255,255,255,0.22),transparent_60%)]" />
            <DottedGrid />

            <div className="relative p-8 flex flex-col h-full">
              <h3 className="text-2xl font-extrabold leading-tight text-center">
                99% Customer are <br /> happy to build
              </h3>

              <div className="mt-14 flex items-center justify-between px-6">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="rounded-full bg-white px-6 py-2 font-semibold text-slate-900 shadow"
                >
                  Linked
                </motion.span>

                <motion.span
                  whileHover={{ y: -2 }}
                  className="rounded-full bg-white px-6 py-2 font-semibold text-slate-900 shadow inline-flex items-center gap-2"
                >
                  <span className="text-sky-600">★</span> Trustp
                </motion.span>
              </div>

              <div className="mt-auto pb-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mx-auto w-full max-w-sm"
                >
                  <div className="text-7xl font-extrabold leading-none">
                    4.8
                  </div>
                  <div className="mt-2 text-lg text-white/90">
                    <span className="font-semibold">563k+</span> Reviews
                  </div>
                </motion.div>
              </div>
            </div>
          </CardShell>
        </motion.div>
      </div>
    </section>
  );
}
