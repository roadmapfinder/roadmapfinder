"use client";
import React from "react";

const GitGithubWithPiyush = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Complete Git & GitHub Tutorial for Beginners — Piyush Garg
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This <strong>hands-on YouTube playlist</strong> by{" "}
          <em>Piyush Garg</em> provides a complete beginner-friendly
          introduction to <strong>Git version control</strong> and{" "}
          <strong>GitHub collaboration</strong>. The course spans approximately{" "}
          <strong>2+ hours</strong> across multiple tutorials, including{" "}
          branching, merging, and practical workflows used in real projects.
        </p>

        {/* Audience / Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Who Is This For?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Absolute beginners with no prior Git experience.</li>
          <li>
            Developers who want to learn{" "}
            <strong>version control best practices</strong>.
          </li>
          <li>
            Students or professionals aiming to{" "}
            <strong>collaborate on GitHub projects</strong>.
          </li>
          <li>
            Anyone looking to strengthen their{" "}
            <strong>software development workflow</strong>.
          </li>
        </ul>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The course follows a progressive structure that moves from
          fundamentals to collaboration:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> Introduction to Git – What is version
            control and why it matters.
          </li>
          <li>
            <strong>Module 2:</strong> Git Basics – Installation, git init,
            clone, add, commit.
          </li>
          <li>
            <strong>Module 3:</strong> History & Logging – git log, reset,
            revert.
          </li>
          <li>
            <strong>Module 4:</strong> Branching & Merging – Creating branches,
            merging, resolving conflicts.
          </li>
          <li>
            <strong>Module 5:</strong> Advanced Commands – git stash, tags,
            diffs.
          </li>
          <li>
            <strong>Module 6:</strong> GitHub Collaboration – push, pull, fork,
            clone, PR workflow.
          </li>
          <li>
            <strong>Module 7:</strong> Best Practices – Commit hygiene,
            .gitignore, feature-based workflows.
          </li>
        </ul>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow tutorials step-by-step and practice commands in terminal.</li>
          <li>Create your own GitHub repository to apply concepts.</li>
          <li>Simulate collaboration by using branches and pull requests.</li>
          <li>Revisit advanced topics like merging conflicts and rebasing.</li>
        </ul>

        {/* Learner Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Confidence with Git workflows and commands.</li>
          <li>Ability to collaborate effectively on GitHub projects.</li>
          <li>Understanding of structured version control practices.</li>
          <li>Project-ready experience for real-world development teams.</li>
        </ul>

        {/* Why It Works */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Course Works
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Clear Instruction in Hindi</strong> – Ideal for native
            learners.
          </li>
          <li>
            <strong>Balanced Depth</strong> – Covers both basics and
            intermediate Git concepts.
          </li>
          <li>
            <strong>Project-Ready</strong> – Includes GitHub collaboration
            essentials for real projects.
          </li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Piyush Garg
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube Playlist
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> ~2 hours (multi-video series)
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default GitGithubWithPiyush;
