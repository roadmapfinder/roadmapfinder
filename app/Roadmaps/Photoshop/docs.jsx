// components/PhotoshopDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Adobe Photoshop Official Documentation",
    description:
      "Main entry point for all official Photoshop documentation including concepts, tools, workflows, and updates.",
    url: "https://helpx.adobe.com/photoshop/user-guide.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Photoshop Basics & Key Concepts",
    description:
      "Learn fundamental Photoshop concepts such as layers, selections, masks, resolution, and color modes.",
    url: "https://helpx.adobe.com/photoshop/key-concepts.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Photoshop Workspace & Interface",
    description:
      "Understand panels, tools, workspaces, customization, shortcuts, and productivity tips.",
    url: "https://helpx.adobe.com/photoshop/using/workspace-basics.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Layers, Masks & Smart Objects",
    description:
      "Official guide to non-destructive editing using layers, layer masks, smart objects, and blending modes.",
    url: "https://helpx.adobe.com/photoshop/using/layers.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Selections & Masking Techniques",
    description:
      "Master selection tools including Lasso, Marquee, Object Selection, Select Subject, and Refine Edge.",
    url: "https://helpx.adobe.com/photoshop/using/making-selections.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Image Adjustments & Color Correction",
    description:
      "Learn levels, curves, hue/saturation, color balance, and professional color correction workflows.",
    url: "https://helpx.adobe.com/photoshop/using/image-adjustments.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Retouching & Restoration",
    description:
      "Use healing tools, clone stamp, content-aware fill, and restoration techniques for professional retouching.",
    url: "https://helpx.adobe.com/photoshop/using/retouching-repairing-images.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Typography & Text Design",
    description:
      "Create and format text using type tools, character styles, paragraph styles, and advanced typography options.",
    url: "https://helpx.adobe.com/photoshop/using/text.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Photo Compositing & Manipulation",
    description:
      "Combine multiple images using advanced masking, blending, perspective matching, and lighting control.",
    url: "https://helpx.adobe.com/photoshop/using/compositing.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Generative AI & Neural Filters",
    description:
      "Official documentation for Generative Fill, Generative Expand, Neural Filters, and AI-powered workflows.",
    url: "https://helpx.adobe.com/photoshop/using/neural-filters.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Exporting, File Formats & Optimization",
    description:
      "Learn how to export images correctly for web, print, social media, and performance optimization.",
    url: "https://helpx.adobe.com/photoshop/using/export-artboards-layers.html",
    citation: "Adobe Help Center",
  },
  {
    title: "Photoshop Tutorials (Official)",
    description:
      "Hands-on beginner to advanced tutorials provided directly by Adobe with practice files.",
    url: "https://www.adobe.com/learn/photoshop",
    citation: "Adobe Learn",
  },
  {
    title: "Photoshop Certification Objectives",
    description:
      "Official skill objectives and benchmarks for Adobe Certified Professional in Photoshop.",
    url: "https://certifiedprofessional.adobe.com/photoshop",
    citation: "Adobe Certification",
  },
  {
    title: "Photoshop GitHub & Technology Previews",
    description:
      "Adobe technology previews, feedback programs, and early access Photoshop features.",
    url: "https://github.com/adobe",
    citation: "Adobe GitHub",
  },
];

export default function PhotoshopDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🎨 Official Photoshop Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Must-know official Adobe Photoshop documentation — covering basics,
          layers, masking, retouching, typography, compositing, AI tools, and
          professional workflows.
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
