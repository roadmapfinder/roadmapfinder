"use client";
import React from "react";

const GitGithubJSMastery = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Git & GitHub Complete Guide — JavaScript Mastery (JS Mastery)
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>JavaScript Mastery (JS Mastery)</strong> provides a{" "}
          <em>comprehensive Git & GitHub guide</em>, ideal for developers who
          want to gain hands-on experience with version control and
          collaboration. The course combines a{" "}
          <strong>free downloadable handbook</strong> (PDF) with a{" "}
          <strong>YouTube video tutorial</strong> titled{" "}
          <em>"Learn Git – The Full Course"</em>. This dual approach balances{" "}
          <em>reference material</em> with <em>practical, real-world workflows</em>.
        </p>

        {/* Course Materials */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What’s Included
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Git & GitHub Handbook (PDF):</strong> Covers essential
            commands, advanced workflows, and expert tips.
          </li>
          <li>
            <strong>YouTube Full Course:</strong> Example-driven walkthrough of
            Git concepts, repository management, and collaboration strategies.
          </li>
        </ul>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> Version Control Essentials (Init, Add,
            Commit)
          </li>
          <li>
            <strong>Module 2:</strong> Navigating History & Diffs (Log, Diff,
            Revert)
          </li>
          <li>
            <strong>Module 3:</strong> Branching Workflows (Branch, Checkout,
            Merge)
          </li>
          <li>
            <strong>Module 4:</strong> Remote Collaboration (Push, Pull, Clone)
          </li>
          <li>
            <strong>Module 5:</strong> Advanced Tools (Stash, Rebase, Cherry
            Pick, Tags)
          </li>
          <li>
            <strong>Module 6:</strong> Workflow Optimizations (Aliases,
            Configs, Reflog, Internals)
          </li>
        </ul>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Start with the{" "}
            <strong>"Learn Git – The Full Course" YouTube tutorial</strong> to
            understand Git in action.
          </li>
          <li>
            Use the <strong>Handbook PDF</strong> as a quick reference for
            commands, flags, and workflows.
          </li>
          <li>
            Practice by{" "}
            <strong>
              creating your own repositories and contributing to open-source
              projects
            </strong>
            .
          </li>
          <li>
            Experiment with{" "}
            <em>advanced Git tools like rebase, stash, and reflog</em> for real
            mastery.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Confidence in <strong>everyday Git operations</strong> (init,
            commit, branch, merge).
          </li>
          <li>
            Strong ability to handle{" "}
            <strong>conflict resolution and recovery</strong> scenarios.
          </li>
          <li>
            Readiness for <strong>team collaboration</strong> with GitHub.
          </li>
          <li>
            Efficiency with{" "}
            <em>advanced workflows and productivity optimizations</em>.
          </li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>JS Mastery’s Git & GitHub guide</strong> is a complete
          learning package. By combining a{" "}
          <em>detailed reference handbook</em> with a{" "}
          <em>practical video course</em>, it ensures learners not only
          understand the concepts but also apply them in real-world
          development workflows.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> JavaScript Mastery (JS Mastery)
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube + PDF Handbook
          </p>
          <p className="mb-1">
            <strong>Format:</strong> Video + Downloadable Guide
          </p>
          <p>
            <strong>Level:</strong> Beginner to Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default GitGithubJSMastery;
