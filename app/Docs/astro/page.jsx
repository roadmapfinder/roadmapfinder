"use client";
import React from "react";

const AstroCoursePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-4">
          Astro Quick Start Course — Build an SSR Blog (Traversy Media)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This <strong>Astro one-shot course by Traversy Media</strong> teaches you
          how to build a modern <strong>Server-Side Rendered (SSR) blog</strong>{" "}
          using the <strong>Astro framework</strong>. The course focuses on
          real-world development patterns such as{" "}
          <em>file-based routing, Markdown content, collections, pagination,
          search, API routes, and deployment</em>.
        </p>

        {/* Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules & Content
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
          <li>
            <strong>Module 1: Introduction to Astro</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>What Astro is and why it exists</li>
              <li>Astro vs React, Next.js, and other frameworks</li>
              <li>SSG vs SSR concepts</li>
            </ul>
          </li>

          <li>
            <strong>Module 2: Project Setup & Configuration</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Installing Astro & Node.js</li>
              <li>Astro project structure</li>
              <li>Development server & build process</li>
            </ul>
          </li>

          <li>
            <strong>Module 3: Pages & File-Based Routing</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Creating pages using file system routing</li>
              <li>Dynamic routes & URL parameters</li>
              <li>SSR page rendering</li>
            </ul>
          </li>

          <li>
            <strong>Module 4: Layouts & Components</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Reusable components</li>
              <li>Layouts and slot usage</li>
              <li>Navigation bar & footer</li>
            </ul>
          </li>

          <li>
            <strong>Module 5: Styling & UI Structure</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Global styles & scoped styles</li>
              <li>Component-level CSS</li>
              <li>Clean blog UI structure</li>
            </ul>
          </li>

          <li>
            <strong>Module 6: Markdown Content & Collections</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Using Markdown for blog posts</li>
              <li>Frontmatter metadata</li>
              <li>Astro content collections</li>
            </ul>
          </li>

          <li>
            <strong>Module 7: Blog Listing & Post Pages</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Rendering blog lists</li>
              <li>Dynamic post pages using slugs</li>
              <li>Date formatting & sorting</li>
            </ul>
          </li>

          <li>
            <strong>Module 8: Search, Tags & Filtering</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Client-side search implementation</li>
              <li>Tags and categories</li>
              <li>Filtering posts dynamically</li>
            </ul>
          </li>

          <li>
            <strong>Module 9: Pagination</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Paginated blog lists</li>
              <li>Next & previous navigation</li>
            </ul>
          </li>

          <li>
            <strong>Module 10: API Routes & Server Logic</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Creating API endpoints in Astro</li>
              <li>Server-side logic handling</li>
            </ul>
          </li>

          <li>
            <strong>Module 11: Error Pages & SEO</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Custom 404 pages</li>
              <li>Basic SEO considerations</li>
            </ul>
          </li>

          <li>
            <strong>Module 12: Deployment</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Production build process</li>
              <li>Deploying to Vercel</li>
              <li>Environment configuration</li>
            </ul>
          </li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Build SSR applications using Astro</li>
          <li>Use Markdown and collections for content-driven sites</li>
          <li>Implement routing, pagination, search, and tags</li>
          <li>Deploy a production-ready Astro blog</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This course is <strong>project-driven and industry-aligned</strong>,
          making it ideal for developers who want to learn Astro by building a
          real-world application rather than isolated demos.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Instructor:</strong> Brad Traversy</p>
          <p><strong>Channel:</strong> Traversy Media</p>
          <p><strong>Platform:</strong> YouTube</p>
          <p><strong>Language:</strong> English</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>
      </article>
    </div>
  );
};

export default AstroCoursePage;
