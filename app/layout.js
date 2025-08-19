// app/layout.js
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

// ✅ Proper viewport export for Next.js 13+
export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "RoadmapFinder -  Tech Skill Roadmaps & Best Learning Resources",
  description:
    "Get industry-ready with RoadmapFinder: Step-by-step technology skill roadmaps, best YouTube courses, AI powered Career Guidance , AI Project helper, and trending tech blogs. Learn faster, smarter, and job-oriented.",
  keywords:
    "technology skill roadmap, roadmapfinder, roadmaps , learn tech skills, web development roadmap, AI ML roadmap, data science roadmap, backend roadmap, frontend roadmap, top YouTube coding courses,  tech tools blog, latest tech updates, RoadmapFinder learning path",
  applicationName: "RoadmapFinder",
  authors: [{ name: "RoadmapFinder", url: "https://roadmapfinder.tech" }],
  creator: "Sohel Khan",
  publisher: "RoadmapFinder",
  robots: "index, follow",
  openGraph: {
    title: "RoadmapFinder - Learn Tech Skills the Smarter Way",
    description:
      "Master tech skills with structured roadmaps, top YouTube course filters, Career Guidance, AI Project helper and blogs on the latest tech trends. Build your career with confidence.",
    url: "https://roadmapfinder.tech",
    siteName: "RoadmapFinder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadmapFinder -  Tech Roadmaps & Learning Resources",
    description:
      "Explore the best technology roadmaps, top YouTube learning resources, Career Guidance, AI project helper and tech blogs — all in one place. Start your skill journey today!",
    site: "@roadmapfinder",
    creator: "Sohel Khan",
  },
  metadataBase: new URL("https://roadmapfinder.tech"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RoadmapFinder",
            "url": "https://roadmapfinder.tech",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://roadmapfinder.tech/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "description": "Explore step-by-step technology skill roadmaps, best filtered YouTube courses, Career Guidance, AI project helper, and blogs on trending tech.",
            "publisher": {
              "@type": "Organization",
              "name": "RoadmapFinder Team",
              "url": "https://roadmapfinder.tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://roadmapfinder.tech/roadmapfinder.svg"
              }
            }
          }
        `}} />
      </head>
      <body className={`${sora.className} bg-[#F9FAFB] text-gray-900`}>
        {children}
        <Analytics /> 
        <SpeedInsights /> 
      </body>
    </html>
  );
}