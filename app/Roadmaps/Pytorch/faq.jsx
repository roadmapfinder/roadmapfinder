// components/PyTorchFAQ.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is PyTorch and why is it widely used in industry?",
    answer:
      "PyTorch is an open-source deep learning framework developed by Meta (Facebook AI). It is widely adopted in industry and research because of its dynamic computation graph, Python-first design, strong GPU support, and excellent ecosystem for computer vision, NLP, and large language models.",
  },
  {
    question: "Do I need prior Machine Learning knowledge before learning PyTorch?",
    answer:
      "Basic Machine Learning concepts such as train-test split, loss functions, overfitting, and evaluation metrics are highly recommended. However, PyTorch itself focuses on deep learning implementation, so you can learn ML fundamentals alongside PyTorch if needed.",
  },
  {
    question: "Is PyTorch better than TensorFlow?",
    answer:
      "Neither is objectively better. PyTorch is preferred for research, rapid prototyping, and modern AI workflows, while TensorFlow is strong in large-scale production ecosystems. Today, PyTorch dominates research, startups, and LLM development, making it extremely valuable for jobs.",
  },
  {
    question: "How long does it take to become job-ready in PyTorch?",
    answer:
      "With consistent practice, most learners can become job-ready in 3–4 months. This includes mastering PyTorch fundamentals, building real-world projects, understanding GPUs, and deploying models using FastAPI or cloud services.",
  },
  {
    question: "Is GPU mandatory for learning PyTorch?",
    answer:
      "A GPU is not mandatory for learning fundamentals. You can start on CPU and later use free GPUs via Google Colab or Kaggle. For large models and faster training, GPU knowledge becomes essential at the intermediate level.",
  },
  {
    question: "What types of jobs require PyTorch skills?",
    answer:
      "PyTorch is used in roles such as Machine Learning Engineer, Deep Learning Engineer, Computer Vision Engineer, NLP Engineer, AI Research Engineer, and LLM Engineer.",
  },
  {
    question: "Should I learn PyTorch Lightning?",
    answer:
      "Yes. PyTorch Lightning is widely used in industry to simplify training loops, enforce best practices, and scale experiments. However, you should first understand raw PyTorch before switching to Lightning.",
  },
  {
    question: "Is PyTorch used for Large Language Models (LLMs)?",
    answer:
      "Yes. Almost all modern LLMs such as GPT, LLaMA, BERT, and T5 are built and fine-tuned using PyTorch. Learning PyTorch is essential for LLM fine-tuning, LoRA, and PEFT workflows.",
  },
  {
    question: "What projects should I build to showcase PyTorch skills?",
    answer:
      "You should build projects covering CNNs, transfer learning, object detection, transformer-based NLP, LLM fine-tuning, and one end-to-end deployed ML product. These demonstrate both depth and production readiness.",
  },
  {
    question: "How important is deployment knowledge with PyTorch?",
    answer:
      "Very important. Industry expects engineers to deploy models, not just train them. You should know FastAPI, Docker, model serialization, and basic cloud deployment to be considered industry-ready.",
  },
];

export default function PyTorchFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ PyTorch FAQs
          </h2>
          <p className="mt-3 text-gray-600">
            Frequently asked questions to help you understand PyTorch, career
            paths, and industry expectations.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          These FAQs are curated based on real-world PyTorch usage, hiring
          expectations, and industry best practices.
        </footer>
      </div>
    </section>
  );
}
