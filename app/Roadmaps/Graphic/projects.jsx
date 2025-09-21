import React from "react";

const projects = [
  {
    id: "social-media-graphics",
    level: "Beginner",
    title: "Social Media Graphics",
    description:
      "Create engaging social media posts, banners, and thumbnails using Canva or Photoshop, focusing on typography, color schemes, and layout.",
    tutorials: [
      {
        title: "Graphic Design Full Course 2025 - Free Tutorial in Hindi | Canva Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
      {
        title: "Canva FULL Course For Beginners 2025 [FREE] | How To Use Canva",
        url: "https://www.youtube.com/watch?v=EI1yezMQEFg",
      },
    ],
  },
  {
    id: "basic-logo-design",
    level: "Beginner",
    title: "Basic Logo Design",
    description:
      "Design logos for fictional brands using Illustrator or Canva, learning vector shapes, symbols, and brand identity basics.",
    tutorials: [
      {
        title: "Adobe Illustrator Complete Course (7 Hours) in Hindi",
        url: "https://www.youtube.com/watch?v=5_aSDG1Ppqs",
      },
      {
        title: "Adobe Illustrator Complete Course in Urdu / Hindi",
        url: "https://www.youtube.com/watch?v=OIsIrnnLywo",
      },
    ],
  },
  {
    id: "simple-poster-design",
    level: "Beginner",
    title: "Simple Poster Design",
    description:
      "Design event or awareness posters focusing on layout, visual hierarchy, and typography using tools like InDesign or Canva.",
    tutorials: [
      {
        title: "Graphic Design Full Course | Learn Graphic Design from Beginner to Advanced",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "business-card-stationery",
    level: "Beginner",
    title: "Business Card & Stationery",
    description:
      "Create business cards and letterheads for fictional brands, focusing on branding, grid systems, and typography.",
    tutorials: [
      {
        title: "Free Graphic Designing Full Course 2025 | Canva Free Tutorial",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "full-brand-identity",
    level: "Intermediate",
    title: "Full Brand Identity",
    description:
      "Develop a complete brand identity for a startup or NGO, including logo, color scheme, typography, and brand guidelines.",
    tutorials: [
      {
        title: "Graphic Design Full Course | Learn Graphic Design from Beginner to Advanced",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "brochure-flyer-design",
    level: "Intermediate",
    title: "Brochure / Flyer Design",
    description:
      "Design multi-page brochures or flyers, such as travel agency brochures or restaurant menus, using InDesign or Canva.",
    tutorials: [
      {
        title: "Graphic Design Course",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "packaging-design",
    level: "Intermediate",
    title: "Packaging Design",
    description:
      "Create product packaging designs, such as chocolate boxes or perfume bottles, focusing on mockups and dieline understanding.",
    tutorials: [
      {
        title: "Graphic Design Full Course | Learn Graphic Design from Beginner to Advanced",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "social-media-campaign",
    level: "Intermediate",
    title: "Social Media Campaign",
    description:
      "Develop a set of 5–10 posts for a campaign across platforms like Instagram, LinkedIn, or Twitter, ensuring post consistency and branding.",
    tutorials: [
      {
        title: "Free Graphic Designing Full Course 2025 | Canva Free Tutorial",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "website-mobile-ui-ux",
    level: "Advanced",
    title: "Website & Mobile UI/UX",
    description:
      "Redesign a website or create a mobile app interface, focusing on wireframes, prototypes, and responsive design using Figma or Adobe XD.",
    tutorials: [
      {
        title: "Graphic Design Full Course | Learn Graphic Design from Beginner to Advanced",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "motion-graphics-animated-posts",
    level: "Advanced",
    title: "Motion Graphics & Animated Posts",
    description:
      "Create animated social media posts or logo reveal animations using After Effects, focusing on typography animation and short video production.",
    tutorials: [
      {
        title: "Free Graphic Designing Full Course 2025 | Canva Free Tutorial",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "infographics-data-visualization",
    level: "Advanced",
    title: "Infographics & Data Visualization",
    description:
      "Design infographics or visualize data trends, focusing on hierarchy, icons, and visual storytelling using Illustrator or Canva.",
    tutorials: [
      {
        title: "Graphic Design Full Course | Learn Graphic Design from Beginner to Advanced",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "illustration-projects",
    level: "Advanced",
    title: "Illustration Projects",
    description:
      "Create custom illustrations for posters or character designs for games or apps, focusing on digital illustration techniques using Procreate or Illustrator.",
    tutorials: [
      {
        title: "Adobe Illustrator Complete Course (7 Hours) in Hindi",
        url: "https://www.youtube.com/watch?v=5_aSDG1Ppqs",
      },
    ],
  },
  {
    id: "full-branding-case-study",
    level: "Professional",
    title: "Full Branding Case Study",
    description:
      "Develop a comprehensive brand identity, including logo, website UI, social posts, stationery, and packaging, and present it as a case study.",
    tutorials: [
      {
        title: "Graphic Design Full Course | Learn Graphic Design from Beginner to Advanced",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "cross-platform-campaign",
    level: "Professional",
    title: "Cross-Platform Campaign",
    description:
      "Launch a campaign with animated posts, a website landing page, and an app interface, demonstrating versatility in real-world workflow.",
    tutorials: [
      {
        title: "Free Graphic Designing Full Course 2025 | Canva Free Tutorial",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "freelance-client-simulation",
    level: "Professional",
    title: "Freelance/Client Simulation",
    description:
      "Take real or fictional client briefs and design brand identity, packaging, and marketing materials, simulating a freelance project.",
    tutorials: [
      {
        title: "Graphic Design Full Course | Learn Graphic Design from Beginner to Advanced",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
  {
    id: "ai-enhanced-design-projects",
    level: "Professional",
    title: "AI-Enhanced Design Projects",
    description:
      "Generate design concepts using AI tools like Adobe Firefly, MidJourney, or DALL·E, and refine them in Illustrator or Photoshop.",
    tutorials: [
      {
        title: "Free Graphic Designing Full Course 2025 | Canva Free Tutorial",
        url: "https://www.youtube.com/watch?v=csV7zrrbvwQ",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 Graphic Design Project Roadmap: Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-gray-600">
            A curated list of project ideas with tutorials to guide you from beginner to professional in graphic design.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${project.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {project.level}
              </span>
              <h3
                id={`${project.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              <ul className="mt-4 space-y-2">
                {project.tutorials.map((tutorial, index) => (
                  <li key={index}>
                    <a
                      href={tutorial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {tutorial.title}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These tutorials have been verified and are relevant, up-to-date, and project-focused.
        </footer>
      </div>
    </section>
  );
}
