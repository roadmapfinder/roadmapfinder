// app/Roadmaps/WordPress/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "WordPress Developer Resources (Main Hub)",
    description:
      "The official central hub for all WordPress documentation — themes, plugins, REST API, block editor, coding standards, and more.",
    url: "https://developer.wordpress.org/",
    citation: "WordPress.org",
  },
  {
    title: "Theme Developer Handbook",
    description:
      "Complete guide to building classic and block themes — template hierarchy, theme.json, FSE, templates, styling, and more.",
    url: "https://developer.wordpress.org/themes/",
    citation: "WordPress Themes Handbook",
  },
  {
    title: "Plugin Developer Handbook",
    description:
      "Learn plugin creation from basics to advanced — hooks, settings API, security, activation hooks, admin pages, shortcodes, CPTs.",
    url: "https://developer.wordpress.org/plugins/",
    citation: "WordPress Plugin Handbook",
  },
  {
    title: "Block Editor (Gutenberg) Developer Docs",
    description:
      "Official documentation for building blocks — block.json, React components, extensibility, patterns, editor APIs.",
    url: "https://developer.wordpress.org/block-editor/",
    citation: "Gutenberg Handbook",
  },
  {
    title: "REST API Handbook",
    description:
      "Full guide to working with WP REST API — custom endpoints, routes, CRUD operations, schemas, and authentication.",
    url: "https://developer.wordpress.org/rest-api/",
    citation: "REST API Handbook",
  },
  {
    title: "WordPress Code Reference",
    description:
      "Searchable reference of every WordPress function, hook, class, and method used in core development.",
    url: "https://developer.wordpress.org/reference/",
    citation: "WordPress Code Reference",
  },
  {
    title: "WP-CLI Handbook",
    description:
      "Official command-line interface for WordPress — manage sites, users, plugins, themes, and write custom WP-CLI commands.",
    url: "https://make.wordpress.org/cli/handbook/",
    citation: "WP-CLI",
  },
  {
    title: "WordPress APIs",
    description:
      "All essential APIs — Options API, Metadata API, Transients API, HTTP API, Filesystem API, Shortcode API, Rewrite API.",
    url: "https://developer.wordpress.org/apis/",
    citation: "WordPress API Docs",
  },
  {
    title: "Internationalization (i18n) Guide",
    description:
      "How to make themes and plugins translation-ready through gettext, text domains, and localization APIs.",
    url: "https://developer.wordpress.org/plugins/internationalization/",
    citation: "WordPress i18n",
  },
  {
    title: "Coding Standards",
    description:
      "Official PHP, JavaScript, CSS, and HTML coding standards followed in WordPress core development.",
    url: "https://developer.wordpress.org/coding-standards/",
    citation: "WordPress Coding Standards",
  },
  {
    title: "WordPress Security & Hardening Guide",
    description:
      "Recommended best practices to secure WordPress — authentication, updates, file permissions, sanitization, and hardening.",
    url: "https://wordpress.org/documentation/article/hardening-wordpress/",
    citation: "WordPress Security",
  },
  {
    title: "Block Pattern Directory",
    description:
      "Official directory of ready-to-use block patterns — layouts, sections, headers, footers, galleries, and more.",
    url: "https://wordpress.org/patterns/",
    citation: "WordPress Patterns",
  },
  {
    title: "Make WordPress Core",
    description:
      "Official blog & documentation used by WP core contributors — releases, dev notes, proposals, roadmap updates.",
    url: "https://make.wordpress.org/core/",
    citation: "WordPress Core Team",
  },
  {
    title: "Gutenberg GitHub Repository",
    description:
      "Open-source repository for the WordPress Block Editor (Gutenberg) — issues, PRs, roadmap, component documentation.",
    url: "https://github.com/WordPress/gutenberg",
    citation: "GitHub / Gutenberg",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 WordPress Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official and essential WordPress documentation every developer must
          know — themes, plugins, block editor, REST API, CLI, coding
          standards, and more.
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
