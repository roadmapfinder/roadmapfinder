"use client";
import React from "react";

const AIPyTorchCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          AI Engineering Full Course (PyTorch 2026) — Code With Sagar
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a comprehensive <strong>AI Engineering Full Course using PyTorch</strong> 
          created by <em>Code With Sagar</em>. Delivered as a{" "}
          <strong>one-shot, end-to-end tutorial</strong>, the course is designed to take
          learners from <strong>absolute beginner level</strong> to{" "}
          <strong>advanced, industry-ready AI engineering skills</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The course focuses on <strong>deep learning fundamentals</strong>, hands-on{" "}
          <strong>PyTorch model building</strong>, and real-world{" "}
          <em>computer vision and NLP use cases</em>. It emphasizes practical training,
          coding from scratch, and understanding how AI systems are built and deployed
          in production.
        </p>

        {/* Modules Covered */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Modules Covered
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>AI, Machine Learning & Deep Learning Foundations</strong> — What AI is,
            ML vs DL, real-world AI engineering roles and workflows
          </li>
          <li>
            <strong>Python & PyTorch Setup</strong> — Installing PyTorch, using Google Colab,
            understanding tensors and GPU acceleration
          </li>
          <li>
            <strong>PyTorch Core Concepts</strong> — Tensors, tensor operations, autograd,
            computation graphs, and device management
          </li>
          <li>
            <strong>Neural Network Fundamentals</strong> — Perceptrons, activation functions,
            loss functions, forward & backward propagation
          </li>
          <li>
            <strong>Building Models with PyTorch</strong> — Using <code>nn.Module</code>,
            defining layers, custom training loops, optimizers (SGD, Adam)
          </li>
          <li>
            <strong>Model Training & Evaluation</strong> — Train/validation split, accuracy
            metrics, overfitting, regularization, and checkpoints
          </li>
          <li>
            <strong>Computer Vision with PyTorch</strong> — CNN fundamentals, image
            preprocessing, image classification, transfer learning
          </li>
          <li>
            <strong>Natural Language Processing (NLP)</strong> — Tokenization, embeddings,
            sequence models, text classification pipelines
          </li>
          <li>
            <strong>Advanced Deep Learning Concepts</strong> — Fine-tuning models, improving
            performance, and scaling training workflows
          </li>
          <li>
            <strong>Real-World AI Projects</strong> — End-to-end AI pipelines covering data
            loading, training, testing, and inference
          </li>
          <li>
            <strong>Model Saving & Deployment</strong> — Saving PyTorch models, TorchScript,
            and deploying models using Flask/FastAPI
          </li>
          <li>
            <strong>AI Engineer Roadmap</strong> — Skills required for industry, next steps,
            and career guidance
          </li>
        </ol>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Flow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Start with AI and deep learning fundamentals before jumping into code.</li>
          <li>Follow PyTorch concepts sequentially and implement every example.</li>
          <li>Practice building models from scratch instead of relying only on libraries.</li>
          <li>Rebuild the computer vision and NLP projects independently.</li>
          <li>Extend projects with your own datasets for deeper understanding.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Strong foundation in AI and deep learning concepts.</li>
          <li>Hands-on expertise with PyTorch for model development.</li>
          <li>Ability to build, train, evaluate, and deploy AI models.</li>
          <li>Confidence to work on real-world AI engineering projects.</li>
          <li>Industry-ready understanding of AI workflows and best practices.</li>
        </ul>

        {/* Final Note */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Note
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Code With Sagar’s AI Engineering PyTorch course is a{" "}
          <strong>practical, beginner-to-advanced roadmap</strong> for anyone aspiring
          to become an <strong>AI Engineer</strong>. By combining theory, coding, and
          real-world projects, this course builds a solid foundation for advanced AI
          specialization and professional growth.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Instructor:</strong> Code With Sagar
          </p>
          <p className="mb-1">
            <strong>Course Type:</strong> One-shot full course
          </p>
          <p>
            <strong>Focus:</strong> AI Engineering, PyTorch, Computer Vision, NLP, and Model Deployment
          </p>
        </div>
      </article>
    </div>
  );
};

export default AIPyTorchCourse;
