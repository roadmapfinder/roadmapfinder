/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'b93eff29-05ec-426e-b52c-47636369b5cb-00-1zn89n5c3ww20.sisko.replit.dev',
  ],
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',  // Google user profile photos
      'firebasestorage.googleapis.com',  // If you're using Firebase Storage
      // Add any other domains you need
    ],
  },
};

export default nextConfig;
