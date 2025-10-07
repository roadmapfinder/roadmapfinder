// components/PHPProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-portfolio",
    level: "Phase 1 — Beginner",
    title: "Personal Portfolio Website",
    description:
      "Build a dynamic portfolio using PHP, HTML, and CSS. Include a contact form with PHP form handling and email sending.",
    url: "https://github.com/yourusername/php-portfolio",
  },
  {
    id: "phase1-todo",
    level: "Phase 1 — Beginner",
    title: "Simple To-Do List",
    description:
      "Create a CRUD task manager using PHP and JSON or sessions to store data. Learn arrays, forms, and basic file handling.",
    url: "https://youtu.be/K7PxsuZtlD4?si=ncUSH4dx5B6PgYq1",
  },
  {
    id: "phase1-auth",
    level: "Phase 1 — Beginner",
    title: "User Registration & Login System",
    description:
      "Implement user registration and login with password hashing, sessions, and form validation using PHP and MySQL.",
    url: "https://youtu.be/zcojC6PWNOQ?si=zbQ_jKRYsbtCahbv",
  },
  // Phase 2 — Intermediate
  {
    id: "phase2-blog",
    level: "Phase 2 — Intermediate",
    title: "Blog Platform with Database",
    description:
      "Develop a blog with PHP and MySQL. Implement CRUD for posts, comments, categories, and user roles.",
    url: "https://youtu.be/Bcc97YC18Z0?si=5cy_v5Qrn4n7SVOi",
  },
  {
    id: "phase2-ecommerce",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Backend",
    description:
      "Build an online store backend with PHP and MySQL. Handle products, cart, orders, and payment integration (Stripe/PayPal).",
    url: "https://youtu.be/BUpYnDuVt_U?si=_ZUvGT7Ubd40wtXh",
  },
  {
    id: "phase2-restapi",
    level: "Phase 2 — Intermediate",
    title: "Simple REST API",
    description:
      "Create a RESTful API with PHP for managing resources (e.g., tasks or products). Learn JSON handling, endpoints, and authentication.",
    url: "https://youtu.be/2EJ03wM0erI?si=rL2WpCd6V1fI_p8c",
  },
  // Phase 3 — Advanced
  {
    id: "phase3-task-saas",
    level: "Phase 3 — Advanced",
    title: "Task Management System",
    description:
      "Build a Trello-like task management system with PHP and MySQL. Include multi-user collaboration, roles, and dashboards.",
    url: "https://youtu.be/HMuThowRpeQ?si=ryVS3mJDl1VYQ_nN",
  },
  {
    id: "phase3-social",
    level: "Phase 3 — Advanced",
    title: "Social Media Micro-Platform",
    description:
      "Develop a mini social media platform with PHP and MySQL. Features include user posts, likes, comments, and notifications.",
    url: "https://youtu.be/P0em_cmUOtM?si=i5JBTS_5zbIxmE7H",
  },
  {
    id: "phase3-saas-subscription",
    level: "Phase 3 — Advanced",
    title: "Subscription-Based SaaS Platform",
    description:
      "Build a SaaS app with PHP, handling subscriptions, payment integration, user management, and analytics dashboards.",
    url: "https://youtu.be/e09nPJoi5NI?si=iBJPldcxS6fDtJ68",
  },
];

export default function PHPProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ PHP Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready PHP projects. Build, code along, and deploy to strengthen your backend development skills.
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
          Follow the sequence, implement features step by step, and showcase your top PHP projects in a polished portfolio.
        </footer>
      </div>
    </section>
  );
}
