"use client";

import React from "react";
import { BookOpen, Brain, Layers, Cpu } from "lucide-react";

const courseModules = [
  {
    module: "Module 1 — Introduction to Deep Learning",
    icon: <Brain className="w-6 h-6" />,
    topics: [
      "What is Artificial Intelligence (AI)",
      "What is Machine Learning (ML)",
      "What is Deep Learning (DL)",
      "Difference between ML and Deep Learning",
      "Real-world applications of Deep Learning",
      "Why Deep Learning is powerful",
    ],
  },
  {
    module: "Module 2 — Neural Network Fundamentals",
    icon: <Layers className="w-6 h-6" />,
    topics: [
      "Biological inspiration of neural networks",
      "Artificial neuron (Perceptron)",
      "Inputs, weights, bias, and output",
      "Weighted sum and linear transformation",
      "Neural network architecture overview",
    ],
  },
  {
    module: "Module 3 — Activation Functions",
    icon: <Cpu className="w-6 h-6" />,
    topics: [
      "Why activation functions are needed",
      "Sigmoid activation function",
      "Tanh activation function",
      "ReLU (Rectified Linear Unit)",
      "Softmax activation function",
      "Choosing the right activation function",
    ],
  },
  {
    module: "Module 4 — Forward Propagation",
    icon: <Layers className="w-6 h-6" />,
    topics: [
      "How data flows through a neural network",
      "Calculating outputs layer by layer",
      "Prediction generation",
      "Understanding network output",
    ],
  },
  {
    module: "Module 5 — Loss Functions",
    icon: <Brain className="w-6 h-6" />,
    topics: [
      "What is a loss function",
      "Why loss is important",
      "Mean Squared Error (MSE)",
      "Binary Cross Entropy",
      "Categorical Cross Entropy",
    ],
  },
  {
    module: "Module 6 — Backpropagation",
    icon: <Cpu className="w-6 h-6" />,
    topics: [
      "What is backpropagation",
      "Error calculation",
      "Gradient computation",
      "Updating weights and bias",
      "Understanding gradients intuitively",
    ],
  },
  {
    module: "Module 7 — Gradient Descent & Optimization",
    icon: <Layers className="w-6 h-6" />,
    topics: [
      "What is gradient descent",
      "Learning rate concept",
      "Batch gradient descent",
      "Stochastic gradient descent (SGD)",
      "Why optimization matters",
    ],
  },
  {
    module: "Module 8 — Building a Simple Deep Learning Model",
    icon: <BookOpen className="w-6 h-6" />,
    topics: [
      "Preparing dataset",
      "Defining neural network layers",
      "Training the model",
      "Evaluating model performance",
      "Understanding training vs validation",
    ],
  },
  {
    module: "Module 9 — Framework Overview (TensorFlow / Keras)",
    icon: <Cpu className="w-6 h-6" />,
    topics: [
      "What is TensorFlow",
      "What is Keras",
      "Why frameworks are used",
      "High-level vs low-level APIs",
      "Running your first deep learning model",
    ],
  },
  {
    module: "Module 10 — Next Steps in Deep Learning",
    icon: <Brain className="w-6 h-6" />,
    topics: [
      "Introduction to CNNs",
      "Introduction to RNNs",
      "Deep Learning career paths",
      "How to practice Deep Learning",
      "Recommended learning roadmap",
    ],
  },
];

export default function DeepLearningPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Deep Learning One-Shot Course
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A complete beginner-friendly deep learning course covering neural
          networks, activation functions, backpropagation, optimization, and
          real-world fundamentals — structured into clear modules.
        </p>
      </div>

      {/* Modules */}
      <div className="grid gap-8">
        {courseModules.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600">{item.icon}</div>
              <h2 className="text-2xl font-semibold">{item.module}</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
              {item.topics.map((topic, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
