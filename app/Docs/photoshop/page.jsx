"use client";
import React from "react";

const PhotoshopPiximperfect = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Photoshop for Beginners: Complete Course — PiXimperfect
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This playlist is a <strong>step-by-step Photoshop crash course</strong> created by{" "}
          <span className="text-blue-600">Unmesh Dinda (PiXimperfect)</span>, 
          designed for absolute beginners. It covers everything from{" "}
          <strong>layers and selections to masking and advanced tools</strong> through
          practical, hands-on video lessons.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          On Reddit, PiXimperfect is widely recommended as one of the{" "}
          <strong>best channels for learning Photoshop</strong>.
        </p>

        {/* Course Curriculum */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Lesson Breakdown (Inferred from Video Titles)
        </h2>

        {/* Lesson 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 1: Introduction to Photoshop for Beginners
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Getting started with Photoshop</li>
          <li>Interface walkthrough and essential tools</li>
          <li>Understanding the concept of <strong>layers</strong></li>
        </ul>

        {/* Lesson 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 2: Master Layers
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>How layers work in Photoshop</li>
          <li>Exploring <strong>blending modes</strong></li>
          <li>Efficient layer management</li>
        </ul>

        {/* Lesson 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 3: Master the Brush Tool
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Brush tool fundamentals</li>
          <li>Creating and customizing brushes</li>
          <li>Practical workflow tips for digital editing</li>
        </ul>

        {/* Lesson 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 4: Selections
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Introduction to selection tools</li>
          <li>Techniques for <strong>precise selections</strong></li>
          <li>Using selections in real-world edits</li>
        </ul>

        {/* Lesson 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 5: Remove Tool (Masking & Cutouts)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Advanced selection methods</li>
          <li>Masking for clean cutouts and composites</li>
          <li>Practical applications in creative projects</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Beginner-friendly structured learning path</li>
          <li>Hands-on, project-based lessons</li>
          <li>Focus on <strong>real-world Photoshop workflows</strong></li>
          <li>Learn directly from a globally recognized Photoshop educator</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Unmesh Dinda (PiXimperfect)</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube Playlist</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Intermediate</p>
          <p><strong>Includes:</strong> Layers, brushes, selections, masking, practical editing techniques</p>
        </div>

      </article>
    </div>
  );
};

export default PhotoshopPiximperfect;
