"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who should learn .NET?",
    answer:
      ".NET is ideal for backend developers, full-stack developers, enterprise software engineers, and anyone targeting stable, high-paying roles in product companies, SaaS, or corporate tech teams."
  },
  {
    question: "Is .NET good for beginners?",
    answer:
      "Yes. C# and .NET are beginner-friendly with strong tooling, clear error messages, and excellent documentation. Start with C# fundamentals, then move to ASP.NET Core APIs."
  },
  {
    question: "What should I learn first: C# or ASP.NET Core?",
    answer:
      "Always start with C#. Learn OOP, collections, LINQ, async/await, and basic SOLID principles before touching ASP.NET Core. Strong C# fundamentals make backend development much easier."
  },
  {
    question: "Is .NET still relevant in 2026 and beyond?",
    answer:
      "Absolutely. .NET is actively developed by Microsoft, used heavily in enterprise systems, cloud applications, and modern microservices. .NET 8+ is fast, cross-platform, and cloud-native."
  },
  {
    question: "Do I need to learn frontend to get a .NET job?",
    answer:
      "Not necessarily. Many .NET roles are backend-focused. However, basic knowledge of HTML, CSS, and JavaScript is helpful. Full-stack roles often pair .NET with React or Angular."
  },
  {
    question: "Which database should I learn with .NET?",
    answer:
      "Start with SQL Server or PostgreSQL. Learn SQL deeply, then use Entity Framework Core. Later, explore Dapper and NoSQL options like Cosmos DB if needed."
  },
  {
    question: "How important is Clean Architecture for jobs?",
    answer:
      "Very important. Interviewers often ask about architecture, separation of concerns, and scalability. Clean Architecture shows you can write maintainable, production-ready code."
  },
  {
    question: "Is cloud mandatory for .NET developers?",
    answer:
      "Yes for modern roles. You should know how to deploy .NET apps using Docker and a cloud platform like Azure. Even basic CI/CD knowledge gives you a big hiring advantage."
  },
  {
    question: "How long does it take to become job-ready in .NET?",
    answer:
      "With consistent effort, 6–9 months is realistic. Focus on fundamentals, build real projects, deploy them, and understand why you make architectural decisions."
  },
  {
    question: "What matters more: certificates or projects?",
    answer:
      "Projects. Recruiters care far more about real, well-structured projects than certificates. A strong GitHub with clean .NET projects beats multiple certificates."
  }
];

export default function DotNetFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ .NET Developer FAQs
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to common questions every .NET learner asks before
            starting their backend development journey.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                aria-expanded={openIndex === index}
              >
                <span className="text-gray-900 font-semibold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Still confused? Build projects. Most clarity in .NET comes from
          writing real production-style code.
        </footer>
      </div>
    </section>
  );
}
