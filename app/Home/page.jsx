"use client";

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TrustBar from "./TrustBar";
import ProblemSection from "./ProblemSection";
import HowItWorks from "./HowItWorks";
import AppShowcase from "./AppShowcase";
import AIMentorSection from "./AIMentorSection";
import CuratedLearning from "./CuratedLearning";
import CareerCenter from "./CareerCenter";
import SocialProof from "./SocialProof";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import LandingFooter from "./LandingFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#191c1e] overflow-x-hidden font-['Inter'] selection:bg-[#004ac6] selection:text-white">
      {/* 1. STICKY NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. TRUST BAR */}
      <TrustBar />

      {/* 4. PROBLEM SECTION */}
      <ProblemSection />

      {/* 5. HOW IT WORKS */}
      <HowItWorks />

      {/* 6. APP SHOWCASE (Marquee) */}
      <AppShowcase />

      {/* 7. AI MENTOR SECTION */}
      <AIMentorSection />

      {/* 8. CURATED LEARNING */}
      <CuratedLearning />

      {/* 9. CAREER CENTER */}
      <CareerCenter />

      {/* 10. SOCIAL PROOF */}
      <SocialProof />

      {/* 11. PRICING SECTION */}
      <PricingSection />

      {/* 12. FAQ SECTION */}
      <FAQSection />

      {/* 13. FINAL DOWNLOAD CTA */}
      <FinalCTA />

      {/* 14. FOOTER */}
      <LandingFooter />
    </div>
  );
}