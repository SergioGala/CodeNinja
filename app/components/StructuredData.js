import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JEG Studios",
    "legalName": "JEG Studios",
    "url": "https://jegsdev.com",
    "logo": "https://jegsdev.com/logo.png",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "JEG Studios Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "jegstudiotech@gmail.com",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://github.com/SergioGala",
      "https://www.linkedin.com/in/sergio-gala-fernandez/"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jegsdev.com",
    "name": "JEG Studios",
    "image": "https://jegsdev.com/og-image.jpg",
    "description": "Equipo de desarrolladores especializados en React, Next.js, Python y Node.js. MVP en 4-6 semanas con calidad asegurada.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.4168",
      "longitude": "-3.7038"
    },
    "url": "https://jegsdev.com",
    "telephone": "+34-650-31-38-94",  
    "email": "jegstudiotech@gmail.com",
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "00:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "15"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": "JEG Studios"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Spain"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web",
            "description": "Aplicaciones web modernas con React y Next.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo de Apps Móviles",
            "description": "Aplicaciones móviles con React Native"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backend y APIs",
            "description": "Desarrollo de APIs con Python y Node.js"
          }
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  )
}