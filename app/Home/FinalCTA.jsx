"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, ArrowRight } from "lucide-react";
import AppNoticeModal from "./AppNoticeModal";
import ScrollReveal from "./ScrollReveal";
import roadmapImg from "../Images/roadmap.png";

export default function FinalCTA() {
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-36 flex flex-col items-center justify-center text-center px-5 md:px-10 overflow-hidden bg-white">
        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-6xl font-bold mb-6 max-w-4xl text-[#191c1e] leading-tight mx-auto">
            Your developer career needs a plan in your pocket.
          </h2>
          <p className="font-['Inter'] text-lg text-[#434655] max-w-2xl mb-10 leading-relaxed mx-auto">
            Join 10,000+ others who stopped dreaming and started doing.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {/* Continue on Web Primary CTA */}
            <Link
              href="/RoadmapPage"
              className="bg-[#004ac6] text-white px-10 py-5 rounded-full flex items-center gap-3 font-['Inter'] text-base font-semibold hover:scale-105 hover:bg-[#003ea8] transition-all shadow-xl active:scale-95"
            >
              <Globe size={22} />
              Continue on Web
              <ArrowRight size={18} />
            </Link>

            {/* Android App Notice Trigger */}
            <button
              onClick={() => setIsNoticeModalOpen(true)}
              className="border border-[#c3c6d7] bg-white text-[#191c1e] px-8 py-5 rounded-full flex items-center gap-2.5 font-['Inter'] text-base font-semibold hover:scale-105 hover:bg-[#f7f9fb] transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-green-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                android
              </span>
              Download for Android
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full uppercase">
                Soon
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* App Visual Showcase with Authentic Roadmap Graphic */}
        <ScrollReveal delay={0.3} direction="up" className="w-full">
          <div className="relative w-full max-w-[850px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none h-full"></div>
            <div className="bg-[#0F172A] rounded-t-[2.5rem] p-3 sm:p-4 shadow-2xl border border-slate-800 overflow-hidden group">
              <div className="bg-slate-900 rounded-t-[2rem] overflow-hidden border border-slate-700 relative">
                <Image
                  src={roadmapImg}
                  alt="RoadmapFinder Interactive Tech Learning Path"
                  className="w-full h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 max-h-[420px] object-cover object-top"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 text-left flex items-center justify-between text-white shadow-xl">
                  <div>
                    <p className="font-['Space_Grotesk'] text-sm font-bold">Interactive Learning Tree</p>
                    <p className="font-['Inter'] text-xs text-slate-300">Free Curated YouTube Videos, Projects & Quizzes</p>
                  </div>
                  <Link
                    href="/RoadmapPage"
                    className="bg-[#004ac6] hover:bg-[#003ea8] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all"
                  >
                    Explore All Roadmaps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* App Notice Modal */}
      <AppNoticeModal isOpen={isNoticeModalOpen} onClose={() => setIsNoticeModalOpen(false)} />
    </>
  );
}
