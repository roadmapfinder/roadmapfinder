"use client"

// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "shopify-theme-basic",
    level: "Phase 1 — Beginner",
    title: "Custom Shopify Theme (From Scratch)",
    description:
      "Learn Liquid basics, theme structure, templates, sections, blocks, and CSS/JS. Build a fully responsive custom Shopify theme.",
    url: "https://youtu.be/okSKWf8PBNY?si=ZinBOLlUL9PBqdTD",
  },
  {
    id: "shopify-store-setup",
    level: "Phase 1 — Beginner",
    title: "Shopify Store Setup & Configuration",
    description:
      "Master the Shopify dashboard, navigation, product management, collections, payments, shipping, and essential configurations.",
    url: "https://youtu.be/9coOU5ea3nk?si=skb5reYih9tlGuzl",
  },
  {
    id: "shopify-app-basic",
    level: "Phase 2 — Intermediate",
    title: "Build a Shopify App (Admin API CRUD)",
    description:
      "Develop a full-stack Shopify App using Node.js/Remix. Implement OAuth, Polaris UI, Admin API CRUD, and embedded app views.",
    url: "https://youtu.be/-0KW8l-RuJw?si=aifQJjMdELQxKPnA",
  },
  {
    id: "shopify-checkout-extension",
    level: "Phase 2 — Intermediate",
    title: "Checkout UI Extension (Upsell & Custom Fields)",
    description:
      "Create Shopify Checkout UI Extensions using React. Add upsells, gift messages, timers, and dynamic checkout elements.",
    url: "https://youtu.be/L-Kyx-pRoYI?si=m_lev6PHM4DLRLUZ",
  },
  {
    id: "shopify-functions-discount",
    level: "Phase 3 — Advanced",
    title: "Shopify Functions: Custom Discount Engine",
    description:
      "Build Shopify backend logic using Functions (WASM). Implement tiered discounts, BOGO logic, and cart rule validation.",
    url: "https://youtu.be/6DcGkKtQbZs?si=f9YQhT5gmi-vrmix",
  },
  {
    id: "hydrogen-storefront",
    level: "Phase 3 — Advanced",
    title: "Headless Storefront Using Hydrogen",
    description:
      "Build a fast React-based headless storefront using Shopify’s Hydrogen framework. Implement PDP, PLP, cart, and checkout.",
    url: "https://youtu.be/j4By5pFWZkM?si=_exp3CxehuT9hKYE",
  },
  {
    id: "inventory-sync-app",
    level: "Phase 4 — Advanced",
    title: "Inventory Sync App (Webhooks + Bulk API)",
    description:
      "Create an app that syncs inventory between Shopify and external warehouses. Use webhooks, cron jobs, and Bulk API tasks.",
    url: "https://youtu.be/N5Wb_Zn091s?si=QNA_oPG3iJ_2bol8",
  },
  {
    id: "product-builder",
    level: "Phase 4 — Advanced",
    title: "Custom Product Builder (Liquid + JS)",
    description:
      "Develop a custom product configurator with dynamic options, live preview, pricing logic, and line-item properties.",
    url: "https://youtu.be/g8wrgBDTdg4?si=XMTvE8RFKlB20mhR",
  },
  {
    id: "enterprise-optimization-shopify",
    level: "Phase 5 — Industry Ready",
    title: "Enterprise Shopify Optimization & Security",
    description:
      "Implement performance tuning, advanced caching, CDN optimization, metafield automation, security audits, and theme reviews.",
    url: "https://youtu.be/LI39u4tQGm0?si=bTa7I36Xef_-j6AT",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Industry-Ready Shopify Projects (Learner Roadmap)
          </h2>
          <p className="mt-2 text-gray-600">
            Hands-on Shopify development projects structured from beginner to
            advanced app, theme, headless, and enterprise-level skills.
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
          These projects prepare you for real Shopify industry work — from
          theme/app development to headless and enterprise-grade systems.
        </footer>
      </div>
    </section>
  );
}
