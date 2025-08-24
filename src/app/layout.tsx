import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Negulescu gh.PFA - Montaj Ferestre și Uși în România',
    template: '%s | Negulescu gh.PFA'
  },
  description: 'Negulescu gh.PFA este specializată în montajul profesional de ferestre și uși în România. Servicii de calitate superioară, materiale premium și garanție extinsă.',
  keywords: ['ferestre', 'uși', 'montaj', 'România', 'Negulescu gh.PFA', 'PVC', 'aluminiu', 'lemn'],
  authors: [{ name: 'Negulescu gh.PFA' }],
  creator: 'Negulescu gh.PFA',
  publisher: 'Negulescu gh.PFA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://negulescu.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Negulescu gh.PFA - Montaj Ferestre și Uși în România',
    description: 'Servicii profesionale de montaj ferestre și uși. Calitate superioară și garanție extinsă.',
    url: 'https://negulescu.ro',
    siteName: 'Negulescu gh.PFA',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Negulescu gh.PFA - Montaj Ferestre și Uși',
    description: 'Servicii profesionale de montaj ferestre și uși în România.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Negulescu gh.PFA",
              "description": "Companie specializată în montajul profesional de ferestre și uși în România",
              "url": "https://negulescu.ro",
              "telephone": "+40-XXX-XXX-XXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strada Exemplu 123",
                "addressLocality": "București",
                "addressRegion": "București",
                "postalCode": "010101",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.4268,
                "longitude": 26.1025
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Country",
                "name": "România"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicii Ferestre și Uși",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Montaj Ferestre PVC",
                      "description": "Montaj profesional ferestre PVC cu garanție extinsă"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Montaj Uși de Intrare",
                      "description": "Montaj uși de intrare din materiale premium"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}