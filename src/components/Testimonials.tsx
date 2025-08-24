'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    location: 'București',
    rating: 5,
    text: 'Sunt extrem de mulțumită de serviciile Negulescu! Ferestrele PVC montate sunt de o calitate excepțională, iar echipa a fost foarte profesionistă. Montajul s-a făcut rapid și curat. Recomand cu încredere!',
    service: 'Ferestre PVC',
    avatar: 'MP'
  },
  {
    id: 2,
    name: 'Alexandru Ionescu',
    location: 'Cluj-Napoca',
    rating: 5,
    text: 'Am înlocuit toate ferestrele și ușa de intrare. Rezultatul a depășit așteptările! Izolația termică s-a îmbunătățit considerabil, iar aspectul casei arată fantastic. Prețurile sunt foarte competitive.',
    service: 'Ferestre + Ușă de intrare',
    avatar: 'AI'
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    location: 'Timișoara',
    rating: 5,
    text: 'Consultanța gratuită a fost foarte utilă. M-au ajutat să aleg cele mai potrivite soluții pentru casa mea. Montajul a fost impecabil, iar garanția de 10 ani îmi oferă liniște sufletească.',
    service: 'Consultanță + Ferestre',
    avatar: 'ED'
  },
  {
    id: 4,
    name: 'Mihai Georgescu',
    location: 'Iași',
    rating: 5,
    text: 'Profesionalism de top! De la măsurători la montaj, totul a fost perfect organizat. Ferestrele din aluminiu arată minunat și sunt foarte funcționale. Mulțumesc echipei Negulescu!',
    service: 'Ferestre Aluminiu',
    avatar: 'MG'
  },
  {
    id: 5,
    name: 'Ana Stoica',
    location: 'Constanța',
    rating: 5,
    text: 'Am ales Negulescu pentru renovarea completă a ferestrelor. Calitatea materialelor și atenția la detalii m-au impresionat. Casa arată ca nouă! Recomand cu drag tuturor.',
    service: 'Renovare completă',
    avatar: 'AS'
  },
  {
    id: 6,
    name: 'Radu Marinescu',
    location: 'Brașov',
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('/images/luxury-testimonials-bg.svg')] bg-cover bg-center animate-float-slow" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-indigo-900/90" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-4 h-4 bg-yellow-400/50 rounded-full animate-float" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-300/40 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-indigo-300/30 rounded-full animate-float-slow" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-300/50 rounded-full animate-float" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-glow">
            Ce Spun Clienții
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"> Noștri</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Peste 500 de familii și-au transformat casele cu ajutorul nostru. 
            Iată ce spun despre experiența lor luxuriantă.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden border border-white/20">
            {/* Luxury Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-full -translate-y-20 translate-x-20 animate-float-slow" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-600/10 rounded-full translate-y-16 -translate-x-16 animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-indigo-600/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float" />
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
            
            <div className="flex flex-col items-center text-center relative z-10">
              {/* Quote Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-110 animate-glow">
                <Quote className="w-10 h-10 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-10">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-300 animate-glow" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-10 max-w-4xl font-light italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-110 animate-glow">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  {/* Avatar glow effect */}
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-0 hover:opacity-30 transition-opacity duration-500 blur-xl" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-600 mb-4 text-lg font-medium">
                  📍 {testimonials[currentIndex].location}
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
                "rounded-full transition-all duration-500 hover:scale-125",
                index === currentIndex 
                  ? "w-12 h-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg animate-shimmer" 
                  : "w-4 h-4 bg-white/50 hover:bg-white/80 shadow-md"
              )}
              aria-label={`Mergi la recenzia ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-4xl mx-auto">
          <div className="text-center group hover:scale-110 transition-all duration-500">
            <div className="text-5xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">4.9/5</div>
            <div className="text-blue-100 font-semibold text-lg group-hover:text-white transition-colors duration-300">Rating mediu</div>
          </div>
          <div className="text-center group hover:scale-110 transition-all duration-500">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">500+</div>
            <div className="text-blue-100 font-semibold text-lg group-hover:text-white transition-colors duration-300">Recenzii pozitive</div>
          </div>
          <div className="text-center group hover:scale-110 transition-all duration-500">
            <div className="text-5xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">98%</div>
            <div className="text-blue-100 font-semibold text-lg group-hover:text-white transition-colors duration-300">Clienți care recomandă</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Alătură-te clienților noștri mulțumiți!
          </p>
          <a
            href="https://wa.me/40123456789?text=Vreau%20să%20aflu%20mai%20multe%20despre%20serviciile%20dumneavoastră!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
          >
            Contactează-ne pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}