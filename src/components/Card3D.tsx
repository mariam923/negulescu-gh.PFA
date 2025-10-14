'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function Card3D({ children, className, intensity = 15 }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    )
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={cn('transition-transform duration-300 ease-out', className)}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative"
        style={{
          transform: isHovering ? 'translateZ(50px)' : 'translateZ(0px)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  )
}
