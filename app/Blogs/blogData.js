// blogData.js
import bun from "../thumbnails/bun.png";
export const blogsData = [
  {
    id: 1,
    slug: 'vercel-ai-sdk-introduction',
    title: 'Vercel AI SDK: Building AI-Powered Applications Made Easy',
    shortDescription: 'Explore how Vercel AI SDK simplifies building production-grade AI applications with TypeScript and React.',
    fullDescription: 'The Vercel AI SDK is revolutionizing how developers build AI-powered applications. This comprehensive toolkit provides streamlined abstractions for integrating large language models into your applications. With built-in streaming support, response caching, and error handling, you can focus on building great user experiences rather than managing complex AI infrastructure. Learn how to leverage hooks like useChat and useCompletion to build real-time conversational interfaces, and discover best practices for handling token limits, rate limiting, and cost optimization.',
    author: 'Sarah Chen',
    date: 'Oct 10, 2025',
    publishDate: '2025-10-10',
    image: '	https://img.freepik.com/premium-photo/modern-cloud…rotection-online-network_771426-115736.jpg?w=1060',
    category: 'AI/ML',
    readTime: '8 min read',
    readTimeMinutes: 8,
    toolLink: 'https://sdk.vercel.ai',
    tags: ['AI', 'SDK', 'TypeScript', 'React', 'LLM']
  },
  {
    id: 2,
    slug: 'bun-javascript-runtime',
    title: 'Bun: The All-in-One JavaScript Runtime Changing Development',
    shortDescription: 'Discover why Bun is gaining traction as a faster alternative to Node.js with built-in testing and bundling.',
    fullDescription: 'Bun represents a paradigm shift in JavaScript runtime development. Built with Zig for performance, Bun offers significant speed improvements over Node.js for common operations like module loading and script execution. What sets Bun apart is its all-in-one approach: it includes a package manager (compatible with npm/yarn), a test runner with built-in code coverage, and a bundler. This eliminates the need for multiple tools in your development workflow. Explore how Bun\'s compatibility layer works with existing Node.js packages, real-world benchmarks showing performance gains, and when to consider migrating your projects to this innovative runtime.',
    author: 'Alex Rodriguez',
    date: 'Oct 8, 2025',
    publishDate: '2025-10-08',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    category: 'Backend',
    readTime: '10 min read',
    readTimeMinutes: 10,
    toolLink: 'https://bun.sh',
    tags: ['Bun', 'JavaScript', 'Runtime', 'Performance', 'Node.js']
  },
  {
    id: 3,
    slug: 'deno-modern-runtime',
    title: 'Deno: A Modern Runtime for JavaScript and TypeScript',
    shortDescription: 'Learn why Deno is positioned as a secure, modern alternative to Node.js for server-side JavaScript.',
    fullDescription: 'Deno addresses many of Node.js\'s architectural decisions with a modern, security-first approach. Created by Ryan Dahl (Node.js creator), Deno ships with TypeScript support out of the box, eliminating transpilation overhead. Its explicit permissions model means scripts must be granted access to file systems, networks, and environment variables, providing unprecedented security guarantees. The standard library offers well-designed modules without external dependencies, and the centralized tooling includes formatting, linting, and testing. Discover how Deno\'s URL-based imports revolutionize dependency management, explore real-world use cases, and understand when Deno\'s unique features provide significant advantages over traditional Node.js setups.',
    author: 'Maria Garcia',
    date: 'Oct 5, 2025',
    publishDate: '2025-10-05',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    category: 'Backend',
    readTime: '7 min read',
    readTimeMinutes: 7,
    toolLink: 'https://deno.com',
    tags: ['Deno', 'TypeScript', 'Security', 'Runtime', 'JavaScript']
  },
  {
    id: 4,
    slug: 'clerk-authentication-simplified',
    title: 'Clerk: Authentication Infrastructure for Modern Apps',
    shortDescription: 'Simplify user authentication with Clerk and eliminate the complexity of building secure auth systems.',
    fullDescription: 'Building robust authentication systems is complex and error-prone. Clerk abstracts away this complexity with a developer-friendly platform offering multi-factor authentication, social login providers, and session management out of the box. It provides beautiful, customizable UI components that work with React, Next.js, and other frameworks. Clerk handles critical security concerns like password hashing, token management, and CSRF protection, allowing you to focus on your core product. Learn how to implement passwordless authentication, manage user sessions efficiently, and integrate Clerk with your backend APIs using validated session tokens.',
    author: 'James Mitchell',
    date: 'Oct 3, 2025',
    publishDate: '2025-10-03',
    image: 'https://media.istockphoto.com/id/2174719508/photo/multi-factor-authentication-mfa-method-using-mobile-smartphone-and-laptop-to-protect-data.jpg?s=1024x1024&w=is&k=20&c=JJ6nOxnB6QO0PokPeDiI6jHOK4ZgSSpSMh2d14ahXu0=',
    category: 'Security',
    readTime: '6 min read',
    readTimeMinutes: 6,
    toolLink: 'https://clerk.com',
    tags: ['Authentication', 'Security', 'Clerk', 'Next.js', 'React']
  },
  {
    id: 5,
    slug: 'supabase-firebase-alternative',
    title: 'Supabase: Open Source Firebase Alternative with PostgreSQL',
    shortDescription: 'Build scalable applications with Supabase, the open-source Firebase alternative powered by PostgreSQL.',
    fullDescription: 'Supabase brings the developer experience of Firebase with the power and flexibility of PostgreSQL. This open-source platform provides a complete backend infrastructure including real-time databases, authentication, edge functions, and file storage. Unlike Firebase, Supabase gives you direct access to your PostgreSQL database, enabling complex queries, transactions, and data relationships. The platform includes auto-generated APIs, real-time subscriptions, and webhook support for building sophisticated applications. Explore how to structure your database with Postgres-native features, implement row-level security policies, and leverage Supabase\'s JavaScript client library for seamless frontend integration.',
    author: 'Emily Watson',
    date: 'Oct 1, 2025',
    publishDate: '2025-10-01',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    category: 'Database',
    readTime: '9 min read',
    readTimeMinutes: 9,
    toolLink: 'https://supabase.com',
    tags: ['Supabase', 'PostgreSQL', 'Database', 'Firebase', 'Backend']
  },
  {
    id: 6,
    slug: 'langchain-llm-applications',
    title: 'LangChain: Building Intelligent LLM Applications',
    shortDescription: 'Master LangChain to build production-ready applications powered by large language models.',
    fullDescription: 'LangChain is the go-to framework for building sophisticated applications with large language models. It provides abstractions for working with multiple LLM providers, managing conversation memory, creating retrieval-augmented generation (RAG) systems, and orchestrating complex AI workflows. LangChain\'s agent framework enables autonomous decision-making, allowing LLMs to use tools, search the web, and interact with external systems. Learn how to build chatbots that maintain context across conversations, implement semantic search for document retrieval, and create agents that can perform multi-step reasoning. Understand when to use chains versus agents, how to optimize token usage, and best practices for production deployment.',
    author: 'David Park',
    date: 'Sep 28, 2025',
    publishDate: '2025-09-28',
    image: 'https://images.unsplash.com/photo-1758626104169-6835c0bd03e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    category: 'AI/ML',
    readTime: '11 min read',
    readTimeMinutes: 11,
    toolLink: 'https://www.langchain.com',
    tags: ['LangChain', 'LLM', 'AI', 'RAG', 'Chatbots']
  },
  {
    id: 7,
    slug: 'nextjs-15-app-router',
    title: 'Next.js 15: Leveraging the App Router for Modern Web Apps',
    shortDescription: 'Deep dive into Next.js 15 App Router and learn best practices for building performant web applications.',
    fullDescription: 'Next.js 15 brings significant improvements with enhanced App Router capabilities, better performance optimizations, and improved developer experience. The App Router provides intuitive file-based routing with built-in support for layouts, error boundaries, and loading states. Server components by default enable better security, reduced bundle sizes, and simplified data fetching directly in components. Next.js 15 introduces advanced features like incremental static regeneration, middleware for request processing, and edge runtime support for global low-latency execution. Discover best practices for organizing your application, optimizing images and fonts, implementing effective caching strategies, and leveraging the new streaming capabilities for real-time user experiences.',
    author: 'Lisa Johnson',
    date: 'Sep 25, 2025',
    publishDate: '2025-09-25',
    image: 'https://images.unsplash.com/photo-1732020743205-9a1da14e36fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=665',
    category: 'Frontend',
    readTime: '12 min read',
    readTimeMinutes: 12,
    toolLink: 'https://nextjs.org',
    tags: ['Next.js', 'React', 'App Router', 'Server Components', 'Frontend']
  },
  {
    id: 8,
    slug: 'prisma-orm-guide',
    title: 'Prisma ORM: Modernizing Database Access in Node.js',
    shortDescription: 'Streamline your database interactions with Prisma, the intuitive and type-safe ORM for Node.js.',
    fullDescription: 'Prisma revolutionizes database access with its schema-driven approach and auto-generated type-safe client. Instead of writing raw queries or dealing with complex ORM configuration, you define your data model in a declarative schema file. Prisma automatically generates migrations and a client with full TypeScript support, eliminating runtime errors from incorrect queries. The platform includes a visual database browser, powerful query builder, and built-in support for relations and transactions. Learn how to design normalized schemas, optimize queries with selective field loading, implement complex business logic with transactions, and manage schema migrations in production environments.',
    author: 'Robert Thompson',
    date: 'Sep 22, 2025',
    publishDate: '2025-09-22',
    image: 'https://plus.unsplash.com/premium_photo-1672770393097-a88314bd4a1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByaXNtYSUyMGRhdGFiYXNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    category: 'Database',
    readTime: '8 min read',
    readTimeMinutes: 8,
    toolLink: 'https://www.prisma.io',
    tags: ['Prisma', 'ORM', 'TypeScript', 'Database', 'Node.js']
  },
  {
    id: 9,
    slug: 'tailwind-css-best-practices',
    title: 'Tailwind CSS: Building Beautiful UIs with Utility-First CSS',
    shortDescription: 'Master Tailwind CSS and create stunning user interfaces faster than ever before.',
    fullDescription: 'Tailwind CSS transforms web design with its utility-first approach, eliminating the context-switching of traditional CSS writing. Instead of creating named classes, you compose designs directly in your markup using concise utility classes. This approach leads to faster development, easier maintenance, and better design consistency. Tailwind\'s extensive configuration system allows customization of colors, spacing, and other design tokens to match your brand. The JIT compiler generates only the CSS you use, keeping bundle sizes minimal. Learn responsive design patterns, dark mode implementation, component extraction techniques, and how to build a scalable design system with Tailwind in large projects.',
    author: 'Jennifer Lee',
    date: 'Sep 19, 2025',
    publishDate: '2025-09-19',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    category: 'Frontend',
    readTime: '7 min read',
    readTimeMinutes: 7,
    toolLink: 'https://tailwindcss.com',
    tags: ['Tailwind', 'CSS', 'UI', 'Design', 'Frontend']
  },
  {
    id: 10,
    slug: 'shadcn-ui-components',
    title: 'shadcn/ui: Beautiful React Components You Actually Own',
    shortDescription: 'Discover shadcn/ui and build consistent, accessible user interfaces with composable components.',
    fullDescription: 'shadcn/ui provides high-quality, unstyled React components built on Radix UI primitives and styled with Tailwind CSS. Unlike traditional component libraries, shadcn/ui gives you complete ownership—components are copied directly into your project, not installed as dependencies. This approach offers maximum flexibility for customization and eliminates version management concerns. The component library includes buttons, forms, dialogs, dropdowns, and complex patterns like data tables and carousels. Each component is fully accessible out of the box, following WAI-ARIA guidelines. Learn how to compose complex UIs from simple primitives, customize components for your brand, and maintain consistency across large applications.',
    author: 'Michael Brown',
    date: 'Sep 16, 2025',
    publishDate: '2025-09-16',
    image: 'https://images.unsplash.com/photo-1571101628768-6bae026844b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    category: 'Frontend',
    readTime: '6 min read',
    readTimeMinutes: 6,
    toolLink: 'https://ui.shadcn.com',
    tags: ['shadcn/ui', 'React', 'Components', 'Accessibility', 'Tailwind']
  },
  {
    id: 11,
    slug: 'fastapi-python-web',
    title: 'FastAPI: Building Fast, Modern Web APIs with Python',
    shortDescription: 'Create high-performance web APIs with FastAPI and leverage Python for backend development.',
    fullDescription: 'FastAPI combines the elegance of Python with modern web framework design, delivering automatic documentation, data validation, and outstanding performance. Built on Starlette and Pydantic, FastAPI provides async/await support for handling concurrent requests efficiently. Request validation happens automatically based on your type hints, reducing boilerplate and catching errors early. FastAPI generates interactive API documentation (Swagger UI and ReDoc) automatically from your code, eliminating documentation drift. The framework includes built-in support for authentication, dependency injection, and background tasks. Explore how to structure large applications, implement OAuth2 authentication, create sophisticated data models, and deploy FastAPI applications at scale.',
    author: 'Sophia Martinez',
    date: 'Sep 13, 2025',
    publishDate: '2025-09-13',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    category: 'Backend',
    readTime: '9 min read',
    readTimeMinutes: 9,
    toolLink: 'https://fastapi.tiangolo.com',
    tags: ['FastAPI', 'Python', 'API', 'Backend', 'REST']
  },
  {
    id: 12,
    slug: 'docker-containerization',
    title: 'Docker: Containerizing Applications for Scalability',
    shortDescription: 'Learn Docker fundamentals and containerize your applications for consistent deployment across environments.',
    fullDescription: 'Docker containerization ensures applications run consistently across development, testing, and production environments. Containers package your application code, dependencies, and configuration into isolated, lightweight units that can be deployed anywhere Docker is installed. This eliminates the "works on my machine" problem and enables scalable, resilient applications. Docker images are built from simple Dockerfiles defining your application\'s layers, and Docker Compose orchestrates multi-container applications. The ecosystem includes registries for sharing images, networking for inter-container communication, and volume management for persistent data. Learn to write efficient Dockerfiles, optimize image sizes, implement health checks, and integrate Docker into your CI/CD pipeline for automated deployments.',
    author: 'Christopher Lee',
    date: 'Sep 10, 2025',
    publishDate: '2025-09-10',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    category: 'DevOps',
    readTime: '10 min read',
    readTimeMinutes: 10,
    toolLink: 'https://www.docker.com',
    tags: ['Docker', 'Containers', 'DevOps', 'Deployment', 'Infrastructure']
  },
  {
    id: 13,
    slug: 'github-copilot-guide',
    title: 'GitHub Copilot: AI-Assisted Programming for Developers',
    shortDescription: 'Boost your productivity with GitHub Copilot and explore how AI can enhance your coding workflow.',
    fullDescription: 'GitHub Copilot leverages machine learning trained on public code to provide intelligent code suggestions as you type. Powered by OpenAI\'s Codex model, Copilot understands your coding intent from context and generates relevant code snippets, functions, and even test cases. It supports multiple programming languages and integrates seamlessly with popular editors like VS Code and JetBrains IDEs. Copilot excels at boilerplate code, API integrations, and scaffolding, allowing developers to focus on problem-solving rather than repetitive typing. Learn best practices for using Copilot effectively, understand its limitations and when to rely on your own expertise, and explore how to use it for learning new technologies and design patterns.',
    author: 'Amanda White',
    date: 'Sep 7, 2025',
    publishDate: '2025-09-07',
    image: 'https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpdGh1YnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    category: 'AI/ML',
    readTime: '6 min read',
    readTimeMinutes: 6,
    toolLink: 'https://github.com/features/copilot',
    tags: ['GitHub Copilot', 'AI', 'Productivity', 'IDE', 'Coding']
  },
  {
    id: 14,
    slug: 'typescript-advanced-types',
    title: 'TypeScript: Mastering Advanced Type System Features',
    shortDescription: 'Become proficient in TypeScript advanced features including generics, utility types, and conditional types.',
    fullDescription: 'TypeScript\'s advanced type system enables developers to express complex runtime behavior in static types, catching errors at development time rather than in production. Generics allow type-safe abstractions, utility types like Partial, Readonly, and Record reduce boilerplate, and conditional types enable sophisticated type transformations. Template literal types enable string literal type inference, discriminated unions allow type-safe polymorphic code, and the satisfies operator validates that values conform to expected types. Mastering these features enables writing self-documenting code, building reusable libraries, and preventing entire categories of runtime errors. Explore real-world patterns, understand performance implications of complex types, and learn when advanced types add value versus unnecessary complexity.',
    author: 'Kevin Anderson',
    date: 'Sep 4, 2025',
    publishDate: '2025-09-04',
    image: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    category: 'Frontend',
    readTime: '11 min read',
    readTimeMinutes: 11,
    toolLink: 'https://www.typescriptlang.org',
    tags: ['TypeScript', 'Types', 'Generics', 'Programming', 'JavaScript']
  },
  {
    id: 15,
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization: Core Web Vitals Explained',
    shortDescription: 'Understand Core Web Vitals and implement optimization techniques to improve your website performance.',
    fullDescription: 'Web performance directly impacts user experience and search engine rankings. Google\'s Core Web Vitals—Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—provide standardized metrics for measuring real-world performance. LCP measures loading performance (target: under 2.5s), FID measures interactivity (target: under 100ms), and CLS measures visual stability (target: under 0.1). Optimization strategies include code splitting, lazy loading, image optimization, caching, and minimizing JavaScript execution. Use tools like Lighthouse, PageSpeed Insights, and WebPageTest to measure and analyze performance. Learn to identify bottlenecks, implement effective optimizations, and monitor performance in production environments.',
    author: 'Rachel Green',
    date: 'Sep 1, 2025',
    publishDate: '2025-09-01',
    image: 'https://images.unsplash.com/photo-1593438002985-ce805be04da9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    category: 'Performance',
    readTime: '9 min read',
    readTimeMinutes: 9,
    toolLink: 'https://web.dev',
    tags: ['Performance', 'SEO', 'Core Web Vitals', 'Optimization', 'Web Development']
  }
];

// Helper functions for blog operations
export const getAllCategories = () => {
  const categories = [...new Set(blogsData.map(blog => blog.category))];
  return categories.sort();
};

export const getBlogsByCategory = (category) => {
  return blogsData.filter(blog => blog.category === category);
};

export const getBlogBySlug = (slug) => {
  return blogsData.find(blog => blog.slug === slug);
};

export const getRecentBlogs = (limit = 5) => {
  return blogsData
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};

export const searchBlogs = (query) => {
  const lowerQuery = query.toLowerCase();
  return blogsData.filter(blog => 
    blog.title.toLowerCase().includes(lowerQuery) ||
    blog.shortDescription.toLowerCase().includes(lowerQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};