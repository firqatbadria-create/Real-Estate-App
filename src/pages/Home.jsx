import React from "react";

import HeroSearch from "../Components/HeroSearch";
import PopularCarousel from "../Components/PopularCarousel";
import ServicesSection from "../Components/ServicesSection";
import FeaturedNeighborhood from "../Components/FeaturedNeighborhood";
import MarketPerformanceSection from "../Components/MarketPerformanceSection";
import TestimonialsCarousel from "../Components/TestimonialsCarousel";
import StartTouringSection from "../Components/StartTouringSection";
import CTASection from "../Components/CTASection";

export default function Home() {
  return (
    <main className="pt-20">
      <HeroSearch />
      <PopularCarousel />
      <ServicesSection />
      <FeaturedNeighborhood />
      <MarketPerformanceSection />
      <TestimonialsCarousel />
      <StartTouringSection />
      <CTASection />
    </main>
  );
}
