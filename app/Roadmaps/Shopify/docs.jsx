// app/Roadmaps/Shopify/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Shopify Developer Documentation (Main Hub)",
    description:
      "The official central hub for Shopify developers — themes, apps, APIs, Functions, Hydrogen, CLI, and partner tools.",
    url: "https://shopify.dev/docs",
    citation: "Shopify Dev Docs",
  },
  {
    title: "Getting Started with Themes",
    description:
      "Learn how Shopify themes work — file structure, Liquid, sections, templates, and customizing storefronts.",
    url: "https://shopify.dev/docs/storefronts/themes/getting-started/create",
    citation: "Shopify Themes",
  },
  {
    title: "Theme Architecture Guide",
    description:
      "Official architecture — sections, templates, metadata, theme assets, JSON templates, and OS2.0 conventions.",
    url: "https://shopify.dev/docs/storefronts/themes/architecture",
    citation: "Theme Architecture",
  },
  {
    title: "Shopify APIs Overview",
    description:
      "Complete reference to Shopify APIs — Admin API, Storefront API, GraphQL, REST, rate limits, scopes & authentication.",
    url: "https://shopify.dev/docs/api",
    citation: "Shopify API Docs",
  },
  {
    title: "Shopify Functions",
    description:
      "Learn to extend Shopify backend logic with Functions — discounts, shipping logic, validation, payments, and more.",
    url: "https://shopify.dev/docs/apps/build/functions",
    citation: "Shopify Functions",
  },
  {
    title: "Custom Apps Guide",
    description:
      "Official documentation on creating custom apps — installation, config, permissions, and store-specific functionality.",
    url: "https://help.shopify.com/manual/apps/app-types/custom-apps",
    citation: "Shopify Help Center",
  },
  {
    title: "Shopify App Development (Apps, OAuth, Billing)",
    description:
      "Learn how to build public, custom, or private apps — OAuth, billing API, app extensions, webhooks, and Admin UI.",
    url: "https://shopify.dev/docs/apps",
    citation: "App Development",
  },
  {
    title: "Shopify Admin API GraphQL Reference",
    description:
      "GraphQL Admin API reference — manage products, orders, customers, metafields, and store operations.",
    url: "https://shopify.dev/docs/api/admin-graphql",
    citation: "Admin GraphQL API",
  },
  {
    title: "Shopify Storefront API",
    description:
      "API for building custom storefronts — carts, checkout, product data, and customer accounts.",
    url: "https://shopify.dev/docs/api/storefront",
    citation: "Storefront API",
  },
  {
    title: "Shopify CLI Documentation",
    description:
      "Learn to use Shopify CLI for theme development, app scaffolding, extension creation, and local testing.",
    url: "https://shopify.dev/docs/apps/tools/cli",
    citation: "Shopify CLI",
  },
  {
    title: "Liquid Template Language",
    description:
      "Official Liquid documentation — tags, filters, objects, iteration, conditionals, and best practices.",
    url: "https://shopify.dev/docs/api/liquid",
    citation: "Liquid Docs",
  },
  {
    title: "Hydrogen Framework Documentation",
    description:
      "React & Remix-based framework for headless custom storefronts using the Storefront API and server-side rendering.",
    url: "https://shopify.dev/docs/custom-storefronts/hydrogen",
    citation: "Hydrogen",
  },
  {
    title: "Oxygen Deployment Documentation",
    description:
      "Official guide to deploying Hydrogen storefronts on Shopify’s global edge infrastructure (Oxygen).",
    url: "https://shopify.dev/docs/custom-storefronts/oxygen",
    citation: "Oxygen",
  },
  {
    title: "Shopify App Design System (Polaris)",
    description:
      "UI components & guidelines for building beautiful Shopify Admin interfaces using Polaris.",
    url: "https://polaris.shopify.com",
    citation: "Shopify Polaris",
  },
  {
    title: "Shopify App Bridge",
    description:
      "Framework for embedding apps inside Shopify Admin with navigation, modals, state & authenticated requests.",
    url: "https://shopify.dev/docs/api/app-bridge",
    citation: "App Bridge",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Shopify Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official and essential Shopify documentation every developer must know — themes, apps, APIs, Functions, Hydrogen, CLI, and more.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-purple-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
