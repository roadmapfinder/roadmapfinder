// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is PHP and why should I learn it?",
    answer:
      "PHP is a server-side scripting language designed for web development. It powers dynamic websites, handles server-side logic, interacts with databases, and integrates easily with HTML and JavaScript. Learning PHP is essential for backend web development and frameworks like Laravel and Symfony.",
  },
  {
    question: "Which PHP version should I start learning?",
    answer:
      "Always start with the latest stable version of PHP (PHP 8+ as of 2025). It includes modern features like union types, named arguments, attributes, and performance improvements.",
  },
  {
    question: "Do I need to know HTML, CSS, or JavaScript for PHP?",
    answer:
      "Yes. PHP works alongside HTML, CSS, and JavaScript to build dynamic web pages. A solid understanding of HTML and CSS is essential, while JavaScript is useful for frontend interactions and AJAX calls.",
  },
  {
    question: "Should I learn PHP OOP from the start?",
    answer:
      "Begin with procedural PHP to understand basic syntax and logic, but quickly move to Object-Oriented Programming (OOP). OOP is widely used in industry projects and frameworks like Laravel.",
  },
  {
    question: "How do I connect PHP with a database?",
    answer:
      "PHP connects to databases like MySQL or PostgreSQL using PDO or MySQLi. PDO is recommended for its security, prepared statements, and support for multiple databases.",
  },
  {
    question: "What are common PHP security best practices?",
    answer:
      "Use prepared statements to prevent SQL injection, validate and sanitize user input, hash passwords with `password_hash()`, avoid exposing sensitive files, and use HTTPS.",
  },
  {
    question: "Should I learn a PHP framework like Laravel?",
    answer:
      "Yes. Once comfortable with core PHP, learning a framework like Laravel makes development faster, cleaner, and scalable. It teaches MVC architecture, routing, ORM, authentication, and industry best practices.",
  },
  {
    question: "How can I deploy PHP projects?",
    answer:
      "You can deploy PHP projects on shared hosting, VPS, or cloud platforms like DigitalOcean, AWS, or Render. Use tools like Composer for dependencies and Git for version control.",
  },
  {
    question: "Where can I find official PHP documentation?",
    answer:
      "The official PHP documentation is available at https://www.php.net/docs.php. It covers all PHP functions, language references, tutorials, and best practices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          ❓ Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Answers to common questions PHP learners ask—from basics to advanced tips.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
