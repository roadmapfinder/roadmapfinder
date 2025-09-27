// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "The Rust Programming Language (The Book)",
    description:
      "Primary resource for learning Rust, covering basics to advanced topics like ownership, concurrency, and error handling. Updated for Rust 2024 edition.",
    url: "https://doc.rust-lang.org/book/",
    citation: "The Rust Book",
  },
  {
    title: "Rustlings",
    description:
      "Interactive exercises to get familiar with Rust syntax and concepts. Ideal for hands-on practice.",
    url: "https://github.com/rust-lang/rustlings",
    citation: "Rustlings",
  },
  {
    title: "Rust By Example",
    description:
      "A collection of runnable examples illustrating Rust concepts and standard libraries. Great for learning by doing.",
    url: "https://doc.rust-lang.org/rust-by-example/",
    citation: "Rust By Example",
  },
  {
    title: "Cargo Book",
    description:
      "Official guide to Cargo, Rust’s package manager and build system. Learn dependency management, testing, and project builds.",
    url: "https://doc.rust-lang.org/cargo/",
    citation: "Cargo Book",
  },
  {
    title: "Rust Standard Library",
    description:
      "Comprehensive documentation of Rust's standard library, including modules, macros, and traits. Essential for using built-in functionalities.",
    url: "https://doc.rust-lang.org/std/",
    citation: "Rust Standard Library",
  },
  {
    title: "Rust Reference",
    description:
      "Primary reference for the Rust language, detailing syntax, semantics, and language constructs.",
    url: "https://doc.rust-lang.org/reference/",
    citation: "Rust Reference",
  },
  {
    title: "Rustdoc Book",
    description:
      "Guide on writing documentation for Rust code using rustdoc, including best practices.",
    url: "https://doc.rust-lang.org/rustdoc/how-to-write-documentation.html",
    citation: "Rustdoc Book",
  },
  {
    title: "Rust Playground",
    description:
      "Online editor to write, run, and share Rust code snippets instantly. Perfect for experimentation.",
    url: "https://play.rust-lang.org/",
    citation: "Rust Playground",
  },
  {
    title: "Get Started with Rust",
    description:
      "Official guide for installing Rust and setting up your development environment.",
    url: "https://www.rust-lang.org/learn/get-started",
    citation: "Rust Getting Started",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Rust Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official Rust documentation every learner should follow — from core concepts and exercises to tooling, standard library, and online playgrounds.
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
