// roadmapData.js - MERN Stack Roadmap Data

export const phases = [
  {
    id: 1,
    title: "Web Development Foundations",
    subtitle: "Beginner Level",
    description: "Build strong web basics before diving into MERN",
    color: "bg-blue-500",
    sections: [
      {
        title: "HTML5 & CSS3",
        items: [
          "Semantic HTML5 (forms, tables, media, accessibility basics)",
          "CSS3 (flexbox, grid, responsive design, transitions)",
          "CSS frameworks (Tailwind CSS - modern industry choice)",
          "Mobile-first approach & cross-browser compatibility"
        ]
      },
      {
        title: "JavaScript (ES6+)",
        items: [
          "Variables (let/const), functions, scope, closures",
          "DOM manipulation, events, event delegation",
          "Promises, async/await, Fetch API",
          "ES6+ features (arrow functions, destructuring, spread operator)",
          "JSON handling & local storage"
        ]
      },
      {
        title: "Version Control & Tools",
        items: [
          "Git basics (init, add, commit, push, pull)",
          "GitHub workflow (repositories, branches, pull requests)",
          "NPM package manager basics",
          "Code editor setup (VS Code extensions)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Frontend with React",
    subtitle: "Junior Level",
    description: "Master React - the 'R' in MERN stack",
    color: "bg-purple-500",
    sections: [
      {
        title: "React Core Concepts",
        items: [
          "Components, JSX, props, state management",
          "Event handling & form management",
          "Conditional rendering & lists with keys",
          "Hooks (useState, useEffect, useContext, useRef)"
        ]
      },
      {
        title: "React Advanced Features",
        items: [
          "Custom hooks creation & reusability",
          "React Router (navigation & dynamic routing)",
          "Context API for global state management",
          "Performance optimization (React.memo, lazy loading)"
        ]
      },
      {
        title: "React Ecosystem & Styling",
        items: [
          "State management with Redux Toolkit",
          "UI libraries (Material-UI, Chakra UI, shadcn/ui)",
          "Styling solutions (Tailwind CSS, styled-components)",
          "Build tools (Vite, Create React App alternatives)"
        ]
      },
      {
        title: "React Projects",
        items: [
          "Todo App with local state management",
          "Weather App with API integration",
          "Blog interface with React Router"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Backend with Node.js & Express",
    subtitle: "Mid-Level",
    description: "Build robust APIs and server-side logic",
    color: "bg-green-500",
    sections: [
      {
        title: "Node.js Fundamentals",
        items: [
          "Event loop, modules, NPM ecosystem",
          "File system operations, path handling",
          "Environment variables & configuration",
          "Debugging Node.js applications"
        ]
      },
      {
        title: "Express.js Framework",
        items: [
          "Routing, middleware, request/response handling",
          "REST API design & implementation",
          "Error handling & validation",
          "CORS, security headers, rate limiting"
        ]
      },
      {
        title: "Authentication & Security",
        items: [
          "JWT token-based authentication",
          "Password hashing with bcrypt",
          "OAuth2 implementation (Google, GitHub)",
          "Role-based access control (RBAC)"
        ]
      },
      {
        title: "Backend Projects",
        items: [
          "RESTful API for blog system",
          "Authentication system with JWT",
          "File upload service with Multer"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Database with MongoDB",
    subtitle: "Mid-Level → Advanced",
    description: "Master NoSQL database operations and data modeling",
    color: "bg-orange-500",
    sections: [
      {
        title: "MongoDB Basics",
        items: [
          "Documents, Collections, CRUD operations",
          "Query operations & filtering",
          "Indexing for performance optimization",
          "Data types & schema design patterns"
        ]
      },
      {
        title: "Mongoose ODM",
        items: [
          "Schema definition & data modeling",
          "Validation, middleware hooks",
          "Population & relationship management",
          "Query building & aggregation pipelines"
        ]
      },
      {
        title: "Advanced Database Operations",
        items: [
          "Aggregation framework & complex queries",
          "Database transactions & error handling",
          "Performance monitoring & optimization",
          "Backup strategies & data migration"
        ]
      },
      {
        title: "Database Projects",
        items: [
          "User management system with MongoDB",
          "E-commerce product catalog with relationships",
          "Blog system with comments & categories"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Full MERN Integration",
    subtitle: "Senior-Level Prep",
    description: "Connect all pieces into production-ready applications",
    color: "bg-red-500",
    sections: [
      {
        title: "Full-Stack Architecture",
        items: [
          "Client-server communication patterns",
          "API design & documentation with Swagger",
          "Error handling across the stack",
          "Data flow & state synchronization"
        ]
      },
      {
        title: "Advanced Features",
        items: [
          "Real-time features with Socket.io",
          "File uploads & cloud storage (Cloudinary, AWS S3)",
          "Email integration (SendGrid, Nodemailer)",
          "Payment integration (Stripe, PayPal)"
        ]
      },
      {
        title: "Testing & Quality Assurance",
        items: [
          "Unit testing with Jest & React Testing Library",
          "API testing with Supertest & Postman",
          "End-to-end testing with Cypress",
          "Code quality tools (ESLint, Prettier, Husky)"
        ]
      },
      {
        title: "DevOps & Deployment",
        items: [
          "Environment configuration & secrets management",
          "CI/CD pipelines with GitHub Actions",
          "Docker containerization basics",
          "Deployment on Vercel, Netlify, Heroku, Digital Ocean"
        ]
      },
      {
        title: "Production-Ready Projects",
        items: [
          "Full-stack E-commerce platform with payments",
          "Social media application with real-time features",
          "Project management tool with team collaboration"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Professional Development & Career",
    subtitle: "Industry-Ready Level",
    description: "Become job-ready with industry best practices",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced Concepts",
        items: [
          "Microservices architecture introduction",
          "GraphQL with Apollo Server & Client",
          "Serverless functions & edge computing",
          "Performance optimization & monitoring"
        ]
      },
      {
        title: "System Design & Scalability",
        items: [
          "Database design & normalization",
          "Caching strategies (Redis, CDN)",
          "Load balancing & horizontal scaling",
          "API rate limiting & throttling"
        ]
      },
      {
        title: "Portfolio & Career Prep",
        items: [
          "Building impressive portfolio projects",
          "Open source contributions",
          "Technical writing & documentation",
          "Interview preparation (coding challenges, system design)"
        ]
      },
      {
        title: "Industry Skills",
        items: [
          "Agile/Scrum methodology",
          "Code review practices",
          "Technical communication",
          "Continuous learning & staying updated"
        ]
      }
    ]
  }
];

// Additional data for FAQ and other components
export const learningTips = [
  {
    phase: 1,
    tip: "Focus on understanding the fundamentals thoroughly. Don't rush through HTML, CSS, and JavaScript as they form the foundation of everything else."
  },
  {
    phase: 2,
    tip: "Build small projects after learning each React concept. Practice makes perfect with React's component-based thinking."
  },
  {
    phase: 3,
    tip: "Understanding the request-response cycle and middleware concept is crucial for backend development."
  },
  {
    phase: 4,
    tip: "Learn to think in terms of documents and collections. Practice different types of queries and understand indexing."
  },
  {
    phase: 5,
    tip: "This is where everything comes together. Take time to plan your full-stack architecture before coding."
  },
  {
    phase: 6,
    tip: "Focus on building a strong portfolio and contributing to open source projects to demonstrate your skills."
  }
];

export const timeEstimates = {
  beginner: {
    1: "4-6 weeks",
    2: "6-8 weeks", 
    3: "8-10 weeks",
    4: "6-8 weeks",
    5: "10-12 weeks",
    6: "4-6 weeks"
  },
  intermediate: {
    1: "2-3 weeks",
    2: "4-5 weeks",
    3: "6-7 weeks", 
    4: "4-5 weeks",
    5: "8-10 weeks",
    6: "3-4 weeks"
  }
};