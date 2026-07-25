"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, ArrowRight, Sparkles, Check, Briefcase, Compass, Rocket, Laptop, School, HardwareChip, Flame, Play, CheckCircle2 } from "lucide-react";
import AppNoticeModal from "./AppNoticeModal";

export default function HeroSection() {
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4 Onboarding & HomeScreen steps matching exact roadmapfinder-AI app UI
  const steps = [
    // 1. GOAL SELECTION SCREEN (roadmapfinder-AI/app/main/onboardings/Goal.jsx)
    {
      id: "goal",
      title: "Goal Selection",
      render: () => (
        <div className="p-4 flex flex-col justify-between h-full bg-[#f8fafc] text-[#191c1e]">
          <div>
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-3 text-[11px] font-semibold text-[#737686]">
              <span>Learning Path</span>
              <span className="text-[#2563EB] font-bold">Step 2 of 4</span>
            </div>

            {/* AI Icon Header */}
            <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-3">
              <Sparkles size={20} />
            </div>

            <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#0F172A] mb-1">
              Why are you learning?
            </h4>
            <p className="font-['Inter'] text-[11px] text-[#475569] mb-3 leading-tight">
              We'll tailor your roadmap based on your ultimate objective.
            </p>

            {/* Cards */}
            <div className="space-y-2">
              {/* Card 1 - Job (Selected) */}
              <div className="p-2.5 bg-white rounded-xl border-2 border-[#2563EB] shadow-sm flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                  <Briefcase size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-['Inter'] text-xs font-bold text-[#0F172A]">Job</p>
                    <div className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center">
                      <Check size={10} />
                    </div>
                  </div>
                  <p className="font-['Inter'] text-[9px] text-[#64748B]">Advancing career or finding new role</p>
                </div>
              </div>

              {/* Card 2 - Explore */}
              <div className="p-2.5 bg-white rounded-xl border border-[#E2E8F0] flex items-center gap-2.5 opacity-75">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#64748B] flex items-center justify-center">
                  <Compass size={16} />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs font-bold text-[#0F172A]">Explore</p>
                  <p className="font-['Inter'] text-[9px] text-[#64748B]">Discovering new fields</p>
                </div>
              </div>

              {/* Card 3 - Startup */}
              <div className="p-2.5 bg-white rounded-xl border border-[#E2E8F0] flex items-center gap-2.5 opacity-75">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#64748B] flex items-center justify-center">
                  <Rocket size={16} />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs font-bold text-[#0F172A]">Startup</p>
                  <p className="font-['Inter'] text-[9px] text-[#64748B]">Building product or company</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-2">
            <button className="w-full bg-[#2563EB] text-white py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 shadow-md">
              Continue <ArrowRight size={14} />
            </button>
          </div>
        </div>
      ),
    },

    // 2. LEVEL SELECTION SCREEN (roadmapfinder-AI/app/main/onboardings/Level.jsx)
    {
      id: "level",
      title: "Level Selection",
      render: () => (
        <div className="p-4 flex flex-col justify-between h-full bg-[#f8fafc] text-[#191c1e]">
          <div>
            {/* Top Progress Track */}
            <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mb-3">
              <div className="bg-[#2563EB] h-full w-[75%] rounded-full"></div>
            </div>

            <div className="flex items-center justify-between mb-3 text-[11px] font-semibold text-[#737686]">
              <span>Experience Level</span>
              <span className="text-[#2563EB] font-bold">Step 3 of 4</span>
            </div>

            <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#0F172A] mb-1">
              Select your level
            </h4>
            <p className="font-['Inter'] text-[11px] text-[#475569] mb-3 leading-tight">
              We'll tailor your journey based on your experience.
            </p>

            <div className="space-y-2">
              {/* Card 1 - Freelancer (Recommended & Selected) */}
              <div className="p-2.5 bg-white rounded-xl border-2 border-[#2563EB] shadow-sm relative">
                <span className="absolute -top-2 right-3 text-[8px] font-extrabold bg-[#2563EB] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                  RECOMMENDED
                </span>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                    <Laptop size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Inter'] text-xs font-bold text-[#0F172A]">Freelancer</p>
                    <p className="font-['Inter'] text-[9px] text-[#64748B]">Independent, expanding skillsets</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Student */}
              <div className="p-2.5 bg-white rounded-xl border border-[#E2E8F0] flex items-center gap-2.5 opacity-75">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#64748B] flex items-center justify-center">
                  <School size={16} />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs font-bold text-[#0F172A]">Student</p>
                  <p className="font-['Inter'] text-[9px] text-[#64748B]">Building foundational knowledge</p>
                </div>
              </div>

              {/* Card 3 - Experienced */}
              <div className="p-2.5 bg-white rounded-xl border border-[#E2E8F0] flex items-center gap-2.5 opacity-75">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#64748B] flex items-center justify-center">
                  <Briefcase size={16} />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs font-bold text-[#0F172A]">Experienced</p>
                  <p className="font-['Inter'] text-[9px] text-[#64748B]">Mastering advanced concepts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-2">
            <button className="w-full bg-[#2563EB] text-white py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 shadow-md">
              Generate AI Roadmap <Sparkles size={14} />
            </button>
          </div>
        </div>
      ),
    },

    // 3. GENERATING ROADMAP SCREEN (roadmapfinder-AI/app/main/onboardings/Generate.jsx)
    {
      id: "generate",
      title: "AI Generation",
      render: () => (
        <div className="p-5 flex flex-col items-center justify-between h-full bg-[#0F172A] text-white text-center">
          <div className="my-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#2563EB]/20 animate-pulse">
              <Sparkles size={32} className="text-[#38BDF8]" />
            </div>

            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">
              Crafting AI Roadmap...
            </h4>
            <p className="font-['Inter'] text-[11px] text-slate-400 max-w-[200px] mx-auto leading-relaxed">
              Curating 1% top YouTube resources, official docs & capstone projects...
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-[#2563EB] h-full w-[92%] rounded-full animate-pulse"></div>
            </div>

            {/* Live Logs */}
            <div className="space-y-1.5 text-[10px] text-left bg-slate-900/80 p-3 rounded-xl border border-slate-800 font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Full Stack Path Selected
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> 90-Day Schedule Formatted
              </div>
              <div className="flex items-center gap-2 text-sky-400">
                <span className="animate-spin">⚡</span> Finalizing Daily XP Tasks...
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // 4. HOMESCREEN (roadmapfinder-AI/app/main/screens/HomeScreen.jsx)
    {
      id: "home",
      title: "App HomeScreen",
      render: () => (
        <div className="flex flex-col h-full bg-[#F1F5F9] text-[#0F172A]">
          {/* Header */}
          <div className="p-3 bg-white border-b border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-slate-500 leading-none">Good morning,</p>
              <p className="text-xs font-bold text-[#0F172A] leading-tight font-['Space_Grotesk']">
                Sohel 👋
              </p>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full text-amber-700 font-bold text-[10px]">
              <Flame size={12} className="text-amber-500 fill-amber-500" /> 4 Days
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
            {/* Active Roadmap Hero Card (#0F172A) */}
            <div className="p-3.5 bg-[#0F172A] text-white rounded-2xl shadow-md space-y-2">
              <div className="flex items-center justify-between text-[9px]">
                <span className="text-slate-400 font-semibold uppercase tracking-wider">Active Roadmap</span>
                <span className="bg-[#2563EB] text-white px-2 py-0.5 rounded font-extrabold text-[8px]">
                  INTERMEDIATE
                </span>
              </div>
              <h5 className="font-['Space_Grotesk'] text-xs font-bold text-white">
                Full Stack Engineer Path
              </h5>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] text-slate-300 font-medium">
                  <span>Overall Progress</span>
                  <span className="font-bold text-[#60A5FA]">45%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#2563EB] h-full w-[45%] rounded-full"></div>
                </div>
              </div>

              {/* Week Day Tracker circles */}
              <div className="flex justify-between pt-1 border-t border-slate-800 text-[8px] text-slate-400">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-0.5">
                    <span>{d}</span>
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                      idx < 4 ? "bg-[#60A5FA] text-white" : idx === 4 ? "bg-white text-[#2563EB]" : "bg-slate-800"
                    }`}>
                      {idx < 4 && <Check size={8} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Task Card */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded-full">
                  Today's Lesson
                </span>
                <span className="text-[9px] text-emerald-600 font-bold">
                  +250 XP
                </span>
              </div>
              <p className="text-xs font-bold text-[#0F172A]">
                🌐 Web Foundations & React Hooks
              </p>
              <div className="flex items-center justify-between pt-1 text-[9px] text-slate-500">
                <span>⏱️ 25 mins • Video + Quiz</span>
                <span className="text-[#2563EB] font-bold flex items-center gap-0.5">
                  Start ▶
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Tab Bar */}
          <div className="h-11 bg-white border-t border-slate-200 flex items-center justify-around px-2 text-[9px] text-slate-500">
            <div className="flex flex-col items-center text-[#2563EB] font-bold">
              <div className="w-1 h-1 rounded-full bg-[#2563EB] mb-0.5"></div>
              Home
            </div>
            <div className="flex flex-col items-center">Roadmaps</div>
            <div className="flex flex-col items-center">Courses</div>
            <div className="flex flex-col items-center">AI Mentor</div>
          </div>
        </div>
      ),
    },
  ];

  // Auto cycle screens smoothly
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <>
      <section
        className="pt-[95px] md:pt-[110px] pb-10 px-5 md:px-10 max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[calc(100vh-100px)]"
        id="hero"
      >
        {/* Left Text Content */}
        <div className="flex-1 space-y-5 text-left max-w-xl">
          <span className="inline-block px-3.5 py-1 bg-[#39b8fd]/10 text-[#004ac6] rounded-full font-['Inter'] text-xs font-bold tracking-wider uppercase">
            AI-powered learning companion
          </span>
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#191c1e]">
            From <span className="text-[#004ac6]">Zero to Job-Ready.</span>
          </h1>
          <p className="font-['Inter'] text-base sm:text-lg text-[#434655] leading-relaxed">
            Master <strong>Full Stack Skills</strong> on your journey to becoming a professional engineer. We curate the best free resources and guide you day-by-day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3.5 pt-2">
            {/* Primary CTA: Continue on Web */}
            <Link
              href="/RoadmapPage"
              className="bg-[#004ac6] text-white px-8 py-3.5 rounded-full flex items-center gap-2.5 font-['Inter'] text-sm font-semibold hover:bg-[#003ea8] shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <Globe size={18} />
              Continue on Web
              <ArrowRight size={16} />
            </Link>

            {/* Secondary CTA: Android App Notice Trigger */}
            <button
              onClick={() => setIsNoticeModalOpen(true)}
              className="border border-[#c3c6d7] bg-[#f7f9fb] text-[#191c1e] px-6 py-3.5 rounded-full flex items-center gap-2 font-['Inter'] text-sm font-semibold hover:bg-[#f2f4f6] transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-green-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                android
              </span>
              Download for Android
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full uppercase">
                Soon
              </span>
            </button>
          </div>
        </div>

        {/* Right Perfectly Balanced 3D Phone Emulator with App Onboarding -> HomeScreen Flow */}
        <div
          className="flex-1 relative w-full max-w-[310px] sm:max-w-[325px] mx-auto flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Phone Bezel Container */}
          <div className="relative w-full h-[530px] sm:h-[560px] bg-[#0F172A] rounded-[2.5rem] sm:rounded-[3rem] border-[8px] sm:border-[10px] border-[#0F172A] overflow-hidden shadow-2xl transition-all border-[#1e293b]">
            {/* Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#0F172A] z-40 rounded-full flex items-center justify-end px-2">
              <div className="w-2.5 h-2.5 rounded-full bg-black border border-slate-700"></div>
            </div>

            {/* Active Screen */}
            <div className="w-full h-full pt-5 bg-white overflow-hidden relative">
              {steps[activeStep].render()}
            </div>
          </div>

          {/* Bottom Screen Indicator Dots */}
          <div className="flex items-center gap-1.5 mt-3">
            {steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className={`h-2 rounded-full transition-all ${
                  activeStep === idx
                    ? "w-6 bg-[#004ac6]"
                    : "w-2 bg-[#c3c6d7] hover:bg-[#737686]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>


        </div>
      </section>

      {/* App Notice Modal */}
      <AppNoticeModal isOpen={isNoticeModalOpen} onClose={() => setIsNoticeModalOpen(false)} />
    </>
  );
}