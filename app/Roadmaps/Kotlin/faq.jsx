// components/FAQ.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is the best way to start learning Kotlin as a beginner?",
    answer:
      "Begin with core Kotlin syntax, variables, data types, control flow, functions, and object-oriented concepts. Build small CLI projects like a To-Do app or Number Guessing game to apply concepts practically.",
  },
  {
    id: 2,
    question: "Should I learn Android development first or backend Kotlin first?",
    answer:
      "It's recommended to start with Android development after grasping Kotlin basics because mobile projects help consolidate language concepts. Backend development (Ktor/Spring) can be learned once comfortable with Kotlin fundamentals.",
  },
  {
    id: 3,
    question: "How important are coroutines and asynchronous programming in Kotlin?",
    answer:
      "Coroutines are essential for handling asynchronous tasks in Kotlin, both for Android apps and backend services. They make your code cleaner, non-blocking, and more efficient for network calls, database operations, and background tasks.",
  },
  {
    id: 4,
    question: "Do I need to learn Kotlin Multiplatform as a beginner?",
    answer:
      "Not immediately. Focus first on Kotlin core and Android development. Multiplatform can be learned later to share code across iOS, Android, and backend projects, especially if aiming for full-stack or cross-platform apps.",
  },
  {
    id: 5,
    question: "How can I make my Kotlin projects industry-ready?",
    answer:
      "Follow these steps: implement MVVM or clean architecture, write modular and testable code, use coroutines and flows for async tasks, integrate APIs (Retrofit/Firebase), and deploy your projects. Showcase them on GitHub and create a polished portfolio.",
  },
  {
    id: 6,
    question: "What are some must-build projects for mastering Kotlin?",
    answer:
      "Start with CLI apps like To-Do List or Guessing Game, move to intermediate Android apps like Expense Tracker or Weather App, and finish with advanced projects like a Blogging Platform (Ktor) or Social Media App with Realtime Features.",
  },
  {
    id: 7,
    question: "How should I combine learning Kotlin with official documentation?",
    answer:
      "Regularly refer to the official Kotlin docs for syntax, coroutines, collections, serialization, and multiplatform guides. Use Android’s Kotlin guides for app development. Applying what you read into your projects ensures better retention.",
  },
  {
    id: 8,
    question: "Should I focus on Android or backend if I want to become a full-stack Kotlin developer?",
    answer:
      "Learn both gradually: start with Android apps for UI and mobile logic, then explore backend with Ktor or Spring Boot. Eventually, combining both will allow you to build full-stack Kotlin applications and APIs.",
  },
  {
    id: 9,
    question: "How can I practice Kotlin concurrency and multithreading effectively?",
    answer:
      "Start with coroutines for asynchronous tasks, use structured concurrency, experiment with Dispatchers (Main, IO, Default), and try projects like network-heavy apps or real-time chat apps. Testing and debugging concurrent code is crucial.",
  },
  {
    id: 10,
    question: "Is Kotlin knowledge enough to get a job as an Android or backend developer?",
    answer:
      "Kotlin knowledge is essential, but you also need to understand Android SDK (for mobile) or Ktor/Spring Boot (for backend), databases, networking, testing, and industry best practices. Building real projects and a strong portfolio is key.",
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
          ❓ Kotlin Roadmap FAQ
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Answers to common questions learners have while following the Kotlin roadmap.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
