"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Bell,
  Flame,
  Zap,
  BookOpen,
  Check,
  Lock,
  Play,
  ArrowRight,
  Sparkles,
  Send,
  User,
  CheckCircle2,
  Bookmark,
  Award,
  ChevronRight,
  Globe,
  HelpCircle,
  Code
} from "lucide-react";

// ─── 1. ROADMAP SCREEN UI PREVIEW ───────────────────────────────────────────
function RoadmapScreenPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col font-['Inter'] text-[#0F172A] p-3 overflow-hidden text-left select-none">
      {/* Header */}
      <div className="bg-[#0F172A] text-white p-3 rounded-2xl mb-3 shadow-sm">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-bold uppercase tracking-wider text-[#60A5FA]">Full Stack Path</span>
          <span className="text-[9px] bg-blue-600/30 text-blue-300 font-semibold px-2 py-0.5 rounded-full">45% Done</span>
        </div>
        <h4 className="font-['Space_Grotesk'] text-xs font-bold text-white leading-snug">Full Stack Engineer Roadmap</h4>
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
          <div className="bg-[#2563EB] h-full rounded-full w-[45%]" />
        </div>
      </div>

      {/* Phase 1 - Completed */}
      <div className="mb-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Check size={10} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800">Phase 1: HTML & CSS</p>
              <p className="text-[8px] text-slate-400">8 Topics • Completed</p>
            </div>
          </div>
          <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">DONE</span>
        </div>
      </div>

      {/* Phase 2 - Active Topic Card */}
      <div className="mb-2 bg-white p-2.5 rounded-xl border-2 border-blue-500 shadow-sm relative">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-extrabold text-blue-600 uppercase tracking-wider">Phase 2 • Active</span>
          <span className="text-[8px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">INTERMEDIATE</span>
        </div>
        <p className="text-[11px] font-bold text-slate-900 leading-tight">DOM Manipulation & Async JS</p>
        <p className="text-[9px] text-slate-500 mt-0.5 line-clamp-1">Event listeners, promises, and fetch API masterclass.</p>

        {/* Video Thumbnail Box */}
        <div className="mt-2 relative rounded-lg overflow-hidden bg-slate-900 aspect-video flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10">
            <Play size={12} className="ml-0.5 fill-white" />
          </div>
          <span className="absolute bottom-1 left-2 text-[8px] font-semibold text-white z-10">14:20 mins</span>
        </div>

        <button className="w-full mt-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1">
          <span>Start Lesson</span>
          <ArrowRight size={10} />
        </button>
      </div>

      {/* Phase 3 - Locked */}
      <div className="bg-slate-100/80 p-2.5 rounded-xl border border-slate-200 opacity-60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Lock size={12} className="text-slate-400" />
            <div>
              <p className="text-[10px] font-bold text-slate-700">Phase 3: React & Next.js</p>
              <p className="text-[8px] text-slate-400">15 Topics • Locked</p>
            </div>
          </div>
          <span className="text-[8px] font-bold text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded">LOCKED</span>
        </div>
      </div>
    </div>
  );
}

// ─── 2. DASHBOARD SCREEN UI PREVIEW ─────────────────────────────────────────
function DashboardScreenPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col font-['Inter'] text-[#0F172A] p-3 overflow-hidden text-left select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[9px] text-slate-400 font-medium">Good morning,</span>
          <h4 className="font-['Space_Grotesk'] text-xs font-bold text-slate-900 leading-tight">Sohel 👋</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center relative text-slate-600">
            <Bell size={12} />
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-1 right-1" />
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">
            SK
          </div>
        </div>
      </div>

      {/* 3 Stats Banner */}
      <div className="bg-[#0F172A] text-white p-2.5 rounded-2xl shadow-sm mb-3">
        <div className="grid grid-cols-3 divide-x divide-slate-800 text-center pb-2">
          <div>
            <div className="flex items-center justify-center gap-0.5 text-amber-400">
              <Flame size={12} />
              <span className="font-['Space_Grotesk'] text-xs font-bold">6</span>
            </div>
            <span className="text-[7px] text-slate-400 font-bold uppercase">Streak</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-0.5 text-amber-300">
              <Zap size={12} />
              <span className="font-['Space_Grotesk'] text-xs font-bold">1,250</span>
            </div>
            <span className="text-[7px] text-slate-400 font-bold uppercase">XP</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-0.5 text-blue-400">
              <BookOpen size={12} />
              <span className="font-['Space_Grotesk'] text-xs font-bold">14</span>
            </div>
            <span className="text-[7px] text-slate-400 font-bold uppercase">Done</span>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-1.5">
          <p className="text-[7px] font-bold text-slate-400 uppercase tracking-wider text-center mb-1">Weekly Activity</p>
          <div className="flex justify-between px-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="text-[7px] font-semibold text-slate-400">{d}</span>
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${i < 5 ? "bg-blue-500 text-white" : i === 5 ? "bg-white text-blue-600" : "bg-slate-800 border border-slate-700"}`}>
                  {i < 5 ? <Check size={8} /> : i === 5 ? <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Path Card */}
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-extrabold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">PHASE 2 OF 4</span>
            <span className="text-[8px] text-slate-400">Full Stack Track</span>
          </div>
          <p className="font-['Space_Grotesk'] text-xs font-bold text-slate-900 leading-tight">Full Stack Developer</p>
          <p className="text-[9px] text-slate-500 mt-1">Now: JavaScript & Async API Calls</p>

          <div className="flex items-center gap-1 mt-3">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex-1 h-1 rounded-full ${step === 1 ? "bg-emerald-500" : step === 2 ? "bg-blue-600" : "bg-slate-200"}`}
              />
            ))}
          </div>
        </div>

        <button className="w-full mt-2 py-1.5 bg-blue-600 text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1">
          <span>Continue Learning</span>
          <ArrowRight size={10} />
        </button>
      </div>
    </div>
  );
}

// ─── 3. PROFILE SCREEN UI PREVIEW ───────────────────────────────────────────
function ProfileScreenPreview({ isDesktop }) {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col font-['Inter'] text-[#0F172A] p-3 overflow-hidden text-left select-none">
      {/* Profile Header */}
      <div className="bg-[#0F172A] text-white p-3 rounded-2xl shadow-sm mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-sm flex items-center justify-center border border-white/20">
            SK
          </div>
          <div>
            <h4 className="font-['Space_Grotesk'] text-xs font-bold text-white">Sohel Khan</h4>
            <p className="text-[9px] text-blue-300">Intermediate Level • Full Stack</p>
          </div>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-white p-2 rounded-xl border border-slate-200 text-center">
          <span className="text-[8px] font-bold text-amber-500 block uppercase">Streak</span>
          <span className="font-['Space_Grotesk'] text-xs font-bold text-slate-900">6 Days</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-200 text-center">
          <span className="text-[8px] font-bold text-blue-600 block uppercase">XP</span>
          <span className="font-['Space_Grotesk'] text-xs font-bold text-slate-900">1,250</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-200 text-center">
          <span className="text-[8px] font-bold text-emerald-600 block uppercase">Done</span>
          <span className="font-['Space_Grotesk'] text-xs font-bold text-slate-900">14 Topics</span>
        </div>
      </div>

      {/* Achievements / Milestones */}
      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs flex-1">
        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Milestones Earned</span>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded-lg">
            <CheckCircle2 size={12} className="text-emerald-500" />
            <span className="text-[9px] font-medium text-slate-700">HTML & CSS Specialist</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded-lg">
            <CheckCircle2 size={12} className="text-emerald-500" />
            <span className="text-[9px] font-medium text-slate-700">JavaScript ES6 Master</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 4. MENTOR SCREEN UI PREVIEW ────────────────────────────────────────────
function MentorScreenPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col font-['Inter'] text-[#0F172A] p-2.5 overflow-hidden text-left select-none">
      {/* AI Header */}
      <div className="bg-white border border-slate-200 p-2 rounded-xl flex items-center justify-between mb-2 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Sparkles size={12} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-900">AI Pair Programmer</p>
            <p className="text-[8px] text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1 h-1 bg-emerald-500 rounded-full" />
              Online
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 space-y-2 overflow-hidden py-1">
        {/* User */}
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white p-2 rounded-xl rounded-tr-none text-[9px] max-w-[85%] leading-relaxed">
            Why do we pass a dependency array to useEffect?
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start gap-1.5">
          <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
            <Sparkles size={10} />
          </div>
          <div className="bg-white border border-slate-200 p-2 rounded-xl rounded-tl-none text-[9px] text-slate-800 max-w-[85%] space-y-1.5">
            <p>It tells React when to re-run your effect function!</p>
            <div className="bg-slate-900 text-green-400 p-1.5 rounded text-[8px] font-mono leading-tight">
              useEffect(() =&gt; {"{"}...{"}"}, [count]);
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="mt-auto pt-1 flex gap-1">
        <div className="flex-1 bg-white border border-slate-200 px-2 py-1 rounded-full text-[9px] text-slate-400">
          Ask AI Mentor...
        </div>
        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
          <Send size={10} />
        </div>
      </div>
    </div>
  );
}

// ─── MOCKUP CONTAINER COMPONENTS ───────────────────────────────────────────
const mockups = [
  {
    type: "phone",
    title: "Full Stack Roadmap Path",
    subtitle: "Curated 90-Day Learning Plan",
    screen: "roadmap",
    translateY: "",
  },
  {
    type: "phone",
    title: "Interactive Progress Tracker",
    subtitle: "Daily Streak & Task Milestones",
    screen: "dashboard",
    translateY: "translate-y-12",
  },
  {
    type: "desktop",
    title: "Developer Analytics Dashboard",
    subtitle: "XP Earnings & Profile Proof-of-Work",
    screen: "profile",
    translateY: "",
  },
  {
    type: "phone",
    title: "24/7 AI Pair Programmer",
    subtitle: "Context-Aware Debugging & Guidance",
    screen: "mentor",
    translateY: "translate-y-6",
  },
];

function PhoneMockup({ title, subtitle, screen, translateY }) {
  return (
    <div className={`inline-block w-[280px] sm:w-[310px] aspect-[9/19] rounded-[2.5rem] bg-[#0F172A] p-2.5 flex-shrink-0 shadow-2xl ${translateY} border border-slate-800`}>
      <div className="w-full h-full bg-[#F8FAFC] rounded-[2rem] overflow-hidden flex flex-col relative group">
        {/* Status Bar */}
        <div className="h-7 bg-[#0F172A] flex items-center justify-between px-4 text-white text-[10px] font-mono">
          <span>9:41</span>
          <div className="w-12 h-3 bg-black rounded-full mx-auto" />
          <div className="flex gap-1 items-center">
            <span className="text-[9px]">5G</span>
          </div>
        </div>

        {/* Live Code UI Renderer Container */}
        <div className="flex-1 relative overflow-hidden bg-slate-900">
          {screen === "roadmap" && <RoadmapScreenPreview />}
          {screen === "dashboard" && <DashboardScreenPreview />}
          {screen === "profile" && <ProfileScreenPreview isDesktop={false} />}
          {screen === "mentor" && <MentorScreenPreview />}

          {/* Overlay Badge Header */}
          <div className="absolute top-2 left-2 right-2 p-2 bg-[#0F172A]/85 backdrop-blur-md rounded-xl text-white border border-white/10 shadow-lg pointer-events-none">
            <p className="font-['Space_Grotesk'] text-xs font-bold truncate">{title}</p>
            <p className="font-['Inter'] text-[9px] text-slate-300 truncate">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopMockup({ title, subtitle, screen }) {
  return (
    <div className="inline-block w-[480px] sm:w-[540px] aspect-[16/10] rounded-[2rem] bg-[#0F172A] p-2.5 flex-shrink-0 shadow-2xl border border-slate-800">
      <div className="w-full h-full bg-[#F8FAFC] rounded-[1.5rem] overflow-hidden flex flex-col relative group">
        {/* Browser Chrome Bar */}
        <div className="h-7 bg-[#1E293B] flex items-center px-3 gap-2 border-b border-slate-800">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="flex-1 h-4 ml-4 bg-[#0F172A] text-slate-400 text-[9px] font-mono px-3 rounded-full flex items-center max-w-[240px] truncate border border-slate-700">
            https://roadmapfinder.com/profile
          </div>
        </div>

        {/* Live Code UI Renderer Container */}
        <div className="flex-1 relative overflow-hidden bg-slate-900">
          {screen === "profile" ? (
            <ProfileScreenPreview isDesktop={true} />
          ) : (
            <DashboardScreenPreview />
          )}

          {/* Floating Info Pill */}
          <div className="absolute bottom-3 left-3 p-2.5 bg-[#0F172A]/90 backdrop-blur-md rounded-xl text-white border border-white/10 shadow-xl max-w-xs pointer-events-none">
            <p className="font-['Space_Grotesk'] text-xs font-bold">{title}</p>
            <p className="font-['Inter'] text-[10px] text-slate-300">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white" id="features">
      <ScrollReveal direction="up" duration={0.6}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 mb-10">
          <span className="inline-block px-3.5 py-1 bg-[#004ac6]/10 text-[#004ac6] rounded-full font-['Inter'] text-xs font-bold tracking-wider uppercase mb-3">
            Real App Experience
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold max-w-2xl text-[#191c1e]">
            One ecosystem for your entire career journey.
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} direction="up">
        {/* Continuous Marquee Strip */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap px-4 hover:[animation-play-state:paused]">
          {mockups.map((item, idx) =>
            item.type === "phone" ? (
              <PhoneMockup
                key={idx}
                title={item.title}
                subtitle={item.subtitle}
                screen={item.screen}
                translateY={item.translateY}
              />
            ) : (
              <DesktopMockup
                key={idx}
                title={item.title}
                subtitle={item.subtitle}
                screen={item.screen}
              />
            )
          )}

          {/* Duplicate set for infinite continuous scrolling loop */}
          {mockups.map((item, idx) =>
            item.type === "phone" ? (
              <PhoneMockup
                key={`dup-${idx}`}
                title={item.title}
                subtitle={item.subtitle}
                screen={item.screen}
                translateY={item.translateY}
              />
            ) : (
              <DesktopMockup
                key={`dup-${idx}`}
                title={item.title}
                subtitle={item.subtitle}
                screen={item.screen}
              />
            )
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
