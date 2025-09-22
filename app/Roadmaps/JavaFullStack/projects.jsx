// components/Projects.jsx
import React from "react";

const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "java-todo-list",
    level: "Java Fullstack — Beginner",
    title: "Simple To-Do List",
    description:
      "Learn to build a simple To-Do application using Java Spring Boot, covering CRUD operations and basic API integration.",
    url: "https://www.youtube.com/watch?v=Ga5kRSu-W5Y"
  },
  {
    id: "java-student-management",
    level: "Java Fullstack — Beginner",
    title: "Student Management System",
    description:
      "Create a Student Management System using Spring Boot for the backend and React for the frontend.",
    url: "https://www.youtube.com/watch?v=wCICF9YSWNo"
  },
  {
    id: "java-calculator-web",
    level: "Java Fullstack — Beginner",
    title: "Calculator App (Web Version)",
    description:
      "Foundational knowledge to build simple applications like a calculator using Java Full Stack.",
    url: "https://www.youtube.com/watch?v=TnjNq2Q0Qi8"
  },
  {
    id: "java-portfolio",
    level: "Java Fullstack — Beginner",
    title: "Personal Portfolio Website",
    description:
      "Learn to create a personal portfolio website, including backend integration for features like contact forms.",
    url: "https://www.youtube.com/watch?v=Js4FlB0zTbg"
  },

  // ---------- INTERMEDIATE PROJECTS ----------
  {
    id: "java-blog-platform",
    level: "Java Fullstack — Intermediate",
    title: "Blog Platform",
    description:
      "Build a blog platform focusing on user authentication and CRUD operations.",
    url: "https://www.youtube.com/watch?v=wCICF9YSWNo"
  },
  {
    id: "java-ecommerce-catalog",
    level: "Java Fullstack — Intermediate",
    title: "E-Commerce Product Catalog",
    description:
      "Understand product listing, filtering, and cart functionality using Spring Boot and React + Redux.",
    url: "https://www.youtube.com/watch?v=SDZk34mh7wM"
  },
  {
    id: "java-library-management",
    level: "Java Fullstack — Intermediate",
    title: "Library Management System",
    description:
      "Build a library management system focusing on entity relationships and UI forms.",
    url: "https://www.youtube.com/watch?v=wCICF9YSWNo"
  },
  {
    id: "java-weather-app",
    level: "Java Fullstack — Intermediate",
    title: "Weather App",
    description:
      "Learn to build applications like a weather app, integrating external APIs for real-time data.",
    url: "https://www.youtube.com/watch?v=Js4FlB0zTbg"
  },

  // ---------- ADVANCED PROJECTS ----------
  {
    id: "java-ecommerce-fullstack",
    level: "Java Fullstack — Advanced",
    title: "E-Commerce Fullstack Platform",
    description:
      "Build a full-stack e-commerce platform with microservices architecture, secure authentication, and deployment on AWS.",
    url: "https://www.youtube.com/watch?v=fmX84zu-5gs"
  },
  {
    id: "java-social-media-app",
    level: "Java Fullstack — Advanced",
    title: "Social Media App (Mini Instagram/Facebook)",
    description:
      "Extend concepts from tutorials to build a social media application with posts, likes, and image uploads.",
    url: "https://www.youtube.com/watch?v=wCICF9YSWNo"
  },
  {
    id: "java-job-portal",
    level: "Java Fullstack — Advanced",
    title: "Job Portal Platform",
    description:
      "Create a job portal focusing on user profiles, CRUD operations, and file uploads (resumes).",
    url: "https://www.youtube.com/watch?v=wCICF9YSWNo"
  },
  {
    id: "java-online-banking",
    level: "Java Fullstack — Advanced",
    title: "Online Banking System",
    description:
      "Build an online banking system incorporating transaction handling and secure REST APIs.",
    url: "https://www.youtube.com/watch?v=wCICF9YSWNo"
  },
  {
    id: "java-inventory-management",
    level: "Java Fullstack — Advanced",
    title: "Inventory Management System",
    description:
      "Focus on backend and frontend integration for inventory management, including microservices and caching.",
    url: "https://www.youtube.com/watch?v=wCICF9YSWNo"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧑‍💻 Java Full-Stack Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            From beginner CRUD apps to advanced microservices and fullstack platforms — each project includes latest YouTube tutorials (Hindi & English, 2025).
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
          Start small, master the foundations, and scale up to advanced full-stack applications 🚀
        </footer>
      </div>
    </section>
  );
}
