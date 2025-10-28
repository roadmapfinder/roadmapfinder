// app/layout.js

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
  title: "RoadmapFinder - Tech Skill Roadmaps",
  description:
    "Explore RoadmapFinder — your ultimate platform for Tech Skill Roadmaps, curated YouTube Best Courses, and AI Resource Finder. Learn web development, AI, and data science through structured learning paths and top-rated video resources.",
  keywords:
    "Tech Skill Roadmaps, YouTube Best Courses, AI Resource Finder, roadmapfinder, learn programming, web development roadmap, data science roadmap, AI learning roadmap, best YouTube tech courses, trending developer resources, AI learning tools",
  applicationName: "RoadmapFinder",
  authors: [{ name: "RoadmapFinder", url: "https://roadmapfinder.tech" }],
  creator: "Sohel Khan",
  publisher: "RoadmapFinder",
  robots: "index, follow",
  alternates: {
    canonical: "https://roadmapfinder.tech",
  },
  openGraph: {
    title: "RoadmapFinder - Tech Skill Roadmaps, YouTube Best Courses & AI Resource Finder",
    description:
      "Master tech skills with RoadmapFinder: Step-by-step Tech Skill Roadmaps, best YouTube courses, and AI Resource Finder to learn smarter and faster.",
    url: "https://roadmapfinder.tech",
    siteName: "RoadmapFinder",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://roadmapfinder.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "RoadmapFinder - Tech Skill Roadmaps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadmapFinder - Tech Skill Roadmaps",
    description:
      "Discover structured Tech Skill Roadmaps, curated YouTube Best Courses, and an AI Resource Finder to accelerate your learning journey with RoadmapFinder.",
    site: "@roadmapfinder",
    creator: "Sohel Khan",
    images: ["https://roadmapfinder.tech/og-image.png"],
  },
  metadataBase: new URL("https://roadmapfinder.tech"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="Pcule-Lkxly8lgZaFN0VfX2fsPd3vl7xi-P7b1rMwzs"
        />
      
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/roadmapfinder.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ SEO Internal Links for Algorithm Boost */}
        <link rel="alternate" href="https://roadmapfinder.tech/RoadmapPage" />
        <link rel="alternate" href="https://roadmapfinder.tech/Courses" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366157018323318"
           crossorigin="anonymous"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366157018323318"
           crossorigin="anonymous"></script>
        {/* ✅ Structured Data (JSON-LD for Google Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RoadmapFinder",
            "url": "https://roadmapfinder.tech",
            "description": "RoadmapFinder offers structured Tech Skill Roadmaps, curated YouTube Best Courses, and an AI Resource Finder to help learners master web development, data science, and AI efficiently.",
            "sameAs": [
              "https://roadmapfinder.tech/RoadmapPage",
              "https://roadmapfinder.tech/Courses"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://roadmapfinder.tech/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RoadmapFinder Team",
              "url": "https://roadmapfinder.tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://roadmapfinder.tech/roadmapfinder.svg"
              }
            },
            "mainEntity": [
              {
                "@type": "ItemList",
                "name": "Tech Skill Roadmaps",
                "url": "https://roadmapfinder.tech/RoadmapPage"
              },
              {
                "@type": "ItemList",
                "name": "YouTube Best Courses",
                "url": "https://roadmapfinder.tech/Courses"
              },
              {
                "@type": "Service",
                "name": "AI Resource Finder",
                "url": "https://roadmapfinder.tech"
              }
            ]
          }
        `,
          }}
        />
      </head>
      <body className={`${sora.className} bg-[#F9FAFB] text-gray-900`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
