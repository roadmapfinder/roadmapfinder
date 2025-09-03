"use client";
import React from "react";

const AptitudeCampusPlacements = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-600 pb-4">
          Aptitude Preparation for Campus Placements — Code Step By Step
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>YouTube playlist</strong> by{" "}
          <strong>Code Step By Step (Anil Sidhu)</strong> featuring around{" "}
          <em>30 focused videos</em> that cover key aptitude topics for{" "}
          <strong>campus placement exams</strong>. The series includes
          step-by-step explanations of topics like{" "}
          <em>Time & Work, Speed & Distance, Boats & Streams, Ratio &
          Proportion, Calendar Problems, Geometry, Number Systems, and Coding
          Aptitude</em>.
        </p>

        {/* Format */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="mb-1">
            <strong>Instructor:</strong> Anil Sidhu (Code Step By Step)
          </p>
          <p className="mb-1">
            <strong>Playlist Title:</strong> Aptitude Preparation for Campus
            Placement
          </p>
          <p className="mb-1">
            <strong>Format:</strong> ~30 YouTube videos, topic-wise modules
          </p>
          <p>
            <strong>Target Audience:</strong> Students preparing for{" "}
            <em>campus hiring tests</em> and placement interviews
          </p>
        </div>

        {/* Learning Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Modules
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Introduction to Placement Aptitude</strong>
            <p>
              Overview of the playlist structure and aptitude preparation
              strategy.
            </p>
          </li>
          <li>
            <strong>Time & Work</strong>
            <p>Understanding work-time problems and efficiency concepts.</p>
          </li>
          <li>
            <strong>Speed, Distance & Boats/Streams</strong>
            <p>
              Covers motion-based problems, relative speed, and boat-stream
              variations.
            </p>
          </li>
          <li>
            <strong>Ratio & Proportion</strong>
            <p>
              Fundamental concepts of ratios, proportions, and their application
              in aptitude problems.
            </p>
          </li>
          <li>
            <strong>Calendar-based Reasoning</strong>
            <p>
              Solving date, day, and calendar-related logical reasoning
              questions.
            </p>
          </li>
          <li>
            <strong>Geometry & Number Properties</strong>
            <p>
              Covers essential geometry rules and number system-based aptitude
              questions.
            </p>
          </li>
          <li>
            <strong>Coding Logic Questions</strong>
            <p>
              Practice coding-style aptitude problems often asked in tech
              placements.
            </p>
          </li>
          <li>
            <strong>Additional Core Aptitude Topics (~30 videos)</strong>
            <p>
              Includes other critical areas required for placement exam success.
            </p>
          </li>
        </ol>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Flow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Start from Video #1 to establish strong basics.</li>
          <li>
            Practice along with solved examples to reinforce understanding.
          </li>
          <li>
            Use the playlist as a quick refresher for specific topics before
            tests.
          </li>
          <li>
            Focus on challenging modules like Geometry or Speed/Distance for
            deeper mastery.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Strengthened <strong>quantitative and logical problem-solving</strong>{" "}
            skills.
          </li>
          <li>
            Clear and structured preparation for{" "}
            <strong>campus placement exams</strong>.
          </li>
          <li>
            Quick revision resource for last-minute <em>interview prep</em>.
          </li>
        </ul>

        {/* Why Valuable */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Playlist Is Valuable
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The playlist is <strong>free, topic-specific, and highly relevant</strong>{" "}
          to campus placements. Each video focuses on one aptitude area, making
          it <em>easy to learn, practice, and revise</em>. With{" "}
          <strong>clear explanations by Anil Sidhu</strong>, it’s perfect for{" "}
          beginners starting from scratch as well as seniors brushing up before
          job interviews.
        </p>
      </article>
    </div>
  );
};

export default AptitudeCampusPlacements;
