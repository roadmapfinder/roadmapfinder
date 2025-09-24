import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // Official Apple Documentation
  {
    title: "Apple Developer Documentation",
    description:
      "The primary source for all Apple frameworks, APIs, and tools. Essential for understanding iOS development.",
    url: "https://developer.apple.com/documentation",
    citation: "Apple",
  },
  {
    title: "iOS Development Resources",
    description:
      "Comprehensive guide to building apps for iOS, including tools, documentation, sample code, and videos.",
    url: "https://developer.apple.com/ios",
    citation: "Apple",
  },
  {
    title: "App Dev Tutorials",
    description:
      "Step-by-step tutorials to help you develop apps for Apple platforms, covering Xcode, SwiftUI, and UIKit.",
    url: "https://developer.apple.com/tutorials/app-dev-training",
    citation: "Apple",
  },
  {
    title: "Swift Documentation",
    description:
      "Official Swift programming language documentation including language reference, API design guidelines, and standard library.",
    url: "https://swift.org/documentation",
    citation: "Swift",
  },
  {
    title: "Xcode Documentation",
    description:
      "Detailed information about Xcode, Apple’s IDE for macOS, iOS, iPadOS, watchOS, and tvOS.",
    url: "https://developer.apple.com/documentation/xcode",
    citation: "Apple",
  },
  {
    title: "SwiftUI Documentation",
    description:
      "Apple's framework for building user interfaces across all Apple platforms using Swift.",
    url: "https://developer.apple.com/documentation/swiftui",
    citation: "Apple",
  },
  {
    title: "UIKit Documentation",
    description:
      "The framework for building graphical, event-driven user interfaces for iOS applications.",
    url: "https://developer.apple.com/documentation/uikit",
    citation: "Apple",
  },
  {
    title: "Human Interface Guidelines",
    description:
      "Apple's design principles and guidelines to create intuitive and user-friendly interfaces.",
    url: "https://developer.apple.com/design/human-interface-guidelines",
    citation: "Apple",
  },

  // Popular iOS Development Resources
  {
    title: "Ray Wenderlich",
    description:
      "Renowned platform offering tutorials, books, and courses on iOS development for all skill levels.",
    url: "https://www.raywenderlich.com",
    citation: "Ray Wenderlich",
  },
  {
    title: "Hacking with Swift",
    description:
      "Community-driven site providing free tutorials, books, and resources to learn Swift and iOS development.",
    url: "https://www.hackingwithswift.com",
    citation: "Paul Hudson",
  },
  {
    title: "Kodeco (formerly Ray Wenderlich)",
    description:
      "In-depth tutorials, courses, and books on iOS development, covering beginner to advanced topics.",
    url: "https://www.kodeco.com",
    citation: "Kodeco",
  },
  {
    title: "Stack Overflow",
    description:
      "Community-driven Q&A platform for developers to ask questions and share knowledge on iOS development.",
    url: "https://stackoverflow.com",
    citation: "Stack Overflow",
  },
  {
    title: "iOS Dev Weekly",
    description:
      "Weekly newsletter featuring the latest iOS development news, tutorials, and resources.",
    url: "https://iosdevweekly.com",
    citation: "iOS Dev Weekly",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 iOS Documentation Sites
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular iOS documentation links that every learner should know.
        </p>

        {/* Cards */}
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
