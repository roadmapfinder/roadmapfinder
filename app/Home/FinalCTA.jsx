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

            {/* Direct Android APK Download */}
            <a
              href="/RoadmapFinder.apk"
              download="RoadmapFinder.apk"
              className="border-2 border-emerald-500/40 bg-emerald-50 hover:bg-emerald-600 text-emerald-950 hover:text-white px-9 py-5 rounded-full flex items-center gap-3 font-['Inter'] text-base font-semibold hover:scale-105 transition-all shadow-md hover:shadow-xl active:scale-95 group"
            >
              <span className="material-symbols-outlined text-emerald-600 group-hover:text-white text-2xl transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                android
              </span>
              <span>Download for Android</span>
              <span className="text-[11px] bg-emerald-200/80 group-hover:bg-white/20 text-emerald-900 group-hover:text-white font-bold px-2.5 py-0.5 rounded-full uppercase transition-colors">
                Free APK
              </span>
            </a>
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
