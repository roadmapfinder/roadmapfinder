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
  title: "RoadmapFinder - Learn Web Development, UI/UX, AI ML & Backend Roadmaps",
  description:
    "Explore structured roadmaps for Web Development, UI/UX Design, Backend, and AI ML at RoadmapFinder. Discover curated YouTube courses and learning paths to master tech skills efficiently.",
  keywords:
    "web development roadmap, UIUX roadmap, backend roadmap, AI ML roadmap, full stack developer roadmap, learn programming, tech skills guide, roadmapfinder, ai learning roadmap, best YouTube tech courses",
  applicationName: "RoadmapFinder",
  authors: [{ name: "RoadmapFinder", url: "https://roadmapfinder.tech" }],
  creator: "Sohel Khan",
  publisher: "RoadmapFinder",
  robots: "index, follow",
  alternates: {
    canonical: "https://roadmapfinder.tech",
  },
  openGraph: {
    title: "RoadmapFinder - Web Development, UI/UX, AI ML & Backend Roadmaps",
    description:
      "Master Web Development, UI/UX Design, AI ML, and Backend Engineering through expert-curated roadmaps and YouTube learning paths on RoadmapFinder.",
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
    title: "RoadmapFinder - Learn Web Development, UI/UX, AI ML & Backend",
    description:
      "Explore expert-curated roadmaps for Web Development, UI/UX, Backend, and AI ML. Learn step-by-step with YouTube’s best courses on RoadmapFinder.",
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
        {/* ✅ Verification & Author */}
        <meta name="google-site-verification" content="Pcule-Lkxly8lgZaFN0VfX2fsPd3vl7xi-P7b1rMwzs" />
        <meta name="author" content="Sohel Khan" />
        <link rel="canonical" href="https://roadmapfinder.tech" />
        <link rel="sitemap" type="application/xml" href="https://roadmapfinder.tech/sitemap.xml" />
        <link rel="robots" href="https://roadmapfinder.tech/robots.txt" />

        {/* ✅ Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/roadmapfinder.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ SEO Internal Links */}
        <link rel="alternate" href="https://roadmapfinder.tech/Full-Stack" title="Web Development Roadmap" />
        <link rel="alternate" href="https://roadmapfinder.tech/UIUX" title="UI UX Design Roadmap" />
        <link rel="alternate" href="https://roadmapfinder.tech/Aiml" title="AI ML Roadmap" />
        <link rel="alternate" href="https://roadmapfinder.tech/Backend" title="Backend Roadmap" />

        {/* ✅ AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366157018323318"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "RoadmapFinder",
              "url": "https://roadmapfinder.tech",
              "description": "RoadmapFinder offers structured roadmaps for Web Development, UI/UX Design, Backend, and AI ML — including curated YouTube courses and AI tools.",
              "sameAs": [
                "https://roadmapfinder.tech/Full-Stack",
                "https://roadmapfinder.tech/UIUX",
                "https://roadmapfinder.tech/Aiml",
                "https://roadmapfinder.tech/Backend"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://roadmapfinder.tech/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "mainEntity": [
                {
                  "@type": "ItemList",
                  "name": "Web Development Roadmap",
                  "url": "https://roadmapfinder.tech/Full-Stack"
                },
                {
                  "@type": "ItemList",
                  "name": "UI/UX Design Roadmap",
                  "url": "https://roadmapfinder.tech/UIUX"
                },
                {
                  "@type": "ItemList",
                  "name": "AI & Machine Learning Roadmap",
                  "url": "https://roadmapfinder.tech/Aiml"
                },
                {
                  "@type": "ItemList",
                  "name": "Backend Development Roadmap",
                  "url": "https://roadmapfinder.tech/Backend"
                }
              ]
            }
          `,
          }}
        />
      </head>

      <body className={`${sora.className} bg-[#F9FAFB] text-gray-900`}>
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
