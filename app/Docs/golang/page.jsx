"use client";
import React from "react";

const GolangCodersGyan = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Learn Golang — Coder’s Gyan (Complete Course Overview)
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Golang pathway by Coder’s Gyan</strong>, taught by{" "}
          <strong>Rakesh K</strong>, offers a complete journey into Go. It
          combines <em>free YouTube full courses/tutorials</em> with the upcoming
          paid program <strong>“Learn Golang by building Real-world Projects”</strong>. 
          Together, these resources provide a zero-to-production roadmap for
          backend developers who want to master Go for REST APIs, concurrency,
          and microservices.
        </p>

        {/* Formats Available */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Formats Available
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Free:</strong> YouTube long-form Golang tutorials and full
            courses — cover basics, syntax, and small API demos.
          </li>
          <li>
            <strong>Paid (Upcoming):</strong> “Learn Golang by building
            Real-world Projects” — deeper dive into concurrency, REST APIs,
            databases, and multiple demo projects.
          </li>
        </ul>

        {/* Who is this for */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Who This Is For
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Beginners seeking a structured zero → production Go pathway.</li>
          <li>
            Backend developers aiming for REST APIs, microservices, and
            concurrency with Go.
          </li>
          <li>
            Learners who prefer <strong>build-while-you-learn</strong> projects
            rather than theory-only lectures.
          </li>
        </ul>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Basic programming knowledge (Python, JS, or Java recommended).</li>
          <li>Comfort with the command line and editors (VS Code, GoLand).</li>
          <li>
            For full-stack/project parts: understanding of HTTP, JSON, and
            relational databases.
          </li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Write idiomatic Go programs with modules, packages, and types.</li>
          <li>
            Build concurrent programs with <strong>goroutines</strong> and{" "}
            <strong>channels</strong>.
          </li>
          <li>Implement REST APIs with routing, handlers, and middleware.</li>
          <li>
            Connect to SQL/NoSQL databases and build CRUD backend services.
          </li>
          <li>
            Containerize and deploy Go services with performance monitoring.
          </li>
          <li>Ship multiple real-world projects for your portfolio.</li>
        </ul>

        {/* Course Syllabus */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Structure & Syllabus
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Coder’s Gyan Golang curriculum mixes explicit advertised modules
          (concurrency, REST APIs, projects) with a standard full Go bootcamp
          flow. Below is a practical roadmap:
        </p>

        {/* Module list */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 0 — Orientation & Environment
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Course overview & goals (explicit from course page).</li>
          <li>Install Go, GOPATH vs go.mod, VS Code/GoLand setup.</li>
          <li>Repo organization & git basics.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1 — Go Fundamentals
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Program structure, main() & init().</li>
          <li>Variables, constants, types, control flow.</li>
          <li>Functions, multiple returns, named results.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2 — Composite Types
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Arrays, slices, maps — internals and idioms.</li>
          <li>Strings, runes, and bytes.</li>
          <li>Structs, methods, and pointer receivers.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3 — Interfaces & Design
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Interfaces & implicit implementation.</li>
          <li>Embedding & composition patterns.</li>
          <li>Idiomatic design principles.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4 — Error Handling & Testing
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>error type & wrapping best practices.</li>
          <li>Unit testing, table-driven tests.</li>
          <li>Benchmarks & performance tests.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5 — Concurrency (Explicit)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Goroutines, channels, select, timeouts.</li>
          <li>sync.Mutex, WaitGroup, atomics.</li>
          <li>Worker pools, fan-in/fan-out patterns.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 6 — Networking & APIs
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>net/http basics, handlers, middleware.</li>
          <li>JSON encoding/decoding.</li>
          <li>Routers: gorilla/mux, chi, or Gin.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 7 — Data Persistence
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>SQL drivers, prepared statements, transactions.</li>
          <li>ORMs like GORM and tradeoffs.</li>
          <li>NoSQL examples (Redis, Firestore).</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 8 — Project Architecture
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Project layout (pkg, cmd, internal).</li>
          <li>Services, repositories, DTOs.</li>
          <li>Logging, env config, graceful shutdown.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 9 — Advanced Topics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Generics & reflection basics.</li>
          <li>gRPC client/server (optional).</li>
          <li>Profiling & benchmarking with pprof.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 10 — DevOps & Deployment
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Dockerizing Go apps, multi-stage builds.</li>
          <li>CI/CD basics: test → build → docker.</li>
          <li>Deployment strategies & monitoring.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 11 — Capstone Projects (Explicit)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>REST API with authentication & CRUD.</li>
          <li>Task manager backend with DB.</li>
          <li>Concurrent worker/queue system.</li>
          <li>WebSocket/chat app.</li>
          <li>Microservice demo (Dockerized).</li>
        </ul>

        {/* Example Lessons */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Example Lessons
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Build a Notes REST API:</strong> struct → DB schema → CRUD →
            router → JSON tests → dockerize.
          </li>
          <li>
            <strong>Implement Worker Pool:</strong> goroutine pool with channel
            distribution & graceful shutdown.
          </li>
          <li>
            <strong>Profiling & Optimizing Endpoint:</strong> run pprof →
            identify hotspots → fix slice reuse.
          </li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Coder’s Gyan provides a rare <strong>end-to-end Go pathway</strong> —
          starting with free YouTube content and extending to a project-first
          paid program. If you want to become a <strong>Go backend developer</strong>, 
          this dual approach balances fundamentals with practical, 
          <em>portfolio-ready projects</em>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Rakesh K (Coder’s Gyan)</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube + codersgyan.com</p>
          <p className="mb-1"><strong>Language:</strong> English (with Hindi mix in some videos)</p>
          <p><strong>Level:</strong> Beginner → Intermediate → Advanced</p>
        </div>

      </article>
    </div>
  );
};

export default GolangCodersGyan;
