"use client";
import React from "react";

const ChaiAurDjangoCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Chai aur Django — Complete Django Web Development Series (Hindi) by Chai aur Code
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Chai aur Django</strong> is a complete YouTube playlist that covers{" "}
          <em>Django web development</em> using Python. The series introduces Django
          fundamentals, templating, ORM-based modeling, styling with Tailwind CSS, and 
          form handling. It is fully supported with written guides through{" "}
          <strong>Chai aur Docs</strong>, providing step-by-step reference alongside
          videos.
        </p>

        {/* Supplementary Guide */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Supplementary Guide
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Chai aur Docs</strong> portal complements the video playlist,
          offering detailed written tutorials with commands, code snippets, and 
          structured walkthroughs for each module.
        </p>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Modules & Learning Flow
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Welcome & Introduction</strong> — What Django is, why it's powerful, 
            and course overview.
          </li>
          <li>
            <strong>Django Setup</strong> — Creating virtual environments, initializing 
            projects, and running the dev server.
          </li>
          <li>
            <strong>Views & URL Routing</strong> — Function-based views and URL mapping.
          </li>
          <li>
            <strong>Templates & Static Files</strong> — Using the Django template engine, 
            configuring static files, CSS, and JS.
          </li>
          <li>
            <strong>Jinja-style Template Logic</strong> — Control structures, tags, and 
            logic inside templates.
          </li>
          <li>
            <strong>Tailwind CSS Integration</strong> — Adding modern styling within 
            Django templates.
          </li>
          <li>
            <strong>Models & ORM</strong> — Data modeling, migrations, and syncing with 
            databases.
          </li>
          <li>
            <strong>Relationships & Forms</strong> — Defining model relationships and 
            creating secure Django forms.
          </li>
        </ul>

        {/* Suggested Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the videos and replicate all steps locally.</li>
          <li>Use <strong>Chai aur Docs</strong> as a quick-reference manual for commands and setup.</li>
          <li>After each module, build a small Django app (e.g., blog, contact form) to solidify concepts.</li>
          <li>Experiment with templates, Tailwind CSS integration, and form handling for practical experience.</li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Confidence in building full-stack Django applications.</li>
          <li>Understanding of Django templates, static files, and Tailwind CSS integration.</li>
          <li>Experience with Django ORM, relational modeling, and migrations.</li>
          <li>Ability to create and handle forms in Django securely.</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Summary</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Chai aur Django</strong> playlist offers an{" "}
          <em>end-to-end, beginner-friendly learning path</em> for aspiring Django 
          developers. With clear video explanations, project-focused coding, and 
          step-by-step written documentation, it is an ideal series to become{" "}
          <strong>industry-ready in Django web development</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Chai aur Code
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube + Chai aur Docs
          </p>
          <p className="mb-1">
            <strong>Language:</strong> Hindi
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default ChaiAurDjangoCourse;
