"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is Context Engineering?",
    a: "Context Engineering is the discipline of designing, structuring, and optimizing context for LLMs so they produce accurate, safe, and reliable responses. It includes prompt design, memory architectures, retrieval systems, and agent workflows."
  },
  {
    q: "Do I need coding experience to start?",
    a: "Basic JavaScript or Python knowledge helps, but you can start as a beginner. Most context engineering concepts focus on logic, reasoning, and system design rather than deep coding."
  },
  {
    q: "Which tools should I learn first?",
    a: "Start with OpenAI API, LangChain/LangGraph basics, vector databases like Pinecone or Weaviate, and essential embedding models."
  },
  {
    q: "Is RAG necessary for all AI applications?",
    a: "Not always. RAG is essential when you need up-to-date, domain‑specific, or large knowledge sources. For simple apps, prompt engineering or fine‑tuning may be enough."
  },
  {
    q: "How long does it take to learn Context Engineering?",
    a: "With consistent practice, beginners can build functional RAG systems within 4–6 weeks. Becoming industry-ready usually takes 3–6 months with real projects."
  },
  {
    q: "What projects should I build to become job-ready?",
    a: "Start with prompt systems, then build RAG chatbots, document-search apps, multi-agent systems, and finally deploy full production-grade AI workflows."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Clear answers to the most common questions learners ask while mastering Context Engineering.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
