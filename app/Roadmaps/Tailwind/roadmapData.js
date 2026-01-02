export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Mandatory Foundation",
    description: "Master HTML & CSS fundamentals before starting Tailwind",
    color: "bg-red-600",
    sections: [
      {
        title: "HTML Fundamentals",
        items: [
          "Semantic HTML → header, nav, main, section, article, footer elements",
          "Forms & Inputs → input types, validation, form structure",
          "Accessibility Basics → label, alt attributes, ARIA roles",
          "Practice: Build clean HTML pages without any CSS styling"
        ]
      },
      {
        title: "CSS Core Fundamentals",
        items: [
          "Box Model → Content, padding, border, margin understanding",
          "Flexbox → Flex containers, alignment, direction, wrapping",
          "Grid → Grid containers, template areas, auto-placement",
          "Positioning → Static, relative, absolute, fixed, sticky positioning"
        ]
      },
      {
        title: "Advanced CSS Concepts",
        items: [
          "Responsive Design → Media queries, breakpoints, mobile-first approach",
          "Pseudo Classes → hover, focus, active, visited states",
          "CSS Variables → Custom properties, theming, dynamic values",
          "Practice: Understand what Tailwind utilities actually do under the hood"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Tailwind CSS Foundations",
    subtitle: "Beginner Level",
    description: "Learn utility-first CSS and core Tailwind concepts",
    color: "bg-yellow-500",
    sections: [
      {
        title: "What Tailwind CSS Really Is",
        items: [
          "Utility-first Philosophy → Atomic CSS, inline styling approach",
          "Tailwind vs Bootstrap → Trade-offs, use cases, advantages",
          "How Tailwind Compiles → PostCSS, JIT mode, build process",
          "Design Tokens → Color system, spacing scale, typography hierarchy"
        ]
      },
      {
        title: "Installing Tailwind CSS",
        items: [
          "CDN Setup → Quick prototyping, learning environment (not production)",
          "Vite + Tailwind → Modern build tool, fast HMR, configuration",
          "React + Tailwind → Create React App, component styling patterns",
          "Next.js + Tailwind → App Router setup, server components, optimization"
        ]
      },
      {
        title: "Layout Utilities",
        items: [
          "Container & Display → container, flex, grid, block, inline-flex, hidden",
          "Flexbox Utilities → justify-*, items-*, flex-row, flex-col, gap",
          "Grid Utilities → grid-cols-*, grid-rows-*, col-span, row-span",
          "Spacing → Padding (p-*), margin (m-*), negative margins, space-x/y"
        ]
      },
      {
        title: "Core Styling Utilities",
        items: [
          "Sizing → w-*, h-*, min/max sizes, aspect ratios, logical properties",
          "Typography → text-*, font-*, tracking, leading, line-clamp",
          "Colors → Color palette system, opacity modifiers, gradients",
          "Practice: Translate Figma designs into Tailwind utility classes"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Responsive & Interactive UI",
    subtitle: "Intermediate Level",
    description: "Build responsive, interactive, and accessible interfaces",
    color: "bg-orange-500",
    sections: [
      {
        title: "Responsive Design",
        items: [
          "Breakpoints → sm, md, lg, xl, 2xl breakpoint system",
          "Mobile-first Design → Base styles, progressive enhancement",
          "Container Queries → @container, size-based styling (2026 important)",
          "Practice: Build layouts that work seamlessly across all devices"
        ]
      },
      {
        title: "State Variants",
        items: [
          "Hover & Focus → hover:, focus:, focus-visible: pseudo-classes",
          "Active & Disabled → active:, disabled:, checked: states",
          "Group & Peer → group-hover:, peer-focus:, sibling interactions",
          "Practice: Create floating labels, toggle switches, interactive cards"
        ]
      },
      {
        title: "Dark Mode",
        items: [
          "Dark Mode Strategy → dark: variant, class vs media strategy",
          "Theme Toggle → System preference detection, manual toggle",
          "LocalStorage Persistence → Saving user preference, SSR considerations",
          "Practice: Implement complete dark mode support in applications"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Customization & Configuration",
    subtitle: "Intermediate Level",
    description: "Create custom design systems and brand-specific configurations",
    color: "bg-blue-500",
    sections: [
      {
        title: "tailwind.config.js Mastery",
        items: [
          "Theme Extension → theme.extend for custom values without overriding",
          "Custom Colors → Brand colors, color palette generation",
          "Typography & Spacing → Custom fonts, spacing scale, border radius",
          "Screens & Animations → Custom breakpoints, keyframes, transitions"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Official Plugins → @tailwindcss/forms, typography, aspect-ratio",
          "Writing Custom Plugins → Utility generation, component creation",
          "Plugin API → addUtilities, addComponents, matchUtilities",
          "Practice: Create reusable plugin for consistent component styles"
        ]
      },
      {
        title: "Arbitrary Values",
        items: [
          "Custom Sizing → w-[42px], h-[calc(100vh-4rem)]",
          "Custom Colors → bg-[#121212], text-[rgb(255,0,0)]",
          "Custom Grid → grid-cols-[1fr_2fr], gap-[2.5rem]",
          "Practice: Handle edge cases where standard utilities don't fit"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Component-Driven Tailwind",
    subtitle: "Advanced Level",
    description: "Build reusable, maintainable component systems",
    color: "bg-purple-500",
    sections: [
      {
        title: "Reusable Components",
        items: [
          "Component Extraction → When to extract, avoiding class repetition",
          "@apply Usage → Strategic usage, avoiding anti-patterns",
          "Component Variants → Size variants, color schemes, states",
          "Anti-patterns → Overusing @apply, overly long class strings"
        ]
      },
      {
        title: "Component Libraries (2026 Stack)",
        items: [
          "shadcn/ui → Copy-paste components, full customization control",
          "Headless UI → Unstyled accessible components by Tailwind Labs",
          "Radix UI → Headless primitives, complex interactions",
          "DaisyUI → Pre-styled components, rapid prototyping (optional)"
        ]
      },
      {
        title: "Accessibility (Non-Negotiable)",
        items: [
          "Keyboard Navigation → Focus management, tab order, skip links",
          "Focus Rings → ring-*, focus-visible:, custom focus styles",
          "ARIA Roles → aria-label, aria-describedby, semantic HTML",
          "Color Contrast → WCAG compliance, contrast checking, accessible colors"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Tailwind + Frameworks",
    subtitle: "Advanced Level",
    description: "Master Tailwind in production frameworks and industry stacks",
    color: "bg-green-500",
    sections: [
      {
        title: "React + Tailwind",
        items: [
          "Conditional Classes → clsx, classnames, cn utility functions",
          "Component Variants → cva (class-variance-authority) patterns",
          "Dynamic Styling → Props to classes mapping, state-driven styles",
          "Practice: Build reusable React components with Tailwind"
        ]
      },
      {
        title: "Next.js + Tailwind (2026 Ready)",
        items: [
          "App Router → Server Components, Client Components styling",
          "Streaming UI → Loading states, Suspense boundaries, skeleton screens",
          "SEO-friendly Usage → Critical CSS, font optimization, performance",
          "Practice: Build full Next.js apps with optimized Tailwind setup"
        ]
      },
      {
        title: "State-Driven UI Styling",
        items: [
          "Loading States → Skeleton screens, spinners, progressive loading",
          "Error States → Error messages, validation feedback, alerts",
          "Empty States → Zero data displays, onboarding, placeholders",
          "Success States → Confirmations, toast notifications, animations"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Performance & Production",
    subtitle: "Advanced Level",
    description: "Optimize for production, build scalable design systems",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Performance Optimization",
        items: [
          "Content Scanning → Proper content paths, avoiding unused CSS",
          "CSS Bundle Analysis → Bundle size optimization, PurgeCSS configuration",
          "Font Optimization → next/font, font-display, variable fonts",
          "JIT Mode → Just-in-time compilation, on-demand CSS generation"
        ]
      },
      {
        title: "Design Systems",
        items: [
          "Design Tokens → Consistent spacing, colors, typography scales",
          "Component Architecture → Atomic design, composition patterns",
          "Documentation → Storybook integration, component guidelines",
          "Practice: This separates junior from senior developers"
        ]
      },
      {
        title: "Figma → Tailwind Workflow",
        items: [
          "Reading Figma Specs → Spacing, colors, typography extraction",
          "Mapping Tokens → Design tokens to Tailwind config mapping",
          "Pixel-perfect Implementation → Precision, consistency, quality",
          "Designer Collaboration → Design handoff, component libraries"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Real-World Projects",
    subtitle: "Expert Level",
    description: "Build production-ready projects demonstrating mastery",
    color: "bg-pink-500",
    sections: [
      {
        title: "Marketing & Landing Pages",
        items: [
          "Landing Page → Hero sections, CTAs, responsive layout, animations",
          "Pricing Page → Comparison tables, feature lists, checkout flows",
          "Portfolio Site → Project showcases, case studies, contact forms",
          "Requirements: Responsive design, dark mode, accessibility, clean code"
        ]
      },
      {
        title: "Dashboard & Admin Interfaces",
        items: [
          "Dashboard UI → Data visualization, charts, metrics, real-time updates",
          "Admin Panel → CRUD operations, tables, filters, pagination",
          "Analytics Dashboard → Graphs, statistics, date pickers, exports",
          "Requirements: Complex layouts, data density, interactive elements"
        ]
      },
      {
        title: "Application Interfaces",
        items: [
          "Authentication UI → Login, signup, password reset, social auth",
          "SaaS Application → Multi-page app, user flows, settings pages",
          "Full Web App → Complete Next.js application with all features",
          "Requirements: Production quality, performance, user experience"
        ]
      },
      {
        title: "Project Checklist",
        items: [
          "Responsive Design → Mobile, tablet, desktop breakpoints tested",
          "Dark Mode → Full dark mode support, theme persistence",
          "Accessibility → WCAG compliance, keyboard navigation, screen readers",
          "Clean Components → Reusable, maintainable, well-structured code"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Career & Industry Readiness",
    subtitle: "Expert Level",
    description: "Prepare for interviews, freelancing, and industry work",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Tailwind Interview Topics",
        items: [
          "Why Utility-first? → Benefits, trade-offs, when to use Tailwind",
          "Tailwind vs CSS Modules → Comparison, use cases, hybrid approaches",
          "Performance Considerations → Bundle size, optimization strategies",
          "Design Systems → Building scalable, maintainable component libraries"
        ]
      },
      {
        title: "Portfolio Optimization",
        items: [
          "Before/After UI → Design improvements, refactoring showcases",
          "Figma + Code Showcase → Design implementation, pixel-perfect results",
          "Lighthouse Scores → Performance, accessibility, SEO optimization",
          "Case Studies → Problem-solving, technical decisions, outcomes"
        ]
      },
      {
        title: "Freelancing & Startup Use",
        items: [
          "Rapid Prototyping → Quick MVP development, client demos",
          "White-label UI → Reusable templates, theming systems",
          "Client Theming → Brand customization, configuration management",
          "Business Value → Fast delivery, maintainability, scalability"
        ]
      },
      {
        title: "Continuous Learning",
        items: [
          "Tailwind Updates → Follow releases, new features, best practices",
          "Community → Discord, Twitter, GitHub discussions, blog posts",
          "Teaching Others → Write tutorials, create content, mentorship",
          "Industry Trends → Component libraries, design tools, CSS evolution"
        ]
      }
    ]
  }
];