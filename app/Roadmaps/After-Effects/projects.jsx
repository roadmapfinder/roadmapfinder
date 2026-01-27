"use client";
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "phase1-kinetic-typography",
    level: "Phase 1 — Beginner",
    title: "Kinetic Typography Promo",
    description:
      "Create a 20–30 second kinetic typography video using text animators, keyframes, easing, graph editor, and motion blur. Focus on timing and rhythm.",
    url: "https://youtu.be/UahA-6QYfC0?si=xmlUShEGMkbLM_BO"
  },
  {
    id: "phase1-logo-reveal",
    level: "Phase 1 — Beginner",
    title: "Logo Reveal Animation",
    description:
      "Animate a clean logo reveal using shape layers, trim paths, masks, and smooth easing. Learn professional logo animation workflow.",
    url: "https://youtu.be/jeVcB0fYPcI?si=TU2qiJcxWulqRkY5"
  },

  // 🌿 Intermediate
  {
    id: "phase2-explainer-video",
    level: "Phase 2 — Intermediate",
    title: "Explainer Video Scene",
    description:
      "Design a short explainer video scene using icons, shape animation, text, and storytelling principles. Learn pre-compositions and clean timelines.",
    url: "https://youtu.be/Up_QkN8UhmU?si=3rEAeKFd9IopVAhf"
  },
  {
    id: "phase2-reel-edit",
    level: "Phase 2 — Intermediate",
    title: "Instagram Reel / YouTube Short",
    description:
      "Create a fast-paced vertical video synced to music beats. Learn speed ramps, transitions, typography overlays, and social-media-ready exports.",
    url: "https://youtu.be/fYvXeEVrN7Q?si=E1NHX_WALed69K81"
  },

  // 🌳 Advanced
  {
    id: "phase3-product-promo",
    level: "Phase 3 — Advanced",
    title: "Product Promo / Ad Video",
    description:
      "Build a cinematic product promo using 3D layers, camera animation, lighting, color grading, and polished motion design techniques.",
    url: "https://youtu.be/Fu659J3qOCw?si=-5jGcdMSZNooKkY1"
  },
  {
    id: "phase3-vfx-composite",
    level: "Phase 3 — Advanced",
    title: "VFX Composite Shot",
    description:
      "Create a realistic VFX shot using masking, rotoscoping, tracking, blend modes, and compositing techniques to integrate effects into live footage.",
    url: "https://youtu.be/Ytr05GmPRWA?si=AUUny7dClsA0WWgB"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎬 After Effects Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build essential After Effects projects from beginner to
            industry-ready — motion graphics, social media, commercials, and
            VFX compositing.
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
                View Official Guide ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Complete all 6 projects with clean motion, proper easing, and
          professional polish. These projects are enough to build a strong
          After Effects portfolio for freelance or studio work.
        </footer>
      </div>
    </section>
  );
}
