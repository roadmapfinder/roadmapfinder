"use client"

// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "wp-blog-basic",
    level: "Phase 1 — Beginner",
    title: "WordPress Blog Setup & Customization",
    description:
      "Learn WordPress basics: installation, dashboard, themes, widgets, menus, and essential plugin setup. Customize a blog using a child theme.",
    url: "https://youtu.be/WK4olrpvW9A?si=Ec0WXbta8gYASC9J",
  },
  {
    id: "custom-theme",
    level: "Phase 1 — Beginner",
    title: "Build a Custom WordPress Theme",
    description:
      "Create a theme from scratch using PHP templates, loops, custom header/footer, and responsive CSS. Learn theme structure and template hierarchy.",
    url: "https://youtu.be/-h7gOJbIpmo?si=z4JGLt8BqpncWtmI",
  },
  {
    id: "plugin-starter",
    level: "Phase 2 — Intermediate",
    title: "Basic WordPress Plugin (CRUD Functionality)",
    description:
      "Build a simple plugin that registers custom post types, admin menus, and handles CRUD operations using WP functions and hooks.",
    url: "https://youtu.be/poYpLnYOp3g?si=RZ5YswHdbX5XO1qI",
  },
  {
    id: "woocommerce-store",
    level: "Phase 2 — Intermediate",
    title: "WooCommerce E-commerce Store",
    description:
      "Create a complete online store with product pages, carts, checkout, and payment gateways. Customize WooCommerce templates and hooks.",
    url: "https://youtu.be/GAVCwdR5Q0s?si=eyB5BXIRHGBn806B",
  },
  {
    id: "wp-rest-api-app",
    level: "Phase 3 — Advanced",
    title: "Headless WordPress App (REST API)",
    description:
      "Use the WordPress REST API to build a frontend in React/Next.js. Fetch posts, products, and user data. Learn authentication + CORS.",
    url: "https://youtu.be/4mjJiReHgQw?si=1Y2ZNmn2m_hFm5KI",
  },
  {
    id: "gutenberg-blocks",
    level: "Phase 3 — Advanced",
    title: "Custom Gutenberg Block Development",
    description:
      "Build dynamic Gutenberg blocks using React and Block Editor APIs. Add custom fields, inspector controls, and block styling.",
    url: "https://youtu.be/1BnJ3fRXteY?si=TTnfeF1X6-RGP-J5",
  },
  {
    id: "multi-vendor-marketplace",
    level: "Phase 4 — Advanced",
    title: "Multi-Vendor Marketplace (Dokan / Custom)",
    description:
      "Build a scalable marketplace with vendor dashboards, product management, commissions, custom roles, and optimized search/filter UX.",
    url: "https://youtu.be/c2jZwz9Bl2k?si=N_-axT_AnHZkBxuh",
  },
  {
    id: "custom-membership-system",
    level: "Phase 4 — Advanced",
    title: "Membership & LMS System",
    description:
      "Develop login, roles, restricted pages, paid membership tiers, and course functionalities. Integrate Stripe/PayPal and user analytics.",
    url: "https://youtu.be/ot5EMFkyyOc?si=en5nRkf6Qh9NMdVL",
  },
  {
    id: "enterprise-optimization",
    level: "Phase 5 — Industry Ready",
    title: "Enterprise Optimization & Security Project",
    description:
      "Implement caching, security hardening, performance tuning, database optimization, load balancing, CDN, and code audits for production-grade sites.",
    url: "https://youtu.be/60y9UFpUUgA?si=B3VbN2fy2hzJGriT",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Industry-Ready WordPress Projects (Learner Roadmap)
          </h2>
          <p className="mt-2 text-gray-600">
            Hands-on WordPress projects structured from the basics to advanced
            full-stack, plugin, and enterprise-level development.
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
                View Details ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These projects progressively build your WordPress skills — from basic
          theme/plugin knowledge to advanced, industry-level expertise.
        </footer>
      </div>
    </section>
  );
}
