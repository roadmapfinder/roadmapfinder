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
  title: "RoadmapFinder - AI-Powered Tech Roadmaps & Best YouTube Courses in Hindi + English",
  description:
    "Generate personalized AI-powered learning roadmaps for Web Development, UI/UX, Backend, and AI ML. Access curated YouTube courses in Hindi and English. Master tech skills with intelligent roadmap generation tailored to your goals.",
  keywords:
    "AI roadmap generator, tech skills roadmap, web development roadmap, UIUX design roadmap, backend roadmap, AI ML roadmap, YouTube courses Hindi, YouTube courses English, personalized learning path, AI-powered learning, full stack developer roadmap, learn programming, tech career roadmap, roadmapfinder, machine learning roadmap, best tech courses YouTube",
  applicationName: "RoadmapFinder",
  authors: [{ name: "Sohel Khan", url: "https://roadmapfinder.tech" }],
  creator: "Sohel Khan",
  publisher: "RoadmapFinder",
  robots: "index, follow",
  alternates: {
    canonical: "https://roadmapfinder.tech",
  },
  openGraph: {
    title: "RoadmapFinder - AI-Powered Tech Roadmaps & YouTube Courses",
    description:
      "Generate intelligent, personalized roadmaps for Web Development, UI/UX, Backend, and AI ML. Discover the best YouTube courses in Hindi and English with AI-powered learning paths designed for your success.",
    url: "https://roadmapfinder.tech",
    siteName: "RoadmapFinder",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://roadmapfinder.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "RoadmapFinder - AI-Powered Tech Skills Roadmaps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadmapFinder - AI Roadmap Generator & Best YouTube Courses",
    description:
      "Generate personalized AI-powered roadmaps for tech skills. Learn Web Development, UI/UX, Backend & AI ML with curated YouTube courses in Hindi and English.",
    site: "@roadmapfinder",
    creator: "@sohelkhan_dev",
    images: ["https://roadmapfinder.tech/og-image.png"],
  },
  metadataBase: new URL("https://roadmapfinder.tech"),
  other: {
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "language": "English, Hindi",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={sora.variable}>
        <head>
          {/* Verification & Author */}
          <meta name="google-site-verification" content="Pcule-Lkxly8lgZaFN0VfX2fsPd3vl7xi-P7b1rMwzs" />
          <meta name="author" content="Sohel Khan" />
          <meta name="language" content="English, Hindi" />
          <meta name="distribution" content="global" />
          <meta name="rating" content="general" />

          {/* Canonical & Sitemap */}
          <link rel="canonical" href="https://roadmapfinder.tech" />
          <link rel="sitemap" type="application/xml" href="https://roadmapfinder.tech/sitemap.xml" />
          <link rel="robots" href="https://roadmapfinder.tech/robots.txt" />

          {/* Favicons */}
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="icon" href="/roadmapfinder.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* SEO Internal Links */}
          <link rel="alternate" href="https://roadmapfinder.tech/Full-Stack" title="AI-Powered Web Development Roadmap" />
          <link rel="alternate" href="https://roadmapfinder.tech/UIUX" title="AI-Powered UI/UX Design Roadmap" />
          <link rel="alternate" href="https://roadmapfinder.tech/Aiml" title="AI & Machine Learning Roadmap" />
          <link rel="alternate" href="https://roadmapfinder.tech/Backend" title="AI-Powered Backend Development Roadmap" />

          {/* DNS Prefetch for Performance */}
          <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
          <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />

          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366157018323318"
            crossOrigin="anonymous"
          ></script>

          {/* Structured Data (JSON-LD) - Enhanced for AI-Powered Features */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "RoadmapFinder",
                "applicationCategory": "EducationalApplication",
                "url": "https://roadmapfinder.tech",
                "description": "AI-powered roadmap generator for tech skills. Create personalized learning paths for Web Development, UI/UX Design, Backend, and AI ML with curated YouTube courses in Hindi and English.",
                "operatingSystem": "Web Browser",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "featureList": [
                  "AI-Powered Roadmap Generation",
                  "Personalized Learning Paths",
                  "YouTube Course Curation (Hindi & English)",
                  "Web Development Roadmaps",
                  "UI/UX Design Roadmaps",
                  "Backend Development Roadmaps",
                  "AI & ML Learning Paths"
                ],
                "inLanguage": ["en", "hi"],
                "author": {
                  "@type": "Person",
                  "name": "Sohel Khan",
                  "url": "https://roadmapfinder.tech"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "RoadmapFinder",
                  "url": "https://roadmapfinder.tech"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://roadmapfinder.tech/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                },
                "mainEntity": [
                  {
                    "@type": "Course",
                    "name": "Web Development Roadmap",
                    "description": "AI-generated personalized roadmap for full-stack web development with curated YouTube courses",
                    "url": "https://roadmapfinder.tech/Full-Stack",
                    "provider": {
                      "@type": "Organization",
                      "name": "RoadmapFinder"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "UI/UX Design Roadmap",
                    "description": "AI-powered learning path for UI/UX design with best YouTube tutorials in Hindi and English",
                    "url": "https://roadmapfinder.tech/UIUX",
                    "provider": {
                      "@type": "Organization",
                      "name": "RoadmapFinder"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "AI & Machine Learning Roadmap",
                    "description": "Comprehensive AI and ML learning roadmap with intelligent course recommendations",
                    "url": "https://roadmapfinder.tech/Aiml",
                    "provider": {
                      "@type": "Organization",
                      "name": "RoadmapFinder"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Backend Development Roadmap",
                    "description": "AI-curated backend development path with top YouTube courses",
                    "url": "https://roadmapfinder.tech/Backend",
                    "provider": {
                      "@type": "Organization",
                      "name": "RoadmapFinder"
                    }
                  }
                ]
              })
            }}
          />

          {/* Organization Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "RoadmapFinder",
                "url": "https://roadmapfinder.tech",
                "logo": "https://roadmapfinder.tech/roadmapfinder.svg",
                "description": "AI-powered platform for generating personalized tech learning roadmaps",
                "founder": {
                  "@type": "Person",
                  "name": "Sohel Khan"
                },
                "sameAs": [
                  "https://twitter.com/roadmapfinder"
                ]
              })
            }}
          />

          {/* FAQ Schema for SEO */}
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
                      "text": "RoadmapFinder is an AI-powered platform that generates personalized learning roadmaps for tech skills including Web Development, UI/UX Design, Backend Development, and AI ML. It curates the best YouTube courses in both Hindi and English."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does RoadmapFinder offer courses in Hindi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, RoadmapFinder curates YouTube courses in both Hindi and English, making tech education accessible to a wider audience."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the AI roadmap generator work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our AI roadmap generator analyzes your goals and skill level to create personalized learning paths with curated resources, ensuring an efficient and tailored learning experience."
                    }
                  }
                ]
              })
            }}
          />
        </head>

        <body className={`${sora.className} bg-[#F9FAFB] text-gray-900 antialiased`}>
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}