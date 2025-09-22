// components/Projects.jsx
import React from "react";

const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "genai-lstm-autocomplete",
    level: "GenAI — Beginner",
    title: "Text Autocomplete with LSTM",
    description:
      "Learn sequence modeling by training an LSTM on text data (e.g., books, scripts) to predict the next word. Covers tokenization and sampling.",
    url: "https://www.youtube.com/watch?v=iIm8acWm1ns" // Generative AI Full Course 2025
  },
  {
    id: "genai-autoencoder-denoiser",
    level: "GenAI — Beginner",
    title: "Image Denoiser with Autoencoders",
    description:
      "Train a convolutional autoencoder to remove noise from images, learning encoder-decoder architecture and reconstruction loss.",
    url: "https://www.youtube.com/watch?v=iIm8acWm1ns" // Included in Full Course
  },

  // ---------- INTERMEDIATE PROJECTS ----------
  {
    id: "genai-stable-diffusion",
    level: "GenAI — Intermediate",
    title: "Text-to-Image Generation (Stable Diffusion)",
    description:
      "Use Stable Diffusion pipeline to generate images from text prompts. Experiment with fine-tuning via DreamBooth or LoRA.",
    url: "https://www.youtube.com/watch?v=pFXVYrdok-Y"
  },
  {
    id: "genai-stable-diffusion-beginner",
    level: "GenAI — Intermediate",
    title: "Stable Diffusion Beginner's Guide",
    description:
      "Learn prompt engineering and basic workflow with Stable Diffusion for creative image generation.",
    url: "https://www.youtube.com/watch?v=TA6Yz7_-OCc"
  },
  {
    id: "genai-rag-chatbot",
    level: "GenAI — Intermediate",
    title: "Domain-Specific RAG Chatbot",
    description:
      "Build a retrieval-augmented chatbot (e.g., Medical FAQ, Programming Tutor) with LLaMA/Mistral + vector DB (FAISS/Pinecone).",
    url: "https://www.youtube.com/watch?v=63B-3rqRFbQ"
  },
  {
    id: "genai-langchain-rag",
    level: "GenAI — Intermediate",
    title: "LangChain Deep Dive RAG",
    description:
      "Hands-on LangChain tutorial for building smarter RAG systems, embeddings, context handling, and memory.",
    url: "https://www.youtube.com/watch?v=My8npHdJORw"
  },

  // ---------- ADVANCED PROJECTS ----------
  {
    id: "genai-advanced-rag",
    level: "GenAI — Advanced",
    title: "Advanced RAG with LangChain & Multi-Source Data",
    description:
      "Chain RAG flows, add external knowledge sources, and handle memory/history for domain-specific assistants.",
    url: "https://www.youtube.com/watch?v=XXa82wxzKuA"
  },
  {
    id: "genai-finetune-sd",
    level: "GenAI — Advanced",
    title: "Fine-Tuning Stable Diffusion (DreamBooth/LoRA)",
    description:
      "Step-by-step tutorial on training and fine-tuning Stable Diffusion for custom text-to-image generation.",
    url: "https://www.youtube.com/watch?v=3YhMf5if0Wk"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧠 Generative AI Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            From beginner sequence models to advanced RAG & fine-tuning — each project includes the latest YouTube tutorial (2025).
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
          Start small, master the foundations, and scale up to industry-level AI systems 🚀
        </footer>
      </div>
    </section>
  );
}
