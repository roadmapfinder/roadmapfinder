// components/FAQ.jsx
import React from "react";

const faqs = [
  {
    question: "What is Go and why should I learn it?",
    answer:
      "Go, also known as Golang, is an open-source programming language designed for simplicity, concurrency, and performance. It’s widely used for backend services, cloud infrastructure, and distributed systems."
  },
  {
    question: "How do I install Go and set up my workspace?",
    answer:
      "Download Go from the official site (https://go.dev/dl/). Set up the PATH environment variable, and use modules (`go mod init`) for dependency management. The GOPATH workspace is mostly replaced by modules."
  },
  {
    question: "What are goroutines and channels?",
    answer:
      "Goroutines are lightweight threads managed by the Go runtime for concurrent execution. Channels are used to safely communicate between goroutines and synchronize execution."
  },
  {
    question: "How is error handling done in Go?",
    answer:
      "Go uses explicit error handling. Functions often return an `error` value that must be checked. There are no exceptions like in Java or Python, which encourages clear and predictable error handling."
  },
  {
    question: "What is the difference between slices and arrays?",
    answer:
      "Arrays have a fixed size defined at compile time, while slices are dynamic, flexible views over arrays. Slices provide length, capacity, and allow easy append operations."
  },
  {
    question: "What is an interface in Go?",
    answer:
      "An interface defines a set of method signatures. Any type that implements those methods satisfies the interface implicitly. Interfaces enable polymorphism without inheritance."
  },
  {
    question: "How do I test Go code?",
    answer:
      "Go provides the `testing` package. Create `_test.go` files with functions starting with `Test` for unit tests. You can also write benchmarks and fuzz tests using `testing.B` and fuzzing support."
  },
  {
    question: "How do Go modules work?",
    answer:
      "Modules (`go.mod`) are the official way to manage dependencies. They specify project requirements and versions. Use `go get` to fetch dependencies and `go mod tidy` to clean unused ones."
  },
  {
    question: "When should I use gRPC vs REST in Go?",
    answer:
      "Use REST for simplicity and browser-based clients; use gRPC for high-performance, strongly-typed communication between microservices, streaming data, or low-latency requirements."
  },
  {
    question: "How do I deploy Go applications to production?",
    answer:
      "Compile your Go app into a static binary. Use Docker for containerization, deploy to Kubernetes or cloud platforms, set up CI/CD pipelines, monitoring, logging, and observability with Prometheus/OpenTelemetry."
  }
];

export default function FAQ() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Go FAQs — Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Answers to common questions that every Go learner should know.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Master Go by understanding concepts, practicing projects, and reading official documentation 🚀
        </footer>
      </div>
    </section>
  );
}
