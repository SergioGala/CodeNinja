import './globals.css'

export const metadata = {
  title: 'JEG Studios | Desarrollo Web y Apps Móviles | React, Python, Node.js',
  description: 'Equipo de 4 desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas. Consultoría gratuita. Proyectos web y móviles escalables con calidad garantizada.',
  keywords: 'desarrollo web, react, nextjs, python, nodejs, app móvil, desarrollo software, programadores freelance, MVP, JEG Studios, aplicaciones web',
  authors: [{ name: 'JEG Studios' }],
  creator: 'JEG Studios',
  publisher: 'JEG Studios',
  metadataBase: new URL('https://jegstudios.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JEG Studios | Desarrollo Web y Apps Móviles',
    description: 'Equipo de 4 desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas con calidad asegurada.',
    url: 'https://jegstudios.com',
    siteName: 'JEG Studios',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JEG Studios - Desarrollo Web y Apps Móviles Profesional',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEG Studios | Desarrollo Web y Apps Móviles',
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
        <meta name="theme-color" content="#06b6d4" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}