"use client";
import React from "react";

const DockerFullCourseApnaCollege = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Docker Full Course in Hindi — Apna College (Shradha Ma’am)
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>comprehensive, multi-episode Docker tutorial series</strong>{" "}
          in Hindi by <strong>Shradha Ma’am</strong> on the{" "}
          <em>Apna College YouTube channel</em>. With over{" "}
          <strong>135+ episodes</strong>, this series covers everything from{" "}
          <em>Docker fundamentals, container runtime, declarative configuration,
          networking, to advanced deployment workflows</em>. Delivered in
          beginner-friendly Hindi, it is ideal for learners starting their
          containerization and DevOps journey.
        </p>

        {/* Structure Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Structure Overview
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Introduction</strong>  
            <ul className="list-disc list-inside ml-6">
              <li>Overview of Docker's purpose and ecosystem (Episode 1)</li>
            </ul>
          </li>
          <li>
            <strong>Containers & Runtime</strong>  
            <ul className="list-disc list-inside ml-6">
              <li>Running containers (<code>docker run</code>)</li>
              <li>Host vs container internals (Episodes 2–4)</li>
            </ul>
          </li>
          <li>
            <strong>Key Docker Features</strong>  
            <ul className="list-disc list-inside ml-6">
              <li>Isolation, portability, lightweight runtime (Ep 7)</li>
              <li>System setup prerequisites (Ep 8)</li>
            </ul>
          </li>
          <li>
            <strong>Declarative Setup</strong>  
            <ul className="list-disc list-inside ml-6">
              <li>Using Docker Compose or similar declarative methods (Ep 19)</li>
            </ul>
          </li>
          <li>
            <strong>Networking</strong>  
            <ul className="list-disc list-inside ml-6">
              <li>Container networking, plugins, inter-container communication (Ep 27)</li>
            </ul>
          </li>
          <li>
            <strong>Advanced Topics (Episodes 101–135)</strong>  
            <ul className="list-disc list-inside ml-6">
              <li>Dockerfiles & Image Building</li>
              <li>Volume Management & Persistent Data</li>
              <li>Deploying real-world applications</li>
              <li>Security, best practices, CI/CD workflows</li>
            </ul>
          </li>
        </ol>

        {/* How to Learn */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          How to Learn
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch episodes sequentially to build a strong foundation.</li>
          <li>Practice alongside tutorials on your own system.</li>
          <li>
            Pause after each episode to <strong>experiment with commands</strong> and
            build small projects.
          </li>
          <li>
            Use <strong>Docker Compose</strong> for organizing multi-container setups
            as you advance.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Master Docker fundamentals with a step-by-step approach.</li>
          <li>Understand <strong>containers, networking, and declarative setups</strong>.</li>
          <li>Gain practical deployment-ready skills for DevOps pipelines.</li>
          <li>Confidence in managing Dockerized applications in real-world scenarios.</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Apna College Docker Full Course</strong> is one of the most{" "}
          <em>detailed, beginner-friendly, and practical</em> Docker series in
          Hindi. With <strong>135+ structured episodes</strong>, it ensures
          learners move from absolute basics to advanced topics like{" "}
          <strong>Dockerfiles, volumes, networking, and CI/CD integrations</strong>.
          Perfect for those looking to build a <strong>solid DevOps foundation</strong>
          and apply Docker in production-ready workflows.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Shradha Ma’am</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube (Apna College)</p>
          <p className="mb-1"><strong>Format:</strong> Multi-episode series (135+ episodes)</p>
          <p><strong>Language:</strong> Hindi</p>
        </div>
      </article>
    </div>
  );
};

export default DockerFullCourseApnaCollege;
