"use client";
import React from "react";

const projects = {
  beginner: [
    {
      id: "ios-todo-app",
      title: "To-Do List App (SwiftUI & Combine)",
      description:
        "Dynamic to-do list app using SwiftUI and Combine. Learn state management with @State, @ObservedObject, and @Published.",
      url: "https://youtu.be/K-4blUReYoU?si=1UJBU44D1nCjMYSL",
    },
    {
      id: "ios-weather-app",
      title: "Weather App (SwiftUI & OpenWeatherMap API)",
      description:
        "Fetch real-time weather data with URLSession and Codable. Build a clean SwiftUI interface.",
      url: "https://youtu.be/X2W9MPjrIbk?si=ZT_LXuA7_HFSAWjO",
    },
    {
      id: "ios-notes-app",
      title: "Notes App with CoreData",
      description:
        "Create, edit, and delete notes with Core Data. Practice persistence and data binding.",
      url: "https://youtu.be/rjHBINtpKA8?si=cpVswFpl9e3O82Ie",
    },
  ],
  intermediate: [
    {
      id: "ios-expense-tracker",
      title: "Expense Tracker (Charts + CoreData)",
      description:
        "Track expenses with Core Data or Realm. Use Swift Charts for data visualization.",
      url: "https://youtu.be/Bu6fAlltatA?si=Ae-bFjVtW9jJhStc",
    },
    {
      id: "ios-recipe-app",
      title: "Recipe Finder App (API + Pagination)",
      description:
        "Consume a recipe API, implement pagination, caching, and build reusable SwiftUI components.",
      url: "https://youtu.be/CdZrHGKdZWc?si=3qCTgAuMZMnBLHbd",
    },
    {
      id: "ios-chat-app",
      title: "Chat App",
      description:
        "Realtime chat with Firebase Firestore. Implement authentication and push notifications.",
      url: "https://youtu.be/Zz9XQy8PRpQ?si=huDqkdxj4yrX9q2l",
    },
  ],
  advanced: [
    {
      id: "ios-ecommerce",
      title: "E-Commerce App Clone (MVVM + Payments)",
      description:
        "Product listing, cart, checkout with Stripe. MVVM architecture and async/await networking.",
      url: "https://youtu.be/1hyHUWOjgkU?si=D82YhTt5urgkqAtX",
    },
    {
      id: "ios-social-clone",
      title: "Social Media Mini-Clone",
      description:
        "Upload images/videos to Firebase/AWS S3. Feed with likes, comments, and push notifications.",
      url: "https://youtu.be/-pAQcPolruw?si=CgUfwFAblVaGJWBI",
    },
    {
      id: "ios-fitness-tracker",
      title: "Fitness Tracker (HealthKit + WatchOS)",
      description:
        "Track steps, calories, and heart rate. Build a companion Apple Watch app.",
      url: "https://youtu.be/7vOF1kGnsmo?si=8mugNXMp8NORALKA",
    },
  ],
};

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧑‍💻 iOS Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Beginner → Intermediate → Advanced iOS projects with curated
            tutorials (2025).
          </p>
        </header>

        {Object.entries(projects).map(([level, list]) => (
          <div key={level} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 capitalize text-indigo-700">
              {level} Projects
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <article
                  key={p.id}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
                  aria-labelledby={`${p.id}-title`}
                >
                  <h4
                    id={`${p.id}-title`}
                    className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
                  >
                    {p.title}
                  </h4>
                  <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch tutorial for ${p.title}`}
                    className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                  >
                    Watch Tutorial ▶
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Start with beginner projects, then move to intermediate, and finally
          advanced 🚀
        </footer>
      </div>
    </section>
  );
}
