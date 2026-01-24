// components/TensorFlowDocs.jsx

import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "TensorFlow — Official Website",
    description:
      "Main TensorFlow platform for learning, building, and deploying machine learning models. Includes ecosystem overview, guides, tutorials, community updates, and best practices for modern AI development.",
    url: "https://www.tensorflow.org/",
    citation: "TensorFlow",
  },
  {
    title: "TensorFlow — Learn (Tutorials & Guides)",
    description:
      "Official TensorFlow learning hub with step-by-step tutorials from beginner to advanced. Covers Keras workflows, computer vision, NLP, time-series, training strategies, and practical project-style learning.",
    url: "https://www.tensorflow.org/learn",
    citation: "TensorFlow",
  },
  {
    title: "TensorFlow — Guides (Best Practices)",
    description:
      "Complete official guides for TensorFlow covering model building, training loops, tf.data pipelines, saving/loading, distributed training, debugging, performance optimization, and production workflows.",
    url: "https://www.tensorflow.org/guide",
    citation: "TensorFlow",
  },
  {
    title: "TensorFlow — API Documentation",
    description:
      "Full TensorFlow API reference for every function, module, and class. Essential for developers to understand TensorFlow operations, layers, models, data pipelines, and deployment tools with accurate syntax and examples.",
    url: "https://www.tensorflow.org/api_docs",
    citation: "TensorFlow",
  },
  {
    title: "Keras — Official Documentation",
    description:
      "Official Keras documentation for building deep learning models with a clean and high-level API. Covers Sequential & Functional APIs, layers, callbacks, training, metrics, custom models, and real-world best practices.",
    url: "https://keras.io/",
    citation: "Keras",
  },
  {
    title: "TensorFlow — Keras Guide",
    description:
      "TensorFlow’s official Keras guide for modern deep learning development. Covers model.compile(), model.fit(), callbacks, custom training loops, subclassing, saving/loading, and recommended production workflows.",
    url: "https://www.tensorflow.org/guide/keras",
    citation: "TensorFlow",
  },
  {
    title: "LiteRT (TensorFlow Lite) — Official Edge Docs",
    description:
      "Official LiteRT documentation for deploying TensorFlow models to mobile and edge devices. Covers model conversion, quantization, optimization, and efficient on-device inference for real-time AI apps.",
    url: "https://ai.google.dev/edge/litert",
    citation: "Google AI Edge",
  },
  {
    title: "TensorFlow Lite — Python API Reference",
    description:
      "Official TensorFlow Lite Python API documentation for converting, optimizing, and running lightweight inference pipelines. Covers converters, interpreters, quantization methods, and deployment workflows.",
    url: "https://www.tensorflow.org/api_docs/python/tf/lite",
    citation: "TensorFlow Lite",
  },
  {
    title: "TensorFlow Serving — Official Guide",
    description:
      "Production-grade TensorFlow Serving documentation for deploying and serving trained models at scale. Covers model versioning, configuration, REST/gRPC serving, container deployment, and high-performance inference setups.",
    url: "https://www.tensorflow.org/tfx/guide/serving",
    citation: "TensorFlow Serving",
  },
  {
    title: "TensorFlow Serving — REST API Documentation",
    description:
      "Official REST API documentation for TensorFlow Serving. Learn how to send inference requests, structure JSON payloads, handle predictions, manage endpoints, and integrate serving into real-world applications.",
    url: "https://www.tensorflow.org/tfx/serving/api_rest",
    citation: "TensorFlow Serving",
  },
  {
    title: "TensorFlow Serving — REST Simple Tutorial",
    description:
      "End-to-end official tutorial showing how to export a TensorFlow model and deploy it with TensorFlow Serving using REST APIs. Perfect for learning real deployment flow from training → production inference.",
    url: "https://www.tensorflow.org/tfx/tutorials/serving/rest_simple",
    citation: "TensorFlow Tutorials",
  },
  {
    title: "TensorFlow.js — Official Documentation",
    description:
      "Official TensorFlow.js documentation for running machine learning in the browser and Node.js. Covers model training, transfer learning, pre-trained models, deployment, and building real-time AI web apps.",
    url: "https://www.tensorflow.org/js",
    citation: "TensorFlow.js",
  },
  {
    title: "TensorFlow — Libraries & Extensions",
    description:
      "Official TensorFlow ecosystem page listing key libraries and extensions for specialized workflows including TensorFlow Hub, TensorFlow Addons, TFX, and tools for computer vision, NLP, and production pipelines.",
    url: "https://www.tensorflow.org/resources/libraries-extensions",
    citation: "TensorFlow Ecosystem",
  },
];

export default function TensorFlowDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 TensorFlow Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official TensorFlow documentation links every learner must know — from
          TensorFlow core fundamentals and Keras model building to deployment
          using TensorFlow Lite, TensorFlow Serving, and TensorFlow.js.
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
