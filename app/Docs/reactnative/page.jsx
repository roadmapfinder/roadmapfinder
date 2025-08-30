"use client";
import React from "react";

const ReactNativeMasteryCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-yellow-500 pb-4">
          React Native Mastery with 10 Apps — Hitesh Choudhary
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>practical, project-first React Native series</strong>{" "}
          aimed at helping learners build confidence by developing{" "}
          <strong>10 real-world mobile apps</strong> using React Native.  
          It’s <strong>free</strong> and delivered via{" "}
          <span className="text-blue-600">YouTube</span>, with supporting code
          and guides hosted on <span className="text-blue-600">GitHub</span>.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Proficiency in <strong>JavaScript fundamentals</strong></li>
          <li>Basic familiarity with <strong>mobile app development</strong></li>
          <li>Comfortable coding in <strong>Hindi</strong></li>
        </ul>

        {/* Course Structure & Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Structure & Content Overview
        </h2>
        <p className="text-gray-700 mb-6">
          While Hitesh's GitHub repo doesn’t list every lesson by name, it reveals the{" "}
          <strong>10 project apps</strong> you'll build.  
          Each is a <em>mini-project</em> designed to progressively teach{" "}
          React Native concepts.
        </p>

        {/* Projects List */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Projects Covered (via GitHub repo “React-native-projects”)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>styler02</strong> – Styling fundamentals</li>
          <li><strong>passwordGenerator03</strong> – Functional app with logic</li>
          <li><strong>bgChanger04</strong> – Background color manipulator</li>
          <li><strong>rollthedice05</strong> – Randomizer logic + UI</li>
          <li><strong>currencyConverter06</strong> – Form input and output logic</li>
          <li><strong>tictactoe07</strong> – Game logic and state management</li>
          <li><strong>spotifymusic08</strong> – Media player-like interface</li>
          <li><strong>natigationexplore09</strong> – Navigation & routing</li>
          <li><strong>shopping10</strong> – Basic e-commerce layout</li>
          <li><strong>music-asset</strong> – Asset management strategies</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Additionally, the repo includes <strong>appwriteauth11</strong> for integrating{" "}
          Appwrite authentication, and <strong>Awesome01</strong> (possibly an
          introductory or template project).
        </p>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Hands-on experience by building <strong>10 real-world apps</strong></li>
          <li>Step-by-step learning of <strong>React Native concepts</strong></li>
          <li>Free access via <strong>YouTube</strong></li>
          <li>Complete source code available on <strong>GitHub</strong></li>
          <li>Beginner-friendly with <strong>Hindi explanations</strong></li>
        </ul>

        {/* Course Meta */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Hitesh Choudhary</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Intermediate</p>
          <p><strong>Includes:</strong> 10 projects, GitHub repo, and community support</p>
        </div>

      </article>
    </div>
  );
};

export default ReactNativeMasteryCourse;
