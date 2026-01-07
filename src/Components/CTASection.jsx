import React from "react";
import Villimg from "../Components/images/DVillas-7.webp";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LiquidButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center",
        "rounded-full px-10 py-4 text-xl font-extrabold text-white",
        "bg-white/15 backdrop-blur-md ring-1 ring-white/35",
        "shadow-[0_12px_30px_rgba(0,0,0,0.18)]",
        "transition hover:bg-white/20 hover:ring-white/50",
        "active:scale-[0.99]",
        className
      )}
    >
      {/* glossy highlight */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full",
          "bg-gradient-to-b from-white/35 via-white/10 to-transparent",
          "opacity-70 group-hover:opacity-90 transition"
        )}
      />

      {/* soft inner glow */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-1 rounded-full",
          "bg-white/10 blur-md opacity-30 group-hover:opacity-45 transition"
        )}
      />

      {/* label */}
      <span className="relative">{children}</span>
    </a>
  );
}

export default function CTASection() {
  // Replace with your local image if you want:
  // const bg = "/images/cta.jpg";
  const bg =
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80";

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[34px]">
          {/* Background image */}
          <img
            src={Villimg}
            alt="Dream home"
            className="h-[420px] w-full object-cover"
            loading="lazy"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Ready to Find your Dream Home?
            </h2>

            <p className="mt-4 max-w-3xl text-lg sm:text-xl font-semibold text-white/90">
              Joint thousandth of satisfy clients who have found their dream
              homes with our expert and professioal services
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <LiquidButton href="/search">Start your Search</LiquidButton>
              <LiquidButton href="/agents" className="px-12">
                Speak with agents
              </LiquidButton>
            </div>
          </div>

          {/* Optional: subtle border */}
          <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
