"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "mnist-digit-classifier",
    level: "Phase 1 — Beginner",
    title: "Handwritten Digit Recognition (MNIST)",
    description:
      "Build your first deep learning model using TensorFlow and Keras to classify handwritten digits (0–9). Learn tensors, layers, loss functions, optimizers, and model evaluation.",
    url: "https://youtu.be/iqQgED9vV7k?si=tmj0KgyxfDvcdEKh",
    channel: "TensorFlow Official Tutorials",
  },
  {
    id: "simple-regression-model",
    level: "Phase 1 — Beginner",
    title: "House Price Prediction (Regression)",
    description:
      "Create a regression model to predict house prices using numerical features. Understand feature scaling, loss functions (MSE), and model performance evaluation.",
    url: "https://www.tensorflow.org/tutorials/keras/regression",
    channel: "https://youtu.be/N942Bi0_FnI?si=lG7vdIOimT5BrSAF",
  },

  // Phase 2 — Intermediate
  {
    id: "image-classification-transfer-learning",
    level: "Phase 2 — Intermediate",
    title: "Image Classification with Transfer Learning",
    description:
      "Build a real-world image classifier using pre-trained models like MobileNet or ResNet. Apply data augmentation, fine-tuning, and optimized training pipelines.",
    url: "https://youtu.be/LsdxvjLWkIY?si=s-kVP8iZ1ypP2vwh",
    channel: "TensorFlow Computer Vision",
  },
  {
    id: "sentiment-analysis-nlp",
    level: "Phase 2 — Intermediate",
    title: "Sentiment Analysis (NLP)",
    description:
      "Develop a sentiment analysis system using text data. Learn tokenization, embeddings, LSTM/GRU models, and text classification using TensorFlow and Keras.",
    url: "https://youtu.be/hprBCp_UJN0?si=mtLErzCejvVdkeDQ",
    channel: "TensorFlow NLP Tutorials",
  },

  // Phase 3 — Advanced
  {
    id: "time-series-forecasting",
    level: "Phase 3 — Advanced",
    title: "Time Series Forecasting with LSTM",
    description:
      "Build a forecasting model for time-series data such as sales or stock prices. Implement sliding windows, LSTM networks, and evaluate forecast accuracy.",
    url: "https://youtu.be/94PlBzgeq90?si=fFk2Yo7F85Krfaaw",
    channel: "TensorFlow Time Series",
  },
  {
    id: "model-deployment-tflite",
    level: "Phase 3 — Advanced",
    title: "TensorFlow Lite Model Deployment",
    description:
      "Optimize and convert a trained TensorFlow model to TensorFlow Lite for mobile or edge deployment. Apply quantization and test fast on-device inference.",
    url: "https://youtu.be/OJnaBhCixng?si=kOqm_nd38Slayak1",
    channel: "TensorFlow Lite Docs",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🤖 TensorFlow Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Carefully selected TensorFlow projects from Beginner → Intermediate → Advanced to become industry-ready.
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

              <p className="mt-2 text-gray-600 text-sm">
                {p.description}
              </p>

              <p className="mt-1 text-gray-500 text-xs">
                Reference: {p.channel}
              </p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Guide ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These 6 projects together cover TensorFlow fundamentals, computer vision, NLP, time-series forecasting, and production deployment.
        </footer>
      </div>
    </section>
  );
}
