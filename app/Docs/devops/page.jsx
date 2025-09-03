"use client";
import React from "react";

const DevOpsBootcampKunal = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-4">
          DevOps Bootcamp — Kunal Kushwaha (YouTube Playlist + GitHub Repo)
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>project-driven DevOps bootcamp</strong> led by{" "}
          <strong>Kunal Kushwaha</strong>, hosted on{" "}
          <em>YouTube (WeMakeDevs)</em> and supported by a comprehensive{" "}
          <strong>GitHub repository</strong>. The course spans{" "}
          <em>networking, Linux, Docker, Kubernetes, cloud infrastructure,
          CI/CD, IaC, monitoring, and advanced cloud-native tools</em>. It
          provides both <strong>conceptual depth</strong> and{" "}
          <strong>hands-on practice</strong> for aspiring DevOps engineers.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Networking Fundamentals</li>
          <li>Linux CLI & Command-line Tools</li>
          <li>Docker Containers</li>
          <li>Kubernetes Orchestration</li>
          <li>Server Management & Infrastructure</li>
          <li>Infrastructure as Code (IaC)</li>
          <li>Service Mesh Architectures</li>
          <li>Cloud Provider Integration (AWS, GCP, Azure)</li>
          <li>Chaos Engineering</li>
          <li>Go Programming for DevOps</li>
          <li>CI/CD Pipeline Development</li>
          <li>Monitoring & Logging Tools</li>
          <li>GitOps Practices</li>
          <li>Testing Infrastructure & Deployments</li>
          <li>Advanced Cloud-Native Tools</li>
        </ul>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow the <strong>YouTube playlist</strong> sequentially and replicate setups locally.</li>
          <li>Use the <strong>GitHub repository</strong> for exercises, lecture notes, and assignments.</li>
          <li>Work on <strong>mini-projects</strong> such as a CI/CD pipeline, Kubernetes cluster deployment, and monitoring dashboards.</li>
          <li>Leverage your own <strong>cloud environment (AWS/GCP/Azure trial accounts)</strong> for deeper, hands-on practice.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Strong foundation across the full DevOps toolchain.</li>
          <li>Practical skills in <strong>automation, orchestration, and cloud-native practices</strong>.</li>
          <li>Experience in setting up CI/CD pipelines, IaC, and monitoring.</li>
          <li>Preparedness for <strong>real-world DevOps roles</strong> or cloud certifications.</li>
        </ul>

        {/* Community Perspective */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Community Perspective
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Learners note that the playlist is <strong>strong in foundational topics</strong> like Linux,
          Docker, and Kubernetes. Later videos occasionally include tool-focused or sponsor
          content. As one Reddit user mentioned:
        </p>
        <blockquote className="border-l-4 border-indigo-400 pl-4 italic text-gray-600 mb-6">
          “Go through it. If it’s for you — great; if not, there’s plenty more out there anyway.”
        </blockquote>

        {/* Final Thoughts */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Kunal Kushwaha’s DevOps Bootcamp</strong> is one of the most{" "}
          <em>robust free-learning pathways</em> available online. With{" "}
          <strong>community-backed GitHub resources</strong> and practical video
          walkthroughs, learners gain both theory and hands-on skills. It is an
          ideal roadmap for aspiring <strong>DevOps engineers</strong> to start
          building real-world, production-ready expertise.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Kunal Kushwaha</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube Playlist (WeMakeDevs)</p>
          <p className="mb-1"><strong>Resources:</strong> GitHub Repo (notes, code, assignments)</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>
      </article>
    </div>
  );
};

export default DevOpsBootcampKunal;
