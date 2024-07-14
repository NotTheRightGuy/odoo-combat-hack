/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@mui/x-charts'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
        pathname: '/books/content/**',
      },
    ],
  },
};

export default nextConfig;
