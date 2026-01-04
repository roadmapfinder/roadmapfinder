export const phases = [
  {
    id: 0,
    title: "CSS Foundations",
    subtitle: "Absolute Beginner",
    description: "Understanding how CSS works in browsers and mastering core syntax",
    color: "bg-slate-500",
    sections: [
      {
        title: "What CSS Really Is",
        items: [
          "How CSS works in the browser",
          "CSSOM vs DOM",
          "Inline vs Internal vs External CSS",
          "How browsers render CSS (critical for performance)"
        ]
      },
      {
        title: "Core Syntax (Must-Know)",
        items: [
          "Selectors, Properties, Values",
          "Declarations and Rulesets",
          "Understanding selector { property: value; } structure"
        ]
      },
      {
        title: "Selectors (Deep Understanding)",
        items: [
          "Type selectors (div, p)",
          "Class & ID selectors",
          "Grouping selectors",
          "Descendant vs child selectors",
          "Attribute selectors",
          "Pseudo-classes (:hover, :focus)",
          "Pseudo-elements (::before, ::after)"
        ]
      },
      {
        title: "Goal",
        items: [
          "Write clean, predictable selectors"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Visual Styling Basics",
    subtitle: "Phase 1",
    description: "Master colors, typography, and the critical box model",
    color: "bg-green-500",
    sections: [
      {
        title: "Colors & Units",
        items: [
          "Color formats: HEX, RGB/RGBA, HSL/HSLA (industry preferred)",
          "Units: px, %",
          "em, rem (critical)",
          "vw, vh, vmin, vmax"
        ]
      },
      {
        title: "Typography",
        items: [
          "font-family (system fonts vs web fonts)",
          "font-size scaling",
          "line-height (accessibility)",
          "letter-spacing, font-weight",
          "text-align, text-transform",
          "Google Fonts best practices"
        ]
      },
      {
        title: "Box Model (CRITICAL)",
        items: [
          "content, padding, border, margin",
          "box-sizing: border-box (industry default)",
          "Interview favorite topic"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Layout Mastery",
    subtitle: "Phase 2",
    description: "Core of CSS - Display, Positioning, Flexbox, and Grid",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Display & Positioning",
        items: [
          "block, inline, inline-block",
          "none, visibility",
          "Positioning: static, relative, absolute, fixed, sticky",
          "z-index & stacking context"
        ]
      },
      {
        title: "Flexbox (Must Master)",
        items: [
          "Flex container vs items",
          "flex-direction",
          "justify-content, align-items, align-content",
          "flex-wrap, gap",
          "flex-grow, flex-shrink, flex-basis",
          "90% layouts use Flexbox"
        ]
      },
      {
        title: "CSS Grid (Advanced Layout)",
        items: [
          "Grid container & items",
          "grid-template-columns, grid-template-rows",
          "fr unit",
          "auto-fit vs auto-fill",
          "minmax(), Grid areas",
          "Responsive grids without media queries",
          "Used in dashboards & complex layouts"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Responsive Design",
    subtitle: "Phase 3",
    description: "Mobile-first approach with media queries and fluid layouts",
    color: "bg-orange-500",
    sections: [
      {
        title: "Media Queries",
        items: [
          "Mobile-first approach",
          "Breakpoints (real-world strategy)",
          "Combining media queries with grid/flex",
          "@media (min-width: 768px) {}"
        ]
      },
      {
        title: "Responsive Images",
        items: [
          "max-width: 100%",
          "object-fit",
          "aspect-ratio",
          "picture element"
        ]
      },
      {
        title: "Fluid Layout Techniques",
        items: [
          "clamp()",
          "min(), max()",
          "Fluid typography systems",
          "2026-level CSS skill"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Modern CSS Features",
    subtitle: "Phase 4",
    description: "Industry standard features - animations, variables, and modern selectors",
    color: "bg-blue-500",
    sections: [
      {
        title: "Transitions & Animations",
        items: [
          "transition, transform",
          "keyframes",
          "Performance-friendly animations",
          "GPU acceleration"
        ]
      },
      {
        title: "CSS Variables (Custom Properties)",
        items: [
          ":root { --primary: #4f46e5; }",
          "Theming and Dark mode",
          "Dynamic UI control",
          "Framework-agnostic design systems"
        ]
      },
      {
        title: "Modern Selectors (Advanced)",
        items: [
          ":is(), :where()",
          ":has() (2026 essential)",
          ":not()"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Accessibility & UX",
    subtitle: "Phase 5",
    description: "Mandatory in industry - accessible and user-focused CSS",
    color: "bg-purple-500",
    sections: [
      {
        title: "Accessible CSS",
        items: [
          "Color contrast ratios",
          "Focus states (:focus-visible)",
          "Keyboard navigation",
          "Reduced motion: @media (prefers-reduced-motion: reduce) {}"
        ]
      },
      {
        title: "UX-Driven CSS",
        items: [
          "Skeleton loaders",
          "Hover vs touch behavior",
          "Micro-interactions",
          "Visual feedback patterns"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Architecture & Scalability",
    subtitle: "Phase 6",
    description: "CSS architecture patterns and naming conventions for scale",
    color: "bg-red-500",
    sections: [
      {
        title: "CSS Architecture Patterns",
        items: [
          "BEM, OOCSS, SMACSS",
          "Utility-first (Tailwind logic)",
          "Component-scoped CSS"
        ]
      },
      {
        title: "Naming Conventions",
        items: [
          "Predictable class naming",
          "Avoiding specificity wars",
          "Scalable folder structure"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Performance Optimization",
    subtitle: "Phase 7",
    description: "CSS performance and build tools for production",
    color: "bg-indigo-500",
    sections: [
      {
        title: "CSS Performance",
        items: [
          "Critical CSS",
          "Avoiding layout shifts (CLS)",
          "Reducing repaint & reflow",
          "CSS vs JS tradeoffs"
        ]
      },
      {
        title: "Build Tools",
        items: [
          "PostCSS, Autoprefixer",
          "Minification",
          "Purging unused CSS"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "CSS in Frameworks",
    subtitle: "Phase 8",
    description: "Real world CSS with React, Next.js, and Tailwind",
    color: "bg-pink-500",
    sections: [
      {
        title: "CSS with React & Next.js",
        items: [
          "CSS Modules",
          "Styled Components, Emotion",
          "Scoped styles",
          "Server Components impact on CSS"
        ]
      },
      {
        title: "Tailwind CSS (Industry Dominant)",
        items: [
          "Utility-first philosophy",
          "Custom themes, Responsive utilities",
          "Component abstraction",
          "When NOT to use Tailwind",
          "Most startups expect this"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Design Systems & UI Engineering",
    subtitle: "Phase 9",
    description: "Building design systems and advanced UI patterns",
    color: "bg-teal-500",
    sections: [
      {
        title: "Design Systems",
        items: [
          "Tokens (colors, spacing, typography)",
          "Theme switching",
          "Component consistency",
          "Figma → CSS workflow"
        ]
      },
      {
        title: "Advanced UI Patterns",
        items: [
          "Modals, Drawers, Tooltips",
          "Toasts, Dropdowns",
          "Responsive navbars"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Testing & Debugging",
    subtitle: "Phase 10",
    description: "Debug CSS like a pro and ensure cross-browser support",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Debugging CSS",
        items: [
          "DevTools mastery",
          "Layout debugging",
          "Performance profiling"
        ]
      },
      {
        title: "Cross-Browser Support",
        items: [
          "Feature queries: @supports (display: grid) {}",
          "Fallback strategies"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Industry-Ready Projects",
    subtitle: "Phase 11",
    description: "Mandatory projects to build a portfolio",
    color: "bg-amber-500",
    sections: [
      {
        title: "Beginner Projects",
        items: [
          "Responsive landing page",
          "Portfolio website"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Admin dashboard (Grid + Flex)",
          "Blog layout system",
          "E-commerce product page"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Full design system",
          "Dark/light theme toggle",
          "Production-level SaaS UI",
          "Component library"
        ]
      },
      {
        title: "What Industry-Ready CSS Means in 2026",
        items: [
          "Clean architecture, Scalable layouts",
          "Accessible by default, Performance-optimized",
          "Framework-friendly, Design-system aware",
          "CSS is no longer 'just styling' — it's UI engineering"
        ]
      }
    ]
  }
];