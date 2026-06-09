"use client";

import { useEffect, useRef, useState } from "react";
import {
  BrainCircuit,
  CheckSquare,
  Zap,
  MessageSquareCode,
  ArrowRight,
  Trophy,
  Flame,
  GitBranch,
  Star,
  Users,
  BookOpen,
} from "lucide-react";

// ─── Animated Counter ────────────────────────────────────────────────────────
function useCounter(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);

  return count;
}

function StatCard({ value, suffix, label, icon: Icon, shouldCount }) {
  const count = useCounter(value, 1800, shouldCount);
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-8 py-8 flex flex-col items-start shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <p className="text-4xl font-black text-gray-900 leading-none tracking-tight">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
}

// ─── Roadmap Track (Signature Element) ───────────────────────────────────────
const phases = [
  { label: "Foundations", tag: "Phase 1" },
  { label: "Core Concepts", tag: "Phase 2" },
  { label: "Projects", tag: "Phase 3" },
  { label: "Advanced", tag: "Phase 4" },
  { label: "Job Ready", tag: "Phase 5" },
];

function RoadmapTrack() {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex items-center min-w-max gap-0">
        {phases.map((phase, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest mb-1.5">
                {phase.tag}
              </span>
              <div
                className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-bold
                  ${i < 2
                    ? "bg-blue-600 border-blue-600 text-white"
                    : i === 2
                      ? "bg-white border-blue-600 text-blue-600"
                      : "bg-white border-gray-200 text-gray-400"
                  }`}
              >
                {i < 2 ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <span className="mt-1.5 text-xs text-gray-600 font-medium whitespace-nowrap">
                {phase.label}
              </span>
            </div>
            {i < phases.length - 1 && (
              <div
                className={`h-0.5 w-12 mx-1 mb-4 ${i < 1
                  ? "bg-blue-600"
                  : i === 1
                    ? "bg-blue-200"
                    : "bg-gray-200"
                  }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon: Icon, title, description, highlight }) {
  return (
    <div className="group flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-100 hover:shadow-md transition-all duration-200">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
        <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-200" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          {highlight && (
            <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-2 py-0.5 uppercase tracking-wide">
              {highlight}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FeaturesSection() {
  const statsRef = useRef(null);
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Personalized Roadmaps",
      description:
        "Get a custom learning path for fullstack, frontend, or backend based on your current skill level and career goals.",
      highlight: "Core",
    },
    {
      icon: CheckSquare,
      title: "Assignments & Checkpoints",
      description:
        "Every phase ends with hands-on assignments and checkpoint quizzes. No passive watching — only active building.",
    },
    {
      icon: Zap,
      title: "XP Points & Streaks",
      description:
        "Earn XP for completing lessons, submitting assignments, and maintaining daily streaks. Stay motivated with visible momentum.",
    },
    {
      icon: MessageSquareCode,
      title: "AI Mentor Support",
      description:
        "Stuck on a bug? Get real-time code reviews, smart hints, and next-step guidance from your built-in AI mentor.",
      highlight: "New",
    },
  ];

  const stats = [
    { value: 12400, suffix: "+", label: "Active learners", icon: Users },
    { value: 95, suffix: "%", label: "Course completion rate", icon: Trophy },
    { value: 340, suffix: "+", label: "Curated modules", icon: BookOpen },
    { value: 2100000, suffix: "+", label: "XP earned this month", icon: Flame },
  ];

  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Eyebrow ── */}
        <div className="flex items-center gap-2 mb-5">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Platform Features
          </span>
        </div>

        {/* ── Two-column Intro + Features ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Intro copy + roadmap track */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight max-w-lg">
              Everything you need to go from zero to{" "}
              <span className="text-blue-600">job-ready.</span>
            </h2>
            <p className="mt-5 text-base text-gray-600 leading-relaxed max-w-md">
              RoadmapFinder doesn't hand you a generic curriculum. It builds
              your path around you — your stack, your pace, your goals — and
              keeps you on track with AI every step of the way.
            </p>

            {/* Roadmap visual track */}
            <div className="mt-10 bg-white border border-gray-200 rounded-2xl px-6 py-7 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                    Your path
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    Fullstack Engineering
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5">
                  <GitBranch className="w-3.5 h-3.5" />
                  AI-generated
                </div>
              </div>
              <RoadmapTrack />
              <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-blue-600" />
                  <strong className="text-gray-900">2,450 XP</strong>&nbsp;earned
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                  <strong className="text-gray-900">14-day</strong>&nbsp;streak
                </span>
                <span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 font-medium">
                  40% complete
                </span>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="my-20 h-px bg-gray-200" />

        {/* ── Stats Grid ── */}
        <div ref={statsRef}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            By the numbers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} shouldCount={countersActive} />
            ))}
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <div className="mt-20 bg-white border border-gray-200 rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <p className="text-xl font-black text-gray-900 leading-snug">
              Start your personalized roadmap — free.
            </p>
            <p className="mt-1.5 text-sm text-gray-500">
              No credit card required. Your AI roadmap is ready in under 60 seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl px-6 py-3 transition-colors duration-150"
            >
              Build my roadmap
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-xl px-6 py-3 border border-gray-200 transition-colors duration-150"
            >
              See a demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}