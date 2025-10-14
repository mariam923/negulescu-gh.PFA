'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroMinimal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-32 text-center">
        <div className="space-y-12">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-minimal-light-gray bg-minimal-off-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-minimal-accent-blue animate-pulse" />
            <span className="text-sm text-minimal-dark-gray font-medium">Qualité Premium depuis 2008</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-6xl sm:text-7xl lg:text-8xl font-bold text-minimal-deep-black leading-[1.1] tracking-tight transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Fenêtres et portes
            <br />
            <span className="text-minimal-medium-gray">d'exception</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-xl sm:text-2xl text-minimal-dark-gray max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Design intemporel, artisanat d'exception et performance énergétique.
            <br />
            Pour transformer votre espace de vie.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-minimal-deep-black text-white rounded-minimal font-medium hover:bg-minimal-black transition-all duration-300 hover:shadow-lg"
            >
              <span>Commencer un projet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/portofoliu"
              className="inline-flex items-center gap-2 px-8 py-4 border border-minimal-light-gray text-minimal-deep-black rounded-minimal font-medium hover:border-minimal-deep-black transition-all duration-300"
            >
              Voir nos réalisations
            </Link>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { value: '15+', label: 'Ans d\'expérience' },
              { value: '2000+', label: 'Projets réalisés' },
              { value: '98%', label: 'Clients satisfaits' },
              { value: '5★', label: 'Note moyenne' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-minimal-deep-black">{stat.value}</div>
                <div className="text-sm text-minimal-medium-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-minimal-light-gray rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-minimal-deep-black rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
