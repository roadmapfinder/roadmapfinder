"use client";
import React from "react";

const MLFoundationsFreeCodeCamp = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Learn the Foundations of Machine Learning and Artificial Intelligence — freeCodeCamp
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is an <strong>11-hour comprehensive course</strong> designed to introduce the 
          <strong>foundations of Machine Learning (ML) and Artificial Intelligence (AI)</strong>. 
          Authored and taught by <em>Beau Carnes</em>, it blends theory, implementation, and 
          <strong>career guidance</strong> into one structured package. The course follows the 
          official freeCodeCamp outline and prepares learners for beginner-to-intermediate 
          roles in AI and ML.
        </p>

        {/* Course Content Breakdown */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Course Modules</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Module 1: Machine Learning Roadmap (2024)</strong> — A guide to the essential 
            skills, tools, and frameworks needed to thrive in today’s ML industry.
          </li>
          <li>
            <strong>Module 2: ML Basics</strong> — Covers supervised vs. unsupervised learning, 
            regression vs. classification, and the ML workflow.
          </li>
          <li>
            <strong>Module 3: Key Principles in ML</strong> — Explains bias-variance trade-off, 
            overfitting, and regularization for building robust models.
          </li>
          <li>
            <strong>Module 4: Machine Learning Algorithms</strong> — Deep dives into linear 
            regression, logistic regression, decision trees, clustering, and more, including 
            real implementations.
          </li>
          <li>
            <strong>Module 5: Case Studies & Projects</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>Superstore Data Analytics Project</li>
              <li>Linear Regression Case Study</li>
              <li>MLOps-powered Movie Recommendation System</li>
            </ul>
          </li>
          <li>
            <strong>Module 6: Career Guidance & Workshops</strong> — Strategies for transitioning 
            into data science, startup guidance, and interview preparation for ML/AI jobs.
          </li>
        </ul>

        {/* Suggested Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Learning Strategy</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch continuously or break down into <strong>module-based study sessions</strong>.</li>
          <li>Code along using <strong>Python, scikit-learn, pandas, and matplotlib</strong>.</li>
          <li>Complete at least <strong>one full project</strong> to showcase in your portfolio.</li>
          <li>Review concepts with practical experiments after each module.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Learning Outcomes</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Strong grasp of <strong>core ML and AI theory</strong>.</li>
          <li>Practical coding experience with <strong>real datasets and projects</strong>.</li>
          <li>Ability to evaluate, fine-tune, and deploy ML models.</li>
          <li>Career preparation through <strong>workshops and interview guidance</strong>.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Final Notes</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>freeCodeCamp Foundations of ML & AI course</strong> delivers both 
          <em>theoretical depth</em> and <em>practical application</em>. With structured 
          modules, hands-on projects, and career-focused workshops, this 11-hour video is 
          a valuable resource for aspiring AI professionals and data scientists.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Beau Carnes</p>
          <p className="mb-1"><strong>Platform:</strong> freeCodeCamp (YouTube)</p>
          <p className="mb-1"><strong>Duration:</strong> ~11 Hours</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>
      </article>
    </div>
  );
};

export default MLFoundationsFreeCodeCamp;
