'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

export default function VideoSection() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  // const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-black via-argus-anthracite/30 to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <span className="w-2 h-2 rounded-full bg-argus-ice-blue animate-pulse" />
            <span className="text-sm text-argus-gray-light font-medium">Expertiza noastră</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Arta transparenței
          </h2>
          <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto">
            Descoperă procesul nostru de fabricație și instalare a ferestrelor premium.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-[600px] object-cover"
            poster="/images/portfolio/IMG-20250826-WA0061.jpg"
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/VID-20250826-WA0075.mp4" type="video/mp4" />
            Browser-ul tău nu suportă redarea video.
          </video>

          {/* Overlay with play button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-argus-ice-blue/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-argus-ice-blue transition-all duration-300 shadow-xl group-hover:shadow-2xl"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-argus-dark" />
              ) : (
                <Play className="w-8 h-8 text-argus-dark ml-1" />
              )}
            </button>
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Instalare profesională</h3>
            <p className="text-white/90">Precizie, expertiză și finisaje impecabile</p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { title: 'Calitate premium', description: 'Materiale de înaltă calitate selectate cu grijă' },
            { title: 'Instalare rapidă', description: 'Montaj profesional în 24-48 ore' },
            { title: 'Garanție extinsă', description: 'Satisfacție garantată și asistență personalizată' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="p-6 rounded-2xl glass-dark hover:border-argus-ice-blue/30 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-argus-gray-light/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
