'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import FloatingElements from './FloatingElements'

export default function HeroPremium() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000">
      {/* Floating 3D Elements */}
      <FloatingElements />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/VID-20250826-WA0074.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-32 text-center">
        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-premium-silver/30 bg-white/60 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-premium-sky animate-pulse" />
            <span className="text-sm text-minimal-dark-gray font-medium">Excellence depuis 2008</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-minimal-deep-black leading-[1.1] tracking-tight"
          >
            Lumière et transparence
            <br />
            <span className="text-premium-charcoal/70">pour votre maison</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-minimal-dark-gray max-w-3xl mx-auto leading-relaxed"
          >
            Fenêtres et portes en verre de haute performance.
            <br />
            Design élégant, efficacité énergétique et artisanat d'exception.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-premium-sky text-white rounded-xl font-medium hover:bg-premium-sky/90 transition-all duration-300 hover:shadow-xl hover:shadow-premium-sky/20 hover:-translate-y-0.5"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-minimal-light-gray bg-white/60 backdrop-blur-sm text-minimal-deep-black rounded-xl font-medium hover:border-premium-sky hover:bg-white transition-all duration-300 hover:shadow-lg"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Voir la vidéo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16"
          >
            {[
              { value: '15+', label: 'Ans d\'expérience' },
              { value: '2000+', label: 'Projets réalisés' },
              { value: '98%', label: 'Clients satisfaits' },
              { value: '5★', label: 'Note moyenne' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl sm:text-5xl font-bold text-minimal-deep-black">{stat.value}</div>
                <div className="text-sm text-minimal-medium-gray">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-minimal-light-gray rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-premium-sky rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
