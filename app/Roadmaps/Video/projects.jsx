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
    url: "https://www.youtube.com/watch?v=axuksj7FlS8",
  },
  {
    id: "photo-slideshow-music",
    level: "Beginner",
    title: "Photo Slideshow with Music",
    description:
      "Create engaging photo slideshows with music, applying transitions and adding simple text titles.",
    url: "https://www.youtube.com/playlist?list=PLAU_hjQazNAyhlvydcizgZe6o9MrN4o0w",
  },
  {
    id: "social-media-reel",
    level: "Beginner",
    title: "Short Social Media Reel (30–60 sec)",
    description:
      "Learn to edit short-form content optimized for platforms like TikTok and Instagram using CapCut.",
    url: "https://www.youtube.com/watch?v=IulghiX6TuI",
  },

  // 🟡 Intermediate Level
  {
    id: "mini-documentary",
    level: "Intermediate",
    title: "Mini Documentary (3–5 min)",
    description:
      "Dive into documentary-style editing, including syncing audio, adding subtitles, and applying basic color correction in DaVinci Resolve.",
    url: "https://www.youtube.com/watch?v=uO-P_C8cJkE",
  },
  {
    id: "music-video-edit",
    level: "Intermediate",
    title: "Music Video Edit",
    description:
      "Learn advanced editing techniques like speed ramping, transitions, and stylized color grading for music videos.",
    url: "https://www.youtube.com/watch?v=Ta4nyuMvqok",
  },
  {
    id: "event-highlight-video",
    level: "Intermediate",
    title: "Event Highlight Video (Birthday/Wedding/Concert)",
    description:
      "Understand the nuances of editing event highlights, focusing on pacing, music synchronization, and emotional storytelling.",
    url: "https://www.udemy.com/course/learn-video-editing-beginner-to-advanced-in-hindi/",
  },

  // 🔵 Advanced Level
  {
    id: "multi-camera-interview",
    level: "Advanced",
    title: "Multi-Camera Interview/Podcast",
    description:
      "Master multi-camera editing techniques, including syncing multiple camera angles and audio tracks for interviews and podcasts.",
    url: "https://www.youtube.com/watch?v=a_1BblRcCdo",
  },
  {
    id: "commercial-ad",
    level: "Advanced",
    title: "Commercial Ad (30–60 sec)",
    description:
      "Create compelling commercial ads with product shots, voice-overs, and text animations.",
    url: "https://www.mindluster.com/lesson/268897-video",
  },
  {
    id: "cinematic-travel-film",
    level: "Advanced",
    title: "Cinematic Travel Film",
    description:
      "Capture and edit cinematic travel footage, incorporating techniques like drone shots, slow motion, and color grading.",
    url: "https://www.udemy.com/course/learn-video-editing-beginner-to-advanced-in-hindi/",
  },
  {
    id: "motion-graphics-explainer",
    level: "Advanced",
    title: "Motion Graphics Explainer Video",
    description:
      "Combine stock footage with motion graphics to create engaging explainer videos.",
    url: "https://www.mindluster.com/lesson/268897-video",
  },

  // 🏆 Industry-Ready Projects
  {
    id: "corporate-promo",
    level: "Industry-Ready",
    title: "Corporate Promo Video",
    description:
      "Produce professional corporate promo videos with scripting, voiceovers, and branded graphics.",
    url: "https://www.udemy.com/course/learn-video-editing-beginner-to-advanced-in-hindi/",
  },
  {
    id: "short-film",
    level: "Industry-Ready",
    title: "Short Film (5–15 min)",
    description:
      "Collaborate on editing short films, focusing on storytelling, dialogue synchronization, and pacing.",
    url: "https://www.udemy.com/course/learn-video-editing-beginner-to-advanced-in-hindi/",
  },
  {
    id: "youtube-content-package",
    level: "Industry-Ready",
    title: "YouTube Content Package",
    description:
      "Edit YouTube content with branding elements like intros, outros, and lower thirds.",
    url: "https://www.udemy.com/course/learn-video-editing-beginner-to-advanced-in-hindi/",
  },
  {
    id: "event-coverage",
    level: "Industry-Ready",
    title: "Event Coverage (Conference/Wedding)",
    description:
      "Handle multi-camera setups and deliver highlight reels and long-form versions for events.",
    url: "https://www.udemy.com/course/learn-video-editing-beginner-to-advanced-in-hindi/",
  },
  {
    id: "showreel",
    level: "Industry-Ready",
    title: "Showreel (1–2 min)",
    description:
      "Compile your best work into a professional showreel to showcase your skills to potential clients.",
    url: "https://www.udemy.com/course/learn-video-editing-beginner-to-advanced-in-hindi/",
  },
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
