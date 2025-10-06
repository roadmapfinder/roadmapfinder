

export const phases = [
  {
    id: 1,
    title: "Programming & Core Java",
    subtitle: "0–3 months",
    description: "Understand programming fundamentals, OOP, Java syntax, and problem solving",
    color: "bg-green-500",
    sections: [
      {
        title: "Java Basics",
        items: [
          "JVM, JRE, JDK",
          "Data Types, Variables, Operators",
          "Input/Output, Loops, Conditionals",
          "Functions & Methods"
        ]
      },
      {
        title: "Object-Oriented Programming",
        items: [
          "Classes & Objects",
          "Constructors",
          "Inheritance, Polymorphism, Encapsulation, Abstraction"
        ]
      },
      {
        title: "Core Java Concepts",
        items: [
          "Packages, Access Modifiers",
          "Exception Handling",
          "Wrapper Classes",
          "this, super, final, static"
        ]
      },
      {
        title: "Collections Framework",
        items: [
          "List, Set, Map, Queue",
          "Comparable vs Comparator",
          "Generics"
        ]
      },
      {
        title: "Java I/O & File Handling",
        items: [
          "FileReader, FileWriter, BufferedReader, etc."
        ]
      },
      {
        title: "Java 8+ Features",
        items: [
          "Streams API",
          "Lambda Expressions",
          "Functional Interfaces",
          "Optional, Method References"
        ]
      },
      {
        title: "Practice",
        items: [
          "Solve 100+ problems on LeetCode, HackerRank, CodeStudio"
        ]
      },
      {
        title: "Mini Projects",
        items: [
          "Console-based Library Management System",
          "Banking App with OOP + Exception handling"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced Java & Backend Development",
    subtitle: "3–6 months",
    description: "Move into enterprise-level backend development using modern frameworks",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Java Advanced",
        items: [
          "Multithreading & Concurrency",
          "Executors, Synchronization, Locks",
          "Java Memory Management, Garbage Collection"
        ]
      },
      {
        title: "Database Connectivity",
        items: [
          "JDBC (Database Connectivity)"
        ]
      },
      {
        title: "Build Tools & Dependencies",
        items: [
          "Maven / Gradle — Dependency Management",
          "Maven structure, Lifecycle"
        ]
      },
      {
        title: "Logging",
        items: [
          "SLF4J, Log4J, Lombok"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Spring & Spring Boot",
    subtitle: "6–9 months",
    description: "Master industry backend stack with REST APIs, security, and testing",
    color: "bg-orange-500",
    sections: [
      {
        title: "Spring Core",
        items: [
          "IoC Container, Beans, Dependency Injection"
        ]
      },
      {
        title: "Spring Boot",
        items: [
          "Auto-Configuration, Starters, Profiles"
        ]
      },
      {
        title: "REST API Development",
        items: [
          "Exception Handling (ControllerAdvice)"
        ]
      },
      {
        title: "Spring Data JPA",
        items: [
          "ORM, Entity Relationships, CRUD Repositories",
          "Hibernate, JPQL, Criteria API"
        ]
      },
      {
        title: "Spring Security",
        items: [
          "Authentication, Authorization",
          "JWT-based login",
          "Role-based access control"
        ]
      },
      {
        title: "Spring AOP",
        items: [
          "Cross-cutting concerns, Logging, Transactions"
        ]
      },
      {
        title: "Spring Validation",
        items: [
          "DTOs, Request Validation, Custom Validators"
        ]
      },
      {
        title: "Spring Testing",
        items: [
          "JUnit, Mockito, Integration tests"
        ]
      },
      {
        title: "Projects",
        items: [
          "RESTful Employee Management System",
          "E-Commerce Backend with Authentication & Cart APIs"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Databases & Persistence Layer",
    subtitle: "Parallel with Phase 3",
    description: "Master how Java apps connect and persist data efficiently",
    color: "bg-blue-500",
    sections: [
      {
        title: "SQL Basics",
        items: [
          "Joins, Subqueries, Aggregations"
        ]
      },
      {
        title: "RDBMS",
        items: [
          "MySQL / PostgreSQL setup"
        ]
      },
      {
        title: "NoSQL",
        items: [
          "MongoDB: Collections, Documents, CRUD"
        ]
      },
      {
        title: "Database Design",
        items: [
          "Normalization, Indexing, Transactions"
        ]
      },
      {
        title: "Project",
        items: [
          "Database schema for E-Commerce / Blogging System"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Frontend Development",
    subtitle: "9–12 months",
    description: "Learn modern frontend for full-stack integration",
    color: "bg-purple-500",
    sections: [
      {
        title: "Web Fundamentals",
        items: [
          "HTML5, CSS3, JavaScript (ES6+)",
          "DOM Manipulation, Fetch API"
        ]
      },
      {
        title: "Frontend Framework - React.js",
        items: [
          "Components, Props, State",
          "Hooks (useState, useEffect)",
          "Routing, Axios, Context API",
          "Form handling, validation"
        ]
      },
      {
        title: "UI Libraries",
        items: [
          "TailwindCSS / Bootstrap / Material UI"
        ]
      },
      {
        title: "State Management",
        items: [
          "Redux Toolkit / Zustand"
        ]
      },
      {
        title: "Testing",
        items: [
          "Jest / React Testing Library"
        ]
      },
      {
        title: "Mini Project",
        items: [
          "React Frontend for E-Commerce Backend",
          "Login/Register, Product Listing, Cart, Orders",
          "Integrate with Spring Boot REST APIs"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "API Integration & Fullstack Development",
    subtitle: "12–14 months",
    description: "Connect React frontend with Spring Boot backend",
    color: "bg-red-500",
    sections: [
      {
        title: "API Integration Topics",
        items: [
          "REST API Consumption (Axios, Fetch)",
          "CORS Configuration in Spring Boot",
          "Environment Variables & Build Config",
          "JWT Authentication Flow (Frontend ↔ Backend)",
          "File Uploads, FormData",
          "Pagination, Sorting, Filtering APIs",
          "API Error Handling (Global Exception Handling)"
        ]
      },
      {
        title: "Capstone Project - Full-Stack E-Commerce Platform",
        items: [
          "Spring Boot + React + PostgreSQL + JWT + Docker",
          "Admin Panel (Add/Edit/Delete Products)",
          "User Panel (Cart, Wishlist, Orders)",
          "Email/Password Authentication",
          "Payment Gateway (Stripe / Razorpay)"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "DevOps, CI/CD & Deployment",
    subtitle: "14–16 months",
    description: "Learn how to deploy and scale full-stack apps",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Git & GitHub",
        items: [
          "Branching, PRs, Merge Conflicts, CI triggers"
        ]
      },
      {
        title: "Build & Deploy",
        items: [
          "Docker (Dockerfile, Compose)",
          "Jenkins / GitHub Actions",
          "CI/CD Pipelines"
        ]
      },
      {
        title: "Cloud Services",
        items: [
          "AWS (EC2, RDS, S3)",
          "Render / Railway / Vercel / Netlify"
        ]
      },
      {
        title: "Monitoring",
        items: [
          "Prometheus, Grafana"
        ]
      },
      {
        title: "Containerization",
        items: [
          "Run fullstack project inside containers"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "System Design, DSA & Interview Prep",
    subtitle: "16–18 months",
    description: "Get job-ready for top-tier companies",
    color: "bg-pink-500",
    sections: [
      {
        title: "System Design (Low + High Level)",
        items: [
          "Load Balancers, Caching, Database Sharding",
          "REST vs GraphQL",
          "Microservices, Message Queues (Kafka)"
        ]
      },
      {
        title: "DSA for Interviews",
        items: [
          "Arrays, Strings, LinkedList, Stack, Queue",
          "Trees, Graphs, Recursion",
          "Dynamic Programming"
        ]
      },
      {
        title: "Design Patterns",
        items: [
          "Singleton, Factory, Observer, Builder, MVC"
        ]
      },
      {
        title: "Mock Projects",
        items: [
          "URL Shortener System",
          "Chat App (WebSocket)",
          "Microservices-based Blog Platform"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Portfolio & Real-World Practice",
    subtitle: "18–20 months",
    description: "Build a professional portfolio & contribute to open source",
    color: "bg-teal-500",
    sections: [
      {
        title: "Portfolio Building Steps",
        items: [
          "Host projects on GitHub + CI/CD pipeline",
          "Write README + deployment docs",
          "Build personal portfolio website",
          "Contribute to open-source Java or Spring Boot repos",
          "Prepare for technical interviews"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Tools & Tech Stack Summary",
    subtitle: "Complete Toolkit",
    description: "Essential tools and technologies for Java full-stack development",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Language",
        items: ["Java 17+"]
      },
      {
        title: "Backend",
        items: ["Spring Boot, Spring Data JPA, Spring Security"]
      },
      {
        title: "Frontend",
        items: ["React.js, TailwindCSS"]
      },
      {
        title: "Database",
        items: ["MySQL, PostgreSQL, MongoDB"]
      },
      {
        title: "Tools",
        items: ["Maven, Git, Docker, Postman"]
      },
      {
        title: "Cloud",
        items: ["AWS, Render, Railway"]
      },
      {
        title: "CI/CD",
        items: ["Jenkins, GitHub Actions"]
      },
      {
        title: "Testing",
        items: ["JUnit, Mockito, Jest"]
      }
    ]
  }
];
