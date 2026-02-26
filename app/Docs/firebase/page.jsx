"use client";
import React, { useState } from "react";

const modules = [
  {
    id: "01",
    icon: "🔥",
    title: "Introduction to Firebase",
    topics: ["What Firebase is and why it's used", "Backend-as-a-Service (BaaS) concept", "Overview of Firebase products"],
  },
  {
    id: "02",
    icon: "⚙️",
    title: "Firebase Project Setup",
    topics: ["Creating a Firebase project", "Firebase Console overview", "Connecting Firebase to a web app", "Environment configuration"],
  },
  {
    id: "03",
    icon: "🔐",
    title: "Authentication",
    topics: ["Email and password authentication", "OAuth providers (Google sign-in)", "User session handling", "Authentication state management"],
  },
  {
    id: "04",
    icon: "🗄️",
    title: "Firestore Database",
    topics: ["What Cloud Firestore is", "Collections and documents", "CRUD operations (Create, Read, Update, Delete)", "Real-time data syncing"],
  },
  {
    id: "05",
    icon: "🔍",
    title: "Queries & Data Modeling",
    topics: ["Filtering and ordering data", "Pagination", "Efficient Firestore data structures"],
  },
  {
    id: "06",
    icon: "📦",
    title: "Firebase Storage",
    topics: ["Uploading files (images, documents)", "Downloading and displaying files", "Handling file metadata"],
  },
  {
    id: "07",
    icon: "🛡️",
    title: "Security Rules",
    topics: ["Firestore security rules", "Authentication-based access control", "Protecting user data"],
  },
  {
    id: "08",
    icon: "🚀",
    title: "Firebase Hosting",
    topics: ["Firebase CLI usage", "Deploying frontend applications", "Custom domains and hosting workflow"],
  },
  {
    id: "09",
    icon: "🏗️",
    title: "Full Project Build",
    topics: ["User authentication system", "Database-driven application", "File uploads with storage", "Deployment to production"],
  },
];

const outcomes = [
  { icon: "⚡", label: "Serverless Backends", desc: "Build full backend systems without managing servers" },
  { icon: "🔒", label: "Secure Auth", desc: "Implement robust, secure authentication flows" },
  { icon: "📊", label: "Firestore Mastery", desc: "Work confidently with real-time Firestore data" },
  { icon: "🌐", label: "Production Deploy", desc: "Ship production-ready applications to the web" },
];

const prerequisites = [
  "Basic HTML, CSS, and JavaScript knowledge",
  "Familiarity with modern JavaScript (ES6+)",
  "Node.js installed on your system",
];

export default function FirebaseFreeCodeCampCourse() {
  const [openModule, setOpenModule] = useState(null);

  const toggle = (id) => setOpenModule(openModule === id ? null : id);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-mono-custom { font-family: 'JetBrains Mono', monospace; }
        .flame-underline {
          background: linear-gradient(90deg, #f97316, #fb923c, #fdba74, #fb923c, #f97316);
          background-size: 300% 100%;
          animation: flameShift 4s ease-in-out infinite;
        }
        @keyframes flameShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .module-topics {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .module-topics.open {
          max-height: 400px;
          opacity: 1;
        }
        .card-hover {
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(249, 115, 22, 0.12);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in { animation: fadeInUp 0.6s ease forwards; }
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      {/* ── HERO ── */}
      <header className="relative border-b border-zinc-800 overflow-hidden">
        {/* Background grid texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-500 opacity-10 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
          {/* Platform badge */}
          <div className="animate-in stagger-1 flex items-center gap-3 mb-6">
            <span className="font-mono-custom text-xs tracking-widest text-orange-400 uppercase border border-orange-400/30 bg-orange-400/5 px-3 py-1 rounded-sm">
              YouTube · freeCodeCamp
            </span>
            <span className="font-mono-custom text-xs tracking-widest text-zinc-500 uppercase border border-zinc-700 px-3 py-1 rounded-sm">
              Beginner → Intermediate
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-in stagger-2 font-display text-5xl md:text-7xl font-black text-white leading-none mb-2">
            Firebase
          </h1>
          <h2 className="animate-in stagger-2 font-display text-4xl md:text-6xl font-bold italic text-orange-400 leading-none mb-6">
            Complete Course
          </h2>

          {/* Animated flame bar */}
          <div className="animate-in stagger-3 h-1 w-24 flame-underline rounded-full mb-8" />

          {/* Description */}
          <p className="animate-in stagger-4 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            A full Firebase backend development course published by <strong className="text-zinc-200">freeCodeCamp</strong>.
            Learn to build <strong className="text-orange-300">serverless backends</strong> using Firebase —
            covering authentication, databases, storage, security rules, and deployment through real-world applications.
          </p>

          {/* Stats row */}
          <div className="animate-in stagger-4 flex flex-wrap gap-6 mt-10">
            {[["9", "Modules"], ["English", "Language"], ["1 Course", "Format"]].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">{val}</span>
                <span className="font-mono-custom text-xs text-zinc-500 tracking-wider uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14 space-y-20">

        {/* ── PREREQUISITES ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-custom text-orange-500 text-xs tracking-widest uppercase">Before You Start</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-6">Prerequisites</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prerequisites.map((item, i) => (
              <div key={i} className="card-hover bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-sm p-5">
                <div className="w-8 h-8 bg-orange-500/10 border border-orange-500/20 rounded-sm flex items-center justify-center text-orange-400 font-mono-custom text-sm font-bold mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MODULES ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-custom text-orange-500 text-xs tracking-widest uppercase">Curriculum</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-6">Course Modules</h3>

          <div className="space-y-2">
            {modules.map((mod, index) => {
              const isOpen = openModule === mod.id;
              return (
                <div
                  key={mod.id}
                  className={`card-hover border rounded-sm overflow-hidden cursor-pointer
                    ${isOpen
                      ? "border-orange-500/50 bg-zinc-900/80"
                      : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                    }`}
                  onClick={() => toggle(mod.id)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Module Header */}
                  <div className="flex items-center justify-between px-5 py-4 gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono-custom text-xs text-orange-500/70 w-6 shrink-0">{mod.id}</span>
                      <span className="text-xl">{mod.icon}</span>
                      <span className="font-display text-base md:text-lg font-bold text-zinc-100">
                        {mod.title}
                      </span>
                    </div>
                    <div className={`text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Topics Accordion */}
                  <div className={`module-topics ${isOpen ? "open" : ""}`}>
                    <div className="px-5 pb-5 pt-1 border-t border-zinc-800/60">
                      <ul className="space-y-2">
                        {mod.topics.map((topic, ti) => (
                          <li key={ti} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                            <span className="text-zinc-400 text-sm leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── OUTCOMES ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-custom text-orange-500 text-xs tracking-widest uppercase">What You'll Gain</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-6">Expected Outcomes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((item, i) => (
              <div key={i} className="card-hover bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-sm p-6 flex gap-4">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <p className="font-display font-bold text-white mb-1">{item.label}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── META FOOTER ── */}
        <footer className="border-t border-zinc-800 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              ["Platform", "YouTube"],
              ["Instructor", "freeCodeCamp"],
              ["Language", "English"],
              ["Level", "Beginner → Intermediate"],
              ["Format", "One-shot + Project"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-mono-custom text-xs text-zinc-600 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-zinc-300 text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-900" />
            <span className="font-mono-custom text-xs text-zinc-700 tracking-widest">FIREBASE × FREECODECAMP</span>
            <div className="h-px flex-1 bg-zinc-900" />
          </div>
        </footer>

      </main>
    </div>
  );
}