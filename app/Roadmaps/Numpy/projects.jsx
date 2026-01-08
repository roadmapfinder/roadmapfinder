// components/NumpyProjects.jsx
"use client";
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-array-lab",
    level: "Phase 1 — Beginner",
    title: "NumPy Array Playground",
    description:
      "Build a hands-on array lab to create, reshape, slice, index, and manipulate NumPy arrays. Replace all Python loops with vectorized operations.",
    url: "https://youtu.be/rnu4-UNKvd0?si=fm7UX6XHpQdAY1O2",
  },
  {
    id: "phase1-image-basics",
    level: "Phase 1 — Beginner",
    title: "Image Processing Basics",
    description:
      "Load images as NumPy arrays and implement grayscale conversion, brightness/contrast adjustment, flipping, and cropping using pure NumPy.",
    url: "https://youtu.be/bI2raX05vlY?si=iOzLTaUJ3qL-jj-F",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-linear-regression",
    level: "Phase 2 — Intermediate",
    title: "Linear Regression from Scratch",
    description:
      "Implement linear regression using matrix multiplication, vectorized gradients, cost functions, and gradient descent without ML libraries.",
    url: "https://youtu.be/VmbA0pi2cRQ?si=b4tFrk4Ef0pMwpfR",
  },
  {
    id: "phase2-time-series",
    level: "Phase 2 — Intermediate",
    title: "Time-Series Analytics Engine",
    description:
      "Build rolling statistics, moving averages, anomaly detection, and lag features using NumPy slicing and stride tricks.",
    url: "https://youtu.be/FPM6it4v8MY?si=B4D9i6JvO1HWBTeR",
  },

  // Phase 3 — Advanced
  {
    id: "phase3-recommendation-system",
    level: "Phase 3 — Advanced",
    title: "Matrix-Based Recommendation System",
    description:
      "Create a user–item recommendation engine using cosine similarity, normalization, and matrix operations with pure NumPy.",
    url: "https://youtu.be/jhFFOmvPne4?si=TB84JsnN-BWVryfV",
  },
  {
    id: "phase3-mini-neural-network",
    level: "Phase 3 — Advanced",
    title: "Neural Network from Scratch",
    description:
      "Build a mini neural network using NumPy only — dense layers, activations, forward/backpropagation, and training loop.",
    url: "https://youtu.be/YqFHs3gdyac?si=pp5EZ7DZE799NlFm",
  },
];

export default function NumpyProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ NumPy Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build NumPy projects from scratch — progress from array fundamentals
            to industry-grade numerical computing and ML foundations.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Finish these projects without shortcuts. If you rely on loops or
          libraries, you’re not learning NumPy — you’re hiding from it.
        </footer>
      </div>
    </section>
  );
}
