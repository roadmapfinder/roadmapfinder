import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // Official Flutter Documentation
  {
    title: "Flutter Official Documentation",
    description:
      "The central hub for all Flutter-related documentation, guides, and resources for developers.",
    url: "https://docs.flutter.dev/",
    citation: "Flutter",
  },
  {
    title: "Flutter Get Started",
    description:
      "Step-by-step guide to setting up Flutter, writing your first app, and understanding Flutter basics.",
    url: "https://docs.flutter.dev/get-started",
    citation: "Flutter",
  },
  {
    title: "Flutter Learn",
    description:
      "Curated tutorials, codelabs, and learning paths for beginners to advanced Flutter developers.",
    url: "https://flutter.dev/learn",
    citation: "Flutter",
  },
  {
    title: "Flutter Widget Catalog",
    description:
      "Comprehensive list of all Flutter widgets with examples and usage guides for building UIs.",
    url: "https://docs.flutter.dev/ui/widgets",
    citation: "Flutter",
  },
  {
    title: "Flutter API Reference",
    description:
      "Detailed reference for all Flutter classes, methods, and libraries with examples and explanations.",
    url: "https://api.flutter.dev/",
    citation: "Flutter",
  },
  {
    title: "Flutter Packages & Plugins",
    description:
      "Official guide to discovering, using, and publishing Flutter packages and plugins.",
    url: "https://pub.dev/flutter",
    citation: "Flutter",
  },
  {
    title: "Flutter for Web",
    description:
      "Guides and examples for building Flutter applications targeting web platforms.",
    url: "https://flutter.dev/multi-platform/web",
    citation: "Flutter",
  },
  {
    title: "Flutter for Desktop",
    description:
      "Learn how to build Flutter applications for Windows, macOS, and Linux.",
    url: "https://flutter.dev/desktop",
    citation: "Flutter",
  },
  {
    title: "Flutter Firebase Integration",
    description:
      "Official guide for integrating Firebase services (Auth, Firestore, Storage) into Flutter apps.",
    url: "https://firebase.flutter.dev/",
    citation: "FlutterFire",
  },
  {
    title: "Flutter Animations",
    description:
      "Tutorials and guides on building animations in Flutter using Implicit and Explicit animations.",
    url: "https://docs.flutter.dev/development/ui/animations",
    citation: "Flutter",
  },
  {
    title: "Flutter DevTools",
    description:
      "Tools for debugging, profiling, and inspecting Flutter applications during development.",
    url: "https://docs.flutter.dev/development/tools/devtools/overview",
    citation: "Flutter",
  },
  {
    title: "Flutter Testing",
    description:
      "Official guide on unit, widget, and integration testing in Flutter apps.",
    url: "https://docs.flutter.dev/testing",
    citation: "Flutter",
  },
  {
    title: "Flutter Performance",
    description:
      "Tips and tools for optimizing the performance of Flutter applications.",
    url: "https://docs.flutter.dev/perf/rendering",
    citation: "Flutter",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Flutter Documentation Sites
        </h1>
        <p className="text-gray-600 mb-10">
          Official Flutter documentation links that every learner should know.
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
