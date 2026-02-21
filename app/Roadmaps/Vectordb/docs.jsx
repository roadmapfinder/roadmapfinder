// components/VectorDatabaseDocs.jsx

import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Vector Databases — Conceptual Overview",
    description:
      "Foundational concepts behind vector databases including embeddings, similarity search, ANN algorithms, indexing strategies, and real-world AI use cases such as semantic search, RAG, and recommendations.",
    url: "https://www.pinecone.io/learn/vector-database/",
    citation: "Vector DB Fundamentals",
  },
  {
    title: "Pinecone — Official Documentation",
    description:
      "Official Pinecone documentation covering vector indexing, namespaces, metadata filtering, scaling, hybrid search, and production-grade vector database usage for AI applications.",
    url: "https://docs.pinecone.io/",
    citation: "Pinecone",
  },
  {
    title: "Milvus — Official Documentation",
    description:
      "Milvus official docs covering distributed vector databases, indexing algorithms (HNSW, IVF, PQ), GPU acceleration, clustering, replication, and large-scale similarity search systems.",
    url: "https://milvus.io/docs",
    citation: "Milvus",
  },
  {
    title: "Qdrant — Official Documentation",
    description:
      "Qdrant documentation for building high-performance vector search systems with filtering, payload indexing, HNSW graphs, REST/gRPC APIs, and production deployments.",
    url: "https://qdrant.tech/documentation/",
    citation: "Qdrant",
  },
  {
    title: "Weaviate — Official Documentation",
    description:
      "Weaviate docs covering schema-based vector storage, hybrid search (BM25 + vectors), modules for embeddings, GraphQL APIs, and scalable AI-powered search systems.",
    url: "https://weaviate.io/developers",
    citation: "Weaviate",
  },
  {
    title: "pgvector — PostgreSQL Vector Extension",
    description:
      "Official pgvector documentation for storing and querying vector embeddings inside PostgreSQL using cosine similarity, L2 distance, and inner product with SQL-native workflows.",
    url: "https://github.com/pgvector/pgvector",
    citation: "pgvector",
  },
  {
    title: "Redis Vector Search — Official Docs",
    description:
      "Redis Stack documentation for vector similarity search using HNSW indexing, hybrid queries, metadata filtering, and real-time low-latency AI applications.",
    url: "https://redis.io/docs/stack/search/vectors/",
    citation: "Redis Vector Search",
  },
  {
    title: "FAISS — Similarity Search Library",
    description:
      "FAISS official documentation for high-performance similarity search and clustering of dense vectors, widely used as the core engine behind many vector databases.",
    url: "https://faiss.ai/",
    citation: "FAISS",
  },
  {
    title: "Chroma — Vector Database Documentation",
    description:
      "Chroma documentation for lightweight vector storage focused on LLM applications, RAG pipelines, embedding management, and rapid prototyping workflows.",
    url: "https://docs.trychroma.com/",
    citation: "ChromaDB",
  },
  {
    title: "OpenAI — Embeddings API Documentation",
    description:
      "Official OpenAI embeddings documentation explaining how to generate high-quality vector embeddings for text, search, clustering, and retrieval-augmented generation systems.",
    url: "https://platform.openai.com/docs/guides/embeddings",
    citation: "OpenAI",
  },
  {
    title: "Hugging Face — Sentence Transformers",
    description:
      "Official documentation for sentence-transformers covering embedding models, fine-tuning, semantic similarity, clustering, and production-ready NLP embedding pipelines.",
    url: "https://www.sbert.net/",
    citation: "Hugging Face",
  },
  {
    title: "LangChain — Vector Stores & Integrations",
    description:
      "LangChain documentation for integrating vector databases with LLMs, building RAG pipelines, retrievers, memory systems, and end-to-end AI applications.",
    url: "https://docs.langchain.com/",
    citation: "LangChain",
  },
  {
    title: "Haystack — Retrieval & Vector Search",
    description:
      "Haystack official documentation for building production-grade search, QA systems, RAG pipelines, and vector-based retrieval workflows.",
    url: "https://docs.haystack.deepset.ai/",
    citation: "Haystack",
  },
];

export default function VectorDatabaseDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Vector Database — Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Curated official documentation links every Vector Database learner
          must know — from embeddings and ANN search fundamentals to
          production-grade vector stores and RAG systems.
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

              <p className="mt-3 text-sm text-gray-600">
                {doc.description}
              </p>

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