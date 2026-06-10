"use client";

import { useState } from "react";

const features = [
  {
    label: "Personalized roadmap",
    description: "A learning path built around your goals and current skill level.",
    roadmapfinder: { status: "yes", note: "AI-generated for you" },
    chatgpt: { status: "maybe", note: "Only with manual prompting" },
    youtube: { status: "no", note: "No personalization" },
  },
  {
    label: "Structured learning path",
    description: "Clear phases from beginner to job-ready, in the right order.",
    roadmapfinder: { status: "yes", note: "Phase-based progression" },
    chatgpt: { status: "maybe", note: "Inconsistent across sessions" },
    youtube: { status: "no", note: "You assemble it yourself" },
  },
  {
    label: "Progress tracking",
    description: "XP, streaks, and milestones that keep you moving forward.",
    roadmapfinder: { status: "yes", note: "XP points & streaks" },
    chatgpt: { status: "no", note: "No memory between sessions" },
    youtube: { status: "no", note: "Watch history only" },
  },
  {
    label: "Curated resources",
    description: "Hand-picked YouTube videos and official docs, not random results.",
    roadmapfinder: { status: "yes", note: "Vetted videos & docs" },
    chatgpt: { status: "maybe", note: "Links vary in quality" },
    youtube: { status: "maybe", note: "Algorithm-driven, inconsistent" },
  },
  {
    label: "Career-focused path",
    description: "Built to take you from zero to a job-ready fullstack developer.",
    roadmapfinder: { status: "yes", note: "Job-ready by design" },
    chatgpt: { status: "maybe", note: "Depends on your prompts" },
    youtube: { status: "no", note: "No career framing" },
  },
];

const StatusIcon = ({ status, note }) => {
  if (status === "yes") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="text-xl" aria-label="Yes">✅</span>
        <span className="text-xs text-green-700 font-medium leading-snug text-center max-w-[110px]">{note}</span>
      </div>
    );
  }
  if (status === "maybe") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="text-xl" aria-label="Partial">⚠️</span>
        <span className="text-xs text-amber-700 font-medium leading-snug text-center max-w-[110px]">{note}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xl" aria-label="No">❌</span>
      <span className="text-xs text-red-500 font-medium leading-snug text-center max-w-[110px]">{note}</span>
    </div>
  );
};

export default function WhyDifferentSection() {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4 border border-blue-100 bg-blue-50 px-3 py-1 rounded-full">
            Why RoadmapFinder
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5 max-w-3xl mx-auto">
            Stop patching together a curriculum from ChatGPT and YouTube.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            ChatGPT answers questions. YouTube hosts videos. Neither gives you a
            structured, career-focused path with a coach watching your progress.
            RoadmapFinder does all three.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">

            {/* Column headers */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Feature
              </div>
              {/* RoadmapFinder header — highlighted */}
              <div className="px-6 py-4 bg-blue-600 flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm tracking-wide">RoadmapFinder</span>
                <span className="text-blue-200 text-xs font-medium">Your guided system</span>
              </div>
              <div className="px-6 py-4 flex flex-col items-center justify-center gap-1">
                <span className="text-gray-700 font-semibold text-sm">ChatGPT</span>
                <span className="text-gray-400 text-xs">AI assistant</span>
              </div>
              <div className="px-6 py-4 flex flex-col items-center justify-center gap-1">
                <span className="text-gray-700 font-semibold text-sm">YouTube</span>
                <span className="text-gray-400 text-xs">Video platform</span>
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, idx) => (
              <div
                key={feature.label}
                className={[
                  "grid grid-cols-4 border-b border-gray-100 last:border-b-0 transition-colors duration-150",
                  hoveredRow === idx ? "bg-gray-50" : "bg-white",
                ].join(" ")}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {/* Feature label */}
                <div className="px-6 py-5 flex flex-col justify-center gap-1">
                  <span className="text-sm font-semibold text-gray-800">{feature.label}</span>
                  <span className="text-xs text-gray-400 leading-snug">{feature.description}</span>
                </div>

                {/* RoadmapFinder cell */}
                <div className="px-6 py-5 flex items-center justify-center bg-blue-50 border-x border-blue-100">
                  <StatusIcon {...feature.roadmapfinder} />
                </div>

                {/* ChatGPT cell */}
                <div className="px-6 py-5 flex items-center justify-center">
                  <StatusIcon {...feature.chatgpt} />
                </div>

                {/* YouTube cell */}
                <div className="px-6 py-5 flex items-center justify-center">
                  <StatusIcon {...feature.youtube} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              {/* Feature title */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-bold text-gray-800">{feature.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{feature.description}</p>
              </div>

              {/* Three tool rows */}
              <div className="divide-y divide-gray-100">
                {/* RoadmapFinder */}
                <div className="flex items-center justify-between px-4 py-3 bg-blue-50">
                  <span className="text-xs font-semibold text-blue-700">RoadmapFinder</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base">
                      {feature.roadmapfinder.status === "yes" ? "✅" : feature.roadmapfinder.status === "maybe" ? "⚠️" : "❌"}
                    </span>
                    <span className={[
                      "text-xs font-medium",
                      feature.roadmapfinder.status === "yes" ? "text-green-700" : feature.roadmapfinder.status === "maybe" ? "text-amber-700" : "text-red-500"
                    ].join(" ")}>{feature.roadmapfinder.note}</span>
                  </div>
                </div>

                {/* ChatGPT */}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs font-semibold text-gray-500">ChatGPT</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base">
                      {feature.chatgpt.status === "yes" ? "✅" : feature.chatgpt.status === "maybe" ? "⚠️" : "❌"}
                    </span>
                    <span className={[
                      "text-xs font-medium",
                      feature.chatgpt.status === "yes" ? "text-green-700" : feature.chatgpt.status === "maybe" ? "text-amber-700" : "text-red-500"
                    ].join(" ")}>{feature.chatgpt.note}</span>
                  </div>
                </div>

                {/* YouTube */}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs font-semibold text-gray-500">YouTube</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base">
                      {feature.youtube.status === "yes" ? "✅" : feature.youtube.status === "maybe" ? "⚠️" : "❌"}
                    </span>
                    <span className={[
                      "text-xs font-medium",
                      feature.youtube.status === "yes" ? "text-green-700" : feature.youtube.status === "maybe" ? "text-amber-700" : "text-red-500"
                    ].join(" ")}>{feature.youtube.note}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="text-gray-900 font-semibold text-base">
                Built for fullstack learners who want a guided, job-ready path.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Not a search engine. Not a chatbot. A structured system with a coach.
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-150 whitespace-nowrap"
            >
              Start your AI roadmap →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}