"use client";
import React from "react";

const LinuxCommandLineCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-600 pb-4">
          Linux Command Line for Beginners in Hindi — Engineering Digest
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>Hindi-language YouTube playlist</strong> by{" "}
          <strong>Engineering Digest (Vipul Tyagi)</strong> that introduces 
          learners to the <em>Linux command line</em>. This series covers 
          everything from <strong>basic navigation</strong> to{" "}
          <strong>advanced command-line efficiency</strong>, tailored 
          specifically for beginners who prefer learning in Hindi.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Instructor:</strong> Vipul Tyagi (Engineering Digest)
          </p>
          <p className="mb-1">
            <strong>Format:</strong> Beginner-focused playlist with 
            command-specific modules
          </p>
        </div>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Basic Navigation:</strong> Commands like <code>ls</code>,{" "}
            <code>pwd</code>, <code>cd</code> for directory movement.
          </li>
          <li>
            <strong>File Content Viewing:</strong> Tools like <code>cat</code>,{" "}
            <code>head</code>, <code>tail</code>, and <code>less</code> to read files.
          </li>
          <li>
            <strong>Standard Output Tricks & Redirection:</strong> Mastering 
            standard output, error handling, and redirection.
          </li>
          <li>
            <strong>Aliases & Environment Variables:</strong> Customizing 
            the shell for faster workflows.
          </li>
          <li>
            <strong>Advanced Tips:</strong> Using <code>grep</code>, piping, 
            and command shortcuts for efficiency.
          </li>
        </ol>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Flow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Start with foundational navigation commands (<code>ls</code>, <code>pwd</code>, <code>cd</code>).</li>
          <li>Practice file inspection with <code>cat</code>, <code>head</code>, <code>tail</code>, and <code>less</code>.</li>
          <li>Learn redirection and output tricks to manage data effectively.</li>
          <li>Progress into efficiency tools like aliases and environment variables.</li>
          <li>Apply advanced tricks with <code>grep</code> and piping to handle larger tasks productively.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Confidence navigating and managing files in Linux via CLI.</li>
          <li>Ability to quickly inspect and manipulate file content.</li>
          <li>Improved productivity through aliases, environment setups, and shortcuts.</li>
        </ul>

        {/* Why Effective */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Playlist Is Effective
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Engineering Digest</strong> offers{" "}
          <em>clear and concise teaching in Hindi</em>, making Linux approachable 
          for beginners. Each module is <strong>focused and practical</strong>, 
          allowing learners to progress gradually from navigation basics to 
          advanced efficiency techniques like piping and grep. With its{" "}
          <em>incremental learning curve</em>, this playlist is ideal for 
          absolute beginners as well as learners revisiting Linux fundamentals.
        </p>
      </article>
    </div>
  );
};

export default LinuxCommandLineCourse;
