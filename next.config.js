/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compilador optimizado
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimización de imágenes
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // Minificación SWC (más rápida que Terser)
  swcMinify: true,
  
  // Optimizaciones experimentales
  experimental: {
    optimizeCss: true,
  },

  // Headers para caching agresivo
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },

  // Compresión
  compress: true,

  // Optimización de producción
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig