// components/Projects.jsx
"use client"
import React from "react";

const projects = [
  {
    id: "phase1-eda",
    level: "Phase 1 — Beginner",
    title: "Exploratory Data Analysis (EDA Project)",
    description:
      "Analyze real datasets (Titanic, Housing Prices) with Pandas, NumPy, Matplotlib/Seaborn/Plotly. Learn how data exploration drives insights — since 80% of ML work is data understanding.",
    url: "https://youtu.be/a2BDULHeb_8?si=nwFaa40T9nzqZ9L-" // Krish Naik EDA Tutorial
  },
  {
    id: "phase1-mlmodel",
    level: "Phase 1 — Beginner",
    title: "Predictive ML Model (Regression + Classification)",
    description:
      "Build two ML pipelines — one regression (house price prediction) and one classification (loan approval). Learn Scikit-learn, feature engineering, hyperparameter tuning, and evaluation.",
    url: "https://youtu.be/iRCaMnR_bpA?si=-hg0f752hpR9hQuF" // Krish Naik ML Project
  },
  {
    id: "phase2-mlpipeline",
    level: "Phase 2 — Intermediate",
    title: "End-to-End ML Pipeline with Automation",
    description:
      "Use customer churn or fraud detection dataset to build preprocessing, training, evaluation, and automated retraining pipelines. Learn MLflow, Scikit-learn pipelines, and Docker.",
    url: "https://youtu.be/HZ9MUzCRlzI?si=WLXYxUK7Vka9Z6-1" // End-to-End ML pipeline tutorial
  },
  {
    id: "phase2-nlp",
    level: "Phase 2 — Intermediate",
    title: "NLP Text Classifier (Sentiment / Spam Filter)",
    description:
      "Train a text classification model from scratch and fine-tune with transformers. Covers tokenization, BERT, HuggingFace, NLTK/spaCy for sentiment analysis or spam detection.",
    url: "https://youtu.be/Qbd7U9F0QQ8?si=YEzAKoBFGmMzxV5d" // HuggingFace Sentiment Analysis
  },
  {
    id: "phase2-cv",
    level: "Phase 2 — Intermediate",
    title: "Computer Vision — Image Classifier",
    description:
      "Build a CNN on CIFAR-10 or apply transfer learning (ResNet/MobileNet). Learn PyTorch/TensorFlow, CNNs, data augmentation, and transfer learning best practices.",
    url: "https://youtu.be/0K4J_PTgysc?si=17cw-FUd_YxY_KTA" // CNN Image Classification
  },
  {
    id: "phase3-recommender",
    level: "Phase 3 — Advanced",
    title: "Recommendation System (Personalized AI)",
    description:
      "Build a movie/music/product recommender using collaborative filtering, content-based filtering, and embeddings. Learn matrix factorization and nearest neighbor search.",
    url: "https://youtu.be/7rEagFH9tQg?si=Zb7RK9ZYIVJKDF2M" // Krish Naik Recommender Tutorial
  },
  {
    id: "phase3-ragchatbot",
    level: "Phase 3 — Advanced",
    title: "AI Agent — RAG Chatbot",
    description:
      "Build a chatbot that answers domain-specific questions (PDFs, docs, FAQs). Learn LangChain, vector databases (Pinecone/FAISS), and LLM fine-tuning for retrieval-augmented generation.",
    url: "https://youtu.be/GL5jYuQ8j3c?si=NjK8m2tq-RzSRmJi" // LangChain RAG tutorial
  },
  {
    id: "phase4-mlops",
    level: "Phase 4 — Expert",
    title: "MLOps — Deploy ML Model to Production",
    description:
      "Train a model, containerize with Docker, deploy via FastAPI/Flask, and set up CI/CD. Learn Kubernetes basics and cloud deployment (AWS/GCP/Azure).",
    url: "https://youtu.be/-dJPoLm_gtE?si=tcuvPkU_OQRR2cE0" // Krish Naik MLOps tutorial
  },
  {
    id: "phase4-multimodal",
    level: "Phase 4 — Expert",
    title: "AI Product — Multi-Modal App",
    description:
      "Build an AI system that takes text + image input (captioning, search with image+text). Learn CLIP, multimodal embeddings, PyTorch Lightning, and API integration.",
    url: "https://youtu.be/-vJ2-0RXkmk?si=5WeSJ7z2Nbfw9nJ8" // CLIP Multimodal tutorial
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🤖 AI/ML Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to expert AI/ML projects, with curated tutorials (latest 2025).
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
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, code along, customize, and deploy projects.
          Document them well and polish top 2–3 into portfolio-ready case studies.
        </footer>
      </div>
    </section>
  );
}
