// components/Faq.jsx
import React from "react";

const faqs = [
  // 🧩 Beginner Phase
  {
    id: "faq1",
    question: "What is Django and why should I learn it for backend development?",
    answer:
      "Django is a high-level Python web framework that simplifies backend development with built-in tools for ORM, authentication, admin dashboards, and scalability. It’s widely used in production by companies like Instagram, Pinterest, and Spotify."
  },
  {
    id: "faq2",
    question: "How is Django different from Flask?",
    answer:
      "Flask is lightweight and gives full flexibility for custom setups, while Django follows a 'batteries-included' approach — providing built-in ORM, admin, authentication, and templating. For large apps and faster development, Django is ideal."
  },
  {
    id: "faq3",
    question: "What should I learn before starting Django?",
    answer:
      "You should have a strong grasp of Python (OOPs, data types, functions), basic HTML/CSS, SQL fundamentals, and Git version control. These are essential for building and managing Django apps effectively."
  },
  {
    id: "faq4",
    question: "How do I structure a Django project properly?",
    answer:
      "Always follow Django’s ‘apps’ structure. Keep models, views, urls, and templates organized within each app. Use environment files for secrets, and separate settings for development and production."
  },

  // ⚙️ Intermediate Phase
  {
    id: "faq5",
    question: "What is Django ORM and how does it work?",
    answer:
      "Django ORM (Object-Relational Mapper) allows you to interact with your database using Python objects instead of raw SQL. You can create, query, update, and delete records with methods like `.filter()`, `.get()`, and `.update()`."
  },
  {
    id: "faq6",
    question: "How can I create REST APIs in Django?",
    answer:
      "Use Django REST Framework (DRF). It provides serializers for data conversion, viewsets for handling requests, and routers for routing endpoints. It supports authentication, pagination, and throttling out of the box."
  },
  {
    id: "faq7",
    question: "What’s the best way to handle authentication and JWT in Django?",
    answer:
      "Use Django’s built-in `User` model for standard auth, and integrate packages like `djangorestframework-simplejwt` for token-based authentication. For scalability, always use refresh tokens and middleware-based permission checks."
  },
  {
    id: "faq8",
    question: "How do I connect Django with a frontend (React, Vue, etc.)?",
    answer:
      "Build REST APIs using DRF and consume them from your frontend via HTTP requests. Use CORS headers with the `django-cors-headers` package and deploy backend and frontend separately for cleaner scaling."
  },

  // 🚀 Advanced / Industry Phase
  {
    id: "faq9",
    question: "How can I handle background tasks in Django?",
    answer:
      "Use Celery with Redis or RabbitMQ as a message broker. Celery lets you run tasks like sending emails, analytics aggregation, and notifications asynchronously — improving performance and scalability."
  },
  {
    id: "faq10",
    question: "What are the best practices for Django deployment?",
    answer:
      "Use Gunicorn as the WSGI server, Nginx as a reverse proxy, and Docker for containerization. Store secrets in `.env` files and set `DEBUG=False` in production. Use services like AWS EC2, Render, or Railway for hosting."
  },
  {
    id: "faq11",
    question: "How do I scale Django for high traffic?",
    answer:
      "Optimize queries using `select_related` and `prefetch_related`, enable caching with Redis, use PostgreSQL for production, set up load balancing, and use async views or Channels for real-time workloads."
  },
  {
    id: "faq12",
    question: "How can I ensure Django security in production?",
    answer:
      "Enable `SECURE_SSL_REDIRECT`, use HTTPS, rotate secret keys, validate user inputs, sanitize uploads, and regularly update Django to the latest LTS version. Use OWASP guidelines for web security."
  },
  {
    id: "faq13",
    question: "What tools should a Django backend developer know for industry readiness?",
    answer:
      "Essential tools include: PostgreSQL, Redis, Celery, DRF, Docker, GitHub Actions (CI/CD), AWS or Render (deployment), and monitoring tools like Sentry or Prometheus."
  }
];

export default function Faq() {
  return (
    <section className="bg-white py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Django Backend Developer FAQs
          </h2>
          <p className="mt-2 text-gray-600">
            Genuine and experience-based questions that every Django learner
            faces — from setup to scaling in production.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900 text-lg">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Tip: Revisit these FAQs after each project — your understanding deepens with real-world experience.
        </footer>
      </div>
    </section>
  );
}
