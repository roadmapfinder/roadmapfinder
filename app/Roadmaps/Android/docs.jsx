// components/AndroidDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Jetpack Compose Documentation",
    description:
      "Google’s official guide to building UI with Jetpack Compose — state, modifiers, theming, performance, and more.",
    url: "https://developer.android.com/develop/ui/compose/documentation",
    citation: "Android Developers",
  },
  {
    title: "Guide to App Architecture",
    description:
      "Best practices for structuring Android apps with ViewModel, repositories, data layers, and recommended patterns.",
    url: "https://developer.android.com/topic/architecture",
    citation: "Android Developers",
  },
  {
    title: "Dependency Injection with Hilt",
    description:
      "Official docs on using Hilt for dependency injection — Gradle setup, scopes, lifecycle-aware injection.",
    url: "https://developer.android.com/training/dependency-injection/hilt-android",
    citation: "Android Developers",
  },
  {
    title: "Architecting Your Compose UI",
    description:
      "Learn how to apply unidirectional data flow (UDF) and connect ViewModels with composables in Compose.",
    url: "https://developer.android.com/develop/ui/compose/architecture",
    citation: "Android Developers",
  },
  {
    title: "Kotlin for Android Overview",
    description:
      "The official Kotlin guide for Android — why Kotlin is preferred, Android Studio integration, and modern patterns.",
    url: "https://kotlinlang.org/docs/android-overview.html",
    citation: "Kotlin",
  },
  {
    title: "Jetpack Compose Clean Architecture (Best Practices)",
    description:
      "A detailed article on structuring Compose apps with clean layering: UI → Domain → Data, ViewModels, and use-cases.",
    url: "https://medium.com/%40ignatiah.x/jetpack-compose-clean-architecture-best-practices-for-scalable-projects-5238026ab207",
    citation: "Medium",
  },
  {
    title: "Clean Architecture Patterns in Android",
    description:
      "Insights on modularization, reactive programming, and maintainability with Clean Architecture principles.",
    url: "https://moldstud.com/articles/p-master-clean-architecture-patterns-for-building-successful-android-apps",
    citation: "MoldStud",
  },
  {
    title: "NowInAndroid (Sample App by Google)",
    description:
      "A reference project demonstrating modern Android tech: Jetpack Compose, Hilt, Paging, and MVI/MVVM.",
    url: "https://github.com/android/nowinandroid",
    citation: "Google Open Source",
  },
  {
    title: "Android Clean Architecture Movie App",
    description:
      "Kotlin + Compose + offline-first + Clean Architecture + unit tests + pagination — great project reference.",
    url: "https://aliasadi.github.io/Android-Clean-Architecture/",
    citation: "Community",
  },
  {
    title: "WeatherApp (Clean Architecture Example)",
    description:
      "Jetpack Compose + MVVM + Kotlin Flow + Retrofit + Hilt + offline caching + unit tests.",
    url: "https://github.com/aliahmedbd/WeatherApp-Android-Clean-Architecture-Jetpack-Compose-Kotlin-Hilt-Flow",
    citation: "GitHub",
  },
];

export default function AndroidDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Android Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and community resources every Android learner should know —
          Jetpack Compose, Kotlin, Hilt, Clean Architecture, and real-world
          sample apps.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
