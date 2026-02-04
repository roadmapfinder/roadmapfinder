"use client";

import React from "react";

const D3DataVisualizationCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Data Visualization with D3.js, JavaScript & React — freeCodeCamp
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This <strong>freeCodeCamp Data Visualization course</strong> is a
          comprehensive, hands-on guide to building{" "}
          <strong>interactive, scalable, and production-ready data visualizations</strong>{" "}
          using <strong>D3.js</strong>, modern <strong>JavaScript</strong>, and{" "}
          <strong>React</strong>. The course focuses on understanding D3 at a
          low level while integrating it cleanly into real-world frontend
          applications.
        </p>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
          <li>
            <strong>Module 1: Introduction to Data Visualization</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>What data visualization is and why it matters</li>
              <li>Real-world applications and use cases</li>
              <li>Overview of visualization principles</li>
              <li>Introduction to the D3.js ecosystem</li>
            </ul>
          </li>

          <li>
            <strong>Module 2: Environment Setup & Project Structure</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Installing Node.js and npm</li>
              <li>Setting up a React project</li>
              <li>Installing and importing D3.js</li>
              <li>Understanding SVG and DOM rendering</li>
            </ul>
          </li>

          <li>
            <strong>Module 3: JavaScript Fundamentals for D3</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>ES6 syntax essentials</li>
              <li>Arrow functions and scope</li>
              <li>Array methods (map, filter, reduce)</li>
              <li>Working with objects and JSON data</li>
            </ul>
          </li>

          <li>
            <strong>Module 4: Core D3.js Concepts</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>D3 selections and DOM binding</li>
              <li>Enter, update, and exit pattern</li>
              <li>Scales, domains, and ranges</li>
              <li>Color scales and data formatting</li>
            </ul>
          </li>

          <li>
            <strong>Module 5: Creating Basic Charts</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>SVG fundamentals</li>
              <li>Building a bar chart from scratch</li>
              <li>Margins and layout patterns</li>
              <li>Axes, ticks, and labels</li>
            </ul>
          </li>

          <li>
            <strong>Module 6: Advanced Data Visualizations</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Line and area charts</li>
              <li>Scatter plots</li>
              <li>Pie and donut charts</li>
              <li>Time-based and ordinal scales</li>
            </ul>
          </li>

          <li>
            <strong>Module 7: Interactivity & Animations</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Mouse events and interactions</li>
              <li>Tooltips and hover effects</li>
              <li>D3 transitions and animations</li>
              <li>Updating charts dynamically</li>
            </ul>
          </li>

          <li>
            <strong>Module 8: Using D3 with React</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Separating React and D3 responsibilities</li>
              <li>Using refs to manage SVG elements</li>
              <li>Reusable visualization components</li>
              <li>Performance optimization strategies</li>
            </ul>
          </li>

          <li>
            <strong>Module 9: Working with Real-World Data</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Loading CSV and JSON files</li>
              <li>Parsing and cleaning datasets</li>
              <li>Data transformations</li>
              <li>Building real dashboards</li>
            </ul>
          </li>

          <li>
            <strong>Module 10: Responsive & Scalable Visualizations</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Responsive SVG techniques</li>
              <li>Handling screen resizing</li>
              <li>Mobile-first visualization design</li>
              <li>User-driven filtering and updates</li>
            </ul>
          </li>

          <li>
            <strong>Module 11: Production & Deployment</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Performance best practices</li>
              <li>Code organization and readability</li>
              <li>Deploying visualizations</li>
              <li>Next steps in data visualization careers</li>
            </ul>
          </li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Deep understanding of D3.js fundamentals</li>
          <li>Ability to build custom charts without libraries</li>
          <li>Integrate D3 cleanly with React applications</li>
          <li>Create interactive and responsive dashboards</li>
          <li>Industry-ready data visualization skills</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> freeCodeCamp
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Language:</strong> English
          </p>
          <p>
            <strong>Level:</strong> Beginner → Advanced
          </p>
        </div>
      </article>
    </div>
  );
};

export default D3DataVisualizationCourse;
