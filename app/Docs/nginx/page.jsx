"use client";
import React from "react";

const NginxCodersGyanCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-500 pb-4">
          NGINX Crash Course — Coder’s Gyan
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>beginner-friendly NGINX crash course</strong> by
          <strong> Coder’s Gyan</strong>, focused on explaining how NGINX works
          as a <strong>web server, reverse proxy, and load balancer</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The course emphasizes <strong>practical configuration</strong>,
          real-world deployment use cases, and core concepts required to use
          NGINX confidently in <strong>production environments</strong>.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Basic understanding of how websites work</li>
          <li>Familiarity with Linux terminal commands (helpful)</li>
          <li>No prior NGINX knowledge required</li>
        </ul>

        {/* Course Content */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Content & Modules
        </h2>

        {/* Module 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Introduction to NGINX
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>What NGINX is and why it is used</li>
          <li>NGINX vs Apache overview</li>
          <li>Common real-world use cases</li>
        </ul>

        {/* Module 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: Installing NGINX
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Installing NGINX on Linux (Ubuntu/Debian)</li>
          <li>Starting, stopping, and restarting NGINX</li>
          <li>Verifying installation</li>
        </ul>

        {/* Module 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: NGINX Architecture
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Master and worker processes</li>
          <li>Event-driven, non-blocking architecture</li>
          <li>How NGINX handles multiple requests</li>
        </ul>

        {/* Module 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: NGINX Configuration Basics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understanding <strong>nginx.conf</strong></li>
          <li>Core contexts: <strong>http</strong>, <strong>server</strong>, <strong>location</strong></li>
          <li>Basic syntax and directives</li>
        </ul>

        {/* Module 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Serving Static Files
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Serving HTML, CSS, and JavaScript</li>
          <li><strong>root</strong> and <strong>index</strong> directives</li>
          <li>Directory structure and file handling</li>
        </ul>

        {/* Module 6 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 6: Reverse Proxy with NGINX
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>What is a reverse proxy</li>
          <li>Using <strong>proxy_pass</strong></li>
          <li>Forwarding requests to backend servers</li>
        </ul>

        {/* Module 7 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 7: Load Balancing Basics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Upstream servers</li>
          <li>Round-robin load balancing</li>
          <li>Scaling backend applications</li>
        </ul>

        {/* Module 8 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 8: Security & SSL
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>HTTPS and SSL basics</li>
          <li>HTTP to HTTPS redirection</li>
          <li>Basic security best practices</li>
        </ul>

        {/* Module 9 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 9: Logs & Monitoring
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Access logs and error logs</li>
          <li>Log file locations</li>
          <li>Debugging common issues</li>
        </ul>

        {/* Module 10 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 10: Practical Deployment
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Deploying a sample website with NGINX</li>
          <li>Testing configuration files</li>
          <li>Reloading NGINX without downtime</li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Install and configure NGINX confidently</li>
          <li>Serve static websites efficiently</li>
          <li>Use NGINX as a reverse proxy</li>
          <li>Apply basic load balancing techniques</li>
          <li>Understand production deployment workflows</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Instructor:</strong> Coder’s Gyan</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p className="mb-1"><strong>Format:</strong> Crash Course (One-Shot)</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default NginxCodersGyanCourse;
