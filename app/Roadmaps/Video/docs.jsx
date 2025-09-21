// app/Roadmaps/UIUX/Docs.jsx

import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Premiere Pro User Guide (2025 Edition)",
    description:
      "Official comprehensive user guide from Adobe covering workflows from basic editing to AI-powered features like generative extend and media intelligence search.",
    url: "https://helpx.adobe.com/ie/premiere-pro/user-guide.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Premiere Pro Desktop Help & Release Notes",
    description:
      "Technical requirements, release notes, keyboard shortcuts, troubleshooting and AI-workflow guidance directly from Adobe.",
    url: "https://helpx.adobe.com/premiere/desktop.html",
    citation: "Adobe Help Center",
  },
  {
    title: "DaVinci Resolve 19 Beginner’s Guide",
    description:
      "Official Blackmagic Design guide to get started with Resolve 19 — editing, grading, Fusion, Fairlight, and delivery basics.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-19-Beginners-Guide.pdf",
    citation: "Blackmagic Design",
  },
  {
    title: "DaVinci Resolve Reference Manual (v19)",
    description:
      "In-depth 4 000+ page reference manual for every page—Cut, Edit, Fusion, Color, Fairlight and Deliver workflows.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-19-Reference-Manual.pdf",
    citation: "Blackmagic Design",
  },
  {
    title: "Final Cut Pro User Guide for Mac",
    description:
      "Official Apple manual: interface, libraries, editing workflows, effects and AI-powered masking and caption tools.",
    url: "https://support.apple.com/guide/final-cut-pro/welcome/mac",
    citation: "Apple Support",
  },
  {
    title: "Final Cut Pro User Guide for iPad",
    description:
      "Official Apple manual for Final Cut Pro on iPad—covering touch workflows, tools, import/export, and mobile-optimized AI features.",
    url: "https://support.apple.com/guide/final-cut-pro-ipad/welcome/ipados",
    citation: "Apple Support",
  },
  {
    title: "Kdenlive Manual (v25.08)",
    description:
      "Official open-source Kdenlive documentation: getting started, effects, proxy workflows, timeline and rendering on desktop or Linux.",
    url: "https://docs.kdenlive.org/en/",
    citation: "Kdenlive Documentation",
  }
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🎬 Video Editing Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation websites every aspiring video editor (Premiere Pro, Resolve, Final Cut, Kdenlive) should know.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-purple-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
