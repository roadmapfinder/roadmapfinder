// components/FAQ.jsx
import React from "react";

const faqs = [
  {
    question: "What is the difference between UX and UI design?",
    answer:
      "UX (User Experience) focuses on the overall feel of the product — usability, flow, and satisfaction — while UI (User Interface) focuses on visuals, typography, colors, and interactivity. UX is about solving the right problem; UI is about designing it beautifully.",
  },
  {
    question: "Which tools should I learn as a product designer?",
    answer:
      "Start with Figma for design and prototyping. Then explore FigJam or Miro for brainstorming, Notion for documentation, and tools like Maze or Useberry for usability testing. You can also learn Adobe XD or Sketch if required by certain teams.",
  },
  {
    question: "How can I start building a product design portfolio?",
    answer:
      "Focus on 3–5 strong projects that show your problem-solving process — not just visuals. Include research, wireframes, iterations, and final mockups. Present each as a story: problem → process → solution → impact.",
  },
  {
    question: "Do I need coding skills as a product designer?",
    answer:
      "You don’t need to code, but understanding HTML, CSS, and how components work in systems like React or Next.js helps you collaborate better with developers and design practical interfaces.",
  },
  {
    question: "How do I conduct UX research as a beginner?",
    answer:
      "Start small: interview 3–5 users, observe their behavior, and note their frustrations. Use surveys for quantitative feedback. Turn insights into personas and journey maps to guide your design decisions.",
  },
  {
    question: "What makes a great case study in product design?",
    answer:
      "A great case study highlights your reasoning. Show your research insights, sketches, iterations, and how your design improved metrics or user satisfaction. Keep it concise, story-driven, and visually balanced.",
  },
  {
    question: "How can I design for accessibility?",
    answer:
      "Use readable font sizes, strong color contrast, clear navigation, and alt text for images. Test your design with tools like Stark or the Figma contrast plugin to ensure inclusivity for all users.",
  },
  {
    question: "What’s the best way to learn design systems?",
    answer:
      "Analyze public systems like Material Design or Apple’s Human Interface Guidelines. Try creating your own mini design system in Figma — define colors, typography, and reusable components like buttons and cards.",
  },
  {
    question: "How do product designers collaborate with developers?",
    answer:
      "Designers share design systems, component specs, and Figma prototypes. Collaboration happens through handoff tools like Zeplin, Figma Inspect, or Storybook. Frequent feedback loops between design and dev ensure pixel-perfect delivery.",
  },
  {
    question: "How can I prepare for a product design interview?",
    answer:
      "Be ready to walk through 2–3 projects. Focus on explaining your process, design reasoning, and trade-offs. Expect questions about UX principles, collaboration, and handling feedback. A clear storytelling approach matters more than flashy visuals.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            💬 Product Design — Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Real questions asked by aspiring and working designers — focused on
            tools, workflows, and becoming industry-ready.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all"
            >
              <summary className="flex justify-between items-center cursor-pointer font-medium text-gray-900">
                <span>{faq.question}</span>
                <span className="ml-2 text-pink-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <footer className="mt-10 text-center text-gray-500 text-sm">
          Keep exploring, testing, and iterating — great product design is built
          through curiosity and empathy.
        </footer>
      </div>
    </section>
  );
}
