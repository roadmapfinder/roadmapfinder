"use client";
import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 max-w-[1280px] mx-auto">
      <ScrollReveal direction="up" duration={0.6}>
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold mb-4 text-[#191c1e]">
            Why most self-taught developers stay stuck
          </h2>
          <p className="font-['Inter'] text-lg text-[#434655] max-w-[700px] mx-auto leading-relaxed">
            Tutorial hell is real. Without a structured path, you spend 90% of your time searching and 10% actually learning.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-[#c3c6d7] -z-10 hidden md:block"></div>

        {/* Card 1 */}
        <ScrollReveal delay={0.1} direction="up">
          <div className="bg-white p-8 rounded-2xl border border-[#c3c6d7] hover:border-[#1E3A8A] transition-all group shadow-sm hover:shadow-md h-full">
            <div className="w-12 h-12 bg-[#f2f4f6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ba1a1a]/10 transition-colors">
              <span className="material-symbols-outlined text-[#737686] group-hover:text-[#1E3A8A] transition-colors">
                bookmark_add
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-3 text-[#191c1e]">Save 200 Tutorials</h3>
            <p className="font-['Inter'] text-[#434655] text-sm leading-relaxed">
              You bookmark dozens of "Full Stack 2024" videos but never finish a single module.
            </p>
          </div>
        </ScrollReveal>

        {/* Card 2 */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="bg-white p-8 rounded-2xl border border-[#c3c6d7] hover:border-[#1E3A8A] transition-all group shadow-sm hover:shadow-md h-full">
            <div className="w-12 h-12 bg-[#f2f4f6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ba1a1a]/10 transition-colors">
              <span className="material-symbols-outlined text-[#737686] group-hover:text-[#1E3A8A] transition-colors">
                help_center
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-3 text-[#191c1e]">What's Next?</h3>
            <p className="font-['Inter'] text-[#434655] text-sm leading-relaxed">
              After learning CSS, you jump to Next.js without understanding JavaScript fundamentals.
            </p>
          </div>
        </ScrollReveal>

        {/* Card 3 */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="bg-white p-8 rounded-2xl border border-[#c3c6d7] hover:border-[#1E3A8A] transition-all group shadow-sm hover:shadow-md h-full">
            <div className="w-12 h-12 bg-[#f2f4f6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ba1a1a]/10 transition-colors">
              <span className="material-symbols-outlined text-[#737686] group-hover:text-[#1E3A8A] transition-colors">
                trending_down
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-3 text-[#191c1e]">Lose Momentum</h3>
            <p className="font-['Inter'] text-[#434655] text-sm leading-relaxed">
              The "overwhelm" sets in. You stop coding for weeks because the gap feels too wide.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Blue Solution Banner */}
      <ScrollReveal delay={0.2} direction="up">
        <div className="mt-16 bg-[#004ac6] text-white p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative shadow-xl">
          <div className="relative z-10 text-left">
            <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold mb-3">
              RoadmapFinder gives you one clear next step every day.
            </h3>
            <p className="font-['Inter'] opacity-90 max-w-xl text-base">
              We replace the noise with a laser-focused path tailored to your specific job goals.
            </p>
          </div>
          <Link
            href="/RoadmapPage"
            className="relative z-10 bg-white text-[#004ac6] px-10 py-4 rounded-full font-['Inter'] text-sm font-semibold hover:scale-105 transition-transform shadow-md whitespace-nowrap"
          >
            Start for Free
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
