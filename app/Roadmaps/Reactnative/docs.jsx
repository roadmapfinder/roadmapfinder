import React from "react";

const docs = [
  {
    id: "react-native",
    level: "Official",
    title: "React Native (Official)",
    description:
      "The main source: setup guides, APIs, components, architecture, debugging, and native modules.",
    cta: "Open Docs",
    url: "https://reactnative.dev/docs"
  },
  {
    id: "react-core",
    level: "Official",
    title: "React (Core Library)",
    description:
      "Since React Native uses React, understanding JSX, hooks, and context is essential for building apps.",
    cta: "Open Docs",
    url: "https://react.dev"
  },
  {
    id: "expo",
    level: "Official",
    title: "Expo Documentation",
    description:
      "Expo’s SDK and workflow simplify React Native development. Includes guides for APIs, EAS, and deployment.",
    cta: "Open Docs",
    url: "https://docs.expo.dev"
  },
  {
    id: "react-navigation",
    level: "Popular Resource",
    title: "React Navigation",
    description:
      "The de facto routing and navigation library for React Native apps. Covers stack, tab, and drawer navigators.",
    cta: "Open Docs",
    url: "https://reactnavigation.org/docs"
  },
  {
    id: "redux-toolkit",
    level: "Official",
    title: "Redux Toolkit",
    description:
      "Official Redux library with simplified state management patterns, slices, RTK Query, and best practices.",
    cta: "Open Docs",
    url: "https://redux-toolkit.js.org"
  },
  {
    id: "reanimated",
    level: "Popular Resource",
    title: "React Native Reanimated",
    description:
      "Docs for Reanimated — enabling smooth, native-level animations and gesture-based interactions.",
    cta: "Open Docs",
    url: "https://docs.swmansion.com/react-native-reanimated/"
  },
  {
    id: "gesture-handler",
    level: "Popular Resource",
    title: "React Native Gesture Handler",
    description:
      "Gesture library for handling touch interactions like pan, swipe, and tap. Works with Reanimated.",
    cta: "Open Docs",
    url: "https://docs.swmansion.com/react-native-gesture-handler/"
  },
  {
    id: "rn-paper",
    level: "Popular Resource",
    title: "React Native Paper",
    description:
      "Material Design–based UI component library for React Native. Provides ready-to-use styled components.",
    cta: "Open Docs",
    url: "https://callstack.github.io/react-native-paper/docs"
  },
  {
    id: "rn-fs",
    level: "Popular Resource",
    title: "react-native-fs",
    description:
      "Library for accessing the file system in React Native apps. Supports reading, writing, and managing files.",
    cta: "Open Docs",
    url: "https://github.com/itinance/react-native-fs"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            📱 Essential React Native Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore official and popular resources that every React Native
            developer must know. These cover setup, navigation, state
            management, animations, UI, and native APIs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${d.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {d.level}
                </span>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open documentation for ${d.title}`}
                >
                  🔗 Docs
                </a>
              </div>

              <h3
                id={`${d.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {d.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{d.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {d.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <span className="text-xs text-slate-400">Reference</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Bookmark these docs and revisit them often. Mastery in React
          Native means knowing the ecosystem and using the right tool for the
          right job.
        </footer>
      </div>
    </section>
  );
}
