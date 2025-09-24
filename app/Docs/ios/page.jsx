import React from "react";

export default function SwiftUITodoAppCourse() {
  const course = {
    title: "SwiftUI Masterclass: Build To Do List App — iOS Academy",
    description:
      "A masterclass video in which you build a fully functional To-Do List app using SwiftUI. Covers UI design, state management, interaction, and practical implementation from scratch.",
    skills: [
      "Using SwiftUI to build complex UI components",
      "Understanding SwiftUI’s state and binding system",
      "Implementing list views and user interactivity (add/delete/toggle)",
      "Managing persistent storage (if included)",
      "Debugging and testing on simulator",
    ],
    flow: [
      "Setup Xcode project & understand SwiftUI lifecycle",
      "Build UI layout: list, input field, add/delete buttons",
      "Integrate state management to update list items",
      "Add interaction: user can add, remove, mark complete tasks",
      "(If included) Add persistence so tasks persist across app sessions",
      "Style and polish UI with modifiers, spacing, colors",
      "Run and test in simulator; fix layout bugs",
      "(Optional) Add enhancements: animations, swipe actions, feedback",
    ],
    outcome:
      "By the end of the video, you’ll have a working To-Do List app built in SwiftUI that demonstrates usage of state, dynamic lists, interaction, and UI styling. You’ll be more confident to build similar small apps or extend this project further.",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {course.title}
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {course.description}
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          🎯 Skills You Will Gain
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
          {course.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          📚 Suggested Learning Flow
        </h2>
        <ol className="list-decimal pl-6 space-y-1 text-gray-700 dark:text-gray-300">
          {course.flow.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          ✅ Expected Outcome
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{course.outcome}</p>
      </section>
    </div>
  );
}
