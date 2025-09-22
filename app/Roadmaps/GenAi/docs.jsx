// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Hugging Face Transformers Documentation",
    description:
      "Full API reference, tutorials for fine-tuning and inference of Transformer-based models (text, vision, audio, multimodal). Includes pipelines, training, quantization, model export, and more.",
    url: "https://huggingface.co/docs/transformers/en/index",
    citation: "Hugging Face",
  },
  {
    title: "Hugging Face Diffusers Documentation",
    description:
      "Official guide and API reference for diffusion models, including pipelines for text-to-image, audio, and video generation. Covers schedulers, training, optimizations, and adapters like LoRA.",
    url: "https://huggingface.co/docs/diffusers/en/index",
    citation: "Hugging Face",
  },
  {
    title: "Hugging Face Hub & API Inference Documentation",
    description:
      "Documentation for hosting, sharing, and serving models via Hugging Face Hub, plus API reference for inference endpoints. Shows authentication, usage patterns, and client integrations.",
    url: "https://huggingface.co/docs",
    citation: "Hugging Face, Postman",
  },
  {
    title: "OpenAI API Reference & Models Documentation",
    description:
      "Official OpenAI API docs including endpoints for LLM and multimodal models (chat, embeddings, completions). Provides examples in Python, Node.js, and cURL with detailed model cards.",
    url: "https://platform.openai.com/docs/api-reference/models",
    citation: "OpenAI Platform",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Generative AI Documentation Sites
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation links for essential Generative AI frameworks,
          APIs, and tools that every learner should know in 2025.
        </p>

        {/* Cards */}
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
