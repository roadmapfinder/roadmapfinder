"use client";
import React, { useState } from "react";
import {
  User,
  Flame,
  Zap,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Moon,
  Globe,
  Bell,
  HelpCircle,
  LogOut,
  Edit3,
  Award,
  Bookmark,
  Check
} from "lucide-react";

export default function ProfileView({ onboardingData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Sohel Khan");
  const [bio, setBio] = useState("Aspiring Full Stack Engineer | Building with React & Node.js");

  const mockCompletedPhases = [
    { id: 1, title: "Phase 1: Web Development & HTML/CSS", date: "Jul 10, 2026" },
    { id: 2, title: "Phase 2: Modern JavaScript & ES6+", date: "Jul 18, 2026" },
  ];

  return (
    <div className="profile-screen bg-[#F1F5F9] min-h-full flex flex-col font-['Inter'] text-[#0F172A] pb-16 select-none overflow-y-auto">
      {/* ──────────── TOP HEADER ──────────── */}
      <div className="bg-[#0F172A] text-white pt-6 pb-8 px-4 rounded-b-3xl relative shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">My Profile</span>
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-xs px-2.5 py-1 rounded-full text-slate-200 transition-colors"
          >
            <Edit3 size={12} />
            <span>Edit</span>
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-xl flex items-center justify-center shadow-lg border-2 border-white/20">
            SK
          </div>
          <div className="flex-1">
            <h2 className="font-['Space_Grotesk'] text-lg font-bold leading-tight text-white">{name}</h2>
            <p className="text-[11px] text-blue-300 font-medium">Intermediate Level • Full Stack Track</p>
            <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{bio}</p>
          </div>
        </div>
      </div>

      {/* ──────────── STATS OVERLAY CARDS ──────────── */}
      <div className="px-4 -mt-5 mb-4 grid grid-cols-3 gap-2">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center mb-1">
            <Flame size={16} />
          </div>
          <span className="font-['Space_Grotesk'] text-base font-bold text-slate-900 leading-none">6</span>
          <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tight">Day Streak</span>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
            <Zap size={16} />
          </div>
          <span className="font-['Space_Grotesk'] text-base font-bold text-slate-900 leading-none">1,250</span>
          <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tight">XP Earned</span>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
            <BookOpen size={16} />
          </div>
          <span className="font-['Space_Grotesk'] text-base font-bold text-slate-900 leading-none">14</span>
          <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tight">Topics Done</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* ──────────── ACTIVE LEARNING PATH CARD ──────────── */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <Bookmark size={14} />
              <span>Current Progress</span>
            </div>
            <span className="text-[11px] font-bold text-slate-500">45% Completed</span>
          </div>

          <p className="font-['Space_Grotesk'] text-sm font-bold text-slate-900">
            {onboardingData?.topic === "frontend"
              ? "Frontend Developer Path"
              : onboardingData?.topic === "backend"
              ? "Backend Engineer Path"
              : "Full Stack Developer Path"}
          </p>

          <div className="w-full bg-slate-100 h-2 rounded-full mt-2.5 mb-2 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full w-[45%]" />
          </div>
          <p className="text-[10px] text-slate-400">2 of 4 Phases Finished • Next: React & Ecosystem</p>
        </div>

        {/* ──────────── COMPLETED PHASES / MILESTONES ──────────── */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Award size={16} className="text-blue-600" />
            <h3 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-800">
              Completed Milestones
            </h3>
          </div>

          <div className="space-y-2.5">
            {mockCompletedPhases.map((phase) => (
              <div key={phase.id} className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check size={14} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-900 leading-tight">{phase.title}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{phase.date}</p>
                </div>
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
            ))}
          </div>
        </div>

        {/* ──────────── APP PREFERENCES & SETTINGS ──────────── */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden divide-y divide-slate-100">
          <div className="px-4 py-3 bg-slate-50/50">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Preferences</span>
          </div>

          <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <Globe size={16} className="text-slate-500" />
              <span className="text-xs font-medium text-slate-700">Language & Region</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span className="text-[11px] font-medium text-slate-500">Hinglish</span>
              <ChevronRight size={14} />
            </div>
          </div>

          <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <Bell size={16} className="text-slate-500" />
              <span className="text-xs font-medium text-slate-700">Daily Reminders</span>
            </div>
            <div className="w-8 h-4 bg-blue-600 rounded-full relative p-0.5 cursor-pointer">
              <div className="w-3 h-3 bg-white rounded-full translate-x-4 transition-transform" />
            </div>
          </div>

          <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <HelpCircle size={16} className="text-slate-500" />
              <span className="text-xs font-medium text-slate-700">Help & Support</span>
            </div>
            <ChevronRight size={14} className="text-slate-400" />
          </div>
        </div>
      </div>

      {/* ──────────── EDIT PROFILE MODAL SIMULATION ──────────── */}
      {isEditing && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-4 w-full max-w-xs shadow-2xl space-y-3">
            <h3 className="font-['Space_Grotesk'] text-sm font-bold text-slate-900">Edit Profile</h3>
            <div>
              <label className="text-[10px] font-semibold text-slate-500 block mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="text-[10px] font-semibold text-slate-500 block mb-1">Short Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={2}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
