"use client"
import React from "react";

const projects = [
  {
    id: "qa-beginner-1",
    level: "Phase 1 — Beginner (Manual Testing)",
    title: "E-Commerce Website Manual Testing",
    description:
      "Test login, registration, cart, checkout, payment, and order modules. Create test cases, bug reports, and RTM for full coverage.",
    cta: "Explore project",
    url: "https://youtu.be/vWurLA81Fw8?si=xFae11jdrk9KZZZP"
  },
  {
    id: "qa-beginner-2",
    level: "Phase 1 — Beginner (API Basics)",
    title: "REST API Testing with Postman",
    description:
      "Test user, product, and order APIs using Postman collections, environments, assertions, and Newman reports.",
    cta: "Explore project",
    url: "https://youtu.be/VywxIQ2ZXw4?si=lrzRdYycDDIdSURz"
  },
  {
    id: "qa-intermediate-1",
    level: "Phase 2 — Intermediate (Web Automation)",
    title: "Web Automation Framework",
    description:
      "Build Selenium or Playwright automation framework using Page Object Model, waits, reports, and cross-browser execution.",
    cta: "Explore project",
    url: "https://youtu.be/L9U4hgXsGZw?si=JynTvtTi02oQG07O"
  },
  {
    id: "qa-intermediate-2",
    level: "Phase 2 — Intermediate (API Automation)",
    title: "API Automation Framework",
    description:
      "Automate REST APIs using REST Assured / PyTest with JSON validation, data driven tests, and HTML reports.",
    cta: "Explore project",
    url: "https://youtu.be/FjnF-P7FY28?si=goHRz4tLsqRgwepU"
  },
  {
    id: "qa-intermediate-3",
    level: "Phase 2 — Intermediate (Mobile Testing)",
    title: "Mobile App Testing with Appium",
    description:
      "Perform manual and automation testing on Android app including login, search, and checkout flows.",
    cta: "Explore project",
    url: "https://youtu.be/pI5zrUhydyo?si=sZqUy-Ehob3WlTht"
  },
  {
    id: "qa-advanced-1",
    level: "Phase 3 — Advanced (Performance Testing)",
    title: "Performance Testing Project",
    description:
      "Load test APIs using JMeter or k6 and analyze response time, throughput, and bottlenecks.",
    cta: "Explore project",
    url: "https://youtu.be/1cRI8-JWQho?si=TCtIcuBkNJ5uczvc"
  },
  {
    id: "qa-advanced-2",
    level: "Phase 3 — Advanced (Security Testing)",
    title: "Security Testing Project",
    description:
      "Perform OWASP Top 10 testing including SQL injection, XSS, authentication and authorization vulnerabilities.",
    cta: "Explore project",
    url: "https://youtu.be/FxOy6FXqNGU?si=Kwu3R2NxzGcJ_7Bb"
  },
  {
    id: "qa-advanced-3",
    level: "Phase 3 — Advanced (CI/CD Integration)",
    title: "Automation CI/CD Pipeline",
    description:
      "Integrate automation framework with Jenkins or GitHub Actions for scheduled and triggered executions.",
    cta: "Explore project",
    url: "https://youtu.be/XaSdKR2fOU4?si=5Vtsax4RpN-v7iUV"
  },
  {
    id: "qa-capstone-1",
    level: "Phase 4 — Capstone (Industry Simulation)",
    title: "End-to-End QA Capstone Project",
    description:
      "Complete product testing combining manual, automation, API, performance, and CI/CD with full documentation.",
    cta: "Explore project",
    url: "https://youtu.be/BXpLdbPsIt4?si=XVGWXtpXi8EsnZ_n"
  },
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            🧪 Software Testing Project Roadmap — Beginner → Industry Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these QA projects step by step to become a professional,
            industry-ready Software Tester and Automation Engineer.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {p.level}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open documentation for ${p.title}`}
                >
                  Docs ▶
                </a>
              </div>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{p.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {p.cta}
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

                <span className="text-xs text-slate-400">~1–4 weeks</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Always document test cases, automate critical flows, analyze defects,
          and integrate with CI/CD — that’s how QA engineers become industry ready.
        </footer>
      </div>
    </section>
  );
}
