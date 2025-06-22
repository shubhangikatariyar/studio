import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
<<<<<<< HEAD
  output: 'export',
  basePath: '/my-portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
=======
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Required for static export
>>>>>>> refs/remotes/origin/master
  },
  // Keep your existing configurations
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Add basePath only if deploying to subfolder (e.g., /studio)
  basePath: process.env.NODE_ENV === 'production' ? '/studio' : '',
}

export default nextConfig
