// components/Projects.jsx
import React from "react";

const projects = [
  // 🟢 Beginner Level
  {
    id: "simple-vlog-edit",
    level: "Beginner",
    title: "Simple Vlog Edit",
    description:
      "Learn basic editing techniques like trimming, timeline editing, music sync, and fade in/out in Adobe Premiere Pro.",
    url: "https://youtu.be/rLL-zb-CNoA?si=_sLlKj4y2FRLT6Np",
  },
  {
    id: "photo-slideshow-music",
    level: "Beginner",
    title: "Photo Slideshow with Music",
    description:
      "Create engaging photo slideshows with music, applying transitions and adding simple text titles.",
    url: "https://youtu.be/hWZ6tcCODYY?si=m6EIYHiqmRd-q-iO",
  },
  {
    id: "social-media-reel",
    level: "Beginner",
    title: "Short Social Media Reel (30–60 sec)",
    description:
      "Learn to edit short-form content optimized for platforms like TikTok and Instagram using CapCut.",
    url: "https://youtu.be/FDOi29blAFI?si=vgrYJ5FgmQKAUhJd",
  },

  // 🟡 Intermediate Level
  {
    id: "mini-documentary",
    level: "Intermediate",
    title: "Mini Documentary (3–5 min)",
    description:
      "Dive into documentary-style editing, including syncing audio, adding subtitles, and applying basic color correction in DaVinci Resolve.",
    url: "https://youtu.be/SrJOE2pEp7A?si=8rdweEPZgRhzvA5E",
  },
  {
    id: "music-video-edit",
    level: "Intermediate",
    title: "Music Video Edit",
    description:
      "Learn advanced editing techniques like speed ramping, transitions, and stylized color grading for music videos.",
    url: "https://youtu.be/oFxnBnmgaGs?si=F1KAT2m4U7UdhZXL",
  },
  {
    id: "event-highlight-video",
    level: "Intermediate",
    title: "Event Highlight Video (Birthday/Wedding/Concert)",
    description:
      "Understand the nuances of editing event highlights, focusing on pacing, music synchronization, and emotional storytelling.",
    url: "https://youtu.be/CmVA3cWllB8?si=dWoLmeQYc_DgwzKB",
  },

  // 🔵 Advanced Level

  {
    id: "commercial-ad",
    level: "Advanced",
    title: "Commercial Ad (30–60 sec)",
    description:
      "Create compelling commercial ads with product shots, voice-overs, and text animations.",
    url: "https://youtu.be/pUlH1UQgK0o?si=UkofPGFYDp-eDbxP",
  },
  {
    id: "cinematic-travel-film",
    level: "Advanced",
    title: "Cinematic Travel Film",
    description:
      "Capture and edit cinematic travel footage, incorporating techniques like drone shots, slow motion, and color grading.",
    url: "https://youtu.be/AbNmaVD38Z0?si=usWYuea0e9TfW4UF",
  },

  // 🏆 Industry-Ready Projects
  {
    id: "corporate-promo",
    level: "Industry-Ready",
    title: "Corporate Promo Video",
    description:
      "Produce professional corporate promo videos with scripting, voiceovers, and branded graphics.",
    url: "https://youtu.be/GnlL8IHUz_E?si=tAYFqoeCoGrSHF47",
  },
  {
    id: "short-film",
    level: "Industry-Ready",
    title: "Short Film (5–15 min)",
    description:
      "Collaborate on editing short films, focusing on storytelling, dialogue synchronization, and pacing.",
    url: "https://youtu.be/8QCK_qEp_PI?si=fWDuvUgRUpCR5YP1",
  }

];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎥 Verified Video Editing Projects Tutorials
          </h2>
          <p className="mt-2 text-gray-600">
            Curated beginner-to-industry ready video editing tutorials in Hindi & English — practice real projects and build a strong portfolio.
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
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These tutorials are selected to help learners progress from beginner to industry-ready video editing skills.
        </footer>
      </div>
    </section>
  );
}
