import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "After Effects Learn & Support (Official)",
    description:
      "Adobe’s official After Effects help center — installation, updates, system requirements, troubleshooting, and core workflows.",
    url: "https://helpx.adobe.com/support/after-effects.html",
    citation: "Adobe Official",
  },
  {
    title: "After Effects User Guide (Complete Manual)",
    description:
      "The official reference documentation covering every After Effects feature — animation, compositing, effects, 3D, rendering, and performance.",
    url: "https://helpx.adobe.com/after-effects/user-guide.html",
    citation: "Adobe Official Docs",
  },
  {
    title: "Adobe Learn – After Effects Tutorials",
    description:
      "Structured, step-by-step tutorials from Adobe for beginners to advanced users — motion graphics, VFX, 3D, and real projects.",
    url: "https://www.adobe.com/learn/after-effects",
    citation: "Adobe Learn",
  },
  {
    title: "All After Effects Tutorials (Filtered)",
    description:
      "Browse all official Adobe tutorials by skill level, topic, and workflow — ideal for focused learning and revision.",
    url: "https://helpx.adobe.com/after-effects/view-all-tutorials.html",
    citation: "Adobe Tutorials",
  },
  {
    title: "After Effects Keyboard Shortcuts",
    description:
      "Official list of keyboard shortcuts to speed up workflow — essential for professional and production-level work.",
    url: "https://helpx.adobe.com/after-effects/using/keyboard-shortcuts-reference.html",
    citation: "Adobe Reference",
  },
  {
    title: "After Effects System Requirements",
    description:
      "Official hardware and OS requirements to run After Effects smoothly — CPU, GPU, RAM, and supported systems.",
    url: "https://helpx.adobe.com/after-effects/system-requirements.html",
    citation: "Adobe Support",
  },
  {
    title: "After Effects Rendering & Export Guide",
    description:
      "Official documentation on render queue, Media Encoder, codecs, alpha channels, and export best practices.",
    url: "https://helpx.adobe.com/after-effects/using/rendering-exporting.html",
    citation: "Adobe Workflow Docs",
  },
  {
    title: "After Effects Expressions Guide",
    description:
      "Learn how expressions work in After Effects — syntax, linking properties, automation, and reusable logic.",
    url: "https://helpx.adobe.com/after-effects/using/expression-basics.html",
    citation: "Adobe Expressions",
  },
  {
    title: "Adobe After Effects Official Blog",
    description:
      "Product updates, new feature announcements, performance improvements, and professional workflow insights.",
    url: "https://blog.adobe.com/topics/after-effects",
    citation: "Adobe Blog",
  },
  {
    title: "Adobe Certified Professional – After Effects",
    description:
      "Official certification path for After Effects — exam objectives, preparation resources, and industry recognition.",
    url: "https://certifiedprofessional.adobe.com/after-effects",
    citation: "Adobe Certification",
  },
];

export default function AfterEffectsDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🎬 After Effects Official Documentation
        </h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Essential official Adobe resources every After Effects learner must
          know — from beginner fundamentals to professional motion graphics,
          VFX, expressions, and rendering workflows.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 leading-snug">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-indigo-600 shrink-0 mt-1"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
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
