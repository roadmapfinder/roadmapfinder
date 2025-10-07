// components/ProductDesignProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-redesign-app",
    level: "Phase 1 — Beginner",
    title: "Redesign a Daily-Use App (UI/UX Case Study)",
    description:
      "Pick a common app (e.g., YouTube, Notes, or Swiggy) and redesign one flow such as search, filtering, or checkout. Learn visual hierarchy, UX heuristics, and accessibility principles while creating high-fidelity mockups.",
    url: "https://youtu.be/DyNGwhLcm0w?si=4Ye7Tp_f291LXGjW",
  },
  {
    id: "phase1-portfolio",
    level: "Phase 1 — Beginner",
    title: "Portfolio Website Design",
    description:
      "Design your own responsive portfolio website with sections for About, Projects, Resume, and Contact. Focus on layout grids, typography scales, and interaction storytelling.",
    url: "https://youtu.be/Q2IupOJHrzM?si=2E5iz602eAu1pPsS",
  },
  {
    id: "phase1-habit-tracker",
    level: "Phase 1 — Beginner",
    title: "Design a Mobile Habit Tracker App",
    description:
      "Create a minimalist habit tracker app that encourages consistency through micro-interactions, nudges, and progress visualization. Apply behavior design principles like BJ Fogg’s model.",
    url: "https://youtu.be/vMdvDiATnBc?si=ntXr85_9AhjZPjxG",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-fintech-onboarding",
    level: "Phase 2 — Intermediate",
    title: "Onboarding Flow for a Fintech App",
    description:
      "Design an onboarding and KYC flow for a UPI or Investment app. Focus on clarity, compliance, and trust. Deliver motion prototypes and accessibility audits.",
    url: "https://youtu.be/oMoH6KGQ60M?si=oikX6JpWpygLphvJ",
  },
  {
    id: "phase2-saas-dashboard",
    level: "Phase 2 — Intermediate",
    title: "Design a Dashboard for a SaaS Product",
    description:
      "Create a web dashboard for analytics or task management with a focus on information hierarchy and data visualization. Include wireframes, card sorting, and a high-fidelity UI.",
    url: "https://youtu.be/dhUrLmr6GnM?si=Qr15w40mXpGYjyOS",
  },
  {
    id: "phase2-ecommerce-checkout",
    level: "Phase 2 — Intermediate",
    title: "E-commerce Checkout Redesign",
    description:
      "Redesign the cart-to-confirmation flow to improve conversion rates. Apply UX optimization, trust signals, and usability testing to enhance the shopping experience.",
    url: "https://youtu.be/-IjGTiolO9c?si=zvhKrFqqm0LEO2-K",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-design-system",
    level: "Phase 3 — Advanced",
    title: "Design System for a Multi-Platform App",
    description:
      "Build a scalable design system with components, typography tokens, color guidelines, and documentation. Learn design ops and ensure consistency across devices.",
    url: "https://youtu.be/EK-pHkc5EL4?si=5YS-pX0Kra9ZA2t2",
  },
  {
    id: "phase3-ux-case-study",
    level: "Phase 3 — Advanced",
    title: "UX Case Study: EdTech or HealthTech Problem",
    description:
      "Conduct end-to-end UX research to solve a real problem (e.g., students managing focus or patients tracking medication). Deliver personas, journey maps, wireframes, and an interactive prototype.",
    url: "https://youtu.be/R7urbI0iqb0?si=RRrX7L64-nw9b8Kd",
  },
  {
    id: "phase3-ai-product",
    level: "Phase 3 — Advanced",
    title: "AI-Powered Product Concept",
    description:
      "Design an AI-powered concept app — such as an AI career coach or smart journaling assistant. Focus on ethical design, personalization, and human-AI interaction principles.",
    url: "https://youtu.be/nFNc6fn7c8I?si=2zXTM02DI8I0_X-f",
  },
];

export default function ProductDesignProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 Product Design Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progress from beginner to industry-ready projects. Research, design, and present real-world UX/UI challenges that reflect modern product design practices.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-pink-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-pink-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow each phase to build a complete product design portfolio that showcases your process — from research to final prototype.
        </footer>
      </div>
    </section>
  );
}
