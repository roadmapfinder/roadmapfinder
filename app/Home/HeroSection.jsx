"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Star, Users, Award, Smartphone, ArrowRight, Play, CheckCircle, Lock, LockOpen, Zap, Flame, Target, Cpu, ChevronLeft, ChevronRight, Sparkles, BookOpen, Clock, Bell, Map, Check, Palette, FileText, FolderOpen, ChevronDown, Menu } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState('onboarding1'); // 'onboarding1', 'onboarding2', 'home' or 'roadmap'
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);

    // Auto-cycle screens every 4 seconds
    const interval = setInterval(() => {
      setActiveScreen(prev => {
        if (prev === 'onboarding1') return 'onboarding2';
        if (prev === 'onboarding2') return 'home';
        if (prev === 'home') return 'roadmap';
        return 'onboarding1';
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="px-3 xs:px-4 sm:px-6 lg:px-8">
      <section
        className={`mb-6 xs:mb-8 lg:mb-12 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[550px]">

            {/* Left Content Column */}
            <div className="lg:w-[55%] p-6 sm:p-10 xl:p-14 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">

              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
                  <span className="block mb-2">Stop Wasting Time on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Random Tutorials</span>.</span>
                  <span className="relative inline-block mt-2 lg:mt-0">
                    Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Roadmap</span> Starts Here.
                    <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,10 Q25,2 50,6 T100,10" stroke="#818CF8" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-base text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Backed by the best YouTube tutorials, with assignments to prove you actually learned it. <span className="font-semibold text-gray-800">Track streaks, earn XP, and go from zero to job-ready.</span>
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
                  <a
                    href="/application-a74c634f-833f-4306-8ede-166469a59259.apk"
                    download="application-a74c634f-833f-4306-8ede-166469a59259.apk"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl text-base font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/30 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <Smartphone className="w-6 h-6 relative z-10 animate-bounce-slow" />
                    <span className="relative z-10">Download the App</span>
                  </a>

                  <button
                    onClick={() => handleNavigation("/RoadmapPage")}
                    className="w-full sm:w-auto bg-white text-gray-700 py-3 px-6 rounded-xl text-base font-semibold border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Continue on Web</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-500 font-medium bg-white/50 backdrop-blur-sm py-3 px-5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>10K+ Users</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>4.8 Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span>Expert Verified</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Content Column - Emulator Mockup */}
            <div className="w-full lg:w-[45%] relative flex items-center justify-center p-8 lg:p-4 xl:p-8 bg-gray-50 overflow-hidden border-t lg:border-t-0 lg:border-l border-gray-100">
              {/* Background Decorative Blobs */}
              <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

              {/* Phone Frame */}
              <div className="relative z-10 w-[280px] h-[580px] xl:w-[300px] xl:h-[600px] bg-black rounded-[40px] shadow-2xl border-[8px] border-black overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 flex-shrink-0">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-black z-50 rounded-b-2xl w-40 mx-auto"></div>

                {/* Screen Content Container */}
                <div className="relative w-full h-full bg-gray-50 overflow-hidden">

                  {/* Onboarding Screen 1 UI */}
                  <div className={`absolute inset-0 transition-opacity duration-700 bg-[#f5f6fa] ${activeScreen === 'onboarding1' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                    <div className="h-full flex flex-col pt-6">
                      {/* Header */}
                      <div className="flex items-center px-4 py-2 gap-2">
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                        <span className="text-sm font-bold text-gray-900 mr-2">Experience</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[50%] h-full bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-[10px] font-medium text-gray-400">Step 2 of 4</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 px-5 pt-4">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                            <Star className="w-8 h-8 text-blue-600" />
                          </div>
                        </div>
                        <h2 className="text-xl font-extrabold text-center text-gray-900 tracking-tight mb-2">What's your level?</h2>
                        <p className="text-xs text-center text-gray-500 mb-6 leading-relaxed">
                          We'll adjust the difficulty based on your current knowledge.
                        </p>

                        <div className="space-y-2.5">
                          {/* Option 1 */}
                          <div className="flex items-center p-3 rounded-xl bg-white border-2 border-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.12)]">
                            <div className="flex-1">
                              <div className="text-[13px] font-bold text-blue-700">Absolute Beginner</div>
                              <div className="text-[10px] text-gray-500">I'm just starting out.</div>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center ml-2">
                              <Check className="w-3 h-3 text-blue-600" />
                            </div>
                          </div>
                          {/* Option 2 */}
                          <div className="flex items-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <div className="flex-1">
                              <div className="text-[13px] font-bold text-gray-900">Some Experience</div>
                              <div className="text-[10px] text-gray-400">I know the basics.</div>
                            </div>
                          </div>
                          {/* Option 3 */}
                          <div className="flex items-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <div className="flex-1">
                              <div className="text-[13px] font-bold text-gray-900">Advanced</div>
                              <div className="text-[10px] text-gray-400">I'm looking to master it.</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="p-5 pb-8">
                        <button className="w-full bg-blue-600 text-white flex items-center justify-center gap-2 py-3.5 rounded-xl text-[13px] font-bold shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                          <span>Continue</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Onboarding Screen 2 UI */}
                  <div className={`absolute inset-0 transition-opacity duration-700 bg-[#f5f6fa] ${activeScreen === 'onboarding2' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                    <div className="h-full flex flex-col pt-6">
                      {/* Header */}
                      <div className="flex items-center px-4 py-2 gap-2">
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                        <span className="text-sm font-bold text-gray-900 mr-2">Learning Path</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[83%] h-full bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-[10px] font-medium text-gray-400">Step 4 of 4</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 px-5 pt-4">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                            <Cpu className="w-8 h-8 text-blue-600" />
                          </div>
                        </div>
                        <h2 className="text-xl font-extrabold text-center text-gray-900 tracking-tight mb-2">Why are you learning?</h2>
                        <p className="text-xs text-center text-gray-500 mb-6 leading-relaxed">
                          We'll tailor your roadmap based on your ultimate objective.
                        </p>

                        <div className="space-y-2.5">
                          {/* Option 1 */}
                          <div className="flex items-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                              <Star className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-[13px] font-bold text-gray-900">For Fun</div>
                              <div className="text-[10px] text-gray-400">Learning as a hobby or personal interest.</div>
                            </div>
                          </div>
                          {/* Option 2 */}
                          <div className="flex items-center p-3 rounded-xl bg-white border-2 border-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.12)]">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                              <Target className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-[13px] font-bold text-blue-700">Job</div>
                              <div className="text-[10px] text-gray-500">Advancing your career or finding a new role.</div>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center ml-2">
                              <Check className="w-3 h-3 text-blue-600" />
                            </div>
                          </div>
                          {/* Option 3 */}
                          <div className="flex items-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                              <Zap className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-[13px] font-bold text-gray-900">Startup</div>
                              <div className="text-[10px] text-gray-400">Building your own product or company.</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="p-5 pb-8">
                        <button className="w-full bg-blue-600 text-white flex items-center justify-center gap-2 py-3.5 rounded-xl text-[13px] font-bold shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                          <span>Generate My Roadmap</span>
                          <Sparkles className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Home Screen UI */}
                  <div className={`absolute inset-0 transition-opacity duration-700 bg-[#F1F5F9] ${activeScreen === 'home' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                    <div className="h-full flex flex-col relative pb-14 pt-6">
                      {/* App Header */}
                      <div className="px-4 py-3 flex justify-between items-center">
                        <div>
                          <div className="text-[10px] text-slate-500 font-medium">Good morning,</div>
                          <div className="text-base font-extrabold text-slate-900 tracking-tight">Learner 👋</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-[10px] bg-white border border-slate-200 flex items-center justify-center relative shadow-sm">
                            <Bell className="w-4 h-4 text-slate-600" />
                            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                          </div>
                          <div className="w-8 h-8 rounded-[10px] bg-blue-800 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                            L
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 px-4 overflow-hidden">
                        {/* Stats Banner */}
                        <div className="bg-blue-600 rounded-2xl p-4 shadow-lg mb-4 shadow-blue-600/20">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex flex-col items-center flex-1">
                              <div className="flex items-center gap-1 mb-0.5">
                                <span className="text-sm">🔥</span>
                                <span className="text-lg font-black text-white">4</span>
                              </div>
                              <span className="text-[7px] font-bold text-white/60 tracking-wider">DAY STREAK</span>
                            </div>
                            <div className="w-px h-8 bg-white/10 mx-1"></div>
                            <div className="flex flex-col items-center flex-1">
                              <div className="flex items-center gap-1 mb-0.5">
                                <span className="text-sm">⚡</span>
                                <span className="text-lg font-black text-white">450</span>
                              </div>
                              <span className="text-[7px] font-bold text-white/60 tracking-wider">XP EARNED</span>
                            </div>
                            <div className="w-px h-8 bg-white/10 mx-1"></div>
                            <div className="flex flex-col items-center flex-1">
                              <div className="flex items-center gap-1 mb-0.5">
                                <span className="text-sm">📚</span>
                                <span className="text-lg font-black text-white">12</span>
                              </div>
                              <span className="text-[7px] font-bold text-white/60 tracking-wider">TOPICS DONE</span>
                            </div>
                          </div>
                          <div className="h-px bg-white/10 mb-3"></div>
                          <div className="flex justify-between items-end">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                              <div key={i} className="flex flex-col items-center gap-1">
                                <span className={`text-[8px] font-bold ${i === 3 ? 'text-white' : 'text-white/50'}`}>{day}</span>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 3 ? 'bg-white' : i < 3 ? 'bg-blue-400' : 'border border-white/20'}`}>
                                  {i < 3 && <Check className="w-3 h-3 text-white" />}
                                  {i === 3 && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Current Path */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[13px] font-extrabold text-slate-900">Current path</span>
                          <span className="text-[10px] font-bold text-blue-600">View roadmap →</span>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm mb-4">
                          <div className="flex items-start mb-3">
                            <div className="flex-1 pr-2">
                              <div className="inline-block px-2 py-0.5 bg-blue-50 rounded text-[8px] font-bold text-blue-700 mb-1.5">PHASE 3 OF 12</div>
                              <h3 className="text-[13px] font-extrabold text-slate-900 mb-0.5 leading-tight">Full Stack Web Dev</h3>
                              <p className="text-[9px] font-medium text-slate-500">48 topics across 12 phases</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg shrink-0">🌐</div>
                          </div>
                          <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-2 py-1.5 mb-3">
                            <BookOpen className="w-3 h-3 text-blue-600" />
                            <span className="text-[9px] font-bold text-blue-700 flex-1 truncate">Now: React Basics</span>
                            <div className="flex items-center gap-1 shrink-0">
                              <Clock className="w-3 h-3 text-slate-500" />
                              <span className="text-[8px] font-bold text-slate-500">2h</span>
                            </div>
                          </div>
                          <button className="w-full bg-slate-900 text-white flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] font-bold">
                            Continue Learning <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Bottom Nav Mockup */}
                      <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t border-slate-200 flex justify-around items-center px-4 pb-2 z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
                        <div className="flex flex-col items-center gap-1">
                          <Map className="w-5 h-5 text-blue-600 fill-blue-600/20" />
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <BookOpen className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Users className="w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Roadmap Screen UI */}
                  <div className={`absolute inset-0 transition-opacity duration-700 bg-[#F8FAFF] ${activeScreen === 'roadmap' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                    <div className="h-full flex flex-col relative pb-14 pt-6">
                      {/* Premium Header Architecture */}
                      <div className="bg-white border-b border-[#E2E8F0] shadow-[0_4px_12px_rgba(0,0,0,0.03)] z-10 pb-3">
                        <div className="flex items-center justify-between px-4 h-12">
                          <div className="w-8 h-8 rounded-xl bg-[#F8FAFF] flex items-center justify-center border border-[#F1F5F9]">
                            <ChevronLeft className="w-5 h-5 text-[#111827]" />
                          </div>
                          <div className="flex-1 text-center">
                            <h2 className="text-[14px] font-black text-[#111827] truncate px-2">Learning Path</h2>
                          </div>
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                            <div className="flex flex-col gap-[3px]">
                              <div className="w-[3px] h-[3px] bg-[#111827] rounded-full"></div>
                              <div className="w-[3px] h-[3px] bg-[#111827] rounded-full"></div>
                              <div className="w-[3px] h-[3px] bg-[#111827] rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Header Metrics */}
                        <div className="flex items-center justify-between px-6 mt-2">
                          <div className="flex flex-col items-center">
                            <span className="text-[14px] font-black text-[#111827]">4</span>
                            <span className="text-[8px] font-bold text-[#94A3B8] mt-0.5">Phases</span>
                          </div>
                          <div className="w-px h-6 bg-[#E2E8F0]"></div>
                          <div className="flex flex-col items-center">
                            <span className="text-[14px] font-black text-[#111827]">12</span>
                            <span className="text-[8px] font-bold text-[#94A3B8] mt-0.5">Topics</span>
                          </div>
                          <div className="w-px h-6 bg-[#E2E8F0]"></div>
                          <div className="flex flex-col items-center">
                            <span className="text-[14px] font-black text-[#111827]">0%</span>
                            <span className="text-[8px] font-bold text-[#94A3B8] mt-0.5">Mastered</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Scroll */}


                      {/* Intro */}
                      <div className="px-2 mb-2 flex flex-col items-center">
                        <p className="text-[10px] text-[#64748B] text-center mb-3 leading-relaxed">
                          Master your craft with industry-standard curriculum.
                        </p>
                        <div className="flex items-center gap-2 bg-[#EFF6FF] px-3 py-2 rounded-xl border border-[#DBEAFE]">
                          <Play className="w-3 h-3 text-[#2563EB] fill-[#2563EB]" />
                          <span className="text-[8px] font-bold text-[#2563EB]">Curated masterclasses included in every topic</span>
                        </div>


                        {/* Phase Block */}
                        <div className="mb-6">
                          {/* Phase Header */}
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center mr-3 shadow-[0_4px_8px_rgba(37,99,235,0.25)]">
                              <span className="text-white text-[14px] font-black">1</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-[7px] font-extrabold text-[#94A3B8] tracking-widest mb-0.5">STEP 1</div>
                              <div className="text-[14px] font-black text-[#111827]">Fundamentals</div>
                            </div>
                            <div className="bg-white px-2 py-1 rounded-lg border border-[#E2E8F0]">
                              <span className="text-[7px] font-extrabold text-[#64748B]">Flexible</span>
                            </div>
                          </div>

                          {/* Phase Body */}
                          <div className="flex pl-4">
                            <div className="w-0.5 rounded-full bg-[#2563EB] opacity-20 mr-4"></div>

                            {/* Topic Stack */}
                            <div className="flex-1 space-y-3 pb-4">
                              {/* Topic Card */}
                              <div className="bg-white rounded-[16px] p-3 shadow-[0_6px_12px_rgba(0,0,0,0.03)] border border-[#F1F5F9]">
                                <div className="flex justify-between mb-2">
                                  <div className="flex-1 pr-2">
                                    <h3 className="text-[11px] font-extrabold text-[#111827] mb-1.5 leading-tight">Introduction to UX</h3>
                                    <div className="flex items-center gap-1.5">
                                      <div className="px-1.5 py-0.5 rounded-md bg-[#10B98112]">
                                        <span className="text-[6px] font-extrabold text-[#10B981]">STUDENT</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-[70px] h-[45px] rounded-xl bg-black overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Video preview" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                      <div className="w-5 h-5 rounded-full bg-white/40 flex items-center justify-center">
                                        <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-[8px] text-[#64748B] leading-[1.4] mb-3 line-clamp-2">Learn the basics of User Experience design and why it matters in modern app development.</p>
                                <div className="flex items-center gap-1">
                                  <span className="text-[9px] font-extrabold text-[#2563EB]">Start Lesson</span>
                                  <ChevronRight className="w-3 h-3 text-[#2563EB]" />
                                </div>
                              </div>

                              {/* Locked Topic Card */}
                              <div className="bg-white rounded-[16px] p-3 shadow-[0_6px_12px_rgba(0,0,0,0.03)] border border-[#F1F5F9] opacity-65">
                                <div className="flex justify-between mb-2">
                                  <div className="flex-1 pr-2">
                                    <h3 className="text-[11px] font-extrabold text-[#111827] mb-1.5 leading-tight">Design Thinking Process</h3>
                                    <div className="flex items-center gap-1.5">
                                      <div className="px-1.5 py-0.5 rounded-md bg-[#64748B12]">
                                        <span className="text-[6px] font-extrabold text-[#64748B]">LOCKED</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-[70px] h-[45px] rounded-xl bg-black overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Locked video" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                      <div className="w-5 h-5 rounded-full bg-black/50 flex items-center justify-center">
                                        <Lock className="w-2.5 h-2.5 text-white" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-[8px] text-[#64748B] leading-[1.4] mb-3 line-clamp-2">A step-by-step walkthrough of the five stages of design thinking.</p>
                                <div className="flex items-center gap-1">
                                  <span className="text-[9px] font-extrabold text-[#64748B]">Locked</span>
                                  <Lock className="w-2.5 h-2.5 text-[#64748B] ml-0.5" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Bottom Nav Mockup */}
                      <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t border-[#E2E8F0] flex justify-around items-center px-4 pb-2 z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
                        <div className="flex flex-col items-center gap-1">
                          <Map className="w-5 h-5 text-[#2563EB] fill-[#2563EB]/20" />
                          <div className="w-1 h-1 bg-[#2563EB] rounded-full"></div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <BookOpen className="w-5 h-5 text-[#94A3B8]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Users className="w-5 h-5 text-[#94A3B8]" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;