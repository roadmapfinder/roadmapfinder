"use client";
import React from "react";

const ElectronReactTSFreeCodeCamp = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-yellow-500 pb-4">
          Create Desktop Apps with Electron, React, and TypeScript — freeCodeCamp
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>comprehensive 4-hour tutorial</strong> hosted on{" "}
          <span className="text-blue-600">freeCodeCamp’s YouTube</span> channel, 
          authored by <strong>Beau Carnes</strong>.  
          It teaches you how to build <strong>production-ready desktop applications</strong> 
          using <strong>Electron, React, and TypeScript</strong>—covering setup, 
          integration, packaging, IPC, security, and advanced features.
        </p>

        {/* Course Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Full Course Content Breakdown
        </h2>

        {/* 1. Understanding the Stack */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Understanding the Stack
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>
            <strong>What is Electron?</strong> – Learn how it bridges 
            <em> Node.js and Chromium </em> for desktop app development.
          </li>
          <li>
            <strong>Why React + TypeScript?</strong> – Enhances maintainability 
            and reduces runtime errors with a robust frontend and strong typing.
          </li>
        </ul>

        {/* 2. Project Setup */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Project Setup
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Installing dependencies and initializing the project</li>
          <li>Wiring up <strong>Electron with React + TypeScript</strong></li>
          <li>Ensuring integration between <em>Electron’s main process</em> and the React UI</li>
        </ul>

        {/* 3. Tooling and Distribution */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Tooling and Distribution
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>
            <strong>Electron-Builder:</strong> Packaging and distributing 
            cross-platform apps.
          </li>
          <li>Workflow scripts and configs to streamline development</li>
        </ul>

        {/* 4. Electron Internals */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Electron Internals & API Usage
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Loading system resources and handling app lifecycle events</li>
          <li>Creating <strong>custom windows, tray icons, and menus</strong></li>
        </ul>

        {/* 5. IPC & Security */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. IPC & Security
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>
            <strong>Inter-Process Communication (IPC):</strong> 
            Securely managing data flow between main & renderer processes
          </li>
          <li>
            <strong>Security Best Practices:</strong> Prevent vulnerabilities 
            and ensure safe system-level operations
          </li>
        </ul>

        {/* 6. Advanced Features */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. Advanced Features
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Integrating <strong>data visualization</strong> and charts</li>
          <li>Dynamic view switching and interactive UI enhancements</li>
        </ul>

        {/* 7. Testing */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. Testing
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Unit Testing:</strong> Ensuring individual component reliability</li>
          <li><strong>E2E Testing:</strong> Simulating real user flows for full app validation</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Learn to build <strong>cross-platform desktop apps</strong></li>
          <li>Gain hands-on skills in <strong>Electron, React, TypeScript</strong></li>
          <li>Understand security, IPC, and app distribution</li>
          <li>Free access via <span className="text-blue-600">YouTube</span></li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Beau Carnes</p>
          <p className="mb-1"><strong>Platform:</strong> freeCodeCamp (YouTube)</p>
          <p className="mb-1"><strong>Duration:</strong> ~4 hours</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Intermediate</p>
          <p><strong>Includes:</strong> Full-stack setup, IPC, advanced Electron APIs, and testing</p>
        </div>

      </article>
    </div>
  );
};

export default ElectronReactTSFreeCodeCamp;
