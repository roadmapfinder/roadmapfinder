// components/CanvaProjects.jsx
import React from "react";

const projects = [
  // Beginner / Branding
  {
    id: "project1-brand-identity",
    level: "Core Project (0–2 months)",
    title: "Brand Identity & Brand Kit",
    description:
      "Create a full brand identity including logo, color palette, typography system, and social media templates. Skills: Branding, consistency, template creation, Canva Brand Kit.",
    url: "https://youtu.be/W9iG20uB7IY?si=QBCDSsa1_mo0ATwr",
  },

  // Social Media Content
  {
    id: "project2-instagram-carousel",
    level: "High-Demand Project (2–4 months)",
    title: "Instagram Carousel Content System",
    description:
      "Design a 10-slide Instagram carousel with consistent layout and visual hierarchy. Skills: Layout design, typography, mobile readability, scroll-stopping hooks.",
    url: "https://youtu.be/YjPoFyoBr_g?si=2ktmf6HdgjNgF_SX",
  },

  // Presentation / Pitch Deck
  {
    id: "project3-pitch-deck",
    level: "Professional Project",
    title: "Startup Pitch Deck / Business Presentation",
    description:
      "Design a 12–15 slide professional pitch deck covering problem, solution, market, product, revenue, and CTA. Skills: Data visualization, executive-friendly design, storytelling.",
    url: "https://youtu.be/hDoz3yApdw4?si=mQNgUrI5Z4zoljaJ",
  },

  // Marketing Campaign
  {
    id: "project4-marketing-assets",
    level: "Industry Project ",
    title: "Marketing Campaign Assets",
    description:
      "Create a multi-platform marketing campaign including Instagram posts/stories, LinkedIn posts, ad creatives, email headers, and landing page visuals. Skills: Branding consistency, conversion-focused design.",
    url: "https://youtu.be/u4pVCSv11G8?si=Kgu96p1aS9i3U4VK",
  },

  // YouTube / Reels
  {
    id: "project5-thumbnail-system",
    level: "Performance Design Project",
    title: "YouTube / Reels Thumbnail System",
    description:
      "Design 5–8 thumbnails for a channel with consistent visual style, strong typography, and high contrast. Skills: Conversion-focused design, branding consistency, click-through optimization.",
    url: "https://youtu.be/WK_9CWVsHRA?si=EtbIq49-7FFlsk6K",
  },

  // Motion / Animated Design
  {
    id: "project6-animated-posts",
    level: "Advanced Project (6–8 months)",
    title: "Animated Social Media Post ",
    description:
      "Create animated Instagram posts or reel covers with smooth text and element animations. Skills: Motion design, Canva animation tools, export for social media.",
    url: "https://youtu.be/fKx9MdMBleU?si=ixzxNrtaLi78Q-Qe",
  },
];

export default function CanvaProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 Canva Designer Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step from beginner to industry-ready Canva designer by building these 6 key projects with practical skills.
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
          Build these projects step by step. Focus on branding, social media content, presentations, marketing, thumbnails, and motion graphics. Showcase all projects in your professional portfolio.
        </footer>
      </div>
    </section>
  );
}
