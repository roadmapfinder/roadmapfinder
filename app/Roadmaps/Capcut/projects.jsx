// components/CapcutProjects.jsx
import React from "react";

const projects = [
  // Beginner / Short-Form Content
  {
    id: "project1-viral-reel",
    level: "Core Project",
    title: "Viral Instagram Reel (Hook-Based Edit)",
    description:
      "Create a 20–40 second Instagram Reel with a strong hook, fast cuts, captions, and beat-synced edits. Skills: Jump cuts, auto captions, speed ramps, beat timing, looping.",
    url: "https://youtu.be/_1FOJwqpZk8?si=thgRUBclnE34jRol",
  },

  // Talking Head Content
  {
    id: "project2-talking-head-short",
    level: "High-Demand Project",
    title: "Talking-Head YouTube Short",
    description:
      "Edit a 30–60 second talking-head video with retention-focused jump cuts, smooth zooms, captions, and clean audio. Skills: Keyframes, caption hierarchy, audio ducking.",
    url: "https://youtu.be/6_jokOm1mIk?si=JLU5BDh_UMhn_Svz",
  },

  // Cinematic Editing
  {
    id: "project3-cinematic-montage",
    level: "Professional Project",
    title: "Cinematic Montage Video",
    description:
      "Create a cinematic montage using B-roll, music sync, speed curves, color grading, and overlays. Skills: LUTs, speed ramps, transitions, cinematic storytelling.",
    url: "https://youtu.be/2_zNSfpi5IM?si=T41aLlKIZSlXt71B",
  },

  // Brand & Ads
  {
    id: "project4-product-ad",
    level: "Industry Project",
    title: "Brand Promo / Product Ad Video",
    description:
      "Create a 20–30 second promotional video for a product or brand with clean visuals and a clear CTA. Skills: Branding consistency, product highlighting, ad pacing.",
    url: "https://youtu.be/36AtiE37-UU?si=M6vQbW5eA4uF0bv1",
  },

  // Motion & Keyframes
  {
    id: "project5-motion-keyframes",
    level: "Performance Editing Project",
    title: "Advanced Motion & Keyframe Edit",
    description:
      "Build a motion-heavy edit using keyframes, masking, smooth zooms, and text-behind-subject effects. Skills: Position & scale keyframes, masking, motion curves.",
    url: "https://youtu.be/n2GQEsVhuMo?si=MBvpkX3lq1n1mYvk",
  },

  // Long-Form Editing
  {
    id: "project6-long-form-youtube",
    level: "Advanced Project (6–8 months)",
    title: "Long-Form YouTube Video (Client-Ready)",
    description:
      "Edit an 8–12 minute YouTube video with talking-head footage, B-roll, music, and clean pacing. Skills: Long timelines, storytelling, professional audio balance.",
    url: "https://youtu.be/Ex1R3rsdlms?si=6-8BYyUt0XYtzpdY",
  },
];

export default function CapcutProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎬 CapCut Video Editor Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Go from beginner to industry-ready CapCut editor by building these
            6 practical, real-world video editing projects.
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

              <p className="mt-2 text-gray-600 text-sm">
                {p.description}
              </p>

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
          Build these projects in order. Together they cover short-form content,
          cinematic edits, ads, motion graphics, and long-form videos — everything
          needed to work as a professional CapCut editor.
        </footer>
      </div>
    </section>
  );
}
