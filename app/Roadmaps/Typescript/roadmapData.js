// roadmapData.js - TypeScript Development Roadmap Data

export const phases = [
  {
    id: 1,
    title: "Beginner (Fundamentals)",
    subtitle: "Foundational Level",
    description: "Understand TypeScript basics, tooling, and add types to small apps",
    color: "bg-green-500",
    sections: [
      {
        title: "Prerequisites & Setup",
        items: [
          "Modern JavaScript → let/const, arrow functions, promises/async, ES6+ modules",
          "Template Literals → String interpolation, multi-line strings, tagged templates",
          "Node & npm → Package management, scripts, basic CLI usage",
          "Installation → npm init -y && npm i -D typescript, npx tsc --init"
        ]
      },
      {
        title: "Core Type System",
        items: [
          "Basic Types → string, number, boolean, null, undefined, any, unknown",
          "Type Inference → Automatic type detection, when to annotate explicitly",
          "Type Annotations → Variable typing, function signatures, explicit declarations",
          "Arrays & Tuples → Type arrays, fixed-length tuples, readonly arrays"
        ]
      },
      {
        title: "Functions & Objects",
        items: [
          "Function Types → Parameter types, return types, void, never types",
          "Optional Parameters → Optional/default params, rest parameters, function overloads",
          "Interfaces → Object shape definitions, extending interfaces, index signatures",
          "Type Aliases → Creating reusable types, interface vs type differences"
        ]
      },
      {
        title: "First TypeScript Projects",
        items: [
          "Union & Intersection Types → Combining types with | and & operators",
          "Enum Basics → Numeric enums, string enums, const enums",
          "tsconfig.json → compilerOptions, include, exclude, target settings",
          "Small JS Conversion → Convert todo/calculator app, fix compiler errors"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate (Real-World Apps)",
    subtitle: "Intermediate Level",
    description: "Confidently design types for real apps and use TypeScript with modern frameworks",
    color: "bg-blue-500",
    sections: [
      {
        title: "Advanced Type Features",
        items: [
          "Generics → Function generics, type generics, constraints, default type params",
          "Type Narrowing → typeof, instanceof checks, truthiness narrowing",
          "Type Guards → User-defined type guards, discriminated unions, assertion functions",
          "Conditional Types → Distribute conditionals, infer keyword, ReturnType extraction"
        ]
      },
      {
        title: "Utility Types & Transformations",
        items: [
          "Built-in Utilities → Partial, Required, Pick, Omit, Record, Readonly",
          "Mapped Types → Custom mapped types, key remapping, template literal types",
          "String Manipulation → Template literal types, uppercase, lowercase, capitalize",
          "Advanced Unions → Discriminated unions, union handling, exhaustiveness checking"
        ]
      },
      {
        title: "Framework Integration",
        items: [
          "React + TypeScript → Props typing, event handlers, JSX.Element, generics in components",
          "Next.js Setup → create-next-app with TS, auto-configured tsconfig, typed routes",
          "Node Backend → ts-node for dev, compile for prod, module node18 flags",
          "Declaration Files → .d.ts files, ambient types, module augmentation"
        ]
      },
      {
        title: "Tooling & Best Practices",
        items: [
          "ESLint Integration → @typescript-eslint/parser, type-aware linting rules",
          "Prettier Setup → Code formatting, integration with ESLint",
          "DOM & Lib Types → lib flags in tsconfig, DOM/ES target configurations",
          "Build Tools → Vite for frontend, Next.js for full-stack bundling"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced (Type-System Mastery)",
    subtitle: "Advanced Level",
    description: "Write large-scale typed systems, author libraries, and design ergonomic APIs",
    color: "bg-purple-500",
    sections: [
      {
        title: "Advanced Type-Level Programming",
        items: [
          "Variance Concepts → Covariance/contravariance, readonly variance in arrays/functions",
          "Recursive Types → Tail recursion in types, compiler depth limits",
          "Custom Utilities → DeepReadonly<T>, Merge<T, U>, UnionToTuple<T> patterns",
          "Type Performance → Modularize types, avoid deep instantiations, caching strategies"
        ]
      },
      {
        title: "Monorepo & Build Optimization",
        items: [
          "Project References → composite projects, tsconfig references for monorepos",
          "Incremental Builds → Speed up compilation, isolated package builds",
          "Build Configuration → Output strategies, declaration maps, source maps",
          "Module Systems → ESNext, CommonJS, Node16, bundler resolution strategies"
        ]
      },
      {
        title: "Runtime Validation",
        items: [
          "Schema Validation → Zod for runtime validation, type inference from schemas",
          "Alternative Libraries → io-ts, runtypes, class-validator integration",
          "End-to-End Types → Zod + tRPC for fully typed APIs, client-server safety",
          "External Data → Validate API responses, user input, configuration files"
        ]
      },
      {
        title: "Library Development",
        items: [
          "Package Publishing → Generate .d.ts files, types field in package.json",
          "API Design → Ergonomic types, default generic params, function overloads",
          "Type Testing → tsd or expect-type for compile-time type assertions",
          "Documentation → TSDoc comments, API documentation generation"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Production Ready (Industry Best Practices)",
    subtitle: "Expert Level",
    description: "Build, ship, and maintain TypeScript apps in real production teams",
    color: "bg-red-500",
    sections: [
      {
        title: "Production Configuration",
        items: [
          "Strict Mode → strict: true, noImplicitAny, strictNullChecks enforcement",
          "Compiler Options → noImplicitReturns, noUnusedLocals, forceConsistentCasing",
          "Build Optimization → skipLibCheck usage, incremental compilation, outDir setup",
          "CI Integration → tsc --noEmit, automated type checking in pipelines"
        ]
      },
      {
        title: "Testing & Quality",
        items: [
          "Unit Testing → Jest or Vitest with TypeScript, mock typing, test utilities",
          "E2E Testing → Playwright/Cypress with TypeScript, page object patterns",
          "Type Coverage → Track type safety metrics, avoid any escape hatches",
          "Linting Pipeline → ESLint in CI, type-aware rules, custom rule configuration"
        ]
      },
      {
        title: "Database & API Integration",
        items: [
          "Type-Safe DB → Prisma for TypeScript DX, type-safe query client, migrations",
          "Code Generation → OpenAPI → types, GraphQL codegen, Prisma client generation",
          "Contract Boundaries → Validate external input at runtime and compile-time",
          "API Documentation → OpenAPI specs, automatic type generation, schema validation"
        ]
      },
      {
        title: "Deployment & DevOps",
        items: [
          "Build Pipeline → npm run build && lint && test && typecheck in CI",
          "Docker Builds → Multi-stage builds, compile TS in build stage, runtime optimization",
          "Production Monitoring → Error tracking, performance monitoring, type-safe logging",
          "Version Management → Semantic versioning, dependency updates, breaking changes"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Mastery & Leadership",
    subtitle: "Mastery Level",
    description: "Stay current with TypeScript ecosystem and lead teams effectively",
    color: "bg-gray-800",
    sections: [
      {
        title: "Advanced Patterns & Architecture",
        items: [
          "Design Patterns → Factory, Builder, Strategy patterns with strong typing",
          "Architectural Typing → Hexagonal architecture, domain modeling, type-driven design",
          "Performance Patterns → Lazy evaluation, memoization, optimization techniques",
          "Error Handling → Result types, Either monad, typed error handling patterns"
        ]
      },
      {
        title: "Ecosystem Mastery",
        items: [
          "Latest Features → Follow TypeScript release notes, 5.9+ features, experimental flags",
          "Full-Stack Typing → tRPC + Prisma + Next.js, end-to-end type safety",
          "Playground Mastery → TypeScript Playground, handbook deep dive, type challenges",
          "Library Ecosystem → Know popular libraries, typing quality, DefinitelyTyped contributions"
        ]
      },
      {
        title: "Interview & Hiring Skills",
        items: [
          "Core Knowledge → type vs interface, structural typing, variance, mapped types",
          "API Architecture → End-to-end typing (frontend → API → database)",
          "Performance Debugging → skipLibCheck, incremental, project references understanding",
          "Type Debugging → Read inference chains, diagnose complex type errors"
        ]
      },
      {
        title: "Community & Contribution",
        items: [
          "Open Source → Contribute to DefinitelyTyped, TypeScript issues, library typing",
          "Knowledge Sharing → Technical writing, conference talks, mentoring developers",
          "Team Leadership → Code review standards, architecture decisions, best practices",
          "Industry Trends → TypeScript roadmap, TC39 proposals, framework adoption patterns"
        ]
      }
    ]
  }
];