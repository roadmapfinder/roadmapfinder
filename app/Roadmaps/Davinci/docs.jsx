// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "DaVinci Resolve Official Documentation Portal",
    description:
      "Main official documentation hub by Blackmagic Design. Access manuals, updates, downloads, and technical resources for DaVinci Resolve.",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    citation: "Blackmagic Design",
  },
  {
    title: "DaVinci Resolve Training Portal",
    description:
      "Official learning hub with free courses, certifications, lesson files, and structured training for editing, color, Fusion, and Fairlight.",
    url: "https://www.blackmagicdesign.com/products/davinciresolve/training",
    citation: "Blackmagic Training",
  },
  {
    title: "DaVinci Resolve Beginner’s Guide",
    description:
      "Official beginner guide covering UI, workflow, editing basics, media management, and exports.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Beginners-Guide.pdf",
    citation: "Beginner Guide",
  },
  {
    title: "DaVinci Resolve Reference Manual",
    description:
      "Complete authoritative manual covering every feature: Edit, Cut, Fusion, Color, Fairlight, and Deliver pages.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Reference-Manual.pdf",
    citation: "Reference Manual",
  },
  {
    title: "Editor’s Guide to DaVinci Resolve",
    description:
      "Official professional editing guide: timelines, multicam, trimming, workflows, proxies, and collaboration.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Editors-Guide.pdf",
    citation: "Editors Guide",
  },
  {
    title: "Colorist Guide to DaVinci Resolve",
    description:
      "Professional color grading guide covering nodes, scopes, LUTs, HDR, ACES, and cinematic grading workflows.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Colorist-Guide.pdf",
    citation: "Colorist Guide",
  },
  {
    title: "Fairlight Audio Guide",
    description:
      "Official Fairlight documentation for dialogue editing, noise reduction, EQ, compression, mixing, and mastering.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Fairlight-Audio.pdf",
    citation: "Fairlight Guide",
  },
  {
    title: "Fusion Visual Effects Guide",
    description:
      "Official Fusion VFX and motion graphics guide for node-based compositing, tracking, keying, and animation.",
    url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Fusion-Visual-Effects.pdf",
    citation: "Fusion Guide",
  },
  {
    title: "DaVinci Resolve Download Center",
    description:
      "Official software download page for DaVinci Resolve Free and Studio versions.",
    url: "https://www.blackmagicdesign.com/in/event/davinciresolvedownload",
    citation: "Resolve Download",
  },
  {
    title: "Blackmagic Design Support Portal",
    description:
      "Official support portal for updates, manuals, firmware, FAQs, and technical documentation.",
    url: "https://www.blackmagicdesign.com/support",
    citation: "Blackmagic Support",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Official DaVinci Resolve Documentation Hub
        </h1>
        <p className="text-gray-600 mb-10">
          These are the official and authoritative DaVinci Resolve documentation
          sources from Blackmagic Design that every learner, editor, colorist,
          filmmaker, and post-production professional must know.
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
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
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
