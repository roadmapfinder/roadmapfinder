"use client";
import React from "react";

const TailwindCSSCourseAnujBhaiya = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          Tailwind CSS Full Course 2024 (One Shot) — Anuj Bhaiya
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A concise, beginner-friendly{" "}
          <strong>Hindi tutorial (1 hr 10 min)</strong> by{" "}
          <em>Anuj Bhaiya (Coding Shuttle / Anuj Kumar Sharma)</em> that teaches{" "}
          <strong>Tailwind CSS from scratch</strong>. This one-shot course
          covers installation, core utilities, responsive design, component
          building, and deployment of a Tailwind project.
        </p>

        {/* Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Modules / Learning Flow
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Setup & Installation</strong> — Installing Tailwind CSS,
            configuring in VSCode, and setting up the dev environment.
          </li>
          <li>
            <strong>Basic Utility Classes</strong> — Margin, padding, colors,
            backgrounds, typography, fonts.
          </li>
          <li>
            <strong>Layouts</strong> — Flexbox, Grid, responsive containers, and
            breakpoints.
          </li>
          <li>
            <strong>Building Components</strong> — Buttons, navbars, cards,
            forms, hover/active states.
          </li>
          <li>
            <strong>Responsive Behavior</strong> — Media queries, breakpoints,
            building mobile-friendly UIs.
          </li>
          <li>
            <strong>Project Build</strong> — Combining layout, utilities, and
            components into a full project.
          </li>
          <li>
            <strong>Deployment</strong> — Deploying the final Tailwind project
            (e.g., Netlify/Vercel).
          </li>
        </ol>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Code along with the instructor in VSCode.</li>
          <li>
            Pause and experiment with utility classes (padding, margin, colors).
          </li>
          <li>
            Build the project step-by-step — starting with layout, then adding
            components, then making it responsive.
          </li>
          <li>
            Conclude by deploying the project so it’s live and accessible.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes / What You’ll Be Able To Do
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Confidently use Tailwind CSS utility classes, responsive
            breakpoints, and styling approaches.
          </li>
          <li>
            Build visually appealing layouts and UI components quickly with
            Tailwind.
          </li>
          <li>
            Apply <strong>responsive design principles</strong> effectively.
          </li>
          <li>
            Deploy a complete Tailwind project to hosting platforms like{" "}
            <em>Netlify</em> or <em>Vercel</em>.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default TailwindCSSCourseAnujBhaiya;
