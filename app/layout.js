
Copiar

import './globals.css'
import Script from 'next/script'
import StructuredData from './components/StructuredData'
import CookieBanner from './components/CookieBanner'

export const metadata = {
  metadataBase: new URL('https://jegsdev.com'),
  title: {
    default: 'JEG Studios | Desarrollo Web y Apps Móviles Madrid',
    template: '%s | JEG Studios'
  },
  description: 'Equipo de desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas con calidad asegurada. Madrid, España.',
  keywords: ['desarrollo web madrid', 'desarrollo apps móviles', 'react', 'next.js', 'python', 'node.js', 'programadores madrid'],
  authors: [{ name: 'JEG Studios' }],
  creator: 'JEG Studios',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://jegsdev.com',
    siteName: 'JEG Studios',
    title: 'JEG Studios | Desarrollo Web y Apps Móviles Madrid',
    description: 'Equipo de desarrolladores especializados en React, Next.js, Python y Node.js.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JEG Studios - Desarrollo Web y Apps',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEG Studios | Desarrollo Web y Apps Móviles Madrid',
    description: 'Equipo de desarrolladores especializados en React, Next.js, Python y Node.js.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap" 
          rel="stylesheet" 
        />

        {/* 
          ============================================
          GOOGLE CONSENT MODE v2 - CRÍTICO
          ============================================
          Este script DEBE ejecutarse ANTES de GTM.
          Establece el estado de consentimiento por defecto (denied)
          para cumplir con GDPR en Europa.
        */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Establecer consentimiento por defecto ANTES de cargar GTM
            // Por defecto: denied para Europa (GDPR)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
            
            // Configuración específica por región (opcional)
            // España y resto de EEE: denied por defecto
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied', 
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'region': ['ES', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'SE', 'IS', 'LI', 'NO', 'GB']
            });
          `}
        </Script>

        {/* 
          ============================================
          GOOGLE TAG MANAGER
          ============================================
          Carga DESPUÉS del consent mode default.
          GTM respetará el estado de consentimiento.
        */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P8S5NSL2');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "udnwx0fclm");
          `}
        </Script>

        <StructuredData />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8S5NSL2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
        
        {/* Banner de cookies - se renderiza condicionalmente */}
        <CookieBanner />
      </body>
    </html>
  )
}