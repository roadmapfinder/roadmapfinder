// components/CapcutDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "CapCut Help Center – Official Documentation",
    description:
      "The primary official documentation hub for CapCut. Covers editing tools, timeline usage, effects, audio, exports, troubleshooting, and account-related guidance for mobile, desktop, and web.",
    url: "https://www.capcut.com/help",
    citation: "CapCut Official Help Center",
  },
  {
    title: "CapCut Tutorials – Official Learning Hub",
    description:
      "Step-by-step official tutorials explaining CapCut features, editing workflows, creative techniques, effects usage, transitions, captions, and AI-powered tools.",
    url: "https://www.capcut.com/tutorial",
    citation: "CapCut Official Tutorials",
  },
  {
    title: "CapCut Resource Center",
    description:
      "Official CapCut articles and guides covering video editing tips, content creation strategies, trending formats, templates, and best practices for social media platforms.",
    url: "https://www.capcut.com/resource",
    citation: "CapCut Learning Resources",
  },
  {
    title: "CapCut Beginner Editing Guide",
    description:
      "Official beginner-friendly guide introducing CapCut basics such as trimming, transitions, text, effects, music, and exporting videos for social platforms.",
    url: "https://www.capcut.com/resource/capcut-tutorial-for-beginners",
    citation: "CapCut Beginner Guide",
  },
  {
    title: "CapCut Desktop Video Editor Documentation",
    description:
      "Official page for CapCut Desktop (Windows & macOS). Includes feature highlights, system requirements, and advanced editing capabilities for professional workflows.",
    url: "https://www.capcut.com/tools/desktop-video-editor",
    citation: "CapCut Desktop Editor",
  },
  {
    title: "CapCut Online Video Editor",
    description:
      "Official browser-based CapCut editor documentation for creating and editing videos online without installing software. Ideal for quick edits and cloud-based workflows.",
    url: "https://www.capcut.com/tools/online-video-editor",
    citation: "CapCut Online Editor",
  },
  {
    title: "CapCut AI Features Documentation",
    description:
      "Official documentation for CapCut’s AI tools including auto captions, background removal, AI color adjustment, text-to-speech, smart templates, and AI effects.",
    url: "https://www.capcut.com/help/ai-features",
    citation: "CapCut AI Tools",
  },
  {
    title: "CapCut Templates & Creative Assets",
    description:
      "Official CapCut template and asset hub explaining how to use, customize, and publish templates, effects, transitions, and creative assets.",
    url: "https://www.capcut.com/templates",
    citation: "CapCut Templates",
  },
];

export default function CapcutDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🎬 CapCut Official Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and authoritative CapCut documentation every learner,
          creator, and professional video editor must know — from beginner
          fundamentals to industry-ready workflows.
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
