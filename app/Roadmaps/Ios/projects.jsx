import React from "react";

const projects = [
  // ---------- BEGINNER IOS PROJECTS ----------
  {
    id: "ios-todo-app",
    level: "iOS — Beginner",
    title: "To-Do List App (SwiftUI & Combine)",
    description:
      "Building a dynamic to-do list app using SwiftUI and Combine. Learn State management, @State, @ObservedObject, and @Published.",
    url: "https://www.youtube.com/playlist?list=PLb5R4QC2DtFuRFJ35uPMhpY90s0VMNR-i"
  },
  {
    id: "ios-weather-app",
    level: "iOS — Beginner",
    title: "Weather App (SwiftUI & OpenWeatherMap API)",
    description:
      "Fetch real-time weather data using the OpenWeatherMap API with SwiftUI. Learn networking, JSON parsing, and SwiftUI views.",
    url: "https://www.youtube.com/watch?v=HPQFYFkQbbA"
  },
  {
    id: "ios-notes-app",
    level: "iOS — Beginner",
    title: "Notes App with CoreData",
    description:
      "Implement Core Data for data persistence in a notes app. Learn CRUD operations, Core Data setup, and data binding.",
    url: "https://www.youtube.com/watch?v=wAy3S1MnKYY"
  },
  {
    id: "ios-movie-app",
    level: "iOS — Beginner",
    title: "Movie/TV Show App (TMDb API & SwiftUI)",
    description:
      "Integrate the TMDb API to display movies and TV shows. Learn networking, JSON parsing, and SwiftUI UI design.",
    url: "https://www.youtube.com/watch?v=cTNhMgNV53s"
  },
  {
    id: "ios-calculator-app",
    level: "iOS — Beginner",
    title: "Calculator App (SwiftUI)",
    description:
      "Build a basic calculator using SwiftUI. Learn button handling, arithmetic operations, and state management.",
    url: "https://www.youtube.com/watch?v=U9Z4gCQYCms"
  },
  {
    id: "ios-quiz-app",
    level: "iOS — Beginner",
    title: "Quiz App (SwiftUI & Supabase)",
    description:
      "Create a quiz app with backend integration using Supabase. Learn networking, data fetching, and SwiftUI design.",
    url: "https://www.youtube.com/watch?v=N2loWpIIIu4"
  },
  {
    id: "ios-currency-converter",
    level: "iOS — Beginner",
    title: "Currency Converter App (SwiftUI & ExchangeRate API)",
    description:
      "Fetch real-time currency exchange rates using an API. Learn networking, JSON parsing, and SwiftUI UI design.",
    url: "https://medium.com/@farazzafar/consuming-a-weather-api-swiftui-73db604e51fd"
  },
  {
    id: "ios-chat-app",
    level: "iOS — Beginner",
    title: "Chat App (SwiftUI & Firebase)",
    description:
      "Implement real-time chat functionality using Firebase. Learn authentication, Firestore database, and real-time updates.",
    url: "https://www.youtube.com/watch?v=BRbGVPSjP7I"
  },

  // ---------- ADVANCED IOS PROJECTS ----------
  {
    id: "ios-ar-interior",
    level: "iOS — Advanced",
    title: "AR-Based Interior Design App (ARKit + RealityKit)",
    description:
      "Visualize furniture in real-world spaces with AR. Learn ARKit, RealityKit, placing and scaling 3D objects.",
    url: "https://www.youtube.com/watch?v=Ta72BYATzIY"
  },
  {
    id: "ios-voice-assistant",
    level: "iOS — Advanced",
    title: "Voice-Controlled Personal Assistant App (Speech Recognition + SiriKit)",
    description:
      "Create a voice-controlled assistant with speech recognition and SiriKit integration. Learn to interpret commands and provide contextual responses.",
    url: "https://www.youtube.com/watch?v=1whvTugenL4"
  },
  {
    id: "ios-collaborative-whiteboard",
    level: "iOS — Advanced",
    title: "Real-Time Collaborative Whiteboard App (Multipeer Connectivity + SwiftUI)",
    description:
      "Build a real-time collaborative whiteboard. Learn peer-to-peer networking, real-time drawing sync, and SwiftUI integration.",
    url: "https://www.youtube.com/watch?v=c9XxDjmLT24"
  },
  {
    id: "ios-ai-code-generator",
    level: "iOS — Advanced",
    title: "AI-Powered Code Generator App (Cursor AI + Xcode Integration)",
    description:
      "Generate Swift code snippets using AI. Learn natural language prompts, AI integration, and testing generated code in Xcode.",
    url: "https://www.youtube.com/watch?v=9YPebrSjskU"
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧑‍💻 iOS Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Beginner to advanced iOS projects with latest YouTube tutorials (Hindi & English, 2025).
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Start with beginner projects and scale up to advanced iOS apps 🚀
        </footer>
      </div>
    </section>
  );
}
