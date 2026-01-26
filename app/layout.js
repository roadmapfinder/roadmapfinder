import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Roadmapfinder - Free Industry-Ready Tech Skills Roadmaps with YouTube Resources 2026",
  description:
    "Open-source  for industry-ready tech skills. Get comprehensive roadmaps for web development, AI ML, programming, app development with curated YouTube courses in Hindi & English, official docs, projects & FAQs. Free learning platform for developers.",
  keywords:
    "roadmapfinder, tech skills roadmap, industry ready roadmap, programming roadmap, web development roadmap, AI ML roadmap, app development roadmap, open source roadmap, YouTube courses Hindi, YouTube courses English, free tech roadmap, developer roadmap, full stack roadmap, backend roadmap, frontend roadmap, mobile app roadmap, data science roadmap, DevOps roadmap, official documentation, tech projects, coding roadmap 2025, learn programming free, tech career path, roadmap with projects, roadmap with FAQ",
  applicationName: "Roadmapfinder",
  authors: [{ name: "Sohel Khan", url: "https://roadmapfinder.tech" }],
  creator: "Sohel Khan",
  publisher: "Roadmapfinder",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://roadmapfinder.tech",
  },
  openGraph: {
    title: "Roadmapfinder - Industry-Ready Tech Skills Roadmaps with Free Resources",
    description:
      "Open-source platform for industry-ready tech roadmaps. AI-powered roadmap generator with YouTube courses (Hindi & English), official docs, projects & FAQs. Free learning paths for web dev, AI ML, programming & more.",
    url: "https://roadmapfinder.tech",
    siteName: "Roadmapfinder",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://roadmapfinder.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roadmapfinder - Industry-Ready Tech Skills Roadmaps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadmapfinder - Free Industry-Ready Tech Roadmaps & Resources",
    description:
      "Open-source AI roadmap  with industry-ready tech skills, YouTube courses in Hindi & English, official docs, projects & FAQs. Learn web dev, AI ML, programming & more.",
    site: "@roadmapfinder",
    creator: "@sohelkhan_dev",
    images: ["https://roadmapfinder.tech/og-image.png"],
  },
  metadataBase: new URL("https://roadmapfinder.tech"),
  verification: {
    google: "Pcule-Lkxly8lgZaFN0VfX2fsPd3vl7xi-P7b1rMwzs",
  },
  other: {
    "revisit-after": "3 days",
    "distribution": "global",
    "rating": "general",
    "language": "English, Hindi",
    "target": "programmers, developers, students, tech learners",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        {/* Enhanced Meta Tags for Better Indexing */}
        <meta name="author" content="Sohel Khan" />
        <meta name="language" content="English, Hindi" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="programmers, developers, students, tech learners, career switchers" />
        <meta name="coverage" content="Worldwide" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Geographic Targeting */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Canonical & Sitemap */}
        <link rel="canonical" href="https://roadmapfinder.tech" />
        <link rel="sitemap" type="application/xml" href="https://roadmapfinder.tech/sitemap.xml" />
        <link rel="robots" href="https://roadmapfinder.tech/robots.txt" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/roadmapfinder.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Enhanced SEO Internal Links with More Keywords */}
        <link rel="alternate" href="https://roadmapfinder.tech/Full-Stack" title="Full Stack Web Development Roadmap - Industry-Ready with Projects & Resources" />
        <link rel="alternate" href="https://roadmapfinder.tech/UIUX" title="UI/UX Design Roadmap - Complete Guide with Official Docs & Projects" />
        <link rel="alternate" href="https://roadmapfinder.tech/Aiml" title="AI & Machine Learning Roadmap - Industry Skills with Projects & FAQs" />
        <link rel="alternate" href="https://roadmapfinder.tech/Backend" title="Backend Development Roadmap - Production-Ready Skills & Resources" />
        <link rel="alternate" href="https://roadmapfinder.tech/Frontend" title="Frontend Development Roadmap - Modern Web Dev with Projects" />
        <link rel="alternate" href="https://roadmapfinder.tech/Android" title="Mobile App Development Roadmap - iOS & Android with Official Docs" />
        <link rel="alternate" href="https://roadmapfinder.tech/Devops" title="DevOps Roadmap - Industry-Ready CI/CD, Docker, Kubernetes" />
        <link rel="alternate" href="https://roadmapfinder.tech/Data-Science" title="Data Science Roadmap - Complete Path with Projects & Resources" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366157018323318"
          crossOrigin="anonymous"
        ></script>

        {/* Enhanced Structured Data (JSON-LD) - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Roadmapfinder - Industry-Ready Tech Skills Platform",
              "alternateName": ["Roadmapfinder", "Tech Skills Roadmap", "Open Source Learning Platform"],
              "applicationCategory": "EducationalApplication",
              "url": "https://roadmapfinder.tech",
              "description": "Open-source tech learning platform providing industry-ready tech skills roadmaps with curated YouTube courses in Hindi and English, official documentation, real-world projects, and comprehensive FAQs. Free platform for web development, AI ML, programming, app development and 50+ tech skills.",
              "operatingSystem": "Web Browser, iOS, Android",
              "browserRequirements": "Requires JavaScript. Modern browser recommended.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "AI-Powered Industry-Ready Roadmap Generation",
                "Curated YouTube Courses in Hindi & English",
                "Official Documentation Links",
                "Real-World Projects to Build",
                "Comprehensive FAQ Sections",
                "Web Development Roadmaps (Full Stack, Frontend, Backend)",
                "AI & Machine Learning Roadmaps",
                "Programming Language Roadmaps (Python, Java, JavaScript, C++)",
                "Mobile App Development Roadmaps (React Native, Flutter, iOS, Android)",
                "UI/UX Design Learning Paths",
                "Data Science & Analytics Roadmaps",
                "DevOps & Cloud Computing Roadmaps",
                "Open Source Platform",
                "Personalized Learning Recommendations",
                "Career Guidance for Developers",
                "Free Learning Resources"
              ],
              "inLanguage": ["en", "hi"],
              "availableLanguage": ["English", "Hindi"],
              "author": {
                "@type": "Person",
                "name": "Sohel Khan",
                "url": "https://roadmapfinder.tech",
                "jobTitle": "Software Engineer & Educator"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Roadmapfinder",
                "url": "https://roadmapfinder.tech",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://roadmapfinder.tech/roadmapfinder.svg"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://roadmapfinder.tech/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* ItemList Schema for Roadmap Categories */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Industry-Ready Tech Skills Roadmaps",
              "description": "Comprehensive industry-ready learning roadmaps with YouTube resources, official docs, projects & FAQs",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Course",
                    "name": "Full Stack Web Development Roadmap",
                    "description": "Industry-ready full stack developer roadmap with frontend (HTML, CSS, JavaScript, React) and backend (Node.js, databases, APIs). Includes curated YouTube courses in Hindi & English, official documentation, real-world projects to build, and comprehensive FAQs.",
                    "url": "https://roadmapfinder.tech/Full-Stack",
                    "provider": {
                      "@type": "Organization",
                      "name": "Roadmapfinder"
                    },
                    "educationalLevel": "Beginner to Advanced",
                    "teaches": "Web Development, Frontend, Backend, JavaScript, React, Node.js"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Course",
                    "name": "UI/UX Design Roadmap",
                    "description": "Industry-ready UI/UX design path covering design principles, Figma, user research, prototyping. Features YouTube resources in Hindi & English, official design docs, portfolio projects, and design FAQs.",
                    "url": "https://roadmapfinder.tech/UIUX",
                    "provider": {
                      "@type": "Organization",
                      "name": "Roadmapfinder"
                    },
                    "educationalLevel": "Beginner to Advanced",
                    "teaches": "UI Design, UX Design, Figma, User Research, Prototyping"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Course",
                    "name": "AI & Machine Learning Roadmap",
                    "description": "Comprehensive AI ML roadmap with Python, deep learning, neural networks, NLP. Includes YouTube tutorials (Hindi & English), official ML docs, hands-on projects, and AI/ML FAQs for industry readiness.",
                    "url": "https://roadmapfinder.tech/Aiml",
                    "provider": {
                      "@type": "Organization",
                      "name": "Roadmapfinder"
                    },
                    "educationalLevel": "Intermediate to Advanced",
                    "teaches": "Artificial Intelligence, Machine Learning, Deep Learning, Python, Data Science"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Course",
                    "name": "Backend Development Roadmap",
                    "description": "Production-ready backend development guide with server programming, databases (SQL, NoSQL), REST APIs, authentication. Features YouTube courses in both languages, official backend docs, real-world projects, and backend FAQs.",
                    "url": "https://roadmapfinder.tech/Backend",
                    "provider": {
                      "@type": "Organization",
                      "name": "Roadmapfinder"
                    },
                    "educationalLevel": "Beginner to Advanced",
                    "teaches": "Backend Development, APIs, Databases, Node.js, Python, Server Management, AI/ML , UIUX, Graphic designing and more"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "Course",
                    "name": "Mobile App Development Roadmap",
                    "description": "Industry-ready mobile app development for iOS and Android. Covers React Native, Flutter, Swift, Kotlin with YouTube tutorials (Hindi & English), official mobile docs, app projects to build, and mobile dev FAQs.",
                    "url": "https://roadmapfinder.tech/Android",
                    "provider": {
                      "@type": "Organization",
                      "name": "Roadmapfinder"
                    },
                    "educationalLevel": "Beginner to Advanced",
                    "teaches": "Mobile Development, React Native, Flutter, iOS, Android"
                  }
                }
              ]
            })
          }}
        />

        {/* Organization Schema with Enhanced Details */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Roadmapfinder",
              "alternateName": "Open Source Tech Learning Platform",
              "url": "https://roadmapfinder.tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://roadmapfinder.tech/roadmapfinder.svg",
                "width": 250,
                "height": 250
              },
              "description": "Open-source AI-powered platform generating industry-ready tech skills roadmaps with YouTube courses (Hindi & English), official documentation, real-world projects, and comprehensive FAQs",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Sohel Khan",
                "jobTitle": "Software Developer"
              },
              "sameAs": [
                "https://twitter.com/roadmapfinder",
                "https://github.com/roadmapfinder"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />

        {/* Enhanced FAQ Schema - More Questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Roadmapfinder?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Roadmapfinder is an open-source platform that creates industry-ready tech skills roadmaps using AI. Each roadmap includes curated YouTube courses in Hindi and English, links to official documentation, real-world projects to build, and comprehensive FAQ sections. It covers web development, AI ML, programming, app development, and 50+ tech skills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What resources are included in each roadmap?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every roadmap on Roadmapfinder includes: (1) Industry-ready learning path, (2) Curated YouTube courses in both Hindi and English, (3) Links to official documentation, (4) Real-world projects to build for portfolio, (5) Comprehensive FAQ section answering common questions. This ensures you have all resources needed to become job-ready."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the YouTube courses available in Hindi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Roadmapfinder curates the best YouTube courses in both Hindi and English languages. This makes tech education accessible to Indian learners and students who prefer learning in their native language while also providing English resources for comprehensive learning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes these roadmaps industry-ready?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our roadmaps are industry-ready because they include: real-world projects to build for your portfolio, links to official documentation used by professionals, curated resources covering industry-standard tools and technologies, practical skills needed in actual job roles, and FAQ sections addressing real developer challenges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Roadmapfinder free and open source?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Roadmapfinder is completely free to use and open source. You can access unlimited roadmaps, YouTube courses, official docs, projects, and FAQs without any cost. Our mission is to make quality tech education accessible to everyone."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tech skills roadmaps are available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Roadmapfinder offers industry-ready roadmaps for: Full Stack Web Development, Frontend Development, Backend Development, Mobile App Development (React Native, Flutter, iOS, Android), UI/UX Design, AI & Machine Learning, Data Science, DevOps, Cloud Computing, Python, JavaScript, React, Node.js, and many more. Each includes YouTube resources, official docs, projects, and FAQs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do the projects help in learning?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Each roadmap includes real-world projects to build that help you: apply concepts practically, build a strong portfolio for job applications, gain hands-on experience with industry tools, solve actual problems developers face, and demonstrate skills to potential employers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why are official docs included in roadmaps?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Official documentation is crucial for industry-ready learning because it provides: accurate, up-to-date information directly from source, industry-standard practices and conventions, comprehensive reference for advanced topics, the same resources professional developers use daily."
                  }
                }
              ]
            })
          }}
        />

        {/* BreadcrumbList Schema for Better Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://roadmapfinder.tech"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Roadmaps",
                  "item": "https://roadmapfinder.tech/RoadmapPage"
                }
              ]
            })
          }}
        />

        {/* Educational Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Roadmapfinder",
              "url": "https://roadmapfinder.tech",
              "description": "Free open-source AI-powered platform for industry-ready tech education with YouTube resources, official docs, projects & FAQs",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Industry-Ready Tech Learning Roadmaps",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Programming Roadmaps",
                      "description": "Industry-ready programming paths with YouTube courses (Hindi & English), official docs, projects & FAQs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Web Development Roadmaps",
                      "description": "Full stack, frontend, backend paths with curated resources, official docs, projects & FAQs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "App Development Roadmaps",
                      "description": "Mobile app development for iOS and Android with YouTube tutorials, official docs, projects & FAQs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "AI & Machine Learning Roadmaps",
                      "description": "AI ML paths with comprehensive resources, official docs, ML projects & FAQs"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>

      <body className={`${sora.className} bg-[#F9FAFB] text-gray-900 antialiased`}>
        {/* Hidden SEO Content for Better Indexing */}
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h1>Roadmapfinder - Industry-Ready Tech Skills Roadmaps</h1>
          <p>Open-source platform providing industry-ready tech roadmaps with YouTube courses in Hindi & English, official documentation, real-world projects to build, and comprehensive FAQs.</p>
          <nav aria-label="Main roadmaps">
            <ul>
              <li><a href="/Full-Stack">Full Stack Web Development Roadmap with Projects & Docs</a></li>
              <li><a href="/Frontend">Frontend Development Roadmap with YouTube Resources</a></li>
              <li><a href="/Backend">Backend Development Roadmap with Official Docs</a></li>
              <li><a href="/Android">Mobile App Development Roadmap with Projects</a></li>
              <li><a href="/UIUX">UI/UX Design Roadmap with Portfolio Projects</a></li>
              <li><a href="/Aiml">AI Machine Learning Roadmap with ML Projects</a></li>
              <li><a href="/Data-Science">Data Science Roadmap with Real Projects</a></li>
              <li><a href="/Devops">DevOps Roadmap with Industry Tools</a></li>
              <li><a href="/Python">Python Programming Roadmap with Projects & FAQs</a></li>
              <li><a href="/Javascript">JavaScript Roadmap with Official Docs</a></li>
              <li><a href="/React">React Developer Roadmap with Real Projects</a></li>
              <li><a href="/Nodejs">Node.js Backend Roadmap with YouTube Resources</a></li>
            </ul>
          </nav>
        </div>

        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}