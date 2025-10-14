'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import CircularOrbit3D from './CircularOrbit3D'

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 800], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.8])
  const rotateX = useTransform(scrollY, [0, 800], [0, 15])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 100
        const y = (e.clientY - rect.top - rect.height / 2) / 100
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-argus-dark via-argus-anthracite to-black"
    >
      {/* Circular Orbit Background */}
      <CircularOrbit3D size={800} color="#5AC8FA" thickness={4} speed={25} />
      
      {/* Ambient Light Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-argus-ice-blue/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* 3D Glass Logo/Window Center Piece */}
      <motion.div
        className="absolute perspective-container pointer-events-none"
        style={{
          rotateY: mousePosition.x * 2,
          rotateX: -mousePosition.y * 2,
          scale,
        }}
      >
        <motion.div
          className="relative w-[400px] h-[400px] animate-camera-float"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main Glass Panel with Ice Blue Glow */}
          <motion.div
            className="absolute inset-0 glass-dark rounded-3xl animate-ice-glow"
            style={{
              background: 'linear-gradient(135deg, rgba(90,200,250,0.1) 0%, rgba(30,30,30,0.4) 100%)',
              backdropFilter: 'blur(30px)',
              border: '2px solid rgba(90,200,250,0.3)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glass Reflection Overlay */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(90,200,250,0.1) 100%)',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Window Frame Grid */}
            <div className="absolute inset-6 border-2 border-argus-ice-blue/20 rounded-2xl">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-argus-ice-blue/20" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-argus-ice-blue/20" />
            </div>

            {/* Center Logo/Icon Area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-24 h-24 rounded-full glass-dark border-2 border-argus-ice-blue/40"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(90,200,250,0.3)',
                    '0 0 40px rgba(90,200,250,0.6)',
                    '0 0 20px rgba(90,200,250,0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-argus-ice-blue" />
                </div>
              </motion.div>
            </div>

            {/* Floating Particles Around Glass */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-argus-ice-blue/60 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  filter: 'blur(1px)',
                }}
                animate={{
                  x: [0, Math.cos((i * Math.PI * 2) / 8) * 180],
                  y: [0, Math.sin((i * Math.PI * 2) / 8) * 180],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Depth Layers */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-argus-ice-blue/10"
            style={{
              transform: 'translateZ(-50px)',
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 pointer-events-auto"
        style={{ y, opacity, rotateX }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-argus-ice-blue animate-pulse" />
            <span className="text-sm font-medium text-argus-gray-light">
              Transformă-ți casa cu ferestre și uși premium
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Ferestre și Uși
            <br />
            <span className="bg-gradient-to-r from-argus-ice-blue via-blue-400 to-argus-ice-blue bg-clip-text text-transparent animate-glass-morph">
              din Sticlă Premium
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-argus-gray-light/90 mb-12 leading-relaxed font-light"
          >
            Design modern, materiale premium și montaj profesional.
            <br />
            Creăm spații luminoase care îți depășesc așteptările.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-argus-ice-blue text-argus-dark rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300"
              style={{
                boxShadow: '0 0 30px rgba(90,200,250,0.4), 0 10px 40px rgba(0,0,0,0.3)',
              }}
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                Cere o Ofertă Gratuită
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-argus-ice-blue to-blue-400"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <Link
              href="/portofoliu"
              className="group px-8 py-4 glass-dark-hover rounded-2xl font-semibold text-lg text-white flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-argus-ice-blue/20 flex items-center justify-center group-hover:bg-argus-ice-blue/30 transition-colors border border-argus-ice-blue/30">
                <div className="w-0 h-0 border-l-[10px] border-l-argus-ice-blue border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
              </div>
              Vezi Galeria
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { value: '500+', label: 'Proiecte Finalizate' },
              { value: '15+', label: 'Ani Experiență' },
              { value: '100%', label: 'Satisfacție Clienți' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-argus-ice-blue mb-2 group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-argus-gray-light/70 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-argus-gray-light/60 font-light uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-argus-ice-blue/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-argus-ice-blue rounded-full"
              animate={{ 
                y: [0, 14, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                boxShadow: '0 0 10px rgba(90,200,250,0.6)'
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
