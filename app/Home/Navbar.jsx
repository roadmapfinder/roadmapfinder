"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import AppNoticeModal from "./AppNoticeModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#c3c6d7]/30 transition-all">
        <div className="flex justify-between items-center px-5 md:px-10 max-w-[1280px] mx-auto h-[80px]">
          {/* Brand Header */}
          <Link href="/" className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold transition-colors">
            <span className="text-[#004ac6]">Roadmap</span>
            <span className="text-[#191c1e]">Finder</span>
          </Link>

          {/* Desktop Anchor Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-[#434655] hover:text-[#004ac6] transition-colors font-['Inter'] text-sm font-semibold" href="#features">
              Features
            </a>
            <a className="text-[#434655] hover:text-[#004ac6] transition-colors font-['Inter'] text-sm font-semibold" href="#how-it-works">
              How it works
            </a>
            <a className="text-[#434655] hover:text-[#004ac6] transition-colors font-['Inter'] text-sm font-semibold" href="#career">
              Career
            </a>
            <a className="text-[#434655] hover:text-[#004ac6] transition-colors font-['Inter'] text-sm font-semibold" href="#pricing">
              Pricing
            </a>
            <Link className="text-[#434655] hover:text-[#004ac6] transition-colors font-['Inter'] text-sm font-semibold" href="/RoadmapPage">
              Roadmaps
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/RoadmapPage"
              className="bg-[#004ac6] text-white px-6 py-2.5 rounded-full font-['Inter'] text-sm font-semibold hover:bg-[#003ea8] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <Globe size={16} />
              Continue on Web
            </Link>
            <button
              onClick={() => setIsNoticeModalOpen(true)}
              className="border border-[#c3c6d7] text-[#191c1e] px-4 py-2.5 rounded-full font-['Inter'] text-xs font-semibold hover:bg-[#f2f4f6] transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-green-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                android
              </span>
              App Notice
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#191c1e] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#c3c6d7]/30 px-6 py-6 space-y-4 shadow-xl">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#434655] hover:text-[#004ac6] font-['Inter'] text-base font-semibold py-1"
              href="#features"
            >
              Features
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#434655] hover:text-[#004ac6] font-['Inter'] text-base font-semibold py-1"
              href="#how-it-works"
            >
              How it works
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#434655] hover:text-[#004ac6] font-['Inter'] text-base font-semibold py-1"
              href="#career"
            >
              Career
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#434655] hover:text-[#004ac6] font-['Inter'] text-base font-semibold py-1"
              href="#pricing"
            >
              Pricing
            </a>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#434655] hover:text-[#004ac6] font-['Inter'] text-base font-semibold py-1"
              href="/RoadmapPage"
            >
              Roadmaps
            </Link>

            <div className="pt-2 space-y-2">
              <Link
                href="/RoadmapPage"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-[#004ac6] text-white py-3 rounded-full font-['Inter'] text-base font-semibold shadow-md active:scale-95 transition-all"
              >
                Continue on Web
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsNoticeModalOpen(true);
                }}
                className="block w-full text-center border border-[#c3c6d7] text-[#434655] py-2.5 rounded-full font-['Inter'] text-sm font-semibold hover:bg-[#f7f9fb] transition-all"
              >
                App Info (Coming Soon)
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* App Notice Modal */}
      <AppNoticeModal isOpen={isNoticeModalOpen} onClose={() => setIsNoticeModalOpen(false)} />
    </>
  );
}
