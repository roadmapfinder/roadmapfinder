"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-short-film",
    level: "Beginner",
    title: "Story-Driven Short Film Edit",
    description:
      "Edit a 2–3 minute short film to learn core editing, pacing, continuity, J-cuts/L-cuts, basic audio balancing, and clean storytelling using DaVinci Resolve.",
    url: "https://youtu.be/F5euSYD0nMY?si=Wbs4xe8ojJ5AwVua",
  },
  {
    id: "phase1-youtube-video",
    level: "Beginner",
    title: "YouTube / Social Media Video Package",
    description:
      "Create a long-form YouTube video and short-form reels. Practice jump cuts, captions, zooms, music syncing, fast workflows, and export presets.",
    url: "https://youtu.be/ReYsGTwHHcw?si=82QyRUc_Y_d4Irwq",
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-color-grading",
    level: "Intermediate (2–4 weeks)",
    title: "Cinematic Color Grading Project",
    description:
      "Grade a multi-camera scene using scopes, primary/secondary corrections, power windows, shot matching, tracking, and cinematic look creation.",
    url: "https://youtu.be/itli8isoXQQ?si=__awTGcuFKrVqU06",
  },
  {
    id: "phase2-motion-graphics",
    level: "Intermediate (4–6 weeks)",
    title: "Motion Graphics & VFX (Fusion)",
    description:
      "Design animated titles, lower thirds, and motion-tracked graphics using Fusion nodes, keyframes, masks, and basic compositing.",
    url: "https://youtu.be/gaFT_Kj2yeQ?si=-2nysgdy-PMP_uB5",
  },

  // 🚀 Advanced Phase
  {
    id: "phase3-audio-mix",
    level: "Advanced (6–8 weeks)",
    title: "Professional Audio Cleanup & Mix",
    description:
      "Clean and mix dialogue using Fairlight. Apply noise reduction, EQ, compression, buses, automation, and broadcast-ready loudness standards.",
    url: "https://youtu.be/hh-HKyO6NUo?si=TBgRBM-ddompb8go",
  },
  {
    id: "phase3-client-project",
    level: "Industry-Ready (8–10 weeks)",
    title: "End-to-End Client Video Project (Capstone)",
    description:
      "Complete a real-world style project: edit, color grade, add motion graphics, mix audio, manage revisions, and deliver multiple formats.",
    url: "https://youtu.be/vQnWm2PB9B8?si=yDvTciDW8HmEKS3m",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎬 DaVinci Resolve Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these DaVinci Resolve projects step-by-step to master editing,
            color grading, motion graphics, audio post-production, and
            professional delivery workflows.
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
                  View Official Resource ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Complete these projects in order — editing → social content → color
          grading → motion graphics → audio → full client workflow. Each project
          is designed to make you job-ready for real post-production roles.
        </footer>
      </div>
    </section>
  );
}
