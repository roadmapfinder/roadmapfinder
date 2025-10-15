// components/ProductProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-task-manager",
    level: "Phase 1 — Beginner",
    title: "SaaS Task Management App",
    description:
      "Build a simple task management tool like Trello or Asana. Include features: task creation, boards, categories, and due dates.",
    url: "https://youtu.be/PDWgxqOzvxo?si=I51ySO-b4NYUDhOY",
  },
  {
    id: "phase1-ecommerce-dashboard",
    level: "Phase 1 — Beginner",
    title: "E-commerce Product Dashboard",
    description:
      "Design a dashboard showing KPIs like orders, revenue, conversion rate, and top products. Practice SQL and analytics tools.",
    url: "https://youtu.be/nxK_TCt2pKw?si=rvgidvwTg6Br8kiL",
  },
  {
    id: "phase1-feature-prioritization",
    level: "Phase 1 — Beginner",
    title: "Feature Prioritization Case Study",
    description:
      "Take an existing product and prioritize 10–15 feature ideas using RICE, MoSCoW, or Kano frameworks.",
    url: "https://youtu.be/Uu4UwNcnL5s?si=k176oVv2t8IFJmyC",
  },
  // Phase 2 — Intermediate
  {
    id: "phase2-mobile-mvp",
    level: "Phase 2 — Intermediate",
    title: "Mobile App MVP",
    description:
      "Build a small mobile app MVP (e.g., habit tracker or recipe app) with user interviews, prototyping, and validation.",
    url: "https://youtu.be/YwEEV0wHnaA?si=l1lQIMmEV8W39ktA",
  },
  {
    id: "phase2-growth-experiments",
    level: "Phase 2 — Intermediate",
    title: "Growth Experiment for Existing App",
    description:
      "Design 2–3 A/B tests to improve conversion, engagement, or retention metrics for an existing app or mock product.",
    url: "https://youtu.be/FbA-AB16RTQ?si=i3CNSNlQaBCtvBPj",
  },
  {
    id: "phase2-product-redesign",
    level: "Phase 2 — Intermediate",
    title: "Product Redesign Case Study",
    description:
      "Select an app/website, identify pain points, map user journey, and propose UX improvements with wireframes and prototypes.",
    url: "https://youtu.be/AfCtB5i5MTQ?si=aSAuU7WBtpVbZEHS",
  },
  // Phase 3 — Advanced
  {
    id: "phase3-pricing-strategy",
    level: "Phase 3 — Advanced",
    title: "SaaS Pricing Strategy Analysis",
    description:
      "Analyze competitors’ pricing, create a pricing model for a SaaS product, and simulate revenue scenarios.",
    url: "https://youtu.be/pTNbMuFo52o?si=kzsTwnvHIWas8P8y",
  },
  {
    id: "phase3-analytics-implementation",
    level: "Phase 3 — Advanced",
    title: "Product Analytics Implementation",
    description:
      "Integrate analytics (GA, Mixpanel, Amplitude) into an app to track user events, funnels, and retention for data-driven insights.",
    url: "https://youtu.be/Njys7BpNH6k?si=Pr1H3nvfKAioi0Bj",
  },
  {
    id: "phase3-product-launch",
    level: "Phase 3 — Advanced",
    title: "Cross-Functional Product Launch Simulation",
    description:
      "Simulate a product launch including roadmap, marketing plan, engineering tasks, analytics, and post-launch growth strategies.",
    url: "https://youtu.be/8FT2J7ywBbU?si=ahl70UUONwRePaaC",
  },
];

export default function ProductProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ Product Management Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready Product Management projects. Learn discovery, analytics, strategy, and launch by building and documenting real-world products.
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
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, implement features step by step, and showcase your top Product Management projects in a polished portfolio.
        </footer>
      </div>
    </section>
  );
}
