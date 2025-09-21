// components/Projects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "url-shortener",
    level: "Phase 1 — Beginner",
    title: "URL Shortener Service (like Bit.ly)",
    description:
      "Learn to build a professional URL shortener website similar to Bit.ly, covering backend and frontend development.",
    url: "https://www.youtube.com/watch?v=N39zbNi2qoQ",
    channel: "HIVE corp.",
  },
  {
    id: "real-time-chat",
    level: "Phase 1 — Beginner",
    title: "Real-Time Chat Application",
    description:
      "Step-by-step guide to building a real-time chat application using WebSocket, STOMP, SockJS, and MongoDB.",
    url: "https://www.youtube.com/watch?v=pvy2Xe38fr4",
    channel: "Lets Code",
  },

  // Phase 2 — Intermediate
  {
    id: "mini-ecommerce",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Platform (Mini Amazon)",
    description:
      "Build a fully functional e-commerce website in just 15 minutes, covering product listings, cart functionality, and checkout process.",
    url: "https://www.youtube.com/watch?v=zavm_e4Oo8w",
    channel: "CodeWithHarry",
  },
  {
    id: "distributed-file-storage",
    level: "Phase 2 — Intermediate",
    title: "Distributed File Storage System (like Dropbox)",
    description:
      "Understand the architecture and implementation of Hadoop's Distributed File System for scalable storage solutions.",
    url: "https://www.youtube.com/watch?v=LWX-zrllPco",
    channel: "CodeWithHarry",
  },

  // Phase 3 — Advanced
  {
    id: "video-streaming-platform",
    level: "Phase 3 — Advanced",
    title: "Scalable Video Streaming Platform (like YouTube)",
    description:
      "Learn to design a scalable OTT platform, focusing on video streaming, content delivery, and user management.",
    url: "https://www.youtube.com/watch?v=NH-f955mvGg",
    channel: "Gaurav Sen",
  },
  {
    id: "social-media-feed",
    level: "Phase 3 — Advanced",
    title: "Scalable Social Media Feed (like Twitter)",
    description:
      "Dive into designing social media platforms, with an emphasis on feed generation, user interactions, and scalability.",
    url: "https://www.youtube.com/watch?v=NH-f955mvGg",
    channel: "Gaurav Sen",
  },
  {
    id: "ride-sharing-system",
    level: "Phase 3 — Advanced",
    title: "Ride-Sharing System (like Uber)",
    description:
      "Explore the design patterns for onboarding in ride-sharing apps, focusing on user experience and interface design.",
    url: "https://www.youtube.com/watch?v=FbfL1BOBeG4",
    channel: "Ali Abdaal",
  },
  {
    id: "event-driven-ecommerce",
    level: "Phase 3 — Advanced",
    title: "Event-Driven E-Commerce Platform",
    description:
      "Build an event booking application using FlutterFlow, demonstrating event-driven architecture and no-code development.",
    url: "https://www.youtube.com/watch?v=mJIocMZz2Ms",
    channel: "CodeWithHarry",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 System Design Project Tutorials
          </h2>
          <p className="mt-2 text-gray-600">
            Progressive System Design projects from Beginner → Intermediate → Advanced, with latest YouTube tutorials in Hindi & English.
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
              <p className="mt-1 text-gray-500 text-xs">Channel: {p.channel}</p>
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
          Build your skills progressively with these verified, latest tutorials in Hindi & English.
        </footer>
      </div>
    </section>
  );
}
