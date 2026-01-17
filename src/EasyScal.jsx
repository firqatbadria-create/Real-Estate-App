import React, { useMemo, useState } from "react";

const cn = (...c) => c.filter(Boolean).join(" ");

const PLANS = [
  {
    id: "regular",
    name: "Regular Plan",
    tagline: "Free for personal use",
    monthly: 12,
    yearly: 120, // example (10 months price)
    featured: false,
    features: [
      { text: "3 Limited sites available", ok: true },
      { text: "2 GB storage per site", ok: true },
      { text: "Up to 7 pages per site", ok: true },
      { text: "Free SSL for custom domain", ok: false },
      { text: "Connect custom domain", ok: false },
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",
    tagline: "For startups, billed monthly",
    monthly: 19,
    yearly: 190,
    featured: true,
    features: [
      { text: "7 Limited sites available", ok: true },
      { text: "7 GB storage per site", ok: true },
      { text: "Up to 20 pages per site", ok: true },
      { text: "Free SSL for custom domain", ok: true },
      { text: "Connect custom domain", ok: false },
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    tagline: "For scaling, billed monthly",
    monthly: 35,
    yearly: 350,
    featured: false,
    features: [
      { text: "15 Limited sites available", ok: true },
      { text: "15 GB storage per site", ok: true },
      { text: "Up to 30 pages per site", ok: true },
      { text: "Free SSL for custom domain", ok: true },
      { text: "Connect custom domain", ok: true },
    ],
  },
];

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

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 5.22a.75.75 0 0 1 1.06 0L10 8.94l3.72-3.72a.75.75 0 1 1 1.06 1.06L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06L8.94 10 5.22 6.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Pill({ children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-1.5 text-sm font-semibold",
        "bg-white/10 text-white ring-1 ring-white/15 backdrop-blur"
      )}
    >
      {children}
    </span>
  );
}

function Toggle({ value, onChange }) {
  // value: "monthly" | "yearly"
  const yearly = value === "yearly";

  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={cn(
          "text-sm font-semibold",
          yearly ? "text-white/70" : "text-white"
        )}
      >
        Monthly
      </span>

      <button
        type="button"
        onClick={() => onChange(yearly ? "monthly" : "yearly")}
        className={cn(
          "relative inline-flex h-9 w-16 items-center rounded-full transition",
          "bg-white/15 ring-1 ring-white/20"
        )}
        aria-label="Toggle billing period"
        aria-pressed={yearly}
      >
        <span
          className={cn(
            "inline-block h-7 w-7 rounded-full bg-white shadow transition-transform",
            yearly ? "translate-x-8" : "translate-x-1"
          )}
        />
      </button>

      <span
        className={cn(
          "text-sm font-semibold",
          yearly ? "text-white" : "text-white/70"
        )}
      >
        Yearly
      </span>
    </div>
  );
}

function Price({ amount, period, featured }) {
  return (
    <div className="flex items-end gap-2">
      <div
        className={cn(
          "text-5xl font-extrabold tracking-tight",
          featured ? "text-white" : "text-slate-900"
        )}
      >
        ${amount.toFixed(2)}
      </div>
      <div
        className={cn(
          "pb-2 text-sm",
          featured ? "text-white/85" : "text-slate-600"
        )}
      >
        / Per {period}
      </div>
    </div>
  );
}

function PlanCard({ plan, period, selected, onSelect }) {
  const featured = plan.featured;

  const amount = period === "yearly" ? plan.yearly : plan.monthly;
  const perText = period === "yearly" ? "year" : "month";

  return (
    <div
      className={cn(
        "relative rounded-2xl p-7 sm:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
        featured ? "bg-[#2f8df0] text-white" : "bg-white text-slate-900",
        selected && !featured && "ring-2 ring-black/10",
        selected && featured && "ring-2 ring-white/40"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className={cn(
              "text-xl font-extrabold",
              featured ? "text-white" : "text-slate-900"
            )}
          >
            {plan.name}
          </h3>
        </div>

        {featured && (
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold ring-1 ring-white/20">
            Popular
          </span>
        )}
      </div>

      <div className="mt-4">
        <Price amount={amount} period={perText} featured={featured} />
      </div>

      <div
        className={cn(
          "mt-6 border-t",
          featured ? "border-white/20" : "border-slate-200"
        )}
      />

      <p
        className={cn(
          "mt-6 text-sm",
          featured ? "text-white/90" : "text-slate-600"
        )}
      >
        {plan.tagline}
      </p>

      <ul className="mt-6 space-y-4">
        {plan.features.map((f) => (
          <li key={f.text} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5",
                f.ok
                  ? featured
                    ? "text-white"
                    : "text-slate-900"
                  : featured
                  ? "text-white/55"
                  : "text-slate-400"
              )}
              aria-hidden="true"
            >
              {f.ok ? <CheckIcon /> : <XIcon />}
            </span>
            <span
              className={cn(
                "text-sm",
                featured
                  ? f.ok
                    ? "text-white"
                    : "text-white/60"
                  : f.ok
                  ? "text-slate-700"
                  : "text-slate-400"
              )}
            >
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onSelect(plan.id)}
        className={cn(
          "mt-8 w-full rounded-xl px-5 py-3 text-sm font-bold transition flex items-center justify-center gap-2",
          featured
            ? "bg-white text-slate-900 hover:bg-white/90"
            : "bg-slate-900 text-white hover:bg-slate-800",
          selected && "ring-2 ring-black/10"
        )}
      >
        {selected ? "Selected" : "Choose Plan"}{" "}
        <span aria-hidden="true" className="text-base">
          ↗
        </span>
      </button>
    </div>
  );
}

export default function PricingSection() {
  const [period, setPeriod] = useState("monthly"); // "monthly" | "yearly"
  const [selectedPlan, setSelectedPlan] = useState("standard");

  const helperText = useMemo(() => {
    if (period === "yearly") return "Save more with annual billing.";
    return "Billed monthly. Cancel anytime.";
  }, [period]);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b1e] via-[#0a1a3a] to-[#27b6ff]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_10%_20%,rgba(255,255,255,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_25%,rgba(255,255,255,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Top */}
        <div className="text-center">
          <div className="flex justify-center">
            <Pill>Core Features</Pill>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Easy to Start, Easy to Scale
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We take pride in our attention to detail and commitment to customer
            satisfaction.
          </p>

          <div className="mt-8">
            <Toggle value={period} onChange={setPeriod} />
            <p className="mt-3 text-sm text-white/70">{helperText}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <PlanCard
              key={p.id}
              plan={p}
              period={period}
              selected={selectedPlan === p.id}
              onSelect={setSelectedPlan}
            />
          ))}
        </div>

        {/* Optional: output selected */}
        <div className="mt-8 text-center text-white/80 text-sm">
          Selected plan:{" "}
          <span className="font-semibold text-white">{selectedPlan}</span> •
          Billing: <span className="font-semibold text-white">{period}</span>
        </div>
      </div>
    </section>
  );
}
