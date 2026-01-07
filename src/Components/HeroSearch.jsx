import React, { useMemo, useState } from "react";
import HeroImg from "../Components/images/hero-img.jpg";

/**
 * Props:
 * - onSearch: (filters) => void
 *   filters example:
 *   { purpose: "rent", category: "apartment", minPrice: 200, maxPrice: 800 }
 *
 * If you use React Router, you can navigate to:
 * /properties?purpose=rent&category=apartment&minPrice=200&maxPrice=800
 */
export default function HeroSearch({ onSearch }) {
  // Dropdown options
  const purposeOptions = useMemo(
    () => [
      { label: "Rent", value: "rent" },
      { label: "Sell", value: "sell" },
      { label: "Buy", value: "buy" },
    ],
    []
  );

  const categoryOptions = useMemo(
    () => [
      { label: "Any Type", value: "" },
      { label: "Apartment", value: "apartment" },
      { label: "House", value: "house" },
      { label: "Villa", value: "villa" },
      { label: "Land", value: "land" },
      { label: "Office", value: "office" },
    ],
    []
  );

  const pricePresets = useMemo(
    () => [
      { label: "Any Price", min: "", max: "" },
      { label: "$0 - $500", min: 0, max: 500 },
      { label: "$500 - $1,000", min: 500, max: 1000 },
      { label: "$1,000 - $2,000", min: 1000, max: 2000 },
      { label: "$2,000 - $5,000", min: 2000, max: 5000 },
      { label: "$5,000+", min: 5000, max: "" },
    ],
    []
  );

  // State
  const [purpose, setPurpose] = useState("rent");
  const [category, setCategory] = useState("");
  const [preset, setPreset] = useState("Any Price");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [error, setError] = useState("");

  // Keep min/max synced with preset
  const applyPreset = (label) => {
    setPreset(label);
    const found = pricePresets.find((p) => p.label === label);
    if (!found) return;
    setMinPrice(found.min === "" ? "" : String(found.min));
    setMaxPrice(found.max === "" ? "" : String(found.max));
  };

  const parseNumberOrEmpty = (v) => {
    if (v === "" || v === null || v === undefined) return "";
    const n = Number(v);
    return Number.isFinite(n) ? n : NaN;
  };

  const handleSearch = () => {
    setError("");

    const min = parseNumberOrEmpty(minPrice);
    const max = parseNumberOrEmpty(maxPrice);

    if (min !== "" && Number.isNaN(min))
      return setError("Min price must be a number.");
    if (max !== "" && Number.isNaN(max))
      return setError("Max price must be a number.");
    if (min !== "" && max !== "" && min > max)
      return setError("Min price cannot be greater than Max price.");

    const filters = {
      purpose,
      category,
      minPrice: min === "" ? "" : min,
      maxPrice: max === "" ? "" : max,
    };

    // If parent passed an onSearch callback:
    if (typeof onSearch === "function") onSearch(filters);

    // Also build a query string (useful for navigation / API)
    const params = new URLSearchParams();
    if (filters.purpose) params.set("purpose", filters.purpose);
    if (filters.category) params.set("category", filters.category);
    if (filters.minPrice !== "")
      params.set("minPrice", String(filters.minPrice));
    if (filters.maxPrice !== "")
      params.set("maxPrice", String(filters.maxPrice));

    // Demo: log the search query
    console.log("Search:", filters);
    console.log("Query:", `/properties?${params.toString()}`);
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero container (rounded border like screenshot) */}
        <div className="relative mt-0 overflow-hidden rounded-[32px]">
          {/* Background image */}
          <div
            className="max-h-[540px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${HeroImg})`,
            }}
          >
            {/* Dark overlay for readable text */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-0 px-20 py-20 sm:px-20 sm:py-16 pl-30">
              {/* Headline */}
              <h1 className="max-w-2xl text-5xl sm:text-5xl font-bold leading-tight text-white">
                Find your <br />
                Dream Home
              </h1>

              {/* Subtext */}
              <p className="mt-6 max-w-xl text-white/90 text-base sm:text-lg font-semibold drop-shadow">
                Explore the market with confidence. Discover the best homes,
                rentals, and deals that match your budget.
              </p>

              {/* Glass Search Panel */}
              <div className="mt-12 max-w-2xl">
                <div className="rounded-2xl bg-white/25 backdrop-blur-sm shadow-xl ring-1 ring-white/25 p-4">
                  <p className="text-white font-bold text-md">
                    Search the Price you are looking for
                  </p>

                  {/* Controls */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {/* Purpose */}
                    <div className="sm:col-span-1">
                      <label className="sr-only">Purpose</label>
                      <select
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full rounded-2xl bg-white/20 text-white placeholder-white/80
                                   ring-2 ring-white/20 px-2 py-2 font-semibold
                                   focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        {purposeOptions.map((o) => (
                          <option
                            key={o.value}
                            value={o.value}
                            className="text-gray-900"
                          >
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Category */}
                    <div className="sm:col-span-1">
                      <label className="sr-only">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-2xl bg-white/20 text-white placeholder-white/80
                                   ring-1 ring-white/25 px-2 py-2 font-semibold
                                   focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        {categoryOptions.map((o) => (
                          <option
                            key={o.value}
                            value={o.value}
                            className="text-gray-900"
                          >
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price preset */}
                    <div className="sm:col-span-1">
                      <label className="sr-only">Price preset</label>
                      <select
                        value={preset}
                        onChange={(e) => applyPreset(e.target.value)}
                        className="w-full rounded-2xl bg-white/20 text-white placeholder-white/80
                                   ring-1 ring-white/25 px-2 py-2 font-semibold
                                   focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        {pricePresets.map((p) => (
                          <option
                            key={p.label}
                            value={p.label}
                            className="text-gray-900"
                          >
                            {p.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Search button */}
                    <div className="sm:col-span-1">
                      <button
                        onClick={handleSearch}
                        className="w-full rounded-2xl bg-white/30 text-white font-extrabold
                                   ring-1 ring-white/25 px-2 py-2
                                   hover:bg-white/40 transition
                                   focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        Search
                      </button>
                    </div>

                    {/* Min/Max price row */}
                    <div className="flex gap-2">
                      <div className="sm:col-span-2">
                        <label className="sr-only">Min price</label>
                        <input
                          value={minPrice}
                          onChange={(e) => {
                            setPreset("Custom");
                            setMinPrice(e.target.value);
                          }}
                          inputMode="numeric"
                          placeholder="Min price"
                          className="w-full rounded-2xl bg-white/20 text-white placeholder-white/70
                                   ring-1 ring-white/25 px-2 py-2 font-semibold
                                   focus:outline-none focus:ring-2 focus:ring-white/60"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="sr-only">Max price</label>
                        <input
                          value={maxPrice}
                          onChange={(e) => {
                            setPreset("Custom");
                            setMaxPrice(e.target.value);
                          }}
                          inputMode="numeric"
                          placeholder="Max price"
                          className="w-full rounded-2xl bg-white/20 text-white placeholder-white/70
                                   ring-1 ring-white/25 px-2 py-2 font-semibold
                                   focus:outline-none focus:ring-2 focus:ring-white/60"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Error */}
                  {error ? (
                    <p className="mt-3 text-sm font-semibold text-red-100 bg-red-500/30 rounded-xl px-3 py-2">
                      {error}
                    </p>
                  ) : null}

                  {/* Small helper text */}
                  <p className="mt-3 text-xs text-white/80">
                    Tip: Choose a price preset, or type your own min/max prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional spacing */}
        <div className="h-6" />
      </div>
    </section>
  );
}
