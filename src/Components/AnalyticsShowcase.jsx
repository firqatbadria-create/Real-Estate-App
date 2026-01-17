import React from "react";

const cn = (...c) => c.filter(Boolean).join(" ");

export default function AnalyticsShowcase() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* TOP: two cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left (Blue) */}
          <div className="rounded-3xl bg-[#2f8df3] p-8 sm:p-10 text-white shadow-xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Scalable Solutions
            </h3>
            <p className="mt-4 text-white/90 leading-relaxed max-w-xl">
              Scalable Solutions Grow with Your Business refers the ability of
              SaaS platform to expand and adapt a changing needs.
            </p>

            <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 text-slate-900 shadow-lg ring-1 ring-black/5">
              <div className="text-center text-lg sm:text-xl font-extrabold">
                Invoice Statistics
              </div>

              <div className="mt-6 flex items-center justify-center">
                <InvoiceDonut />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 text-center">
                <MiniStat
                  label="Total Overdue"
                  value="1200"
                  dot="bg-cyan-400"
                />
                <MiniStat label="Total Paid" value="2500" dot="bg-blue-700" />
                <MiniStat label="Total Unpaid" value="498" dot="bg-sky-500" />
              </div>
            </div>
          </div>

          {/* Right (Dark) */}
          <div className="rounded-3xl bg-[#0b0f12] p-8 sm:p-10 text-white shadow-xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Automated Workflow
            </h3>
            <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
              Automated Workflows for Increased Efficiency refers the use of
              technology to streamline repetitive tasks.
            </p>

            <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 text-slate-900 shadow-lg ring-1 ring-black/5">
              <div className="text-center text-lg sm:text-xl font-extrabold">
                Website Stats Activity
              </div>

              <div className="mt-6">
                <WebsiteLineChart />
              </div>

              <div className="mt-6 flex items-center justify-center gap-10 text-sm text-slate-500">
                <Legend dot="bg-blue-600" label="Today" />
                <Legend dot="bg-cyan-400" label="Yesterday" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: wide section */}
        <div className="mt-8 rounded-3xl bg-gradient-to-b from-[#f6fbff] to-[#d8ecff] p-8 sm:p-10 shadow-sm ring-1 ring-slate-100">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* left text */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Real-Time Analytics
              </h3>
              <p className="mt-4 max-w-xl text-slate-600 leading-relaxed">
                Real-Time Analytics at Your Fingertips refers the access
                up-to-the- minute data and insights instantly.
              </p>

              <ul className="mt-8 space-y-4">
                <CheckItem text="Seamless Integration with Existing Tools" />
                <CheckItem text="User-Friendly Interface for Navigation" />
              </ul>
            </div>

            {/* right chart card */}
            <div className="lg:flex lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-5 sm:p-6">
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-900">
                    Revenue Overview
                  </div>
                  <div className="text-xs text-slate-500">Apr 30 - May 30</div>
                </div>

                <div className="mt-4">
                  <RevenueAreaChart />
                </div>

                <div className="mt-4 flex items-center justify-center gap-12 text-xs text-slate-500">
                  <Legend dot="bg-blue-600" label="Product A" />
                  <Legend dot="bg-cyan-400" label="Product B" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end bottom */}
      </div>
    </section>
  );
}

/* ---------------- small components ---------------- */

function MiniStat({ label, value, dot }) {
  return (
    <div className="space-y-1">
      <div className="text-[11px] sm:text-xs text-slate-500">{label}</div>
      <div className="flex items-center justify-center gap-2 font-semibold">
        <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
        <span className="text-slate-900">{value}</span>
      </div>
    </div>
  );
}

function Legend({ dot, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
      <span>{label}</span>
    </div>
  );
}

function CheckItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-blue-600 text-white shadow-sm">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="\/one"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="text-slate-800 font-semibold">{text}</span>
    </li>
  );
}

/* ---------------- charts (SVG mock) ---------------- */

function InvoiceDonut() {
  const r = 70;
  const c = 2 * Math.PI * r;

  const a = 0.4 * c; // cyan
  const b = 0.32 * c; // blue
  const d = 0.2 * c; // deep blue
  const gap = 10;

  const base = {
    cx: 110,
    cy: 95,
    r,
    fill: "none",
    strokeWidth: 16,
    strokeLinecap: "round",
  };

  return (
    <div className="relative">
      <svg width="220" height="190" viewBox="0 0 220 190">
        {/* track */}
        <circle {...base} stroke="#e5e7eb" />

        {/* segments */}
        <circle
          {...base}
          stroke="#22d3ee"
          strokeDasharray={`${a} ${c - a}`}
          strokeDashoffset={0}
          transform="rotate(-90 110 95)"
        />
        <circle
          {...base}
          stroke="#3b82f6"
          strokeDasharray={`${b} ${c - b}`}
          strokeDashoffset={-(a + gap)}
          transform="rotate(-90 110 95)"
        />
        <circle
          {...base}
          stroke="#1d4ed8"
          strokeDasharray={`${d} ${c - d}`}
          strokeDashoffset={-(a + b + gap * 2)}
          transform="rotate(-90 110 95)"
        />

        {/* center text */}
        <text
          x="110"
          y="92"
          textAnchor="middle"
          className="fill-slate-900"
          style={{ fontWeight: 800, fontSize: 22 }}
        >
          4,198
        </text>
        <text
          x="110"
          y="112"
          textAnchor="middle"
          className="fill-slate-500"
          style={{ fontSize: 12 }}
        >
          Invoice
        </text>

        {/* tooltip */}
        <g>
          <rect
            x="42"
            y="38"
            rx="10"
            ry="10"
            width="74"
            height="28"
            fill="#eef6ff"
            stroke="#dbeafe"
          />
          <text
            x="79"
            y="57"
            textAnchor="middle"
            className="fill-slate-900"
            style={{ fontSize: 11, fontWeight: 700 }}
          >
            2500 Paid
          </text>
        </g>
      </svg>
    </div>
  );
}

function WebsiteLineChart() {
  return (
    <svg viewBox="0 0 560 260" className="w-full h-[210px]">
      {/* grid + labels */}
      <g stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 6">
        <line x1="70" y1="45" x2="535" y2="45" />
        <line x1="70" y1="110" x2="535" y2="110" />
        <line x1="70" y1="175" x2="535" y2="175" />
        <line x1="70" y1="235" x2="535" y2="235" />
      </g>

      <g fill="#6b7280" fontSize="12">
        <text x="35" y="49">
          60
        </text>
        <text x="35" y="114">
          30
        </text>
        <text x="35" y="179">
          15
        </text>
        <text x="35" y="239">
          10
        </text>
      </g>

      {/* lines */}
      <path
        d="M80 190 C120 190, 140 190, 170 186
           C210 180, 230 170, 260 150
           C290 125, 320 130, 350 120
           C380 105, 400 85, 420 65
           C435 45, 450 60, 465 70
           C490 86, 510 75, 535 78"
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M80 145 C110 130, 140 150, 170 140
           C210 125, 225 170, 250 175
           C280 182, 300 140, 320 130
           C340 120, 360 165, 390 170
           C420 178, 450 160, 480 168
           C510 175, 520 120, 535 112"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RevenueAreaChart() {
  return (
    <svg viewBox="0 0 560 260" className="w-full h-[220px]">
      {/* vertical guides */}
      <g stroke="#e5e7eb" strokeWidth="1">
        <line x1="90" y1="35" x2="90" y2="235" />
        <line x1="190" y1="35" x2="190" y2="235" />
        <line x1="290" y1="35" x2="290" y2="235" />
        <line x1="390" y1="35" x2="390" y2="235" />
        <line x1="490" y1="35" x2="490" y2="235" />
      </g>

      {/* soft gradient */}
      <defs>
        <linearGradient id="aFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="bFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Product A area */}
      <path
        d="M50 80
           C90 70, 110 130, 150 110
           C190 90, 210 105, 250 92
           C290 80, 310 120, 350 110
           C390 100, 410 150, 450 130
           C490 110, 510 70, 540 95
           L540 235 L50 235 Z"
        fill="url(#aFill)"
      />
      <path
        d="M50 80
           C90 70, 110 130, 150 110
           C190 90, 210 105, 250 92
           C290 80, 310 120, 350 110
           C390 100, 410 150, 450 130
           C490 110, 510 70, 540 95"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Product B area */}
      <path
        d="M50 155
           C90 120, 120 170, 160 155
           C200 140, 220 150, 260 145
           C300 140, 320 165, 360 155
           C400 145, 420 160, 460 152
           C500 145, 520 150, 540 148
           L540 235 L50 235 Z"
        fill="url(#bFill)"
      />
      <path
        d="M50 155
           C90 120, 120 170, 160 155
           C200 140, 220 150, 260 145
           C300 140, 320 165, 360 155
           C400 145, 420 160, 460 152
           C500 145, 520 150, 540 148"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
