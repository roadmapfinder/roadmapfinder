"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is C still worth learning in 2025?",
    answer:
      "Yes. C remains the foundation of operating systems, embedded systems, compilers, and high-performance applications. Many modern languages (C++, Rust, Go) are influenced by C.",
  },
  {
    question: "How long does it take to become proficient in C?",
    answer:
      "With consistent practice, beginners can get comfortable in 2–3 months. However, mastering concepts like memory management and pointers can take 6–12 months of project work.",
  },
  {
    question: "What are the key topics I must learn in C?",
    answer:
      "Data types, operators, control flow, functions, pointers, arrays, strings, memory allocation, structures, file handling, and working with libraries are core to C mastery.",
  },
  {
    question: "How important are pointers in C?",
    answer:
      "Pointers are critical. They help you understand memory management, arrays, dynamic allocation, and data structures like linked lists, trees, and graphs.",
  },
  {
    question: "What projects should I build to practice C?",
    answer:
      "Start small with a calculator, to-do list, or text-based game. Then move to file-handling projects, data structures, or even a simple shell or compiler components.",
  },
  {
    question: "Do I need to know C before learning C++ or Rust?",
    answer:
      "Not strictly, but knowing C gives you a huge advantage. It helps you understand low-level details that C++ and Rust abstract away.",
  },
  {
    question: "Which IDE or tools are best for C development?",
    answer:
      "For beginners, Code::Blocks, Dev-C++, or VS Code with GCC are great. Advanced developers often use CLion or directly work with Vim/Emacs + Makefiles.",
  },
  {
    question: "How do I debug C programs effectively?",
    answer:
      "Use `gdb` (GNU Debugger), add print statements, and rely on tools like Valgrind to detect memory leaks. Learning to debug is as important as coding itself.",
  },
  {
    question: "What are common mistakes beginners make in C?",
    answer:
      "Forgetting to free memory, array index out-of-bounds, pointer misuse, using uninitialized variables, and confusing `=` with `==` are frequent pitfalls.",
  },
  {
    question: "Can I use C for modern applications?",
    answer:
      "Yes. While high-level apps often use Python, JavaScript, or Java, C is widely used in embedded systems, operating systems, database engines, and performance-critical systems.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">C Programming FAQ</h2>
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
    </div>
  );
};

export default FAQ;
