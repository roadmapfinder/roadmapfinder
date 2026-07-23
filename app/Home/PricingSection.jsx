"use client";
import React, { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const APK_URL = "https://drive.google.com/uc?export=download&id=1LNgtjVEwh2YEc2fiVCTXpaXt8ivYSfu8";

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 max-w-[1280px] mx-auto" id="pricing">
      <ScrollReveal direction="up" duration={0.6}>
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-[#191c1e] mb-4">
            Simple, transparent pricing.
          </h2>

          {/* Monthly / Yearly Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`font-['Inter'] text-sm font-semibold ${!isYearly ? "text-[#004ac6]" : "text-[#737686]"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-14 h-7 rounded-full transition-colors relative p-1 focus:outline-none ${isYearly ? "bg-[#004ac6]" : "bg-[#c3c6d7]"}`}
              aria-label="Toggle Billing Frequency"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md ${isYearly ? "translate-x-7" : "translate-x-0"}`}
              ></div>
            </button>
            <span className={`font-['Inter'] text-sm font-semibold ${isYearly ? "text-[#004ac6]" : "text-[#737686]"}`}>
              Yearly <span className="text-[#004ac6] font-bold">(Save 40%)</span>
            </span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Free Plan */}
        <ScrollReveal delay={0.1} direction="up">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-[#c3c6d7] flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="mb-8">
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#191c1e] mb-2">Free</h3>
                <p className="font-['Inter'] text-sm text-[#434655]">The basics to get started.</p>
              </div>
              <div className="font-['Space_Grotesk'] text-5xl font-bold text-[#191c1e] mb-8">
                $0<span className="font-['Inter'] text-lg text-[#737686] font-normal">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">check</span>
                  <span className="font-['Inter'] text-sm text-[#191c1e]">Access to 3 basic roadmaps</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">check</span>
                  <span className="font-['Inter'] text-sm text-[#191c1e]">Limited AI Mentor (5 asks/day)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">check</span>
                  <span className="font-['Inter'] text-sm text-[#191c1e]">Daily task streak tracking</span>
                </li>
              </ul>
            </div>
            <Link
              href="/RoadmapPage"
              className="w-full text-center py-4 rounded-full border border-[#c3c6d7] font-['Inter'] text-sm font-semibold hover:bg-[#f7f9fb] transition-all active:scale-95 text-[#191c1e]"
            >
              Get Started
            </Link>
          </div>
        </ScrollReveal>

        {/* Pro Plan */}
        <ScrollReveal delay={0.25} direction="up">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border-2 border-[#004ac6] pro-glow relative flex flex-col justify-between h-full shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#004ac6] text-white px-6 py-2 rounded-bl-2xl font-['Inter'] text-xs font-bold tracking-wider">
              MOST POPULAR
            </div>
            <div>
              <div className="mb-8">
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#191c1e] mb-2">Pro</h3>
                <p className="font-['Inter'] text-sm text-[#434655]">The fastest way to a career.</p>
              </div>
              <div className="font-['Space_Grotesk'] text-5xl font-bold text-[#191c1e] mb-8">
                {isYearly ? "$11" : "$19"}
                <span className="font-['Inter'] text-lg text-[#737686] font-normal">/mo</span>
                {isYearly && <span className="block font-['Inter'] text-xs text-[#004ac6] font-semibold mt-1">Billed annually ($132/yr)</span>}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">check</span>
                  <span className="font-['Inter'] text-sm text-[#191c1e]">All 50+ Career Roadmaps</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">check</span>
                  <span className="font-['Inter'] text-sm text-[#191c1e]">Unlimited AI Mentoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">check</span>
                  <span className="font-['Inter'] text-sm text-[#191c1e]">Resume Builder & ATS Check</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">check</span>
                  <span className="font-['Inter'] text-sm text-[#191c1e]">Priority Interview Coaching</span>
                </li>
              </ul>
            </div>
            <a
              href={APK_URL}
              download="roadmapfinder.apk"
              className="w-full text-center py-4 rounded-full bg-[#004ac6] text-white font-['Inter'] text-sm font-semibold shadow-lg hover:bg-[#003ea8] transition-all active:scale-95 block"
            >
              Upgrade Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
