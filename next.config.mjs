/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  // ✅ Allow CORS and external images for Replit + Google/Firebase
  images: {
    unoptimized: true, // Disable optimization for local images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google auth/profile images
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // Firebase storage
      },
      {
        protocol: "https",
        hostname: "*.replit.dev", // Allow Replit-hosted images if used
      },
    ],
  },

  // ✅ Allow all Replit dev origins
  allowedDevOrigins: ["*.replit.dev"],
};

export default nextConfig;
