import './globals.css'

export const metadata = {
  title: 'Desarrollo Web y Apps Móviles | Equipo React & Python',
  description: 'Equipo de 4 desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas. Consultoría gratuita. Proyectos escalables con calidad asegurada.',
  keywords: 'desarrollo web, react, nextjs, python, nodejs, app móvil, desarrollo software, programadores freelance, MVP',
  authors: [{ name: 'Tu Equipo Dev' }],
  creator: 'Tu Equipo Dev',
  publisher: 'Tu Equipo Dev',
  metadataBase: new URL('https://tudominio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Desarrollo Web y Apps Móviles | Equipo React & Python',
    description: 'Equipo de 4 desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas.',
    url: 'https://tudominio.com',
    siteName: 'Tu Equipo Dev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tu Equipo Dev - Desarrollo Web Profesional',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo Web y Apps Móviles | Equipo React & Python',
    description: 'MVP en 4-6 semanas. React, Python, Node.js. Consultoría gratuita.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
