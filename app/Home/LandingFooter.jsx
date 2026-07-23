"use client";
import React from "react";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="bg-[#f2f4f6] w-full py-16 border-t border-[#c3c6d7]/30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-5 md:px-10 max-w-[1280px] mx-auto">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1 flex flex-col space-y-6">
          <span className="font-['Space_Grotesk'] text-2xl font-bold">
            <span className="text-[#004ac6]">Roadmap</span>
            <span className="text-[#191c1e]">Finder</span>
          </span>
          <p className="font-['Inter'] text-sm text-[#434655] max-w-xs leading-relaxed">
            The Expert Mentor for your career. We provide the structure you need to succeed.
          </p>
          <div className="flex gap-4">
            <a
              href="https://chat.whatsapp.com/Jl8VQQ2r1hTJjBmWo2emtk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737686] hover:text-[#004ac6] transition-colors"
              aria-label="Community Chat"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a
              href="https://roadmapfinder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737686] hover:text-[#004ac6] transition-colors"
              aria-label="Website"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="https://twitter.com/roadmapfinder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737686] hover:text-[#004ac6] transition-colors"
              aria-label="Share"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>

        {/* Product column */}
        <div>
          <h4 className="font-['Inter'] font-bold mb-6 text-[#191c1e] text-base">Product</h4>
          <ul className="space-y-4 font-['Inter'] text-sm">
            <li>
              <a className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="#how-it-works">
                AI Mentor
              </a>
            </li>
            <li>
              <Link className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="/RoadmapPage">
                Roadmaps
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources column */}
        <div>
          <h4 className="font-['Inter'] font-bold mb-6 text-[#191c1e] text-base">Resources</h4>
          <ul className="space-y-4 font-['Inter'] text-sm">
            <li>
              <a
                className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline"
                href="https://chat.whatsapp.com/Jl8VQQ2r1hTJjBmWo2emtk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community
              </a>
            </li>
            <li>
              <Link className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="/Courses">
                Courses
              </Link>
            </li>
            <li>
              <a className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="#career">
                Student Stories
              </a>
            </li>
            <li>
              <Link className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="/Docs">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal column */}
        <div>
          <h4 className="font-['Inter'] font-bold mb-6 text-[#191c1e] text-base">Legal</h4>
          <ul className="space-y-4 font-['Inter'] text-sm">
            <li>
              <a className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="text-[#434655] hover:text-[#004ac6] transition-colors hover:underline" href="#">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 mt-16 pt-6 border-t border-[#c3c6d7]/20 text-center md:text-left">
        <p className="text-[#434655] font-['Inter'] text-xs">
          © 2026 RoadmapFinder. The Expert Mentor for your career.
        </p>
      </div>
    </footer>
  );
}
