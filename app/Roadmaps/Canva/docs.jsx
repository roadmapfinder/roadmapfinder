// components/CanvaDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Canva Help Center – Official Documentation",
    description:
      "The central hub for all Canva features, tools, troubleshooting, and step-by-step guides. Covers editing, templates, collaboration, exports, and account management.",
    url: "https://www.canva.com/help/",
    citation: "Canva Official Help Center",
  },
  {
    title: "Canva Design School",
    description:
      "Canva’s official learning platform offering structured courses on design fundamentals, branding, social media design, presentations, marketing visuals, and AI-powered tools.",
    url: "https://www.canva.com/design-school/",
    citation: "Canva Design Education",
  },
  {
    title: "Canva Learn – Design & Marketing Blog",
    description:
      "Official Canva blog with in-depth articles on design principles, typography, color theory, branding, content strategy, and real-world design use cases.",
    url: "https://www.canva.com/learn/",
    citation: "Canva Learn",
  },
  {
    title: "Canva Brand Kit Documentation",
    description:
      "Official guide to creating and managing Brand Kits in Canva, including brand colors, fonts, logos, templates, and team-wide consistency.",
    url: "https://www.canva.com/help/brand-kits/",
    citation: "Canva Brand Management",
  },
  {
    title: "Canva AI & Magic Studio Documentation",
    description:
      "Learn how to use Canva’s AI features such as Magic Design, Magic Write, background remover, bulk create, and smart mockups for professional workflows.",
    url: "https://www.canva.com/help/ai-features/",
    citation: "Canva AI Tools",
  },
  {
    title: "Canva Collaboration & Team Features",
    description:
      "Official documentation covering real-time collaboration, comments, permissions, version history, and team workflows for professional and agency use.",
    url: "https://www.canva.com/help/teams/",
    citation: "Canva Teams",
  },
  {
    title: "Canva Video & Animation Guides",
    description:
      "Step-by-step guides on creating animated designs, social media videos, presentations with motion, transitions, and video exports.",
    url: "https://www.canva.com/help/videos/",
    citation: "Canva Video Documentation",
  },
  {
    title: "Canva Developers Documentation",
    description:
      "Official developer portal for Canva APIs, integrations, and automation. Useful for advanced users building workflows, apps, or SaaS integrations.",
    url: "https://www.canva.dev/",
    citation: "Canva Developer Platform",
  },
];

export default function CanvaDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🎨 Canva Official Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and authoritative Canva documentation every learner and
          professional designer must know — from fundamentals to advanced,
          industry-ready workflows.
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
