import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import TrustedSection from "./Components/TrustedSection";
import FeaturesSection from "./Components/FeaturesSection";
import OptimizeSection from "./Components/OptimizeSection";
import AnalyticsShowcase from "./Components/AnalyticsShowcase";
import EasyScal from "./EasyScal";
import ColeburatingTools from "./Components/ColeburatingTools";
import FAQSection from "./Components/FAQSection";
import RMBOSection from "./Components/RMBOSection";
import RMBO1Section from "./Components/RMBO1Section";
import FreeTrialCTA from "./Components/FreeTrialCTA";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <OptimizeSection />
      <AnalyticsShowcase />
      <EasyScal />
      <ColeburatingTools />
      <FAQSection />
      <RMBOSection />
      <RMBO1Section />
      <FreeTrialCTA />
      <Footer />
    </div>
  );
}
