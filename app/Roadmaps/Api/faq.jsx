import React from "react";

const faqs = [
  {
    question: "What exactly does an API developer do?",
    answer:
      "An API developer designs, builds, and maintains backend interfaces that allow software systems to communicate with each other. They handle authentication, data serialization, versioning, performance optimization, and ensure APIs are secure, scalable, and well-documented.",
  },
  {
    question: "What languages and frameworks should I learn for API development?",
    answer:
      "The most popular stack includes JavaScript (Node.js + Express), Python (FastAPI / Django REST), and Go. You should also understand databases (MongoDB, PostgreSQL, Redis), authentication (JWT/OAuth2), and deployment tools (Docker, CI/CD, cloud).",
  },
  {
    question: "What is the difference between REST and GraphQL?",
    answer:
      "REST uses predefined endpoints for resources, while GraphQL allows clients to request exactly the data they need in a single query. REST is simpler and widely used; GraphQL offers flexibility and efficiency for complex frontends.",
  },
  {
    question: "How do I secure my APIs?",
    answer:
      "Use HTTPS, validate inputs, sanitize user data, implement JWT or OAuth2 authentication, apply role-based access control, limit requests (rate limiting), and never expose secrets in the frontend. Regularly audit and monitor API logs for suspicious activity.",
  },
  {
    question: "What is API versioning and why is it important?",
    answer:
      "API versioning allows developers to make changes without breaking existing clients. It helps maintain backward compatibility while evolving your API (e.g., `/v1/users`, `/v2/users`).",
  },
  {
    question: "What tools are used for API documentation?",
    answer:
      "Popular tools include Swagger (OpenAPI), Postman Collections, Redoc, and Stoplight. They help developers understand API endpoints, parameters, and expected responses clearly.",
  },
  {
    question: "How do I test my APIs effectively?",
    answer:
      "You can use Postman, Insomnia, or cURL for manual testing. For automated testing, tools like Jest, Mocha, or Pytest can validate API behavior in CI pipelines. Always write unit and integration tests.",
  },
  {
    question: "What’s the difference between authentication and authorization?",
    answer:
      "Authentication verifies who the user is (login), while authorization checks what actions they are allowed to perform (permissions). For example, logging in authenticates you, but access control decides if you can delete a resource.",
  },
  {
    question: "How do I handle errors and responses in APIs?",
    answer:
      "Always return consistent JSON responses. Use standard HTTP status codes (200, 400, 401, 404, 500). Include an error message and optional error code to make debugging easier for clients.",
  },
  {
    question: "What makes an API production-ready?",
    answer:
      "A production-ready API is secure, versioned, well-documented, monitored, rate-limited, tested, and deployed with CI/CD. It should handle scale, use caching (Redis/Cloudflare), and have clear logging and error handling.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16" id="faq">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            💬 API Developer — Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Get clear answers to the most common questions about API development, tools, security, and best practices.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 text-lg">
                {item.question}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Keep learning — experiment with REST, GraphQL, and gRPC. The more real-world APIs you build, the faster you'll grow as a backend engineer.
        </footer>
      </div>
    </section>
  );
}
