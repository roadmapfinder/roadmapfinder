"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, Search, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What is TensorFlow and why should I learn it?",
    answer:
      "TensorFlow is an open-source machine learning framework used to build, train, and deploy deep learning models. It’s widely used in industry for Computer Vision, NLP, time-series forecasting, and production-ready AI deployment (mobile, web, and servers).",
    tag: "Getting Started",
  },
  {
    question: "Do I need to learn Deep Learning before TensorFlow?",
    answer:
      "You don’t need to master deep learning first, but you must understand basics like neural networks, loss functions, optimizers, overfitting, and model evaluation. TensorFlow becomes easier when you know what the model is doing internally.",
    tag: "Fundamentals",
  },
  {
    question: "Should I learn Keras or TensorFlow Core first?",
    answer:
      "Start with Keras inside TensorFlow (tf.keras). It’s the industry-standard workflow for building models quickly. Once you're comfortable, learn TensorFlow Core concepts like tf.data pipelines, GradientTape, and custom training loops for advanced projects.",
    tag: "Learning Path",
  },
  {
    question: "What is the difference between TensorFlow and PyTorch?",
    answer:
      "Both are powerful deep learning frameworks. PyTorch is popular in research due to its flexibility, while TensorFlow is highly adopted in production for deployment tools like TensorFlow Serving, TensorFlow Lite, and TensorFlow.js. Learning either makes the other easier.",
    tag: "Comparison",
  },
  {
    question: "How do I know if my model is overfitting?",
    answer:
      "If your training accuracy keeps improving but validation accuracy stops improving or starts dropping, your model is overfitting. Fix it using dropout, data augmentation, early stopping, smaller models, and regularization like L2 weight decay.",
    tag: "Model Training",
  },
  {
    question: "How can I make TensorFlow training faster?",
    answer:
      "Use GPU when available, enable mixed precision training, optimize data pipelines with tf.data (cache, prefetch, batch), reduce image sizes when possible, and use transfer learning to train fewer parameters for faster convergence.",
    tag: "Performance",
  },
  {
    question: "What is tf.data and why is it important?",
    answer:
      "tf.data is TensorFlow’s official input pipeline framework. It helps you build scalable and optimized pipelines for loading, preprocessing, shuffling, batching, and prefetching data—critical for faster training and handling large datasets in real-world projects.",
    tag: "Data Pipeline",
  },
  {
    question: "How do I deploy a TensorFlow model in real life?",
    answer:
      "For servers, export a SavedModel and deploy via TensorFlow Serving or FastAPI. For mobile/edge devices, convert to TensorFlow Lite (.tflite) and use quantization for fast inference. For web apps, use TensorFlow.js to run models in the browser.",
    tag: "Deployment",
  },
  {
    question: "What model format should I save in TensorFlow?",
    answer:
      "Use the TensorFlow SavedModel format for production deployments because it preserves the computation graph and supports TensorFlow Serving. For simple sharing, you can also save as .keras or .h5, but SavedModel is the safest for industry use.",
    tag: "Best Practices",
  },
  {
    question: "What projects should I build to become job-ready in TensorFlow?",
    answer:
      "Build at least 6 projects covering: (1) classification (MNIST), (2) transfer learning image classifier, (3) NLP sentiment analysis, (4) time-series forecasting, (5) TensorFlow Lite deployment, and (6) an end-to-end deployed model using an API + Docker.",
    tag: "Portfolio",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;

    return faqs.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.tag || "").toLowerCase().includes(q)
    );
  }, [query]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            <Sparkles size={16} aria-hidden="true" />
            TensorFlow Learner FAQ
          </div>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to the most common questions about learning TensorFlow
            from beginner to industry-ready.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenIndex(null);
              }}
              placeholder="Search questions (e.g., deployment, tf.data, overfitting)..."
              className="w-full rounded-2xl border border-gray-200 bg-white px-12 py-4 text-sm text-gray-800 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Tip: Try keywords like <span className="font-medium">Keras</span>,{" "}
            <span className="font-medium">transfer learning</span>,{" "}
            <span className="font-medium">TensorFlow Lite</span>,{" "}
            <span className="font-medium">Serving</span>.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
              <p className="text-gray-900 font-semibold">No results found</p>
              <p className="text-gray-600 text-sm mt-1">
                Try searching with different keywords like “model saving” or
                “deployment”.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-semibold text-gray-900">
                          {faq.question}
                        </span>

                        {faq.tag ? (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                            {faq.tag}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-1 text-xs text-gray-500">
                        Tap to {isOpen ? "collapse" : "expand"}
                      </p>
                    </div>

                    <ChevronDown
                      className={`mt-1 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Still confused? Build projects — TensorFlow becomes easy when you
            learn by doing 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
