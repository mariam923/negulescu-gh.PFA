'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function FloatingElements() {
  const orbs = useMemo(() => [...Array(3)], [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating orbs - reduced from 5 to 3 */}
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-premium-sky/10 to-premium-sage/10 backdrop-blur-3xl"
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            left: `${10 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Geometric shapes */}
      <motion.div
        className="absolute w-32 h-32 border border-premium-sky/20 rounded-2xl"
        style={{ right: '10%', top: '20%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-24 h-24 border-2 border-premium-sage/20 rounded-full"
        style={{ left: '15%', bottom: '25%' }}
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
