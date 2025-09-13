"use client";
import React from "react";

const VectorSearchRAGCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-600 pb-4">
          Vector Search and RAG Tutorial – Combine Your Data with LLMs
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A{" "}
          <strong>1 hr 12 min intermediate-level tutorial</strong> taught by{" "}
          <em>Beau Carnes (freeCodeCamp.org)</em>. This course introduces{" "}
          <strong>vector embeddings, semantic search, and Retrieval Augmented
          Generation (RAG)</strong>, with three hands-on projects demonstrating
          real-world use cases of combining your data with{" "}
          <abbr title="Large Language Models">LLMs</abbr>.
        </p>

        {/* Modules & Projects */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Modules / Projects Covered
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Foundational Concepts</strong> — What embeddings are, how
            vector search works, why RAG matters, and how LLMs can be combined
            with your own data.
          </li>
          <li>
            <strong>Atlas Vector Search</strong> — Practical introduction to
            MongoDB Atlas Vector Search service for similarity search and
            integration with LLMs.
          </li>
          <li>
            <strong>Project 1: Semantic Search for Movies</strong> — Build a
            natural language search app over a movie dataset (e.g., query:
            “thriller with a female lead”).
          </li>
          <li>
            <strong>Project 2: Question Answering App with RAG</strong> — Create
            an app that retrieves documents as context (using Atlas Vector
            Search + LangChain + OpenAI) to answer user questions.
          </li>
          <li>
            <strong>Project 3: Chatbot over freeCodeCamp Docs</strong> — Extend
            a ChatGPT-style interface to answer questions specifically grounded
            in freeCodeCamp curriculum documentation (adaptable to your own
            data).
          </li>
        </ol>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Start with theoretical grounding: embeddings, similarity, and RAG
            workflow.
          </li>
          <li>
            Follow along coding demos in Python, integrating Atlas Vector Search
            with LLM APIs.
          </li>
          <li>
            Complete three projects step-by-step to reinforce learning with
            practical applications.
          </li>
          <li>
            Experiment by adapting the chatbot/document RAG project to your own
            datasets.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes / What You’ll Be Able To Do
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Understand how <strong>vector embeddings</strong> and{" "}
            <strong>semantic similarity search</strong> work.
          </li>
          <li>
            Implement <strong>MongoDB Atlas Vector Search</strong> in real
            projects.
          </li>
          <li>
            Build working RAG applications for{" "}
            <em>semantic search, Q&amp;A systems, and chatbots</em>.
          </li>
          <li>
            Apply RAG techniques to your own data, enabling domain-specific LLM
            capabilities.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default VectorSearchRAGCourse;
