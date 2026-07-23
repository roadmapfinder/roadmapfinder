"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#f7f9fb]" id="how-it-works">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-center mb-16 text-[#191c1e]">
            The 3-Step Success Loop
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <ScrollReveal delay={0.1} direction="up">
            <div className="space-y-6 text-center group">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-sm border border-[#c3c6d7] flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:border-[#004ac6] transition-all">
                <span className="material-symbols-outlined text-4xl text-[#004ac6]">
                  target
                </span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#191c1e]">
                1. Choose your goal
              </h3>
              <p className="font-['Inter'] text-[#434655] text-base leading-relaxed">
                Backend Engineer? Mobile Dev? Data Scientist? Tell us where you want to be.
              </p>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal delay={0.25} direction="up">
            <div className="space-y-6 text-center group">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-sm border border-[#c3c6d7] flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:border-[#004ac6] transition-all">
                <span className="material-symbols-outlined text-4xl text-[#004ac6]">
                  neurology
                </span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#191c1e]">
                2. AI builds roadmap
              </h3>
              <p className="font-['Inter'] text-[#434655] text-base leading-relaxed">
                Our engine scours the web for the best curated tutorials and organizes them logically.
              </p>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal delay={0.4} direction="up">
            <div className="space-y-6 text-center group">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-sm border border-[#c3c6d7] flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:border-[#004ac6] transition-all">
                <span className="material-symbols-outlined text-4xl text-[#004ac6]">
                  military_tech
                </span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#191c1e]">
                3. Level up daily
              </h3>
              <p className="font-['Inter'] text-[#434655] text-base leading-relaxed">
                Complete bite-sized tasks, earn XP, and unlock project milestones as you go.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
