'use client'

import { LucideIcon, ArrowRight, Check, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  className?: string
  gradient?: string
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  className,
  gradient = 'from-blue-500 to-cyan-500'
}: ServiceCardProps) {
  return (
    <div className={cn(
      "group h-full perspective-1000",
      className
    )}>
      <div className="relative p-8 h-full bg-white border-2 border-slate-200 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ease-out overflow-hidden transform-gpu" style={{transformStyle: 'preserve-3d', transform: 'perspective(1000px)'}}>
        {/* 3D Hover Effect */}
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{transformStyle: 'preserve-3d'}} />
        
        {/* Animated gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        <div className="relative z-10 transition-transform duration-500 group-hover:translate-z-10" style={{transformStyle: 'preserve-3d'}}>
        {/* Animated Icon */}
        <div className="mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out shadow-lg group-hover:shadow-xl`}>
            <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-500" />
          </div>
        </div>
        
        {/* Animated Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>

        {/* Animated Description */}
        <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Animated Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 0.1}s`}}>
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300`}>
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Animated CTA Button */}
        <button className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1`}>
          <span>Află Mai Multe</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-all duration-300" />
        </button>
        </div>
      </div>
    </div>
  )
}