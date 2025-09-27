import React from "react";

export default function NestJsCourseCodersGyan() {
  const course = {
    title: "Nest.js Crash Course 2025 — Coder’s Gyan",
    description:
      "A beginner-friendly crash course video by Coder’s Gyan, focused on building a complete authentication system step by step using Nest.js. It introduces Nest.js fundamentals (controllers, modules, services, guards) and demonstrates how to organize a real-world project. While it’s a crash course, we’ve expanded the outline to show what a full Nest.js course would typically include.",
    modules: [
      {
        title: "Introduction & Setup",
        topics: [
          "What is Nest.js and why use it?",
          "Installing Nest CLI",
          "Creating a new Nest.js project",
          "Understanding project scaffolding and structure",
        ],
      },
      {
        title: "Controllers & Routing",
        topics: [
          "Handling HTTP requests",
          "Route parameters & query params",
          "Request bodies & responses",
          "Status codes & response handling",
        ],
      },
      {
        title: "Providers, Services & Dependency Injection",
        topics: [
          "Creating and injecting services",
          "Understanding provider scopes",
          "Using custom providers",
        ],
      },
      {
        title: "Modules",
        topics: [
          "Organizing features into modules",
          "Imports and exports between modules",
          "Dynamic modules",
        ],
      },
      {
        title: "DTOs & Validation / Pipes",
        topics: [
          "Working with Data Transfer Objects (DTOs)",
          "Using class-validator & class-transformer",
          "Built-in pipes & custom pipes",
        ],
      },
      {
        title: "Exception Filters & Error Handling",
        topics: [
          "Built-in exception filters",
          "Creating custom filters",
          "Applying global filters",
        ],
      },
      {
        title: "Guards & Authorization",
        topics: [
          "Introduction to Guards",
          "Role-based access control (RBAC)",
          "Policy-based access",
          "Integrating with auth flows",
        ],
      },
      {
        title: "Interceptors & Middleware",
        topics: [
          "Transforming and logging responses",
          "Using interceptors for caching",
          "Middleware vs interceptors",
        ],
      },
      {
        title: "Configuration & Environment Management",
        topics: [
          "Nest Config module",
          "Using environment variables",
          "Validating config schemas",
        ],
      },
      {
        title: "Database Integration & ORM",
        topics: [
          "Connecting with TypeORM / Prisma / Mongoose",
          "Entity & schema modeling",
          "Migrations & repositories",
        ],
      },
      {
        title: "Authentication & Authorization (Core Focus of Crash Course)",
        topics: [
          "Building signup & login",
          "JWT authentication with Passport.js",
          "Refresh tokens & session handling",
          "Role-based guards for endpoints",
        ],
      },
      {
        title: "Advanced Patterns & Architecture",
        topics: [
          "Hexagonal & Onion architecture",
          "CQRS pattern",
          "Event-driven design",
          "Microservices with Nest.js",
        ],
      },
      {
        title: "GraphQL & Alternative APIs",
        topics: [
          "Schema-first vs code-first approach",
          "Resolvers and queries",
          "GraphQL subscriptions",
        ],
      },
      {
        title: "Real-time Communication",
        topics: [
          "WebSocket gateways",
          "Message patterns",
          "Pub/Sub integration",
        ],
      },
      {
        title: "Testing in Nest.js",
        topics: [
          "Unit testing services & controllers",
          "Integration testing with Jest",
          "End-to-end (E2E) testing setup",
        ],
      },
      {
        title: "Performance & Scaling",
        topics: [
          "Caching with Redis",
          "Rate limiting & throttling",
          "Optimizing for production",
        ],
      },
      {
        title: "File Handling & Streaming",
        topics: [
          "File uploads (Multer integration)",
          "Streaming large files",
        ],
      },
      {
        title: "Deployment & CI/CD",
        topics: [
          "Dockerizing a Nest.js app",
          "Deploying on Heroku, AWS, or Vercel",
          "Setting up CI/CD pipelines",
        ],
      },
      {
        title: "Logging, Monitoring & Observability",
        topics: [
          "Winston & Pino integration",
          "Metrics & tracing",
          "Error monitoring with external tools",
        ],
      },
      {
        title: "Miscellaneous Advanced Topics",
        topics: [
          "Custom decorators & modules",
          "Multi-tenancy setups",
          "Schema generation",
          "Extending Nest with plugins",
        ],
      },
    ],
    learningFlow: [
      "Watch the crash course to build a real authentication system with Nest.js.",
      "Practice each module by creating a small feature (e.g., blog CRUD, chat system).",
      "Explore official Nest.js docs for deeper concepts like microservices & GraphQL.",
      "Experiment with testing, caching, and deployment to prepare for production apps.",
    ],
    outcomes: [
      "Hands-on experience building an authentication system in Nest.js.",
      "Understanding of Nest.js building blocks: controllers, modules, services, guards.",
      "Confidence to organize and scale real-world backends with Nest.js.",
      "Preparedness to explore advanced features (GraphQL, microservices, real-time).",
    ],
  };

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-6 text-gray-700">{course.description}</p>

      <h2 className="text-xl font-semibold mb-2">Modules & Highlights</h2>
      <ul className="list-disc list-inside mb-6">
        {course.modules.map((module, idx) => (
          <li key={idx} className="mb-2">
            <strong>{module.title}</strong>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              {module.topics.map((topic, tIdx) => (
                <li key={tIdx}>{topic}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Learning Flow</h2>
      <ul className="list-disc list-inside mb-6">
        {course.learningFlow.map((flow, idx) => (
          <li key={idx}>{flow}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Expected Outcomes</h2>
      <ul className="list-disc list-inside mb-6">
        {course.outcomes.map((outcome, idx) => (
          <li key={idx}>{outcome}</li>
        ))}
      </ul>
    </div>
  );
}
