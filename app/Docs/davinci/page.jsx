"use client";
import React from "react";

const DaVinciResolveCaseyFaris = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-600 pb-4">
          Introduction to DaVinci Resolve — Full Course (2024) — Casey Faris
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A complete <strong>4–5 hour beginner-friendly course</strong> taught by{" "}
          <strong>Casey Faris</strong>, one of the most respected{" "}
          <em>DaVinci Resolve educators</em>. This single comprehensive video
          covers every stage of post-production — from importing media to
          exporting polished final videos. Includes <em>downloadable practice
          media</em>, and all workflows are compatible with the free version of
          Resolve.
        </p>

        {/* Instructor & Platform */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="mb-1">
            <strong>Instructor:</strong> Casey Faris
          </p>
          <p className="mb-1">
            <strong>Specialization:</strong> Fusion (VFX) & Editing Workflows
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> ~4–5 hours
          </p>
          <p>
            <strong>Platform:</strong> YouTube (Full Course Video)
          </p>
        </div>

        {/* Key Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Key Modules
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Workspace Setup & Page Overview</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Media, Edit, Cut, Fusion, Color, Fairlight, Deliver pages.</li>
              <li>Hardware requirements for smooth playback (PC/M1/M2 Macs).</li>
            </ul>
          </li>
          <li>
            <strong>Media Import & Organization Techniques</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Using the media pool, creating bins, adding metadata.</li>
              <li>Efficient project setup for large projects.</li>
            </ul>
          </li>
          <li>
            <strong>Editing Workflow (Edit & Cut Pages)</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Trimming, arranging clips, ripple edits.</li>
              <li>L-cuts & J-cuts, dual-view monitoring, fast Cut page workflows.</li>
            </ul>
          </li>
          <li>
            <strong>Fusion: Node-Based Visual Effects Basics</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Introduction to node graphs & Merge nodes.</li>
              <li>Masking, compositing, keyframing for simple VFX.</li>
            </ul>
          </li>
          <li>
            <strong>Color Correction & Advanced Grading</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Primary wheels, curves, LUTs, and scopes.</li>
              <li>Using CST (Color Space Transforms) for accurate grading.</li>
            </ul>
          </li>
          <li>
            <strong>Audio Mixing in Fairlight</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Track mixer, EQ, clip gain, and essential sound panel.</li>
              <li>Panning adjustments and audio balancing.</li>
            </ul>
          </li>
          <li>
            <strong>Rendering: Deliver Page & Export Strategy</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Presets for YouTube, Vimeo, custom settings.</li>
              <li>Render queue management and bitrate control.</li>
            </ul>
          </li>
          <li>
            <strong>Workflow Tips & Performance Tuning</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Organized timelines, optimized resolution management.</li>
              <li>When to use Cut vs Edit for efficiency.</li>
            </ul>
          </li>
        </ol>

        {/* Learning Workflow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Workflow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Download practice media and replicate steps alongside the course.</li>
          <li>Apply each module’s techniques on personal projects.</li>
          <li>Use Cut for fast edits, Edit for precision, Fusion for VFX, Fairlight for audio.</li>
          <li>Export optimized videos for YouTube, Vimeo, or client delivery.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Confident navigation of Resolve’s multi-page interface.</li>
          <li>Ability to complete edits with sound, color, and effects.</li>
          <li>Practical knowledge of Fusion’s VFX basics.</li>
          <li>Readiness to tackle advanced grading and sound design.</li>
        </ul>

        {/* Why This Course Works */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Course Works
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Comprehensive:</strong> Covers all stages of post-production in one video.
          </li>
          <li>
            <strong>Hands-on:</strong> Downloadable media for immediate practice.
          </li>
          <li>
            <strong>Clear Instruction:</strong> Casey Faris’s teaching is praised for clarity and structure.
          </li>
          <li>
            <strong>Free Version Friendly:</strong> All tools shown work in DaVinci Resolve’s free edition.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default DaVinciResolveCaseyFaris;
