"use client";
import React from "react";

const FigmaBasicsAnshMehra = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          Basics of Figma for UX Design — Ansh Mehra
        </h1>

        {/* Course Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>beginner-friendly, industry-aligned course</strong> delivered by{" "}
          <span className="text-blue-600">The Cutting Edge School</span>, 
          guiding learners through Figma’s core <strong>UI/UX design tools</strong> 
          and workflows. Ideal for aspiring UX/UI designers eager to build{" "}
          <strong>interactive prototypes</strong> and develop professional design skills.
        </p>

        {/* Estimated Breakdown */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Estimated Breakdown of the 9 Lessons
        </h2>

        {/* 1. Figma Interface */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Introduction to Figma Interface & Workspace
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Navigating panels</li>
          <li>Design vs Prototype modes</li>
          <li>Organizing files efficiently</li>
        </ul>

        {/* 2. Shapes & Vectors */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Basic Shapes, Vector Tools & Image Integration
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Creating rectangles, ellipses, and custom shapes</li>
          <li>Using the <strong>Pen Tool</strong> and masks</li>
          <li>Placing and editing images</li>
        </ul>

        {/* 3. Typography */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Text Styling & Typography
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Fonts, sizes, and text hierarchy</li>
          <li>Line-height and letter spacing adjustments</li>
        </ul>

        {/* 4. Colors */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Color Systems & Styles
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Building consistent color palettes</li>
          <li>Applying and sharing color styles</li>
          <li>Working with gradients and effects</li>
        </ul>

        {/* 5. Auto Layout */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. Auto Layout Essentials
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Creating flexible and responsive layouts</li>
          <li>Designing reusable UI components</li>
        </ul>

        {/* 6. Components & Variants */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. Component Creation & Variants
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Defining reusable components</li>
          <li>Variants for states (hover, active, disabled)</li>
        </ul>

        {/* 7. Prototyping */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. Interactive Prototyping
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Building user flows and linking screens</li>
          <li>Adding animations and transitions</li>
        </ul>

        {/* 8. Design Systems */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          8. Design Systems & Libraries
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Creating scalable design systems</li>
          <li>Sharing styles and components across projects</li>
          <li>Collaborating effectively in teams</li>
        </ul>

        {/* 9. Export & Handoff */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          9. Exporting Assets & Developer Handoff
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Generating design specs for developers</li>
          <li>Exporting assets in multiple formats</li>
          <li>Preparing for smooth developer handoff</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Master <strong>Figma basics</strong> for UX/UI design</li>
          <li>Learn <strong>Auto Layout, Components, Variants</strong></li>
          <li>Build interactive prototypes and design systems</li>
          <li>Beginner-friendly and industry-relevant</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Ansh Mehra</p>
          <p className="mb-1"><strong>Platform:</strong> The Cutting Edge School</p>
          <p className="mb-1"><strong>Duration:</strong> ~9 Lessons</p>
          <p className="mb-1"><strong>Level:</strong> Beginner</p>
          <p><strong>Includes:</strong> Figma basics, Auto Layout, Components, Variants, Prototyping, Design Systems, Handoff</p>
        </div>

      </article>
    </div>
  );
};

export default FigmaBasicsAnshMehra;
