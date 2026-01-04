// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "MDN – CSS Documentation",
    description:
      "The most authoritative and beginner-to-advanced reference for CSS properties, selectors, layouts, and browser behavior.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    citation: "MDN Web Docs",
  },
  {
    title: "MDN – CSS Selectors Guide",
    description:
      "Complete guide to CSS selectors including pseudo-classes, pseudo-elements, attribute selectors, and modern selector APIs.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
    citation: "MDN CSS Selectors",
  },
  {
    title: "W3C – CSS Specifications",
    description:
      "Official CSS standards published by W3C defining how CSS works at the browser engine level.",
    url: "https://www.w3.org/Style/CSS/",
    citation: "W3C CSS Specs",
  },
  {
    title: "MDN – CSS Box Model",
    description:
      "Deep explanation of the CSS box model including margin, border, padding, content, and box-sizing behavior.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model",
    citation: "MDN Box Model",
  },
  {
    title: "MDN – Flexbox Layout",
    description:
      "Official Flexbox guide covering one-dimensional layouts, alignment, spacing, and responsive UI patterns.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
    citation: "MDN Flexbox",
  },
  {
    title: "MDN – CSS Grid Layout",
    description:
      "Two-dimensional layout system documentation for building dashboards, galleries, and complex UI layouts.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
    citation: "MDN CSS Grid",
  },
  {
    title: "W3C – Flexbox Specification",
    description:
      "Formal W3C specification describing the Flexbox layout algorithm used by browsers.",
    url: "https://www.w3.org/TR/css-flexbox-1/",
    citation: "W3C Flexbox Spec",
  },
  {
    title: "W3C – Media Queries",
    description:
      "Official specification for responsive design using media queries, breakpoints, and device conditions.",
    url: "https://www.w3.org/TR/mediaqueries-4/",
    citation: "W3C Media Queries",
  },
  {
    title: "MDN – CSS Custom Properties (Variables)",
    description:
      "Guide to using CSS variables for theming, design systems, and dynamic UI styling.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
    citation: "MDN CSS Variables",
  },
  {
    title: "MDN – CSS Animations",
    description:
      "Official documentation for CSS transitions, transforms, and keyframe animations with performance best practices.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations",
    citation: "MDN Animations",
  },
  {
    title: "MDN – Accessibility & CSS",
    description:
      "Learn how CSS impacts accessibility, including focus states, reduced motion, and color contrast.",
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/CSS",
    citation: "MDN Accessibility",
  },
  {
    title: "PostCSS Documentation",
    description:
      "Official documentation for PostCSS, the toolchain powering modern CSS transformations and optimizations.",
    url: "https://postcss.org/",
    citation: "PostCSS Docs",
  },
  {
    title: "Next.js – Styling & CSS",
    description:
      "Official Next.js guide for CSS Modules, global styles, Tailwind, and framework-level styling strategies.",
    url: "https://nextjs.org/docs/app/building-your-application/styling",
    citation: "Next.js CSS Docs",
  },
  {
    title: "Tailwind CSS Documentation",
    description:
      "Utility-first CSS framework documentation covering responsive design, theming, and production workflows.",
    url: "https://tailwindcss.com/docs",
    citation: "Tailwind CSS Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🎨 CSS Official Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Authoritative and official documentation every CSS learner must
          master — from fundamentals and layouts to modern frameworks and
          production-ready styling.
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
