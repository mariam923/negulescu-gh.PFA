'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    year: '2024',
    rating: 5,
    text: 'Sunt extrem de mulțumită de serviciile Negulescu! Ferestrele PVC montate sunt de o calitate excepțională, iar echipa a fost foarte profesionistă. Montajul s-a făcut rapid și curat. Recomand cu încredere!',
    service: 'Ferestre PVC',
    avatar: 'MP'
  },
  {
    id: 2,
    name: 'Alexandru Ionescu',
    year: '2024',
    rating: 5,
    text: 'Am înlocuit toate ferestrele și ușa de intrare. Rezultatul a depășit așteptările! Izolația termică s-a îmbunătățit considerabil, iar aspectul casei arată fantastic. Serviciile sunt de calitate superioară.',
    service: 'Ferestre + Ușă de intrare',
    avatar: 'AI'
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    year: '2023',
    rating: 5,
    text: 'Consultanța gratuită a fost foarte utilă. M-au ajutat să aleg cele mai potrivite soluții pentru casa mea. Montajul a fost impecabil, iar garanția de 10 ani îmi oferă liniște sufletească.',
    service: 'Consultanță + Ferestre',
    avatar: 'ED'
  },
  {
    id: 4,
    name: 'Mihai Georgescu',
    year: '2023',
    rating: 5,
    text: 'Profesionalism de top! De la măsurători la montaj, totul a fost perfect organizat. Ferestrele din aluminiu arată minunat și sunt foarte funcționale. Mulțumesc echipei Negulescu!',
    service: 'Ferestre Aluminiu',
    avatar: 'MG'
  },
  {
    id: 5,
    name: 'Ana Stoica',
    year: '2024',
    rating: 5,
    text: 'Am ales Negulescu pentru renovarea completă a ferestrelor. Calitatea materialelor și atenția la detalii m-au impresionat. Casa arată ca nouă! Recomand cu drag tuturor.',
    service: 'Renovare completă',
    avatar: 'AS'
  },
  {
    id: 6,
    name: 'Radu Marinescu',
    year: '2023',
    rating: 5,
    text: 'Serviciu impecabil de la început până la sfârșit. Echipa a fost punctuală, curată și foarte competentă. Ușile interior montate sunt de o calitate superioară. Mulțumesc!',
    service: 'Uși interior',
    avatar: 'RM'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Increased to 6 seconds for better luxury feel

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden border-t border-slate-200">
      {/* Professional Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/images/luxury-testimonials-bg.svg')] bg-cover bg-center" />
      </div>
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-slate-50/40 to-blue-50/60" />
      
      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-4 h-4 bg-blue-400/20 rounded-full" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-slate-400/15 rounded-full" />
        <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-blue-300/20 rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-slate-300/25 rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 font-display tracking-tight">
            Ce Spun Clienții
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"> Noștri</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Peste 500 de familii și-au transformat casele cu ajutorul nostru. 
            Iată ce spun despre experiența lor profesională.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden border border-white/20">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-slate-400/10 to-slate-600/5 rounded-full translate-y-16 -translate-x-16" />
            <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-blue-400/5 to-slate-600/3 rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            {/* Subtle Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-slate-500/5 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex flex-col items-center text-center relative z-10">
              {/* Quote Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-8 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                <Quote className="w-10 h-10 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-10">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-300" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-10 max-w-4xl font-light italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2 hover:text-blue-600 transition-colors duration-300 font-display">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-600 mb-4 text-lg font-medium">
                  📅 {testimonials[currentIndex].year}
                </p>
                <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  {testimonials[currentIndex].service}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-500 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 hover:-translate-y-1 border border-white/50"
            aria-label="Recenzia anterioară"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-500 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 hover:-translate-y-1 border border-white/50"
            aria-label="Recenzia următoare"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={cn(
                "rounded-full transition-all duration-300 hover:scale-110",
                index === currentIndex 
                  ? "w-12 h-4 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg" 
                  : "w-4 h-4 bg-slate-300 hover:bg-slate-400 shadow-md"
              )}
              aria-label={`Mergi la recenzia ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-4xl mx-auto">
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300 font-display tracking-tight">4.9/5</div>
            <div className="text-slate-600 font-semibold text-lg group-hover:text-slate-800 transition-colors duration-300">Rating mediu</div>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300 font-display tracking-tight">500+</div>
            <div className="text-slate-600 font-semibold text-lg group-hover:text-slate-800 transition-colors duration-300">Recenzii pozitive</div>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300 font-display tracking-tight">98%</div>
            <div className="text-slate-600 font-semibold text-lg group-hover:text-slate-800 transition-colors duration-300">Clienți care recomandă</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Alătură-te clienților noștri mulțumiți!
          </p>
          <a
            href="https://wa.me/40763564072?text=Bună%20ziua!%20Vreau%20să%20aflu%20mai%20multe%20despre%20serviciile%20dumneavoastră."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Contactează-ne pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}