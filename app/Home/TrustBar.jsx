"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function TrustBar() {
  return (
    <section className="py-12 bg-[#f2f4f6] border-y border-[#c3c6d7]/30">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <ScrollReveal direction="up" duration={0.5}>
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#004ac6]">10k+</span>
              <span className="text-[#434655] font-['Inter'] text-sm font-semibold">active learners</span>
            </div>

            <div className="w-px h-8 bg-[#c3c6d7] hidden md:block"></div>

            <div className="flex items-center gap-3">
              <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#004ac6]">120k+</span>
              <span className="text-[#434655] font-['Inter'] text-sm font-semibold">tasks completed</span>
            </div>

            <div className="w-px h-8 bg-[#c3c6d7] hidden md:block"></div>

            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <span className="text-[#434655] font-['Inter'] text-sm font-semibold">4.8/5 app rating</span>
            </div>

            <div className="w-px h-8 bg-[#c3c6d7] hidden md:block"></div>

            <div className="flex items-center gap-3">
              <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#004ac6]">30+</span>
              <span className="text-[#434655] font-['Inter'] text-sm font-semibold">countries</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
