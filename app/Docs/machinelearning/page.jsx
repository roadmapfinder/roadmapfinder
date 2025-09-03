"use client";
import React from "react";

const MachineLearningWithSagar = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Machine Learning Full Course with Scikit-Learn | Math + Python + AI — Code with Sagar
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This <strong>comprehensive, single-video course</strong> by{" "}
          <em>Sagar Chouksey (Code with Sagar)</em> blends essential{" "}
          <strong>mathematics, Python coding, and applied AI principles</strong>. 
          Using the <em>Scikit-Learn library</em>, it guides learners from the 
          mathematical foundations of Machine Learning to implementing real-world models. 
          The video runs approximately <strong>4 hours 14 minutes</strong> and is designed 
          for both conceptual clarity and practical hands-on practice.
        </p>

        {/* Audience / Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Who Is This For?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Learners who know <strong>basic Python</strong> (variables, loops, functions).</li>
          <li>Students or professionals seeking a <strong>math + code blended approach</strong>.</li>
          <li>Anyone wanting to learn <strong>Machine Learning with Scikit-Learn</strong>.</li>
          <li>Beginners aiming for a <strong>conceptual yet practical introduction</strong>.</li>
        </ul>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Core Modules</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The course builds up from theory to hands-on implementation, structured as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> Mathematical Foundations
            (linear algebra, calculus derivatives, probability, statistics).
          </li>
          <li>
            <strong>Module 2:</strong> Python & Scikit-Learn Setup
            (Python basics, installing and using Scikit-Learn).
          </li>
          <li>
            <strong>Module 3:</strong> Regression Algorithms
            (Linear Regression, Polynomial Regression, coding implementations).
          </li>
          <li>
            <strong>Module 4:</strong> Classification Techniques
            (Logistic Regression, k-NN, Decision Trees, SVM basics).
          </li>
          <li>
            <strong>Module 5:</strong> Model Evaluation & Metrics
            (accuracy, precision, recall, F1-score, ROC/AUC).
          </li>
          <li>
            <strong>Module 6:</strong> Advanced Topics (Possible Coverage)
            (feature engineering, hyperparameter tuning, cross-validation, ensemble learning).
          </li>
        </ul>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Learning Approach</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Pause and code along with Python demos.</li>
          <li>Focus on <strong>mathematical intuition</strong> before implementation.</li>
          <li>Apply Scikit-Learn workflows to small datasets for practice.</li>
          <li>Reinforce each module with exercises or experiments.</li>
        </ul>

        {/* Projects & Applications */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Projects & Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Build and evaluate a regression model with real-world data.</li>
          <li>Classification mini-project (e.g., spam detection, Iris dataset).</li>
          <li>Experiment with Scikit-Learn pipelines and preprocessing tools.</li>
        </ul>

        {/* Tools & Environment */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Tools & Environment</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Language:</strong> Python 3.x</li>
          <li><strong>Libraries:</strong> Scikit-Learn, NumPy, Pandas, Matplotlib</li>
          <li><strong>IDE/Notebooks:</strong> Jupyter Notebook or VS Code</li>
          <li><strong>Data:</strong> Sample datasets (Iris, Titanic, etc.)</li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Expected Outcomes</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Solid foundation in ML mathematics and coding workflows.</li>
          <li>Ability to implement regression and classification models in Scikit-Learn.</li>
          <li>Hands-on experience with model evaluation and improvement techniques.</li>
          <li>Confidence to explore advanced topics like ensemble methods or deep learning.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Final Notes</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Code with Sagar’s ML Full Course</strong> offers a balanced 
          approach between <em>math theory</em> and <em>practical coding</em>. 
          With clear Hindi explanations and Python implementations, this course 
          is a strong starting point for anyone stepping into Machine Learning.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Sagar Chouksey (Code with Sagar)</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Duration:</strong> ~4h 14m (single video, Part 2)</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>
      </article>
    </div>
  );
};

export default MachineLearningWithSagar;
