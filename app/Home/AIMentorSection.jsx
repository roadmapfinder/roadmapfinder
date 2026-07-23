"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function AIMentorSection() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* Left: Text Content */}
      <ScrollReveal direction="right" duration={0.6}>
        <div className="space-y-8">
          <div className="w-16 h-16 bg-[#2563eb] text-white rounded-2xl flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              smart_toy
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold leading-tight text-[#191c1e]">
            Your 24/7 AI pair programmer.
          </h2>
          <p className="font-['Inter'] text-lg text-[#434655] leading-relaxed">
            Stuck on a bug? Need a complex concept explained like you're 5? RoadmapFinder's AI Mentor
            is integrated into every lesson. It knows exactly what you're learning and provides
            context-aware guidance without giving away the answer.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">check_circle</span>
              <span className="font-['Inter'] font-semibold text-[#191c1e]">Explains code in plain English</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">check_circle</span>
              <span className="font-['Inter'] font-semibold text-[#191c1e]">Provides interactive debugging hints</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">check_circle</span>
              <span className="font-['Inter'] font-semibold text-[#191c1e]">Suggests supplementary reading</span>
            </li>
          </ul>
        </div>
      </ScrollReveal>

      {/* Right: AI Chat Window Mock */}
      <ScrollReveal direction="left" delay={0.2} duration={0.6}>
        <div className="bg-white border border-[#c3c6d7] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden h-auto md:h-[500px] flex flex-col">
          {/* Window chrome */}
          <div className="flex items-center gap-3 pb-6 border-b border-[#c3c6d7]/30">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="font-['Inter'] text-xs text-[#737686] ml-4 font-medium">AI Mentor Session</span>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto py-6 space-y-6">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-[#004ac6] text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-['Inter'] leading-relaxed">
                I'm really confused about React hooks. Why do we need dependency arrays in useEffect?
              </div>
            </div>

            {/* AI response */}
            <div className="flex justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f6] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#004ac6] text-sm">smart_toy</span>
              </div>
              <div className="bg-[#f2f4f6] text-[#191c1e] p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm space-y-3 font-['Inter'] leading-relaxed">
                <p>
                  Think of the dependency array as a "watch list". React only re-runs your effect if
                  something on that list changes.
                </p>
                <div className="bg-[#191c1e] text-green-400 p-3 rounded-lg font-mono text-[11px] leading-relaxed overflow-x-auto">
                  <span className="text-blue-400">useEffect</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-300">() =&gt; </span>
                  <span className="text-white">{"{"}</span>
                  <br />
                  <span className="text-white ml-4">  console.</span>
                  <span className="text-blue-300">log</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-300">"Count changed!"</span>
                  <span className="text-white">);</span>
                  <br />
                  <span className="text-white">{"}"}</span>
                  <span className="text-white">, [</span>
                  <span className="text-cyan-300">count</span>
                  <span className="text-white">]);</span>
                  <span className="text-gray-500"> {"// <--- Watch this"}</span>
                </div>
                <p>
                  If you leave it empty <code className="bg-[#191c1e] text-green-400 px-1.5 py-0.5 rounded text-[11px] font-mono">[]</code>, it only runs once when the component is born!
                </p>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="mt-auto pt-4 flex gap-2">
            <div className="flex-1 bg-[#f2f4f6] px-4 py-3 rounded-full text-[#737686] text-sm font-['Inter']">
              Type a question...
            </div>
            <button className="w-10 h-10 bg-[#004ac6] text-white rounded-full flex items-center justify-center hover:bg-[#003ea8] transition-colors shadow-md">
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
