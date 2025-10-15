// components/ProductDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Jira Official Docs",
    description:
      "Jira is a robust project management tool designed for agile teams, assisting in planning, tracking, and managing software development projects.",
    url: "https://support.atlassian.com/jira-software-cloud/",
    citation: "Jira Docs",
  },
  {
    title: "Trello Official Docs",
    description:
      "Trello is a visual collaboration tool that enables teams to organize tasks using boards, lists, and cards. Simple and easy to use for project management.",
    url: "https://help.trello.com/",
    citation: "Trello Docs",
  },
  {
    title: "Asana Official Docs",
    description:
      "Asana is a work management platform that helps teams coordinate and manage their work, ensuring alignment and productivity.",
    url: "https://asana.com/guide",
    citation: "Asana Docs",
  },
  {
    title: "Productboard Docs",
    description:
      "Productboard helps teams get the right products to market faster by collecting user feedback, prioritizing features, and creating visual roadmaps.",
    url: "https://help.productboard.com/",
    citation: "Productboard Docs",
  },
  {
    title: "Aha! Docs",
    description:
      "Aha! is a product roadmap software that helps product managers set strategy, prioritize features, and share visual plans with stakeholders.",
    url: "https://support.aha.io/",
    citation: "Aha! Docs",
  },
  {
    title: "Figma Help Center",
    description:
      "Figma is a cloud-based design tool for collaborative interface design, allowing multiple users to work on the same design simultaneously.",
    url: "https://help.figma.com/",
    citation: "Figma Docs",
  },
  {
    title: "Mixpanel Docs",
    description:
      "Mixpanel is an advanced analytics platform that helps teams measure user interactions with web and mobile applications to make data-driven decisions.",
    url: "https://help.mixpanel.com/",
    citation: "Mixpanel Docs",
  },
  {
    title: "Amplitude Help Center",
    description:
      "Amplitude helps teams understand user behavior and optimize product experiences using analytics like cohorts, funnels, and retention tracking.",
    url: "https://help.amplitude.com/",
    citation: "Amplitude Docs",
  },
  {
    title: "Google Analytics Help",
    description:
      "Google Analytics tracks and reports website traffic, providing insights into user behavior to improve digital product experiences.",
    url: "https://support.google.com/analytics/",
    citation: "Google Analytics Docs",
  },
  {
    title: "SQL Documentation",
    description:
      "SQL is the standard language for managing and manipulating databases, essential for querying data and generating insights.",
    url: "https://www.w3schools.com/sql/",
    citation: "SQL Docs",
  },
];

export default function ProductDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official Product Management Tools Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation of essential Product Management tools every learner should follow — from project management, roadmapping, analytics, to design and SQL.
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
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
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
