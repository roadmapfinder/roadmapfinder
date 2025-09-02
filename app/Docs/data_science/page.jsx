import React from 'react';

export default function DataScienceCourse2025() {
  const course = {
    title: "Data Science FULL Course for Beginners in 27 HOURS — 2025 Edition (WsCube Tech)",
    format: "A highly detailed, one-shot YouTube tutorial (~27 hours) covering end-to-end data science fundamentals and applied projects.",
    targetAudience: [
      "Beginners aiming for a structured, all-in-one Data Science path",
      "Learners who prefer long-form, immersive tutorials",
      "Students/professionals preparing for internships or entry-level Data roles"
    ],
    modules: [
      {
        id: 1,
        name: "Python and Data Science Toolkits",
        topics: [
          "Python fundamentals",
          "Numpy",
          "Pandas",
          "Matplotlib",
          "Seaborn"
        ]
      },
      {
        id: 2,
        name: "Statistics & Data Preprocessing",
        topics: [
          "Descriptive statistics",
          "Inferential statistics",
          "Handling missing data",
          "Feature scaling",
          "Encoding techniques"
        ]
      },
      {
        id: 3,
        name: "Exploratory Data Analysis & Visualization",
        topics: [
          "Identifying patterns",
          "Outlier detection",
          "Distribution analysis",
          "Visualization with Matplotlib & Seaborn"
        ]
      },
      {
        id: 4,
        name: "Supervised Learning Algorithms",
        topics: [
          "Linear Regression",
          "Logistic Regression",
          "Decision Trees",
          "Support Vector Machines (SVMs)"
        ]
      },
      {
        id: 5,
        name: "Model Evaluation & Hyperparameter Tuning",
        topics: [
          "Cross-validation",
          "Evaluation metrics",
          "Grid search",
          "Model optimization techniques"
        ]
      },
      {
        id: 6,
        name: "Unsupervised Learning & Dimensionality Reduction",
        topics: [
          "K-Means clustering",
          "Principal Component Analysis (PCA)"
        ]
      },
      {
        id: 7,
        name: "Deep Learning & Neural Networks",
        topics: [
          "Neural network basics",
          "TensorFlow / PyTorch introduction"
        ]
      },
      {
        id: 8,
        name: "Time Series & NLP Basics",
        topics: [
          "Time series forecasting",
          "Natural Language Processing (NLP) introduction"
        ]
      },
      {
        id: 9,
        name: "Capstone Project or Real-World Use Case",
        topics: [
          "End-to-end predictive modeling",
          "Business dashboard",
          "Classification project with real datasets"
        ]
      }
    ],
    learningApproach: [
      "Follow sequentially, note key concepts, and code along",
      "Pause and replicate tables, charts, and models with chosen datasets",
      "Complete a project applying the learned tools in a real-world scenario"
    ],
    expectedOutcomes: [
      "Fluency in the Data Science workflow—from cleaning to deployment",
      "Ability to handle modeling, analysis, and visualization tasks",
      "Skills aligned with entry-level roles and internships"
    ],
    summary: "This 27-hour Data Science course by WsCube Tech is an all-encompassing, bootcamp-style program. It ensures mastery of the entire data science pipeline, making it an ideal foundation for beginners who want to build strong analytic and modeling expertise."
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.format}</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">🎯 Target Audience</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.targetAudience.map((audience, idx) => (
          <li key={idx}>{audience}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">📚 Modules</h2>
      <div className="space-y-4">
        {course.modules.map((module) => (
          <div key={module.id} className="p-4 border rounded-lg shadow">
            <h3 className="font-semibold">{module.id}. {module.name}</h3>
            <ul className="list-disc ml-6">
              {module.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">📝 Learning Approach</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.learningApproach.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🏆 Expected Outcomes</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.expectedOutcomes.map((outcome, idx) => (
          <li key={idx}>{outcome}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">📌 Final Summary</h2>
      <p>{course.summary}</p>
    </div>
  );
}
