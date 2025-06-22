import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Required for GitHub Pages static export
  output: 'export',
  
  // Your existing configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Required for static export with images
    unoptimized: true,
    
    // Your existing remote patterns
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
  },
  
  // Optional: Add basePath if deploying to a subpath
  // basePath: '/studio', // Uncomment if your site is at username.github.io/studio
};

export default nextConfig;
