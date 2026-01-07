import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ServiceCard({ icon, title, description, onLearnMore }) {
  return (
    <div
      className={cn(
        "w-full rounded-[36px] bg-gray-100 px-10 py-10",
        "shadow-sm ring-1 ring-black/5",
        "flex flex-col items-center text-center"
      )}
    >
      {/* Icon circle */}
      <div className="h-24 w-24 rounded-full bg-white ring-1 ring-black/10 grid place-items-center">
        <span className="text-5xl" aria-hidden="true">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-4xl font-extrabold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mt-6 max-w-sm text-xl font-semibold leading-snug text-gray-900">
        {description}
      </p>

      {/* Button */}
      <button
        type="button"
        onClick={onLearnMore}
        className={cn(
          "mt-10 w-[220px] rounded-2xl border border-gray-500",
          "px-8 py-4 text-xl font-bold text-gray-900",
          "hover:bg-white transition"
        )}
      >
        Learn more
      </button>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Buy",
      icon: "🛒",
      description:
        "Get Competative rate, Fast approve, and seamless closing with trusted lending",
      onLearnMore: () => console.log("Buy -> Learn more"),
    },
    {
      title: "Rent",
      icon: "🏦",
      description:
        "Get Competative rate, Fast approve, and seamless closing with trusted lending",
      onLearnMore: () => console.log("Rent -> Learn more"),
    },
    {
      title: "Sell",
      icon: "🏠",
      description:
        "Get Competative rate, Fast approve, and seamless closing with trusted lending",
      onLearnMore: () => console.log("Sell -> Learn more"),
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-medium text-gray-900">
          Getting home is a journy , you stay on scadual and on time
        </h2>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
              onLearnMore={s.onLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
