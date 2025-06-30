/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'https://4a73efa9-9bf8-434e-9946-78ed04c03dbf-00-1miaz9j7zjmlj.pike.replit.dev',
  ],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
};

export default nextConfig;
