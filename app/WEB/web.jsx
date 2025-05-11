"use client";
import { useState } from "react";
import Head from "next/head";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "HTML, CSS & JavaScript Basics",
    description: "Build a solid foundation with core web technologies",
    content: {
      whatToLearn: [
        "HTML5 Semantic Tags",
        "CSS Flexbox & Grid",
        "CSS Variables",
        "JavaScript Fundamentals",
        "DOM Manipulation",
        "ES6+ Syntax",
      ],
      bestCourses: {
        english: [
          "The Complete Web Developer in 2025 (Zero to Mastery)",
          "Web Development Bootcamp (Udemy)",
          "Responsive Web Design (freeCodeCamp)",
          "JavaScript30 (Wes Bos)",
        ],
        hindi: [
          "Complete Web Development Course Hindi (Apna College)",
          "HTML, CSS & JavaScript Hindi (CodeWithHarry)",
          "Web Development Masterclass Hindi (Thapa Technical)",
          "JavaScript Tutorial in Hindi (LearnCodeOnline)",
        ],
      },
      toolsToUse: [
        "VS Code",
        "Chrome DevTools",
        "CodePen",
        "GitHub",
        "Netlify/Vercel",
      ],
      docsAndWebsites: [
        "MDN Web Docs",
        "W3Schools",
        "CSS-Tricks",
        "JavaScript.info",
        "Can I Use",
      ],
      projectIdeas: [
        "Personal portfolio website",
        "Landing page for business",
        "Interactive form with validation",
        "Simple to-do application",
      ],
    },
  },
  {
    id: 2,
    title: "Responsive Design & CSS Frameworks",
    description:
      "Create websites that work on all devices and learn CSS frameworks",
    content: {
      whatToLearn: [
        "Media Queries",
        "Mobile-First Approach",
        "Bootstrap/Tailwind CSS",
        "Responsive Typography",
        "Flexbox Layouts",
        "CSS Animation",
      ],
      bestCourses: {
        english: [
          "Responsive Web Design (freeCodeCamp)",
          "CSS Grid & Flexbox for Responsive Layouts (Frontend Masters)",
          "Bootstrap 5 From Scratch (Traversy Media)",
          "Tailwind CSS Zero to Production (Tailwind Labs)",
        ],
        hindi: [
          "Responsive Web Design Hindi (WsCube Tech)",
          "Bootstrap & Tailwind CSS Hindi (CodeWithHarry)",
          "CSS Frameworks Complete Guide Hindi (DigitalDikha)",
          "Mobile-First Design Course Hindi (Tech Gun)",
        ],
      },
      toolsToUse: [
        "Tailwind CSS",
        "Bootstrap",
        "Sass/SCSS",
        "Figma/Adobe XD",
        "BrowserStack",
      ],
      docsAndWebsites: [
        "Tailwind CSS Documentation",
        "Bootstrap Documentation",
        "Sass Guidelines",
        "CSS-Tricks Flexbox Guide",
        "Smashing Magazine",
      ],
      projectIdeas: [
        "Responsive e-commerce homepage",
        "Blog with responsive layouts",
        "Dashboard UI with a framework",
        "Restaurant menu page",
      ],
    },
  },
  {
    id: 3,
    title: "JavaScript & Modern ES6+",
    description:
      "Deepen your JavaScript knowledge with modern features and patterns",
    content: {
      whatToLearn: [
        "Advanced Functions",
        "Promises & Async/Await",
        "Modules & Import/Export",
        "Array Methods",
        "Local Storage & Session Storage",
        "Error Handling",
      ],
      bestCourses: {
        english: [
          "JavaScript: Understanding the Weird Parts (Udemy)",
          "Deep JavaScript Foundations (Frontend Masters)",
          "Asynchronous JavaScript (Academind)",
          "ES6 for Everyone (Wes Bos)",
        ],
        hindi: [
          "Advanced JavaScript Hindi (CodeWithHarry)",
          "ES6+ Complete Course Hindi (Thapa Technical)",
          "JavaScript Namaste Series (Akshay Saini)",
          "Modern JavaScript Hindi (Technical Suneja)",
        ],
      },
      toolsToUse: [
        "ESLint",
        "Prettier",
        "npm/yarn",
        "Webpack/Vite",
        "Chrome DevTools",
      ],
      docsAndWebsites: [
        "JavaScript.info",
        "Eloquent JavaScript Book",
        "JavaScript ES6 - The Complete Developer's Guide",
        "You Don't Know JS (Book Series)",
        "Mozilla Developer Network",
      ],
      projectIdeas: [
        "Weather application using API",
        "Interactive quiz app",
        "Expense tracker with local storage",
        "Task management application",
      ],
    },
  },
  {
    id: 4,
    title: "Frontend Frameworks",
    description:
      "Learn modern JavaScript frameworks for building interactive UIs",
    content: {
      whatToLearn: [
        "Component Architecture",
        "State Management",
        "Props & Data Flow",
        "Routing",
        "Hooks (React)",
        "Virtual DOM",
      ],
      bestCourses: {
        english: [
          "React - The Complete Guide (Academind)",
          "Fullstack Advanced React & GraphQL (Wes Bos)",
          "Vue.js Masterclass (Vue Mastery)",
          "Angular - The Complete Guide (Maximilian)",
        ],
        hindi: [
          "React JS Complete Course Hindi (Thapa Technical)",
          "React Tutorials for Beginners Hindi (CodeWithHarry)",
          "Vue.js Hindi Course (FreeCodeCamp Hindi)",
          "Angular Hindi Complete Course (Tech Gun)",
        ],
      },
      toolsToUse: [
        "Create React App/Next.js",
        "Vue CLI/Nuxt.js",
        "Angular CLI",
        "Redux/Vuex/NgRx",
        "React DevTools",
      ],
      docsAndWebsites: [
        "React Documentation",
        "Vue.js Documentation",
        "Angular Documentation",
        "React Patterns (reactpatterns.com)",
        "State of JS",
      ],
      projectIdeas: [
        "E-commerce product page with cart",
        "Recipe finder with API integration",
        "Social media dashboard",
        "Real-time chat application",
      ],
    },
  },
  {
    id: 5,
    title: "Backend Development",
    description: "Learn server-side programming and build APIs",
    content: {
      whatToLearn: [
        "Node.js Basics",
        "Express.js Framework",
        "RESTful API Design",
        "Authentication & Authorization",
        "Database Integration",
        "Error Handling & Middleware",
      ],
      bestCourses: {
        english: [
          "Node.js, Express, MongoDB & More (Udemy)",
          "APIs for Beginners (freeCodeCamp)",
          "Complete Node.js Developer Course (Andrew Mead)",
          "Server-Side Development with NodeJS (Coursera)",
        ],
        hindi: [
          "Complete Backend Development Hindi (CodeWithHarry)",
          "Node.js & Express Tutorial Hindi (Thapa Technical)",
          "REST API Development Hindi (Tech Gun)",
          "Backend Masterclass Hindi (Learning Simplify)",
        ],
      },
      toolsToUse: [
        "Node.js",
        "Express.js",
        "MongoDB/Mongoose",
        "Postman/Insomnia",
        "JWT Authentication",
      ],
      docsAndWebsites: [
        "Node.js Documentation",
        "Express.js Documentation",
        "REST API Tutorial",
        "MongoDB University",
        "Web.dev Backend Guides",
      ],
      projectIdeas: [
        "RESTful API for blog posts",
        "Authentication system",
        "E-commerce backend",
        "Task manager API",
      ],
    },
  },
  {
    id: 6,
    title: "Databases & ORM",
    description:
      "Store and manage data efficiently with various database systems",
    content: {
      whatToLearn: [
        "SQL vs NoSQL",
        "Database Design",
        "CRUD Operations",
        "Data Relationships",
        "Indexing & Performance",
        "ORM/ODM Libraries",
      ],
      bestCourses: {
        english: [
          "SQL Bootcamp (Udemy)",
          "MongoDB - The Complete Developer's Guide (Academind)",
          "Database Design (Stanford Online)",
          "Prisma Masterclass (Prisma)",
        ],
        hindi: [
          "Complete SQL Masterclass Hindi (Tech Gun)",
          "MongoDB Complete Course Hindi (CodeWithHarry)",
          "Database Design Hindi Tutorial (Geeky Shows)",
          "MySQL/PostgreSQL Hindi (Thapa Technical)",
        ],
      },
      toolsToUse: [
        "MongoDB Atlas",
        "PostgreSQL",
        "MySQL Workbench",
        "Prisma/Sequelize/Mongoose",
        "Redis",
      ],
      docsAndWebsites: [
        "MongoDB Documentation",
        "PostgreSQL Tutorial",
        "Prisma Documentation",
        "SQL Tutorial (W3Schools)",
        "Database Journal",
      ],
      projectIdeas: [
        "User management system",
        "Product inventory database",
        "Social media post storage",
        "Booking/reservation system",
      ],
    },
  },
  {
    id: 7,
    title: "DevOps & Deployment",
    description: "Learn to deploy, monitor and scale web applications",
    content: {
      whatToLearn: [
        "CI/CD Pipelines",
        "Docker & Containerization",
        "Cloud Services (AWS/GCP/Azure)",
        "Serverless Functions",
        "Monitoring & Logging",
        "Environment Variables & Security",
      ],
      bestCourses: {
        english: [
          "Docker & Kubernetes: The Complete Guide (Udemy)",
          "AWS Certified Developer (A Cloud Guru)",
          "DevOps for Developers (Pluralsight)",
          "Serverless Framework Bootcamp (Udemy)",
        ],
        hindi: [
          "DevOps Masterclass Hindi (TechWorld)",
          "Docker & Kubernetes Hindi (CodeWithHarry)",
          "AWS Tutorial for Beginners Hindi (Great Learning)",
          "Cloud Deployment Hindi (Tech Gun)",
        ],
      },
      toolsToUse: [
        "Docker",
        "GitHub Actions/Jenkins",
        "AWS/Vercel/Netlify",
        "Heroku/Digital Ocean",
        "PM2/Forever",
      ],
      docsAndWebsites: [
        "Docker Documentation",
        "AWS Documentation",
        "Kubernetes Documentation",
        "Vercel Deployment Guides",
        "DevOps Roadmap (roadmap.sh)",
      ],
      projectIdeas: [
        "Dockerized MERN stack application",
        "Serverless API with database",
        "CI/CD pipeline for web app",
        "Multi-environment deployment setup",
      ],
    },
  },
];

export default function Home() {
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title>Web Developer Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for becoming a Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">Web Developer Roadmap</h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-700 text-yellow-300"
              : "bg-gray-200 text-gray-700"
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <div
          className={`mb-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Welcome to the Web Developer Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This roadmap will guide you through the essential skills, tools, and
            resources needed to become a proficient Web Developer. Each section
            contains curated resources in both English and Hindi to help you
            master each stage of the web development journey. Click on any
            section to expand it and explore its contents.
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {roadmapData.map((section) => (
            <div
              key={section.id}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={openSection === section.id}
              >
                <div className="flex items-center">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      darkMode ? "bg-blue-600" : "bg-blue-500"
                    } text-white font-medium`}
                  >
                    {section.id}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openSection === section.id ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Section Content */}
              {openSection === section.id && (
                <div
                  className={`px-6 pb-6 pt-2 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } animate-fadeIn`}
                >
                  {/* What to Learn */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">✅</span>What to Learn
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.whatToLearn.map((item, index) => (
                        <li
                          key={index}
                          className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Courses */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>Best Courses
                    </h4>

                    <div className="space-y-4">
                      {/* English Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In English:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.english.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Hindi Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In Hindi:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.hindi.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tools to Use */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🧰</span>Tools to Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.content.toolsToUse.map((tool, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Docs & Websites */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📘</span>Docs & Websites
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.docsAndWebsites.map(
                        (resource, index) => (
                          <li
                            key={index}
                            className={`flex items-center ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            {resource}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Project Ideas */}
                  <div>
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">💡</span>Project Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.projectIdeas.map((project, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`mt-12 py-8 px-4 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                Web Developer Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a professional Web
                Developer
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="text-xs">
                © 2025 Web Developer Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
