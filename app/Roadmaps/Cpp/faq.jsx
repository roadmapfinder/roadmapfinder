"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is C++ still relevant in 2025?",
    answer:
      "Yes. C++ is widely used in game development, high-performance applications, finance, embedded systems, operating systems, and performance-critical software. Modern C++ (C++11–C++20) has evolved significantly.",
  },
  {
    question: "Should I learn C before learning C++?",
    answer:
      "Not required. You can directly start with C++. While C teaches low-level concepts, C++ covers both procedural and object-oriented programming with modern features.",
  },
  {
    question: "What are the must-learn topics in C++ for beginners?",
    answer:
      "Variables, data types, control flow, functions, OOP concepts (classes, inheritance, polymorphism), templates, STL (Standard Template Library), and exception handling are essential.",
  },
  {
    question: "How important is the Standard Template Library (STL)?",
    answer:
      "Very important. STL provides ready-to-use data structures (vector, map, set) and algorithms. It’s used in interviews and industry projects to save time and ensure efficiency.",
  },
  {
    question: "What projects can I build to practice C++?",
    answer:
      "Start small with calculators, student management, or games (tic-tac-toe, snake). Later, move to advanced projects like a simple compiler, database engine, or multithreaded chat app.",
  },
  {
    question: "Which IDE or tools should I use for C++ development?",
    answer:
      "Popular choices include Visual Studio, CLion, Code::Blocks, and VS Code with GCC or Clang. Competitive programmers often use lightweight editors with fast compilers.",
  },
  {
    question: "What are common mistakes beginners make in C++?",
    answer:
      "Forgetting to manage memory (dangling pointers, leaks), misuse of references, not using const correctness, and overusing raw pointers instead of smart pointers.",
  },
  {
    question: "How is C++ different from Java or Python?",
    answer:
      "C++ gives you low-level control over memory and system resources, making it faster but more complex. Java and Python handle memory automatically but at a performance cost.",
  },
  {
    question: "Which version of C++ should I learn?",
    answer:
      "Learn Modern C++ (C++11, C++14, C++17, C++20). These add smart pointers, lambda expressions, auto keyword, concurrency, and more. Companies expect familiarity with these features.",
  },
  {
    question: "How do I prepare for C++ coding interviews?",
    answer:
      "Master data structures, algorithms, and STL. Practice LeetCode, Codeforces, or HackerRank problems. Be ready to write clean, optimized C++ code with OOP concepts.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🚀 C++ Programming FAQ
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
