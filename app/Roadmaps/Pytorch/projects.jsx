"use client"

import React from "react";

const projects = [
  // ---------- PHASE 1 — FOUNDATIONAL PROJECTS ----------
  {
    id: "phase1-cnn-classifier",
    level: "Phase 1 — Beginner",
    title: "Image Classification with Custom CNN",
    description:
      "Build an image classification model from scratch using PyTorch. Implement custom CNN layers, training and validation loops, data augmentation, and evaluate performance on datasets like CIFAR-10 or Fashion-MNIST.",
    url: "https://youtu.be/CtzfbUwrYGI?si=HDcs0QNdTfuMwYeZ",
  },
  {
    id: "phase1-training-loop",
    level: "Phase 1 — Beginner",
    title: "PyTorch Training Loop from Scratch",
    description:
      "Implement a complete deep learning training pipeline including loss calculation, backpropagation, optimizer steps, validation, checkpointing, and early stopping using pure PyTorch.",
    url: "https://youtu.be/tHL5STNJKag?si=B1k73htBkw79gMxC",
  },

  // ---------- PHASE 2 — INTERMEDIATE PROJECTS ----------
  {
    id: "phase2-transfer-learning",
    level: "Phase 2 — Intermediate",
    title: "Transfer Learning with ResNet / EfficientNet",
    description:
      "Build a production-style image classifier using pretrained models. Learn layer freezing, fine-tuning, learning-rate scheduling, and model versioning for real-world datasets.",
    url: "https://youtu.be/K0lWSB2QoIQ?si=mO58Hnq_FvDbrZf2",
  },
  {
    id: "phase2-object-detection",
    level: "Phase 2 — Intermediate",
    title: "Object Detection System using PyTorch",
    description:
      "Create an object detection pipeline using TorchVision or YOLO (PyTorch-based). Train on a custom dataset, evaluate using IoU and mAP, and perform real-time inference.",
    url: "https://youtu.be/l0w-neGG2R8?si=LE8Dg8dmku28ajkv",
  },

  // ---------- PHASE 3 — ADVANCED PROJECTS ----------
  {
    id: "phase3-nlp-transformer",
    level: "Phase 3 — Advanced",
    title: "Text Classification with Transformers (BERT)",
    description:
      "Fine-tune a Transformer-based NLP model using PyTorch and Hugging Face. Build an end-to-end text classification system with tokenization, metrics, and inference pipeline.",
    url: "https://youtu.be/8N-nM3QW7O0?si=6GaLz6SnykVJbmjS",
  },
  {
    id: "phase3-llm-deployment",
    level: "Phase 3 — Advanced",
    title: "LLM Fine-Tuning & Deployment with PyTorch",
    description:
      "Fine-tune a small LLM using LoRA/PEFT and deploy it as a REST API using FastAPI. Include model saving, Dockerization, and optimized inference for production use.",
    url: "https://youtu.be/bZcKYiwtw1I?si=t_UByH_nhMhNY5JY",
  },
];

export default function PyTorchProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🔥 PyTorch Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Six hands-on PyTorch projects designed to take you from beginner to
            industry-ready Deep Learning & AI Engineer.
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
          Completing all six projects proves strong PyTorch fundamentals,
          real-world deep learning skills, and production deployment readiness.
        </footer>
      </div>
    </section>
  );
}
