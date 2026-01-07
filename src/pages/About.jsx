import React from "react";

function Card({ title, children }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
      <div className="mt-2 text-gray-700 font-semibold leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-3xl bg-gray-100 p-6">
      <div className="text-3xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 font-semibold text-gray-700">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* If your navbar is fixed, keep this */}
      <div className="pt-20" />

      {/* Hero */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-extrabold tracking-widest text-amber-700">
                ABOUT SUNTOWER
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                A smarter way to buy, rent, and sell real estate.
              </h1>
              <p className="mt-5 text-lg font-semibold text-gray-700 leading-relaxed">
                SunTower is a modern real estate platform built to simplify
                property discovery. We connect buyers, renters, sellers, and
                agents with quality listings, clear details, and tools that help
                people make confident decisions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
                <Stat value="25+" label="Homes Sold" />
                <Stat value="96%" label="Customer Satisfaction" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80"
                alt="SunTower real estate"
                className="h-[340px] sm:h-[420px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Our Mission">
            Make real estate easier by providing trusted listings, powerful
            search, and smooth communication between clients and agents.
          </Card>

          <Card title="Our Vision">
            A future where anyone can find a home with confidence using
            transparent data, modern tools, and professional support.
          </Card>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              What we offer
            </h2>
            <p className="max-w-xl text-gray-600 font-semibold sm:text-right">
              Core features that make SunTower simple, fast, and reliable.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Verified Listings">
              Clean property information with consistent photos, pricing, and
              location details.
            </Card>
            <Card title="Smart Filters">
              Search by city, area, bedrooms, bathrooms, price range, and status
              (rent/sale).
            </Card>
            <Card title="Inquiries & Visits">
              Users can message, request a visit, and track activity in one
              place.
            </Card>
            <Card title="Agents & Offers">
              Connect with agents, negotiate offers, and move toward a
              transaction faster.
            </Card>
            <Card title="Market Insights">
              Show trends like average price and days on market to support
              better decisions.
            </Card>
            <Card title="Support & Help Center">
              Guidance through every step: finding, touring, and closing the
              deal.
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[34px] bg-neutral-900 px-8 py-12 text-center text-white">
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              Ready to find your dream home?
            </h3>
            <p className="mt-3 text-white/80 font-semibold">
              Start searching listings or speak with an agent today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/buy"
                className="rounded-2xl bg-white px-8 py-3 font-extrabold text-black hover:bg-white/90 transition"
              >
                Start Searching
              </a>
              <a
                href="/agents"
                className="rounded-2xl bg-white/10 px-8 py-3 font-extrabold text-white ring-1 ring-white/20 hover:bg-white/15 transition"
              >
                Speak with Agents
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
