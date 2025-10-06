// components/Projects.jsx
import React from "react";

const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "git-local-repo",
    level: "Git & GitHub — Beginner",
    title: "Local Git Repository Setup",
    description:
      "Create and initialize a local Git repository, add and commit files, and understand .gitignore and version history.",
    url: "https://youtu.be/yUBCXIUs8Aw?si=M3lopABlWtHvJckg" // GitHub Docs — Intro to Git
  },
  {
    id: "git-github-pages",
    level: "Git & GitHub — Beginner",
    title: "Host Portfolio on GitHub Pages",
    description:
      "Build a simple HTML/CSS portfolio and host it using GitHub Pages. Learn about branches, commits, and publishing static websites.",
    url: "https://youtu.be/4eMnz8VbgyM?si=vdNGt9xPnSUSMAyn"
  },
  {
    id: "git-markdown-readme",
    level: "Git & GitHub — Beginner",
    title: "Create a Pro README.md",
    description:
      "Design a professional README using Markdown. Include badges, project description, installation steps, and screenshots.",
    url: "https://youtu.be/rCt9DatF63I?si=cIszwt1O1Aj1jA3Z"
  },
  {
    id: "git-branching-workflow",
    level: "Git & GitHub — Beginner",
    title: "Branching & Merging Practice",
    description:
      "Learn branching strategies by creating multiple branches, making changes, and merging them using Git merge and rebase.",
    url: "https://youtu.be/5e-DLY_spg0?si=X28RIQ8TGZf9X4sg"
  },

  // ---------- INTERMEDIATE PROJECTS ----------
  {
    id: "git-collaboration-pr",
    level: "Git & GitHub — Intermediate",
    title: "Collaborative Project with Pull Requests",
    description:
      "Work with friends on a shared repo. Use forks, branches, and pull requests to simulate a real open-source collaboration.",
    url: "https://youtu.be/ygqx50-JHEE?si=O3vsSzFrH31nwNLG"
  },
  {
    id: "git-conflict-resolution",
    level: "Git & GitHub — Intermediate",
    title: "Merge Conflict Resolution Lab",
    description:
      "Intentionally create and resolve merge conflicts. Learn how to handle them safely using VS Code or the CLI.",
    url: "https://youtu.be/l03tGz4pXoQ?si=oG9knZwbx0PHu6mE"
  },
  {
    id: "git-project-automation",
    level: "Git & GitHub — Intermediate",
    title: "Automate Project Workflow with GitHub Actions",
    description:
      "Create your first GitHub Action to automatically lint, test, or deploy code on push or PR. Learn YAML configuration and CI basics.",
    url: "https://youtu.be/yfBtjLxn_6k?si=gpvONzo4LjMmYZ_b"
  },
  {
    id: "git-collab-open-source",
    level: "Git & GitHub — Intermediate",
    title: "Contribute to Open Source",
    description:
      "Find a beginner-friendly open source project on GitHub, fork it, and make your first pull request (PR).",
    url: "https://youtu.be/o6xikISiz2w?si=z6Q_XnfMcJPsj2VF"
  },

  // ---------- ADVANCED PROJECTS ----------
  {
    id: "git-team-workflow",
    level: "Git & GitHub — Advanced",
    title: "Industry-Level Team Workflow Setup",
    description:
      "Implement Gitflow or trunk-based workflow. Use feature branches, release branches, and protected main branches.",
    url: "https://youtu.be/J9JbzsufemE?si=WC58ubey_BZbamDC"
  },
  {
    id: "git-actions-deploy",
    level: "Git & GitHub — Advanced",
    title: "CI/CD Deployment Pipeline with GitHub Actions",
    description:
      "Build and deploy a Node.js or React app using GitHub Actions and GitHub Secrets for environment variables.",
    url: "https://youtu.be/YLtlz88zrLg?si=w-KSw_ArMujod4Za"
  },
  {
    id: "git-monorepo-management",
    level: "Git & GitHub — Advanced",
    title: "Monorepo Management with Git Submodules",
    description:
      "Manage multiple related projects using submodules or worktrees. Learn about modularization and dependency tracking.",
    url: "https://youtu.be/9iU_IE6vnJ8?si=82IC_J238m3mrERr"
  },
  {
    id: "git-security-audit",
    level: "Git & GitHub — Advanced",
    title: "Security & Secrets Management in GitHub",
    description:
      "Learn to handle secrets using GitHub Secrets, Dependabot, and commit signature verification.",
    url: "https://youtu.be/dPLPSaFqJmY?si=kbwnPHwU7TemUaHT"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧰 Git & GitHub Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            From basic commits to CI/CD automation — real-world projects to master version control and collaboration for production workflows.
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
                Learn More ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Master Git. Collaborate like a pro. Automate your workflow with GitHub Actions 🚀
        </footer>
      </div>
    </section>
  );
}
