// Software Tester Roadmap 2026 data structured according to the roadmap content
export const phases = [
  {
    id: 0,
    title: "Foundations",
    subtitle: "Phase 0 (Must for Every Tester)",
    description: "Build essential knowledge before starting testing career.",
    color: "bg-gray-500",
    sections: [
      {
        title: "🔹 Computer Basics",
        items: [
          "How websites & apps work",
          "Client–Server architecture",
          "HTTP vs HTTPS",
          "Browser dev tools"
        ]
      },
      {
        title: "🔹 SDLC & STLC",
        items: [
          "SDLC Models: Waterfall, Agile, Scrum, Kanban",
          "STLC phases",
          "Roles of QA in Agile"
        ]
      },
      {
        title: "🔹 Software Development Basics",
        items: [
          "What is frontend, backend, database",
          "APIs & microservices concept"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Manual Testing Core",
    subtitle: "Phase 1 (Strong Base)",
    description: "Master fundamental testing concepts and techniques.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🔹 Testing Fundamentals",
        items: [
          "Types of testing: Functional",
          "Regression",
          "Smoke, Sanity",
          "Integration",
          "System",
          "UAT",
          "Black box vs White box",
          "Static vs Dynamic testing"
        ]
      },
      {
        title: "🔹 Test Case Design",
        items: [
          "Test scenario vs test case",
          "Test plan",
          "Test strategy",
          "RTM (Requirement Traceability Matrix)"
        ]
      },
      {
        title: "🔹 Bug Life Cycle",
        items: [
          "Bug severity vs priority",
          "Bug status flow",
          "Writing effective bug reports"
        ]
      },
      {
        title: "🔹 Test Techniques",
        items: [
          "Boundary Value Analysis",
          "Equivalence Partitioning",
          "Decision Table",
          "State Transition",
          "Use Case Testing"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Agile Testing",
    subtitle: "Phase 2",
    description: "Learn testing practices in Agile environments.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔹 Agile Practices",
        items: [
          "Scrum ceremonies",
          "Sprint planning, grooming, retro",
          "Story testing",
          "Acceptance criteria",
          "Definition of Done",
          "Exploratory testing",
          "Shift-left testing"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "SQL for Testers",
    subtitle: "Phase 3",
    description: "Master database testing and validation.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🔹 Learn to:",
        items: [
          "SELECT, WHERE, JOIN",
          "GROUP BY, HAVING, SUBQUERY"
        ]
      },
      {
        title: "✅ Practice:",
        items: [
          "Validate backend data",
          "Cross-check UI vs DB",
          "Data integrity testing"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "API Testing",
    subtitle: "Phase 4",
    description: "Test and validate APIs effectively.",
    color: "bg-red-500",
    sections: [
      {
        title: "🔹 Concepts",
        items: [
          "REST vs SOAP",
          "HTTP methods",
          "Status codes",
          "Headers, body, auth"
        ]
      },
      {
        title: "🔹 Tools",
        items: [
          "Postman",
          "Swagger",
          "Newman"
        ]
      },
      {
        title: "🔹 Automation",
        items: [
          "API automation with Rest Assured / Playwright API"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Automation Testing",
    subtitle: "Phase 5",
    description: "Choose your automation stack and master core concepts.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "🔹 Choose One Main Stack",
        items: [
          "Language: Java → Tool: Selenium",
          "Language: JavaScript → Tool: Playwright / Cypress",
          "Language: Python → Tool: PyTest + Selenium"
        ]
      },
      {
        title: "🔹 Core Topics",
        items: [
          "Locators",
          "Waits",
          "Frames, windows",
          "Alerts",
          "POM framework",
          "TestNG / PyTest",
          "Data driven testing",
          "Hybrid framework"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Web Automation Advanced",
    subtitle: "Phase 6",
    description: "Build professional automation frameworks.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🔹 Advanced Topics",
        items: [
          "Page Object Model",
          "Page Factory",
          "Reporting (Allure / Extent)",
          "Parallel execution",
          "Cross browser testing",
          "Docker integration"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Mobile Testing",
    subtitle: "Phase 7",
    description: "Test mobile applications on Android and iOS.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🔹 Manual",
        items: [
          "Android testing",
          "iOS testing",
          "Device compatibility"
        ]
      },
      {
        title: "🔹 Automation",
        items: [
          "Appium",
          "BrowserStack / SauceLabs"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Performance Testing",
    subtitle: "Phase 8",
    description: "Test application performance under various conditions.",
    color: "bg-teal-500",
    sections: [
      {
        title: "🔹 Learn:",
        items: [
          "Load testing",
          "Stress testing",
          "Spike testing",
          "Endurance testing"
        ]
      },
      {
        title: "🔹 Tool:",
        items: [
          "JMeter / k6"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Security Testing",
    subtitle: "Phase 9 (Basic)",
    description: "Understand and test for common security vulnerabilities.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔹 Topics",
        items: [
          "OWASP Top 10",
          "SQL Injection",
          "XSS",
          "CSRF",
          "Authentication testing"
        ]
      },
      {
        title: "🔹 Tool:",
        items: [
          "Burp Suite"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "CI/CD & DevOps for Testers",
    subtitle: "Phase 10",
    description: "Integrate testing into continuous delivery pipelines.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "🔹 Topics",
        items: [
          "Git & GitHub",
          "Jenkins pipelines",
          "GitHub Actions",
          "Docker basics",
          "Test automation in pipelines"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "AI in Testing",
    subtitle: "Phase 11 (2026 Skill)",
    description: "Leverage AI to enhance testing efficiency.",
    color: "bg-violet-500",
    sections: [
      {
        title: "🔹 AI Topics",
        items: [
          "AI test case generation",
          "Self-healing locators",
          "Visual testing",
          "ChatGPT for test planning",
          "Test impact analysis"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Domain Knowledge",
    subtitle: "Phase 12",
    description: "Gain expertise in specific industry domains.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "🔹 Choose one:",
        items: [
          "Banking / Fintech",
          "Healthcare",
          "E-commerce",
          "Telecom",
          "ERP"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Interview Preparation",
    subtitle: "Phase 13",
    description: "Prepare for QA engineer interviews.",
    color: "bg-rose-500",
    sections: [
      {
        title: "🔹 Manual Questions",
        items: [
          "Difference between verification & validation",
          "Regression vs retesting",
          "Test plan vs test strategy"
        ]
      },
      {
        title: "🔹 Automation Questions",
        items: [
          "Framework architecture",
          "Wait types",
          "Selenium vs Playwright"
        ]
      },
      {
        title: "🔹 SQL",
        items: [
          "Joins",
          "Subqueries"
        ]
      },
      {
        title: "🔹 API",
        items: [
          "Authentication methods",
          "HTTP codes"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Real Projects",
    subtitle: "Phase 14 (Mandatory)",
    description: "Build and document real testing projects.",
    color: "bg-amber-500",
    sections: [
      {
        title: "🔹 Build & document:",
        items: [
          "E-commerce testing project",
          "API automation framework",
          "Web automation framework",
          "Mobile test project",
          "Performance test report"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Resume & Portfolio",
    subtitle: "Phase 15",
    description: "Showcase your skills professionally.",
    color: "bg-lime-500",
    sections: [
      {
        title: "🔹 Your resume must show:",
        items: [
          "Tools",
          "Frameworks",
          "GitHub links",
          "Real test reports",
          "Automation projects"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Career Levels",
    subtitle: "Phase 16",
    description: "Understand the QA career progression path.",
    color: "bg-sky-500",
    sections: [
      {
        title: "🔹 Level Progression",
        items: [
          "Fresher → QA Engineer",
          "2+ yrs → Senior QA",
          "5+ yrs → Lead QA",
          "8+ yrs → QA Manager",
          "10+ yrs → Test Architect"
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Learning Timeline",
    subtitle: "6-Month Plan",
    description: "Structured timeline to reach job readiness.",
    color: "bg-fuchsia-500",
    sections: [
      {
        title: "📅 Month-by-Month Goals",
        items: [
          "Month 1: Manual testing",
          "Month 2: SQL + API",
          "Month 3: Automation",
          "Month 4: Framework",
          "Month 5: CI/CD + Performance",
          "Month 6: Projects + Interview"
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Tools Stack Summary",
    subtitle: "Essential Tools",
    description: "Complete toolkit for modern QA engineers.",
    color: "bg-slate-500",
    sections: [
      {
        title: "🔧 Required Tools",
        items: [
          "Jira",
          "Postman",
          "Selenium / Playwright",
          "Appium",
          "JMeter",
          "GitHub",
          "Jenkins",
          "Docker",
          "BrowserStack"
        ]
      }
    ]
  },
  {
    id: 19,
    title: "What Companies Want in 2026",
    subtitle: "Industry Requirements",
    description: "Skills that make you highly employable.",
    color: "bg-red-600",
    sections: [
      {
        title: "🎯 Key Skills",
        items: [
          "Automation mindset",
          "API expertise",
          "CI/CD knowledge",
          "AI assisted testing",
          "Domain understanding",
          "Strong communication"
        ]
      }
    ]
  }
];