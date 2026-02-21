"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "semantic-search-engine",
    level: "Phase 1 — Beginner",
    title: "Semantic Search Engine",
    description:
      "Build a semantic search system using vector embeddings instead of keyword matching. Learn text chunking, embedding generation, cosine similarity, and nearest-neighbor retrieval.",
    url: "https://www.pinecone.io/learn/vector-database/",
    channel: "Vector DB Fundamentals",
  },
  {
    id: "basic-vector-indexing",
    level: "Phase 1 — Beginner",
    title: "Vector Indexing & Similarity Search",
    description:
      "Implement basic vector indexing and similarity search using an ANN library. Understand distance metrics, recall@K, indexing trade-offs, and query latency.",
    url: "https://faiss.ai/",
    channel: "FAISS Documentation",
  },

  // Phase 2 — Intermediate
  {
    id: "rag-qa-system",
    level: "Phase 2 — Intermediate",
    title: "Retrieval-Augmented Generation (RAG) System",
    description:
      "Build a RAG pipeline where an LLM answers questions using documents retrieved from a vector database. Learn chunking strategies, retrievers, prompt injection, and evaluation.",
    url: "https://docs.langchain.com/",
    channel: "LangChain Docs",
  },
  {
    id: "recommendation-system-vectors",
    level: "Phase 2 — Intermediate",
    title: "Recommendation System Using Embeddings",
    description:
      "Create a personalized recommendation engine using user and item embeddings. Implement nearest-neighbor recommendations, real-time updates, and cold-start handling.",
    url: "https://redis.io/docs/stack/search/vectors/",
    channel: "Redis Vector Search",
  },

  // Phase 3 — Advanced
  {
    id: "hybrid-search-engine",
    level: "Phase 3 — Advanced",
    title: "Hybrid Search Engine (Keyword + Vector)",
    description:
      "Combine traditional keyword search (BM25) with vector similarity search. Build re-ranking logic, hybrid scoring, and evaluate precision vs recall trade-offs.",
    url: "https://weaviate.io/developers",
    channel: "Weaviate Hybrid Search",
  },
  {
    id: "distributed-vector-db",
    level: "Phase 3 — Advanced",
    title: "Production-Scale Distributed Vector Database",
    description:
      "Design and deploy a production-ready vector database handling millions of embeddings. Implement sharding, replication, monitoring, load testing, and performance tuning.",
    url: "https://milvus.io/docs",
    channel: "Milvus Production Docs",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧠 Vector Database Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Carefully selected Vector Database projects from Beginner →
            Intermediate → Advanced to become industry-ready in semantic search,
            RAG systems, and large-scale AI infrastructure.
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

              <p className="mt-2 text-gray-600 text-sm">
                {p.description}
              </p>

              <p className="mt-1 text-gray-500 text-xs">
                Reference: {p.channel}
              </p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Guide ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These 6 projects together cover vector embeddings, ANN search,
          retrieval-augmented generation, recommendation systems, hybrid search,
          and production-scale vector database design.
        </footer>
      </div>
    </section>
  );
}