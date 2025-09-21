// app/Roadmaps/UIUX/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Apple Human Interface Guidelines (HIG)",
    description:
      "The definitive guide for designing consistent and polished experiences across Apple platforms (iOS, iPadOS, macOS, visionOS, tvOS, watchOS).",
    url: "https://developer.apple.com/design/human-interface-guidelines/",
    citation: "Apple Developer",
  },
  {
    title: "Material Design (Material Design 3, Google)",
    description:
      "Google’s comprehensive design system — guidelines, components, tokens, and UI kits for web and mobile.",
    url: "https://m3.material.io/",
    citation: "Material Design",
  },
  {
    title: "Fluent 2 (Microsoft)",
    description:
      "Microsoft's cross-platform design system with React components, tokens, and extensive guidelines.",
    url: "https://fluent2.microsoft.design/",
    citation: "Microsoft",
  },
  {
    title: "Carbon Design System (IBM)",
    description:
      "Open-source, enterprise-scale design system with deep documentation on tokens, accessibility, and code components.",
    url: "https://carbondesignsystem.com/",
    citation: "IBM Carbon",
  },
  {
    title: "Shopify Polaris",
    description:
      "A complete system combining design guidance and code samples for UI, UX writing, and content patterns.",
    url: "https://polaris.shopify.com/",
    citation: "Shopify",
  },
  {
    title: "Atlassian Design System",
    description:
      "Industry-leading documentation style with patterns, token principles, and component status pages.",
    url: "https://atlassian.design/",
    citation: "Atlassian",
  },
  {
    title:
      "Workday Canvas, Skyscanner Backpack, AWS Cloudscape, GOV.UK, Pinterest Gestalt, Salesforce Lightning, Adobe Spectrum",
    description:
      "A set of exemplary design system documentation sites to study and learn scalable design practices.",
    url: "https://backlight.dev/mastery/the-best-design-system-documentation-sites",
    citation: "Backlight.dev",
  },
  {
    title: "Figma",
    description:
      "The top collaborative design and prototyping platform — includes Dev Mode, plugin ecosystem, live components, and interactive prototyping.",
    url: "https://www.figma.com/",
    citation: "Figma",
  },
  {
    title: "Sketch",
    description:
      "Popular macOS UI design tool, widely supported by an ecosystem of plugins and community assets.",
    url: "https://www.sketch.com/docs/",
    citation: "Sketch",
  },
  {
    title: "Adobe XD (Experience Design)",
    description:
      "A vector-based UI and prototyping tool from Adobe, available on Windows and macOS.",
    url: "https://helpx.adobe.com/support/xd.html",
    citation: "Adobe",
  },
  {
    title: "Zeroheight",
    description:
      "A documentation platform built for design systems, syncs directly with Figma/Sketch/Adobe XD, supports tokens, content blocks, and dev handoff features.",
    url: "https://zeroheight.com/",
    citation: "Zeroheight",
  },
  {
    title: "Supernova",
    description:
      "Dedicated design system documentation tool — supports tokens, version control, and code pipelines integration.",
    url: "https://supernova.io/",
    citation: "Supernova",
  },
  {
    title: "Notion, Confluence, Gitbook, Nuclino",
    description:
      "General-purpose documentation tools often used to host design system guides and enable collaboration.",
    url: "https://www.notion.so/product",
    citation: "Notion / Confluence / Gitbook / Nuclino",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 UI/UX Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation websites every UI/UX learner should
          know — design systems, prototyping tools, accessibility guidelines,
          and developer handoff platforms.
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
