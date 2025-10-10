/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow CORS for local and Replit environments
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google auth/profile images
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com', // Firebase storage
      },
      {
        protocol: 'https',
        hostname: '*.replit.dev', // Allow Replit-hosted images if used
      },
    ],
  },
};

export default nextConfig;
