import React from "react";
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

export default function SplashView({ onStartOnboarding }) {
  return (
    <div className="w-full min-h-full bg-[#F8FAFC] flex flex-col font-['Inter'] text-[#0F172A] px-4 py-4 overflow-y-auto text-left select-none justify-between relative">
      {/* Background decorative dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-6 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-30" />
        <div className="absolute top-24 right-8 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-20" />
        <div className="absolute top-44 left-10 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-15" />
        <div className="absolute top-64 right-6 w-1.5 h-1.5 rounded-full bg-slate-300 opacity-25" />
      </div>

      {/* 1. APP LOGO */}
      <div className="flex justify-center mt-2 mb-2 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
          <span className="font-['Space_Grotesk'] font-extrabold text-white text-2xl">R</span>
        </div>
      </div>

      {/* 2. HEADLINE & SUBTITLE */}
      <div className="text-center relative z-10 mb-2">
        <h2 className="font-['Space_Grotesk'] text-xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
          From Beginner to <span className="text-[#2563EB]">Job-Ready</span>
          <br />
          <span className="text-[#2563EB]">Step by Step.</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed px-2">
          AI-powered roadmaps, curated resources and projects to accelerate your tech career.
        </p>
      </div>

      {/* 3. ROADMAP VISUAL - STAGGERED CARDS WITH CONNECTING PATH */}
      <div className="relative h-[200px] my-2 relative z-10">
        {/* Curved Path Connection Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Path Line 1 */}
          <div className="absolute top-[135px] left-[75px] w-[75px] h-[2px] bg-slate-300/60 -rotate-[35deg]" />
          <div className="absolute top-[115px] left-[135px] w-1.5 h-1.5 rounded-full bg-slate-400" />
          {/* Path Line 2 */}
          <div className="absolute top-[70px] left-[165px] w-[75px] h-[2px] bg-slate-300/60 -rotate-[35deg]" />
          <div className="absolute top-[50px] left-[225px] w-1.5 h-1.5 rounded-full bg-slate-400" />
          {/* Decorative Arrow */}
          <div className="absolute top-2 right-4 text-blue-600 opacity-40 -rotate-[30deg]">
            <Play size={24} fill="#2563EB" />
          </div>
        </div>

        {/* Card 01 - Bottom Left */}
        <div className="absolute bottom-2 left-2 w-[90px] bg-white p-2.5 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-xl bg-[#E3F2FD] text-[#2563EB] flex items-center justify-center mb-1">
            <CheckCircle size={16} />
          </div>
          <span className="text-xs font-extrabold text-[#2563EB]">01</span>
          <span className="text-[10px] font-semibold text-slate-700 leading-tight">Choose<br />Your Tech</span>
        </div>

        {/* Card 02 - Center */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[94px] bg-white p-2.5 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] text-[#43A047] flex items-center justify-center mb-1">
            <Sparkles size={16} />
          </div>
          <span className="text-xs font-extrabold text-[#43A047]">02</span>
          <span className="text-[10px] font-semibold text-slate-700 leading-tight">AI Curated<br />Journey</span>
        </div>

        {/* Card 03 - Top Right */}
        <div className="absolute top-2 right-2 w-[90px] bg-white p-2.5 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-xl bg-[#FFF3E0] text-[#F57C00] flex items-center justify-center mb-1">
            <Briefcase size={16} />
          </div>
          <span className="text-xs font-extrabold text-[#F57C00]">03</span>
          <span className="text-[10px] font-semibold text-slate-700 leading-tight">Land The<br />Job</span>
        </div>
      </div>

      {/* 4. TRUST SECTION & STATS ROW */}
      <div className="relative z-10 space-y-3 my-2">
        {/* 4 Stat Items Grid */}
        <div className="bg-white p-2.5 rounded-2xl border border-slate-100 shadow-sm grid grid-cols-4 divide-x divide-slate-100 text-center">
          <div className="flex flex-col items-center px-0.5">
            <div className="w-7 h-7 rounded-xl bg-[#EBF2FF] text-[#2563EB] flex items-center justify-center mb-1">
              <ShieldCheck size={14} />
            </div>
            <span className="text-[10px] font-extrabold text-slate-900 leading-none">Trusted</span>
            <span className="text-[8px] text-slate-500 mt-0.5">10K+ Devs</span>
          </div>

          <div className="flex flex-col items-center px-0.5">
            <div className="w-7 h-7 rounded-xl bg-[#FFF8E1] text-[#F59E0B] flex items-center justify-center mb-1">
              <Star size={14} className="fill-amber-400" />
            </div>
            <span className="text-[10px] font-extrabold text-slate-900 leading-none">4.8/5</span>
            <span className="text-[8px] text-slate-500 mt-0.5">Rating</span>
          </div>

          <div className="flex flex-col items-center px-0.5">
            <div className="w-7 h-7 rounded-xl bg-[#EBF2FF] text-[#2563EB] flex items-center justify-center mb-1">
              <Users size={14} />
            </div>
            <span className="text-[10px] font-extrabold text-slate-900 leading-none">50+</span>
            <span className="text-[8px] text-slate-500 mt-0.5">Paths</span>
          </div>

          <div className="flex flex-col items-center px-0.5">
            <div className="w-7 h-7 rounded-xl bg-[#FEE2E2] text-[#EF4444] flex items-center justify-center mb-1">
              <Target size={14} />
            </div>
            <span className="text-[10px] font-extrabold text-slate-900 leading-none">95%</span>
            <span className="text-[8px] text-slate-500 mt-0.5">Job Ready</span>
          </div>
        </div>

        {/* Loved by section */}
        <div>
          <p className="text-[9px] font-semibold text-slate-400 text-center uppercase tracking-wider mb-1">
            Loved by developers from
          </p>
          <div className="flex justify-between items-center px-2 text-[9px] font-semibold text-slate-600">
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
        <button
          onClick={onStartOnboarding}
          className="w-full py-3 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <span>Find My Roadmap</span>
          <div className="w-6 h-6 rounded-lg bg-white text-[#2563EB] flex items-center justify-center">
            <ArrowRight size={12} />
          </div>
        </button>

        <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-slate-400 font-medium">
          <Lock size={12} className="text-slate-400" />
          <span>No credit card required</span>
        </div>
      </div>
    </div>
  );
}
