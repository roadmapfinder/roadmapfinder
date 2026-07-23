"use client";
import React from "react";
import Link from "next/link";
import { X, Globe, Sparkles, ArrowRight, Smartphone } from "lucide-react";

export default function IOSNoticeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#c3c6d7]/30 z-10 overflow-hidden transform transition-all scale-100 animate-slide-up">
        {/* Top Decorative Gradient Glow */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#004ac6] via-[#39b8fd] to-[#2563eb]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f2f4f6] text-[#737686] hover:text-[#191c1e] hover:bg-[#e0e3e5] flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Content Container */}
        <div className="flex flex-col items-center text-center pt-2">
          {/* iOS / Apple Icon Badge */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-tr from-[#004ac6] to-[#39b8fd] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#004ac6]/25">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                phone_iphone
              </span>
            </div>
            <span className="absolute -top-2 -right-2 px-2.5 py-0.5 bg-amber-500 text-white font-['Inter'] text-[10px] font-bold rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={10} />
              In Progress
            </span>
          </div>

          {/* Heading */}
          <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#191c1e] mb-3 leading-snug">
            iOS App is Under Development 🚀
          </h3>

          {/* Body Description */}
          <p className="font-['Inter'] text-sm sm:text-base text-[#434655] mb-6 leading-relaxed max-w-md">
            We are actively crafting the native iOS experience to give you seamless roadmap tracking on Apple devices. We'll notify you the moment it launches!
          </p>

          {/* Web Callout Highlight Box */}
          <div className="w-full bg-[#f7f9fb] border border-[#004ac6]/20 rounded-2xl p-4 mb-6 flex items-start gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Globe size={20} />
            </div>
            <div>
              <h4 className="font-['Inter'] text-sm font-bold text-[#191c1e] mb-0.5">
                Explore Full Web Experience
              </h4>
              <p className="font-['Inter'] text-xs text-[#737686] leading-normal">
                All roadmaps, AI mentoring sessions, and interactive projects are 100% ready on our web app.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <Link
              href="/RoadmapPage"
              onClick={onClose}
              className="flex-1 bg-[#004ac6] hover:bg-[#003ea8] text-white py-3.5 px-6 rounded-full font-['Inter'] text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#004ac6]/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Explore Web Roadmaps</span>
              <ArrowRight size={18} />
            </Link>

            <button
              onClick={onClose}
              className="py-3.5 px-6 rounded-full border border-[#c3c6d7] text-[#434655] hover:bg-[#f2f4f6] font-['Inter'] text-sm font-semibold transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
