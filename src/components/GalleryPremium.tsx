'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Card3DEffect from './Card3DEffect'

const galleryImages = [
  {
    src: '/images/portfolio/IMG-20250826-WA0061.jpg',
    alt: 'Fenêtre moderne installée',
    title: 'Installation premium'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0040.jpg',
    alt: 'Porte vitrée élégante',
    title: 'Élégance et lumière'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0041.jpg',
    alt: 'Baie vitrée moderne',
    title: 'Design contemporain'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0042.jpg',
    alt: 'Fenêtre PVC haute qualité',
    title: 'Qualité premium'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0043.jpg',
    alt: 'Installation professionnelle',
    title: 'Finitions impeccables'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0044.jpg',
    alt: 'Porte d\'entrée moderne',
    title: 'Sécurité et style'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0045.jpg',
    alt: 'Fenêtre aluminium',
    title: 'Design élégant'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0046.jpg',
    alt: 'Installation complète',
    title: 'Projet réalisé'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0047.jpg',
    alt: 'Fenêtre avec volets',
    title: 'Solution complète'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0048.jpg',
    alt: 'Baie vitrée panoramique',
    title: 'Vue exceptionnelle'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0049.jpg',
    alt: 'Porte intérieure design',
    title: 'Intérieur raffiné'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0050.jpg',
    alt: 'Fenêtre double vitrage',
    title: 'Isolation thermique'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0051.jpg',
    alt: 'Installation fenêtre',
    title: 'Travail professionnel'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0052.jpg',
    alt: 'Porte vitrée moderne',
    title: 'Modernité et lumière'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0053.jpg',
    alt: 'Fenêtre de toit',
    title: 'Lumière naturelle'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0054.jpg',
    alt: 'Installation sur mesure',
    title: 'Sur mesure'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0055.jpg',
    alt: 'Fenêtre coulissante',
    title: 'Système coulissant'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0056.jpg',
    alt: 'Porte d\'entrée sécurisée',
    title: 'Sécurité maximale'
  }
]

export default function GalleryPremium() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-minimal-light-gray bg-minimal-off-white mb-6">
            <span className="text-sm text-minimal-dark-gray font-medium">Nos réalisations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-minimal-deep-black mb-6 tracking-tight">
            Portfolio
          </h2>
          <p className="text-xl text-minimal-dark-gray max-w-3xl mx-auto leading-relaxed">
            Découvrez nos projets récents et laissez-vous inspirer par nos installations premium.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="perspective-1000"
            >
              <Card3DEffect intensity={8}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-minimal-off-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </Card3DEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
