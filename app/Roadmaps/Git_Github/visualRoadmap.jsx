import React from 'react';

export default function GitGitHubRoadmap() {
  const roadmap = [
    {
      title: "Git Foundations",
      subtitle: "Version Control Basics",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Git Fundamentals", 
          category: "Core Concepts",
          details: "Distributed version control system, repository structure, working directory vs staging area vs repository"
        },
        { 
          step: "Step - 2", 
          topic: "Installation & Setup", 
          category: "Environment Setup",
          details: "Install Git CLI, configure user name & email (git config), SSH setup for GitHub authentication"
        },
        { 
          step: "Step - 3", 
          topic: "Essential Commands", 
          category: "Basic Operations",
          details: "git init, clone, status, add, commit, log, diff - master the fundamental workflow operations"
        },
        { 
          step: "Step - 4", 
          topic: "Repository Management", 
          category: "Local Operations",
          details: "Initialize repositories, track changes, staging area workflow, commit history navigation"
        },
        { 
          step: "Step - 5", 
          topic: "File Management", 
          category: "Git Workflow",
          details: ".gitignore patterns, tracking vs untracking files, removing files from Git history"
        },
      ],
    },
    {
      title: "Branching & Merging",
      subtitle: "Parallel Development",
      steps: [
        { 
          step: "Step - 6", 
          topic: "Branch Fundamentals", 
          category: "Branching Strategy",
          details: "Create branches (git branch), switch branches (git checkout/switch), branch naming conventions"
        },
        { 
          step: "Step - 7", 
          topic: "Merging Strategies", 
          category: "Code Integration",
          details: "git merge, fast-forward merges, three-way merges, merge vs rebase workflows"
        },
        { 
          step: "Step - 8", 
          topic: "Conflict Resolution", 
          category: "Merge Conflicts",
          details: "Manual conflict resolution, merge tools, understanding conflict markers, testing after resolution"
        },
        { 
          step: "Step - 9", 
          topic: "Advanced Branching", 
          category: "Branch Workflows",
          details: "Feature branches, hotfix branches, release branches, long-term support (LTS) branches"
        },
        { 
          step: "Step - 10", 
          topic: "Rebase Operations", 
          category: "History Management",
          details: "Interactive rebase, squashing commits, rewriting commit history, when to use rebase vs merge"
        },
      ],
    },
    {
      title: "GitHub & Collaboration",
      subtitle: "Remote Workflows",
      steps: [
        { 
          step: "Step - 11", 
          topic: "Remote Repositories", 
          category: "GitHub Basics",
          details: "git remote, push/pull operations, origin vs upstream, connecting local to GitHub repositories"
        },
        { 
          step: "Step - 12", 
          topic: "Pull Requests", 
          category: "Code Review",
          details: "Creating PRs, review process, approving & merging, PR templates, draft PRs"
        },
        { 
          step: "Step - 13", 
          topic: "Collaboration Workflows", 
          category: "Team Development",
          details: "Forking vs cloning, GitHub Flow, GitFlow workflow, feature branch workflow"
        },
        { 
          step: "Step - 14", 
          topic: "GitHub Issues & Projects", 
          category: "Project Management",
          details: "Issue tracking, labels, milestones, GitHub Projects (Kanban), linking issues to PRs"
        },
        { 
          step: "Step - 15", 
          topic: "Documentation", 
          category: "Project Documentation",
          details: "README best practices, Wiki pages, contributing guidelines, code of conduct"
        },
      ],
    },
    {
      title: "Advanced & Production",
      subtitle: "Enterprise Ready",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Advanced Git Commands", 
          category: "Power User Tools",
          details: "git stash, cherry-pick, revert, reset (hard/soft), reflog, tag management for releases"
        },
        { 
          step: "Step - 17", 
          topic: "GitHub Actions CI/CD", 
          category: "Automation",
          details: "Workflow automation, testing pipelines, deployment automation, marketplace actions"
        },
        { 
          step: "Step - 18", 
          topic: "Security & Best Practices", 
          category: "Enterprise Security",
          details: "Branch protection rules, GPG commit signing, 2FA, GitHub Secrets, security scanning"
        },
        { 
          step: "Step - 19", 
          topic: "Large Scale Management", 
          category: "Enterprise Workflows",
          details: "Monorepo strategies, Git LFS for large files, submodules, semantic versioning, conventional commits"
        },
        { 
          step: "Step - 20", 
          topic: "Team Leadership", 
          category: "Advanced Collaboration",
          details: "Code review standards, team workflows, release management, GitHub Copilot integration"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Git Foundations", project: "Personal Portfolio with Git Version Control" },
    { level: "Branching & Merging", project: "Multi-Feature Development Project" },
    { level: "GitHub & Collaboration", project: "Open Source Contribution Challenge" },
    { level: "Advanced & Production", project: "Full CI/CD Pipeline with GitHub Actions" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
      

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 20 Essential Steps • 🔧 4 Skill Levels • 💼 Industry Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🚀 Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Platforms Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠 Essential Git & GitHub Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Git Clients</div>
              <div className="text-blue-100">GitHub Desktop, GitKraken, SourceTree, VS Code</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">CI/CD Tools</div>
              <div className="text-blue-100">GitHub Actions, Jenkins, GitLab CI, CircleCI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Code Review</div>
              <div className="text-blue-100">GitHub PRs, CodeClimate, SonarQube, Codacy</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Project Management</div>
              <div className="text-blue-100">GitHub Issues, Projects, Milestones, ZenHub</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Documentation</div>
              <div className="text-blue-100">README.md, Wiki, GitHub Pages, GitBook</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Security</div>
              <div className="text-blue-100">Dependabot, CodeQL, Secret Scanning, GPG</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Package Management</div>
              <div className="text-blue-100">GitHub Packages, npm Registry, Docker Hub</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning Resources</div>
              <div className="text-blue-100">Git Documentation, Atlassian Tutorials, Pro Git Book</div>
            </div>
          </div>
        </section>

        {/* Essential Commands Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            ⚡ Must-Know Git Commands (2025)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 mb-2">Basic Operations</h3>
              <p className="text-sm text-gray-600 font-mono">git init, clone, add, commit, push, pull, status, log</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 mb-2">Branching & Merging</h3>
              <p className="text-sm text-gray-600 font-mono">git branch, checkout, switch, merge, rebase, cherry-pick</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 mb-2">Advanced Tools</h3>
              <p className="text-sm text-gray-600 font-mono">git stash, reset, revert, reflog, tag, submodule</p>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            📋 Industry Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">✅ Do's</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Commit often with meaningful messages</li>
                <li>• Use conventional commit format</li>
                <li>• Always branch for new features</li>
                <li>• Write comprehensive README files</li>
                <li>• Code review before merging</li>
                <li>• Use semantic versioning</li>
                <li>• Keep .gitignore updated</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">❌ Don'ts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Never commit directly to main/master</li>
                <li>• Don't push large binary files</li>
                <li>• Avoid rewriting public history</li>
                <li>• Don't commit sensitive data</li>
                <li>• Never force push to shared branches</li>
                <li>• Don't ignore merge conflicts</li>
                <li>• Avoid meaningless commit messages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🚀 Master Git & GitHub to become an efficient developer. Practice with real projects and contribute to open source!
          </p>
        </div>
      </div>
    </main>
  );
}