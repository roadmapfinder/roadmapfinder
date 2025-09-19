// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Figma Help Center & Figma Learn",
    description:
      "Official Figma docs and tutorials: components, auto-layout, design systems, prototyping, plugins.",
    url: "https://help.figma.com/hc/en-us",
    citation: "Figma Help Center & Learn Library",
  },
  {
    title: "WCAG 2.2 Standard & Understanding",
    description:
      "W3C’s official WCAG 2.2 specification, “How to Meet”, and “Understanding” guidance for accessibility compliance.",
    url: "https://www.w3.org/TR/WCAG22/",
    citation: "WCAG 2.2 spec and Understanding guides",
  },
  {
    title: "Material Design 3 (Material.io)",
    description:
      "Google’s official Material Design 3 guidelines: theming, components, layout, motion & tokens.",
    url: "https://m3.material.io/",
    citation: "Material Design 3 documentation",
  },
  {
    title: "Apple Human Interface Guidelines",
    description:
      "Apple’s official design guidelines across iOS/macOS/visionOS: typography, animation, components, best practices.",
    url: "https://developer.apple.com/design/human-interface-guidelines",
    citation: "Apple HIG",
  },
  {
    title: "Mixpanel Documentation",
    description:
      "Official Mixpanel docs: “What is Mixpanel?”, quickstart, APIs, data-structure & cohorts guides.",
    url: "https://docs.mixpanel.com/docs/what-is-mixpanel",
    citation: "Mixpanel docs",
  },
  {
    title: "Hotjar Help Center & Guides",
    description:
      "Official Hotjar guides: heatmaps, session recordings, feedback tools and help center instructions.",
    url: "https://help.hotjar.com/hc/en-us",
    citation: "Hotjar Help Center & Resource Library",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Product Designer Docs
        </h1>
        <p className="text-gray-600 mb-10">
          Explore official documentation resources that will guide you from
          beginner to industry-ready product designer.
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
