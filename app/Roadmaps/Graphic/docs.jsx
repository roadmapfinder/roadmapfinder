// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Google Design",
    description:
      "Explore Material Design, Google's comprehensive design system, offering guidelines on typography, color, components, and motion. Includes insights into Google Fonts and the design processes behind Google products.",
    url: "https://design.google/",
    citation: "Google Design",
  },
  {
    title: "Figma Help Center",
    description:
      "Official documentation for Figma, a leading collaborative design tool. Learn about features like components, auto-layout, prototyping, and developer handoff.",
    url: "https://help.figma.com/hc/en-us",
    citation: "Figma",
  },
  {
    title: "Canva Docs",
    description:
      "Provides tutorials and guides on using Canva for various design projects. Covers topics from basic design principles to advanced features like animations and branding.",
    url: "https://www.canva.com/docs/",
    citation: "Canva",
  },
  {
    title: "Material Design 3",
    description:
      "Google's open-source design system offering comprehensive guidelines for creating user-friendly interfaces across Android, iOS, Flutter, and the web. Includes styles, components, and best practices for consistent design.",
    url: "https://m3.material.io/",
    citation: "Material Design",
  },
  {
    title: "Shillington Education – Free Resources",
    description:
      "A curated list of over 40 free resources for graphic designers, including tools for design, editing, animation, and illustration. Ideal for learners seeking to expand their toolkit without financial investment.",
    url: "https://www.shillingtoneducation.com/blog/free-resources-for-graphic-designers",
    citation: "Shillington Education",
  },
  {
    title: "DesignDocs.dev",
    description:
      "A curated library of over 1,000 design document examples and templates from leading engineering organizations and open-source projects. Useful for understanding how design systems are documented and implemented in real-world projects.",
    url: "https://www.designdocs.dev/",
    citation: "DesignDocs",
  },
  {
    title: "Interaction Design Foundation – Graphic Design",
    description:
      "Offers articles and resources on the fundamentals of graphic design, including visual hierarchy, typography, and layout techniques. Great for building a strong theoretical foundation in design principles.",
    url: "https://www.interaction-design.org/literature/topics/graphic-design",
    citation: "Interaction Design Foundation",
  },
  {
    title: "Design Reviewed",
    description:
      "An archive dedicated to digitally preserving graphic design history, featuring over 8,000 artifacts spanning 150 years. Provides insights into the evolution of design and serves as inspiration for contemporary projects.",
    url: "https://designreviewed.com/",
    citation: "Design Reviewed",
  },
  {
    title: "Core77",
    description:
      "An online design magazine covering various design disciplines, including graphic design. Features articles, reviews, and discussions on design trends and innovations.",
    url: "https://www.core77.com/",
    citation: "Core77",
  },
  {
    title: "Design Observer",
    description:
      "A platform for essays, articles, and critiques on design, culture, and society. Offers perspectives from renowned designers and thinkers, enriching your understanding of design's role in the world.",
    url: "https://designobserver.com/",
    citation: "Design Observer",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧰 Graphic Design Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every graphic design learner should explore — from design systems to educational resources and inspiration archives.
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
