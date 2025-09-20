// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "scikit-learn Documentation",
    description:
      "Go-to library for classical ML — regression, classification, clustering, preprocessing, pipelines.",
    url: "https://scikit-learn.org/",
    citation: "scikit-learn Docs",
  },
  {
    title: "TensorFlow Documentation",
    description:
      "End-to-end ML platform covering Keras, data pipelines, TensorBoard, deployment, and production ML.",
    url: "https://www.tensorflow.org/",
    citation: "TensorFlow Docs",
  },
  {
    title: "PyTorch Documentation",
    description:
      "Dynamic neural network framework for deep learning research, training, and deployment.",
    url: "https://pytorch.org/",
    citation: "PyTorch Docs",
  },
  {
    title: "Hugging Face Transformers",
    description:
      "State-of-the-art LLMs and NLP tools — models, datasets, pipelines, fine-tuning, and hub integrations.",
    url: "https://huggingface.co/docs",
    citation: "Hugging Face Docs",
  },
  {
    title: "XGBoost Documentation",
    description:
      "High-performance gradient boosting framework widely used for structured/tabular data.",
    url: "https://xgboost.readthedocs.io/",
    citation: "XGBoost Docs",
  },
  {
    title: "LightGBM Documentation",
    description:
      "Microsoft’s efficient, scalable gradient boosting framework for ML competitions and production.",
    url: "https://lightgbm.readthedocs.io/",
    citation: "LightGBM Docs",
  },
  {
    title: "CatBoost Documentation",
    description:
      "Gradient boosting library by Yandex with strong categorical feature support and robust defaults.",
    url: "https://catboost.ai/",
    citation: "CatBoost Docs",
  },
  {
    title: "MLflow Documentation",
    description:
      "Platform for experiment tracking, packaging, model registry, deployment, and MLOps pipelines.",
    url: "https://mlflow.org/docs/",
    citation: "MLflow Docs",
  },
  {
    title: "NIST AI RMF 1.0",
    description:
      "Risk management framework for trustworthy, explainable, fair, and safe AI systems.",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
    citation: "NIST AI RMF",
  },
  {
    title: "Google Cloud AI & Vertex AI",
    description:
      "Managed ML and AI services — Vertex AI, model training, deployment, pre-trained APIs, MLOps.",
    url: "https://cloud.google.com/docs/ai-ml",
    citation: "Google Cloud Docs",
  },
  {
    title: "AWS Machine Learning & SageMaker",
    description:
      "Amazon’s docs for ML services — SageMaker training, deployment, integrations with TF/PyTorch.",
    url: "https://docs.aws.amazon.com/machine-learning/",
    citation: "AWS ML Docs",
  },
  {
    title: "Databricks Mosaic AI",
    description:
      "Docs for unified data + AI lifecycle: feature engineering, ML training, fine-tuning, and deployment.",
    url: "https://docs.databricks.com/machine-learning.html",
    citation: "Databricks Docs",
  },
  {
    title: "Apple Developer — Machine Learning",
    description:
      "Official docs for Core ML, Create ML, and on-device ML across Apple platforms.",
    url: "https://developer.apple.com/machine-learning/",
    citation: "Apple Developer Docs",
  },
  {
    title: "Microsoft ML.NET",
    description:
      ".NET-native machine learning framework — AutoML, NLP, vision, recommendations in C#/F#.",
    url: "https://dotnet.microsoft.com/en-us/apps/ai/ml-dotnet",
    citation: "ML.NET Docs",
  },
  {
    title: "Google — Rules of Machine Learning",
    description:
      "Industry best practices for ML system design, evaluation, project organization, and technical debt.",
    url: "https://developers.google.com/machine-learning/guides/rules-of-ml",
    citation: "Google ML Guide",
  },
  {
    title: "IBM AI Frameworks Overview",
    description:
      "IBM Think article on AI frameworks, tooling ecosystem, model governance, and enterprise AI design.",
    url: "https://www.ibm.com/think/topics/ai-frameworks",
    citation: "IBM AI Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 AIML Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every AI/ML learner must
          know — from classical ML libraries to deep learning, LLMs, MLOps, and
          responsible AI.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
