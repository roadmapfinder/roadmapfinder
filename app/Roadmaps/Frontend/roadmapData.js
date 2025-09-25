// roadmapData.js
export const phases = [
  {
    id: 1,
    title: "Web Foundations",
    subtitle: "Beginner Level",
    description: "Build a strong base in core web technologies",
    color: "bg-blue-500",
    sections: [
      {
        title: "HTML & CSS",
        items: [
          "Semantic HTML5 (forms, tables, media, accessibility basics)",
          "CSS3 (selectors, box model, positioning, flexbox, grid, transitions)",
          "Responsive design & mobile-first approach",
          "CSS variables & BEM methodology"
        ]
      },
      {
        title: "JavaScript (Core)",
        items: [
          "Variables (let/const), Data types",
          "DOM manipulation",
          "Events & Event delegation",
          "Functions, Scope, Closures",
          "Arrays, Objects, Loops, ES6+ features (arrow functions, spread, destructuring)"
        ]
      },
      {
        title: "Beginner Projects",
        items: [
          "Personal Portfolio Website",
          "Responsive Landing Page",
          "Simple To-Do List (Vanilla JS)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced JavaScript & Web APIs",
    subtitle: "Junior Level",
    description: "Become confident with modern JS and browser APIs",
    color: "bg-purple-500",
    sections: [
      {
        title: "Advanced JavaScript",
        items: [
          "Asynchronous JS (Callbacks, Promises, async/await)",
          "Fetch API & REST API consumption",
          "Modules (ES6 import/export)",
          "Error handling & debugging",
          "Object-Oriented JS & Prototypes"
        ]
      },
      {
        title: "Web APIs & Browser Features",
        items: [
          "LocalStorage / SessionStorage",
          "Geolocation API",
          "File & Media APIs",
          "Web Workers basics"
        ]
      },
      {
        title: "Junior Projects",
        items: [
          "Weather App (API fetch + UI)",
          "Notes App with LocalStorage",
          "Movie Search App using OMDb API"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Frontend Framework (React + Ecosystem)",
    subtitle: "Mid-Level",
    description: "Master a modern frontend framework (React dominates 2025)",
    color: "bg-green-500",
    sections: [
      {
        title: "React Core",
        items: [
          "JSX, Components, Props, State",
          "Events & Forms",
          "Conditional rendering & lists",
          "Hooks (useState, useEffect, useRef, useContext)"
        ]
      },
      {
        title: "React Advanced",
        items: [
          "Custom hooks",
          "React Router (navigation)",
          "Context API & State Management basics",
          "Performance optimization (memo, lazy loading)"
        ]
      },
      {
        title: "Ecosystem & Styling",
        items: [
          "Tailwind CSS (modern styling)",
          "Styled-components / CSS Modules",
          "Component libraries (MUI, ShadCN, Radix UI)"
        ]
      },
      {
        title: "Mid-Level Projects",
        items: [
          "Blog App (React + API)",
          "E-commerce Product Page (React + Tailwind)",
          "Chat UI with Context API"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "State Management & Next.js",
    subtitle: "Mid-Level → Advanced",
    description: "Build scalable, production-ready apps",
    color: "bg-orange-500",
    sections: [
      {
        title: "State Management",
        items: [
          "Redux Toolkit (or Zustand / Jotai alternatives)",
          "Server state management (React Query / TanStack Query)"
        ]
      },
      {
        title: "Next.js (Full-Stack Frontend)",
        items: [
          "File-based routing (App Router)",
          "Server Components & Client Components",
          "API Routes (backend inside Next.js)",
          "Data fetching (SSR, SSG, ISR, CSR)",
          "Authentication (NextAuth.js, Clerk)",
          "Middleware & Edge Functions"
        ]
      },
      {
        title: "APIs & Integrations",
        items: [
          "REST APIs (best practices)",
          "GraphQL basics (Apollo / URQL)",
          "Using third-party APIs"
        ]
      },
      {
        title: "Projects",
        items: [
          "Full-stack Blog with Next.js (Auth + Database)",
          "E-commerce Store (Next.js + Stripe Payments)",
          "Dashboard (Next.js + Charts + Role-based Auth)"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced Frontend Engineering",
    subtitle: "Senior-Level Prep",
    description: "Be industry-ready with real-world practices",
    color: "bg-red-500",
    sections: [
      {
        title: "TypeScript",
        items: [
          "Static typing for React & Next.js",
          "Interfaces, Generics, Utility Types",
          "Type-safe API calls & components"
        ]
      },
      {
        title: "Testing",
        items: [
          "Unit testing (Jest, Vitest)",
          "Component testing (React Testing Library)",
          "E2E testing (Cypress, Playwright)"
        ]
      },
      {
        title: "Performance & Optimization",
        items: [
          "Code splitting, Lazy loading, Bundle analysis",
          "Caching strategies (Service Workers, SWR, TanStack Query)",
          "Web Vitals & Lighthouse audits"
        ]
      },
      {
        title: "CI/CD & DevOps Basics",
        items: [
          "Git & GitHub best practices (branches, PRs, Actions)",
          "Deployment (Vercel, Netlify)",
          "Docker basics (optional)"
        ]
      },
      {
        title: "Senior-Level Projects (Portfolio-Ready)",
        items: [
          "SaaS Dashboard (Next.js + Auth + Payments + Charts)",
          "Social Media App clone (Next.js + Realtime DB like Firebase/Supabase)",
          "Project Management Tool (Kanban board with drag & drop)"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Career & Growth",
    subtitle: "Professional Level",
    description: "Get hired as a frontend engineer",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Portfolio Building",
        items: [
          "3–5 polished projects (case study style, not just code dumps)",
          "Personal website with blog/portfolio"
        ]
      },
      {
        title: "Soft Skills & System Knowledge",
        items: [
          "Collaboration (GitHub, Jira, Notion, Agile workflows)",
          "Understanding UX & accessibility (WCAG 2.2)",
          "API contracts & working with backend teams"
        ]
      },
      {
        title: "Interview Prep",
        items: [
          "DSA basics (arrays, strings, recursion, common LeetCode easy/medium)",
          "System design basics for frontend (SPAs, caching, CDNs)",
          "Whiteboard problems (debouncing, throttling, event bubbling)"
        ]
      }
    ]
  }
];

export const faqData = [
  {
    id: 1,
    question: "How long does it take to complete this entire roadmap?",
    answer: "The timeline varies greatly depending on your dedication and prior experience. For complete beginners studying 2-3 hours daily, expect 12-18 months to reach job-ready level. If you already have some programming background, 8-12 months is more realistic. Remember, learning to code is a marathon, not a sprint!"
  },
  {
    id: 2,
    question: "Should I learn vanilla JavaScript before jumping into React?",
    answer: "Absolutely! A solid foundation in vanilla JavaScript is crucial before learning React. You need to understand concepts like closures, promises, array methods, and ES6+ features. Trying to learn React without proper JavaScript fundamentals is like building a house on weak foundations - it will cause problems later."
  },
  {
    id: 3,
    question: "Is it necessary to learn TypeScript for frontend development?",
    answer: "While not strictly necessary for beginners, TypeScript has become industry standard for professional development. Most companies now prefer or require TypeScript knowledge. Start with JavaScript first, then transition to TypeScript once you're comfortable with React. It will make you a more competitive candidate."
  },
  {
    id: 4,
    question: "How many projects should I build to get hired?",
    answer: "Quality over quantity! Focus on 3-5 well-polished projects that demonstrate different skills: a responsive website (HTML/CSS/JS), a React app with API integration, a full-stack project with authentication, and one project showcasing your interests. Each project should have clean code, good documentation, and be deployed live."
  },
  {
    id: 5,
    question: "Should I focus on React or learn multiple frameworks?",
    answer: "For 2025, React dominates the job market with the highest demand. Master React thoroughly first, including its ecosystem (Next.js, React Router, state management). Once you're proficient in React, you can easily adapt to other frameworks like Vue or Svelte if needed. Depth over breadth is key for landing your first job."
  },
  {
    id: 6,
    question: "What's the difference between a frontend developer and frontend engineer?",
    answer: "Frontend developers typically focus on implementing designs and basic functionality. Frontend engineers have deeper technical skills including system architecture, performance optimization, testing strategies, and often work closely with backend systems. Engineers usually command higher salaries and work on more complex problems."
  },
  {
    id: 7,
    question: "Do I need to learn backend technologies as a frontend developer?",
    answer: "While not required, understanding backend basics makes you more valuable. Learn how APIs work, basic database concepts, and authentication flows. Next.js includes backend capabilities, so you'll naturally pick up some backend knowledge. Full-stack knowledge, even at a basic level, significantly improves your job prospects."
  },
  {
    id: 8,
    question: "How important is CSS? Should I just use a framework like Tailwind?",
    answer: "CSS fundamentals are crucial! While Tailwind is popular and efficient, you need to understand underlying CSS concepts like flexbox, grid, positioning, and the cascade. Many interviews include CSS questions. Learn CSS first, then adopt Tailwind to speed up development while maintaining strong fundamentals."
  },
  {
    id: 9,
    question: "What's the current job market like for frontend developers?",
    answer: "The market remains strong but competitive. Entry-level positions are harder to get due to increased competition, but mid-level and senior roles are in high demand. Companies are looking for developers with React/Next.js skills, TypeScript knowledge, and the ability to build complete features independently. Focus on building a strong portfolio."
  },
  {
    id: 10,
    question: "Should I get a computer science degree or is self-learning enough?",
    answer: "Both paths can lead to successful careers. Self-taught developers can absolutely get hired, especially with a strong portfolio. However, some companies prefer degrees, and CS education provides valuable fundamentals in algorithms and system design. If going the self-taught route, focus extra on data structures, algorithms, and computer science fundamentals."
  },
  {
    id: 11,
    question: "How do I stay updated with the rapidly changing frontend ecosystem?",
    answer: "Follow key resources: React team blog, CSS-Tricks, MDN docs, and Twitter accounts of framework maintainers. Subscribe to newsletters like Frontend Focus and JavaScript Weekly. However, don't chase every new trend - focus on mastering fundamentals and widely-adopted tools. New frameworks come and go, but core concepts remain stable."
  },
  {
    id: 12,
    question: "What salary can I expect as a frontend developer?",
    answer: "Salaries vary greatly by location and experience. In the US, entry-level positions start around $50-70k, mid-level developers earn $70-120k, and senior engineers can make $120k+. In major tech hubs, salaries are significantly higher. Remote work has expanded opportunities globally. Focus on skills first - salary growth follows competency."
  }
];