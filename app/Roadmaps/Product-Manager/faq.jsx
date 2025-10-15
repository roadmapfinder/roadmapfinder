// components/Faq.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Product Management and why is it important?",
    answer:
      "Product Management is the practice of defining, building, and scaling products that meet user needs and business goals. PMs bridge the gap between engineering, design, marketing, and stakeholders to ensure the product delivers value.",
  },
  {
    question: "What skills do I need to become a Product Manager?",
    answer:
      "Core PM skills include product discovery, user research, roadmap planning, prioritization frameworks, analytics, UX/UI understanding, stakeholder management, and technical literacy. Soft skills like communication and leadership are equally crucial.",
  },
  {
    question: "Do I need to know coding to become a PM?",
    answer:
      "You don’t need to be a full-time developer, but understanding technical concepts like APIs, databases, and web/mobile architecture helps in communicating with engineering teams and making informed product decisions.",
  },
  {
    question: "How can I gain real-world PM experience as a beginner?",
    answer:
      "Start by building side projects, redesigning existing apps, creating MVPs, conducting user research, and documenting your work. These projects can be added to your portfolio to showcase skills to recruiters.",
  },
  {
    question: "Which tools should I learn as a PM?",
    answer:
      "Essential PM tools include Jira, Trello, Asana (for project management), Productboard & Aha! (roadmapping), Figma (design), Mixpanel & Amplitude (analytics), Google Analytics (web metrics), and SQL for data analysis.",
  },
  {
    question: "How do I prioritize features effectively?",
    answer:
      "Use frameworks like RICE (Reach, Impact, Confidence, Effort), MoSCoW (Must-have, Should-have, Could-have, Won’t-have), or Kano Model to evaluate and rank features objectively based on business and user value.",
  },
  {
    question: "How do I prepare for PM interviews?",
    answer:
      "Practice product design questions, analytics and metrics-based problems, prioritization exercises, and behavioral interviews using the STAR method. Build a portfolio to demonstrate hands-on experience.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          ❓ Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Answers to common questions for aspiring Product Managers.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm">
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
