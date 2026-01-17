import React, { useMemo, useState } from "react";

const cn = (...c) => c.filter(Boolean).join(" ");

function CircleIcon({ open }) {
  return (
    <span
      className={cn(
        "grid h-8 w-8 place-items-center rounded-full border",
        open
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-300 bg-white text-slate-900"
      )}
      aria-hidden="true"
    >
      {/* chevron down */}
      <svg
        className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function FAQCard({ q, a, open, onToggle, big = false }) {
  return (
    <div
      className={cn(
        "rounded-1xl border border-slate-200 bg-slate-50 shadow-sm",
        big ? "p-0" : ""
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "w-full flex items-center gap-4 text-left",
          big ? "p-7" : "p-6"
        )}
        aria-expanded={open}
      >
        <CircleIcon open={open} />
        <span
          className={cn(
            "font-bold text-slate-900",
            big ? "text-2xl" : "text-xl"
          )}
        >
          {q}
        </span>
      </button>

      {/* Answer */}
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-200",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div
            className={cn(
              "text-slate-600 leading-relaxed",
              big ? "px-7 pb-7 pl-[84px] max-w-3xl" : "px-6 pb-6 pl-[72px]"
            )}
          >
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqs = useMemo(
    () => ({
      left: [
        {
          q: "How does your pricing work?",
          a: "Our pricing subscription-based offering different depending the level of features and services you need a can choose from monthly or yearly subscriptions and also customizable",
          big: true,
        },
        {
          q: "Can I integrate your software with other tools?",
          a: "Yes. We support integrations via native apps, webhooks, and API access to connect with the tools you already use.",
        },
        {
          q: "Is my data secure on your platform?",
          a: "We use encryption in transit and at rest, role-based access, and regular security monitoring to help protect your data.",
        },
        {
          q: "Do you offer a free trial?",
          a: "Yes. You can start a free trial and explore the key features before choosing a plan.",
        },
      ],
      right: [
        {
          q: "How often is the software updated?",
          a: "We ship improvements frequently (often weekly), plus urgent security and bug fixes when needed.",
        },
        {
          q: "What kind of customer support do you offer?",
          a: "We offer email and chat support, a help center, and priority assistance for higher-tier plans.",
        },
        {
          q: "Can I cancel my subscription anytime?",
          a: "Yes. You can cancel anytime from your account settings. Your plan remains active until the end of your billing cycle.",
        },
        {
          q: "Is there a limit to the number of users?",
          a: "Plans have recommended user limits. If you need more, you can upgrade or request a custom enterprise plan.",
        },
        {
          q: "How do I get started with your platform?",
          a: "Sign up, complete the quick onboarding, and you can start using the platform in minutes.",
        },
      ],
    }),
    []
  );

  // Open first big item by default
  const [openKey, setOpenKey] = useState(faqs.left[0].q);

  const toggle = (key) => setOpenKey((cur) => (cur === key ? null : key));

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6">
            {faqs.left.map((f) => (
              <FAQCard
                key={f.q}
                q={f.q}
                a={f.a}
                big={!!f.big}
                open={openKey === f.q}
                onToggle={() => toggle(f.q)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {faqs.right.map((f) => (
              <FAQCard
                key={f.q}
                q={f.q}
                a={f.a}
                open={openKey === f.q}
                onToggle={() => toggle(f.q)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
