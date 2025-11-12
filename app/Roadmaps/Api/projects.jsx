"use client"
import React from "react";

const projects = [
  {
    id: "phase1-basic-api",
    level: "Phase 1 — Beginner",
    title: "Simple RESTful API with Express.js",
    description:
      "Learn how to set up a Node.js + Express server, define basic CRUD routes, and serve JSON responses. Understand REST principles, routing, middleware, and status codes.",
    url: "https://youtu.be/uNCrMvkPUAE?si=BUbGSXN9B8YxuBOV",
  },
  {
    id: "phase1-auth-api",
    level: "Phase 1 — Beginner",
    title: "User Authentication API",
    description:
      "Build signup, login, and logout endpoints with password hashing (bcrypt) and JWT-based authentication. Understand secure user sessions and token verification middleware.",
    url: "https://youtu.be/OWeruyqhiTo?si=uBiOkctEn1h76sZp",
  },
  {
    id: "phase2-product-api",
    level: "Phase 2 — Intermediate",
    title: "Product Management API",
    description:
      "Develop CRUD endpoints for products, implement pagination, sorting, and filtering. Connect to MongoDB or PostgreSQL and use Mongoose/Prisma ORM for schema modeling.",
    url: "https://youtu.be/CKs6JLHIeSA?si=L7D5HDqGK9CI1VMg",
  },
  {
    id: "phase2-fileupload-api",
    level: "Phase 2 — Intermediate",
    title: "File Upload & Cloud Storage API",
    description:
      "Implement image/file upload using Multer or Busboy, integrate with AWS S3, Cloudinary, or Firebase Storage. Add validation and public/private access logic.",
    url: "https://youtu.be/6KPXn2Ha0cM?si=b6D_MAs-5om_SKh3",
  },
  {
    id: "phase3-social-api",
    level: "Phase 3 — Advanced",
    title: "Social Media API",
    description:
      "Design and implement posts, comments, likes, and followers endpoints. Integrate real-time notifications using WebSockets (Socket.io). Add role-based access control and rate limiting.",
    url: "https://youtu.be/ldGl6L4Vktk?si=TmFk9hecpxCXTEvE",
  },
  {
    id: "phase3-payment-api",
    level: "Phase 3 — Advanced",
    title: "Payment Integration API",
    description:
      "Create a backend API that integrates with Stripe or Razorpay to process online payments. Learn about secure payment flows, webhooks, and signature verification.",
    url: "https://youtu.be/ncQg1bnPXCo?si=BZjs3AxnpwqlnTiA",
  },
  {
    id: "phase4-graphql-api",
    level: "Phase 4 — Advanced → Industry",
    title: "GraphQL API with Apollo Server",
    description:
      "Learn GraphQL fundamentals, type definitions, resolvers, and query/mutation handling. Build complex nested queries and integrate authentication & caching.",
    url: "https://youtu.be/Hu80zSSSpAo?si=mKskgoAFROe9Uw-D",
  },
  {
    id: "phase4-microservices",
    level: "Phase 4 — Industry-Ready",
    title: "Microservices Architecture API",
    description:
      "Break a monolithic API into multiple microservices using Node.js, Kafka/NATS, and API Gateway (Kong or NGINX). Implement inter-service communication and fault tolerance.",
    url: "https://youtu.be/8qN7rMFsd3g?si=rSAYO5IX7XDLVE9w",
  },
  {
    id: "phase5-saas-api",
    level: "Phase 5 — Industry-Grade",
    title: "Full SaaS Platform Backend (Multi-Tenant API)",
    description:
      "Design a production-ready backend for a SaaS product with tenant-based user management, rate limiting, monitoring, logging, CI/CD pipelines, and API documentation using Swagger/OpenAPI.",
    url: "https://youtu.be/6fXNWBFPfRM?si=WIDMVXQzRhR7XK1_",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ API Developer Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progress from beginner REST fundamentals to scalable, production-ready APIs. Each project builds the foundation for real-world API engineering mastery.
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
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build each API step by step — add documentation, tests, and deployment. By the end, you’ll have a complete API engineering portfolio ready for production.
        </footer>
      </div>
    </section>
  );
}
