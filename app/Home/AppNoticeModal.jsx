"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Globe, ArrowRight, Smartphone, Bell, Check } from "lucide-react";

export default function AppNoticeModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [platform, setPlatform] = useState("android");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300">
      {/* Soft Glassmorphic Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container Card - Premium Light Theme */}
      <div className="relative w-full max-w-[480px] bg-white rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,74,198,0.18)] border border-slate-100 z-10 overflow-hidden transform transition-all animate-slide-up">
        {/* Top Decorative Brand Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004ac6] via-[#38bdf8] to-[#2563eb]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Content Container */}
        <div className="space-y-5 pt-1">
          {/* Header Branding */}
          <div className="flex items-center gap-3 pr-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#004ac6] to-[#38bdf8] p-0.5 shadow-md shadow-[#004ac6]/20">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#004ac6]">
                <Smartphone size={24} />
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                Launching Q3 2026
              </span>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Android & iOS Native Apps</p>
            </div>
          </div>

          {/* Segmented Control / Platform Selector */}
          <div className="bg-slate-100/90 p-1 rounded-2xl flex items-center gap-1 border border-slate-200/50">
            <button
              onClick={() => setPlatform("android")}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                platform === "android"
                  ? "bg-white text-[#004ac6] shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                android
              </span>
              Android App
            </button>
            <button
              onClick={() => setPlatform("ios")}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                platform === "ios"
                  ? "bg-white text-[#004ac6] shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                phone_iphone
              </span>
              iOS App
            </button>
          </div>

          {/* Main Headline & Description */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-900 mb-2 leading-tight">
              {platform === "android" ? "Android App in Development" : "iOS Experience Coming Soon"}
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
              We are crafting native performance, offline roadmap access, and daily push reminders to help you master full-stack skills on the go.
            </p>
          </div>

          {/* Clean Feature List */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#004ac6] flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                ✓
              </div>
              <span>Offline Roadmap & Learning Resource Access</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#004ac6] flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                ✓
              </div>
              <span>Daily XP Streaks & Push Reminders</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#004ac6] flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                ✓
              </div>
              <span>24/7 Pocket AI Career & Code Mentor</span>
            </div>
          </div>

          {/* Email Waitlist Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Bell size={13} className="text-[#004ac6]" />
                Get early access when beta drops:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#004ac6] focus:ring-2 focus:ring-[#004ac6]/10 transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#004ac6] hover:bg-[#003ea8] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md shadow-[#004ac6]/20 active:scale-95 whitespace-nowrap flex items-center gap-1"
                >
                  Notify Me
                  <ArrowRight size={13} />
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                <Check size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-900">You're on the early access list! 🎉</p>
                <p className="text-[11px] text-emerald-700">We'll email <span className="font-semibold">{email}</span> as soon as beta builds drop.</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <Link
              href="/RoadmapPage"
              onClick={onClose}
              className="flex-1 bg-[#004ac6] hover:bg-[#003ea8] text-white py-3 px-5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#004ac6]/25 transition-all hover:scale-[1.01] active:scale-95"
            >
              <Globe size={15} />
              <span>Continue on Web Platform</span>
              <ArrowRight size={15} />
            </Link>

            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-xs font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
