// components/FAQ.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What prerequisites do I need before starting this Android roadmap?",
    answer:
      "You should know basic Kotlin (variables, functions, classes, coroutines), Git/GitHub, and core Android Studio setup. Prior programming experience in Java helps, but it’s not required."
  },
  {
    id: 2,
    question: "Should I learn XML UI first or directly start with Jetpack Compose?",
    answer:
      "You can start directly with Jetpack Compose since it’s the modern UI toolkit. XML is still used in legacy apps, but Compose is industry standard for new projects."
  },
  {
    id: 3,
    question: "How long will it take to complete this roadmap?",
    answer:
      "If you dedicate 10–12 hours weekly, it may take 6–8 months to cover Beginner → Capstone. The exact timeline depends on your practice speed and consistency."
  },
  {
    id: 4,
    question: "Do I need to build all projects in this roadmap?",
    answer:
      "You don’t need every project for your portfolio. Build at least 6–8 diverse apps covering local DB, API integration, Firebase, background tasks, and Compose UI. Pick 2–3 polished ones to showcase."
  },
  {
    id: 5,
    question: "Which architecture pattern should I follow?",
    answer:
      "Start with MVVM for beginner and intermediate projects. For advanced and capstone projects, follow Clean Architecture with modularization and Hilt/Dagger for dependency injection."
  },
  {
    id: 6,
    question: "How important is Firebase in Android development?",
    answer:
      "Firebase is widely used for authentication, database, storage, analytics, and push notifications. Most startups and many production apps use Firebase services, so you should practice at least 2–3 projects with it."
  },
  {
    id: 7,
    question: "Do I need backend knowledge for these projects?",
    answer:
      "Most projects use public APIs or Firebase, so backend isn’t mandatory. However, knowing basics of REST APIs, JSON, and authentication helps you collaborate better with backend teams."
  },
  {
    id: 8,
    question: "When should I start learning testing (Unit/UI tests)?",
    answer:
      "Start adding tests once you reach intermediate projects. For industry readiness, practice JUnit, Mockito, and Espresso tests in your advanced/capstone apps."
  },
  {
    id: 9,
    question: "Should I publish these apps on the Play Store?",
    answer:
      "Publishing at least 1–2 apps on the Play Store is a huge plus. It shows employers you can handle release signing, Play Console setup, and production deployment."
  },
  {
    id: 10,
    question: "Will this roadmap make me industry-ready?",
    answer:
      "Yes. By the end, you’ll cover UI/UX with Compose, APIs, Room DB, Firebase, background tasks, Clean Architecture, DI, and testing. These are the exact skills companies expect in Android engineers."
  }
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
            <HelpCircle className="w-7 h-7 text-indigo-600" />
            Android Roadmap FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Common questions learners ask while following the Android project roadmap.
          </p>
        </header>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                {openFAQ === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFAQ === faq.id && (
                <div className="p-4 pt-0 text-gray-600 text-sm">
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
