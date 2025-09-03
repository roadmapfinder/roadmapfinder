import React from "react";

export default function NextJsCourseCodevolution() {
  const course = {
    title: "Next.js Full Course (Learn Next.js 14 in One Video) — Codevolution",
    description:
      "A detailed and beginner-friendly crash-course video (~1–2 hours) by Codevolution, covering key Next.js concepts—from routing to data fetching and deployment—based on their full YouTube playlist.",
    modules: [
      {
        title: "Introduction & Project Initialization",
        topics: [
          "Why Next.js",
          "Creating a Next.js Project",
          "Overview of features",
        ],
      },
      {
        title: "Application Structure & Folder Conventions",
        topics: [
          "Understanding folder structure",
          "Pages and components organization",
        ],
      },
      {
        title: "Client vs Server Components in Next.js",
        topics: [
          "Client components",
          "Server components",
          "Automatic static optimization",
        ],
      },
      {
        title: "Routing using the Pages Directory",
        topics: [
          "Page-based navigation",
          "Dynamic routing",
        ],
      },
      {
        title: "Data Fetching Strategies",
        topics: [
          "getStaticProps",
          "getServerSideProps",
          "getStaticPaths",
        ],
      },
      {
        title: "Next.js Built-in Functions",
        topics: [
          "Image optimization",
          "Font integration",
          "Built-in CSS support",
          "Analytics integration",
        ],
      },
      {
        title: "API Routes for Backend Logic",
        topics: [
          "Creating serverless API endpoints",
          "Handling requests within Next.js apps",
        ],
      },
      {
        title: "Styling Methods & Asset Handling",
        topics: [
          "CSS Modules",
          "Global CSS",
          "Importing assets",
        ],
      },
      {
        title: "Application Deployment & Hosting",
        topics: [
          "Building for production",
          "Deploying to Vercel",
          "Deploying to Netlify",
        ],
      },
      {
        title: "Advanced Concepts",
        topics: [
          "Middleware",
          "Incremental Static Regeneration (ISR)",
          "Dynamic routing patterns",
        ],
      },
    ],
    learningFlow: [
      "Start by watching the full tutorial video (~2h).",
      "After each module, pause and build a small demo (e.g., static blog or dashboard).",
      "Use the official Next.js docs for deeper insight and keep updated with latest versions.",
    ],
    outcomes: [
      "Solid grasp of building full-stack React apps with Next.js.",
      "Hands-on experience with SSR (Server-Side Rendering) and ISR (Incremental Static Regeneration).",
      "Preparedness to deploy and scale Next.js applications effectively.",
    ],
  };

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-6 text-gray-700">{course.description}</p>

      <h2 className="text-xl font-semibold mb-2">Modules & Highlights</h2>
      <ul className="list-disc list-inside mb-6">
        {course.modules.map((module, idx) => (
          <li key={idx} className="mb-2">
            <strong>{module.title}</strong>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              {module.topics.map((topic, tIdx) => (
                <li key={tIdx}>{topic}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Learning Flow</h2>
      <ul className="list-disc list-inside mb-6">
        {course.learningFlow.map((flow, idx) => (
          <li key={idx}>{flow}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Expected Outcomes</h2>
      <ul className="list-disc list-inside mb-6">
        {course.outcomes.map((outcome, idx) => (
          <li key={idx}>{outcome}</li>
        ))}
      </ul>
    </div>
  );
}
