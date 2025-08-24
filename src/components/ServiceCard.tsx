'use client'

import { LucideIcon, ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  className?: string
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  className 
}: ServiceCardProps) {
  return (
    <div className={cn(
      "group relative bg-white/90 backdrop-blur-2xl rounded-3xl p-10 shadow-xl hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-700 border border-slate-200/60 hover:border-blue-300/60 hover:-translate-y-4 hover:scale-[1.02] overflow-hidden",
      className
    )}>
      {/* Luxury Background Image */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <div className="w-full h-full bg-[url('/images/luxury-service-bg.svg')] bg-cover bg-center" />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-indigo-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
      
      {/* Icon */}
      <div className="relative mb-10">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center group-hover:from-blue-500 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-700 group-hover:scale-125 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/30 animate-glow">
            <Icon className="w-12 h-12 text-blue-600 group-hover:text-white transition-all duration-700 group-hover:scale-110" />
          </div>
          {/* Icon glow effect */}
          <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mb-10">
        <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-all duration-500 group-hover:scale-105 transform-gpu">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-xl font-light group-hover:text-slate-700 transition-colors duration-500">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="relative space-y-4 mb-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4 group/feature">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/feature:from-emerald-500 group-hover/feature:to-green-500 transition-all duration-300">
              <Check className="w-4 h-4 text-emerald-600 group-hover/feature:text-white transition-colors duration-300" />
            </div>
            <span className="text-slate-700 font-medium group-hover/feature:text-slate-900 transition-colors duration-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="group/btn relative w-full flex items-center justify-center space-x-4 bg-gradient-to-r from-slate-50 via-white to-blue-50 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 text-slate-700 hover:text-white py-6 px-10 rounded-3xl transition-all duration-700 font-bold text-xl border-2 border-slate-200/60 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-1 overflow-hidden transform-gpu">
        <span className="relative z-10 group-hover/btn:scale-105 transition-transform duration-300">Află Mai Multe</span>
        <ArrowRight className="relative z-10 w-6 h-6 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
      </button>
    </div>
  )
}