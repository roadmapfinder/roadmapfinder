// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Adobe Illustrator Learn & Support",
    description:
      "The official central hub for Adobe Illustrator. Includes getting started guides, tutorials, user manuals, feature updates, troubleshooting, and downloads maintained directly by Adobe.",
    url: "https://helpx.adobe.com/illustrator.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Adobe Illustrator User Guide",
    description:
      "The complete official Illustrator manual. Covers tools, panels, workflows, typography, drawing, color, effects, export, and best practices from beginner to advanced level.",
    url: "https://helpx.adobe.com/illustrator/user-guide.html",
    citation: "Illustrator User Guide",
  },
  {
    title: "Official Illustrator Tutorials",
    description:
      "Step-by-step project-based tutorials created by Adobe. Learn logos, illustrations, typography, patterns, branding, and real-world design workflows.",
    url: "https://helpx.adobe.com/illustrator/tutorials.html",
    citation: "Adobe Tutorials",
  },
  {
    title: "Adobe Learn — Illustrator",
    description:
      "Structured hands-on learning paths by Adobe. Focuses on practical Illustrator skills such as shapes, color, typography, logo design, and illustration fundamentals.",
    url: "https://www.adobe.com/learn/illustrator",
    citation: "Adobe Learn",
  },
  {
    title: "Illustrator on the Web — User Guide",
    description:
      "Official documentation for Illustrator on the web. Covers browser-based workflows, limitations, supported features, and collaboration use cases.",
    url: "https://helpx.adobe.com/illustrator/web/user-guide.html",
    citation: "Illustrator Web Docs",
  },
  {
    title: "Adobe Illustrator Training & Certification",
    description:
      "Official Adobe training resources and certification information for Illustrator. Useful for learners aiming for professional credentials and structured learning.",
    url: "https://www.adobe.com/support/training/products/illustrator.html",
    citation: "Adobe Training",
  },
  {
    title: "Adobe Illustrator Developer Documentation",
    description:
      "Official developer documentation for scripting, automation, plugins, and extending Illustrator using JavaScript, APIs, and SDKs.",
    url: "https://developer.adobe.com/illustrator/",
    citation: "Adobe Developer Docs",
  },
  {
    title: "Adobe Fonts",
    description:
      "Official Adobe typography library integrated with Illustrator. Learn font pairing, licensing, and professional typography workflows.",
    url: "https://fonts.adobe.com/",
    citation: "Adobe Fonts",
  },
  {
    title: "Adobe Color",
    description:
      "Official color system by Adobe for creating, saving, and managing color palettes. Essential for branding, illustration, and color consistency in Illustrator.",
    url: "https://color.adobe.com/",
    citation: "Adobe Color",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🎨 Official Adobe Illustrator Documentation Every Learner Must Know
        </h1>
        <p className="text-gray-600 mb-10">
          These are the official, Adobe-maintained documentation and learning
          resources every Illustrator learner should study to build
          professional, scalable, and industry-ready vector designs.
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
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">
                {doc.description}
              </p>

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
