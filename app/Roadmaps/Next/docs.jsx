// components/NextDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Getting Started",
    description:
      "Begin your journey by setting up your first Next.js application and understanding its core features.",
    url: "https://nextjs.org/docs/getting-started",
    citation: "Next.js Docs",
  },
  {
    title: "React Fundamentals",
    description:
      "If you're new to React, this section provides foundational knowledge to help you transition smoothly into Next.js.",
    url: "https://nextjs.org/learn/react-foundations",
    citation: "Next.js Learn",
  },
  {
    title: "Pages Router",
    description:
      "Learn about the traditional file-based routing system in Next.js, essential for building static and dynamic pages.",
    url: "https://nextjs.org/docs/pages/building-your-application/routing",
    citation: "Next.js Docs",
  },
  {
    title: "App Router",
    description:
      "Explore the newer App Router, supporting advanced features like React Server Components and improved layouts.",
    url: "https://nextjs.org/docs/app/building-your-application/routing",
    citation: "Next.js Docs",
  },
  {
    title: "Data Fetching",
    description:
      "Understand the different methods of data fetching: SSG, SSR, and client-side rendering.",
    url: "https://nextjs.org/docs/basic-features/data-fetching",
    citation: "Next.js Docs",
  },
  {
    title: "API Routes",
    description:
      "Build API endpoints within your Next.js application, enabling backend functionality without a separate server.",
    url: "https://nextjs.org/docs/api-routes/introduction",
    citation: "Next.js Docs",
  },
  {
    title: "Styling",
    description:
      "Discover styling options like CSS Modules, Tailwind CSS, and Styled JSX to enhance your application's UI.",
    url: "https://nextjs.org/docs/basic-features/built-in-css-support",
    citation: "Next.js Docs",
  },
  {
    title: "Image Optimization",
    description:
      "Implement Next.js's built-in image optimization features to improve performance and user experience.",
    url: "https://nextjs.org/docs/basic-features/image-optimization",
    citation: "Next.js Docs",
  },
  {
    title: "Deployment",
    description:
      "Learn how to deploy your Next.js application to production, ensuring scalability and reliability.",
    url: "https://nextjs.org/docs/deployment",
    citation: "Next.js Docs",
  },
];

export default function NextDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official Next.js Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official Next.js documentation every learner should follow — from setup, routing, and data fetching to API routes, styling, and deployment.
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
