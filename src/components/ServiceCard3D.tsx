'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCard3DProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
  index: number
}

export default function ServiceCard3D({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  index
}: ServiceCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set((e.clientX - centerX) / (rect.width / 2))
    mouseY.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="perspective-container group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full"
      >
        {/* Glass Card */}
        <div className="relative h-full p-8 rounded-3xl glass-dark glass-dark-hover overflow-hidden border-2 border-argus-ice-blue/10">
          {/* Gradient Background on Hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            style={{ transform: 'translateZ(-10px)' }}
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 glass-reflection" />

          {/* Content */}
          <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}
              animate={isHovered ? { 
                scale: 1.1, 
                rotateZ: 360,
                boxShadow: '0 20px 40px rgba(0, 174, 239, 0.3)'
              } : { 
                scale: 1, 
                rotateZ: 0,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ duration: 0.6 }}
              style={{ transform: 'translateZ(30px)' }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              {title}
            </h3>

            {/* Description */}
            <p className="text-argus-gray-light/80 mb-6 leading-relaxed font-light">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.1 }}
                  className="flex items-start gap-3"
                  style={{ transform: `translateZ(${20 + i * 5}px)` }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`} />
                  <span className="text-sm text-argus-gray-light/70">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Hover Indicator */}
            <motion.div
              className="mt-8 flex items-center gap-2 text-argus-ice-blue font-medium"
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm">Află mai multe</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </motion.div>
          </div>

          {/* 3D Depth Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-argus-ice-blue/10 backdrop-blur-sm flex items-center justify-center border border-argus-ice-blue/20"
            style={{ transform: 'translateZ(60px)' }}
            animate={isHovered ? { 
              scale: 1.2,
              rotate: 180
            } : { 
              scale: 1,
              rotate: 0
            }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient}`} />
          </motion.div>
        </div>

        {/* Shadow Layer */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-argus-ice-blue/10 blur-xl -z-10"
          style={{ transform: 'translateZ(-20px)' }}
          animate={isHovered ? { 
            scale: 1.05,
            opacity: 0.3
          } : { 
            scale: 1,
            opacity: 0.1
          }}
        />
      </motion.div>
    </motion.div>
  )
}
