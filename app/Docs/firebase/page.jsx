"use client";
import React from "react";

const FirebaseFreeCodeCampCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-orange-500 pb-4">
          Firebase Complete Course — freeCodeCamp
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>full Firebase backend development course</strong>
          published by <strong>:contentReference[oaicite:0]{index=0}</strong>.
          The course teaches how to build <strong>serverless backends</strong>
          using Firebase, covering authentication, databases, storage,
          security rules, and deployment by building real-world applications.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Basic HTML, CSS, and JavaScript knowledge.</li>
          <li>Familiarity with modern JavaScript (ES6).</li>
          <li>Node.js installed on your system.</li>
        </ul>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>

        {/* Module 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Introduction to Firebase
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>What Firebase is and why it is used.</li>
          <li>Backend-as-a-Service (BaaS) concept.</li>
          <li>Overview of Firebase products.</li>
        </ul>

        {/* Module 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: Firebase Project Setup
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Creating a Firebase project.</li>
          <li>Firebase Console overview.</li>
          <li>Connecting Firebase to a web app.</li>
          <li>Environment configuration.</li>
        </ul>

        {/* Module 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: Authentication
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Email and password authentication.</li>
          <li>OAuth providers (Google sign-in).</li>
          <li>User session handling.</li>
          <li>Authentication state management.</li>
        </ul>

        {/* Module 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: Firestore Database
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>What Cloud Firestore is.</li>
          <li>Collections and documents.</li>
          <li>CRUD operations (Create, Read, Update, Delete).</li>
          <li>Real-time data syncing.</li>
        </ul>

        {/* Module 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Queries & Data Modeling
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Filtering and ordering data.</li>
          <li>Pagination.</li>
          <li>Efficient Firestore data structures.</li>
        </ul>

        {/* Module 6 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 6: Firebase Storage
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Uploading files (images, documents).</li>
          <li>Downloading and displaying files.</li>
          <li>Handling file metadata.</li>
        </ul>

        {/* Module 7 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 7: Security Rules
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Firestore security rules.</li>
          <li>Authentication-based access control.</li>
          <li>Protecting user data.</li>
        </ul>

        {/* Module 8 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 8: Firebase Hosting
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Firebase CLI usage.</li>
          <li>Deploying frontend applications.</li>
          <li>Custom domains and hosting workflow.</li>
        </ul>

        {/* Module 9 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 9: Full Project Build
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>User authentication system.</li>
          <li>Database-driven application.</li>
          <li>File uploads with storage.</li>
          <li>Deployment to production.</li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Build full backend systems without servers.</li>
          <li>Implement secure authentication.</li>
          <li>Work confidently with Firestore.</li>
          <li>Deploy production-ready applications.</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Instructor:</strong> freeCodeCamp</p>
          <p className="mb-1"><strong>Language:</strong> English</p>
          <p className="mb-1"><strong>Level:</strong> Beginner → Intermediate</p>
          <p><strong>Format:</strong> One-shot full course + project</p>
        </div>

      </article>
    </div>
  );
};

export default FirebaseFreeCodeCampCourse;