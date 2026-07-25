"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  CheckCircle2,
  Heart,
  MessageSquare,
  Repeat,
  TrendingUp,
  Sparkles,
  ExternalLink,
  Code2,
  ShieldCheck
} from 'lucide-react';

// Official Brand Logo Components (Exact Vector SVG Paths)
export const ThreadsLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 192 192" className={className} fill="currentColor">
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L73.9619 70.8318C79.6203 62.2323 88.0872 58.2443 97.222 58.2443C97.3005 58.2443 97.3796 58.2443 97.4587 58.2448C110.742 58.3297 122.181 67.2348 123.805 84.7214C115.539 82.2612 106.184 81.659 96.6575 83.176C68.966 87.5843 51.9866 104.935 53.6934 126.791C54.6062 138.478 61.6402 147.271 73.5414 151.583C85.4425 155.895 99.414 154.764 109.919 148.605C118.064 143.83 123.947 136.31 127.426 126.709C133.565 130.655 137.957 136.634 139.914 144.381L153.02 141.066C150.198 129.89 143.766 121.05 134.619 115.228C138.163 107.011 140.672 98.1189 141.537 88.9883ZM97.9048 139.816C85.459 141.8 70.7607 137.045 69.8398 125.263C69.0494 115.15 78.4357 101.996 98.7844 98.7554C105.772 97.6425 112.778 98.1197 119.248 100.082C116.143 125.109 107.568 138.275 97.9048 139.816Z" />
  </svg>
);

export const LinkedInLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const XLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    name: "Alex Rivera",
    handle: "@alexrivera_dev",
    role: "Senior Full-Stack Developer",
    company: "Vercel Ecosystem Contributor",
    platform: "x",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
    roadmapTag: "⚡ Full-Stack Path 2026",
    content: "I went from a confused tutorial loop to shipping production-grade microservices in under 60 days. The interactive node-graph roadmaps on RoadmapFinder are unmatched! 🚀 #roadmapfinder #buildinpublic",
    likes: 1420,
    reposts: 184,
    replies: 42,
    rating: 5,
    verified: true,
    time: "2h ago",
    featured: true,
    postUrl: "https://x.com"
  },
  {
    id: 2,
    name: "Sarah Chen",
    handle: "in/sarahchen-ai",
    role: "AI Research Engineer & Tech Lead",
    company: "AI Automation Specialist",
    platform: "linkedin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    roadmapTag: "🤖 Agentic AI & LLMs",
    content: "Thrilled to share that after completing the AI Automation & Agentic Workflow roadmap on RoadmapFinder, our engineering team launched 3 autonomous agent pipelines! The step-by-step clarity is a game-changer for modern engineers.",
    likes: 2890,
    reposts: 412,
    replies: 98,
    rating: 5,
    verified: true,
    time: "1d ago",
    featured: false,
    postUrl: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Marcus Vance",
    handle: "@marcus.vance",
    role: "Lead Mobile Architect",
    company: "React Native & Swift Lead",
    platform: "threads",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    roadmapTag: "📱 Mobile App Architecture",
    content: "The Threads dev community recommended RoadmapFinder for modern mobile dev. Best decision of 2026. The structured milestone tracking kept me accountable every single day! 🧵✨",
    likes: 940,
    reposts: 115,
    replies: 34,
    rating: 5,
    verified: true,
    time: "4h ago",
    featured: false,
    postUrl: "https://threads.net"
  },
  {
    id: 4,
    name: "David Kim",
    handle: "@davidkim_codes",
    role: "Backend & Systems Lead",
    company: "Distributed Systems Specialist",
    platform: "x",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    roadmapTag: "🏗️ System Design Masterclass",
    content: "System design interviews used to scare me. RoadmapFinder's interactive visual diagrams broke down microservices, caching, & load balancing into crystal clear steps. Cracked my L6 offer! 💻🔥",
    likes: 3105,
    reposts: 560,
    replies: 124,
    rating: 5,
    verified: true,
    time: "3d ago",
    featured: true,
    postUrl: "https://x.com"
  },
  {
    id: 5,
    name: "Priya Sharma",
    handle: "in/priyasharma-dev",
    role: "Frontend Architect",
    company: "Open Source Advocate",
    platform: "linkedin",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    roadmapTag: "🎨 Modern UI & Design Systems",
    content: "RoadmapFinder isn't just another learning site—it's a complete developer career accelerator. The interactive gamification and community milestones kept our junior engineers engaged continuously.",
    likes: 1850,
    reposts: 230,
    replies: 67,
    rating: 5,
    verified: true,
    time: "5d ago",
    featured: false,
    postUrl: "https://linkedin.com"
  },
  {
    id: 6,
    name: "Elena Rostova",
    handle: "@elena.builds",
    role: "DevOps & Cloud Engineer",
    company: "Kubernetes & Cloud Native",
    platform: "threads",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces",
    roadmapTag: "☁️ Cloud Native & DevOps",
    content: "Just finished the Cloud & Kubernetes path on RoadmapFinder. From Docker fundamentals to automated CI/CD pipelines. Highly recommend to everyone on Threads learning cloud! 🌐",
    likes: 876,
    reposts: 92,
    replies: 28,
    rating: 5,
    verified: true,
    time: "6h ago",
    featured: false,
    postUrl: "https://threads.net"
  }
];

const platformConfig = {
  all: {
    label: "All Platforms",
    color: "bg-blue-600 text-white",
    icon: Sparkles
  },
  threads: {
    label: "Threads",
    badgeBg: "bg-black text-white border-zinc-800",
    badgeText: "text-white",
    hoverGlow: "group-hover:border-zinc-700 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]",
    icon: ThreadsLogo,
    accent: "#000000"
  },
  linkedin: {
    label: "LinkedIn",
    badgeBg: "bg-[#0A66C2] text-white border-[#0A66C2]/30",
    badgeText: "text-[#0A66C2]",
    hoverGlow: "group-hover:border-[#0A66C2]/50 group-hover:shadow-[0_0_25px_rgba(10,102,194,0.15)]",
    icon: LinkedInLogo,
    accent: "#0A66C2"
  },
  x: {
    label: "(Twitter)",
    badgeBg: "bg-zinc-900 text-white border-zinc-700",
    badgeText: "text-zinc-900 dark:text-white",
    hoverGlow: "group-hover:border-zinc-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
    icon: XLogo,
    accent: "#000000"
  }
};

const TestimonialCard = ({ testimonial, index }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(testimonial.likes);

  const toggleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  const PlatformIcon = platformConfig[testimonial.platform].icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className={`group relative rounded-2xl sm:rounded-3xl transition-all duration-300 w-full ${testimonial.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
        }`}
    >
      {/* Dynamic Ambient Glow */}
      <div className="absolute -inset-0.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600/15 via-indigo-500/15 to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg sm:blur-xl pointer-events-none" />

      {/* Main Card Container */}
      <div className="relative h-full bg-white dark:bg-[#0f172a] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden">

        {/* Top Content Area */}
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
            {/* User Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-blue-500/20 shadow-md"
                />
                {/* Platform Badge overlay on avatar */}
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-md ${platformConfig[testimonial.platform].badgeBg}`}>
                  <PlatformIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base md:text-lg font-['Space_Grotesk'] leading-snug truncate">
                    {testimonial.name}
                  </h3>
                  {testimonial.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 fill-blue-500/10 shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-['Inter']">
                  <span className="truncate max-w-[110px] xs:max-w-[150px] sm:max-w-none">{testimonial.handle}</span>
                  <span>•</span>
                  <span className="text-slate-400 shrink-0">{testimonial.time}</span>
                </div>
              </div>
            </div>

            {/* Official Platform Tag Badge */}
            <a
              href={testimonial.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105 ${platformConfig[testimonial.platform].badgeBg}`}
            >
              <PlatformIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="capitalize text-[11px] sm:text-xs">{platformConfig[testimonial.platform].label}</span>
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-70" />
            </a>
          </div>

          {/* Role & Roadmap Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-[11px] sm:text-xs font-semibold font-['Inter']">
              <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {testimonial.roadmapTag}
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
              {testimonial.role}
            </span>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Post Content */}
          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-['Inter'] mb-5 sm:mb-6">
            "{testimonial.content}"
          </p>
        </div>

        {/* Footer Metrics & Actions */}
        <div className="pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3.5 sm:gap-5">
            {/* Interactive Like Button */}
            <button
              onClick={toggleLike}
              className={`flex items-center gap-1 sm:gap-1.5 transition-colors duration-200 group/btn ${liked ? "text-rose-500 font-bold" : "hover:text-rose-500"
                }`}
              aria-label="Like post"
            >
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/btn:scale-125 ${liked ? "fill-rose-500 text-rose-500" : ""}`} />
              <span className="text-xs sm:text-sm">{likeCount}</span>
            </button>

            {/* Reposts Metric */}
            <div className="flex items-center gap-1 sm:gap-1.5 hover:text-blue-500 transition-colors">
              <Repeat className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{testimonial.reposts}</span>
            </div>

            {/* Replies Metric */}
            <div className="flex items-center gap-1 sm:gap-1.5 hover:text-indigo-500 transition-colors">
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{testimonial.replies}</span>
            </div>
          </div>

          {/* Verified Dev Pill */}
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium text-[10px] sm:text-xs bg-emerald-50 dark:bg-emerald-950/40 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800/50 shrink-0">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Verified Dev</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTestimonials = activeTab === 'all'
    ? testimonialsData
    : testimonialsData.filter(t => t.platform === activeTab);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-white overflow-hidden font-['Inter']">

      {/* Decorative Ambient Lighting Spheres */}
      <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[11px] sm:text-xs md:text-sm font-bold tracking-wide uppercase mb-4 sm:mb-6 border border-blue-200 dark:border-blue-800/60 shadow-sm"
          >
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
            <span>COMMUNITY PROOF & REVIEWS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold font-['Space_Grotesk'] tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
          >
            Developers on{" "}
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-black text-white text-lg xs:text-xl sm:text-3xl md:text-4xl align-middle shadow-sm">
              <ThreadsLogo className="w-4 h-4 sm:w-6 sm:h-6" />
              Threads
            </span>
            ,{" "}
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-[#0A66C2] text-white text-lg xs:text-xl sm:text-3xl md:text-4xl align-middle shadow-sm">
              <LinkedInLogo className="w-4 h-4 sm:w-6 sm:h-6" />
              LinkedIn
            </span>{" "}
            &{" "}
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-700 text-white text-lg xs:text-xl sm:text-3xl md:text-4xl align-middle shadow-sm">
              <XLogo className="w-4 h-4 sm:w-6 sm:h-6" />
              X
            </span>{" "}
            Join RoadmapFinder
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-['Inter'] px-2"
          >
            Over <span className="font-bold text-blue-600 dark:text-blue-400">25,000+ developers</span>, AI engineers, and CS students rely on our interactive structured roadmaps to master full-stack engineering, AI automation, and system design.
          </motion.p>
        </div>

        {/* Platform Filter Tabs (Touch-optimized Horizontal Scroll on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 overflow-x-auto pb-3 sm:pb-0 mb-10 sm:mb-14 scrollbar-none snap-x"
        >
          {/* All Filter */}
          <button
            onClick={() => setActiveTab('all')}
            className={`shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${activeTab === 'all'
                ? "bg-blue-600 text-white shadow-blue-500/25 shadow-lg scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>All Platforms</span>
            <span className="ml-0.5 px-2 py-0.5 text-[11px] rounded-full bg-white/20 dark:bg-slate-700">
              {testimonialsData.length}
            </span>
          </button>

          {/* Threads Filter */}
          <button
            onClick={() => setActiveTab('threads')}
            className={`shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${activeTab === 'threads'
                ? "bg-black text-white ring-2 ring-black dark:ring-zinc-700 shadow-lg scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
          >
            <ThreadsLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Threads</span>
          </button>

          {/* LinkedIn Filter */}
          <button
            onClick={() => setActiveTab('linkedin')}
            className={`shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${activeTab === 'linkedin'
                ? "bg-[#0A66C2] text-white shadow-[#0A66C2]/30 shadow-lg scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
          >
            <LinkedInLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>LinkedIn</span>
          </button>

          {/* X Filter */}
          <button
            onClick={() => setActiveTab('x')}
            className={`shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${activeTab === 'x'
                ? "bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white shadow-lg scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
          >
            <XLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>X (Twitter)</span>
          </button>
        </motion.div>

        {/* Bento Grid Layout (1 Column on Mobile, 2 on Tablet, 3 on Desktop) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Trust Metric Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex -space-x-2.5 sm:-space-x-3">
              {testimonialsData.slice(0, 5).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt="Dev Avatar"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white dark:border-slate-900 object-cover shadow-md"
                />
              ))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white dark:border-slate-900 bg-blue-600 text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-md">
                +25k
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base ml-1">4.95 / 5.0</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                Verified reviews from developers worldwide
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center md:text-left w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-5 md:pt-0 md:pl-8">
            <div>
              <p className="text-xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-['Space_Grotesk']">94%</p>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Landed Jobs</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-['Space_Grotesk']">120+</p>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium font-['Inter']">Roadmaps</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-['Space_Grotesk']">100%</p>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Free Access</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
