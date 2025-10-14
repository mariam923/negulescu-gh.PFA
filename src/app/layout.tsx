import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import ChatBot from '../components/ChatBot'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'], 
  variable: '--font-montserrat',
  display: 'swap'
})
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Negulescu Gh.PFA - Montaj Ferestre și Uși în România',
    template: '%s | Negulescu Gh.PFA'
  },
  description: 'Negulescu Gh.PFA este specializată în montajul profesional de ferestre și uși în România. Servicii de calitate superioară, materiale premium și garanție extinsă.',
  keywords: ['ferestre', 'uși', 'montaj', 'România', 'Negulescu Gh.PFA', 'PVC', 'aluminiu', 'lemn'],
  authors: [{ name: 'Negulescu Gh.PFA' }],
  creator: 'Negulescu Gh.PFA',
  publisher: 'Negulescu Gh.PFA',
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
    title: 'Negulescu Gh.PFA - Montaj Ferestre și Uși în România',
    description: 'Servicii profesionale de montaj ferestre și uși. Calitate superioară și garanție extinsă.',
    url: 'https://negulescu.ro',
    siteName: 'Negulescu Gh.PFA',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Negulescu Gh.PFA - Montaj Ferestre și Uși',
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
              "name": "Negulescu Gh.PFA",
              "description": "Companie specializată în montajul profesional de ferestre și uși în România",
              "url": "https://negulescu.ro",
              "telephone": "+40-763-564-072",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.4268,
                "longitude": 26.1025
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
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
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <ChatBot />
      </body>
    </html>
  )
}