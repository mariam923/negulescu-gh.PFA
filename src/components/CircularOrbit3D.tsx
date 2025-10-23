'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface CircularOrbit3DProps {
  size?: number
  color?: string
  thickness?: number
  speed?: number
}

export default function CircularOrbit3D({ 
  size = 600, 
  color = '#5AC8FA',
  thickness = 3,
  speed = 20
}: CircularOrbit3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to rotation
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360])
  // const rotateX = useTransform(scrollYProgress, [0, 1], [0, 180])
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-container"
      style={{ perspective: '2000px' }}
    >
      {/* Main Circular Orbit */}
      <motion.div
        className="relative"
        style={{
          width: size,
          height: size,
          rotateY,
          rotateX: 15,
        }}
        animate={{
          rotateZ: 360,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Outer Ring - Rotating */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 600"
          style={{
            filter: `drop-shadow(0 0 20px ${color}) drop-shadow(0 0 40px ${color})`
          }}
        >
          {/* Main circular path with gradient */}
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.2" />
              <stop offset="50%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0.2" />
            </linearGradient>
            
            <radialGradient id="glowGradient">
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Outer circle with glow */}
          <circle
            cx="300"
            cy="300"
            r="280"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray="1400 1400"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="1400"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Inner circle - counter rotating */}
          <circle
            cx="300"
            cy="300"
            r="240"
            fill="none"
            stroke={color}
            strokeWidth={thickness * 0.5}
            strokeLinecap="round"
            strokeDasharray="800 800"
            opacity="0.4"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="800"
              to="0"
              dur={`${speed * 1.5}s`}
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Orbital particles/dots */}
          {[0, 90, 180, 270].map((angle, i) => (
            <circle
              key={i}
              cx="300"
              cy="300"
              r="4"
              fill={color}
              opacity="0.8"
              style={{
                filter: `drop-shadow(0 0 10px ${color})`
              }}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`${angle} 300 300`}
                to={`${angle + 360} 300 300`}
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </motion.svg>
        
        {/* Additional 3D depth rings */}
        <motion.div
          className="absolute inset-0 rounded-full border opacity-20"
          style={{
            borderColor: color,
            borderWidth: thickness * 0.5,
            transform: 'translateZ(50px)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border opacity-10"
          style={{
            borderColor: color,
            borderWidth: thickness * 0.3,
            transform: 'translateZ(-50px)',
          }}
          animate={{
            scale: [1, 0.95, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Central glow element */}
      <motion.div
        className="absolute"
        style={{
          width: size * 0.3,
          height: size * 0.3,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
