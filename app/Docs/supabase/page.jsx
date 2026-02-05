"use client";
import React from "react";

const SupabaseCoursePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-4">
          Supabase Full Course – Firebase Alternative (Beginner to Production) — freeCodeCamp
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This <strong>Supabase Full Course</strong> by <strong>freeCodeCamp</strong> is a
          complete beginner-friendly backend tutorial that teaches how to build
          scalable, secure applications using <strong>Supabase</strong> —
          an <em>open-source Firebase alternative</em>.
          The course covers authentication, PostgreSQL database management,
          real-time features, file storage, and frontend integration.
        </p>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">

          <li>
            <strong>Module 1: Introduction to Supabase</strong>
            <ul className="list-disc list-inside ml-6">
              <li>What Supabase is</li>
              <li>Supabase vs Firebase</li>
              <li>Use cases & architecture overview</li>
            </ul>
          </li>

          <li>
            <strong>Module 2: Supabase Project Setup</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Creating a Supabase account</li>
              <li>Project creation & configuration</li>
              <li>API keys & environment variables</li>
            </ul>
          </li>

          <li>
            <strong>Module 3: PostgreSQL Database Fundamentals</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Tables, rows, and columns</li>
              <li>Primary keys & relationships</li>
              <li>Using SQL editor</li>
            </ul>
          </li>

          <li>
            <strong>Module 4: Authentication & User Management</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Email/password authentication</li>
              <li>OAuth providers (Google, GitHub, etc.)</li>
              <li>Sessions & user state</li>
            </ul>
          </li>

          <li>
            <strong>Module 5: Supabase Client Integration</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Installing Supabase client</li>
              <li>Connecting frontend with backend</li>
              <li>CRUD operations</li>
            </ul>
          </li>

          <li>
            <strong>Module 6: Row Level Security (RLS)</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Understanding RLS</li>
              <li>Creating security policies</li>
              <li>User-based data access</li>
            </ul>
          </li>

          <li>
            <strong>Module 7: Real-Time Features</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Listening to database changes</li>
              <li>Subscriptions & channels</li>
              <li>Live UI updates</li>
            </ul>
          </li>

          <li>
            <strong>Module 8: File Storage</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Creating storage buckets</li>
              <li>Uploading & downloading files</li>
              <li>Access permissions</li>
            </ul>
          </li>

          <li>
            <strong>Module 9: Frontend Integration</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Using Supabase with React / Next.js</li>
              <li>Auth UI flows</li>
              <li>Displaying dynamic data</li>
            </ul>
          </li>

          <li>
            <strong>Module 10: Production & Best Practices</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Environment configuration</li>
              <li>Security considerations</li>
              <li>Scaling applications</li>
            </ul>
          </li>

        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Build a complete backend using Supabase</li>
          <li>Use PostgreSQL with secure access control</li>
          <li>Implement authentication & authorization</li>
          <li>Enable real-time data updates</li>
          <li>Store and serve files securely</li>
          <li>Integrate Supabase with modern frontend frameworks</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This course is ideal for developers looking to build
          <strong> full-stack, production-ready applications</strong>
          without managing traditional backend infrastructure.
          Supabase’s open-source nature and PostgreSQL foundation make it
          a powerful backend choice for modern apps.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> freeCodeCamp</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Language:</strong> English</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default SupabaseCoursePage;
