'use client'

import { LucideIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Card3DEffect from './Card3DEffect'

interface ServiceCardPremiumProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  className?: string
  index?: number
}

export default function ServiceCardPremium({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  className,
  index = 0
}: ServiceCardPremiumProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn("group h-full perspective-1000", className)}
    >
      <Card3DEffect intensity={10}>
        <div className="relative p-8 h-full bg-white rounded-2xl border border-minimal-light-gray hover:border-premium-sky/30 hover:shadow-xl hover:shadow-premium-sky/5 transition-all duration-500 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-premium-sky/0 via-premium-sky/0 to-premium-sky/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-premium-pearl to-white rounded-2xl flex items-center justify-center border border-minimal-light-gray group-hover:border-premium-sky/30 group-hover:shadow-lg transition-all duration-500">
              <Icon className="w-8 h-8 text-premium-sky group-hover:scale-110 transition-transform duration-500" />
            </div>
          </motion.div>
          
          {/* Title */}
          <h3 className="text-2xl font-semibold text-minimal-deep-black mb-3 group-hover:text-premium-sky transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-minimal-dark-gray mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Features List */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start gap-3 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-premium-sky mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <span className="text-minimal-dark-gray group-hover:text-minimal-deep-black transition-colors duration-300">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-4 border-t border-minimal-light-gray">
            <button className="group/btn inline-flex items-center gap-2 text-premium-sky font-medium hover:gap-3 transition-all duration-300">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        </div>
      </Card3DEffect>
    </motion.div>
  )
}
