"use client";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is it really free to start?",
      a: "Yes! You can access several foundational roadmaps and start learning today without ever entering a credit card.",
    },
    {
      q: "Is this for absolute beginners?",
      a: "Absolutely. We have paths specifically designed for those who have never written a single line of code.",
    },
    {
      q: "Can I switch paths later?",
      a: "Yes, you can pivot anytime. Our AI will even look at your completed tasks to see which skills transfer to your new path.",
    },
    {
      q: "Is the AI available 24/7?",
      a: "Yes, our AI Mentor is powered by global infrastructure, ensuring it's ready whenever you are.",
    },
    {
      q: "Do I get certificates?",
      a: "Yes, upon completion of a full roadmap and its capstone projects, you receive a verified digital certificate.",
    },
    {
      q: "How is this different from YouTube?",
      a: "YouTube is a library; we are the librarian and the tutor. We curate, structure, and support you throughout the journey.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#f7f9fb] px-5 md:px-10 max-w-[1280px] mx-auto rounded-[3rem] mb-16">
      <ScrollReveal direction="up" duration={0.6}>
        <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-center mb-16 text-[#191c1e]">
          Frequently Asked Questions
        </h2>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <ScrollReveal key={index} delay={index * 0.08} direction="up">
              <div className="bg-white rounded-2xl border border-[#c3c6d7] overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center group focus:outline-none"
                >
                  <span className="font-['Inter'] font-bold text-base text-[#191c1e]">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[#737686] transition-transform duration-300 ${isOpen ? "rotate-180 text-[#004ac6]" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-[#434655] font-['Inter'] text-sm leading-relaxed border-t border-[#c3c6d7]/30">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
