'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface ParallaxSection3DProps {
  children: ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection3D({ 
  children, 
  className = '',
  speed = 0.5 
}: ParallaxSection3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y, opacity, scale }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}
