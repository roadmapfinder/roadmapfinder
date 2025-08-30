"use client";
import React from "react";

const WebDesignFluxAcademy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Learn Web Design For Beginners — Full Course — Flux Academy
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This course teaches you everything you need to create a{" "}
          <strong>beautiful, fully functional website</strong> from start to
          finish — from <strong>planning and wireframing</strong> all the way to{" "}
          <strong>final responsive design</strong>.
        </p>
        <p className="text-gray-700 mb-6">
          Delivered by <span className="text-blue-600">Flux Academy</span> on{" "}
          <strong>YouTube</strong>, it covers web design foundations, modern
          tools, responsive development, and launching live projects.
        </p>

        {/* Suggested Breakdown */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Course Breakdown
        </h2>

        {/* Module 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Planning & Foundation
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Understanding web design roles and what makes a website successful</li>
          <li>Project kickoff: Defining goals, audience, and user needs</li>
          <li>Wireframing: Sketching layout ideas before visual design</li>
          <li>Basic design principles: Color, spacing, typography, and alignment</li>
        </ul>

        {/* Module 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: Visual Design & Tools
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Choosing fonts and establishing typographic scales</li>
          <li>Using color palettes, contrast, and visual hierarchy</li>
          <li>Design tools overview (Figma, Sketch, or Adobe XD)</li>
        </ul>

        {/* Module 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: Prototyping & User Flow
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Turning wireframes into clickable prototypes</li>
          <li>Mapping user journeys and page interactions</li>
        </ul>

        {/* Module 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: Web Development Essentials
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Understanding HTML structure and semantic tags</li>
          <li>Styling layouts using CSS (Flexbox, Grid, text styles, responsive sizing)</li>
          <li>Introduction to responsive design and media queries</li>
        </ul>

        {/* Module 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Interaction & Responsive Behavior
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Adding basic animations and hover effects</li>
          <li>Ensuring layouts adapt across devices</li>
        </ul>

        {/* Module 6 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 6: Website Launch & Review
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Exporting assets, testing across devices/browsers</li>
          <li>Live site testing and feedback loops</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Learn <strong>design + development workflow</strong> from scratch</li>
          <li>Hands-on experience with <strong>wireframing & prototyping</strong></li>
          <li>Responsive design across devices with CSS and modern layouts</li>
          <li>End-to-end project — from planning to launch</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Flux Academy</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Duration:</strong> Full Beginner Course</p>
          <p className="mb-1"><strong>Level:</strong> Beginner</p>
          <p><strong>Includes:</strong> Planning, Wireframing, Visual Design, Prototyping, Responsive CSS, Site Launch</p>
        </div>

      </article>
    </div>
  );
};

export default WebDesignFluxAcademy;
