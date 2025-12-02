import './globals.css'
import Script from 'next/script'
import StructuredData from './components/StructuredData'

export const metadata = {
  metadataBase: new URL('https://jegsdev.com'),
  title: {
    default: 'JEG Studios | Desarrollo Web Madrid | React, Next.js, Python',
    template: '%s | JEG Studios'
  },
  description: 'Desarrollo web y apps móviles en Madrid. Equipo especializado en React, Next.js, Python y Node.js. MVP en 4-6 semanas. Consultoría gratuita. Proyectos escalables desde 3.000€.',
  keywords: [
    // Keywords principales
    'desarrollo web madrid',
    'programadores react madrid',
    'desarrollo app móvil madrid',
    'empresa desarrollo software madrid',

    // Tecnologías
    'react', 'nextjs', 'next.js', 'python', 'nodejs', 'node.js',
    'react native', 'tailwind css', 'typescript',

    // Servicios
    'desarrollo web', 'desarrollo móvil', 'desarrollo backend',
    'desarrollo apis', 'mvp desarrollo', 'programadores freelance',

    // Long-tail
    'crear página web empresa madrid',
    'desarrollo web startup madrid',
    'programadores python freelance',
    'desarrollo react profesional',
    'cuánto cuesta app móvil',

    // Local
    'JEG Studios', 'desarrolladores madrid', 'software madrid'
  ],
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
    title: 'JEG Studios | Desarrollo Web y Apps Móviles Madrid',
    description: 'Desarrollo web y apps móviles en Madrid. React, Next.js, Python. MVP en 4-6 semanas desde 3.000€.',
    images: [
      {
        url: './Chip.webp',
        width: 1200,
        height: 630,
        alt: 'JEG Studios - Desarrollo Web y Apps Móviles Profesional en Madrid',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEG Studios | Desarrollo Web Madrid',
    description: 'Desarrollo web y apps móviles. React, Python, Node.js. MVP en 4-6 semanas.',
    images: ['./Chip.webp'],
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
        {/* Preconnect CRÍTICO */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fuentes críticas */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />

        {/* FAVICON COMPLETO - NUEVO */}

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color */}
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />

        {/* Viewport optimizado */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Google Search Console Verification */}
        
        <meta name="google-site-verification" content="cceT5qz9Ks-xYTeIuMmqSKNBK0y8Nj_idU3aGKMEi34" />
        
        {/* Google Analytics */}
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

        {/* Meta Pixel */}
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

        {/* Google Tag Manager Script*/}

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P8S5NSL2');
  `}
        </Script>


        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8S5NSL2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Microsoft Clarity configuracion script*/}

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "udnwx0fclm");
  `}
        </Script>


        {/* Structured Data (Schema.org) */}
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}