"use client";
import React from "react";

const projects = [
  // 🌱 Beginner Level
  {
    id: "photo-retouching-basics",
    level: "🌱 Beginner",
    title: "Professional Photo Retouching",
    description:
      "Retouch a portrait using non-destructive workflows. Practice spot healing, basic skin cleanup, color correction, and adjustment layers while keeping results natural.",
    url: "https://youtu.be/uFZpe7-JNnc?si=b4bh6sz3XiY7fIi5",
  },
  {
    id: "social-media-creative-set",
    level: "🌱 Beginner",
    title: "Social Media Creative Set",
    description:
      "Design a set of Instagram posts using consistent typography, spacing, and brand colors. Learn canvas sizing, text hierarchy, and export optimization.",
    url: "https://youtu.be/yMKJ-3ApTb8?si=xZz64aLE3xredskq",
  },

  // ⚡ Intermediate Level
  {
    id: "poster-flyer-design",
    level: "⚡ Intermediate",
    title: "Poster / Event Flyer Design",
    description:
      "Create a professional poster or event flyer using grids, alignment, typography pairing, and visual hierarchy. Prepare files for both print and digital use.",
    url: "https://youtu.be/GLgfPSEzo1k?si=G3ao2kAA_AAed9tD",
  },
  {
    id: "brand-advertisement-creative",
    level: "⚡ Intermediate",
    title: "Brand Advertisement Creative",
    description:
      "Design a high-conversion product or brand advertisement. Practice composition, lighting emphasis, mockups, and marketing-focused visual storytelling.",
    url: "https://youtu.be/nwRTkTiqf5E?si=vLmeH-fnNzYWbrjJ",
  },

  // 🚀 Advanced Level
  {
    id: "photo-manipulation-composite",
    level: "🚀 Advanced",
    title: "Photo Manipulation & Composite Artwork",
    description:
      "Create a cinematic composite by blending multiple images seamlessly. Learn advanced masking, lighting realism, shadows, perspective matching, and color grading.",
    url: "https://youtu.be/INmkd2ztW4c?si=r_-cX3zDMUru4SVV",
  },
  {
    id: "photo-restoration-project",
    level: "🚀 Advanced",
    title: "Before–After Photo Restoration",
    description:
      "Restore an old or damaged photo using clone stamp, healing tools, texture rebuilding, and color reconstruction techniques for professional-quality results.",
    url: "https://youtu.be/deAapXrnPFc?si=9PH8MAH6rcCMgJZ-",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 Photoshop Mastery Projects
          </h2>
          <p className="mt-2 text-gray-600">
            Build real-world Photoshop projects from beginner to industry-ready.
            These projects focus on professional workflows, not tool memorization.
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
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                View Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build these in order. Avoid destructive edits. Organize PSD files cleanly.
          If your design breaks consistency, you’re not done.
        </footer>
      </div>
    </section>
  );
}
