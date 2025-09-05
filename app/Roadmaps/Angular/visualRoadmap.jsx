import React from 'react';

export default function AngularRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Prerequisites & Basics",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Web Fundamentals", 
          category: "Prerequisites",
          details: "HTML5 semantic elements, forms, media, canvas. CSS3 flexbox, grid, animations, responsive design. Strong foundation in web technologies before Angular."
        },
        { 
          step: "Step - 2", 
          topic: "JavaScript ES6+ Mastery", 
          category: "Core Programming",
          details: "Variables (let, const), functions, arrow functions, DOM manipulation, arrays, objects, loops, classes & modules. Modern JavaScript fundamentals."
        },
        { 
          step: "Step - 3", 
          topic: "TypeScript Deep Dive", 
          category: "Language Foundation",
          details: "Types (any, union, interface, enum), generics, OOP with TS (classes, inheritance), decorators & metadata. Critical for Angular development."
        },
        { 
          step: "Step - 4", 
          topic: "Angular Basics & Setup", 
          category: "Framework Fundamentals",
          details: "Node.js + Angular CLI setup, project structure (src/app, modules, components), understanding the Angular ecosystem and architecture."
        },
      ],
    },
    {
      title: "Core Concepts",
      subtitle: "Components & Services",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Components Architecture", 
          category: "Component System",
          details: "Templates (HTML), Styles (CSS/SCSS), Class (TS). Data Binding: Interpolation {{}}, Property [ ], Event ( ), Two-way [( )]."
        },
        { 
          step: "Step - 6", 
          topic: "Directives & Pipes", 
          category: "Template Features",
          details: "Built-in directives: *ngIf, *ngFor, [ngClass], [ngStyle]. Creating custom pipes for data transformation and built-in pipes usage."
        },
        { 
          step: "Step - 7", 
          topic: "Services & Dependency Injection", 
          category: "Service Layer",
          details: "Creating services, dependency injection patterns, singleton services, hierarchical injectors. Lifecycle hooks (ngOnInit, ngOnDestroy, etc.)."
        },
        { 
          step: "Step - 8", 
          topic: "Routing & Navigation", 
          category: "App Navigation",
          details: "RouterModule, Routes configuration, navigation with routerLink, route parameters (:id), child routes, lazy loading, route guards."
        },
      ],
    },
    {
      title: "Advanced Features",
      subtitle: "Forms, HTTP & State",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Forms Management", 
          category: "User Input",
          details: "Template-driven forms, Reactive forms (FormControl, FormGroup, FormBuilder), form validation (sync & async), custom validators, dynamic forms."
        },
        { 
          step: "Step - 10", 
          topic: "HTTP & API Communication", 
          category: "Data Layer",
          details: "Angular HttpClient (get, post, put, delete), interceptors (auth, logging, error handling), handling Observables with RxJS, async pipes."
        },
        { 
          step: "Step - 11", 
          topic: "RxJS & State Management", 
          category: "Reactive Programming",
          details: "Observables, Subjects, BehaviorSubjects. RxJS operators: map, filter, debounceTime, switchMap. NgRx for complex state management."
        },
        { 
          step: "Step - 12", 
          topic: "Advanced Angular Concepts", 
          category: "Expert Level",
          details: "Change Detection strategies, Standalone Components (Angular 15+), Content Projection, ViewChild, Dynamic components, Angular Universal SSR."
        },
      ],
    },
    {
      title: "Production Ready",
      subtitle: "Testing, Performance & Deployment",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Testing & Quality Assurance", 
          category: "Code Quality",
          details: "Unit Testing with Jasmine + Karma, component testing with TestBed, mocking services & HTTP calls, E2E testing with Cypress/Playwright."
        },
        { 
          step: "Step - 14", 
          topic: "Performance Optimization", 
          category: "App Performance",
          details: "Lazy loading, preloading strategies, change detection optimization, pure pipes, bundle optimization, tree-shaking, PWA with Service Workers."
        },
        { 
          step: "Step - 15", 
          topic: "DevOps & Deployment", 
          category: "Production Systems",
          details: "Environment configs, CI/CD pipelines (GitHub Actions), Docker, deployment (Firebase, Netlify, Vercel, AWS Amplify), monitoring setup."
        },
        { 
          step: "Step - 16", 
          topic: "Industry Best Practices", 
          category: "Enterprise Ready",
          details: "Component-driven architecture, scalable folder structure, Nx monorepos, linting (ESLint, Prettier), design patterns, role-based access."
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Entry Level", certs: "Google Cloud + Angular via Firebase, Angular University" },
    { level: "Intermediate", certs: "NgRx in Action Certification, Angular Advanced Concepts" },
    { level: "Advanced", certs: "AWS/Azure Frontend Deployment, Google Cloud Professional" },
    { level: "Expert", certs: "Angular Consultant Certification, Enterprise Architecture" },
  ];

  const practiceResources = [
    { category: "Learning Platforms", resources: "Angular.dev, Codevolution, Techsith, Fireship, Traversy Media" },
    { category: "Practice & Code", resources: "StackBlitz, CodeSandbox, Angular Playground, GitHub Projects" },
    { category: "Books & Docs", resources: "Angular Up & Running, NgRx in Action, Official Angular Docs" },
    { category: "Communities", resources: "Angular Discord, Reddit r/Angular, NG-Conf, Stack Overflow" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-[#ffffff] via-white to-[#f3f3f3] min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">⚡ 16 Essential Steps • 🎯 4 Core Phases • 💼 Industry Ready</span>
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
                                <stop offset="0%" stopColor="#DC2626" />
                                <stop offset="50%" stopColor="#3B82F6" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-red-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-red-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-red-50 px-2 py-1 rounded">
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

        {/* Certifications Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Angular Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💻 Angular Learning Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Angular Tech Stack Section */}
        <section className="mt-12 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Angular Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Core Technologies</div>
              <div className="text-red-100">TypeScript, RxJS, Angular CLI, Node.js, npm/yarn</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">UI Frameworks</div>
              <div className="text-red-100">Angular Material, PrimeNG, NG-Zorro, Tailwind CSS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">State Management</div>
              <div className="text-red-100">NgRx, Akita, Services, Angular Signals, RxJS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing & Tools</div>
              <div className="text-red-100">Jasmine, Karma, Cypress, Jest, Angular DevTools</div>
            </div>
          </div>
        </section>

        {/* Angular Project Ideas Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🚀 Angular Portfolio Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">🎯 Beginner Projects</div>
              <div className="text-sm text-gray-600">To-Do App with CRUD, Weather App with API, Basic Blog with routing, Calculator with reactive forms</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🔥 Intermediate Projects</div>
              <div className="text-sm text-gray-600">E-commerce app with cart, Social media dashboard, Real-time chat app, Task management system</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">⚡ Advanced Projects</div>
              <div className="text-sm text-gray-600">Multi-tenant SaaS app, PWA with offline support, SSR blog with Angular Universal, Micro-frontend architecture</div>
            </div>
          </div>
        </section>

        {/* Angular Specialization Paths */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Angular Career Specializations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-red-600 mb-2">🎨 Frontend Specialist</div>
              <div className="text-sm text-gray-600">UI/UX focused, Angular Material expert, Component library creator</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🏗️ Full-Stack Developer</div>
              <div className="text-sm text-gray-600">Angular + NestJS, MEAN/MERN stack, API integration specialist</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">📱 Mobile Developer</div>
              <div className="text-sm text-gray-600">Angular + Ionic, Hybrid mobile apps, Capacitor integration</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🚀 Enterprise Architect</div>
              <div className="text-sm text-gray-600">Nx monorepos, Micro-frontends, Large-scale Angular systems</div>
            </div>
          </div>
        </section>

        {/* Angular Ecosystem Section */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🌟 Angular Ecosystem 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-red-600 mb-2">🎯 Latest Features</div>
              <div className="text-sm text-gray-600">Angular Signals, Standalone Components, Optional Injectors, Control Flow Syntax (@if, @for)</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🔧 Developer Tools</div>
              <div className="text-sm text-gray-600">Angular DevTools, ng update, ng add, Angular Language Service, Nx Dev Tools</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🚀 Performance</div>
              <div className="text-sm text-gray-600">OnPush Change Detection, Lazy Loading, Tree-shaking, Bundle Analysis, Image Optimization</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: Angular development is about building scalable, maintainable, and performant web applications. Master TypeScript, embrace reactive programming with RxJS, and always think component-first!
          </p>
        </div>
      </div>
    </main>
  );
}