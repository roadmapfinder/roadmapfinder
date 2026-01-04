"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-semantic-portfolio",
    level: "Beginner",
    title: "Semantic Personal Portfolio",
    description:
      "Build a fully semantic personal portfolio using proper HTML5 elements like header, nav, main, section, article, and footer. Focus on clean structure, heading hierarchy, and accessibility-first markup.",
    url: "https://youtu.be/CYR2RvbqjBA?si=17JB7va_Jv1DpoDf",
  },
  {
    id: "phase1-accessible-form",
    level: "Beginner",
    title: "Accessible Contact Form",
    description:
      "Create a production-ready contact form using pure HTML. Implement labels, fieldsets, legends, required validation, input types, and accessibility best practices without JavaScript.",
    url: "https://youtu.be/a4j9R_DvZ8M?si=tZybz2ZGRF_5aUj0",
  },
  {
    id: "phase1-blog-article",
    level: "Beginner",
    title: "SEO-Optimized Blog Article Page",
    description:
      "Design a blog article page using article, time, figure, figcaption, and proper metadata. Focus on semantic content flow, internal linking, and search-engine-friendly structure.",
    url: "https://youtu.be/CyRlWlaJnTY?si=uss9iekwI0t-Y5L1",
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-landing-page",
    level: "Intermediate",
    title: "Responsive Product Landing Page",
    description:
      "Build a real-world product landing page using HTML-first architecture. Structure hero sections, feature blocks, CTAs, and testimonials with meaningful markup before adding CSS.",
    url: "https://youtu.be/IsLfuvd4QCA?si=s4l8ks2nbWfUdkx_",
  },
  {
    id: "phase2-faq-native",
    level: "Intermediate",
    title: "FAQ Section Using Native HTML",
    description:
      "Create an interactive FAQ section using details and summary elements. Ensure keyboard navigation, accessibility, and SEO-friendly expandable content without JavaScript.",
    url: "https://youtu.be/lwUOWl0L6b8?si=WCayKyO8ACO0Y44C",
  },

  // 🚀 Advanced Phase
  {
    id: "phase3-documentation-page",
    level: "Advanced",
    title: "Multi-Section Documentation Page",
    description:
      "Build a long-form documentation page like MDN. Implement table of contents, anchor links, aside navigation, code blocks, and readable content hierarchy for large-scale HTML architecture.",
    url: "https://youtu.be/K5VXWV4N6f0?si=rhFLIbiBgbo_X-ac",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧱 HTML Developer Project Roadmap (Beginner → Advanced)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these HTML projects step-by-step to master semantic markup,
            accessibility, SEO, performance, and real-world document structure.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  View tutorial
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 These projects focus purely on HTML mastery — semantics,
          accessibility, SEO, and structure. Complete them before moving to CSS,
          JavaScript, or frameworks.
        </footer>
      </div>
    </section>
  );
}
