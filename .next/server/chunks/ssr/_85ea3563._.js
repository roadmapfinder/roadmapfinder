module.exports = {

"[project]/app/Blogs/blogs.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogListing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
"use client";
;
;
;
const blogsData = [
    {
        id: 1,
        slug: 'vercel-ai-sdk-introduction',
        title: 'Vercel AI SDK: Building AI-Powered Applications Made Easy',
        shortDescription: 'Explore how Vercel AI SDK simplifies building production-grade AI applications with TypeScript and React.',
        fullDescription: 'The Vercel AI SDK is revolutionizing how developers build AI-powered applications. This comprehensive toolkit provides streamlined abstractions for integrating large language models into your applications. With built-in streaming support, response caching, and error handling, you can focus on building great user experiences rather than managing complex AI infrastructure. Learn how to leverage hooks like useChat and useCompletion to build real-time conversational interfaces, and discover best practices for handling token limits, rate limiting, and cost optimization.',
        author: 'Sarah Chen',
        date: 'Oct 10, 2025',
        image: 'https://images.unsplash.com/photo-1677442d019cecf8d692340b3b503a0260a8c9cb?w=800&h=400&fit=crop',
        category: 'AI/ML',
        readTime: '8 min read',
        toolLink: 'https://sdk.vercel.ai'
    },
    {
        id: 2,
        slug: 'bun-javascript-runtime',
        title: 'Bun: The All-in-One JavaScript Runtime Changing Development',
        shortDescription: 'Discover why Bun is gaining traction as a faster alternative to Node.js with built-in testing and bundling.',
        fullDescription: 'Bun represents a paradigm shift in JavaScript runtime development. Built with Zig for performance, Bun offers significant speed improvements over Node.js for common operations like module loading and script execution. What sets Bun apart is its all-in-one approach: it includes a package manager (compatible with npm/yarn), a test runner with built-in code coverage, and a bundler. This eliminates the need for multiple tools in your development workflow. Explore how Bun\'s compatibility layer works with existing Node.js packages, real-world benchmarks showing performance gains, and when to consider migrating your projects to this innovative runtime.',
        author: 'Alex Rodriguez',
        date: 'Oct 8, 2025',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
        category: 'Backend',
        readTime: '10 min read',
        toolLink: 'https://bun.sh'
    },
    {
        id: 3,
        slug: 'deno-modern-runtime',
        title: 'Deno: A Modern Runtime for JavaScript and TypeScript',
        shortDescription: 'Learn why Deno is positioned as a secure, modern alternative to Node.js for server-side JavaScript.',
        fullDescription: 'Deno addresses many of Node.js\'s architectural decisions with a modern, security-first approach. Created by Ryan Dahl (Node.js creator), Deno ships with TypeScript support out of the box, eliminating transpilation overhead. Its explicit permissions model means scripts must be granted access to file systems, networks, and environment variables, providing unprecedented security guarantees. The standard library offers well-designed modules without external dependencies, and the centralized tooling includes formatting, linting, and testing. Discover how Deno\'s URL-based imports revolutionize dependency management, explore real-world use cases, and understand when Deno\'s unique features provide significant advantages over traditional Node.js setups.',
        author: 'Maria Garcia',
        date: 'Oct 5, 2025',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop',
        category: 'Backend',
        readTime: '7 min read',
        toolLink: 'https://deno.com'
    },
    {
        id: 4,
        slug: 'clerk-authentication-simplified',
        title: 'Clerk: Authentication Infrastructure for Modern Apps',
        shortDescription: 'Simplify user authentication with Clerk and eliminate the complexity of building secure auth systems.',
        fullDescription: 'Building robust authentication systems is complex and error-prone. Clerk abstracts away this complexity with a developer-friendly platform offering multi-factor authentication, social login providers, and session management out of the box. It provides beautiful, customizable UI components that work with React, Next.js, and other frameworks. Clerk handles critical security concerns like password hashing, token management, and CSRF protection, allowing you to focus on your core product. Learn how to implement passwordless authentication, manage user sessions efficiently, and integrate Clerk with your backend APIs using validated session tokens.',
        author: 'James Mitchell',
        date: 'Oct 3, 2025',
        image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b47f?w=800&h=400&fit=crop',
        category: 'Security',
        readTime: '6 min read',
        toolLink: 'https://clerk.com'
    },
    {
        id: 5,
        slug: 'supabase-firebase-alternative',
        title: 'Supabase: Open Source Firebase Alternative with PostgreSQL',
        shortDescription: 'Build scalable applications with Supabase, the open-source Firebase alternative powered by PostgreSQL.',
        fullDescription: 'Supabase brings the developer experience of Firebase with the power and flexibility of PostgreSQL. This open-source platform provides a complete backend infrastructure including real-time databases, authentication, edge functions, and file storage. Unlike Firebase, Supabase gives you direct access to your PostgreSQL database, enabling complex queries, transactions, and data relationships. The platform includes auto-generated APIs, real-time subscriptions, and webhook support for building sophisticated applications. Explore how to structure your database with Postgres-native features, implement row-level security policies, and leverage Supabase\'s JavaScript client library for seamless frontend integration.',
        author: 'Emily Watson',
        date: 'Oct 1, 2025',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        category: 'Database',
        readTime: '9 min read',
        toolLink: 'https://supabase.com'
    },
    {
        id: 6,
        slug: 'langchain-llm-applications',
        title: 'LangChain: Building Intelligent LLM Applications',
        shortDescription: 'Master LangChain to build production-ready applications powered by large language models.',
        fullDescription: 'LangChain is the go-to framework for building sophisticated applications with large language models. It provides abstractions for working with multiple LLM providers, managing conversation memory, creating retrieval-augmented generation (RAG) systems, and orchestrating complex AI workflows. LangChain\'s agent framework enables autonomous decision-making, allowing LLMs to use tools, search the web, and interact with external systems. Learn how to build chatbots that maintain context across conversations, implement semantic search for document retrieval, and create agents that can perform multi-step reasoning. Understand when to use chains versus agents, how to optimize token usage, and best practices for production deployment.',
        author: 'David Park',
        date: 'Sep 28, 2025',
        image: 'https://images.unsplash.com/photo-1555949519-51d4b150e896?w=800&h=400&fit=crop',
        category: 'AI/ML',
        readTime: '11 min read',
        toolLink: 'https://www.langchain.com'
    },
    {
        id: 7,
        slug: 'nextjs-15-app-router',
        title: 'Next.js 15: Leveraging the App Router for Modern Web Apps',
        shortDescription: 'Deep dive into Next.js 15 App Router and learn best practices for building performant web applications.',
        fullDescription: 'Next.js 15 brings significant improvements with enhanced App Router capabilities, better performance optimizations, and improved developer experience. The App Router provides intuitive file-based routing with built-in support for layouts, error boundaries, and loading states. Server components by default enable better security, reduced bundle sizes, and simplified data fetching directly in components. Next.js 15 introduces advanced features like incremental static regeneration, middleware for request processing, and edge runtime support for global low-latency execution. Discover best practices for organizing your application, optimizing images and fonts, implementing effective caching strategies, and leveraging the new streaming capabilities for real-time user experiences.',
        author: 'Lisa Johnson',
        date: 'Sep 25, 2025',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6e2?w=800&h=400&fit=crop',
        category: 'Frontend',
        readTime: '12 min read',
        toolLink: 'https://nextjs.org'
    },
    {
        id: 8,
        slug: 'prisma-orm-guide',
        title: 'Prisma ORM: Modernizing Database Access in Node.js',
        shortDescription: 'Streamline your database interactions with Prisma, the intuitive and type-safe ORM for Node.js.',
        fullDescription: 'Prisma revolutionizes database access with its schema-driven approach and auto-generated type-safe client. Instead of writing raw queries or dealing with complex ORM configuration, you define your data model in a declarative schema file. Prisma automatically generates migrations and a client with full TypeScript support, eliminating runtime errors from incorrect queries. The platform includes a visual database browser, powerful query builder, and built-in support for relations and transactions. Learn how to design normalized schemas, optimize queries with selective field loading, implement complex business logic with transactions, and manage schema migrations in production environments.',
        author: 'Robert Thompson',
        date: 'Sep 22, 2025',
        image: 'https://images.unsplash.com/photo-1573496169842-ba199b587335?w=800&h=400&fit=crop',
        category: 'Database',
        readTime: '8 min read',
        toolLink: 'https://www.prisma.io'
    },
    {
        id: 9,
        slug: 'tailwind-css-best-practices',
        title: 'Tailwind CSS: Building Beautiful UIs with Utility-First CSS',
        shortDescription: 'Master Tailwind CSS and create stunning user interfaces faster than ever before.',
        fullDescription: 'Tailwind CSS transforms web design with its utility-first approach, eliminating the context-switching of traditional CSS writing. Instead of creating named classes, you compose designs directly in your markup using concise utility classes. This approach leads to faster development, easier maintenance, and better design consistency. Tailwind\'s extensive configuration system allows customization of colors, spacing, and other design tokens to match your brand. The JIT compiler generates only the CSS you use, keeping bundle sizes minimal. Learn responsive design patterns, dark mode implementation, component extraction techniques, and how to build a scalable design system with Tailwind in large projects.',
        author: 'Jennifer Lee',
        date: 'Sep 19, 2025',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
        category: 'Frontend',
        readTime: '7 min read',
        toolLink: 'https://tailwindcss.com'
    },
    {
        id: 10,
        slug: 'shadcn-ui-components',
        title: 'shadcn/ui: Beautiful React Components You Actually Own',
        shortDescription: 'Discover shadcn/ui and build consistent, accessible user interfaces with composable components.',
        fullDescription: 'shadcn/ui provides high-quality, unstyled React components built on Radix UI primitives and styled with Tailwind CSS. Unlike traditional component libraries, shadcn/ui gives you complete ownership—components are copied directly into your project, not installed as dependencies. This approach offers maximum flexibility for customization and eliminates version management concerns. The component library includes buttons, forms, dialogs, dropdowns, and complex patterns like data tables and carousels. Each component is fully accessible out of the box, following WAI-ARIA guidelines. Learn how to compose complex UIs from simple primitives, customize components for your brand, and maintain consistency across large applications.',
        author: 'Michael Brown',
        date: 'Sep 16, 2025',
        image: 'https://images.unsplash.com/photo-1632523505494-e6e89dba6eae?w=800&h=400&fit=crop',
        category: 'Frontend',
        readTime: '6 min read',
        toolLink: 'https://ui.shadcn.com'
    },
    {
        id: 11,
        slug: 'fastapi-python-web',
        title: 'FastAPI: Building Fast, Modern Web APIs with Python',
        shortDescription: 'Create high-performance web APIs with FastAPI and leverage Python for backend development.',
        fullDescription: 'FastAPI combines the elegance of Python with modern web framework design, delivering automatic documentation, data validation, and outstanding performance. Built on Starlette and Pydantic, FastAPI provides async/await support for handling concurrent requests efficiently. Request validation happens automatically based on your type hints, reducing boilerplate and catching errors early. FastAPI generates interactive API documentation (Swagger UI and ReDoc) automatically from your code, eliminating documentation drift. The framework includes built-in support for authentication, dependency injection, and background tasks. Explore how to structure large applications, implement OAuth2 authentication, create sophisticated data models, and deploy FastAPI applications at scale.',
        author: 'Sophia Martinez',
        date: 'Sep 13, 2025',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
        category: 'Backend',
        readTime: '9 min read',
        toolLink: 'https://fastapi.tiangolo.com'
    },
    {
        id: 12,
        slug: 'docker-containerization',
        title: 'Docker: Containerizing Applications for Scalability',
        shortDescription: 'Learn Docker fundamentals and containerize your applications for consistent deployment across environments.',
        fullDescription: 'Docker containerization ensures applications run consistently across development, testing, and production environments. Containers package your application code, dependencies, and configuration into isolated, lightweight units that can be deployed anywhere Docker is installed. This eliminates the "works on my machine" problem and enables scalable, resilient applications. Docker images are built from simple Dockerfiles defining your application\'s layers, and Docker Compose orchestrates multi-container applications. The ecosystem includes registries for sharing images, networking for inter-container communication, and volume management for persistent data. Learn to write efficient Dockerfiles, optimize image sizes, implement health checks, and integrate Docker into your CI/CD pipeline for automated deployments.',
        author: 'Christopher Lee',
        date: 'Sep 10, 2025',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
        category: 'DevOps',
        readTime: '10 min read',
        toolLink: 'https://www.docker.com'
    },
    {
        id: 13,
        slug: 'github-copilot-guide',
        title: 'GitHub Copilot: AI-Assisted Programming for Developers',
        shortDescription: 'Boost your productivity with GitHub Copilot and explore how AI can enhance your coding workflow.',
        fullDescription: 'GitHub Copilot leverages machine learning trained on public code to provide intelligent code suggestions as you type. Powered by OpenAI\'s Codex model, Copilot understands your coding intent from context and generates relevant code snippets, functions, and even test cases. It supports multiple programming languages and integrates seamlessly with popular editors like VS Code and JetBrains IDEs. Copilot excels at boilerplate code, API integrations, and scaffolding, allowing developers to focus on problem-solving rather than repetitive typing. Learn best practices for using Copilot effectively, understand its limitations and when to rely on your own expertise, and explore how to use it for learning new technologies and design patterns.',
        author: 'Amanda White',
        date: 'Sep 7, 2025',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
        category: 'AI/ML',
        readTime: '6 min read',
        toolLink: 'https://github.com/features/copilot'
    },
    {
        id: 14,
        slug: 'typescript-advanced-types',
        title: 'TypeScript: Mastering Advanced Type System Features',
        shortDescription: 'Become proficient in TypeScript advanced features including generics, utility types, and conditional types.',
        fullDescription: 'TypeScript\'s advanced type system enables developers to express complex runtime behavior in static types, catching errors at development time rather than in production. Generics allow type-safe abstractions, utility types like Partial, Readonly, and Record reduce boilerplate, and conditional types enable sophisticated type transformations. Template literal types enable string literal type inference, discriminated unions allow type-safe polymorphic code, and the satisfies operator validates that values conform to expected types. Mastering these features enables writing self-documenting code, building reusable libraries, and preventing entire categories of runtime errors. Explore real-world patterns, understand performance implications of complex types, and learn when advanced types add value versus unnecessary complexity.',
        author: 'Kevin Anderson',
        date: 'Sep 4, 2025',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop',
        category: 'Frontend',
        readTime: '11 min read',
        toolLink: 'https://www.typescriptlang.org'
    },
    {
        id: 15,
        slug: 'web-performance-optimization',
        title: 'Web Performance Optimization: Core Web Vitals Explained',
        shortDescription: 'Understand Core Web Vitals and implement optimization techniques to improve your website performance.',
        fullDescription: 'Web performance directly impacts user experience and search engine rankings. Google\'s Core Web Vitals—Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—provide standardized metrics for measuring real-world performance. LCP measures loading performance (target: under 2.5s), FID measures interactivity (target: under 100ms), and CLS measures visual stability (target: under 0.1). Optimization strategies include code splitting, lazy loading, image optimization, caching, and minimizing JavaScript execution. Use tools like Lighthouse, PageSpeed Insights, and WebPageTest to measure and analyze performance. Learn to identify bottlenecks, implement effective optimizations, and monitor performance in production environments.',
        author: 'Rachel Green',
        date: 'Sep 1, 2025',
        image: 'https://images.unsplash.com/photo-1460925895917-afd3f2c9be6b?w=800&h=400&fit=crop',
        category: 'Performance',
        readTime: '9 min read',
        toolLink: 'https://web.dev'
    }
];
function BlogListing() {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleExpand = (id)=>{
        setExpanded((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    const getCategoryColor = (category)=>{
        const colors = {
            'AI/ML': 'bg-purple-100 text-purple-800',
            'Backend': 'bg-blue-100 text-blue-800',
            'Frontend': 'bg-pink-100 text-pink-800',
            'Database': 'bg-green-100 text-green-800',
            'Security': 'bg-red-100 text-red-800',
            'DevOps': 'bg-orange-100 text-orange-800',
            'Performance': 'bg-yellow-100 text-yellow-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold text-slate-900 mb-4",
                            children: "Developer Tools Blog"
                        }, void 0, false, {
                            fileName: "[project]/app/Blogs/blogs.jsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-600",
                            children: "Explore the latest tools and frameworks transforming modern development"
                        }, void 0, false, {
                            fileName: "[project]/app/Blogs/blogs.jsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Blogs/blogs.jsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6",
                    children: blogsData.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:w-64 flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: blog.image,
                                            alt: blog.title,
                                            className: "h-full w-full object-cover md:h-64"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Blogs/blogs.jsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 p-6 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(blog.category)}`,
                                                                children: blog.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Blogs/blogs.jsx",
                                                                lineNumber: 254,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-slate-500",
                                                                children: blog.readTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Blogs/blogs.jsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors",
                                                        children: blog.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 mb-3",
                                                        children: blog.shortDescription
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this),
                                                    expanded[blog.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 mb-4 pt-4 border-t border-slate-200",
                                                        children: blog.fullDescription
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-sm text-slate-500 mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: blog.author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Blogs/blogs.jsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " • ",
                                                                blog.date
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Blogs/blogs.jsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Blogs/blogs.jsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleExpand(blog.id),
                                                        className: "flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors",
                                                        children: expanded[blog.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Blogs/blogs.jsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Read Less"
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Blogs/blogs.jsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Read More"
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: blog.toolLink,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors",
                                                        children: [
                                                            "Visit Tool",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Blogs/blogs.jsx",
                                                                lineNumber: 311,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Blogs/blogs.jsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Blogs/blogs.jsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Blogs/blogs.jsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        }, blog.id, false, {
                            fileName: "[project]/app/Blogs/blogs.jsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Blogs/blogs.jsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Blogs/blogs.jsx",
            lineNumber: 228,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Blogs/blogs.jsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronDown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronDown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-up", __iconNode);
;
 //# sourceMappingURL=chevron-up.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronUp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ExternalLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExternalLink": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_85ea3563._.js.map