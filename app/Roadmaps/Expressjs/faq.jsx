// components/FAQ.jsx
import React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Express.js and why should I use it?",
    answer:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies server creation, routing, and middleware integration."
  },
  {
    question: "How do I handle routes in Express?",
    answer:
      "Routes in Express are handled using app.get(), app.post(), app.put(), app.delete(), etc. You can organize routes using separate files and the Express Router."
  },
  {
    question: "What is middleware in Express?",
    answer:
      "Middleware functions are functions that have access to the request and response objects. They can modify requests, handle authentication, logging, or send responses. Common examples include body-parser, cors, and custom logging middleware."
  },
  {
    question: "How do I connect Express to a database?",
    answer:
      "You can connect Express to databases like MongoDB, PostgreSQL, or MySQL using respective drivers or ORMs (e.g., Mongoose for MongoDB, Prisma or Sequelize for SQL). You typically establish a connection at server startup."
  },
  {
    question: "How do I handle errors in Express?",
    answer:
      "Errors can be handled using middleware functions with four parameters: (err, req, res, next). You can create global error handlers to manage validation errors, server errors, or custom exceptions."
  },
  {
    question: "How do I implement authentication in Express?",
    answer:
      "Authentication can be implemented using sessions or JSON Web Tokens (JWT). Common approaches include using Passport.js for session-based auth or JWT for stateless authentication."
  },
  {
    question: "What are some best practices for structuring an Express app?",
    answer:
      "Organize your project using MVC (Models, Views, Controllers) or feature-based folder structure, separate routes, controllers, and services. Use environment variables, logging, validation, and modular middleware."
  },
  {
    question: "How can I secure my Express application?",
    answer:
      "Use HTTPS, sanitize inputs, enable CORS properly, use Helmet for HTTP headers, validate data, hash passwords with bcrypt, and implement proper authentication and authorization checks."
  },
  {
    question: "What is the difference between REST and GraphQL in Express?",
    answer:
      "REST is an architectural style where each endpoint represents a resource. GraphQL allows clients to request exactly the data they need using queries and mutations. Express can serve both via middleware and libraries like Apollo Server for GraphQL."
  }
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          ❓ Express.js FAQ
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Common questions and answers for learners and developers building Express.js applications.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-2xl p-4 bg-white shadow-sm"
            >
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 font-medium">
                {faq.question}
                <ChevronDown className="ml-2 text-gray-400 group-open:rotate-180 transition-transform" size={18} />
              </summary>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
