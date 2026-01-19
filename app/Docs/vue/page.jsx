"use client";
import React from "react";

const VueJsMasterclassFreeCodeCamp = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Vue.js Complete Course for Beginners — freeCodeCamp
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>full-length beginner-to-advanced Vue.js tutorial</strong> 
          published by <span className="text-green-600 font-medium">freeCodeCamp</span>. 
          The course is designed to take learners from absolute zero knowledge of Vue 
          to building practical, real-world single page applications using modern Vue concepts.
        </p>
        <p className="text-gray-700 mb-6">
          The tutorial focuses on understanding Vue fundamentals deeply, working with 
          components, routing, state management, APIs, and preparing applications for production deployment.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Basic knowledge of HTML and CSS</li>
          <li>Basic JavaScript understanding</li>
          <li>Node.js installed on your system</li>
          <li>Willingness to practice along with the course</li>
        </ul>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Introduction & Setup
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>What Vue.js is and why it is popular</li>
          <li>Vue compared with traditional JavaScript DOM manipulation</li>
          <li>Development environment setup</li>
          <li>Creating the first Vue project</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Vue Fundamentals
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Vue reactivity system</li>
          <li>Vue app instance using <code>createApp()</code></li>
          <li>Template syntax and rendering</li>
          <li>Two-way data binding with <code>v-model</code></li>
          <li>Directives: <code>v-if</code>, <code>v-for</code>, <code>v-show</code></li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Components
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Component-based architecture</li>
          <li>Creating and registering components</li>
          <li>Passing data using props</li>
          <li>Emitting custom events</li>
          <li>Component lifecycle hooks</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Component Communication
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Parent to child communication using props</li>
          <li>Child to parent communication using events</li>
          <li>Using centralized stores or event bus for complex flows</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. Vue Router
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Setting up Vue Router</li>
          <li>Creating SPA navigation</li>
          <li>Dynamic routes and parameters</li>
          <li>Navigation guards</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. State Management
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Local component state</li>
          <li>Using Vuex or Pinia</li>
          <li>Sharing state across components</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. Forms and User Input
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Form input handling</li>
          <li>Validation techniques</li>
          <li>Advanced usage of <code>v-model</code></li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          8. Advanced Vue Concepts
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Computed properties vs watchers</li>
          <li>Lifecycle hooks</li>
          <li>Custom directives</li>
          <li>Slots and scoped slots</li>
          <li>Render functions</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          9. API Calls & Async Operations
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Using Axios or fetch</li>
          <li>Working with REST APIs</li>
          <li>Error handling with async/await</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          10. Deployment & Final Build
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Building Vue apps for production</li>
          <li>Hosting and deployment tips</li>
          <li>Performance optimization techniques</li>
        </ul>

        {/* What You'll Learn */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What You’ll Learn
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Complete Vue.js fundamentals</li>
          <li>Component-driven application design</li>
          <li>Routing and navigation handling</li>
          <li>State management best practices</li>
          <li>API integration and async programming</li>
          <li>Deploying Vue applications to production</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 mb-6">
          The <strong>Vue.js Complete Course for Beginners</strong> by 
          <span className="text-green-600 font-medium"> freeCodeCamp </span>
          is a structured, in-depth Vue learning resource that takes students from 
          beginner level to real-world application development. It focuses on modern 
          Vue practices, real project concepts, and professional coding standards.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> freeCodeCamp</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Advanced</p>
          <p className="mb-1"><strong>Format:</strong> Full Vue.js masterclass</p>
          <p><strong>Focus:</strong> Practical, real-world Vue development</p>
        </div>

      </article>
    </div>
  );
};

export default VueJsMasterclassFreeCodeCamp;
