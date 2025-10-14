'use client'

import { LucideIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardMinimalProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  className?: string
}

export default function ServiceCardMinimal({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  className
}: ServiceCardMinimalProps) {
  return (
    <div className={cn("group h-full", className)}>
      <div className="relative p-8 h-full bg-white border border-minimal-light-gray rounded-2xl hover:border-minimal-deep-black hover:shadow-lg transition-all duration-500">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-14 h-14 bg-minimal-off-white rounded-xl flex items-center justify-center group-hover:bg-minimal-deep-black transition-all duration-500">
            <Icon className="w-7 h-7 text-minimal-deep-black group-hover:text-white transition-all duration-500" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-semibold text-minimal-deep-black mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-minimal-dark-gray mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Features List */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-minimal-deep-black mt-2 flex-shrink-0" />
              <span className="text-minimal-dark-gray">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-4 border-t border-minimal-light-gray">
          <button className="group/btn inline-flex items-center gap-2 text-minimal-deep-black font-medium hover:gap-3 transition-all duration-300">
            <span>En savoir plus</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  )
}
