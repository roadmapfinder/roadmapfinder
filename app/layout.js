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
  title: "RoadmapFinder - Technology Skill Roadmaps",
  description:
    "Explore industry-ready roadmaps for developers, designers, and data scientists. Master in-demand tech skills with structured learning paths, tools, and resources.",
  keywords:
    "technology roadmap, skill roadmap, learn coding, frontend roadmap, backend roadmap, ai ml roadmap, dev roadmap, web development, programming tools, roadmapfinder",
  applicationName: "RoadmapFinder",
  authors: [{ name: "RoadmapFinder Team", url: "https://roadmapfinder.tech" }],
  creator: "RoadmapFinder Team",
  publisher: "RoadmapFinder",
  robots: "index, follow",
  openGraph: {
    title: "RoadmapFinder - Your Personalized Tech Skill Roadmaps",
    description:
      "Discover curated roadmaps and tools to master web development, AI/ML, design, and more.",
    url: "https://roadmapfinder.tech",
    siteName: "RoadmapFinder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadmapFinder - Your Personalized Tech Skill Roadmaps",
    description:
      "Explore step-by-step skill roadmaps, tools, and modern learning paths for tech learners.",
    site: "@roadmapfinder",
    creator: "@roadmapfinder",
  
  },
  metadataBase: new URL("https://roadmapfinder.tech"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sora bg-[#F9FAFB] text-gray-900">{children}  <Analytics /> 
      <SpeedInsights /> </body>
    </html>
  );
}
