"use client";

import React from "react";

const course = {
  title: "C++ Full Course",
  instructor: "Bro Code",
  level: "Beginner → Intermediate",
  duration: "Full-length YouTube Course",
  platform: "YouTube",
  description:
    "A complete beginner-friendly C++ course by Bro Code that starts from absolute basics and gradually moves to intermediate concepts like pointers, dynamic memory, templates, and object-oriented programming with hands-on examples and mini projects.",
  modules: [
    {
      module: "Module 1: Introduction & Setup",
      topics: [
        "What is C++ and where it is used",
        "Installing a compiler (GCC / MinGW)",
        "Setting up VS Code for C++",
        "Understanding compilation and execution process",
        "Writing and running your first C++ program",
      ],
    },
    {
      module: "Module 2: Basic Syntax & Input/Output",
      topics: [
        "Structure of a C++ program",
        "main() function explained",
        "Using std::cout for output",
        "Using std::cin for input",
        "Comments (single-line and multi-line)",
        "Header files and #include directive",
      ],
    },
    {
      module: "Module 3: Variables & Data Types",
      topics: [
        "Declaring and initializing variables",
        "Primitive data types (int, double, char, bool)",
        "Constants using const keyword",
        "Type aliases using typedef and using",
        "Understanding namespaces (std)",
      ],
    },
    {
      module: "Module 4: Operators & Expressions",
      topics: [
        "Arithmetic operators",
        "Assignment operators",
        "Comparison operators",
        "Logical operators",
        "Type casting and type conversion",
        "Ternary operator",
      ],
    },
    {
      module: "Module 5: Control Flow",
      topics: [
        "if, else if, else statements",
        "Nested conditions",
        "switch case statements",
        "Building decision-based programs",
      ],
    },
    {
      module: "Module 6: Loops & Iteration",
      topics: [
        "while loop",
        "do-while loop",
        "for loop",
        "Nested loops",
        "break and continue statements",
      ],
    },
    {
      module: "Module 7: Functions",
      topics: [
        "Defining and calling functions",
        "Function parameters and return values",
        "Pass by value vs pass by reference",
        "Function overloading",
        "Basic recursion",
      ],
    },
    {
      module: "Module 8: Arrays & Strings",
      topics: [
        "Declaring and initializing arrays",
        "Accessing array elements",
        "Looping through arrays",
        "sizeof operator",
        "Character arrays and strings",
      ],
    },
    {
      module: "Module 9: Pointers & Memory",
      topics: [
        "Memory addresses",
        "Pointer declaration and dereferencing",
        "Using & and * operators",
        "Null pointers",
        "Pointers with arrays",
      ],
    },
    {
      module: "Module 10: Dynamic Memory Allocation",
      topics: [
        "Heap vs stack memory",
        "Using new and delete",
        "Dynamic arrays",
        "Avoiding memory leaks",
      ],
    },
    {
      module: "Module 11: Structures & Enums",
      topics: [
        "Creating and using struct",
        "Accessing struct members",
        "Passing structs to functions",
        "Enums and their use cases",
      ],
    },
    {
      module: "Module 12: Templates",
      topics: [
        "Function templates",
        "Generic programming concepts",
        "Template use cases",
      ],
    },
    {
      module: "Module 13: Object-Oriented Programming (OOP)",
      topics: [
        "Classes and objects",
        "Access specifiers (public, private)",
        "Constructors",
        "Getters and setters",
        "Inheritance basics",
      ],
    },
    {
      module: "Module 14: Mini Projects & Practice",
      topics: [
        "Number guessing game",
        "Simple calculator",
        "Temperature converter",
        "Console-based mini programs",
        "Applying learned concepts in real code",
      ],
    },
  ],
  outcomes: [
    "Understand C++ syntax and core programming concepts",
    "Write structured and reusable C++ programs",
    "Work confidently with arrays, pointers, and memory",
    "Understand OOP fundamentals in C++",
    "Build small console-based projects independently",
  ],
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600">
          By {course.instructor} · {course.level}
        </p>
      </header>

      {/* Description */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Course Overview</h2>
        <p className="text-gray-700 leading-relaxed">{course.description}</p>
      </section>

      {/* Modules */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-5">Course Modules</h2>
        <div className="space-y-6">
          {course.modules.map((mod, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 bg-white shadow-sm"
            >
              <h3 className="font-semibold mb-3">{mod.module}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {mod.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">What You Will Learn</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {course.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}