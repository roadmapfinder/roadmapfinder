// components/FAQ.jsx
import React from "react";

const faqs = [
  {
    question: "What is Node.js and why should I learn it?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server. Learning Node.js enables you to build fast, scalable, and real-time backend applications using JavaScript.",
  },
  {
    question: "What is the difference between Node.js and Express.js?",
    answer:
      "Node.js is a runtime environment for executing JavaScript on the server, while Express.js is a lightweight framework built on Node.js that simplifies routing, middleware, and handling HTTP requests.",
  },
  {
    question: "How does Node.js handle asynchronous operations?",
    answer:
      "Node.js uses an event-driven, non-blocking I/O model. Operations like file reading, network requests, and database queries are asynchronous, handled via callbacks, Promises, or async/await to improve performance.",
  },
  {
    question: "What is npm and why is it important?",
    answer:
      "npm (Node Package Manager) is the default package manager for Node.js. It allows you to install, manage, and share open-source packages and dependencies, which speeds up development.",
  },
  {
    question: "How do I connect Node.js to a database?",
    answer:
      "You can connect Node.js to databases like MongoDB, PostgreSQL, or MySQL using native drivers or ORMs like Mongoose, Sequelize, or Prisma. You establish a connection, perform queries, and handle results asynchronously.",
  },
  {
    question: "What is middleware in Node.js/Express?",
    answer:
      "Middleware is a function that processes incoming requests before they reach the route handler. It’s commonly used for authentication, logging, request validation, and error handling.",
  },
  {
    question: "What is the difference between REST APIs and GraphQL?",
    answer:
      "REST APIs expose multiple endpoints for each resource, while GraphQL provides a single endpoint and allows clients to query exactly the data they need. GraphQL can reduce over-fetching and under-fetching of data.",
  },
  {
    question: "How do I deploy a Node.js application?",
    answer:
      "You can deploy Node.js apps using platforms like Heroku, Vercel, Railway, Render, AWS EC2, or Docker/Kubernetes. Ensure environment variables, database connections, and dependencies are correctly configured.",
  },
  {
    question: "What are some best practices for Node.js development?",
    answer:
      "Use modular code structure, handle errors properly, validate input, use environment variables, write tests, follow security best practices, and monitor performance for production-ready apps.",
  },
  {
    question: "How do I handle real-time communication in Node.js?",
    answer:
      "Use WebSockets with libraries like Socket.io to build real-time apps like chat apps, notifications, and live dashboards. Node.js’s event-driven architecture makes it ideal for handling multiple real-time connections.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">❓ Node.js FAQ</h2>
          <p className="mt-2 text-gray-600">
            Common questions and answers for Node.js learners — from basics to advanced topics.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
