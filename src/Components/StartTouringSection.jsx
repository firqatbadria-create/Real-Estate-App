import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ImageCard({ src, alt, className = "" }) {
  return (
    <div
      className={cn("overflow-hidden rounded-[26px] bg-gray-100", className)}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default function StartTouringSection() {
  // You can replace these with your local images:
  // src: "/images/your-img.jpg"
  const images = {
    leftTall:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    topWide:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
    bottomLeft:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    bottomRight:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  };

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight max-w-xl">
            Start touring homes <br />
            without, no strings attached
          </h2>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="max-w-sm text-left lg:text-right text-lg font-bold text-gray-900">
              Real stories from real&nbsp; Clients who <br />
              found their dream homes with us
            </p>

            <a
              href="#"
              className="rounded-full bg-neutral-800 px-10 py-3 text-lg font-extrabold text-white shadow-sm hover:bg-neutral-700 transition"
            >
              view All
            </a>
          </div>
        </div>

        {/* Image Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
          {/* Left Tall */}
          <ImageCard
            src={images.leftTall}
            alt="Left property"
            className="h-[420px] lg:h-[520px]"
          />

          {/* Right column */}
          <div className="grid grid-rows-[260px_1fr] gap-8">
            {/* Top Wide */}
            <ImageCard
              src={images.topWide}
              alt="Top wide property"
              className="h-[240px] lg:h-[260px]"
            />

            {/* Bottom two */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ImageCard
                src={images.bottomLeft}
                alt="Bottom left property"
                className="h-[200px] lg:h-[230px]"
              />
              <ImageCard
                src={images.bottomRight}
                alt="Bottom right property"
                className="h-[200px] lg:h-[230px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
