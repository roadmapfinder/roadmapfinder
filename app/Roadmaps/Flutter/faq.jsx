"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is Flutter and why should I learn it?",
    answer:
      "Flutter is an open-source UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. Learning Flutter allows faster development and consistent UI across platforms.",
  },
  {
    id: 2,
    question: "Do I need to know Dart before learning Flutter?",
    answer:
      "Yes, Dart is the programming language used by Flutter. You should understand variables, functions, classes, async/await, and OOP concepts to be effective in Flutter development.",
  },
  {
    id: 3,
    question: "What state management approach should I use?",
    answer:
      "For beginners, using setState is fine. For intermediate and production apps, Riverpod or Bloc is recommended for scalable and maintainable state management.",
  },
  {
    id: 4,
    question: "How do I connect my Flutter app to a backend?",
    answer:
      "You can use REST APIs with the http or Dio packages. For real-time features, Firebase is commonly used. GraphQL integration is also possible with graphql_flutter.",
  },
  {
    id: 5,
    question: "What databases can I use in Flutter?",
    answer:
      "For local storage, you can use SQLite, Hive, Isar, or ObjectBox. For cloud-based storage, Firebase Firestore or Supabase are widely used.",
  },
  {
    id: 6,
    question: "How can I make my Flutter app responsive?",
    answer:
      "Use MediaQuery, LayoutBuilder, and responsive widgets. Flutter also supports adaptive design using Material and Cupertino widgets for different platforms.",
  },
  {
    id: 7,
    question: "Should I focus on mobile first or web/desktop too?",
    answer:
      "Start with mobile development, as Flutter’s mobile support is most mature. Once confident, you can expand to web and desktop for cross-platform apps.",
  },
  {
    id: 8,
    question: "How do I test my Flutter applications?",
    answer:
      "Flutter supports unit testing, widget testing, and integration testing. Use flutter_test and mockito for comprehensive test coverage.",
  },
  {
    id: 9,
    question: "What are some best practices for Flutter development?",
    answer:
      "Follow Clean Architecture, separate business logic from UI, use effective state management, write tests, and optimize for performance using DevTools.",
  },
  {
    id: 10,
    question: "How do I deploy my Flutter apps?",
    answer:
      "For mobile, use Play Store (Android) and App Store (iOS). For web, deploy via Firebase Hosting, Netlify, or Vercel. For desktop, distribute via platform-specific installers.",
  },
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">❓ Flutter FAQ</h1>
        <p className="text-gray-600 mb-10">
          Frequently asked questions by learners and developers in Flutter.
        </p>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openFAQ === faq.id ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>
              {openFAQ === faq.id && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
