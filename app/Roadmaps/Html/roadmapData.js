        export const phases = [
          {
            id: 0,
            title: "Web Fundamentals",
            subtitle: "Pre-HTML Clarity",
            description: "Understand how the web works before writing HTML",
            color: "bg-slate-600",
            sections: [
              {
                title: "Core Concepts",
                items: [
                  "How the internet works → Understanding network fundamentals",
                  "Client-Server model → Request-response architecture",
                  "DNS, HTTP vs HTTPS → Domain resolution and secure communication",
                  "Browser rendering process → How browsers display web pages",
                  "What happens when you type a URL → Complete page load lifecycle",
                  "Static vs Dynamic websites → Different web application types",
                  "Role of HTML vs CSS vs JavaScript → Separation of concerns"
                ]
              },
              {
                title: "Must-Know Foundations",
                items: [
                  "What is markup language → HTML as structured content",
                  "HTML is structure, not design or logic → Core philosophy",
                  "Progressive enhancement philosophy → Building from baseline up",
                  "Why: Senior developers write HTML thinking about future CSS & JS, not just current layout"
                ]
              }
            ]
          },
          {
            id: 1,
            title: "HTML Foundations",
            subtitle: "Absolute Beginner (0-1 Month)",
            description: "Write valid, clean HTML documents confidently",
            color: "bg-green-500",
            sections: [
              {
                title: "HTML Basics",
                items: [
                  "HTML document structure → DOCTYPE, html, head, body",
                  "Document metadata → title, meta, link elements",
                  "Character encoding → UTF-8 declaration",
                  "Language attribute → Setting document language"
                ]
              },
              {
                title: "Core Tags",
                items: [
                  "Headings → h1 through h6 hierarchy",
                  "Text elements → p, span, strong, em, br",
                  "Links → a tag with href attribute",
                  "Images → img with src and alt",
                  "Lists → ul, ol, li for ordered and unordered",
                  "Containers → div for grouping elements"
                ]
              },
              {
                title: "Attributes",
                items: [
                  "id → Unique element identifier",
                  "class → Reusable styling hooks",
                  "src, href → Resource locations",
                  "alt, title → Alternative and tooltip text",
                  "Global attributes → lang, dir, tabindex, data-*"
                ]
              },
              {
                title: "Best Practices",
                items: [
                  "One h1 per page → Clear document hierarchy",
                  "Always use alt for images → Accessibility requirement",
                  "Proper nesting → Valid HTML structure",
                  "Consistent indentation → Readable code"
                ]
              }
            ]
          },
          {
            id: 2,
            title: "Semantic HTML",
            subtitle: "Intermediate Foundation (1-2 Months)",
            description: "Write meaningful, readable, SEO-friendly markup",
            color: "bg-blue-500",
            sections: [
              {
                title: "Semantic Elements (VERY IMPORTANT)",
                items: [
                  "header → Site or section header content",
                  "nav → Navigation links container",
                  "main → Primary page content",
                  "section → Thematic content grouping",
                  "article → Self-contained content",
                  "aside → Tangential content",
                  "footer → Site or section footer",
                  "figure & figcaption → Images with captions"
                ]
              },
              {
                title: "Why Semantics Matter",
                items: [
                  "SEO ranking → Better search engine understanding",
                  "Accessibility → Screen reader navigation",
                  "Maintainability → Self-documenting code",
                  "Team collaboration → Clear structure communication",
                  "Why: If your page uses only div, you are not an HTML developer"
                ]
              },
              {
                title: "Real-World Layout Structure",
                items: [
                  "Page anatomy → Header, nav, main, aside, footer",
                  "Content sections → Using section and article appropriately",
                  "Landmark regions → Defining page areas for assistive tech",
                  "Document outline → Logical heading structure"
                ]
              }
            ]
          },
          {
            id: 3,
            title: "Forms & User Input",
            subtitle: "Real-World HTML (2-3 Months)",
            description: "Build production-ready forms used in real apps",
            color: "bg-purple-500",
            sections: [
              {
                title: "Form Fundamentals",
                items: [
                  "form → Container with action and method",
                  "input → Various input types for data collection",
                  "label → Accessible form labels",
                  "textarea → Multi-line text input",
                  "select → Dropdown selections",
                  "button → Form submission and actions",
                  "Input types → text, email, password, number, date, file, radio, checkbox"
                ]
              },
              {
                title: "Validation (HTML-Only)",
                items: [
                  "required → Mandatory field validation",
                  "pattern → Regex-based validation",
                  "min, max → Numeric and date ranges",
                  "maxlength → Character limit enforcement",
                  "placeholder → Input hint text",
                  "Why: HTML validation reduces 50% of JavaScript validation code"
                ]
              },
              {
                title: "Accessibility in Forms",
                items: [
                  "label + for → Associating labels with inputs",
                  "fieldset & legend → Grouping related inputs",
                  "Error messages structure → Clear validation feedback",
                  "Required field indicators → Visual and semantic markers"
                ]
              }
            ]
          },
          {
            id: 4,
            title: "Accessibility (A11y) Mastery",
            subtitle: "Intermediate Level (3-4 Months)",
            description: "Build websites usable by everyone",
            color: "bg-red-500",
            sections: [
              {
                title: "Core A11y Concepts",
                items: [
                  "WCAG 2.2 standards → Web Content Accessibility Guidelines",
                  "Screen readers → Testing with assistive technology",
                  "Keyboard navigation → Full keyboard operability",
                  "Color contrast → Sufficient contrast ratios",
                  "Focus indicators → Visible focus states"
                ]
              },
              {
                title: "ARIA (Only When Needed)",
                items: [
                  "aria-label → Accessible names for elements",
                  "aria-hidden → Hiding decorative content",
                  "role → Defining element purpose",
                  "aria-live → Dynamic content announcements",
                  "Why: Native HTML beats ARIA. Always use semantic HTML first"
                ]
              },
              {
                title: "Keyboard Accessibility",
                items: [
                  "tabindex → Managing focus order",
                  "Focus management → Logical tab navigation",
                  "Logical navigation order → Sequential focus flow",
                  "Skip links → Bypass repetitive content"
                ]
              },
              {
                title: "Common Mistakes",
                items: [
                  "❌ Clickable div → Use button or link instead",
                  "❌ Missing alt → Always provide alternative text",
                  "❌ No keyboard support → Ensure all interactions are keyboard accessible",
                  "❌ Poor color contrast → Use sufficient contrast ratios"
                ]
              }
            ]
          },
          {
            id: 5,
            title: "SEO-Optimized HTML",
            subtitle: "Intermediate Level (4-5 Months)",
            description: "Write HTML that ranks on Google",
            color: "bg-yellow-500",
            sections: [
              {
                title: "On-Page SEO",
                items: [
                  "Proper heading hierarchy → Logical h1-h6 structure",
                  "Semantic tags → Meaningful element choices",
                  "Clean URL structure → Descriptive, readable URLs",
                  "Anchor text best practices → Descriptive link text",
                  "Internal linking → Strategic page connections"
                ]
              },
              {
                title: "Meta Tags",
                items: [
                  "Title tag → Page title optimization",
                  "Meta description → Compelling page summaries",
                  "Open Graph → Social media previews",
                  "Twitter Cards → Twitter-specific metadata",
                  "Canonical tags → Duplicate content handling"
                ]
              },
              {
                title: "Structured Data",
                items: [
                  "Schema.org basics → Structured data vocabulary",
                  "Rich snippets → Enhanced search results",
                  "FAQ schema → Frequently asked questions markup",
                  "Article schema → Blog and news content",
                  "JSON-LD → Structured data implementation"
                ]
              },
              {
                title: "Performance SEO",
                items: [
                  "Lazy loading images → Deferred image loading",
                  "Critical HTML structure → Above-the-fold optimization",
                  "Meaningful content order → Logical content hierarchy",
                  "Page speed impact → Performance as ranking factor"
                ]
              }
            ]
          },
          {
            id: 6,
            title: "Modern HTML5 APIs",
            subtitle: "Advanced Level (5-7 Months)",
            description: "Use powerful built-in browser features",
            color: "bg-orange-500",
            sections: [
              {
                title: "Media & Graphics",
                items: [
                  "audio → Audio playback with controls",
                  "video → Video embedding and playback",
                  "picture → Responsive image container",
                  "source → Multiple media sources",
                  "SVG integration → Scalable vector graphics",
                  "canvas → Programmatic graphics drawing"
                ]
              },
              {
                title: "Advanced HTML Elements",
                items: [
                  "details & summary → Expandable content sections",
                  "dialog → Native modal dialogs",
                  "template → Reusable HTML fragments",
                  "slot → Web component content insertion",
                  "Why: Many JS libraries exist because devs don't know HTML5 APIs"
                ]
              },
              {
                title: "Browser APIs (HTML Level)",
                items: [
                  "Geolocation → User location detection",
                  "Drag & Drop → Native drag and drop functionality",
                  "Clipboard → Copy and paste operations",
                  "Fullscreen → Full screen mode activation",
                  "Web Storage → localStorage and sessionStorage"
                ]
              }
            ]
          },
          {
            id: 7,
            title: "Performance-Focused HTML",
            subtitle: "Advanced Level (7-8 Months)",
            description: "Write fast-loading, optimized HTML",
            color: "bg-indigo-500",
            sections: [
              {
                title: "Image Optimization",
                items: [
                  "loading='lazy' → Native lazy loading",
                  "srcset & sizes → Responsive images",
                  "Modern formats → WebP, AVIF adoption",
                  "Image dimensions → Prevent layout shifts",
                  "Compression → Optimized file sizes"
                ]
              },
              {
                title: "Critical HTML Strategy",
                items: [
                  "Above-the-fold markup first → Priority content loading",
                  "Defer non-critical content → Progressive enhancement",
                  "Avoid DOM bloat → Minimal element count",
                  "Critical CSS inlining → Faster initial render"
                ]
              },
              {
                title: "HTML Size Optimization",
                items: [
                  "Remove unnecessary wrappers → Cleaner DOM structure",
                  "Reusable components mindset → DRY principles",
                  "Minimize inline styles → Separate concerns",
                  "Efficient attribute usage → Only necessary attributes"
                ]
              }
            ]
          },
          {
            id: 8,
            title: "HTML in Real Applications",
            subtitle: "Advanced Level (8-9 Months)",
            description: "Work with HTML inside frameworks and tools",
            color: "bg-pink-500",
            sections: [
              {
                title: "HTML + CSS Architecture",
                items: [
                  "BEM naming → Block Element Modifier methodology",
                  "Component-based HTML → Reusable component structure",
                  "Atomic structure → Atomic design principles",
                  "Utility-first approaches → Tailwind-style patterns"
                ]
              },
              {
                title: "HTML in Frameworks",
                items: [
                  "JSX vs HTML differences → React templating syntax",
                  "Accessibility in React / Next.js → Framework-specific a11y",
                  "Server-Side Rendering impact → SSR considerations",
                  "Hydration → Client-side interactivity attachment",
                  "Component props → Dynamic HTML generation"
                ]
              },
              {
                title: "Templating",
                items: [
                  "HTML partials → Reusable template fragments",
                  "Reusable layout patterns → Master page concepts",
                  "Template engines → Handlebars, EJS, Pug",
                  "Component libraries → Design system integration"
                ]
              }
            ]
          },
          {
            id: 9,
            title: "Testing, Validation & Standards",
            subtitle: "Advanced Level (9-10 Months)",
            description: "Write error-free, standard-compliant HTML",
            color: "bg-teal-500",
            sections: [
              {
                title: "Validation Tools",
                items: [
                  "W3C HTML Validator → Official markup validation",
                  "Lighthouse → Performance and best practices auditing",
                  "Axe DevTools → Accessibility testing",
                  "WAVE → Web accessibility evaluation",
                  "HTML validators → Automated markup checking"
                ]
              },
              {
                title: "Browser Compatibility",
                items: [
                  "HTML support matrix → Feature compatibility tables",
                  "Progressive enhancement → Core functionality for all",
                  "Graceful degradation → Fallbacks for unsupported features",
                  "Polyfills → JavaScript-based feature support",
                  "Can I Use → Browser support reference"
                ]
              },
              {
                title: "Quality Assurance",
                items: [
                  "Cross-browser testing → Multi-browser verification",
                  "Device testing → Mobile and tablet testing",
                  "Automated testing → CI/CD integration",
                  "Visual regression → Screenshot comparison"
                ]
              }
            ]
          },
          {
            id: 10,
            title: "Advanced HTML Engineer Level",
            subtitle: "Expert Level (10-12 Months)",
            description: "Think like a web platform engineer",
            color: "bg-cyan-500",
            sections: [
              {
                title: "Mastery Topics",
                items: [
                  "HTML specifications (WHATWG) → Living standard understanding",
                  "Micro-frontends structure → Independent deployable frontends",
                  "Design systems markup → Component library architecture",
                  "CMS-friendly HTML → Content management integration",
                  "Email-safe HTML → Email client compatibility",
                  "Web Components → Custom elements and shadow DOM"
                ]
              },
              {
                title: "Professional Skills",
                items: [
                  "Code reviews for HTML → Quality assurance practices",
                  "Accessibility audits → Comprehensive a11y testing",
                  "SEO audits → Search optimization evaluation",
                  "Performance audits → Speed and optimization analysis",
                  "Documentation → Clear technical documentation"
                ]
              },
              {
                title: "Architecture & Leadership",
                items: [
                  "Technical decision making → Choosing the right approach",
                  "Mentoring junior developers → Knowledge sharing",
                  "Establishing standards → Team coding guidelines",
                  "Cross-functional collaboration → Working with designers and backend"
                ]
              }
            ]
          },
          {
            id: 11,
            title: "Master Projects",
            subtitle: "Portfolio Building (Mandatory)",
            description: "Build production-quality projects demonstrating expertise",
            color: "bg-emerald-500",
            sections: [
              {
                title: "Required Projects",
                items: [
                  "Fully Accessible Blog Website → Complete semantic structure with WCAG 2.2 compliance",
                  "SEO-Optimized Landing Page → Rich snippets, structured data, performance optimization",
                  "Complex Multi-Step Form → Validation, accessibility, progressive enhancement",
                  "HTML-Only Interactive Components → Accordion, tabs, tooltips using only HTML/CSS",
                  "Design-System HTML Kit → Reusable component library with documentation"
                ]
              },
              {
                title: "Project Requirements",
                items: [
                  "W3C validation passing → Zero markup errors",
                  "100% Lighthouse scores → Performance, accessibility, SEO, best practices",
                  "Cross-browser compatibility → Chrome, Firefox, Safari, Edge",
                  "Responsive design → Mobile-first approach",
                  "Production deployment → Live, accessible URLs"
                ]
              }
            ]
          },
          {
            id: 12,
            title: "Final Skills Mastery",
            subtitle: "Expert Level (Ongoing)",
            description: "Industry-grade HTML thinking and expertise",
            color: "bg-violet-500",
            sections: [
              {
                title: "Core Competencies Achieved",
                items: [
                  "✅ Semantic HTML mastery → Perfect element choice every time",
                  "✅ Accessibility expert → WCAG 2.2 Level AA compliance",
                  "✅ SEO-optimized structure → First-page ranking markup",
                  "✅ Performance-focused markup → Optimized load times",
                  "✅ Framework-ready HTML → Works with any framework",
                  "✅ Industry-grade thinking → Professional-level decisions"
                ]
              },
              {
                title: "Professional Capabilities",
                items: [
                  "Lead HTML architecture decisions → Guide team technical choices",
                  "Conduct accessibility audits → Identify and fix a11y issues",
                  "Optimize for performance → Fast, efficient markup",
                  "Write maintainable code → Clean, scalable structure",
                  "Mentor other developers → Share knowledge effectively"
                ]
              },
              {
                title: "Continuous Learning",
                items: [
                  "Stay updated with specs → Follow WHATWG and W3C",
                  "Browser feature adoption → Track new HTML features",
                  "Best practices evolution → Adapt to industry changes",
                  "Community involvement → Contribute to discussions",
                  "Teach and share → Blog posts, talks, open source"
                ]
              }
            ]
          }
        ];