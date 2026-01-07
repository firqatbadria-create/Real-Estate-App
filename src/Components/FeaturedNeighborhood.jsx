import React from "react";

const demoItems = [
  {
    id: 1,
    title: "Down Town, Kabul",
    meta: "3 bed, 2 bath, 1000,sqr , 2300 street. Kabul, Afghanistan",
    price: "4,900,000.00$",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Down Town, Mazar e Sharif",
    meta: "5 bed, 4 bath, 1500,sqr , 2300 street. Mazar, Afghanistan",
    price: "6,070,000.00$",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Down Town, Herat",
    meta: "3 bed, 2 bath, 1000,sqr , 2300 street. Herat, Afghanistan",
    price: "4,900,000.00$",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Down Town, Qandhar",
    meta: "5 bed, 4 bath, 1500,sqr , 2300 street. Qandhar, Afghanistan",
    price: "6,070,000.00$",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
];

function FeaturedCard({ item }) {
  return (
    <div className="w-full">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-black/5">
        <img
          src={item.img}
          alt={item.title}
          className="h-[360px] w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <h3 className="mt-5 text-xl font-extrabold text-gray-900">
        {item.title}
      </h3>

      <p className="mt-2 text-sm font-semibold text-gray-500">{item.meta}</p>

      <div className="mt-4 h-px w-full bg-gray-200" />

      <p className="mt-5 text-2xl font-extrabold text-gray-900">{item.price}</p>
    </div>
  );
}

/**
 * Props:
 * - items?: array (same shape as demoItems)
 */
export default function FeaturedNeighborhood({ items }) {
  const data = items?.length ? items : demoItems;

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-6">
          <h1 className="text-4xl sm:text-3xl font-extrabold text-gray-900">
            Featured Neighborhood
          </h1>

          <p className="max-w-xs text-right text-sm font-semibold text-gray-500">
            Explore the most popular areas <br />
            with current market trade
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {data.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
