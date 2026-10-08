/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
