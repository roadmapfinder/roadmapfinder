import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from '@clerk/nextjs';
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
  title: "RoadmapFinder - Best Roadmap Generator for Programming, Web Dev, App Development & Tech Skills 2025",
  description:
    "Find the best roadmap for programming, web development, app development, UI/UX design, backend, AI ML, data science, DevOps, and more. AI-powered roadmap generator with curated YouTube courses in Hindi & English. Free tech learning paths for beginners to advanced developers.",
  keywords:
    "roadmap finder, programming roadmap, web development roadmap, app development roadmap, full stack developer roadmap, frontend roadmap, backend roadmap, mobile app development roadmap, UIUX roadmap, AI ML roadmap, data science roadmap, DevOps roadmap, software engineer roadmap, coding roadmap, learn programming, tech career roadmap, developer roadmap 2025, react roadmap, nodejs roadmap, python roadmap, java roadmap, javascript roadmap, roadmap generator, free roadmap, best programming roadmap, how to become developer, tech skills roadmap, YouTube courses Hindi, YouTube courses English, roadmapfinder, learning path, career guidance tech",
  applicationName: "RoadmapFinder",
  authors: [{ name: "Sohel Khan", url: "https://roadmapfinder.tech" }],
  creator: "Sohel Khan",
  publisher: "RoadmapFinder",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://roadmapfinder.tech",
  },
  openGraph: {
    title: "RoadmapFinder - Best Programming & Web Development Roadmap Generator 2025",
    description:
      "Discover the best roadmap for programming, web dev, app development & 50+ tech skills. AI-powered roadmap generator with free courses in Hindi & English. Start your tech journey today!",
    url: "https://roadmapfinder.tech",
    siteName: "RoadmapFinder",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://roadmapfinder.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "RoadmapFinder - AI-Powered Programming & Development Roadmaps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadmapFinder - Programming Roadmap Generator & Free Courses",
    description:
      "Best roadmap for web dev, app development, AI ML & more. AI-powered roadmap generator with curated YouTube courses. Learn programming in Hindi & English.",
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
          <link rel="alternate" href="https://roadmapfinder.tech/Full-Stack" title="Full Stack Web Development Roadmap - Frontend & Backend" />
          <link rel="alternate" href="https://roadmapfinder.tech/UIUX" title="UI/UX Design Roadmap - Complete Guide to Product Design" />
          <link rel="alternate" href="https://roadmapfinder.tech/Aiml" title="AI & Machine Learning Roadmap - Deep Learning & Data Science" />
          <link rel="alternate" href="https://roadmapfinder.tech/Backend" title="Backend Development Roadmap - Server, Database & APIs" />
          <link rel="alternate" href="https://roadmapfinder.tech/Frontend" title="Frontend Development Roadmap - React, Vue, Angular" />
          <link rel="alternate" href="https://roadmapfinder.tech/Mobile-App" title="Mobile App Development Roadmap - iOS & Android" />
          <link rel="alternate" href="https://roadmapfinder.tech/DevOps" title="DevOps Roadmap - CI/CD, Docker, Kubernetes" />
          <link rel="alternate" href="https://roadmapfinder.tech/Data-Science" title="Data Science Roadmap - Analytics & Machine Learning" />

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
                "name": "RoadmapFinder - Programming & Development Roadmap Generator",
                "alternateName": ["Roadmap Finder", "Programming Roadmap", "Developer Roadmap"],
                "applicationCategory": "EducationalApplication",
                "url": "https://roadmapfinder.tech",
                "description": "AI-powered roadmap generator for programming, web development, app development, and 50+ tech skills. Find the best learning path with curated YouTube courses in Hindi and English. Free roadmaps for beginners to advanced developers.",
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
                  "AI-Powered Roadmap Generation",
                  "Programming Roadmaps (Python, Java, JavaScript, C++)",
                  "Web Development Roadmaps (Full Stack, Frontend, Backend)",
                  "Mobile App Development Roadmaps (React Native, Flutter, iOS, Android)",
                  "UI/UX Design Learning Paths",
                  "Data Science & AI ML Roadmaps",
                  "DevOps & Cloud Computing Roadmaps",
                  "Curated YouTube Courses in Hindi & English",
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
                  "jobTitle": "Software Developer & Educator"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "RoadmapFinder",
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
                "name": "Programming & Development Roadmaps",
                "description": "Comprehensive list of tech learning roadmaps",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Course",
                      "name": "Full Stack Web Development Roadmap",
                      "description": "Complete roadmap for becoming a full stack developer. Learn frontend (HTML, CSS, JavaScript, React) and backend (Node.js, databases, APIs) with curated courses.",
                      "url": "https://roadmapfinder.tech/Full-Stack",
                      "provider": {
                        "@type": "Organization",
                        "name": "RoadmapFinder"
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
                      "description": "Complete UI/UX design learning path covering design principles, Figma, user research, prototyping, and product design with Hindi & English resources.",
                      "url": "https://roadmapfinder.tech/UIUX",
                      "provider": {
                        "@type": "Organization",
                        "name": "RoadmapFinder"
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
                      "description": "Comprehensive AI and machine learning roadmap covering Python, deep learning, neural networks, NLP, and data science with practical projects.",
                      "url": "https://roadmapfinder.tech/Aiml",
                      "provider": {
                        "@type": "Organization",
                        "name": "RoadmapFinder"
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
                      "description": "Complete backend development guide covering server-side programming, databases (SQL, NoSQL), REST APIs, authentication, and deployment.",
                      "url": "https://roadmapfinder.tech/Backend",
                      "provider": {
                        "@type": "Organization",
                        "name": "RoadmapFinder"
                      },
                      "educationalLevel": "Beginner to Advanced",
                      "teaches": "Backend Development, APIs, Databases, Node.js, Python, Server Management"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                      "@type": "Course",
                      "name": "Mobile App Development Roadmap",
                      "description": "Learn mobile app development for iOS and Android. Covers React Native, Flutter, Swift, Kotlin with practical app building projects.",
                      "url": "https://roadmapfinder.tech/Mobile-App",
                      "provider": {
                        "@type": "Organization",
                        "name": "RoadmapFinder"
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
                "name": "RoadmapFinder",
                "alternateName": "Roadmap Finder",
                "url": "https://roadmapfinder.tech",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://roadmapfinder.tech/roadmapfinder.svg",
                  "width": 250,
                  "height": 250
                },
                "description": "AI-powered platform for generating personalized programming and tech learning roadmaps with free courses",
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
                    "name": "What is RoadmapFinder?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "RoadmapFinder is an AI-powered platform that generates personalized learning roadmaps for programming, web development, app development, UI/UX design, backend development, AI ML, data science, DevOps and 50+ tech skills. It provides curated YouTube courses in both Hindi and English, making tech education accessible to everyone."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I find the best programming roadmap?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simply visit RoadmapFinder and select your desired tech skill (programming, web dev, app dev, etc.). Our AI will generate a personalized roadmap with step-by-step learning path, resources, and curated courses tailored to your skill level and goals."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does RoadmapFinder offer courses in Hindi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, RoadmapFinder curates the best YouTube courses in both Hindi and English. This makes programming and tech education accessible to Indian learners and students who prefer learning in their native language."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What roadmaps are available on RoadmapFinder?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "RoadmapFinder offers comprehensive roadmaps for: Full Stack Web Development, Frontend Development, Backend Development, Mobile App Development (iOS, Android, React Native, Flutter), UI/UX Design, AI & Machine Learning, Data Science, DevOps, Cloud Computing, Cybersecurity, and many more tech skills. All roadmaps are AI-generated and personalized to your learning needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is RoadmapFinder free to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, RoadmapFinder is completely free to use. You can generate unlimited roadmaps and access curated learning resources without any cost."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the AI roadmap generator work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our AI roadmap generator analyzes your goals, current skill level, and learning preferences to create a personalized step-by-step learning path. It curates the best resources, courses, and projects to help you master your chosen tech skill efficiently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the best roadmap for web development beginners?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For web development beginners, start with our Full Stack Web Development Roadmap. It covers HTML, CSS, JavaScript fundamentals, then progresses to frameworks like React, backend with Node.js, databases, and deployment. The roadmap includes beginner-friendly courses in both Hindi and English."
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
                    "item": "https://roadmapfinder.tech/roadmaps"
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
                "name": "RoadmapFinder",
                "url": "https://roadmapfinder.tech",
                "description": "Free AI-powered platform for tech education and career guidance",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Tech Learning Roadmaps",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Course",
                        "name": "Programming Roadmaps",
                        "description": "Comprehensive programming learning paths"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Course",
                        "name": "Web Development Roadmaps",
                        "description": "Full stack, frontend, and backend development paths"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Course",
                        "name": "App Development Roadmaps",
                        "description": "Mobile app development for iOS and Android"
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
            <h1>RoadmapFinder - Best Programming Roadmap Generator</h1>
            <p>Find the best roadmap for programming, web development, app development, and 50+ tech skills.</p>
            <nav aria-label="Main roadmaps">
              <ul>
                <li><a href="/Full-Stack">Full Stack Web Development Roadmap</a></li>
                <li><a href="/Frontend">Frontend Development Roadmap</a></li>
                <li><a href="/Backend">Backend Development Roadmap</a></li>
                <li><a href="/Android">Mobile App Development Roadmap</a></li>
                <li><a href="/UIUX">UI/UX Design Roadmap</a></li>
                <li><a href="/Aiml">AI Machine Learning Roadmap</a></li>
                <li><a href="/Data-Science">Data Science Roadmap</a></li>
                <li><a href="/Devops">DevOps Roadmap</a></li>
                <li><a href="/Python">Python Programming Roadmap</a></li>
                <li><a href="/Javascript">JavaScript Roadmap</a></li>
                <li><a href="/React">React Developer Roadmap</a></li>
                <li><a href="/Nodejs">Node.js Backend Roadmap</a></li>
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