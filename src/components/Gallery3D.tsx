'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/portfolio/IMG-20250826-WA0061.jpg',
    alt: 'Fereastră modernă instalată',
    title: 'Instalare Premium'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0040.jpg',
    alt: 'Ușă de intrare elegantă',
    title: 'Design Elegant'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0050.jpg',
    alt: 'Sistem de jaluzele',
    title: 'Sisteme Smart'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0062.jpg',
    alt: 'Ferestre panoramice',
    title: 'Vedere Panoramică'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0063.jpg',
    alt: 'Detalii finisaje',
    title: 'Finisaje Premium'
  },
  {
    src: '/images/portfolio/IMG-20250826-WA0064.jpg',
    alt: 'Montaj profesional',
    title: 'Montaj Expert'
  },
]

export default function Gallery3D() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <span className="w-2 h-2 rounded-full bg-argus-ice-blue animate-pulse" />
            <span className="text-sm text-argus-gray-light font-medium">Galeria noastră</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Proiecte Realizate
          </h2>
          <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto">
            Fiecare proiect este o poveste de succes. Descoperă transformările create pentru clienții noștri.
          </p>
        </motion.div>

        {/* 3D Gallery Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="relative h-80 rounded-3xl overflow-hidden glass-card"
                animate={hoveredIndex === index ? {
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.05,
                  z: 50,
                } : {
                  rotateY: 0,
                  rotateX: 0,
                  scale: 1,
                  z: 0,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Title */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm">Click pentru detalii</span>
                  </div>
                </motion.div>

                {/* Glass Shine Effect */}
                <div className="absolute inset-0 glass-reflection pointer-events-none" />

                {/* 3D Border */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none" />
              </motion.div>

              {/* Shadow */}
              <motion.div
                className="absolute inset-0 bg-black/10 blur-xl rounded-3xl -z-10"
                animate={hoveredIndex === index ? {
                  scale: 1.1,
                  opacity: 0.3,
                } : {
                  scale: 1,
                  opacity: 0.1,
                }}
                transition={{ duration: 0.4 }}
                style={{ transform: 'translateZ(-20px)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, rotateY: -20 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
