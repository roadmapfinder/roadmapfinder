"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-basic-logo",
    level: "Beginner",
    title: "Minimal Logo Design",
    description:
      "Design a clean, minimal logo using basic shapes and the Pen Tool. Focus on anchor points, curves, alignment, negative space, and scalability without using effects.",
    url: "https://youtu.be/L8ck3TO2wec?si=5HRPUxCYXleGTvpI",
  },
  {
    id: "phase1-icon-set",
    level: "Beginner",
    title: "Basic Icon Set",
    description:
      "Create a small, consistent icon set using a grid system. Practice stroke control, alignment, pixel-perfect design, and exporting icons as SVG files.",
    url: "https://youtu.be/BiHlq3ssuAE?si=02fl5OAYMSXe1Tsg",
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-brand-identity",
    level: "Intermediate",
    title: "Complete Brand Identity Kit",
    description:
      "Build a full brand identity including logo variations, color palette, typography system, icons, and brand patterns. Organize files professionally for client handoff.",
    url: "https://youtu.be/9jmOg0i5Jwo?si=skh9L0it2Gh3_2IN",
  },
  {
    id: "phase2-isometric-illustration",
    level: "Intermediate",
    title: "Flat + Isometric Illustration Scene",
    description:
      "Design a themed illustration scene (tech, office, city, or education). Create both flat and isometric versions to understand depth, perspective, and color harmony.",
    url: "https://youtu.be/GKU-GkZGh0M?si=GpT_qcE1dJ51Bv7-",
  },

  // 🚀 Advanced Phase
  {
    id: "phase3-print-design",
    level: "Advanced",
    title: "Print-Ready Marketing Design",
    description:
      "Design a poster, flyer, or brochure using CMYK color mode, proper bleed, margins, and typography. Prepare files for professional print production.",
    url: "https://www.youtube.com/live/tKhuHykSYsQ?si=KsA8jreutd6JeVEH",
  },
  {
    id: "phase3-illustration-series",
    level: "Advanced",
    title: "Portfolio-Grade Illustration Series",
    description:
      "Create a cohesive series of 3–5 illustrations in a single visual style. Focus on consistency, storytelling, advanced color usage, and professional presentation.",
    url: "https://youtu.be/nyHMizF3zPQ?si=cJnRPMbLWWWQMYCv",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 Adobe Illustrator Project Roadmap (Beginner → Advanced)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these Illustrator projects step-by-step to master vector
            drawing, branding, illustration, print workflows, and
            industry-ready design skills.
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
          💡 These projects are designed to make you industry-ready in Adobe
          Illustrator — focusing on precision, visual systems, branding,
          illustration, and professional design workflows.
        </footer>
      </div>
    </section>
  );
}
