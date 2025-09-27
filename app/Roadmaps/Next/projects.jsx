// components/NextProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-portfolio",
    level: "Phase 1 — Beginner",
    title: "Personal Portfolio Website",
    description:
      "Showcase your skills, projects, and resume. Build Home, About, Projects, Contact pages with responsive design, dark/light theme toggle, and contact form using API routes.",
    url: "https://youtu.be/Y2kGqbzvAn4?si=dP-TPSYAlLil3vbq", // replace with your tutorial or GitHub repo
  },
  {
    id: "phase1-blog",
    level: "Phase 1 — Beginner",
    title: "Blog Platform",
    description:
      "Learn static site generation using getStaticProps/getStaticPaths. Create blog listing, single post pages, comments section, and tag/category filtering.",
    url: "https://youtu.be/1g32IlH3SUs?si=Akk2E1jgRtSLNfVM",
  },
  {
    id: "phase1-recipe",
    level: "Phase 1 — Beginner",
    title: "Recipe / Tutorial App",
    description:
      "Hands-on with dynamic routing and API fetching. Build listing and detail pages, search & filter functionality, optional user ratings/comments.",
    url: "https://youtu.be/pQHO-Doct3M?si=BQVrX-Aq4Ws2JiRg",
  },
  // Phase 2 — Intermediate
  {
    id: "phase2-ecommerce",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Product Page",
    description:
      "Learn SSR/SSG, API routes, state management, and React hooks. Features: product catalog with filtering, product detail pages, add to cart.",
    url: "https://youtu.be/nxK_TCt2pKw?si=9m_jW7GiloX8pbqo",
  },
  {
    id: "phase2-jobboard",
    level: "Phase 2 — Intermediate",
    title: "Job Board / Job Listing App",
    description:
      "Practice authentication, backend integration, and filtering. Features: user login (roles), job posting/listing, search, filter, and apply functionality.",
    url: "https://youtu.be/grxNze3hjAQ?si=3R9qAz2Og2UNV8a1",
  },
  {
    id: "phase2-social",
    level: "Phase 2 — Intermediate",
    title: "Social Media Feed",
    description:
      "Handle real-time updates and user-generated content. Features: post creation, likes/comments, real-time updates, and profile pages.",
    url: "https://youtu.be/o080tU3sd0k?si=EPBOX9nRsrnspFpx",
  },
  // Phase 3 — Advanced
  {
    id: "phase3-saas",
    level: "Phase 3 — Advanced",
    title: "SaaS Dashboard",
    description:
      "Build subscription-based application with analytics. Features: multi-user roles, analytics dashboard, subscription/payment integration (Stripe).",
    url: "https://youtu.be/SjsQdfvxjL8?si=H4LXgKwxrMB_5NEr",
  },
  {
    id: "phase3-cms",
    level: "Phase 3 — Advanced",
    title: "Multi-language Blog / CMS",
    description:
      "Handle i18n, SEO, and performance. Features: multiple language support, SEO-optimized posts, integration with CMS like Strapi, Contentful, or Sanity.",
    url: "https://youtu.be/VlcmLgbj9-Y?si=7Y6K6E25j02q1n4K",
  },
  {
    id: "phase3-media",
    level: "Phase 3 — Advanced",
    title: "Streaming / Media App",
    description:
      "Learn large-scale media handling and performance optimization. Features: video/image gallery, upload & streaming, lazy loading, caching strategies.",
    url: "https://youtu.be/ArmPzvHTcfQ?si=FmY2ECLxYsMWQro5",
  },
];

export default function NextProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ Next.js Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready Next.js projects. Build, code along, and deploy to strengthen your portfolio.
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
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, implement features step by step, and showcase your top projects in a polished portfolio.
        </footer>
      </div>
    </section>
  );
}
