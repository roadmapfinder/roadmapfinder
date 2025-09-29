"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Do I need a MacBook to start iOS development?",
    answer:
      "Yes. Xcode, the official IDE for iOS development, only runs on macOS. You’ll need a Mac to build and test iOS apps. Some cloud-based options like MacStadium exist, but having a Mac is highly recommended.",
  },
  {
    id: 2,
    question: "Should I learn UIKit or SwiftUI first?",
    answer:
      "SwiftUI is the modern framework and easier for beginners. However, UIKit is still heavily used in industry. Start with SwiftUI for projects, but learn UIKit basics if you want to be job-ready.",
  },
  {
    id: 3,
    question: "How important is Core Data for iOS jobs?",
    answer:
      "Very important. Many apps require offline persistence. Core Data is widely used in production apps, though alternatives like Realm and SQLite are also common.",
  },
  {
    id: 4,
    question: "Do I need to pay for an Apple Developer account?",
    answer:
      "You can build and run apps on your own device for free. But if you want to publish to the App Store, you’ll need a paid Apple Developer account ($99/year).",
  },
  {
    id: 5,
    question: "When should I start learning advanced topics like Combine or async/await?",
    answer:
      "After you’re comfortable with Swift basics, networking, and persistence. These advanced tools help you handle complex, scalable apps but aren’t needed for your very first apps.",
  },
  {
    id: 6,
    question: "What kind of architecture should I use for my projects?",
    answer:
      "For small projects, MVVM is usually enough. For larger apps, Clean Architecture or VIPER is often used. Recruiters like seeing that you understand architecture patterns.",
  },
  {
    id: 7,
    question: "How do I test my apps on real iPhones?",
    answer:
      "Connect your iPhone via USB and select it in Xcode’s device list. You’ll need to sign in with your Apple ID in Xcode. For advanced features like push notifications, you’ll need a developer account.",
  },
  {
    id: 8,
    question: "How much Swift do I need to know before building apps?",
    answer:
      "You don’t need to master the entire language first. Learn the basics (variables, optionals, functions, classes/structs, closures) and start building small apps. You’ll learn more Swift along the way.",
  },
  {
    id: 9,
    question: "Is publishing apps on the App Store necessary to get hired?",
    answer:
      "Not mandatory, but it’s a big plus. Having at least 1–2 apps published shows employers you understand the full development lifecycle and App Store guidelines.",
  },
  {
    id: 10,
    question: "What projects should I showcase in my portfolio?",
    answer:
      "Pick 2–3 polished apps that demonstrate different skills: a CRUD app (Core Data), a networking app (API integration), and an advanced feature app (push notifications, HealthKit, or Firebase).",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
            <HelpCircle className="w-7 h-7 text-indigo-600" />
            iOS Roadmap FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Common questions learners ask while following the iOS roadmap 🚀
          </p>
        </header>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-indigo-600" />
                )}
              </button>
              {openId === faq.id && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
