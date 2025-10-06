export const phases = [
  {
    id: 1,
    title: "Beginner",
    subtitle: "0–1 month",
    description: "Understand what version control is & confidently use Git locally",
    color: "bg-green-500",
    sections: [
      {
        title: "Concepts",
        items: [
          "What is Version Control System (VCS)",
          "Difference: Git vs GitHub vs GitLab vs Bitbucket",
          "How Git stores data — Snapshots, Commits, Hashes",
          "Repository types — Local, Remote, Bare Repos",
          ".git directory — what it contains"
        ]
      },
      {
        title: "Core Git Commands - Setup",
        items: [
          "git config — Configure user settings",
          "git init — Create repository"
        ]
      },
      {
        title: "Core Git Commands - Snapshot",
        items: [
          "git add — Stage changes",
          "git commit — Record changes",
          "git status — Check working directory status",
          "git log — View commit history"
        ]
      },
      {
        title: "Core Git Commands - View & Undo",
        items: [
          "git diff, git show, git blame — Compare & inspect changes",
          "git restore, git reset, git revert — Undo mistakes safely"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Create a local Git repo",
          "Track a text or code project with commits",
          "Undo changes using git restore",
          "View history with git log --oneline --graph",
          "Edit and version-control a simple 'Notes' project",
          "Write meaningful commit messages (feat:, fix:, docs: style)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate",
    subtitle: "1–2 months",
    description: "Collaborate, branch effectively, and use GitHub professionally",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Branching & Merging",
        items: [
          "Create & switch branches (git branch, git checkout -b)",
          "Merge changes (git merge, git rebase)",
          "Understand Fast-forward vs 3-way merge",
          "Resolve merge conflicts manually"
        ]
      },
      {
        title: "GitHub Essentials",
        items: [
          "Create remote repos",
          "Push & pull (git remote, git push, git pull, git fetch)",
          "Fork & clone other repos",
          "Understand origin vs upstream"
        ]
      },
      {
        title: "Collaboration Workflow",
        items: [
          "Feature branch workflow",
          "Pull Request (PR) process",
          "Code reviews & merging PRs",
          "Protecting branches & enabling PR approvals"
        ]
      },
      {
        title: "Authentication",
        items: [
          "SSH keys & Personal Access Tokens (PAT)",
          "Connecting local Git with GitHub securely"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Collaborate on a small project with a friend",
          "Create PRs, review & merge",
          "Try rebasing your feature branch before merge"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced",
    subtitle: "2–3 months",
    description: "Master advanced Git features & fix complex problems",
    color: "bg-orange-500",
    sections: [
      {
        title: "Advanced Git Tools",
        items: [
          "Stash: git stash, git stash pop, git stash list",
          "Cherry-pick: Move specific commits across branches",
          "Reflog: Recover lost commits (git reflog)",
          "Bisect: Debug commits that broke the code",
          "Tags & Releases: git tag, annotated tags"
        ]
      },
      {
        title: "Branching Strategies",
        items: [
          "GitFlow Workflow",
          "Trunk-Based Development",
          "Release & Hotfix Branches"
        ]
      },
      {
        title: "Configuration Mastery",
        items: [
          ".gitignore, .gitattributes, .gitkeep",
          "Git Hooks — pre-commit, post-merge",
          "Global vs repo-level configs"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Create a GitFlow-based repo",
          "Use stashing, cherry-pick, and revert",
          "Write a pre-commit hook (lint check or code format check)"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Professional GitHub Usage",
    subtitle: "3–4 months",
    description: "Use GitHub like a pro for team & production workflows",
    color: "bg-blue-500",
    sections: [
      {
        title: "GitHub Features",
        items: [
          "GitHub Actions (CI/CD basics)",
          "GitHub Issues, Projects, and Milestones",
          "GitHub Wiki & Discussions",
          "Managing Releases & Tags",
          "CODEOWNERS, templates (ISSUE_TEMPLATE.md, PULL_REQUEST_TEMPLATE.md)"
        ]
      },
      {
        title: "Security & Governance",
        items: [
          "Managing collaborators, roles, teams",
          "Repository settings: visibility, branch protection, signed commits",
          "Secrets & environment variables in Actions",
          "Dependabot alerts"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Automate tests with GitHub Actions",
          "Use Issues → PR → Review → Merge flow",
          "Protect main branch with rules"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry-Level GitOps & DevOps Integration",
    subtitle: "4–6 months",
    description: "Integrate Git into large-scale CI/CD, infrastructure, and DevOps",
    color: "bg-purple-500",
    sections: [
      {
        title: "Enterprise Practices",
        items: [
          "Monorepos vs Polyrepos",
          "Submodules & Subtrees",
          "Git LFS (Large File Storage)",
          "Squash merges vs Rebase merges",
          "Signed Commits (GPG verification)"
        ]
      },
      {
        title: "Git in DevOps",
        items: [
          "GitHub Actions advanced workflows",
          "Automating build, test, deploy",
          "GitOps (ArgoCD / FluxCD basics)",
          "Infrastructure-as-Code versioning (Terraform + Git)",
          "Managing secrets via GitHub Environments"
        ]
      },
      {
        title: "Scaling Git Workflows",
        items: [
          "Managing multiple repos via organizations",
          "Codeowners & approval chains",
          "CI/CD pipelines triggered by tags",
          "Using GitHub CLI (gh)"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Build a CI/CD pipeline using GitHub Actions",
          "Version control your infrastructure repo (IaC)",
          "Manage 2–3 microservices with Git workflows"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Expert & Real-World Engineering",
    subtitle: "6+ months",
    description: "Become a Git/GitHub power user capable of teaching or managing enterprise repos",
    color: "bg-red-500",
    sections: [
      {
        title: "Expert Topics",
        items: [
          "Advanced conflict resolution techniques",
          "Writing and managing Git hooks in JS or Python",
          "Managing submodules in multi-repo systems",
          "Git performance tuning & cleanup (gc, fsck, filter-branch, bfg repo cleaner)",
          "Integrate GitHub with CI/CD tools (Jenkins, GitLab CI, CircleCI)"
        ]
      },
      {
        title: "Real-World Scenarios",
        items: [
          "Fixing detached HEAD issues",
          "Restoring deleted branches",
          "Recovering accidentally overwritten commits",
          "Rebasing large feature branches safely"
        ]
      },
      {
        title: "Final Capstone Project",
        items: [
          "Manage a production-scale repo with CI/CD via GitHub Actions",
          "Protected branches implementation",
          "Auto deploy tags configuration",
          "Issue tracking, templates, releases setup"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Tools & Resources",
    subtitle: "Parallel Throughout",
    description: "Essential tools and platforms for mastering Git & GitHub",
    color: "bg-indigo-500",
    sections: [
      {
        title: "GUI Clients",
        items: [
          "GitKraken — Visual Git interface",
          "SourceTree — Free Git GUI",
          "GitHub Desktop — Official GitHub client"
        ]
      },
      {
        title: "CLI Enhancements",
        items: [
          "gh-cli — GitHub command line tool",
          "lazygit — Terminal UI for Git"
        ]
      },
      {
        title: "Learning Platforms",
        items: [
          "GitHub Learning Lab — Interactive tutorials",
          "Atlassian Git Tutorials — Comprehensive guides",
          "learngitbranching.js.org — Visual and interactive",
          "GitHub Codespaces — Cloud development environment"
        ]
      }
    ]
  }
];