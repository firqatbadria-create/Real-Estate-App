import React from "react";
import Opimg from "../Components/images/optimized.jpg";

export default function OptimizeSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* pill */}
            <div className="inline-flex items-center rounded-xl bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-200">
              Advance Solutions
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Optimize Interaction <br className="hidden sm:block" />
              with Advanced AI
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed">
              AI CRM solutions offer a powerful enhance customer satisfaction
              and drive business growth making data-driven decisions.
            </p>

            {/* feature grid */}
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {/* feature 1 */}
              <div>
                <div className="h-10 w-10 rounded-2xl bg-sky-100 ring-1 ring-sky-200 grid place-items-center">
                  {/* clock icon */}
                  <svg
                    className="h-6 w-6 text-sky-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v6l3 2" />
                  </svg>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  Real-Time Insights
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  AI tools can generate high quality content optimize keywords.
                </p>
              </div>

              {/* feature 2 */}
              <div>
                <div className="h-10 w-10 rounded-2xl bg-sky-200 ring-1 ring-sky-200 grid place-items-center">
                  {/* layers icon */}
                  <svg
                    className="h-6 w-6 text-sky-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2 3 7l9 5 9-5-9-5Z" />
                    <path d="M3 12l9 5 9-5" />
                    <path d="M3 17l9 5 9-5" />
                  </svg>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  User-Friendly Experience
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  User-Friendly Experience focuses creating products.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* main image card */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-xl ring-1 ring-black/5">
              {/* Replace this with your own image */}
              <img
                src={Opimg}
                alt="Working"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* floating watchlist card */}
            <div className="absolute left-6 sm:left-10 -bottom-10 sm:-bottom-12 w-[50%] sm:w-[250px]">
              <div className="rounded-2xl bg-white shadow-1xl ring-1 ring-black/5 p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-md font-extrabold text-slate-900">
                      Watchlist
                    </div>
                    <div className="text-sm text-slate-500 -mt-1">
                      Daily Average
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-sky-600 hover:bg-sky-50 transition">
                    Price
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <Row
                    name="Amazon"
                    sub="Amazon Inc"
                    price="1658.00"
                    trend="up"
                  />
                  <Row
                    name="Netflix"
                    sub="Netflix Inc"
                    price="1658.00"
                    trend="down"
                  />
                  <Row
                    name="Amazon"
                    sub="Amazon Inc"
                    price="1658.00"
                    trend="up"
                    color="green"
                  />
                </div>
              </div>
            </div>

            {/* spacing so floating card doesn’t overlap next section */}
            <div className="h-16 sm:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ name, sub, price, trend = "up", color }) {
  const isUp = trend === "up";
  const stroke = color === "green" ? "#22c55e" : isUp ? "#3b82f6" : "#ef4444";

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-bold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500 -mt-1">{sub}</div>
      </div>

      <div className="flex items-center gap-4">
        {/* mini sparkline */}
        <svg width="60" height="22" viewBox="0 0 60 22" fill="none">
          <path
            d="M1 16 C10 6, 16 18, 24 10 C32 2, 38 16, 46 8 C52 3, 56 14, 59 6"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="flex items-center gap-1">
          <span className="font-extrabold text-slate-900">{price}</span>
          <span className={isUp ? "text-blue-500" : "text-red-500"}>
            {isUp ? "↑" : "↓"}
          </span>
        </div>
      </div>
    </div>
  );
}
