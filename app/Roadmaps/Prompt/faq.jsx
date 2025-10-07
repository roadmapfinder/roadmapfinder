// components/FAQ.jsx
import React from "react";
import { Question } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) focuses on visual elements like colors, typography, and layout. UX (User Experience) focuses on the overall experience, usability, and how the user interacts with the product.",
  },
  {
    question: "How do I start a product design project as a beginner?",
    answer:
      "Begin with research: identify user needs, competitors, and pain points. Create low-fidelity wireframes, test flows, and gradually move to high-fidelity mockups and prototypes.",
  },
  {
    question: "What are the best tools for product design?",
    answer:
      "Figma, Sketch, Adobe XD for UI; Miro or Whimsical for wireframing and flow diagrams; Notion or Airtable for documentation and research tracking.",
  },
  {
    question: "How can I make my designs accessible?",
    answer:
      "Follow accessibility guidelines like WCAG 2.2, use sufficient color contrast, provide keyboard navigation, alt text for images, and ensure readable typography.",
  },
  {
    question: "What is a design system and why is it important?",
    answer:
      "A design system is a collection of reusable components, styles, and guidelines. It ensures consistency, speeds up design and development, and helps teams collaborate effectively.",
  },
  {
    question: "How do I conduct user research effectively?",
    answer:
      "Use a combination of methods: interviews, surveys, usability testing, and analytics. Define goals, recruit representative users, and synthesize insights to inform design decisions.",
  },
  {
    question: "What is the difference between a wireframe and a prototype?",
    answer:
      "A wireframe is a low-fidelity layout showing structure and content placement. A prototype is an interactive, higher-fidelity version that simulates the final product experience.",
  },
  {
    question: "How do I showcase my work in a portfolio?",
    answer:
      "Include problem statements, your research process, wireframes, prototypes, and final designs. Highlight your decision-making, iterations, and the impact of your design.",
  },
  {
    question: "How can prompt engineering improve AI-powered product design?",
    answer:
      "Prompt engineering helps AI tools generate content, UX copy, design ideas, and workflow suggestions. Well-crafted prompts guide AI to produce outputs aligned with user needs and brand voice.",
  },
];

export default function FAQ() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Answers to common questions about product design, UX/UI, and prompt engineering for learners.
          </p>
        </header>

        {/* FAQ Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, idx) => (
            <article
              key={idx}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-3">
                <Question size={18} className="text-indigo-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              </div>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-500 text-center">
          Use these FAQs as guidance while building your product design and AI projects. Refer back anytime for best practices and insights.
        </footer>
      </div>
    </section>
  );
}
