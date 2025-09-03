"use client";
import React from "react";

const GenerativeAiFullCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-4">
          Generative AI Full Course – Gemini Pro, OpenAI, Llama, LangChain, Pinecone, Vector Databases & More
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>comprehensive Generative AI course</strong> available for free on{" "}
          <strong>YouTube by freeCodeCamp</strong>. The series takes a deep dive into{" "}
          <em>modern generative AI models, frameworks, and architectures</em>, equipping learners with the
          knowledge to build real-world AI-driven applications.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Detailed Content Breakdown
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1: Introduction to Modern Generative Models</strong> — Overview of{" "}
            <em>Gemini Pro, OpenAI (GPT-4, DALL·E), and the Llama family</em>.
          </li>
          <li>
            <strong>Module 2: Foundation with LangChain</strong> — Learn to build AI workflows including{" "}
            <em>prompt engineering, chaining, memory, and agents</em>.
          </li>
          <li>
            <strong>Module 3: Vector Databases & Retrieval</strong> — Understanding{" "}
            <em>embeddings, Pinecone, and retrieval-augmented generation (RAG)</em>.
          </li>
          <li>
            <strong>Module 4: Model Integration and Comparison</strong> — Practical use cases for{" "}
            <em>Gemini Pro, OpenAI endpoints, and Llama models</em>, with insights into{" "}
            <strong>trade-offs and selection criteria</strong>.
          </li>
          <li>
            <strong>Module 5: Real-World GenAI Architectures</strong> — Designing pipelines that{" "}
            <em>combine LLMs, vector DB retrieval, and scalable frameworks</em> for production-ready AI systems.
          </li>
        </ul>

        {/* Suggested Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Begin with <strong>model introductions</strong> to understand the capabilities of Gemini, OpenAI, and Llama.</li>
          <li>Practice <strong>LangChain workflows</strong> by building small chain-based projects.</li>
          <li>Experiment with <strong>Pinecone</strong> for retrieval-augmented generation tasks.</li>
          <li>Compare and contrast <strong>different models</strong> in real scenarios to learn their strengths.</li>
          <li>Build a <strong>mini GenAI pipeline</strong> integrating LLMs, vector DBs, and application logic.</li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Solid understanding of <strong>modern Generative AI models</strong> and their applications.</li>
          <li>Ability to <strong>design LangChain workflows</strong> with prompts, chains, and agents.</li>
          <li>Hands-on experience using <strong>vector databases like Pinecone</strong> for RAG systems.</li>
          <li>Confidence to <strong>integrate multiple models</strong> (Gemini, GPT, Llama) into practical projects.</li>
          <li>Skills to architect and deploy <strong>production-ready Generative AI applications</strong>.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Generative AI Full Course by freeCodeCamp</strong> is a{" "}
          <em>deep, end-to-end guide</em> that balances theoretical clarity with practical implementations. 
          Covering everything from <strong>Gemini Pro</strong> to <strong>LangChain and Pinecone</strong>, 
          it is one of the most comprehensive free resources for mastering the modern Generative AI ecosystem.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> freeCodeCamp (Guest Experts)
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Language:</strong> English
          </p>
          <p>
            <strong>Level:</strong> Beginner → Advanced
          </p>
        </div>
      </article>
    </div>
  );
};

export default GenerativeAiFullCourse;
