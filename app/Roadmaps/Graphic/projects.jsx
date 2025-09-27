import React from "react";

const projects = [
  {
    id: "logo-brand-identity",
    level: "Beginner",
    title: "Logo & Brand Identity",
    description:
      "Design a logo and a basic brand identity system including typography and color palette, focusing on scalability and vector design.",
    tutorials: [
      {
       
        url: "https://youtu.be/9jmOg0i5Jwo?si=IBxS774anmV74_LY",
      },
    ],
  },
  {
    id: "business-stationery",
    level: "Beginner",
    title: "Business Stationery Kit",
    description:
      "Design business cards, letterheads, and envelopes to learn about consistency across print materials.",
    tutorials: [
      {
        
        url: "https://youtu.be/HoWCgiwvtxk?si=TyE8QNEubkxFy2fz",
      },
    ],
  },
  {
    id: "social-media-pack",
    level: "Beginner",
    title: "Social Media Campaign Pack",
    description:
      "Create Instagram carousels, YouTube thumbnails, and LinkedIn posts focusing on aspect ratios and engaging layouts.",
    tutorials: [
      {
      
        url: "https://youtu.be/YZIT10mgQiQ?si=f_kgj3kgZfVqp0eS",
      },
    ],
  },
  {
    id: "poster-flyer",
    level: "Intermediate",
    title: "Poster & Flyer Design",
    description:
      "Design an event poster and a promotional flyer, focusing on visual hierarchy, print layout, and typography.",
    tutorials: [
      {
        
        url: "https://youtu.be/GaBFxYJiLSk?si=uSZwMRcmY9LVtXWP",
      },
    ],
  },
  {
    id: "packaging-design",
    level: "Intermediate",
    title: "Packaging Design",
    description:
      "Create product packaging with dielines and 3D mockups, applying branding effectively on real-world objects.",
    tutorials: [
      {
        
        url: "https://youtu.be/p9zce18Wxcw?si=1RrZrjvNJ2eCL6Va",
      },
    ],
  },
  {
    id: "ui-ux-concept",
    level: "Intermediate",
    title: "UI/UX Design Concept",
    description:
      "Design a mobile app or website mockup using Figma or Adobe XD, learning wireframes, usability, and responsive design.",
    tutorials: [
      {
        url: "https://youtu.be/esbdyyEvkxw?si=R9B0dT8Gev4Tf_bh",
      },
    ],
  },
  {
    id: "infographic-design",
    level: "Intermediate",
    title: "Infographic Design",
    description:
      "Create an infographic to present data and statistics, focusing on clarity, icons, and storytelling.",
    tutorials: [
      {
        
        url: "https://www.youtube.com/live/In4AcqMw6NE?si=dP08jes__PPtkwJO",
      },
    ],
  },
  {
    id: "brochure-magazine",
    level: "Advanced",
    title: "Brochure / Magazine Layout",
    description:
      "Design a multi-page brochure or magazine layout using InDesign, applying grid systems and editorial design.",
    tutorials: [
      {
     
        url: "https://youtu.be/vM7Lf6paots?si=EqXVnRctajJ78tKv",
      },
    ],
  },
  {
    id: "ad-campaign",
    level: "Advanced",
    title: "Ad Campaign (Print + Digital)",
    description:
      "Develop a consistent campaign across billboard, web banner, and social media ads, focusing on scalability.",
    tutorials: [
      {
        
        url: "https://youtu.be/4uqcF7d0hLM?si=2f1e1jZnVDb9gQ2y",
      },
    ],
  }
 
  
  
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
            A curated list of project ideas with tutorials to guide you from
            beginner to professional in graphic design.
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
              <p className="mt-2 text-gray-600 text-sm">
                {project.description}
              </p>
              <ul className="mt-4 space-y-2">
                {project.tutorials.map((tutorial, index) => (
                  <li key={index}>
                    <a
                      href={tutorial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                        Explore Tutorial                  
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These tutorials have been verified and are relevant, up-to-date, and
          project-focused.
        </footer>
      </div>
    </section>
  );
}
