"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function CuratedLearning() {
  return (
    <section className="py-16 md:py-24 bg-[#f2f4f6]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-[#191c1e] mb-3">
              Quality over Quantity
            </h2>
            <p className="font-['Inter'] text-[#434655] max-w-xl mx-auto text-base leading-relaxed">
              We don't create videos. We find the 1% that are actually worth your time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* YouTube side (faded) */}
          <ScrollReveal delay={0.1} direction="right">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-[#c3c6d7] opacity-60 hover:opacity-80 transition-opacity h-full">
              <div className="flex items-center gap-2 text-[#ba1a1a] mb-6">
                <span className="material-symbols-outlined">cancel</span>
                <span className="font-['Inter'] font-bold text-base">Learning on YouTube</span>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="font-['Inter'] text-[#737686] font-semibold min-w-[24px]">01</span>
                  <p className="font-['Inter'] text-[#434655] text-sm leading-relaxed">
                    Spend 40 mins finding a "good" video.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-['Inter'] text-[#737686] font-semibold min-w-[24px]">02</span>
                  <p className="font-['Inter'] text-[#434655] text-sm leading-relaxed">
                    The instructor uses an outdated version.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-['Inter'] text-[#737686] font-semibold min-w-[24px]">03</span>
                  <p className="font-['Inter'] text-[#434655] text-sm leading-relaxed">
                    You get distracted by a MrBeast thumbnail.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* RoadmapFinder side (highlighted) */}
          <ScrollReveal delay={0.25} direction="left">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border-2 border-[#004ac6] shadow-xl md:scale-105 relative h-full">
              <div className="flex items-center gap-2 text-[#004ac6] mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="font-['Inter'] font-bold text-base">RoadmapFinder Path</span>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="font-['Inter'] text-[#004ac6] font-bold min-w-[24px]">01</span>
                  <p className="font-['Inter'] text-[#191c1e] text-sm leading-relaxed">
                    Instantly access the top-rated 10min video.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-['Inter'] text-[#004ac6] font-bold min-w-[24px]">02</span>
                  <p className="font-['Inter'] text-[#191c1e] text-sm leading-relaxed">
                    Followed by a custom interactive quiz.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-['Inter'] text-[#004ac6] font-bold min-w-[24px]">03</span>
                  <p className="font-['Inter'] text-[#191c1e] text-sm leading-relaxed">
                    Finish with a mini-project submission.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
