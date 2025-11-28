import './globals.css'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://jegsdev.com'),
  title: {
    default: 'JEG Studios | Desarrollo Web y Apps Móviles | React, Python, Node.js',
    template: '%s | JEG Studios'
  },
  description: 'Equipo de desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas. Consultoría gratuita. Proyectos web y móviles escalables con calidad garantizada.',
  keywords: ['desarrollo web', 'react', 'nextjs', 'python', 'nodejs', 'app móvil', 'desarrollo software', 'programadores freelance', 'MVP', 'JEG Studios'],
  authors: [{ name: 'JEG Studios', url: 'https://jegsdev.com' }],
  creator: 'JEG Studios',
  publisher: 'JEG Studios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://jegsdev.com',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://jegsdev.com',
    siteName: 'JEG Studios',
    title: 'JEG Studios | Desarrollo Web y Apps Móviles Profesional',
    description: 'Equipo de desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas con calidad asegurada.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JEG Studios - Desarrollo Web y Apps Móviles Profesional',
        type: 'image/jpeg',
      },
    ],
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
        {/* Preconnect CRÍTICO - debe ir primero */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload SOLO fuentes críticas con display=swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Theme color */}
        <meta name="theme-color" content="#06b6d4" />

        {/* Viewport optimizado */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-L048P21DHX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-L048P21DHX', {
      page_path: window.location.pathname,
    });
  `}
        </Script>


        <Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1187322646119344');
    fbq('track', 'PageView');
  `}
</Script>
<noscript>
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    src={`https://www.facebook.com/tr?id=1187322646119344&ev=PageView&noscript=1`}
  />
</noscript>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}