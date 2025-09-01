"use client";
import React from "react";

const AppDesignMasterclassMavi = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          App Design Masterclass — Mavi Design
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a FREE 5-hour YouTube masterclass titled{" "}
          <strong>“Figma Mobile App Design Masterclass”</strong>, provided by{" "}
          <span className="text-blue-600">Mavi Design</span>. The course walks you 
          through designing a mobile app from scratch in Figma—no templates, complete 
          from ideation to polished UI. It’s a thorough, project-based design 
          walkthrough, perfect for those looking to strengthen real-world app design skills.
        </p>
        <p className="text-gray-700 mb-6">Available on <strong>YouTube</strong>.</p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Basic familiarity with Figma UI or willingness to pause and follow along</li>
          <li>No design templates required; teaches a blank-canvas approach</li>
        </ul>

        {/* Course Workflow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Workflow
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Project Setup
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Figma frame, layout grid, canvas setup</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Ideation & Layout Planning
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Sketching app structure and navigation flow</li>
          <li>Establishing visual hierarchy before detailed design</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Component Design
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Buttons, cards, icons, headers</li>
          <li>Using Auto Layout, constraints, responsive behavior</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Styling & Design Consistency
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Typography, colors, gradients, shadows</li>
          <li>Creating global style guides & theme coherence</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. High-Fidelity Screens
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Login, home, details, feed screens</li>
          <li>Layering interactions & reusable components</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. Prototyping & Interaction Flow
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Clickable prototypes, transitions, smart animation</li>
          <li>Embedding micro-interactions and user flows</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. Export & Development Handoff
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Structuring layers, exporting assets (PNG/SVG)</li>
          <li>Generating specs, layout rules & navigation guidelines</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          8. Wrap-up & Design Reflection
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Reviewing UX consistency & accessibility</li>
          <li>Tips for rapid iteration & design reflection</li>
        </ul>

        {/* What You'll Learn */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What You’ll Learn
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>End-to-end mobile app design in Figma</li>
          <li>Scalable UI systems using components & Auto Layout</li>
          <li>Clickable prototypes with interactive flows</li>
          <li>Export strategies & developer handoff</li>
        </ul>

        {/* Next Steps */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Next Steps
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Convert the project into multi-platform responsive UI</li>
          <li>Create a personal app case study (dark mode, tablet variations)</li>
          <li>Explore Mavi’s YouTube tutorials on dropdowns & animated gradients</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 mb-6">
          Mavi Design’s App Design Masterclass is a standout free, Figma UI 
          project tutorial tailored for mobile app designers. It teaches the 
          entire process — from blank canvas to developer-ready prototype — 
          in a structured, pragmatic format.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Mavi Design</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Duration:</strong> ~5 hours</p>
          <p className="mb-1"><strong>Level:</strong> Intermediate (UI/UX design)</p>
          <p><strong>Format:</strong> Project-based, hands-on design tutorial</p>
        </div>

      </article>
    </div>
  );
};

export default AppDesignMasterclassMavi;
