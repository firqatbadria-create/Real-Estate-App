import React from "react";
import Villsm from "../Components/images//vills-market.jpg";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function StatLinkCard({ variant = "light", value, label, href }) {
  const isDark = variant === "dark";

  return (
    <a
      href={href}
      className={cn(
        "group block w-full rounded-[28px] p-10 text-left transition",
        "focus:outline-none focus:ring-2 focus:ring-sky-400",
        isDark ? "bg-[#2b2b2b] text-white" : "bg-[#d9d9d9] text-gray-900",
        "hover:translate-y-[-2px] hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "text-5xl font-extrabold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-3 text-xl font-bold",
          isDark ? "text-white/90" : "text-gray-800"
        )}
      >
        {label}
      </div>

      <div
        className={cn(
          "mt-6 text-sm font-semibold",
          isDark ? "text-white/70" : "text-gray-700"
        )}
      >
        Click to view details →
      </div>
    </a>
  );
}

export default function MarketPerformanceSection() {
  // ✅ Change these links to match your pages
  const links = {
    report: "/market-report.html", // or "/market-report"
    homesSold: "/homes-sold.html",
    avgDays: "/average-days.html",
    avgPrice: "/average-price.html",
    satisfaction: "/customer-satisfaction.html",
  };

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 max-w-xl">
            Comprehensive Market <br /> Performance Analyses
          </h2>

          <p className="max-w-xl text-lg font-bold text-gray-900">
            Comprehensive Real Time insights and Data Driven Trends from the
            real estate to help buyers , sellers, and renters and investor maket
            smarter
          </p>
        </div>

        {/* Content row */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10">
          {/* Left image card (clickable) */}
          <a
            href={links.report}
            className={cn(
              "group relative block overflow-hidden rounded-[34px]",
              "focus:outline-none focus:ring-2 focus:ring-sky-400"
            )}
          >
            <img
              src={Villsm}
              alt="Market performance"
              className="h-[380px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

            <div className="absolute left-6 bottom-6">
              <div className="rounded-2xl bg-black/50 backdrop-blur-md px-5 py-3 text-white ring-1 ring-white/20">
                <div className="text-lg font-extrabold">Open Market Report</div>
                <div className="text-sm font-semibold text-white/90">
                  Click to view details →
                </div>
              </div>
            </div>
          </a>

          {/* Right stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <StatLinkCard
              value="25+"
              label="Homes Sold"
              href={links.homesSold}
            />
            <StatLinkCard
              variant="dark"
              value="50 Day"
              label="Average on Market"
              href={links.avgDays}
            />
            <StatLinkCard
              value="$450K"
              label="Average Price"
              href={links.avgPrice}
            />
            <StatLinkCard
              value="96%"
              label="Customer Satisfaction"
              href={links.satisfaction}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
