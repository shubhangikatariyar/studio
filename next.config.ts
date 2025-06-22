import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Keep your existing configurations
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Add basePath only if deploying to subfolder (e.g., /studio)
  basePath: process.env.NODE_ENV === 'production' ? '/studio' : '',
}

export default nextConfig
