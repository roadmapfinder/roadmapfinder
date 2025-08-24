import React from 'react';

export default function TypeScriptRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "JavaScript Fundamentals", 
          category: "Prerequisites",
          details: "Variables, scopes, functions, objects, arrays, ES6+, async programming, modules"
        },
        { 
          step: "Step - 2", 
          topic: "OOP & Functional Programming", 
          category: "Programming Paradigms",
          details: "Classes, inheritance, encapsulation, pure functions, map/filter/reduce"
        },
        { 
          step: "Step - 3", 
          topic: "TypeScript Setup & Basics", 
          category: "Getting Started",
          details: "TypeScript compiler (tsc), tsconfig.json, primitive types, arrays, tuples"
        },
        { 
          step: "Step - 4", 
          topic: "Functions & Type Safety", 
          category: "Type System",
          details: "Typed parameters, return types, optional parameters, rest parameters"
        },
        { 
          step: "Step - 5", 
          topic: "Objects & Interfaces", 
          category: "Structural Typing",
          details: "Object annotations, interfaces vs types, enums, literal types"
        },
        { 
          step: "Step - 6", 
          topic: "Union & Intersection Types", 
          category: "Advanced Types",
          details: "Type aliases, union types, intersection types, type composition"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Advanced Concepts",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Generics & Constraints", 
          category: "Generic Programming",
          details: "Generic functions, interfaces, classes, type constraints with extends"
        },
        { 
          step: "Step - 8", 
          topic: "Type Narrowing & Guards", 
          category: "Type Safety",
          details: "Type guards (typeof, instanceof, in), discriminated unions, type predicates"
        },
        { 
          step: "Step - 9", 
          topic: "Utility Types", 
          category: "Built-in Utilities",
          details: "Partial, Required, Pick, Omit, Readonly, Record, Exclude, Extract"
        },
        { 
          step: "Step - 10", 
          topic: "Function Overloads", 
          category: "Advanced Functions",
          details: "Function overloading, method overloading, call signatures"
        },
        { 
          step: "Step - 11", 
          topic: "Type Assertions & Casting", 
          category: "Type Manipulation",
          details: "Type assertions, const assertions, non-null assertion operator"
        },
        { 
          step: "Step - 12", 
          topic: "Modules & Namespaces", 
          category: "Code Organization",
          details: "ES6 modules, namespaces, module resolution, declaration merging"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Expert Level",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Mapped & Conditional Types", 
          category: "Type Manipulation",
          details: "Mapped types, conditional types, distributive types, type inference"
        },
        { 
          step: "Step - 14", 
          topic: "Template Literals & Infer", 
          category: "Advanced Features",
          details: "Template literal types, infer keyword, recursive types"
        },
        { 
          step: "Step - 15", 
          topic: "Decorators & Metadata", 
          category: "Meta Programming",
          details: "Class, property, method decorators, reflect-metadata"
        },
        { 
          step: "Step - 16", 
          topic: "Declaration Files", 
          category: "Type Definitions",
          details: ".d.ts files, DefinitelyTyped, ambient declarations, module augmentation"
        },
        { 
          step: "Step - 17", 
          topic: "Compiler Configuration", 
          category: "Tooling",
          details: "Strict mode, path mapping, project references, incremental compilation"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Industry Ready",
      steps: [
        { 
          step: "Step - 18", 
          topic: "Frontend Frameworks", 
          category: "React/Angular/Vue",
          details: "React with TS, Next.js, Angular, Vue 3 composition API, type-safe state management"
        },
        { 
          step: "Step - 19", 
          topic: "Backend Development", 
          category: "Node.js/NestJS",
          details: "Express with TS, NestJS, REST APIs, GraphQL, dependency injection"
        },
        { 
          step: "Step - 20", 
          topic: "Database Integration", 
          category: "Type-Safe Data",
          details: "Prisma ORM, TypeORM, Mongoose with TS, schema validation with Zod"
        },
        { 
          step: "Step - 21", 
          topic: "Testing & Quality", 
          category: "Testing",
          details: "Jest with TS, React Testing Library, Cypress, ESLint, Prettier"
        },
        { 
          step: "Step - 22", 
          topic: "Build Tools & DevOps", 
          category: "Production",
          details: "Webpack/Vite, CI/CD, Docker, deployment strategies, performance optimization"
        },
        { 
          step: "Step - 23", 
          topic: "Monorepos & Architecture", 
          category: "Enterprise",
          details: "Nx, Turborepo, project architecture, scalable TypeScript applications"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Todo App with Type Safety" },
    { level: "Intermediate", project: "E-commerce Cart System" },
    { level: "Advanced", project: "Type-Safe API Client Library" },
    { level: "Professional", project: "Full-Stack TypeScript Application" },
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
        <div className="text-center mb-12">
     

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">💻 23 Essential Steps • 🎯 4 Skill Levels • 🚀 Industry Ready</span>
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
            💡 Suggested Projects for Each Level
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

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📚 Essential TypeScript Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Development Tools</div>
              <div className="text-blue-100">VS Code, WebStorm, TypeScript Playground</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning</div>
              <div className="text-blue-100">TypeScript Handbook, Execute Program</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Tools</div>
              <div className="text-blue-100">Vite, Webpack, esbuild, tsc</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-blue-100">Jest, Vitest, Testing Library</div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🎯 TypeScript Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="text-lg font-semibold text-gray-800 mb-3">Type Safety First</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Enable strict mode in tsconfig.json</li>
                <li>• Avoid <code className="bg-gray-100 px-1 rounded">any</code> type, prefer <code className="bg-gray-100 px-1 rounded">unknown</code></li>
                <li>• Use type guards for runtime safety</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="text-lg font-semibold text-gray-800 mb-3">Clean Architecture</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use interfaces for contracts</li>
                <li>• Implement proper error handling</li>
                <li>• Follow SOLID principles</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="text-lg font-semibold text-gray-800 mb-3">Performance</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use incremental compilation</li>
                <li>• Implement proper tree shaking</li>
                <li>• Optimize bundle size with code splitting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            💻 Remember: TypeScript mastery comes from practice, building real projects, and understanding the type system deeply!
          </p>
        </div>
      </div>
    </main>
  );
}