"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Photoshop still relevant in 2026?",
    answer:
      "Yes. Photoshop remains the industry standard for photo editing, retouching, compositing, and marketing creatives. AI features like Generative Fill have made it even more powerful, not obsolete."
  },
  {
    question: "Do I need to be good at drawing to learn Photoshop?",
    answer:
      "No. Photoshop is primarily about editing, compositing, and design. Drawing skills help for digital art, but most professional Photoshop work relies on images, typography, and layout."
  },
  {
    question: "What skills matter more than tools in Photoshop?",
    answer:
      "Design fundamentals like color theory, visual hierarchy, spacing, and composition matter more than knowing every tool. Tools are easy; visual judgment takes practice."
  },
  {
    question: "Is Photoshop enough to get a design job?",
    answer:
      "Photoshop alone can get you roles in photo retouching, social media design, and marketing creatives. For UI/UX or branding roles, it’s often paired with tools like Illustrator or Figma."
  },
  {
    question: "How long does it take to become industry-ready?",
    answer:
      "With focused practice and real projects, beginners can become job-ready in 3–6 months. Speed depends on consistency and building portfolio-quality work, not watching tutorials."
  },
  {
    question: "Should I use Photoshop AI features as a learner?",
    answer:
      "Yes, but responsibly. Learn manual workflows first, then use AI tools like Generative Fill to speed up work. Professionals are expected to understand both."
  },
  {
    question: "What should a strong Photoshop portfolio include?",
    answer:
      "A strong portfolio includes photo retouching, social media creatives, posters, advertisements, and at least one advanced photo manipulation or restoration project."
  },
  {
    question: "Is Photoshop used in real production workflows?",
    answer:
      "Absolutely. Photoshop is used daily in marketing teams, agencies, studios, and freelance pipelines with strict file organization, export standards, and revision workflows."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Photoshop Learning FAQs
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions learners ask when going from beginner to
            industry-ready with Photoshop.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm text-gray-500">
          Still confused? The fastest way to learn Photoshop is to build real
          projects and fix real mistakes.
        </p>
      </div>
    </section>
  );
}
