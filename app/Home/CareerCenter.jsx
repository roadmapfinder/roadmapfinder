"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  CheckCircle,
  Sparkles,
  Briefcase,
  ShieldCheck,
  Star,
  Users,
  Target,
  ArrowRight,
  Lock,
  Play
} from "lucide-react";

function SplashScreenExactUI() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col font-['Inter'] text-[#0F172A] px-4 py-3 overflow-y-auto text-left select-none justify-between relative">
      {/* Background decorative dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-6 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-30" />
        <div className="absolute top-24 right-8 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-20" />
        <div className="absolute top-44 left-10 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-15" />
        <div className="absolute top-64 right-6 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-25" />
      </div>

      {/* 1. APP LOGO */}
      <div className="flex justify-center mt-1 mb-2 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
          <span className="font-['Space_Grotesk'] font-extrabold text-white text-xl">R</span>
        </div>
      </div>

      {/* 2. HEADLINE & SUBTITLE */}
      <div className="text-center relative z-10 mb-2">
        <h3 className="font-['Space_Grotesk'] text-lg font-extrabold text-[#0F172A] leading-tight tracking-tight">
          From Beginner to <span className="text-[#2563EB]">Job-Ready</span>
          <br />
          <span className="text-[#2563EB]">Step by Step.</span>
        </h3>
        <p className="text-[10px] text-slate-500 mt-1 leading-snug px-2">
          AI-powered roadmaps, curated resources and projects to accelerate your tech career.
        </p>
      </div>

      {/* 3. ROADMAP VISUAL - STAGGERED CARDS WITH CONNECTING PATH */}
      <div className="relative h-[185px] my-1 relative z-10">
        {/* Curved Path Connection Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Path Line 1 */}
          <div className="absolute top-[125px] left-[70px] w-[65px] h-[2px] bg-slate-300/60 -rotate-[35deg]" />
          <div className="absolute top-[105px] left-[125px] w-1.5 h-1.5 rounded-full bg-slate-400" />
          {/* Path Line 2 */}
          <div className="absolute top-[65px] left-[155px] w-[65px] h-[2px] bg-slate-300/60 -rotate-[35deg]" />
          <div className="absolute top-[48px] left-[210px] w-1.5 h-1.5 rounded-full bg-slate-400" />
          {/* Decorative Arrow */}
          <div className="absolute top-2 right-4 text-blue-600 opacity-40 -rotate-[30deg]">
            <Play size={20} fill="#2563EB" />
          </div>
        </div>

        {/* Card 01 - Bottom Left */}
        <div className="absolute bottom-1 left-2 w-[84px] bg-white p-2 rounded-xl border border-slate-100 shadow-md flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-[#E3F2FD] text-[#2563EB] flex items-center justify-center mb-1">
            <CheckCircle size={14} />
          </div>
          <span className="text-[10px] font-extrabold text-[#2563EB]">01</span>
          <span className="text-[9px] font-semibold text-slate-700 leading-tight">Choose<br />Your Tech</span>
        </div>

        {/* Card 02 - Center */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[88px] bg-white p-2 rounded-xl border border-slate-100 shadow-md flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-[#E8F5E9] text-[#43A047] flex items-center justify-center mb-1">
            <Sparkles size={14} />
          </div>
          <span className="text-[10px] font-extrabold text-[#43A047]">02</span>
          <span className="text-[9px] font-semibold text-slate-700 leading-tight">AI Curated<br />Journey</span>
        </div>

        {/* Card 03 - Top Right */}
        <div className="absolute top-1 right-2 w-[84px] bg-white p-2 rounded-xl border border-slate-100 shadow-md flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-[#FFF3E0] text-[#F57C00] flex items-center justify-center mb-1">
            <Briefcase size={14} />
          </div>
          <span className="text-[10px] font-extrabold text-[#F57C00]">03</span>
          <span className="text-[9px] font-semibold text-slate-700 leading-tight">Land The<br />Job</span>
        </div>
      </div>

      {/* 4. TRUST SECTION & STATS ROW */}
      <div className="relative z-10 space-y-2 mt-1">
        {/* 4 Stat Items Grid */}
        <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm grid grid-cols-4 divide-x divide-slate-100 text-center">
          <div className="flex flex-col items-center px-0.5">
            <div className="w-6 h-6 rounded-lg bg-[#EBF2FF] text-[#2563EB] flex items-center justify-center mb-1">
              <ShieldCheck size={12} />
            </div>
            <span className="text-[9px] font-extrabold text-slate-900 leading-none">Trusted</span>
            <span className="text-[7px] text-slate-500 mt-0.5">10K+ Devs</span>
          </div>

          <div className="flex flex-col items-center px-0.5">
            <div className="w-6 h-6 rounded-lg bg-[#FFF8E1] text-[#F59E0B] flex items-center justify-center mb-1">
              <Star size={12} className="fill-amber-400" />
            </div>
            <span className="text-[9px] font-extrabold text-slate-900 leading-none">4.8/5</span>
            <span className="text-[7px] text-slate-500 mt-0.5">Rating</span>
          </div>

          <div className="flex flex-col items-center px-0.5">
            <div className="w-6 h-6 rounded-lg bg-[#EBF2FF] text-[#2563EB] flex items-center justify-center mb-1">
              <Users size={12} />
            </div>
            <span className="text-[9px] font-extrabold text-slate-900 leading-none">50+</span>
            <span className="text-[7px] text-slate-500 mt-0.5">Paths</span>
          </div>

          <div className="flex flex-col items-center px-0.5">
            <div className="w-6 h-6 rounded-lg bg-[#FEE2E2] text-[#EF4444] flex items-center justify-center mb-1">
              <Target size={12} />
            </div>
            <span className="text-[9px] font-extrabold text-slate-900 leading-none">95%</span>
            <span className="text-[7px] text-slate-500 mt-0.5">Job Ready</span>
          </div>
        </div>

        {/* Loved by section */}
        <div>
          <p className="text-[8px] font-semibold text-slate-400 text-center uppercase tracking-wider mb-1">
            Loved by developers from
          </p>
          <div className="flex justify-between items-center px-1 text-[8px] font-semibold text-slate-600">
            <span>Microsoft</span>
            <span>Amazon</span>
            <span>Stripe</span>
            <span>Slack</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>

      {/* 5. CTA BUTTON & FOOTER */}
      <div className="relative z-10 pt-1">
        <button className="w-full py-2.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
          <span>Find My Roadmap</span>
          <div className="w-5 h-5 rounded-md bg-white text-[#2563EB] flex items-center justify-center">
            <ArrowRight size={10} />
          </div>
        </button>

        <div className="flex items-center justify-center gap-1 mt-1.5 text-[9px] text-slate-400 font-medium">
          <Lock size={10} className="text-slate-400" />
          <span>No credit card required</span>
        </div>
      </div>
    </div>
  );
}

export default function CareerCenter() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 max-w-[1280px] mx-auto" id="career">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        {/* Left: Phone Emulator displaying Mobile App SplashScreen.jsx UI */}
        <ScrollReveal direction="right" duration={0.6} className="flex-1 order-2 md:order-1 w-full flex justify-center">
          <div className="w-[310px] sm:w-[330px] aspect-[9/19] rounded-[2.5rem] bg-[#0F172A] p-2.5 shadow-2xl border border-slate-800 relative">
            <div className="w-full h-full bg-[#F8FAFC] rounded-[2rem] overflow-hidden flex flex-col relative group">
              {/* Status Bar */}
              <div className="h-7 bg-[#0F172A] flex items-center justify-between px-4 text-white text-[10px] font-mono flex-shrink-0">
                <span>9:41</span>
                <div className="w-12 h-3 bg-black rounded-full mx-auto" />
                <span className="text-[9px]">5G</span>
              </div>

              {/* Exact SplashScreen.jsx Mobile UI */}
              <div className="flex-1 overflow-hidden relative">
                <SplashScreenExactUI />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Narrative Steps */}
        <ScrollReveal direction="left" delay={0.2} duration={0.6} className="flex-1 order-1 md:order-2 space-y-8 text-left">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-[#191c1e]">
            Beyond just coding.
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border-2 border-[#004ac6] text-[#004ac6] flex items-center justify-center flex-shrink-0 font-['Space_Grotesk'] font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-2 text-[#191c1e]">Build Proof-of-Work</h3>
                <p className="font-['Inter'] text-[#434655] text-base leading-relaxed">
                  We guide you through 4 capstone projects that look professional on GitHub.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border-2 border-[#004ac6] text-[#004ac6] flex items-center justify-center flex-shrink-0 font-['Space_Grotesk'] font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-2 text-[#191c1e]">ATS Resume Builder</h3>
                <p className="font-['Inter'] text-[#434655] text-base leading-relaxed">
                  Auto-generate a resume that highlights your RoadmapFinder accomplishments.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border-2 border-[#004ac6] text-[#004ac6] flex items-center justify-center flex-shrink-0 font-['Space_Grotesk'] font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-2 text-[#191c1e]">Interview Simulations</h3>
                <p className="font-['Inter'] text-[#434655] text-base leading-relaxed">
                  Practice with our AI interviewer on technical and behavioral questions.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
